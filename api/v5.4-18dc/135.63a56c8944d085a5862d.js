(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{U89g:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});var l=n("CcnG"),a=(n("d2mR"),n("Ip0R"),l.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return l.mb(0,[],null,null)}},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return a}),n("wZee"),n("XIHC");var l=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},vyjf:function(e,t,n){"use strict";n.r(t);var l=n("CcnG"),a=function(){},i=n("gTgE"),r=n("pMnS"),u=n("U89g"),o=n("d2mR"),s=n("O4vx"),c=n("gIcY"),d=n("Ip0R"),g=function(){function e(e){this.http=e,this.toggleMsgArray=[],this.getHtmlAndTypeScriptCode()}return e.prototype.onSquareToggleClick=function(e){this.toggleMsgArray.push("Square Toggle Click")},e.prototype.getHtmlAndTypeScriptCode=function(){var e,t,n=this;this.http.get("assets/data/code/forms/toggle/form.html",{responseType:"text"}).subscribe(function(t){e=t},function(e){},function(){n.htmlCode=e}),this.http.get("assets/data/code/forms/toggle/form.text",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){n.typeScriptCode=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),p=n("t/Na"),h=l.Qa({encapsulation:2,styles:[],data:{}});function m(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),l.Ra(2,4243456,null,0,o.a,[l.F,l.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.htmlCode,"html")},null)}function b(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),l.Ra(2,4243456,null,0,o.a,[l.F,l.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.typeScriptCode,"typescript")},null)}function f(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,103,"amexio-card",[["header","true"]],null,null,null,i.bc,i.k)),l.Ra(1,5488640,null,3,s.j,[l.F],{header:[0,"header"]},null),l.ib(603979776,1,{amexioHeader:1}),l.ib(603979776,2,{amexioBody:1}),l.ib(603979776,3,{amexioFooter:1}),(e()(),l.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),l.Ra(6,114688,[[1,4]],0,s.B,[],null,null),(e()(),l.kb(-1,0,[" Toggle Switch "])),(e()(),l.Sa(8,0,null,1,95,"amexio-body",[],null,null,null,i.Vb,i.e)),l.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(e()(),l.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),l.kb(-1,null,["Toggle Switches are checkboxes with a toggle switch UI."])),(e()(),l.Sa(12,0,null,0,91,"amexio-tab-view",[],null,null,null,i.xc,i.G)),l.Ra(13,5488640,null,2,s.R,[l.F,l.k,l.F],null,null),l.ib(603979776,4,{queryTabs:1}),l.ib(603979776,5,{queryAction:1}),(e()(),l.Sa(16,0,null,1,35,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.yc,i.H)),l.Ra(17,114688,[[4,4]],0,s.S,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),l.Sa(18,0,null,0,33,"amexio-row",[],null,null,null,i.tc,i.C)),l.Ra(19,1163264,null,0,s.N,[],null,null),(e()(),l.Sa(20,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,i.dc,i.m)),l.Ra(21,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),l.Sa(22,0,null,0,13,"amexio-card",[],null,null,null,i.bc,i.k)),l.Ra(23,5488640,null,3,s.j,[l.F],{header:[0,"header"]},null),l.ib(603979776,6,{amexioHeader:1}),l.ib(603979776,7,{amexioBody:1}),l.ib(603979776,8,{amexioFooter:1}),(e()(),l.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),l.Ra(28,114688,[[6,4]],0,s.B,[],null,null),(e()(),l.kb(-1,0,[" Round Toggle "])),(e()(),l.Sa(30,0,null,1,5,"amexio-body",[],null,null,null,i.Vb,i.e)),l.Ra(31,114688,[[7,4]],0,s.d,[],null,null),(e()(),l.Sa(32,0,null,0,3,"amexio-toggle",[],null,null,null,i.ee,i.Nb)),l.hb(5120,null,c.p,function(e){return[e]},[s.Ic]),l.hb(5120,null,c.o,function(e){return[e]},[s.Ic]),l.Ra(35,114688,null,0,s.Ic,[],{fieldlabel:[0,"fieldlabel"]},null),(e()(),l.Sa(36,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,i.dc,i.m)),l.Ra(37,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),l.Sa(38,0,null,0,13,"amexio-card",[],null,null,null,i.bc,i.k)),l.Ra(39,5488640,null,3,s.j,[l.F],{header:[0,"header"]},null),l.ib(603979776,9,{amexioHeader:1}),l.ib(603979776,10,{amexioBody:1}),l.ib(603979776,11,{amexioFooter:1}),(e()(),l.Sa(43,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),l.Ra(44,114688,[[9,4]],0,s.B,[],null,null),(e()(),l.kb(-1,0,[" Square Toggle "])),(e()(),l.Sa(46,0,null,1,5,"amexio-body",[],null,null,null,i.Vb,i.e)),l.Ra(47,114688,[[10,4]],0,s.d,[],null,null),(e()(),l.Sa(48,0,null,0,3,"amexio-toggle",[["shape","square"]],null,[[null,"onChange"]],function(e,t,n){var l=!0;return"onChange"===t&&(l=!1!==e.component.onSquareToggleClick(n)&&l),l},i.ee,i.Nb)),l.hb(5120,null,c.p,function(e){return[e]},[s.Ic]),l.hb(5120,null,c.o,function(e){return[e]},[s.Ic]),l.Ra(51,114688,null,0,s.Ic,[],{shape:[0,"shape"],fieldlabel:[1,"fieldlabel"]},{onChange:"onChange"}),(e()(),l.Sa(52,0,null,1,32,"amexio-tab",[["title","API Reference"]],null,null,null,i.yc,i.H)),l.Ra(53,114688,[[4,4]],0,s.S,[],{title:[0,"title"]},null),(e()(),l.Sa(54,0,null,0,18,"amexio-datagrid",[["title","Properties <amexio-toggle>"]],null,null,null,i.Od,i.xb)),l.Ra(55,1294336,null,1,s.mc,[l.l,s.Qa,l.i,l.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),l.ib(603979776,12,{columnRef:1}),(e()(),l.Sa(57,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),l.Ra(58,49152,[[12,4]],2,s.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,13,{headerTemplate:0}),l.ib(335544320,14,{bodyTemplate:0}),(e()(),l.Sa(61,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),l.Ra(62,49152,[[12,4]],2,s.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,15,{headerTemplate:0}),l.ib(335544320,16,{bodyTemplate:0}),(e()(),l.Sa(65,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),l.Ra(66,49152,[[12,4]],2,s.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,17,{headerTemplate:0}),l.ib(335544320,18,{bodyTemplate:0}),(e()(),l.Sa(69,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),l.Ra(70,49152,[[12,4]],2,s.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,19,{headerTemplate:0}),l.ib(335544320,20,{bodyTemplate:0}),(e()(),l.Sa(73,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),l.Sa(74,0,null,0,10,"amexio-datagrid",[["title","Events"]],null,null,null,i.Od,i.xb)),l.Ra(75,1294336,null,1,s.mc,[l.l,s.Qa,l.i,l.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),l.ib(603979776,21,{columnRef:1}),(e()(),l.Sa(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),l.Ra(78,49152,[[21,4]],2,s.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,22,{headerTemplate:0}),l.ib(335544320,23,{bodyTemplate:0}),(e()(),l.Sa(81,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Pd,i.yb)),l.Ra(82,49152,[[21,4]],2,s.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,24,{headerTemplate:0}),l.ib(335544320,25,{bodyTemplate:0}),(e()(),l.Sa(85,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.yc,i.H)),l.Ra(86,114688,[[4,4]],0,s.S,[],{title:[0,"title"]},null),(e()(),l.Sa(87,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),l.Sa(88,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.Ac,i.J)),l.Ra(89,5357568,null,1,s.W,[l.F],null,null),l.ib(603979776,26,{queryTabs:1}),(e()(),l.Sa(91,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.yc,i.H)),l.Ra(92,114688,[[26,4]],0,s.S,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),l.Ja(16777216,null,0,1,null,m)),l.Ra(94,16384,null,0,d.m,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(e()(),l.Sa(95,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.yc,i.H)),l.Ra(96,114688,[[26,4]],0,s.S,[],{title:[0,"title"]},null),(e()(),l.Ja(16777216,null,0,1,null,b)),l.Ra(98,16384,null,0,d.m,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(e()(),l.Sa(99,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.yc,i.H)),l.Ra(100,114688,[[4,4]],0,s.S,[],{title:[0,"title"]},null),(e()(),l.Sa(101,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),l.kb(-1,null,["Amexio Sandbox"])),(e()(),l.Sa(103,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-toggle?embed=1&file=app/forms/toggle/toggle.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(e()(),l.Sa(104,0,null,null,2,"amexio-notification",[],null,[["window","keyup.esc"]],function(e,t,n){var a=!0;return"window:keyup.esc"===t&&(a=!1!==l.cb(e,105).keyEvent(n)&&a),a},i.pc,i.y)),l.Ra(105,114688,null,1,s.I,[l.i],{messageData:[0,"messageData"],verticalposition:[1,"verticalposition"],horizontalposition:[2,"horizontalposition"]},null),l.ib(335544320,27,{notificationTemplate:0})],function(e,t){var n=t.component;e(t,1,0,"true"),e(t,6,0),e(t,9,0),e(t,13,0),e(t,17,0,"Demo","true"),e(t,19,0),e(t,21,0,6),e(t,23,0,!0),e(t,28,0),e(t,31,0),e(t,35,0,"Round"),e(t,37,0,6),e(t,39,0,!0),e(t,44,0),e(t,47,0),e(t,51,0,"square","Square"),e(t,53,0,"API Reference"),e(t,55,0,"Properties <amexio-toggle>","assets/apireference/forms/toggle.json","get","properties",!1,!1),e(t,58,0,"Name","name",!1,"string",15),e(t,62,0,"Type","type",!1,"string",10),e(t,66,0,"Default","default",!1,"string",10),e(t,70,0,"Description","description",!1,"string",65),e(t,75,0,"Events","assets/apireference/forms/toggle.json","get","events",!1),e(t,78,0,"Name","name",!1,"string",20),e(t,82,0,"Description","description",!1,"string",80),e(t,86,0,"Source"),e(t,89,0),e(t,92,0,"HTML",!0),e(t,94,0,n.htmlCode),e(t,96,0,"Type Script"),e(t,98,0,n.typeScriptCode),e(t,100,0,"Live"),e(t,105,0,n.toggleMsgArray,"top","right")},function(e,t){e(t,20,0,l.cb(t,21).role),e(t,36,0,l.cb(t,37).role)})}var y=l.Oa("toggle-demo",g,function(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,1,"toggle-demo",[],null,null,null,f,h)),l.Ra(1,49152,null,0,g,[p.c],null,null)],null,null)},{},{},[]),x=n("ZYCi");n.d(t,"ToggleDemoModuleNgFactory",function(){return v});var v=l.Pa(a,[],function(e){return l.Za([l.ab(512,l.k,l.Ea,[[8,[i.a,r.a,y]],[3,l.k],l.z]),l.ab(4608,d.o,d.n,[l.w,[2,d.x]]),l.ab(4608,c.G,c.G,[]),l.ab(4608,p.i,p.o,[d.d,l.D,p.m]),l.ab(4608,p.p,p.p,[p.i,p.n]),l.ab(5120,p.a,function(e){return[e]},[p.p]),l.ab(4608,p.l,p.l,[]),l.ab(6144,p.j,null,[p.l]),l.ab(4608,p.h,p.h,[p.j]),l.ab(6144,p.b,null,[p.h]),l.ab(4608,p.f,p.k,[p.b,l.s]),l.ab(4608,p.c,p.c,[p.f]),l.ab(4608,s.Qa,s.Qa,[p.c]),l.ab(4608,s.ab,s.ab,[l.D]),l.ab(4608,s.jb,s.jb,[]),l.ab(4608,s.A,s.A,[]),l.ab(4608,s.Db,s.Db,[]),l.ab(4608,c.f,c.f,[]),l.ab(1073742336,d.c,d.c,[]),l.ab(1073742336,c.D,c.D,[]),l.ab(1073742336,c.l,c.l,[]),l.ab(1073742336,p.e,p.e,[]),l.ab(1073742336,p.d,p.d,[]),l.ab(1073742336,o.b,o.b,[]),l.ab(1073742336,s.C,s.C,[]),l.ab(1073742336,s.x,s.x,[]),l.ab(1073742336,s.F,s.F,[]),l.ab(1073742336,s.H,s.H,[]),l.ab(1073742336,c.z,c.z,[]),l.ab(1073742336,s.K,s.K,[]),l.ab(1073742336,s.p,s.p,[]),l.ab(1073742336,s.Y,s.Y,[]),l.ab(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),l.ab(1073742336,a,a,[]),l.ab(256,p.m,"XSRF-TOKEN",[]),l.ab(256,p.n,"X-XSRF-TOKEN",[]),l.ab(1024,x.i,function(){return[[{path:"",component:g,pathMatch:"full"}]]},[])])})},wZee:function(e,t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},l=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,l=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,l.util.encode(e.content),e.alias):"Array"===l.util.type(e)?e.map(l.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=l.util.type(e);switch(t=t||{},n){case"Object":if(t[l.util.objId(e)])return t[l.util.objId(e)];var a={};for(var i in t[l.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=l.util.clone(e[i],t));return a;case"Array":return t[l.util.objId(e)]?t[l.util.objId(e)]:(a=[],t[l.util.objId(e)]=a,e.forEach(function(e,n){a[n]=l.util.clone(e,t)}),a)}return e}},languages:{extend:function(e,t){var n=l.util.clone(l.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var i=(a=a||l.languages)[e];if(2==arguments.length){for(var r in n=arguments[1])n.hasOwnProperty(r)&&(i[r]=n[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var r in n)n.hasOwnProperty(r)&&(u[r]=n[r]);u[o]=i[o]}return l.languages.DFS(l.languages,function(t,n){n===a[e]&&t!=e&&(this[t]=u)}),a[e]=u},DFS:function(e,t,n,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==l.util.type(e[i])||a[l.util.objId(e[i])]?"Array"!==l.util.type(e[i])||a[l.util.objId(e[i])]||(a[l.util.objId(e[i])]=!0,l.languages.DFS(e[i],t,i,a)):(a[l.util.objId(e[i])]=!0,l.languages.DFS(e[i],t,null,a)))}},plugins:{},highlightAll:function(e,t){l.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",a);for(var i,r=a.elements||e.querySelectorAll(a.selector),u=0;i=r[u++];)l.highlightElement(i,!0===t,a.callback)},highlightElement:function(t,a,i){for(var r,u,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=l.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&/pre/i.test((o=t.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:t,language:r,grammar:u,code:t.textContent};if(l.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(l.hooks.run("before-highlight",s),s.element.textContent=s.code,l.hooks.run("after-highlight",s)),void l.hooks.run("complete",s);if(l.hooks.run("before-highlight",s),a&&n.Worker){var c=new Worker(l.filename);c.onmessage=function(e){s.highlightedCode=e.data,l.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),l.hooks.run("after-highlight",s),l.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=l.highlight(s.code,s.grammar,s.language),l.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(t),l.hooks.run("after-highlight",s),l.hooks.run("complete",s)},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return l.hooks.run("before-tokenize",i),i.tokens=l.tokenize(i.code,i.grammar),l.hooks.run("after-tokenize",i),a.stringify(l.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,a,i,r,u){var o=l.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==u)return;var c=n[s];c="Array"===l.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],p=g.inside,h=!!g.lookbehind,m=!!g.greedy,b=0,f=g.alias;if(m&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var x=a,v=i;x<t.length;v+=t[x].length,++x){var k=t[x];if(t.length>e.length)return;if(!(k instanceof o)){if(m&&x!=t.length-1){if(g.lastIndex=v,!(C=g.exec(e)))break;for(var w=C.index+(h?C[1].length:0),S=C.index+C[0].length,F=x,A=v,R=t.length;F<R&&(A<S||!t[F].type&&!t[F-1].greedy);++F)w>=(A+=t[F].length)&&(++x,v=A);if(t[x]instanceof o)continue;T=F-x,k=e.slice(v,A),C.index-=v}else{g.lastIndex=0;var C=g.exec(k),T=1}if(C){h&&(b=C[1]?C[1].length:0),S=(w=C.index+b)+(C=C[0].slice(b)).length;var j=k.slice(0,w),N=k.slice(S),P=[x,T];j&&(++x,v+=j.length,P.push(j));var I=new o(s,p?l.tokenize(C,p):C,f,C,m);if(P.push(I),N&&P.push(N),Array.prototype.splice.apply(t,P),1!=T&&l.matchGrammar(e,t,n,x,v,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,t,n){var a=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return l.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var n=l.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=l.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}}},a=l.Token=function(e,t,n,l,a){this.type=e,this.content=t,this.alias=n,this.length=0|(l||"").length,this.greedy=!!a};if(a.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===l.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var r="Array"===l.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}l.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(l.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,i=t.immediateClose;n.postMessage(l.highlight(t.code,l.languages[a],a)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(l.filename=i.src,l.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(l.highlightAll):window.setTimeout(l.highlightAll,16):document.addEventListener("DOMContentLoaded",l.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=l),"undefined"!=typeof global&&(global.Prism=l),l.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),l.languages.xml=l.languages.markup,l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},l.languages.css.atrule.inside.rest=l.languages.css,l.languages.markup&&(l.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:l.languages.css,alias:"language-css",greedy:!0}}),l.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:l.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:l.languages.css}},alias:"language-css"}},l.languages.markup.tag)),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),l.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),l.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),l.languages.javascript["template-string"].inside.interpolation.inside.rest=l.languages.javascript,l.languages.markup&&l.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:l.languages.javascript,alias:"language-javascript",greedy:!0}}),l.languages.js=l.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,a=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(t.className.match(r)||[,""])[1]),!n){var u=(a.match(/\.(\w+)$/)||[,""])[1];n=e[u]||u}var o=document.createElement("code");o.className="language-"+n,t.textContent="",o.textContent="Loading\u2026",t.appendChild(o);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,l.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),l.plugins.toolbar&&l.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),l=document.createElement("a");return l.textContent=t.getAttribute("data-download-link-label")||"Download",l.setAttribute("download",""),l.href=n,l}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);