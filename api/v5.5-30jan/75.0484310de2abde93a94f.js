(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{U89g:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return i});var n=a("CcnG"),l=(a("d2mR"),a("Ip0R"),n.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return n.mb(0,[],null,null)}},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return l}),a("wZee"),a("XIHC");var n=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),l=function(){}},dMyU:function(e,t,a){"use strict";a.r(t);var n=a("CcnG"),l=function(){},i=a("gTgE"),r=a("pMnS"),u=a("U89g"),o=a("d2mR"),s=a("O4vx"),d=a("Ip0R"),c=function(){function e(e){this.http=e,this.histogramChartData=[["Dinosaur","Length"],["Acrocanthosaurus (top-spined lizard)",12.2],["Albertosaurus (Alberta lizard)",9.1],["Allosaurus (other lizard)",12.2],["Apatosaurus (deceptive lizard)",22.9],["Archaeopteryx (ancient wing)",.9],["Argentinosaurus (Argentina lizard)",36.6],["Baryonyx (heavy claws)",9.1],["Brachiosaurus (arm lizard)",30.5],["Ceratosaurus (horned lizard)",6.1],["Coelophysis (hollow form)",2.7],["Compsognathus (elegant jaw)",.9],["Deinonychus (terrible claw)",2.7],["Diplodocus (double beam)",27.1],["Dromicelomimus (emu mimic)",3.4],["Gallimimus (fowl mimic)",5.5],["Mamenchisaurus (Mamenchi lizard)",21],["Megalosaurus (big lizard)",7.9],["Microvenator (small hunter)",1.2],["Ornithomimus (bird mimic)",4.6],["Oviraptor (egg robber)",1.5],["Plateosaurus (flat lizard)",7.9],["Sauronithoides (narrow-clawed lizard)",2],["Seismosaurus (tremor lizard)",45.7],["Spinosaurus (spiny lizard)",12.2],["Supersaurus (super lizard)",30.5],["Tyrannosaurus (tyrant lizard)",15.2],["Ultrasaurus (ultra lizard)",30.5],["Velociraptor (swift robber)",1.8]],this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,t,a=this;this.http.get("assets/data/code/charts/histogramchart/chart.html",{responseType:"text"}).subscribe(function(t){e=t},function(e){},function(){a.htmlCode=e}),this.http.get("assets/data/code/charts/histogramchart/chart.text",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){a.typeScriptCode=t}),this.http.get("assets/data/code/charts/histogramchart/datasource.json",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){a.dataSourceCode=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.ngOnInit=function(){},e}(),g=a("t/Na"),h=n.Qa({encapsulation:2,styles:[],data:{}});function p(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),n.Ra(2,4243456,null,0,o.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.htmlCode,"html")},null)}function m(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),n.Ra(2,4243456,null,0,o.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.typeScriptCode,"typescript")},null)}function b(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),n.Ra(2,4243456,null,0,o.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.dataSourceCode,"json")},null)}function f(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,92,"amexio-card",[["header","true"]],null,null,null,i.dc,i.k)),n.Ra(1,7585792,null,3,s.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,1,{amexioHeader:1}),n.ib(603979776,2,{amexioBody:1}),n.ib(603979776,3,{amexioFooter:1}),(e()(),n.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.pc,i.w)),n.Ra(6,114688,[[1,4]],0,s.C,[],null,null),(e()(),n.kb(-1,0,[" Histogram Chart "])),(e()(),n.Sa(8,0,null,1,84,"amexio-body",[],null,null,null,i.Xb,i.e)),n.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(e()(),n.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),n.kb(-1,null,["A histogram is a chart that groups numeric data into bins, displaying the bins as segmented columns."])),(e()(),n.Sa(12,0,null,0,80,"amexio-tab-view",[],null,null,null,i.Ac,i.H)),n.Ra(13,5488640,null,2,s.S,[n.F,n.k,n.F],null,null),n.ib(603979776,4,{queryTabs:1}),n.ib(603979776,5,{queryAction:1}),(e()(),n.Sa(16,0,null,1,12,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.Bc,i.I)),n.Ra(17,114688,[[4,4]],0,s.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Sa(18,0,null,0,10,"amexio-row",[],null,null,null,i.wc,i.D)),n.Ra(19,1163264,null,0,s.O,[],null,null),(e()(),n.Sa(20,0,null,0,8,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.fc,i.m)),n.Ra(21,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),n.Sa(22,0,null,0,6,"amexio-chart-histogram",[],null,null,null,i.ed,i.La)),n.Ra(23,1163264,null,3,s.mb,[s.Pa],{width:[0,"width"],height:[1,"height"],data:[2,"data"]},null),n.ib(603979776,6,{chartLegendComp:1}),n.ib(603979776,7,{chartTitleComp:1}),n.ib(603979776,8,{chartAreaComp:1}),(e()(),n.Sa(27,0,null,null,1,"amexio-chart-title",[],null,null,null,i.Sc,i.Z)),n.Ra(28,114688,[[7,4]],0,s.Qa,[],{title:[0,"title"]},null),(e()(),n.Sa(29,0,null,1,40,"amexio-tab",[["title","API Reference"]],null,null,null,i.Bc,i.I)),n.Ra(30,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Sa(31,0,null,0,18,"amexio-datagrid",[["title","Chart Properties<amexio-chart-histogram>"]],null,null,null,i.Rd,i.yb)),n.Ra(32,1294336,null,1,s.tc,[n.l,s.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,9,{columnRef:1}),(e()(),n.Sa(34,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(35,49152,[[9,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,10,{headerTemplate:0}),n.ib(335544320,11,{bodyTemplate:0}),(e()(),n.Sa(38,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(39,49152,[[9,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,12,{headerTemplate:0}),n.ib(335544320,13,{bodyTemplate:0}),(e()(),n.Sa(42,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(43,49152,[[9,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,14,{headerTemplate:0}),n.ib(335544320,15,{bodyTemplate:0}),(e()(),n.Sa(46,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(47,49152,[[9,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,16,{headerTemplate:0}),n.ib(335544320,17,{bodyTemplate:0}),(e()(),n.Sa(50,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),n.Sa(51,0,null,0,18,"amexio-datagrid",[["title","Chart Title Properties<amexio-chart-title>"]],null,null,null,i.Rd,i.yb)),n.Ra(52,1294336,null,1,s.tc,[n.l,s.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,18,{columnRef:1}),(e()(),n.Sa(54,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(55,49152,[[18,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,19,{headerTemplate:0}),n.ib(335544320,20,{bodyTemplate:0}),(e()(),n.Sa(58,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(59,49152,[[18,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,21,{headerTemplate:0}),n.ib(335544320,22,{bodyTemplate:0}),(e()(),n.Sa(62,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(63,49152,[[18,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,23,{headerTemplate:0}),n.ib(335544320,24,{bodyTemplate:0}),(e()(),n.Sa(66,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(67,49152,[[18,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,25,{headerTemplate:0}),n.ib(335544320,26,{bodyTemplate:0}),(e()(),n.Sa(70,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,i.Bc,i.I)),n.Ra(71,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Sa(72,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),n.Sa(73,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,i.Dc,i.K)),n.Ra(74,5357568,null,1,s.X,[n.F,n.k],null,null),n.ib(603979776,27,{queryTabs:1}),(e()(),n.Sa(76,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.Bc,i.I)),n.Ra(77,114688,[[27,4]],0,s.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Ja(16777216,null,0,1,null,p)),n.Ra(79,16384,null,0,d.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(80,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.Bc,i.I)),n.Ra(81,114688,[[27,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Ja(16777216,null,0,1,null,m)),n.Ra(83,16384,null,0,d.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(84,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,i.Bc,i.I)),n.Ra(85,114688,[[27,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Ja(16777216,null,0,1,null,b)),n.Ra(87,16384,null,0,d.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(88,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.Bc,i.I)),n.Ra(89,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Sa(90,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),n.kb(-1,null,["Amexio Sandbox"])),(e()(),n.Sa(92,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-histogramchart?embed=1&file=app/charts/histogramchart/histogramchart.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,t){var a=t.component;e(t,1,0,"true"),e(t,6,0),e(t,9,0),e(t,13,0),e(t,17,0,"Demo","true"),e(t,19,0),e(t,21,0,"12"),e(t,23,0,"100%","400px",a.histogramChartData),e(t,28,0,"Lengths of dinosaurs, in meters"),e(t,30,0,"API Reference"),e(t,32,0,"Chart Properties<amexio-chart-histogram>","assets/apireference/charts/histogramchart.json","get","chart",!1,!1),e(t,35,0,"Name","name",!1,"string",15),e(t,39,0,"Type","type",!1,"string",10),e(t,43,0,"Default","default",!1,"string",10),e(t,47,0,"Description","description",!1,"string",65),e(t,52,0,"Chart Title Properties<amexio-chart-title>","assets/apireference/charts/histogramchart.json","get","chartTitle",!1,!1),e(t,55,0,"Name","name",!1,"string",15),e(t,59,0,"Type","type",!1,"string",10),e(t,63,0,"Default","default",!1,"string",10),e(t,67,0,"Description","description",!1,"string",65),e(t,71,0,"Source"),e(t,74,0),e(t,77,0,"HTML",!0),e(t,79,0,a.htmlCode),e(t,81,0,"Type Script"),e(t,83,0,a.typeScriptCode),e(t,85,0,"Data Source"),e(t,87,0,a.dataSourceCode),e(t,89,0,"Live")},function(e,t){e(t,20,0,n.cb(t,21).role)})}var y=n.Oa("histogram-chart-demo",c,function(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,1,"histogram-chart-demo",[],null,null,null,f,h)),n.Ra(1,114688,null,0,c,[g.c],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),x=a("gIcY"),w=a("ZYCi");a.d(t,"HistogramChartDemoModuleNgFactory",function(){return v});var v=n.Pa(l,[],function(e){return n.Za([n.ab(512,n.k,n.Ea,[[8,[i.a,r.a,y]],[3,n.k],n.z]),n.ab(4608,d.o,d.n,[n.w,[2,d.x]]),n.ab(4608,x.G,x.G,[]),n.ab(4608,g.i,g.o,[d.d,n.D,g.m]),n.ab(4608,g.p,g.p,[g.i,g.n]),n.ab(5120,g.a,function(e){return[e]},[g.p]),n.ab(4608,g.l,g.l,[]),n.ab(6144,g.j,null,[g.l]),n.ab(4608,g.h,g.h,[g.j]),n.ab(6144,g.b,null,[g.h]),n.ab(4608,g.f,g.k,[g.b,n.s]),n.ab(4608,g.c,g.c,[g.f]),n.ab(4608,s.Ta,s.Ta,[g.c]),n.ab(4608,s.ob,s.ob,[]),n.ab(4608,s.db,s.db,[n.D]),n.ab(4608,s.B,s.B,[]),n.ab(4608,s.Kb,s.Kb,[]),n.ab(4608,x.f,x.f,[]),n.ab(4608,s.jb,s.jb,[]),n.ab(4608,s.Pa,s.Pa,[]),n.ab(1073742336,d.c,d.c,[]),n.ab(1073742336,x.D,x.D,[]),n.ab(1073742336,x.l,x.l,[]),n.ab(1073742336,g.e,g.e,[]),n.ab(1073742336,g.d,g.d,[]),n.ab(1073742336,s.Db,s.Db,[]),n.ab(1073742336,s.D,s.D,[]),n.ab(1073742336,s.x,s.x,[]),n.ab(1073742336,s.G,s.G,[]),n.ab(1073742336,s.I,s.I,[]),n.ab(1073742336,x.z,x.z,[]),n.ab(1073742336,s.L,s.L,[]),n.ab(1073742336,s.p,s.p,[]),n.ab(1073742336,s.Aa,s.Aa,[]),n.ab(1073742336,o.b,o.b,[]),n.ab(1073742336,s.l,s.l,[]),n.ab(1073742336,w.n,w.n,[[2,w.t],[2,w.m]]),n.ab(1073742336,l,l,[]),n.ab(256,g.m,"XSRF-TOKEN",[]),n.ab(256,g.n,"X-XSRF-TOKEN",[]),n.ab(1024,w.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})},wZee:function(e,t){var a="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,n=a.Prism={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof l?new l(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var a=n.util.type(e);switch(t=t||{},a){case"Object":if(t[n.util.objId(e)])return t[n.util.objId(e)];var l={};for(var i in t[n.util.objId(e)]=l,e)e.hasOwnProperty(i)&&(l[i]=n.util.clone(e[i],t));return l;case"Array":return t[n.util.objId(e)]?t[n.util.objId(e)]:(l=[],t[n.util.objId(e)]=l,e.forEach(function(e,a){l[a]=n.util.clone(e,t)}),l)}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var l in t)a[l]=t[l];return a},insertBefore:function(e,t,a,l){var i=(l=l||n.languages)[e];if(2==arguments.length){for(var r in a=arguments[1])a.hasOwnProperty(r)&&(i[r]=a[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var r in a)a.hasOwnProperty(r)&&(u[r]=a[r]);u[o]=i[o]}return n.languages.DFS(n.languages,function(t,a){a===l[e]&&t!=e&&(this[t]=u)}),l[e]=u},DFS:function(e,t,a,l){for(var i in l=l||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||l[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||l[n.util.objId(e[i])]||(l[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,l)):(l[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,l)))}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var l={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",l);for(var i,r=l.elements||e.querySelectorAll(l.selector),u=0;i=r[u++];)n.highlightElement(i,!0===t,l.callback)},highlightElement:function(t,l,i){for(var r,u,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=n.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&/pre/i.test((o=t.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:t,language:r,grammar:u,code:t.textContent};if(n.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(n.hooks.run("before-highlight",s),s.element.textContent=s.code,n.hooks.run("after-highlight",s)),void n.hooks.run("complete",s);if(n.hooks.run("before-highlight",s),l&&a.Worker){var d=new Worker(n.filename);d.onmessage=function(e){s.highlightedCode=e.data,n.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),n.hooks.run("after-highlight",s),n.hooks.run("complete",s)},d.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=n.highlight(s.code,s.grammar,s.language),n.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(t),n.hooks.run("after-highlight",s),n.hooks.run("complete",s)},highlight:function(e,t,a){var i={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),l.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,a,l,i,r,u){var o=n.Token;for(var s in a)if(a.hasOwnProperty(s)&&a[s]){if(s==u)return;var d=a[s];d="Array"===n.util.type(d)?d:[d];for(var c=0;c<d.length;++c){var g=d[c],h=g.inside,p=!!g.lookbehind,m=!!g.greedy,b=0,f=g.alias;if(m&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var x=l,w=i;x<t.length;w+=t[x].length,++x){var v=t[x];if(t.length>e.length)return;if(!(v instanceof o)){if(m&&x!=t.length-1){if(g.lastIndex=w,!(F=g.exec(e)))break;for(var S=F.index+(p?F[1].length:0),k=F.index+F[0].length,A=x,C=w,T=t.length;A<T&&(C<k||!t[A].type&&!t[A-1].greedy);++A)S>=(C+=t[A].length)&&(++x,w=C);if(t[x]instanceof o)continue;R=A-x,v=e.slice(w,C),F.index-=w}else{g.lastIndex=0;var F=g.exec(v),R=1}if(F){p&&(b=F[1]?F[1].length:0),k=(S=F.index+b)+(F=F[0].slice(b)).length;var z=v.slice(0,S),j=v.slice(k),I=[x,R];z&&(++x,w+=z.length,I.push(z));var P=new o(s,h?n.tokenize(F,h):F,f,F,m);if(I.push(P),j&&I.push(j),Array.prototype.splice.apply(t,I),1!=R&&n.matchGrammar(e,t,a,x,w,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,t,a){var l=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return n.matchGrammar(e,l,t,0,0,!1),l},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var l,i=0;l=a[i++];)l(t)}}},l=n.Token=function(e,t,a,n,l){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!l};if(l.stringify=function(e,t,a){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(a){return l.stringify(a,t,e)}).join("");var i={type:e.type,content:l.stringify(e.content,t,a),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:a};if(e.alias){var r="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}n.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!a.document)return a.addEventListener?(n.disableWorkerMessageHandler||a.addEventListener("message",function(e){var t=JSON.parse(e.data),l=t.language,i=t.immediateClose;a.postMessage(n.highlight(t.code,n.languages[l],l)),i&&a.close()},!1),a.Prism):a.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),a.Prism}();void 0!==e&&e.exports&&(e.exports=n),"undefined"!=typeof global&&(global.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.languages.css,n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css",greedy:!0}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),n.languages.javascript["template-string"].inside.interpolation.inside.rest=n.languages.javascript,n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript",greedy:!0}}),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var a,l=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(a=(t.className.match(r)||[,""])[1]),!a){var u=(l.match(/\.(\w+)$/)||[,""])[1];a=e[u]||u}var o=document.createElement("code");o.className="language-"+a,t.textContent="",o.textContent="Loading\u2026",t.appendChild(o);var s=new XMLHttpRequest;s.open("GET",l,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,n.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),n=document.createElement("a");return n.textContent=t.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);