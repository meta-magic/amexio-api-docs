(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{U89g:function(l,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u});var t=n("CcnG"),a=(n("d2mR"),n("Ip0R"),t.Qa({encapsulation:2,styles:[],data:{}}));function u(l){return t.mb(0,[],null,null)}},pn2x:function(l,e,n){"use strict";n.r(e);var t=n("CcnG"),a=function(){},u=n("gTgE"),i=n("pMnS"),o=n("U89g"),r=n("d2mR"),c=n("O4vx"),d=n("thSD"),s=n("Jovw"),b=n("Ip0R"),m=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.ngOnInit=function(){this.userDefineColorData=[["Year","Sales","Expenses","Profit"],["2014",1e3,400,200],["2015",1170,460,250],["2016",660,1120,300],["2017",1030,540,350],["2018",1090,740,450],["2019",1050,640,350]]},l.prototype.onDefaultChartClick=function(l){this.userDataSource=l},l.prototype.onUserDefineLegendClick=function(l){this.userDataSource=l},l.prototype.getHtmlAndTypeScriptCode=function(){var l,e,n=this;this.http.get("assets/data/code/charts/D3Charts/d3multiserieschart/d3chart.html",{responseType:"text"}).subscribe(function(e){l=e},function(l){},function(){n.htmlCode=l}),this.http.get("assets/data/code/charts/D3Charts/d3multiserieschart/d3chart.text",{responseType:"text"}).subscribe(function(l){e=l},function(l){},function(){n.typeScriptCode=e}),this.http.get("assets/data/code/charts/D3Charts/d3multiserieschart/datasource.json",{responseType:"text"}).subscribe(function(l){e=l},function(l){},function(){n.dataSourceCode=e}),this.http.get("assets/data/code/charts/D3Charts/d3multiserieschart/usersource.json",{responseType:"text"}).subscribe(function(l){e=l},function(l){},function(){n.userDataSourceCode=e})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),h=n("t/Na"),p=t.Qa({encapsulation:2,styles:[],data:{}});function f(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,r.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.htmlCode,"html")},null)}function x(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,r.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.typeScriptCode,"typescript")},null)}function y(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,117,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,e,n){var a=!0;return"document:click"===e&&(a=!1!==t.cb(l,1).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==t.cb(l,1).onscroll()&&a),a},u.Pb,u.i)),t.Ra(1,5357568,null,3,c.h,[],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(l()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.Yb,u.r)),t.Ra(6,114688,[[1,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" D3 multiseries Chart "])),(l()(),t.Sa(8,0,null,1,109,"amexio-body",[],null,null,null,u.Lb,u.e)),t.Ra(9,114688,[[2,4]],0,c.d,[],null,null),(l()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["An D3 multiseries chart that is rendered within the browser using SVG .Displays tips when hovering over points."])),(l()(),t.Sa(12,16777216,null,0,105,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var a=!0;return"document:click"===e&&(a=!1!==t.cb(l,13).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==t.cb(l,13).onscroll()&&a),a},u.jc,u.C)),t.Ra(13,5357568,null,2,c.L,[t.F,t.k,t.R],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(l()(),t.Sa(16,0,null,1,37,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.kc,u.D)),t.Ra(17,114688,[[4,4]],0,c.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Sa(18,0,null,0,35,"amexio-row",[],null,null,null,u.fc,u.y)),t.Ra(19,1163264,null,0,c.H,[],null,null),(l()(),t.Sa(20,0,null,0,33,"amexio-column",[],[[1,"class",0]],null,null,u.Rb,u.k)),t.Ra(21,114688,null,0,c.k,[],{size:[0,"size"]},null),(l()(),t.Sa(22,0,null,0,31,"amexio-row",[],null,null,null,u.fc,u.y)),t.Ra(23,1163264,null,0,c.H,[],null,null),(l()(),t.Sa(24,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.Rb,u.k)),t.Ra(25,114688,null,0,c.k,[],{size:[0,"size"]},null),(l()(),t.Sa(26,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var a=!0;return"document:click"===e&&(a=!1!==t.cb(l,27).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==t.cb(l,27).onscroll()&&a),a},u.Pb,u.i)),t.Ra(27,5357568,null,3,c.h,[],{header:[0,"header"],show:[1,"show"]},null),t.ib(603979776,6,{amexioHeader:1}),t.ib(603979776,7,{amexioBody:1}),t.ib(603979776,8,{amexioFooter:1}),(l()(),t.Sa(31,0,null,0,2,"amexio-header",[],null,null,null,u.Yb,u.r)),t.Ra(32,114688,[[6,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" D3-multiseries-chart "])),(l()(),t.Sa(34,0,null,1,3,"amexio-body",[],null,null,null,u.Lb,u.e)),t.Ra(35,114688,[[7,4]],0,c.d,[],null,null),(l()(),t.Sa(36,0,null,0,1,"amexio-d3-chart-multiseries",[],null,[[null,"onChartClick"],[null,"onLegendClick"]],function(l,e,n){var t=!0,a=l.component;return"onChartClick"===e&&(t=!1!==a.onDefaultChartClick(n)&&t),"onLegendClick"===e&&(t=!1!==a.onUserDefineLegendClick(n)&&t),t},d.l,d.f)),t.Ra(37,114688,null,0,s.g,[],{data:[0,"data"],title:[1,"title"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick"}),(l()(),t.Sa(38,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.Rb,u.k)),t.Ra(39,114688,null,0,c.k,[],{size:[0,"size"]},null),(l()(),t.Sa(40,0,null,0,13,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,e,n){var a=!0;return"document:click"===e&&(a=!1!==t.cb(l,41).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==t.cb(l,41).onscroll()&&a),a},u.Pb,u.i)),t.Ra(41,5357568,null,3,c.h,[],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),t.ib(603979776,9,{amexioHeader:1}),t.ib(603979776,10,{amexioBody:1}),t.ib(603979776,11,{amexioFooter:1}),(l()(),t.Sa(45,0,null,0,2,"amexio-header",[],null,null,null,u.Yb,u.r)),t.Ra(46,114688,[[9,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" Click On Legend/Click On Chart "])),(l()(),t.Sa(48,0,null,1,5,"amexio-body",[],null,null,null,u.Lb,u.e)),t.Ra(49,114688,[[10,4]],0,c.d,[],null,null),(l()(),t.Sa(50,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),t.Sa(51,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),t.kb(52,null,["",""])),t.eb(0,b.f,[]),(l()(),t.Sa(54,0,null,1,44,"amexio-tab",[["title","API Reference"]],null,null,null,u.kc,u.D)),t.Ra(55,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),t.Sa(56,0,null,0,18,"amexio-datagrid",[["title","D3-multiseries-Chart Properties<amexio-d3-chart-multiseries>"]],null,[["document","scroll"],["document","click"]],function(l,e,n){var a=!0;return"document:scroll"===e&&(a=!1!==t.cb(l,57).onscroll()&&a),"document:click"===e&&(a=!1!==t.cb(l,57).onclick()&&a),a},u.nd,u.gb)),t.Ra(57,1163264,null,1,c.Nb,[t.l,c.Ka,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,12,{columnRef:1}),(l()(),t.Sa(59,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),t.Ra(60,49152,[[12,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,13,{headerTemplate:0}),t.ib(335544320,14,{bodyTemplate:0}),(l()(),t.Sa(63,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),t.Ra(64,49152,[[12,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,15,{headerTemplate:0}),t.ib(335544320,16,{bodyTemplate:0}),(l()(),t.Sa(67,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),t.Ra(68,49152,[[12,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,17,{headerTemplate:0}),t.ib(335544320,18,{bodyTemplate:0}),(l()(),t.Sa(71,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),t.Ra(72,49152,[[12,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,19,{headerTemplate:0}),t.ib(335544320,20,{bodyTemplate:0}),(l()(),t.Sa(75,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(76,0,null,0,10,"amexio-datagrid",[["title","Legend <amexio-d3-chart-multiseries>"]],null,[["document","scroll"],["document","click"]],function(l,e,n){var a=!0;return"document:scroll"===e&&(a=!1!==t.cb(l,77).onscroll()&&a),"document:click"===e&&(a=!1!==t.cb(l,77).onclick()&&a),a},u.nd,u.gb)),t.Ra(77,1163264,null,1,c.Nb,[t.l,c.Ka,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,21,{columnRef:1}),(l()(),t.Sa(79,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),t.Ra(80,49152,[[21,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,22,{headerTemplate:0}),t.ib(335544320,23,{bodyTemplate:0}),(l()(),t.Sa(83,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),t.Ra(84,49152,[[21,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,24,{headerTemplate:0}),t.ib(335544320,25,{bodyTemplate:0}),(l()(),t.Sa(87,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(88,0,null,0,10,"amexio-datagrid",[["title","Chart Event <amexio-d3-chart-multiseries>"]],null,[["document","scroll"],["document","click"]],function(l,e,n){var a=!0;return"document:scroll"===e&&(a=!1!==t.cb(l,89).onscroll()&&a),"document:click"===e&&(a=!1!==t.cb(l,89).onclick()&&a),a},u.nd,u.gb)),t.Ra(89,1163264,null,1,c.Nb,[t.l,c.Ka,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,26,{columnRef:1}),(l()(),t.Sa(91,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),t.Ra(92,49152,[[26,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,27,{headerTemplate:0}),t.ib(335544320,28,{bodyTemplate:0}),(l()(),t.Sa(95,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),t.Ra(96,49152,[[26,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,29,{headerTemplate:0}),t.ib(335544320,30,{bodyTemplate:0}),(l()(),t.Sa(99,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,u.kc,u.D)),t.Ra(100,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),t.Sa(101,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t.Sa(102,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,u.mc,u.F)),t.Ra(103,5357568,null,1,c.Q,[t.F],null,null),t.ib(603979776,31,{queryTabs:1}),(l()(),t.Sa(105,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.kc,u.D)),t.Ra(106,114688,[[31,4]],0,c.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Ja(16777216,null,0,1,null,f)),t.Ra(108,16384,null,0,b.l,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(109,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.kc,u.D)),t.Ra(110,114688,[[31,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),t.Ja(16777216,null,0,1,null,x)),t.Ra(112,16384,null,0,b.l,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(113,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.kc,u.D)),t.Ra(114,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),t.Sa(115,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Amexio Sandbox"])),(l()(),t.Sa(117,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-d3 bar chart?embed=1&file=app/charts/d3 bar chart/d3 bar chart.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,e){var n=e.component;l(e,1,0,"true"),l(e,6,0),l(e,9,0),l(e,13,0),l(e,17,0,"Demo","true"),l(e,19,0),l(e,21,0,12),l(e,23,0),l(e,25,0,8),l(e,27,0,!0,"true"),l(e,32,0),l(e,35,0),l(e,37,0,n.userDefineColorData,"MULTISERIESBARCHART"),l(e,39,0,4),l(e,41,0,"true",98),l(e,46,0),l(e,49,0),l(e,55,0,"API Reference"),l(e,57,0,"D3-multiseries-Chart Properties<amexio-d3-chart-multiseries>","assets/apireference/charts/d3charts/d3multiserieschart.json","get","properties",!1,!1),l(e,60,0,"Name","name",!1,"string",15),l(e,64,0,"Type","type",!1,"string",15),l(e,68,0,"Default","default",!1,"string",15),l(e,72,0,"Description","description",!1,"string",45),l(e,77,0,"Legend <amexio-d3-chart-multiseries>","assets/apireference/charts/d3charts/d3multiserieschart.json","get","legend",!1,!1),l(e,80,0,"Name","name",!1,"string",15),l(e,84,0,"Description","description",!1,"string",65),l(e,89,0,"Chart Event <amexio-d3-chart-multiseries>","assets/apireference/charts/d3charts/d3multiserieschart.json","get","chartevent",!1,!1),l(e,92,0,"Name","name",!1,"string",15),l(e,96,0,"Description","description",!1,"string",65),l(e,100,0,"Source"),l(e,103,0),l(e,106,0,"HTML",!0),l(e,108,0,n.htmlCode),l(e,110,0,"Type Script"),l(e,112,0,n.typeScriptCode),l(e,114,0,"Live")},function(l,e){var n=e.component;l(e,20,0,t.cb(e,21).role),l(e,24,0,t.cb(e,25).role),l(e,38,0,t.cb(e,39).role),l(e,52,0,t.lb(e,52,0,t.cb(e,53).transform(n.userDataSource)))})}var S=t.Oa("amexio-d3-chart-multiseries-demo",m,function(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"amexio-d3-chart-multiseries-demo",[],null,null,null,y,p)),t.Ra(1,114688,null,0,m,[h.c],null,null)],function(l,e){l(e,1,0)},null)},{},{},[]),g=n("gIcY"),k=n("ZYCi");n.d(e,"D3MultiSeriesChartDemoModuleNgFactory",function(){return R});var R=t.Pa(a,[],function(l){return t.Za([t.ab(512,t.k,t.Ea,[[8,[u.a,i.a,S]],[3,t.k],t.z]),t.ab(4608,b.n,b.m,[t.w,[2,b.w]]),t.ab(4608,g.r,g.r,[]),t.ab(4608,h.h,h.n,[b.c,t.D,h.l]),t.ab(4608,h.o,h.o,[h.h,h.m]),t.ab(5120,h.a,function(l){return[l]},[h.o]),t.ab(4608,h.k,h.k,[]),t.ab(6144,h.i,null,[h.k]),t.ab(4608,h.g,h.g,[h.i]),t.ab(6144,h.b,null,[h.g]),t.ab(4608,h.f,h.j,[h.b,t.s]),t.ab(4608,h.c,h.c,[h.f]),t.ab(4608,c.Ka,c.Ka,[h.c]),t.ab(4608,c.Ua,c.Ua,[t.D]),t.ab(4608,c.bb,c.bb,[]),t.ab(4608,c.qc,c.qc,[]),t.ab(1073742336,b.b,b.b,[]),t.ab(1073742336,g.o,g.o,[]),t.ab(1073742336,g.e,g.e,[]),t.ab(1073742336,h.e,h.e,[]),t.ab(1073742336,h.d,h.d,[]),t.ab(1073742336,r.b,r.b,[]),t.ab(1073742336,c.w,c.w,[]),t.ab(1073742336,c.u,c.u,[]),t.ab(1073742336,c.z,c.z,[]),t.ab(1073742336,c.B,c.B,[]),t.ab(1073742336,c.E,c.E,[]),t.ab(1073742336,c.m,c.m,[]),t.ab(1073742336,c.S,c.S,[]),t.ab(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),t.ab(1073742336,s.a,s.a,[]),t.ab(1073742336,a,a,[]),t.ab(256,h.l,"XSRF-TOKEN",[]),t.ab(256,h.m,"X-XSRF-TOKEN",[]),t.ab(1024,k.i,function(){return[[{path:"",component:m,pathMatch:"full"}]]},[])])})}}]);