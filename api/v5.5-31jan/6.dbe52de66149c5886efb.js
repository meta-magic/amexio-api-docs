(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{U89g:function(l,a,n){"use strict";n.d(a,"a",function(){return e}),n.d(a,"b",function(){return u});var t=n("CcnG"),e=(n("d2mR"),n("Ip0R"),t.Qa({encapsulation:2,styles:[],data:{}}));function u(l){return t.mb(0,[],null,null)}},"W+VT":function(l,a,n){"use strict";n.r(a);var t=n("CcnG"),e=function(){},u=n("gTgE"),i=n("pMnS"),r=n("U89g"),o=n("d2mR"),d=n("O4vx"),c=n("thSD"),s=n("Jovw"),h=n("Ip0R"),m=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.ngOnInit=function(){this.histogramdata=[["Dinosaur","Length"],["Acrocanthosaurus (top-spined lizard)",12.2],["Albertosaurus (Alberta lizard)",9.1],["Allosaurus (other lizard)",12.2],["Apatosaurus (deceptive lizard)",22.9],["Archaeopteryx (ancient wing)",.9],["Argentinosaurus (Argentina lizard)",36.6],["Baryonyx (heavy claws)",9.1],["Brachiosaurus (arm lizard)",30.5],["Ceratosaurus (horned lizard)",6.1],["Coelophysis (hollow form)",2.7],["Compsognathus (elegant jaw)",.9],["Deinonychus (terrible claw)",2.7],["Diplodocus (double beam)",27.1],["Dromicelomimus (emu mimic)",3.4],["Gallimimus (fowl mimic)",5.5],["Mamenchisaurus (Mamenchi lizard)",21],["Megalosaurus (big lizard)",7.9],["Microvenator (small hunter)",1.2],["Ornithomimus (bird mimic)",4.6],["Oviraptor (egg robber)",1.5],["Plateosaurus (flat lizard)",7.9],["Sauronithoides (narrow-clawed lizard)",2],["Seismosaurus (tremor lizard)",45.7],["Spinosaurus (spiny lizard)",12.2],["Supersaurus (super lizard)",30.5],["Tyrannosaurus (tyrant lizard)",15.2],["Ultrasaurus (ultra lizard)",30.5],["Velociraptor (swift robber)",1.8]]},l.prototype.onDefaultChartClick=function(l){this.userDataSource=l},l.prototype.getHtmlAndTypeScriptCode=function(){var l,a,n=this;this.http.get("assets/data/code/charts/D3Charts/d3histogramchart/d3chart.html",{responseType:"text"}).subscribe(function(a){l=a},function(l){},function(){n.htmlCode=l}),this.http.get("assets/data/code/charts/D3Charts/d3histogramchart/d3chart.text",{responseType:"text"}).subscribe(function(l){a=l},function(l){},function(){n.typeScriptCode=a}),this.http.get("assets/data/code/charts/D3Charts/d3histogramchart/datasource.json",{responseType:"text"}).subscribe(function(l){a=l},function(l){},function(){n.dataSourceCode=a}),this.http.get("assets/data/code/charts/D3Charts/d3histogramchart/usersource.json",{responseType:"text"}).subscribe(function(l){a=l},function(l){},function(){n.userDataSourceCode=a})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),b=n("t/Na"),p=t.Qa({encapsulation:2,styles:[],data:{}});function x(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,a){l(a,2,0,a.component.htmlCode,"html")},null)}function g(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,a){l(a,2,0,a.component.typeScriptCode,"typescript")},null)}function f(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,a){l(a,2,0,a.component.dataSourceCode,"json")},null)}function S(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,119,"amexio-card",[["header","true"]],null,null,null,u.ec,u.k)),t.Ra(1,7585792,null,3,d.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(l()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.qc,u.w)),t.Ra(6,1163264,[[1,4]],0,d.C,[],null,null),(l()(),t.kb(-1,0,[" D3 Histogram Chart "])),(l()(),t.Sa(8,0,null,1,111,"amexio-body",[],null,null,null,u.Yb,u.e)),t.Ra(9,1163264,[[2,4]],0,d.d,[],null,null),(l()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["An D3 Histogram chart that is rendered within the browser using SVG .Displays tips when hovering over points."])),(l()(),t.Sa(12,0,null,0,107,"amexio-tab-view",[],null,null,null,u.Bc,u.H)),t.Ra(13,5488640,null,2,d.S,[t.F,t.k,t.F],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(l()(),t.Sa(16,0,null,1,39,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.Cc,u.I)),t.Ra(17,114688,[[4,4]],0,d.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Sa(18,0,null,0,37,"amexio-row",[],null,null,null,u.xc,u.D)),t.Ra(19,1163264,null,0,d.O,[],null,null),(l()(),t.Sa(20,0,null,0,35,"amexio-column",[],[[1,"class",0]],null,null,u.gc,u.m)),t.Ra(21,114688,null,0,d.m,[],{size:[0,"size"]},null),(l()(),t.Sa(22,0,null,0,15,"amexio-row",[],null,null,null,u.xc,u.D)),t.Ra(23,1163264,null,0,d.O,[],null,null),(l()(),t.Sa(24,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.gc,u.m)),t.Ra(25,114688,null,0,d.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(26,0,null,0,11,"amexio-card",[],null,null,null,u.ec,u.k)),t.Ra(27,7585792,null,3,d.j,[t.F],{header:[0,"header"],show:[1,"show"]},null),t.ib(603979776,6,{amexioHeader:1}),t.ib(603979776,7,{amexioBody:1}),t.ib(603979776,8,{amexioFooter:1}),(l()(),t.Sa(31,0,null,0,2,"amexio-header",[],null,null,null,u.qc,u.w)),t.Ra(32,1163264,[[6,4]],0,d.C,[],null,null),(l()(),t.kb(-1,0,[" D3-histogram chart with UserDefined Color "])),(l()(),t.Sa(34,0,null,1,3,"amexio-body",[],null,null,null,u.Yb,u.e)),t.Ra(35,1163264,[[7,4]],0,d.d,[],null,null),(l()(),t.Sa(36,0,null,0,1,"amexio-d3-chart-histogram",[],null,[[null,"onChartClick"]],function(l,a,n){var t=!0;return"onChartClick"===a&&(t=!1!==l.component.onDefaultChartClick(n)&&t),t},c.w,c.i)),t.Ra(37,114688,null,0,s.m,[s.i,s.j],{title:[0,"title"],labelflag:[1,"labelflag"],color:[2,"color"],datahisto:[3,"datahisto"]},{onChartClick:"onChartClick"}),(l()(),t.Sa(38,0,null,0,17,"amexio-row",[],null,null,null,u.xc,u.D)),t.Ra(39,1163264,null,0,d.O,[],null,null),(l()(),t.Sa(40,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.gc,u.m)),t.Ra(41,114688,null,0,d.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(42,0,null,0,13,"amexio-card",[["header","true"]],null,null,null,u.ec,u.k)),t.Ra(43,7585792,null,3,d.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,9,{amexioHeader:1}),t.ib(603979776,10,{amexioBody:1}),t.ib(603979776,11,{amexioFooter:1}),(l()(),t.Sa(47,0,null,0,2,"amexio-header",[],null,null,null,u.qc,u.w)),t.Ra(48,1163264,[[9,4]],0,d.C,[],null,null),(l()(),t.kb(-1,0,[" Click on Chart "])),(l()(),t.Sa(50,0,null,1,5,"amexio-body",[],null,null,null,u.Yb,u.e)),t.Ra(51,1163264,[[10,4]],0,d.d,[],null,null),(l()(),t.Sa(52,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),t.Sa(53,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),t.kb(54,null,["",""])),t.eb(0,h.g,[]),(l()(),t.Sa(56,0,null,1,40,"amexio-tab",[["title","API Reference"]],null,null,null,u.Cc,u.I)),t.Ra(57,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(l()(),t.Sa(58,0,null,0,22,"amexio-datagrid",[["title","D3-Histogram-Chart Properties </amexio-d3-chart-histogram>"]],null,null,null,u.Td,u.zb)),t.Ra(59,1294336,null,1,d.yc,[t.l,d.Ta,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,12,{columnRef:1}),(l()(),t.Sa(61,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Ud,u.Ab)),t.Ra(62,49152,[[12,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,13,{headerTemplate:0}),t.ib(335544320,14,{bodyTemplate:0}),(l()(),t.Sa(65,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Ud,u.Ab)),t.Ra(66,49152,[[12,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,15,{headerTemplate:0}),t.ib(335544320,16,{bodyTemplate:0}),(l()(),t.Sa(69,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Ud,u.Ab)),t.Ra(70,49152,[[12,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,17,{headerTemplate:0}),t.ib(335544320,18,{bodyTemplate:0}),(l()(),t.Sa(73,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Ud,u.Ab)),t.Ra(74,49152,[[12,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,19,{headerTemplate:0}),t.ib(335544320,20,{bodyTemplate:0}),(l()(),t.Sa(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Ud,u.Ab)),t.Ra(78,49152,[[12,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,21,{headerTemplate:0}),t.ib(335544320,22,{bodyTemplate:0}),(l()(),t.Sa(81,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(82,0,null,0,14,"amexio-datagrid",[["title","Chart Event </amexio-d3-chart-histogram>"]],null,null,null,u.Td,u.zb)),t.Ra(83,1294336,null,1,d.yc,[t.l,d.Ta,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,23,{columnRef:1}),(l()(),t.Sa(85,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Ud,u.Ab)),t.Ra(86,49152,[[23,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,24,{headerTemplate:0}),t.ib(335544320,25,{bodyTemplate:0}),(l()(),t.Sa(89,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Ud,u.Ab)),t.Ra(90,49152,[[23,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,26,{headerTemplate:0}),t.ib(335544320,27,{bodyTemplate:0}),(l()(),t.Sa(93,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Ud,u.Ab)),t.Ra(94,49152,[[23,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,28,{headerTemplate:0}),t.ib(335544320,29,{bodyTemplate:0}),(l()(),t.Sa(97,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,u.Cc,u.I)),t.Ra(98,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(l()(),t.Sa(99,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t.Sa(100,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,u.Ec,u.K)),t.Ra(101,5357568,null,1,d.X,[t.F,t.k],null,null),t.ib(603979776,30,{queryTabs:1}),(l()(),t.Sa(103,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.Cc,u.I)),t.Ra(104,114688,[[30,4]],0,d.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Ja(16777216,null,0,1,null,x)),t.Ra(106,16384,null,0,h.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(107,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.Cc,u.I)),t.Ra(108,114688,[[30,4]],0,d.T,[],{title:[0,"title"]},null),(l()(),t.Ja(16777216,null,0,1,null,g)),t.Ra(110,16384,null,0,h.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(111,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,u.Cc,u.I)),t.Ra(112,114688,[[30,4]],0,d.T,[],{title:[0,"title"]},null),(l()(),t.Ja(16777216,null,0,1,null,f)),t.Ra(114,16384,null,0,h.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(115,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.Cc,u.I)),t.Ra(116,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(l()(),t.Sa(117,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Amexio Sandbox"])),(l()(),t.Sa(119,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-d3-chart-histogram?embed=1&file=src/app/d3chart/d3linechart/d3linechart.demo.component.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,a){var n=a.component;l(a,1,0,"true"),l(a,6,0),l(a,9,0),l(a,13,0),l(a,17,0,"Demo","true"),l(a,19,0),l(a,21,0,12),l(a,23,0),l(a,25,0,!0,12),l(a,27,0,!0,"true"),l(a,32,0),l(a,35,0),l(a,37,0,"Histogram Chart ",!0,"blue",n.histogramdata),l(a,39,0),l(a,41,0,!0,12),l(a,43,0,"true"),l(a,48,0),l(a,51,0),l(a,57,0,"API Reference"),l(a,59,0,"D3-Histogram-Chart Properties </amexio-d3-chart-histogram>","assets/apireference/charts/d3charts/d3histogramchart.json","get","properties",!1,!1),l(a,62,0,"Name","name",!1,"string",15),l(a,66,0,"version","version",!1,"string",15),l(a,70,0,"Type","type",!1,"string",15),l(a,74,0,"Default","default",!1,"string",15),l(a,78,0,"Description","description",!1,"string",40),l(a,83,0,"Chart Event </amexio-d3-chart-histogram>","assets/apireference/charts/d3charts/d3histogramchart.json","get","chartevent",!1,!1),l(a,86,0,"Name","name",!1,"string",15),l(a,90,0,"version","version",!1,"string",15),l(a,94,0,"Description","description",!1,"string",55),l(a,98,0,"Source"),l(a,101,0),l(a,104,0,"HTML",!0),l(a,106,0,n.htmlCode),l(a,108,0,"Type Script"),l(a,110,0,n.typeScriptCode),l(a,112,0,"Data Source"),l(a,114,0,n.dataSourceCode),l(a,116,0,"Live")},function(l,a){var n=a.component;l(a,20,0,t.cb(a,21).role),l(a,24,0,t.cb(a,25).role),l(a,40,0,t.cb(a,41).role),l(a,54,0,t.lb(a,54,0,t.cb(a,55).transform(n.userDataSource)))})}var y=t.Oa("amexio-d3-chart-histogram-demo",m,function(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"amexio-d3-chart-histogram-demo",[],null,null,null,S,p)),t.Ra(1,114688,null,0,m,[b.c],null,null)],function(l,a){l(a,1,0)},null)},{},{},[]),C=n("gIcY"),R=n("ZYCi");n.d(a,"D3HistogramChartDemoModuleNgFactory",function(){return w});var w=t.Pa(e,[],function(l){return t.Za([t.ab(512,t.k,t.Ea,[[8,[u.a,i.a,y]],[3,t.k],t.z]),t.ab(4608,h.o,h.n,[t.w,[2,h.x]]),t.ab(4608,C.G,C.G,[]),t.ab(4608,b.i,b.o,[h.d,t.D,b.m]),t.ab(4608,b.p,b.p,[b.i,b.n]),t.ab(5120,b.a,function(l){return[l]},[b.p]),t.ab(4608,b.l,b.l,[]),t.ab(6144,b.j,null,[b.l]),t.ab(4608,b.h,b.h,[b.j]),t.ab(6144,b.b,null,[b.h]),t.ab(4608,b.f,b.k,[b.b,t.s]),t.ab(4608,b.c,b.c,[b.f]),t.ab(4608,d.Ta,d.Ta,[b.c]),t.ab(4608,d.ob,d.ob,[]),t.ab(4608,d.db,d.db,[t.D]),t.ab(4608,d.B,d.B,[]),t.ab(4608,d.Lb,d.Lb,[]),t.ab(4608,d.ScriptLoadService,d.ScriptLoadService,[]),t.ab(4608,C.f,C.f,[]),t.ab(4608,d.GoogleMapScriptService,d.GoogleMapScriptService,[]),t.ab(4608,s.j,s.j,[t.D]),t.ab(1073742336,h.c,h.c,[]),t.ab(1073742336,C.D,C.D,[]),t.ab(1073742336,C.l,C.l,[]),t.ab(1073742336,b.e,b.e,[]),t.ab(1073742336,b.d,b.d,[]),t.ab(1073742336,o.b,o.b,[]),t.ab(1073742336,d.Eb,d.Eb,[]),t.ab(1073742336,d.D,d.D,[]),t.ab(1073742336,d.x,d.x,[]),t.ab(1073742336,d.G,d.G,[]),t.ab(1073742336,d.I,d.I,[]),t.ab(1073742336,C.z,C.z,[]),t.ab(1073742336,d.L,d.L,[]),t.ab(1073742336,d.p,d.p,[]),t.ab(1073742336,d.Aa,d.Aa,[]),t.ab(1073742336,R.n,R.n,[[2,R.t],[2,R.m]]),t.ab(1073742336,s.a,s.a,[]),t.ab(1073742336,e,e,[]),t.ab(256,b.m,"XSRF-TOKEN",[]),t.ab(256,b.n,"X-XSRF-TOKEN",[]),t.ab(1024,R.i,function(){return[[{path:"",component:m,pathMatch:"full"}]]},[])])})}}]);