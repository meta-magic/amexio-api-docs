(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{T16q:function(e,t,l){"use strict";l.r(t);var a=l("CcnG"),n=function(){},i=l("gTgE"),r=l("pMnS"),u=l("U89g"),o=l("d2mR"),d=l("O4vx"),s=l("Ip0R"),c=function(){function e(e){this.http=e,this.comboChartData=[["Month","Bolivia","Ecuador","Madagascar","Papua New Guinea","Rwanda","Average"],["2004/05",165,938,522,998,450,614.6],["2005/06",135,1120,599,1268,288,682],["2006/07",157,1167,587,807,397,623],["2007/08",139,1110,615,968,215,609.4],["2008/09",136,691,629,1026,366,569.6]],this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,t,l=this;this.http.get("assets/data/code/charts/combochart/chart.html",{responseType:"text"}).subscribe(function(t){e=t},function(e){},function(){l.htmlCode=e}),this.http.get("assets/data/code/charts/combochart/chart.text",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){l.typeScriptCode=t}),this.http.get("assets/data/code/charts/combochart/datasource.json",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){l.dataSourceCode=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.ngOnInit=function(){},e}(),h=l("t/Na"),p=a.La({encapsulation:2,styles:[],data:{}});function m(e){return a.hb(0,[(e()(),a.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Na(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ma(2,4243456,null,0,o.a,[a.B,a.k],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.htmlCode,"html")},null)}function b(e){return a.hb(0,[(e()(),a.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Na(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ma(2,4243456,null,0,o.a,[a.B,a.k],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.typeScriptCode,"typescript")},null)}function g(e){return a.hb(0,[(e()(),a.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Na(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ma(2,4243456,null,0,o.a,[a.B,a.k],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.dataSourceCode,"json")},null)}function f(e){return a.hb(0,[(e()(),a.Na(0,0,null,null,160,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,t,l){var n=!0;return"document:click"===t&&(n=!1!==a.Xa(e,1).onWindowClick()&&n),"document:scroll"===t&&(n=!1!==a.Xa(e,1).onscroll()&&n),n},i.Hb,i.h)),a.Ma(1,5357568,null,3,d.g,[],{header:[0,"header"]},null),a.db(603979776,1,{amexioHeader:1}),a.db(603979776,2,{amexioBody:1}),a.db(603979776,3,{amexioFooter:1}),(e()(),a.Na(5,0,null,0,2,"amexio-header",[],null,null,null,i.Qb,i.q)),a.Ma(6,114688,[[1,4]],0,d.u,[],null,null),(e()(),a.fb(-1,0,[" Combo Chart "])),(e()(),a.Na(8,0,null,1,152,"amexio-body",[],null,null,null,i.Db,i.d)),a.Ma(9,114688,[[2,4]],0,d.c,[],null,null),(e()(),a.Na(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),a.fb(-1,null,["A chart that lets you render each series as a different marker type from the following list: line,bars"])),(e()(),a.Na(12,16777216,null,0,148,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,t,l){var n=!0;return"document:click"===t&&(n=!1!==a.Xa(e,13).onWindowClick()&&n),"document:scroll"===t&&(n=!1!==a.Xa(e,13).onscroll()&&n),n},i.ac,i.A)),a.Ma(13,5357568,null,2,d.J,[a.B,a.j,a.M],null,null),a.db(603979776,4,{queryTabs:1}),a.db(603979776,5,{queryAction:1}),(e()(),a.Na(16,0,null,1,20,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.bc,i.B)),a.Ma(17,114688,[[4,4]],0,d.K,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Na(18,0,null,0,18,"amexio-row",[],null,null,null,i.Wb,i.w)),a.Ma(19,1163264,null,0,d.F,[],null,null),(e()(),a.Na(20,0,null,0,16,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.Jb,i.j)),a.Ma(21,114688,null,0,d.j,[],{size:[0,"size"]},null),(e()(),a.Na(22,0,null,0,14,"amexio-chart-combo",[],null,null,null,i.rc,i.R)),a.Ma(23,1163264,null,5,d.Fa,[d.Ca],{width:[0,"width"],height:[1,"height"],data:[2,"data"]},null),a.db(603979776,6,{chartLegendComp:1}),a.db(603979776,7,{chartTitleComp:1}),a.db(603979776,8,{chartAreaComp:1}),a.db(603979776,9,{horizontalComp:1}),a.db(603979776,10,{verticalComp:1}),(e()(),a.Na(29,0,null,null,1,"amexio-chart-title",[],null,null,null,i.pc,i.P)),a.Ma(30,114688,[[7,4]],0,d.Da,[],{title:[0,"title"]},null),(e()(),a.Na(31,0,null,null,1,"amexio-chart-legend",[],null,null,null,i.oc,i.O)),a.Ma(32,114688,[[6,4]],0,d.Ba,[],{position:[0,"position"]},null),(e()(),a.Na(33,0,null,null,1,"amexio-chart-horizontal-axis",[],null,null,null,i.Cc,i.Ca)),a.Ma(34,114688,[[9,4]],0,d.Wa,[],{title:[0,"title"]},null),(e()(),a.Na(35,0,null,null,1,"amexio-chart-vertical-axis",[],null,null,null,i.Lc,i.La)),a.Ma(36,114688,[[10,4]],0,d.kb,[],{title:[0,"title"]},null),(e()(),a.Na(37,0,null,1,100,"amexio-tab",[["title","API Reference"]],null,null,null,i.bc,i.B)),a.Ma(38,114688,[[4,4]],0,d.K,[],{title:[0,"title"]},null),(e()(),a.Na(39,0,null,0,18,"amexio-datagrid",[["title","Chart Properties<amexio-chart-combo>"]],null,[["document","scroll"],["document","click"]],function(e,t,l){var n=!0;return"document:scroll"===t&&(n=!1!==a.Xa(e,40).onscroll()&&n),"document:click"===t&&(n=!1!==a.Xa(e,40).onclick()&&n),n},i.ad,i.ab)),a.Ma(40,1425408,null,1,d.Gb,[a.k,d.Ga,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.db(603979776,11,{columnRef:1}),(e()(),a.Na(42,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(43,49152,[[11,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,12,{headerTemplate:0}),a.db(335544320,13,{bodyTemplate:0}),(e()(),a.Na(46,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(47,49152,[[11,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,14,{headerTemplate:0}),a.db(335544320,15,{bodyTemplate:0}),(e()(),a.Na(50,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(51,49152,[[11,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,16,{headerTemplate:0}),a.db(335544320,17,{bodyTemplate:0}),(e()(),a.Na(54,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(55,49152,[[11,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,18,{headerTemplate:0}),a.db(335544320,19,{bodyTemplate:0}),(e()(),a.Na(58,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),a.Na(59,0,null,0,18,"amexio-datagrid",[["title","Chart Title Properties<amexio-chart-title>"]],null,[["document","scroll"],["document","click"]],function(e,t,l){var n=!0;return"document:scroll"===t&&(n=!1!==a.Xa(e,60).onscroll()&&n),"document:click"===t&&(n=!1!==a.Xa(e,60).onclick()&&n),n},i.ad,i.ab)),a.Ma(60,1425408,null,1,d.Gb,[a.k,d.Ga,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.db(603979776,20,{columnRef:1}),(e()(),a.Na(62,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(63,49152,[[20,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,21,{headerTemplate:0}),a.db(335544320,22,{bodyTemplate:0}),(e()(),a.Na(66,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(67,49152,[[20,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,23,{headerTemplate:0}),a.db(335544320,24,{bodyTemplate:0}),(e()(),a.Na(70,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(71,49152,[[20,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,25,{headerTemplate:0}),a.db(335544320,26,{bodyTemplate:0}),(e()(),a.Na(74,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(75,49152,[[20,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,27,{headerTemplate:0}),a.db(335544320,28,{bodyTemplate:0}),(e()(),a.Na(78,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),a.Na(79,0,null,0,18,"amexio-datagrid",[["title","Chart Legend Properties<amexio-chart-legend>"]],null,[["document","scroll"],["document","click"]],function(e,t,l){var n=!0;return"document:scroll"===t&&(n=!1!==a.Xa(e,80).onscroll()&&n),"document:click"===t&&(n=!1!==a.Xa(e,80).onclick()&&n),n},i.ad,i.ab)),a.Ma(80,1425408,null,1,d.Gb,[a.k,d.Ga,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.db(603979776,29,{columnRef:1}),(e()(),a.Na(82,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(83,49152,[[29,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,30,{headerTemplate:0}),a.db(335544320,31,{bodyTemplate:0}),(e()(),a.Na(86,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(87,49152,[[29,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,32,{headerTemplate:0}),a.db(335544320,33,{bodyTemplate:0}),(e()(),a.Na(90,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(91,49152,[[29,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,34,{headerTemplate:0}),a.db(335544320,35,{bodyTemplate:0}),(e()(),a.Na(94,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(95,49152,[[29,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,36,{headerTemplate:0}),a.db(335544320,37,{bodyTemplate:0}),(e()(),a.Na(98,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),a.Na(99,0,null,0,18,"amexio-datagrid",[["title","Chart Horizontal Axis<amexio-chart-horizontal-axis>"]],null,[["document","scroll"],["document","click"]],function(e,t,l){var n=!0;return"document:scroll"===t&&(n=!1!==a.Xa(e,100).onscroll()&&n),"document:click"===t&&(n=!1!==a.Xa(e,100).onclick()&&n),n},i.ad,i.ab)),a.Ma(100,1425408,null,1,d.Gb,[a.k,d.Ga,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.db(603979776,38,{columnRef:1}),(e()(),a.Na(102,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(103,49152,[[38,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,39,{headerTemplate:0}),a.db(335544320,40,{bodyTemplate:0}),(e()(),a.Na(106,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(107,49152,[[38,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,41,{headerTemplate:0}),a.db(335544320,42,{bodyTemplate:0}),(e()(),a.Na(110,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(111,49152,[[38,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,43,{headerTemplate:0}),a.db(335544320,44,{bodyTemplate:0}),(e()(),a.Na(114,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(115,49152,[[38,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,45,{headerTemplate:0}),a.db(335544320,46,{bodyTemplate:0}),(e()(),a.Na(118,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),a.Na(119,0,null,0,18,"amexio-datagrid",[["title","Chart Vertical Axis<amexio-chart-vertical-axis>"]],null,[["document","scroll"],["document","click"]],function(e,t,l){var n=!0;return"document:scroll"===t&&(n=!1!==a.Xa(e,120).onscroll()&&n),"document:click"===t&&(n=!1!==a.Xa(e,120).onclick()&&n),n},i.ad,i.ab)),a.Ma(120,1425408,null,1,d.Gb,[a.k,d.Ga,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.db(603979776,47,{columnRef:1}),(e()(),a.Na(122,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(123,49152,[[47,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,48,{headerTemplate:0}),a.db(335544320,49,{bodyTemplate:0}),(e()(),a.Na(126,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(127,49152,[[47,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,50,{headerTemplate:0}),a.db(335544320,51,{bodyTemplate:0}),(e()(),a.Na(130,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(131,49152,[[47,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,52,{headerTemplate:0}),a.db(335544320,53,{bodyTemplate:0}),(e()(),a.Na(134,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),a.Ma(135,49152,[[47,4]],2,d.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,54,{headerTemplate:0}),a.db(335544320,55,{bodyTemplate:0}),(e()(),a.Na(138,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,i.bc,i.B)),a.Ma(139,114688,[[4,4]],0,d.K,[],{title:[0,"title"]},null),(e()(),a.Na(140,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),a.Na(141,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,i.dc,i.D)),a.Ma(142,5357568,null,1,d.O,[a.B],null,null),a.db(603979776,56,{queryTabs:1}),(e()(),a.Na(144,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.bc,i.B)),a.Ma(145,114688,[[56,4]],0,d.K,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Ea(16777216,null,0,1,null,m)),a.Ma(147,16384,null,0,s.l,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(e()(),a.Na(148,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.bc,i.B)),a.Ma(149,114688,[[56,4]],0,d.K,[],{title:[0,"title"]},null),(e()(),a.Ea(16777216,null,0,1,null,b)),a.Ma(151,16384,null,0,s.l,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(e()(),a.Na(152,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,i.bc,i.B)),a.Ma(153,114688,[[56,4]],0,d.K,[],{title:[0,"title"]},null),(e()(),a.Ea(16777216,null,0,1,null,g)),a.Ma(155,16384,null,0,s.l,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(e()(),a.Na(156,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.bc,i.B)),a.Ma(157,114688,[[4,4]],0,d.K,[],{title:[0,"title"]},null),(e()(),a.Na(158,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),a.fb(-1,null,["Amexio Sandbox"])),(e()(),a.Na(160,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-combochart?embed=1&file=app/charts/combochart/combochart.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,t){var l=t.component;e(t,1,0,"true"),e(t,6,0),e(t,9,0),e(t,13,0),e(t,17,0,"Demo","true"),e(t,19,0),e(t,21,0,"12"),e(t,23,0,"100%","400px",l.comboChartData),e(t,30,0,"Monthly Coffee Production by Country"),e(t,32,0,"bottom"),e(t,34,0,"Month"),e(t,36,0,"Cups"),e(t,38,0,"API Reference"),e(t,40,0,"Chart Properties<amexio-chart-combo>","assets/apireference/charts/combochart.json","get","chart",!1,!1),e(t,43,0,"Name","name",!1,"string",15),e(t,47,0,"Type","type",!1,"string",10),e(t,51,0,"Default","default",!1,"string",10),e(t,55,0,"Description","description",!1,"string",65),e(t,60,0,"Chart Title Properties<amexio-chart-title>","assets/apireference/charts/combochart.json","get","chartTitle",!1,!1),e(t,63,0,"Name","name",!1,"string",15),e(t,67,0,"Type","type",!1,"string",10),e(t,71,0,"Default","default",!1,"string",10),e(t,75,0,"Description","description",!1,"string",65),e(t,80,0,"Chart Legend Properties<amexio-chart-legend>","assets/apireference/charts/combochart.json","get","chartLegend",!1,!1),e(t,83,0,"Name","name",!1,"string",15),e(t,87,0,"Type","type",!1,"string",10),e(t,91,0,"Default","default",!1,"string",10),e(t,95,0,"Description","description",!1,"string",65),e(t,100,0,"Chart Horizontal Axis<amexio-chart-horizontal-axis>","assets/apireference/charts/combochart.json","get","horizontalAxis",!1,!1),e(t,103,0,"Name","name",!1,"string",15),e(t,107,0,"Type","type",!1,"string",10),e(t,111,0,"Default","default",!1,"string",10),e(t,115,0,"Description","description",!1,"string",65),e(t,120,0,"Chart Vertical Axis<amexio-chart-vertical-axis>","assets/apireference/charts/combochart.json","get","verticalAxis",!1,!1),e(t,123,0,"Name","name",!1,"string",15),e(t,127,0,"Type","type",!1,"string",10),e(t,131,0,"Default","default",!1,"string",10),e(t,135,0,"Description","description",!1,"string",65),e(t,139,0,"Source"),e(t,142,0),e(t,145,0,"HTML",!0),e(t,147,0,l.htmlCode),e(t,149,0,"Type Script"),e(t,151,0,l.typeScriptCode),e(t,153,0,"Data Source"),e(t,155,0,l.dataSourceCode),e(t,157,0,"Live")},function(e,t){e(t,20,0,a.Xa(t,21).role)})}var y=a.Ja("combo-chart-demo",c,function(e){return a.hb(0,[(e()(),a.Na(0,0,null,null,1,"combo-chart-demo",[],null,null,null,f,p)),a.Ma(1,114688,null,0,c,[h.c],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),x=l("gIcY"),w=l("ZYCi");l.d(t,"ComboChartDemoModuleNgFactory",function(){return k});var k=a.Ka(n,[],function(e){return a.Ua([a.Va(512,a.j,a.Z,[[8,[i.a,r.a,y]],[3,a.j],a.v]),a.Va(4608,s.n,s.m,[a.s,[2,s.w]]),a.Va(4608,x.r,x.r,[]),a.Va(4608,h.h,h.n,[s.c,a.z,h.l]),a.Va(4608,h.o,h.o,[h.h,h.m]),a.Va(5120,h.a,function(e){return[e]},[h.o]),a.Va(4608,h.k,h.k,[]),a.Va(6144,h.i,null,[h.k]),a.Va(4608,h.g,h.g,[h.i]),a.Va(6144,h.b,null,[h.g]),a.Va(4608,h.f,h.j,[h.b,a.p]),a.Va(4608,h.c,h.c,[h.f]),a.Va(4608,d.Ga,d.Ga,[h.c]),a.Va(4608,d.Qa,d.Qa,[a.z]),a.Va(4608,d.Xa,d.Xa,[]),a.Va(4608,d.ic,d.ic,[]),a.Va(4608,d.Ca,d.Ca,[]),a.Va(1073742336,s.b,s.b,[]),a.Va(1073742336,x.o,x.o,[]),a.Va(1073742336,x.e,x.e,[]),a.Va(1073742336,h.e,h.e,[]),a.Va(1073742336,h.d,h.d,[]),a.Va(1073742336,d.v,d.v,[]),a.Va(1073742336,d.t,d.t,[]),a.Va(1073742336,d.y,d.y,[]),a.Va(1073742336,d.A,d.A,[]),a.Va(1073742336,d.D,d.D,[]),a.Va(1073742336,d.l,d.l,[]),a.Va(1073742336,d.Q,d.Q,[]),a.Va(1073742336,o.b,o.b,[]),a.Va(1073742336,d.i,d.i,[]),a.Va(1073742336,w.n,w.n,[[2,w.t],[2,w.m]]),a.Va(1073742336,n,n,[]),a.Va(256,h.l,"XSRF-TOKEN",[]),a.Va(256,h.m,"X-XSRF-TOKEN",[]),a.Va(1024,w.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})},U89g:function(e,t,l){"use strict";l.d(t,"a",function(){return n}),l.d(t,"b",function(){return i});var a=l("CcnG"),n=(l("d2mR"),l("Ip0R"),a.La({encapsulation:2,styles:[],data:{}}));function i(e){return a.hb(0,[],null,null)}},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,t,l){"use strict";l.d(t,"a",function(){return a}),l.d(t,"b",function(){return n}),l("wZee"),l("XIHC");var a=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),n=function(){}},wZee:function(e,t){var l="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a=l.Prism={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof n?new n(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var l=a.util.type(e);switch(t=t||{},l){case"Object":if(t[a.util.objId(e)])return t[a.util.objId(e)];var n={};for(var i in t[a.util.objId(e)]=n,e)e.hasOwnProperty(i)&&(n[i]=a.util.clone(e[i],t));return n;case"Array":return t[a.util.objId(e)]?t[a.util.objId(e)]:(n=[],t[a.util.objId(e)]=n,e.forEach(function(e,l){n[l]=a.util.clone(e,t)}),n)}return e}},languages:{extend:function(e,t){var l=a.util.clone(a.languages[e]);for(var n in t)l[n]=t[n];return l},insertBefore:function(e,t,l,n){var i=(n=n||a.languages)[e];if(2==arguments.length){for(var r in l=arguments[1])l.hasOwnProperty(r)&&(i[r]=l[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var r in l)l.hasOwnProperty(r)&&(u[r]=l[r]);u[o]=i[o]}return a.languages.DFS(a.languages,function(t,l){l===n[e]&&t!=e&&(this[t]=u)}),n[e]=u},DFS:function(e,t,l,n){for(var i in n=n||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],l||i),"Object"!==a.util.type(e[i])||n[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||n[a.util.objId(e[i])]||(n[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,n)):(n[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,n)))}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,l){var n={callback:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n);for(var i,r=n.elements||e.querySelectorAll(n.selector),u=0;i=r[u++];)a.highlightElement(i,!0===t,n.callback)},highlightElement:function(t,n,i){for(var r,u,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=a.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&/pre/i.test((o=t.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var d={element:t,language:r,grammar:u,code:t.textContent};if(a.hooks.run("before-sanity-check",d),!d.code||!d.grammar)return d.code&&(a.hooks.run("before-highlight",d),d.element.textContent=d.code,a.hooks.run("after-highlight",d)),void a.hooks.run("complete",d);if(a.hooks.run("before-highlight",d),n&&l.Worker){var s=new Worker(a.filename);s.onmessage=function(e){d.highlightedCode=e.data,a.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,i&&i.call(d.element),a.hooks.run("after-highlight",d),a.hooks.run("complete",d)},s.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else d.highlightedCode=a.highlight(d.code,d.grammar,d.language),a.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,i&&i.call(t),a.hooks.run("after-highlight",d),a.hooks.run("complete",d)},highlight:function(e,t,l){var i={code:e,grammar:t,language:l};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),n.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,l,n,i,r,u){var o=a.Token;for(var d in l)if(l.hasOwnProperty(d)&&l[d]){if(d==u)return;var s=l[d];s="Array"===a.util.type(s)?s:[s];for(var c=0;c<s.length;++c){var h=s[c],p=h.inside,m=!!h.lookbehind,b=!!h.greedy,g=0,f=h.alias;if(b&&!h.pattern.global){var y=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,y+"g")}h=h.pattern||h;for(var x=n,w=i;x<t.length;w+=t[x].length,++x){var k=t[x];if(t.length>e.length)return;if(!(k instanceof o)){if(b&&x!=t.length-1){if(h.lastIndex=w,!(A=h.exec(e)))break;for(var v=A.index+(m?A[1].length:0),N=A.index+A[0].length,M=x,C=w,T=t.length;M<T&&(C<N||!t[M].type&&!t[M-1].greedy);++M)v>=(C+=t[M].length)&&(++x,w=C);if(t[x]instanceof o)continue;S=M-x,k=e.slice(w,C),A.index-=w}else{h.lastIndex=0;var A=h.exec(k),S=1}if(A){m&&(g=A[1]?A[1].length:0),N=(v=A.index+g)+(A=A[0].slice(g)).length;var F=k.slice(0,v),j=k.slice(N),V=[x,S];F&&(++x,w+=F.length,V.push(F));var H=new o(d,p?a.tokenize(A,p):A,f,A,b);if(V.push(H),j&&V.push(j),Array.prototype.splice.apply(t,V),1!=S&&a.matchGrammar(e,t,l,x,w,!0,d),r)break}else if(r)break}}}}},tokenize:function(e,t,l){var n=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var l=a.hooks.all;l[e]=l[e]||[],l[e].push(t)},run:function(e,t){var l=a.hooks.all[e];if(l&&l.length)for(var n,i=0;n=l[i++];)n(t)}}},n=a.Token=function(e,t,l,a,n){this.type=e,this.content=t,this.alias=l,this.length=0|(a||"").length,this.greedy=!!n};if(n.stringify=function(e,t,l){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(l){return n.stringify(l,t,e)}).join("");var i={type:e.type,content:n.stringify(e.content,t,l),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:l};if(e.alias){var r="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}a.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!l.document)return l.addEventListener?(a.disableWorkerMessageHandler||l.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,i=t.immediateClose;l.postMessage(a.highlight(t.code,a.languages[n],n)),i&&l.close()},!1),l.Prism):l.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),l.Prism}();void 0!==e&&e.exports&&(e.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var l,n=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-(?!\*)([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(l=(t.className.match(r)||[,""])[1]),!l){var u=(n.match(/\.(\w+)$/)||[,""])[1];l=e[u]||u}var o=document.createElement("code");o.className="language-"+l,t.textContent="",o.textContent="Loading\u2026",t.appendChild(o);var d=new XMLHttpRequest;d.open("GET",n,!0),d.onreadystatechange=function(){4==d.readyState&&(d.status<400&&d.responseText?(o.textContent=d.responseText,a.highlightElement(o)):o.textContent=d.status>=400?"\u2716 Error "+d.status+" while fetching file: "+d.statusText:"\u2716 Error: File does not exist or is empty")},t.hasAttribute("data-download-link")&&a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(){var e=document.createElement("a");return e.textContent=t.getAttribute("data-download-link-label")||"Download",e.setAttribute("download",""),e.href=n,e}),d.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);