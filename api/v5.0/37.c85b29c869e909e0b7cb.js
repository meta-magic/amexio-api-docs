(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{U89g:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return i});var l=t("CcnG"),a=(t("d2mR"),t("Ip0R"),l.La({encapsulation:2,styles:[],data:{}}));function i(e){return l.hb(0,[],null,null)}},XIHC:function(e,n){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,n,t){"use strict";t.d(n,"a",function(){return l}),t.d(n,"b",function(){return a}),t("wZee"),t("XIHC");var l=function(){function e(e,n){this._renderer=e,this._el=n,this.nativeElement=n.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},"dNr+":function(e,n,t){"use strict";t.r(n);var l=t("CcnG"),a=function(){},i=t("gTgE"),r=t("pMnS"),u=t("U89g"),o=t("d2mR"),s=t("O4vx"),d=t("Ip0R"),c=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,n,t=this;this.http.get("assets/data/code/data/paginator/paginator.html",{responseType:"text"}).subscribe(function(n){e=n},function(e){},function(){t.htmlCode=e}),this.http.get("assets/data/code/data/paginator/paginator.text",{responseType:"text"}).subscribe(function(e){n=e},function(e){},function(){t.typeScriptCode=n})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.loadPageData=function(e){this.currentPage=e},e}(),g=t("t/Na"),p=l.La({encapsulation:2,styles:[],data:{}});function h(e){return l.hb(0,[(e()(),l.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Na(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),l.Ma(2,4243456,null,0,o.a,[l.B,l.k],{code:[0,"code"],language:[1,"language"]},null)],function(e,n){e(n,2,0,n.component.htmlCode,"html")},null)}function m(e){return l.hb(0,[(e()(),l.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Na(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),l.Ma(2,4243456,null,0,o.a,[l.B,l.k],{code:[0,"code"],language:[1,"language"]},null)],function(e,n){e(n,2,0,n.component.typeScriptCode,"typescript")},null)}function f(e){return l.hb(0,[(e()(),l.Na(0,0,null,null,103,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,n,t){var a=!0;return"document:click"===n&&(a=!1!==l.Xa(e,1).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==l.Xa(e,1).onscroll()&&a),a},i.Lb,i.i)),l.Ma(1,5357568,null,3,s.h,[],{header:[0,"header"]},null),l.db(603979776,1,{amexioHeader:1}),l.db(603979776,2,{amexioBody:1}),l.db(603979776,3,{amexioFooter:1}),(e()(),l.Na(5,0,null,0,2,"amexio-header",[],null,null,null,i.Ub,i.r)),l.Ma(6,114688,[[1,4]],0,s.v,[],null,null),(e()(),l.fb(-1,0,[" Paginator "])),(e()(),l.Na(8,0,null,1,95,"amexio-body",[],null,null,null,i.Hb,i.e)),l.Ma(9,114688,[[2,4]],0,s.d,[],null,null),(e()(),l.Na(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),l.fb(-1,null,["Paginator is a generic widget to display content in paged format."])),(e()(),l.Na(12,16777216,null,0,91,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,n,t){var a=!0;return"document:click"===n&&(a=!1!==l.Xa(e,13).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==l.Xa(e,13).onscroll()&&a),a},i.fc,i.C)),l.Ma(13,5357568,null,2,s.L,[l.B,l.j,l.M],null,null),l.db(603979776,4,{queryTabs:1}),l.db(603979776,5,{queryAction:1}),(e()(),l.Na(16,0,null,1,35,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.gc,i.D)),l.Ma(17,114688,[[4,4]],0,s.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),l.Na(18,0,null,0,17,"amexio-row",[],null,null,null,i.bc,i.y)),l.Ma(19,1163264,null,0,s.H,[],null,null),(e()(),l.Na(20,0,null,0,15,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.Nb,i.k)),l.Ma(21,114688,null,0,s.k,[],{size:[0,"size"]},null),(e()(),l.Na(22,0,null,0,13,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(e,n,t){var a=!0;return"document:click"===n&&(a=!1!==l.Xa(e,23).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==l.Xa(e,23).onscroll()&&a),a},i.Lb,i.i)),l.Ma(23,5357568,null,3,s.h,[],{header:[0,"header"]},null),l.db(603979776,6,{amexioHeader:1}),l.db(603979776,7,{amexioBody:1}),l.db(603979776,8,{amexioFooter:1}),(e()(),l.Na(27,0,null,0,2,"amexio-header",[],null,null,null,i.Ub,i.r)),l.Ma(28,114688,[[6,4]],0,s.v,[],null,null),(e()(),l.fb(-1,0,[" Paginator with page size 10 "])),(e()(),l.Na(30,0,null,1,5,"amexio-body",[],null,null,null,i.Hb,i.e)),l.Ma(31,114688,[[7,4]],0,s.d,[],null,null),(e()(),l.Na(32,0,null,0,1,"amexio-paginator",[],null,[[null,"onPageChange"]],function(e,n,t){var l=!0;return"onPageChange"===n&&(l=!1!==e.component.loadPageData(t)&&l),l},i.Yb,i.v)),l.Ma(33,638976,null,0,s.D,[],{pages:[0,"pages"],rows:[1,"rows"]},{onPageChange:"onPageChange"}),(e()(),l.Na(34,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),l.fb(35,null,["Current active page : ",""])),(e()(),l.Na(36,0,null,0,15,"amexio-row",[],null,null,null,i.bc,i.y)),l.Ma(37,1163264,null,0,s.H,[],null,null),(e()(),l.Na(38,0,null,0,13,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.Nb,i.k)),l.Ma(39,114688,null,0,s.k,[],{size:[0,"size"]},null),(e()(),l.Na(40,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(e,n,t){var a=!0;return"document:click"===n&&(a=!1!==l.Xa(e,41).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==l.Xa(e,41).onscroll()&&a),a},i.Lb,i.i)),l.Ma(41,5357568,null,3,s.h,[],{header:[0,"header"]},null),l.db(603979776,9,{amexioHeader:1}),l.db(603979776,10,{amexioBody:1}),l.db(603979776,11,{amexioFooter:1}),(e()(),l.Na(45,0,null,0,2,"amexio-header",[],null,null,null,i.Ub,i.r)),l.Ma(46,114688,[[9,4]],0,s.v,[],null,null),(e()(),l.fb(-1,0,[" Paginator with page size 5 "])),(e()(),l.Na(48,0,null,1,3,"amexio-body",[],null,null,null,i.Hb,i.e)),l.Ma(49,114688,[[10,4]],0,s.d,[],null,null),(e()(),l.Na(50,0,null,0,1,"amexio-paginator",[],null,null,null,i.Yb,i.v)),l.Ma(51,638976,null,0,s.D,[],{pages:[0,"pages"],rows:[1,"rows"]},null),(e()(),l.Na(52,0,null,1,32,"amexio-tab",[["title","API Reference"]],null,null,null,i.gc,i.D)),l.Ma(53,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Na(54,0,null,0,18,"amexio-datagrid",[["title","Properties<amexio-paginator>"]],null,[["document","scroll"],["document","click"]],function(e,n,t){var a=!0;return"document:scroll"===n&&(a=!1!==l.Xa(e,55).onscroll()&&a),"document:click"===n&&(a=!1!==l.Xa(e,55).onclick()&&a),a},i.fd,i.cb)),l.Ma(55,1163264,null,1,s.Ib,[l.k,s.Ia,l.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),l.db(603979776,12,{columnRef:1}),(e()(),l.Na(57,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),l.Ma(58,49152,[[12,4]],2,s.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.db(335544320,13,{headerTemplate:0}),l.db(335544320,14,{bodyTemplate:0}),(e()(),l.Na(61,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),l.Ma(62,49152,[[12,4]],2,s.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.db(335544320,15,{headerTemplate:0}),l.db(335544320,16,{bodyTemplate:0}),(e()(),l.Na(65,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),l.Ma(66,49152,[[12,4]],2,s.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.db(335544320,17,{headerTemplate:0}),l.db(335544320,18,{bodyTemplate:0}),(e()(),l.Na(69,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),l.Ma(70,49152,[[12,4]],2,s.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.db(335544320,19,{headerTemplate:0}),l.db(335544320,20,{bodyTemplate:0}),(e()(),l.Na(73,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),l.Na(74,0,null,0,10,"amexio-datagrid",[["title","Events"]],null,[["document","scroll"],["document","click"]],function(e,n,t){var a=!0;return"document:scroll"===n&&(a=!1!==l.Xa(e,75).onscroll()&&a),"document:click"===n&&(a=!1!==l.Xa(e,75).onclick()&&a),a},i.fd,i.cb)),l.Ma(75,1163264,null,1,s.Ib,[l.k,s.Ia,l.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),l.db(603979776,21,{columnRef:1}),(e()(),l.Na(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),l.Ma(78,49152,[[21,4]],2,s.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.db(335544320,22,{headerTemplate:0}),l.db(335544320,23,{bodyTemplate:0}),(e()(),l.Na(81,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),l.Ma(82,49152,[[21,4]],2,s.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.db(335544320,24,{headerTemplate:0}),l.db(335544320,25,{bodyTemplate:0}),(e()(),l.Na(85,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.gc,i.D)),l.Ma(86,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Na(87,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),l.Na(88,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.ic,i.F)),l.Ma(89,5357568,null,1,s.Q,[l.B],null,null),l.db(603979776,26,{queryTabs:1}),(e()(),l.Na(91,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.gc,i.D)),l.Ma(92,114688,[[26,4]],0,s.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),l.Ea(16777216,null,0,1,null,h)),l.Ma(94,16384,null,0,d.l,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(e()(),l.Na(95,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.gc,i.D)),l.Ma(96,114688,[[26,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Ea(16777216,null,0,1,null,m)),l.Ma(98,16384,null,0,d.l,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(e()(),l.Na(99,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.gc,i.D)),l.Ma(100,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Na(101,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),l.fb(-1,null,["Amexio Sandbox"])),(e()(),l.Na(103,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-paginator?embed=1&file=app/data/paginator/paginator.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,n){var t=n.component;e(n,1,0,"true"),e(n,6,0),e(n,9,0),e(n,13,0),e(n,17,0,"Demo","true"),e(n,19,0),e(n,21,0,"12"),e(n,23,0,!0),e(n,28,0),e(n,31,0),e(n,33,0,50,10),e(n,37,0),e(n,39,0,"12"),e(n,41,0,!0),e(n,46,0),e(n,49,0),e(n,51,0,30,5),e(n,53,0,"API Reference"),e(n,55,0,"Properties<amexio-paginator>","assets/apireference/data/paginator.json","get","properties",!1,!1),e(n,58,0,"Name","name",!1,"string",15),e(n,62,0,"Type","type",!1,"string",10),e(n,66,0,"Default","default",!1,"string",10),e(n,70,0,"Description","description",!1,"string",65),e(n,75,0,"Events","assets/apireference/data/paginator.json","get","events",!1),e(n,78,0,"Name","name",!1,"string",20),e(n,82,0,"Description","description",!1,"string",70),e(n,86,0,"Source"),e(n,89,0),e(n,92,0,"HTML",!0),e(n,94,0,t.htmlCode),e(n,96,0,"Type Script"),e(n,98,0,t.typeScriptCode),e(n,100,0,"Live")},function(e,n){var t=n.component;e(n,20,0,l.Xa(n,21).role),e(n,35,0,t.currentPage),e(n,38,0,l.Xa(n,39).role)})}var b=l.Ja("paginator-demo",c,function(e){return l.hb(0,[(e()(),l.Na(0,0,null,null,1,"paginator-demo",[],null,null,null,f,p)),l.Ma(1,49152,null,0,c,[g.c],null,null)],null,null)},{},{},[]),y=t("gIcY"),x=t("ZYCi");t.d(n,"PaginatorDemoModuleNgFactory",function(){return v});var v=l.Ka(a,[],function(e){return l.Ua([l.Va(512,l.j,l.Z,[[8,[i.a,r.a,b]],[3,l.j],l.v]),l.Va(4608,d.n,d.m,[l.s,[2,d.w]]),l.Va(4608,y.r,y.r,[]),l.Va(4608,g.h,g.n,[d.c,l.z,g.l]),l.Va(4608,g.o,g.o,[g.h,g.m]),l.Va(5120,g.a,function(e){return[e]},[g.o]),l.Va(4608,g.k,g.k,[]),l.Va(6144,g.i,null,[g.k]),l.Va(4608,g.g,g.g,[g.i]),l.Va(6144,g.b,null,[g.g]),l.Va(4608,g.f,g.j,[g.b,l.p]),l.Va(4608,g.c,g.c,[g.f]),l.Va(4608,s.Ia,s.Ia,[g.c]),l.Va(4608,s.Sa,s.Sa,[l.z]),l.Va(4608,s.Za,s.Za,[]),l.Va(4608,s.lc,s.lc,[]),l.Va(1073742336,d.b,d.b,[]),l.Va(1073742336,y.o,y.o,[]),l.Va(1073742336,y.e,y.e,[]),l.Va(1073742336,g.e,g.e,[]),l.Va(1073742336,g.d,g.d,[]),l.Va(1073742336,o.b,o.b,[]),l.Va(1073742336,s.w,s.w,[]),l.Va(1073742336,s.u,s.u,[]),l.Va(1073742336,s.z,s.z,[]),l.Va(1073742336,s.B,s.B,[]),l.Va(1073742336,s.E,s.E,[]),l.Va(1073742336,s.m,s.m,[]),l.Va(1073742336,s.S,s.S,[]),l.Va(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),l.Va(1073742336,a,a,[]),l.Va(256,g.l,"XSRF-TOKEN",[]),l.Va(256,g.m,"X-XSRF-TOKEN",[]),l.Va(1024,x.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})},wZee:function(e,n){var t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},l=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,n=0,l=t.Prism={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,l.util.encode(e.content),e.alias):"Array"===l.util.type(e)?e.map(l.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function(e,n){var t=l.util.type(e);switch(n=n||{},t){case"Object":if(n[l.util.objId(e)])return n[l.util.objId(e)];var a={};for(var i in n[l.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=l.util.clone(e[i],n));return a;case"Array":return n[l.util.objId(e)]?n[l.util.objId(e)]:(a=[],n[l.util.objId(e)]=a,e.forEach(function(e,t){a[t]=l.util.clone(e,n)}),a)}return e}},languages:{extend:function(e,n){var t=l.util.clone(l.languages[e]);for(var a in n)t[a]=n[a];return t},insertBefore:function(e,n,t,a){var i=(a=a||l.languages)[e];if(2==arguments.length){for(var r in t=arguments[1])t.hasOwnProperty(r)&&(i[r]=t[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var r in t)t.hasOwnProperty(r)&&(u[r]=t[r]);u[o]=i[o]}return l.languages.DFS(l.languages,function(n,t){t===a[e]&&n!=e&&(this[n]=u)}),a[e]=u},DFS:function(e,n,t,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(n.call(e,i,e[i],t||i),"Object"!==l.util.type(e[i])||a[l.util.objId(e[i])]?"Array"!==l.util.type(e[i])||a[l.util.objId(e[i])]||(a[l.util.objId(e[i])]=!0,l.languages.DFS(e[i],n,i,a)):(a[l.util.objId(e[i])]=!0,l.languages.DFS(e[i],n,null,a)))}},plugins:{},highlightAll:function(e,n){l.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",a);for(var i,r=a.elements||e.querySelectorAll(a.selector),u=0;i=r[u++];)l.highlightElement(i,!0===n,a.callback)},highlightElement:function(n,a,i){for(var r,u,o=n;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=l.languages[r]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,n.parentNode&&/pre/i.test((o=n.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:n,language:r,grammar:u,code:n.textContent};if(l.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(l.hooks.run("before-highlight",s),s.element.textContent=s.code,l.hooks.run("after-highlight",s)),void l.hooks.run("complete",s);if(l.hooks.run("before-highlight",s),a&&t.Worker){var d=new Worker(l.filename);d.onmessage=function(e){s.highlightedCode=e.data,l.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),l.hooks.run("after-highlight",s),l.hooks.run("complete",s)},d.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=l.highlight(s.code,s.grammar,s.language),l.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(n),l.hooks.run("after-highlight",s),l.hooks.run("complete",s)},highlight:function(e,n,t){var i={code:e,grammar:n,language:t};return l.hooks.run("before-tokenize",i),i.tokens=l.tokenize(i.code,i.grammar),l.hooks.run("after-tokenize",i),a.stringify(l.util.encode(i.tokens),i.language)},matchGrammar:function(e,n,t,a,i,r,u){var o=l.Token;for(var s in t)if(t.hasOwnProperty(s)&&t[s]){if(s==u)return;var d=t[s];d="Array"===l.util.type(d)?d:[d];for(var c=0;c<d.length;++c){var g=d[c],p=g.inside,h=!!g.lookbehind,m=!!g.greedy,f=0,b=g.alias;if(m&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var x=a,v=i;x<n.length;v+=n[x].length,++x){var k=n[x];if(n.length>e.length)return;if(!(k instanceof o)){if(m&&x!=n.length-1){if(g.lastIndex=v,!(S=g.exec(e)))break;for(var w=S.index+(h?S[1].length:0),N=S.index+S[0].length,M=x,C=v,F=n.length;M<F&&(C<N||!n[M].type&&!n[M-1].greedy);++M)w>=(C+=n[M].length)&&(++x,v=C);if(n[x]instanceof o)continue;A=M-x,k=e.slice(v,C),S.index-=v}else{g.lastIndex=0;var S=g.exec(k),A=1}if(S){h&&(f=S[1]?S[1].length:0),N=(w=S.index+f)+(S=S[0].slice(f)).length;var P=k.slice(0,w),T=k.slice(N),j=[x,A];P&&(++x,v+=P.length,j.push(P));var V=new o(s,p?l.tokenize(S,p):S,b,S,m);if(j.push(V),T&&j.push(T),Array.prototype.splice.apply(n,j),1!=A&&l.matchGrammar(e,n,t,x,v,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,n,t){var a=[e],i=n.rest;if(i){for(var r in i)n[r]=i[r];delete n.rest}return l.matchGrammar(e,a,n,0,0,!1),a},hooks:{all:{},add:function(e,n){var t=l.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=l.hooks.all[e];if(t&&t.length)for(var a,i=0;a=t[i++];)a(n)}}},a=l.Token=function(e,n,t,l,a){this.type=e,this.content=n,this.alias=t,this.length=0|(l||"").length,this.greedy=!!a};if(a.stringify=function(e,n,t){if("string"==typeof e)return e;if("Array"===l.util.type(e))return e.map(function(t){return a.stringify(t,n,e)}).join("");var i={type:e.type,content:a.stringify(e.content,n,t),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:t};if(e.alias){var r="Array"===l.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}l.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!t.document)return t.addEventListener?(l.disableWorkerMessageHandler||t.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,i=n.immediateClose;t.postMessage(l.highlight(n.code,l.languages[a],a)),i&&t.close()},!1),t.Prism):t.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(l.filename=i.src,l.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(l.highlightAll):window.setTimeout(l.highlightAll,16):document.addEventListener("DOMContentLoaded",l.highlightAll))),t.Prism}();void 0!==e&&e.exports&&(e.exports=l),"undefined"!=typeof global&&(global.Prism=l),l.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),l.languages.xml=l.languages.markup,l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},l.languages.css.atrule.inside.rest=l.languages.css,l.languages.markup&&(l.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:l.languages.css,alias:"language-css",greedy:!0}}),l.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:l.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:l.languages.css}},alias:"language-css"}},l.languages.markup.tag)),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),l.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),l.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:l.languages.javascript}},string:/[\s\S]+/}}}),l.languages.markup&&l.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:l.languages.javascript,alias:"language-javascript",greedy:!0}}),l.languages.js=l.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(n){for(var t,a=n.getAttribute("data-src"),i=n,r=/\blang(?:uage)?-(?!\*)([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(t=(n.className.match(r)||[,""])[1]),!t){var u=(a.match(/\.(\w+)$/)||[,""])[1];t=e[u]||u}var o=document.createElement("code");o.className="language-"+t,n.textContent="",o.textContent="Loading\u2026",n.appendChild(o);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,l.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},n.hasAttribute("data-download-link")&&l.plugins.toolbar&&l.plugins.toolbar.registerButton("download-file",function(){var e=document.createElement("a");return e.textContent=n.getAttribute("data-download-link-label")||"Download",e.setAttribute("download",""),e.href=a,e}),s.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);