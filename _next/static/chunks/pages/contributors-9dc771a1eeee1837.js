(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{8953:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contributors",function(){return t(958)}])},967:function(e,n,t){"use strict";var s=t(1527);t(959);var i=t(6125),r=t(2349);let o={logo:(0,s.jsx)("div",{style:{paddingLeft:"50px",lineHeight:"38px",background:"url(/qbox-duck.png) no-repeat left",backgroundSize:"38px",fontWeight:550},children:"Qbox"}),project:{link:"https://github.com/Qbox-project"},chat:{link:"https://discord.gg/qbox"},docsRepositoryBase:"https://github.com/Qbox-project/qbox-project.github.io",footer:{text:"Qbox Project"},primaryHue:{dark:200,light:200},head:function(){let{asPath:e}=(0,r.useRouter)(),{frontMatter:n,title:t}=(0,i.ZR)(),o=n.description||"Documentation for the Qbox Project";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/qbox-duck.ico"}),(0,s.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,s.jsx)("meta",{name:"description",content:o}),(0,s.jsx)("meta",{name:"og:title",content:t}),(0,s.jsx)("meta",{name:"og:description",content:o}),(0,s.jsx)("meta",{name:"og:url",content:"https://qbox-project.github.io".concat(e)})]})},useNextSeoProps:function(){let{asPath:e}=(0,r.useRouter)(),n=e.replace(/[-_]/g," ").split("/"),t="#"!==n[1][0]&&n[1]||"Qbox",s=n[n.length-1],i=/[a-z]/.test(s)&&/[A-Z]/.test(s)?s:"%s";return{titleTemplate:"".concat(i," - ").concat(s===t?"Documentation":t.replace(/(^\w|\s\w)/g,e=>e.toUpperCase()))}}};n.Z=o},958:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return l}});var s=t(1527),i=t(3630),r=t(6125),o=t(967);t(4552);var a=t(6119);let l=[{depth:3,value:"Table of Contents",id:"table-of-contents"},{depth:2,value:"Code of Conduct",id:"code-of-conduct"},{depth:2,value:"I don't want to read this whole thing I just have a question!!!",id:"i-dont-want-to-read-this-whole-thing-i-just-have-a-question"},{depth:2,value:"How Can I Contribute?",id:"how-can-i-contribute"},{depth:3,value:"Reporting Bugs",id:"reporting-bugs"},{depth:4,value:"Before Submitting A Bug Report",id:"before-submitting-a-bug-report"},{depth:4,value:"How Do I Submit A (Good) Bug Report?",id:"how-do-i-submit-a-good-bug-report"},{depth:3,value:"Suggesting Features / Enhancements",id:"suggesting-features--enhancements"},{depth:4,value:"Before Submitting An Enhancement Suggestion",id:"before-submitting-an-enhancement-suggestion"},{depth:4,value:"How Do I Submit A (Good) Enhancement Suggestion?",id:"how-do-i-submit-a-good-enhancement-suggestion"},{depth:3,value:"Your First Code Contribution",id:"your-first-code-contribution"},{depth:3,value:"Pull Requests",id:"pull-requests"},{depth:2,value:"Styleguides",id:"styleguides"},{depth:3,value:"Git Commit Messages",id:"git-commit-messages"},{depth:3,value:"Lua Styleguide",id:"lua-styleguide"},{depth:4,value:"Naming",id:"naming"},{depth:4,value:"Everything Else",id:"everything-else"},{depth:3,value:"TypeScript/JavaScript Styleguide",id:"typescriptjavascript-styleguide"}];function d(e){let n=Object.assign({h1:"h1",p:"p",a:"a",h3:"h3",ul:"ul",li:"li",h2:"h2",blockquote:"blockquote",strong:"strong",h4:"h4",em:"em",hr:"hr",code:"code",ol:"ol"},(0,a.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Contributing to Qbox"}),"\n",(0,s.jsx)(n.p,{children:"First of all, thank you for taking the time to contribute!"}),"\n",(0,s.jsx)(n.p,{children:"These guidelines will help you help us in the best way possible regardless of your skill level. We ask that you try to read everything related to the way you'd like to contribute and try and use your best judgement for anything not covered."}),"\n",(0,s.jsxs)(n.p,{children:['The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL\nNOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and\n"OPTIONAL" in this document are to be interpreted as described in\n',(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc2119",children:"RFC 2119"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"#code-of-conduct",children:"Code of Conduct"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"#i-dont-want-to-read-this-whole-thing-i-just-have-a-question",children:"I don't want to read this whole thing, I just have a question!!!"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"#how-can-i-contribute",children:"How Can I Contribute?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#reporting-bugs",children:"Reporting Bugs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#suggesting-features--enhancements",children:"Suggesting Features / Enhancements"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#your-first-code-contribution",children:"Your First Code Contribution"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#pull-requests",children:"Pull Requests"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"#styleguides",children:"Styleguides"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#git-commit-messages",children:"Git Commit Messages"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#lua-styleguide",children:"Lua Styleguide"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#javascript-styleguide",children:"JavaScript Styleguide"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"code-of-conduct",children:"Code of Conduct"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Refrain from using languages other than English."}),"\n",(0,s.jsx)(n.li,{children:"Refrain from discussing any politically charged or inflammatory topics."}),"\n",(0,s.jsx)(n.li,{children:"Uphold mature conversations and respect each other; excessive profanity, hate speech or any kind of harassment will not be tolerated."}),"\n",(0,s.jsx)(n.li,{children:"No advertising of any kind."}),"\n",(0,s.jsx)(n.li,{children:"Follow these guidelines."}),"\n",(0,s.jsx)(n.li,{children:"Do not mention members of github unless a question is directed at them and can't be answered by anyone else."}),"\n",(0,s.jsx)(n.li,{children:"Do not mention any of the development team for any reason. We will read things as we get to them."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"i-dont-want-to-read-this-whole-thing-i-just-have-a-question",children:"I don't want to read this whole thing I just have a question!!!"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Please don't file an issue to ask a question. You'll get faster results by using the resources below."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://discord.gg/Z6Whda5hHA",children:"Qbox Discord"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-can-i-contribute",children:"How Can I Contribute?"}),"\n",(0,s.jsx)(n.h3,{id:"reporting-bugs",children:"Reporting Bugs"}),"\n",(0,s.jsx)(n.p,{children:"The easiest way to contribute for most people is just to report bugs you find cause if nobody reports it there's a chance we'll never know it exists and then we'll never fix it."}),"\n",(0,s.jsxs)(n.p,{children:["Before creating bug reports, please check ",(0,s.jsx)(n.a,{href:"#before-submitting-a-bug-report",children:"this list"})," as you might find out that you don't need to create one. When you are creating a bug report, please ",(0,s.jsx)(n.a,{href:"#how-do-i-submit-a-good-bug-report",children:"include as many details as possible"}),". Fill out the bug-report template with the information it asks for helps us resolve issues faster."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If you find a ",(0,s.jsx)(n.strong,{children:"Closed"})," issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"before-submitting-a-bug-report",children:"Before Submitting A Bug Report"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Check the docs"})," There's a chance what you see as a bug might just work differently than you expect and if you think it could work better consider a feature enhancement report instead."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["Search the ",(0,s.jsx)(n.a,{href:"https://discord.gg/Z6Whda5hHA",children:"discord"})]})," to see if anyone else has run into the issue and see if it was solved through user error or code changes. (if the code change isn't pending a PR and you know what you're doing consider submitting one following ",(0,s.jsx)(n.a,{href:"#pull-requests",children:"Pull Requests"})," )"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Determine which resource the problem should be reported in"}),". If the bug is related to the inventory for example report this bug under qb-inventory rather than under qb-core or some other resource."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["Perform a ",(0,s.jsx)(n.a,{href:"https://github.com/search?q=is%3Aissue+user%3Aqbox-project",children:"cursory search"})]})," to see if the problem has already been reported. If it has ",(0,s.jsx)(n.strong,{children:"and the issue is still open"}),", add a comment to the existing issue instead of opening a new one."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"how-do-i-submit-a-good-bug-report",children:"How Do I Submit A (Good) Bug Report?"}),"\n",(0,s.jsxs)(n.p,{children:["Bugs are tracked as ",(0,s.jsx)(n.a,{href:"https://guides.github.com/features/issues/",children:"GitHub issues"}),". After you've determined which resource your bug is related to, create an issue on that repository and provide the following information by filling in bug-report template."]}),"\n",(0,s.jsx)(n.p,{children:"Explain the problem and include additional details to help maintainers reproduce the problem:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use a clear and descriptive title"})," for the issue to identify the problem."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Describe the exact steps which reproduce the problem"})," in as many details as possible."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Provide specific examples to demonstrate the steps"}),". If something happened with only a specific group or single item but not others, specify that."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Describe the behavior you observed after following the steps"})," and point out what exactly is the problem with that behavior."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Explain which behavior you expected to see instead and why."})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Include screenshots"})," which show the specific bug in action or before and after."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"If the problem wasn't triggered by a specific action"}),", describe what you were doing before the problem happened and share more information using the guidelines below."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Provide more context by answering these questions if possible:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Did the problem start happening recently"})," (e.g. after updating to a new version of Qbox?) or was this always a problem?"]}),"\n",(0,s.jsxs)(n.li,{children:["If the problem started happening recently, ",(0,s.jsx)(n.strong,{children:"can you reproduce the problem in an older version of Qbox?"})," What's the most recent commit in which the problem doesn't happen?"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Can you reliably reproduce the issue?"})," If not, provide details about how often the problem happens and under which conditions it normally happens."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Include details about your setup:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"When was your Qbox last updated?"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"What OS is the server running on"}),"?"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["Which ",(0,s.jsx)(n.em,{children:"extra"})," resources do you have installed?"]})}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"suggesting-features--enhancements",children:"Suggesting Features / Enhancements"}),"\n",(0,s.jsx)(n.p,{children:"This section guides you through submitting an enhancement suggestion for Qbox, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion."}),"\n",(0,s.jsxs)(n.p,{children:["Before creating enhancement suggestions, please check ",(0,s.jsx)(n.a,{href:"#before-submitting-an-enhancement-suggestion",children:"this list"})," as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please ",(0,s.jsx)(n.a,{href:"#how-do-i-submit-a-good-enhancement-suggestion",children:"include as many details as possible"}),". Fill in feature request template, including the steps that you imagine you would take if the feature you're requesting existed."]}),"\n",(0,s.jsx)(n.h4,{id:"before-submitting-an-enhancement-suggestion",children:"Before Submitting An Enhancement Suggestion"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Make sure it doesn't already exist."})," Sounds silly, but there's a lot of features built in to Qbox that people don't realize so take a look through the docs and stuff to make sure it's not already there."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Check if there's already PR which provides that enhancement."})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Determine which resource the enhancement should be suggested in."})," Whichever resource the suggestion is about, is where it should go. If the suggestion is about Qbox as a whole, make the suggestion in the qbx_core repository."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["Perform a ",(0,s.jsx)(n.a,{href:"https://github.com/search?q=is%3Aissue+user%3Aqbox-project++&type=issues&state=open",children:"cursory search"})]})," to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"how-do-i-submit-a-good-enhancement-suggestion",children:"How Do I Submit A (Good) Enhancement Suggestion?"}),"\n",(0,s.jsxs)(n.p,{children:["Enhancement suggestions are tracked as ",(0,s.jsx)(n.a,{href:"https://guides.github.com/features/issues/",children:"GitHub issues"}),". After you've determined which resource your enhancement suggestion is related to, create an issue on that repository and provide the following information:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use a clear and descriptive title"})," for the issue to identify the suggestion."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Provide a step-by-step description of the suggested enhancement"})," in as many details as possible."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Provide specific examples to demonstrate the steps"}),". Include copy/pasteable snippets which you use in those examples, as ",(0,s.jsx)(n.a,{href:"https://help.github.com/articles/markdown-basics/#multiple-lines",children:"Markdown code blocks"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Describe the current behavior"})," and ",(0,s.jsx)(n.strong,{children:"explain which behavior you expected to see instead"})," and why."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Include screenshots and animated GIFs"})," which help you demonstrate the steps or point out the part of Qbox which the suggestion is related to."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Explain why this enhancement would be useful."})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Be creative and unique."})," Stealing ideas from popular servers 1:1 detail isn't going to get accepted."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"your-first-code-contribution",children:"Your First Code Contribution"}),"\n",(0,s.jsxs)(n.p,{children:["Unsure where to begin contributing to Qbox? You can start by looking through open ",(0,s.jsx)(n.a,{href:"https://github.com/orgs/Qbox-project/projects/4",children:"issues"})," for ones marked ",(0,s.jsx)(n.code,{children:"beginner"})," or ",(0,s.jsx)(n.code,{children:"help-wanted"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"pull-requests",children:"Pull Requests"}),"\n",(0,s.jsx)(n.p,{children:"The process described here has several goals:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Maintain Qbox's quality."}),"\n",(0,s.jsx)(n.li,{children:"Fix problems that are important to users."}),"\n",(0,s.jsx)(n.li,{children:"Engage the community in working toward the best possible Qbox."}),"\n",(0,s.jsx)(n.li,{children:"Enable a sustainable system for Qbox's maintainers to review contributions."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Please follow these steps to have your contribution considered by the maintainers:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Follow all instructions in The Pull Request template."}),"\n",(0,s.jsxs)(n.li,{children:["Follow the ",(0,s.jsx)(n.a,{href:"#styleguides",children:"styleguides"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Make sure your PR is small and focused. Break it into multiple PRs if not! (",(0,s.jsx)(n.a,{href:"https://github.com/PlaytikaOSS/small-pull-request-manifesto",children:"https://github.com/PlaytikaOSS/small-pull-request-manifesto"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"Await review by the reviewer(s)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"While the prerequisites above SHOULD be satisfied prior to having your pull request reviewed, the reviewer(s) MAY ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"styleguides",children:"Styleguides"}),"\n",(0,s.jsx)(n.h3,{id:"git-commit-messages",children:"Git Commit Messages"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Limit the first line to 72 characters or less."}),"\n",(0,s.jsx)(n.li,{children:"Reference issues and pull requests liberally after the first line."}),"\n",(0,s.jsxs)(n.li,{children:["PR titles MUST follow ",(0,s.jsx)(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",children:"https://www.conventionalcommits.org/en/v1.0.0/"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"lua-styleguide",children:"Lua Styleguide"}),"\n",(0,s.jsx)(n.p,{children:"All lua code SHOULD be done using all the best practices of proper lua using the easiest to read yet fastest/most optimized methods of execution."}),"\n",(0,s.jsx)(n.h4,{id:"naming",children:"Naming"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.code,{children:"camelCase"})," for local variables, and functions"]}),"\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.code,{children:"PascalCase"})," for global variables and functions"]}),"\n",(0,s.jsx)(n.li,{children:"Avoid acronyms, as they can be confusing and context dependent"}),"\n",(0,s.jsx)(n.li,{children:'Be descriptive. Booleans can be prefixed with "is" or "has". Arrays SHOULD be named plural. Make it easy for the reader.'}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"everything-else",children:"Everything Else"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["All exported functions MUST include a properly annotated language server header. See ",(0,s.jsx)(n.a,{href:"https://github.com/sumneko/lua-language-server/wiki/Annotations",children:"https://github.com/sumneko/lua-language-server/wiki/Annotations"})]}),"\n",(0,s.jsx)(n.li,{children:"Use 4 Space indentation"}),"\n",(0,s.jsxs)(n.li,{children:["Utilize ",(0,s.jsx)(n.a,{href:"https://overextended.dev/ox_lib",children:"ox_lib"})," to make your life easier. Prefer lib calls over native ones."]}),"\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.code,{children:"#(vector3 - vector3)"})," instead of ",(0,s.jsx)(n.code,{children:"GetDistanceBetweenCoords()"})]}),"\n",(0,s.jsx)(n.li,{children:"Don't create unnecessary threads. always try to find a better method of triggering events"}),"\n",(0,s.jsx)(n.li,{children:"Don't repeat yourself.. if you're using the same operations in many different places convert them into a function with flexible variables"}),"\n",(0,s.jsx)(n.li,{children:"For distance checking loops set longer waits if you're outside of a range"}),"\n",(0,s.jsx)(n.li,{children:"Job specific loops SHOULD only run for players with that job, don't waste cycles"}),"\n",(0,s.jsx)(n.li,{children:"When possible don't trust the client, esspecially with transactions"}),"\n",(0,s.jsx)(n.li,{children:"Balance security and optimizations"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://springrts.com/wiki/Lua_Performance",children:"Consider this Lua Performance guide"})}),"\n",(0,s.jsx)(n.li,{children:"Prefer creating local variables over global ones"}),"\n",(0,s.jsx)(n.li,{children:"Make use of config options where it makes sense making features optional or customizable. Configs SHOULD NOT be modified by other code."}),"\n",(0,s.jsxs)(n.li,{children:["Instead of ",(0,s.jsx)(n.code,{children:'table.insert(myTable, "Value")'})," use ",(0,s.jsx)(n.code,{children:'myTable[#myTable + 1] = "Value"'})]}),"\n",(0,s.jsxs)(n.li,{children:["Instead of ",(0,s.jsx)(n.code,{children:'table.insert(ages, "bob", 30)'})," use ",(0,s.jsx)(n.code,{children:'ages["bob"] = 30'})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"typescriptjavascript-styleguide",children:"TypeScript/JavaScript Styleguide"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Consider following the ",(0,s.jsx)(n.a,{href:"https://google.github.io/styleguide/jsguide.html",children:"Google JavaScript Style Guide"})," and ",(0,s.jsx)(n.a,{href:"https://google.github.io/styleguide/tsguide.html",children:"Google TypeScript Style Guide"})]}),"\n"]})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/contributors.mdx",route:"/contributors",pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",resources:"Resources",converting:"Converting from QB",contributors:"Contributing",developers:"Developer's Guide",release:"Release Readiness",faq:"FAQ"}},{kind:"MdxPage",name:"contributors",route:"/contributors"},{kind:"MdxPage",name:"converting",route:"/converting"},{kind:"MdxPage",name:"developers",route:"/developers"},{kind:"MdxPage",name:"faq",route:"/faq"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"MdxPage",name:"release",route:"/release"},{kind:"Folder",name:"resources",route:"/resources",children:[{kind:"Folder",name:"core",route:"/resources/core",children:[{kind:"MdxPage",name:"Modules",route:"/resources/core/Modules"},{kind:"Meta",data:{functions:"Functions",events:"Events",Modules:"Modules",player:"Player"}},{kind:"Folder",name:"events",route:"/resources/core/events",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/resources/core/events/client"},{kind:"MdxPage",name:"server",route:"/resources/core/events/server"}]},{kind:"Folder",name:"functions",route:"/resources/core/functions",children:[{kind:"Meta",data:{client:"Client",server:"Server",shared:"Shared"}},{kind:"MdxPage",name:"client",route:"/resources/core/functions/client"},{kind:"MdxPage",name:"server",route:"/resources/core/functions/server"},{kind:"MdxPage",name:"shared",route:"/resources/core/functions/shared"}]},{kind:"MdxPage",name:"player",route:"/resources/core/player"}]},{kind:"Folder",name:"qbx_ambulancejob",route:"/resources/qbx_ambulancejob",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_ambulancejob/Events",children:[{kind:"MdxPage",name:"Client",route:"/resources/qbx_ambulancejob/Events/Client"},{kind:"MdxPage",name:"Server",route:"/resources/qbx_ambulancejob/Events/Server"},{kind:"Meta",data:{Client:"Client",Server:"Server"}}]}]},{kind:"Folder",name:"qbx_diving",route:"/resources/qbx_diving",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_diving/Events",children:[{kind:"MdxPage",name:"server",route:"/resources/qbx_diving/Events/server"},{kind:"Meta",data:{server:"Server"}}]}]},{kind:"Folder",name:"qbx_medical",route:"/resources/qbx_medical",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_medical/Events",children:[{kind:"MdxPage",name:"Server",route:"/resources/qbx_medical/Events/Server"},{kind:"Meta",data:{Server:"Server"}}]},{kind:"Folder",name:"Functions",route:"/resources/qbx_medical/Functions",children:[{kind:"MdxPage",name:"Client",route:"/resources/qbx_medical/Functions/Client"},{kind:"Folder",name:"Server",route:"/resources/qbx_medical/Functions/Server",children:[{kind:"MdxPage",name:"Hooks",route:"/resources/qbx_medical/Functions/Server/Hooks"},{kind:"Meta",data:{Hooks:"Hooks"}}]},{kind:"Meta",data:{Client:"Client"}}]}]}]},{kind:"MdxPage",name:"resources",route:"/resources"}],flexsearch:{codeblocks:!0},title:"Contributing to Qbox",headings:l},pageNextRoute:"/contributors",nextraLayout:r.ZP,themeConfig:o.Z};n.default=(0,i.j)(h)}},function(e){e.O(0,[791,774,888,179],function(){return e(e.s=8953)}),_N_E=e.O()}]);