(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{GuBB:function(e,t,l){"use strict";l.r(t);var a=l("CcnG"),n=function(){},i=l("gTgE"),r=l("pMnS"),u=l("U89g"),d=l("d2mR"),o=l("O4vx"),s=l("Ip0R"),c=function(){function e(e){this.http=e,this.bubbleChartData=[["ID","Life Expectancy","Fertility Rate","Region","Population"],["CAN",80.66,1.67,"North America",33739900],["DEU",79.84,1.36,"Europe",81902307],["DNK",78.6,1.84,"Europe",5523095],["EGY",72.73,2.78,"Middle East",79716203],["GBR",80.05,2,"Europe",61801570],["IRN",72.49,1.7,"Middle East",73137148],["IRQ",68.09,4.77,"Middle East",31090763],["ISR",81.55,2.96,"Middle East",7485600],["RUS",68.6,1.54,"Europe",14185e4],["USA",78.09,2.05,"North America",307007e3]],this.bubbleChartColorAxis=[["ID","X","Y","Temperature"],["",80,167,120],["",79,136,130],["",78,184,50],["",72,278,230],["",81,200,210],["",72,170,100],["",68,477,80]],this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,t,l=this;this.http.get("assets/data/code/charts/bubblechart/chart.html",{responseType:"text"}).subscribe(function(t){e=t},function(e){},function(){l.htmlCode=e}),this.http.get("assets/data/code/charts/bubblechart/chart.text",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){l.typeScriptCode=t}),this.http.get("assets/data/code/charts/bubblechart/datasource.json",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){l.dataSourceCode=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.ngOnInit=function(){},e}(),h=l("t/Na"),p=a.La({encapsulation:2,styles:[],data:{}});function b(e){return a.hb(0,[(e()(),a.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Na(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ma(2,4243456,null,0,d.a,[a.B,a.k],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.htmlCode,"html")},null)}function m(e){return a.hb(0,[(e()(),a.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Na(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ma(2,4243456,null,0,d.a,[a.B,a.k],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.typeScriptCode,"typescript")},null)}function g(e){return a.hb(0,[(e()(),a.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Na(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ma(2,4243456,null,0,d.a,[a.B,a.k],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.dataSourceCode,"json")},null)}function f(e){return a.hb(0,[(e()(),a.Na(0,0,null,null,168,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,t,l){var n=!0;return"document:click"===t&&(n=!1!==a.Xa(e,1).onWindowClick()&&n),"document:scroll"===t&&(n=!1!==a.Xa(e,1).onscroll()&&n),n},i.Lb,i.i)),a.Ma(1,5357568,null,3,o.h,[],{header:[0,"header"]},null),a.db(603979776,1,{amexioHeader:1}),a.db(603979776,2,{amexioBody:1}),a.db(603979776,3,{amexioFooter:1}),(e()(),a.Na(5,0,null,0,2,"amexio-header",[],null,null,null,i.Ub,i.r)),a.Ma(6,114688,[[1,4]],0,o.v,[],null,null),(e()(),a.fb(-1,0,[" Bubble Chart "])),(e()(),a.Na(8,0,null,1,160,"amexio-body",[],null,null,null,i.Hb,i.e)),a.Ma(9,114688,[[2,4]],0,o.d,[],null,null),(e()(),a.Na(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),a.fb(-1,null,["A bubble chart is used to visualize a data set with two to four dimensions. The first two dimensions are visualized as coordinates, the third as color and the fourth as size."])),(e()(),a.Na(12,16777216,null,0,156,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,t,l){var n=!0;return"document:click"===t&&(n=!1!==a.Xa(e,13).onWindowClick()&&n),"document:scroll"===t&&(n=!1!==a.Xa(e,13).onscroll()&&n),n},i.fc,i.C)),a.Ma(13,5357568,null,2,o.L,[a.B,a.j,a.M],null,null),a.db(603979776,4,{queryTabs:1}),a.db(603979776,5,{queryAction:1}),(e()(),a.Na(16,0,null,1,28,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.gc,i.D)),a.Ma(17,114688,[[4,4]],0,o.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Na(18,0,null,0,26,"amexio-row",[],null,null,null,i.bc,i.y)),a.Ma(19,1163264,null,0,o.H,[],null,null),(e()(),a.Na(20,0,null,0,14,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,i.Nb,i.k)),a.Ma(21,114688,null,0,o.k,[],{size:[0,"size"]},null),(e()(),a.Na(22,0,null,0,12,"amexio-chart-bubble",[],null,null,null,i.qc,i.N)),a.Ma(23,1163264,null,5,o.Z,[o.Ea],{width:[0,"width"],height:[1,"height"],data:[2,"data"]},null),a.db(603979776,6,{chartLegendComp:1}),a.db(603979776,7,{chartTitleComp:1}),a.db(603979776,8,{chartAreaComp:1}),a.db(603979776,9,{horizontalComp:1}),a.db(603979776,10,{verticalComp:1}),(e()(),a.Na(29,0,null,null,1,"amexio-chart-title",[],null,null,null,i.uc,i.R)),a.Ma(30,114688,[[7,4]],0,o.Fa,[],{title:[0,"title"]},null),(e()(),a.Na(31,0,null,null,1,"amexio-chart-horizontal-axis",[],null,null,null,i.Hc,i.Ea)),a.Ma(32,114688,[[9,4]],0,o.Ya,[],{title:[0,"title"]},null),(e()(),a.Na(33,0,null,null,1,"amexio-chart-vertical-axis",[],null,null,null,i.Qc,i.Na)),a.Ma(34,114688,[[10,4]],0,o.mb,[],{title:[0,"title"]},null),(e()(),a.Na(35,0,null,0,9,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,i.Nb,i.k)),a.Ma(36,114688,null,0,o.k,[],{size:[0,"size"]},null),(e()(),a.Na(37,0,null,0,7,"amexio-chart-bubble",[],null,null,null,i.qc,i.N)),a.Ma(38,1163264,null,5,o.Z,[o.Ea],{width:[0,"width"],height:[1,"height"],data:[2,"data"],axiscolor:[3,"axiscolor"]},null),a.db(603979776,11,{chartLegendComp:1}),a.db(603979776,12,{chartTitleComp:1}),a.db(603979776,13,{chartAreaComp:1}),a.db(603979776,14,{horizontalComp:1}),a.db(603979776,15,{verticalComp:1}),a.Ya(44,2),(e()(),a.Na(45,0,null,1,100,"amexio-tab",[["title","API Reference"]],null,null,null,i.gc,i.D)),a.Ma(46,114688,[[4,4]],0,o.M,[],{title:[0,"title"]},null),(e()(),a.Na(47,0,null,0,18,"amexio-datagrid",[["title","Chart Properties<amexio-chart-bubble>"]],null,[["document","scroll"],["document","click"]],function(e,t,l){var n=!0;return"document:scroll"===t&&(n=!1!==a.Xa(e,48).onscroll()&&n),"document:click"===t&&(n=!1!==a.Xa(e,48).onclick()&&n),n},i.fd,i.cb)),a.Ma(48,1163264,null,1,o.Ib,[a.k,o.Ia,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.db(603979776,16,{columnRef:1}),(e()(),a.Na(50,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(51,49152,[[16,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,17,{headerTemplate:0}),a.db(335544320,18,{bodyTemplate:0}),(e()(),a.Na(54,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(55,49152,[[16,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,19,{headerTemplate:0}),a.db(335544320,20,{bodyTemplate:0}),(e()(),a.Na(58,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(59,49152,[[16,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,21,{headerTemplate:0}),a.db(335544320,22,{bodyTemplate:0}),(e()(),a.Na(62,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(63,49152,[[16,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,23,{headerTemplate:0}),a.db(335544320,24,{bodyTemplate:0}),(e()(),a.Na(66,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),a.Na(67,0,null,0,18,"amexio-datagrid",[["title","Chart Title Properties<amexio-chart-title> "]],null,[["document","scroll"],["document","click"]],function(e,t,l){var n=!0;return"document:scroll"===t&&(n=!1!==a.Xa(e,68).onscroll()&&n),"document:click"===t&&(n=!1!==a.Xa(e,68).onclick()&&n),n},i.fd,i.cb)),a.Ma(68,1163264,null,1,o.Ib,[a.k,o.Ia,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.db(603979776,25,{columnRef:1}),(e()(),a.Na(70,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(71,49152,[[25,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,26,{headerTemplate:0}),a.db(335544320,27,{bodyTemplate:0}),(e()(),a.Na(74,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(75,49152,[[25,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,28,{headerTemplate:0}),a.db(335544320,29,{bodyTemplate:0}),(e()(),a.Na(78,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(79,49152,[[25,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,30,{headerTemplate:0}),a.db(335544320,31,{bodyTemplate:0}),(e()(),a.Na(82,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(83,49152,[[25,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,32,{headerTemplate:0}),a.db(335544320,33,{bodyTemplate:0}),(e()(),a.Na(86,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),a.Na(87,0,null,0,18,"amexio-datagrid",[["title","Chart Legend Properties<amexio-chart-legend>"]],null,[["document","scroll"],["document","click"]],function(e,t,l){var n=!0;return"document:scroll"===t&&(n=!1!==a.Xa(e,88).onscroll()&&n),"document:click"===t&&(n=!1!==a.Xa(e,88).onclick()&&n),n},i.fd,i.cb)),a.Ma(88,1163264,null,1,o.Ib,[a.k,o.Ia,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.db(603979776,34,{columnRef:1}),(e()(),a.Na(90,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(91,49152,[[34,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,35,{headerTemplate:0}),a.db(335544320,36,{bodyTemplate:0}),(e()(),a.Na(94,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(95,49152,[[34,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,37,{headerTemplate:0}),a.db(335544320,38,{bodyTemplate:0}),(e()(),a.Na(98,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(99,49152,[[34,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,39,{headerTemplate:0}),a.db(335544320,40,{bodyTemplate:0}),(e()(),a.Na(102,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(103,49152,[[34,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,41,{headerTemplate:0}),a.db(335544320,42,{bodyTemplate:0}),(e()(),a.Na(106,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),a.Na(107,0,null,0,18,"amexio-datagrid",[["title","Chart Horizontal Axis<amexio-chart-horizontal-axis >"]],null,[["document","scroll"],["document","click"]],function(e,t,l){var n=!0;return"document:scroll"===t&&(n=!1!==a.Xa(e,108).onscroll()&&n),"document:click"===t&&(n=!1!==a.Xa(e,108).onclick()&&n),n},i.fd,i.cb)),a.Ma(108,1163264,null,1,o.Ib,[a.k,o.Ia,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.db(603979776,43,{columnRef:1}),(e()(),a.Na(110,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(111,49152,[[43,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,44,{headerTemplate:0}),a.db(335544320,45,{bodyTemplate:0}),(e()(),a.Na(114,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(115,49152,[[43,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,46,{headerTemplate:0}),a.db(335544320,47,{bodyTemplate:0}),(e()(),a.Na(118,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(119,49152,[[43,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,48,{headerTemplate:0}),a.db(335544320,49,{bodyTemplate:0}),(e()(),a.Na(122,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(123,49152,[[43,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,50,{headerTemplate:0}),a.db(335544320,51,{bodyTemplate:0}),(e()(),a.Na(126,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),a.Na(127,0,null,0,18,"amexio-datagrid",[["title","Chart Vertical Axis<amexio-chart-vertical-axis>"]],null,[["document","scroll"],["document","click"]],function(e,t,l){var n=!0;return"document:scroll"===t&&(n=!1!==a.Xa(e,128).onscroll()&&n),"document:click"===t&&(n=!1!==a.Xa(e,128).onclick()&&n),n},i.fd,i.cb)),a.Ma(128,1163264,null,1,o.Ib,[a.k,o.Ia,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.db(603979776,52,{columnRef:1}),(e()(),a.Na(130,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(131,49152,[[52,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,53,{headerTemplate:0}),a.db(335544320,54,{bodyTemplate:0}),(e()(),a.Na(134,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(135,49152,[[52,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,55,{headerTemplate:0}),a.db(335544320,56,{bodyTemplate:0}),(e()(),a.Na(138,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(139,49152,[[52,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,57,{headerTemplate:0}),a.db(335544320,58,{bodyTemplate:0}),(e()(),a.Na(142,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),a.Ma(143,49152,[[52,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,59,{headerTemplate:0}),a.db(335544320,60,{bodyTemplate:0}),(e()(),a.Na(146,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,i.gc,i.D)),a.Ma(147,114688,[[4,4]],0,o.M,[],{title:[0,"title"]},null),(e()(),a.Na(148,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),a.Na(149,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,i.ic,i.F)),a.Ma(150,5357568,null,1,o.Q,[a.B],null,null),a.db(603979776,61,{queryTabs:1}),(e()(),a.Na(152,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.gc,i.D)),a.Ma(153,114688,[[61,4]],0,o.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Ea(16777216,null,0,1,null,b)),a.Ma(155,16384,null,0,s.l,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(e()(),a.Na(156,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.gc,i.D)),a.Ma(157,114688,[[61,4]],0,o.M,[],{title:[0,"title"]},null),(e()(),a.Ea(16777216,null,0,1,null,m)),a.Ma(159,16384,null,0,s.l,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(e()(),a.Na(160,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,i.gc,i.D)),a.Ma(161,114688,[[61,4]],0,o.M,[],{title:[0,"title"]},null),(e()(),a.Ea(16777216,null,0,1,null,g)),a.Ma(163,16384,null,0,s.l,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(e()(),a.Na(164,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.gc,i.D)),a.Ma(165,114688,[[4,4]],0,o.M,[],{title:[0,"title"]},null),(e()(),a.Na(166,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),a.fb(-1,null,["Amexio Sandbox"])),(e()(),a.Na(168,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-bubblechart?embed=1&file=app/charts/bubblechart/bubblechart.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,t){var l=t.component;e(t,1,0,"true"),e(t,6,0),e(t,9,0),e(t,13,0),e(t,17,0,"Demo","true"),e(t,19,0),e(t,21,0,"6"),e(t,23,0,"100%","400px",l.bubbleChartData),e(t,30,0,"Correlation between life expectancy, fertility rate"),e(t,32,0,"Life Expectancy"),e(t,34,0,"Fertility Rate"),e(t,36,0,"6"),e(t,38,0,"100%","400px",l.bubbleChartColorAxis,e(t,44,0,"yellow","red")),e(t,46,0,"API Reference"),e(t,48,0,"Chart Properties<amexio-chart-bubble>","assets/apireference/charts/bubblechart.json","get","chart",!1,!1),e(t,51,0,"Name","name",!1,"string",15),e(t,55,0,"Type","type",!1,"string",10),e(t,59,0,"Default","default",!1,"string",10),e(t,63,0,"Description","description",!1,"string",65),e(t,68,0,"Chart Title Properties<amexio-chart-title> ","assets/apireference/charts/bubblechart.json","get","chartTitle",!1,!1),e(t,71,0,"Name","name",!1,"string",15),e(t,75,0,"Type","type",!1,"string",10),e(t,79,0,"Default","default",!1,"string",10),e(t,83,0,"Description","description",!1,"string",65),e(t,88,0,"Chart Legend Properties<amexio-chart-legend>","assets/apireference/charts/bubblechart.json","get","chartLegend",!1,!1),e(t,91,0,"Name","name",!1,"string",15),e(t,95,0,"Type","type",!1,"string",10),e(t,99,0,"Default","default",!1,"string",10),e(t,103,0,"Description","description",!1,"string",65),e(t,108,0,"Chart Horizontal Axis<amexio-chart-horizontal-axis >","assets/apireference/charts/bubblechart.json","get","horizontalAxis",!1,!1),e(t,111,0,"Name","name",!1,"string",15),e(t,115,0,"Type","type",!1,"string",10),e(t,119,0,"Default","default",!1,"string",10),e(t,123,0,"Description","description",!1,"string",65),e(t,128,0,"Chart Vertical Axis<amexio-chart-vertical-axis>","assets/apireference/charts/bubblechart.json","get","verticalAxis",!1,!1),e(t,131,0,"Name","name",!1,"string",15),e(t,135,0,"Type","type",!1,"string",10),e(t,139,0,"Default","default",!1,"string",10),e(t,143,0,"Description","description",!1,"string",65),e(t,147,0,"Source"),e(t,150,0),e(t,153,0,"HTML",!0),e(t,155,0,l.htmlCode),e(t,157,0,"Type Script"),e(t,159,0,l.typeScriptCode),e(t,161,0,"Data Source"),e(t,163,0,l.dataSourceCode),e(t,165,0,"Live")},function(e,t){e(t,20,0,a.Xa(t,21).role),e(t,35,0,a.Xa(t,36).role)})}var y=a.Ja("bubble-chart-demo",c,function(e){return a.hb(0,[(e()(),a.Na(0,0,null,null,1,"bubble-chart-demo",[],null,null,null,f,p)),a.Ma(1,114688,null,0,c,[h.c],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),x=l("gIcY"),w=l("ZYCi");l.d(t,"BubbleChartDemoModuleNgFactory",function(){return k});var k=a.Ka(n,[],function(e){return a.Ua([a.Va(512,a.j,a.Z,[[8,[i.a,r.a,y]],[3,a.j],a.v]),a.Va(4608,s.n,s.m,[a.s,[2,s.w]]),a.Va(4608,x.r,x.r,[]),a.Va(4608,h.h,h.n,[s.c,a.z,h.l]),a.Va(4608,h.o,h.o,[h.h,h.m]),a.Va(5120,h.a,function(e){return[e]},[h.o]),a.Va(4608,h.k,h.k,[]),a.Va(6144,h.i,null,[h.k]),a.Va(4608,h.g,h.g,[h.i]),a.Va(6144,h.b,null,[h.g]),a.Va(4608,h.f,h.j,[h.b,a.p]),a.Va(4608,h.c,h.c,[h.f]),a.Va(4608,o.Ia,o.Ia,[h.c]),a.Va(4608,o.Sa,o.Sa,[a.z]),a.Va(4608,o.Za,o.Za,[]),a.Va(4608,o.lc,o.lc,[]),a.Va(4608,o.Ea,o.Ea,[]),a.Va(1073742336,s.b,s.b,[]),a.Va(1073742336,x.o,x.o,[]),a.Va(1073742336,x.e,x.e,[]),a.Va(1073742336,h.e,h.e,[]),a.Va(1073742336,h.d,h.d,[]),a.Va(1073742336,o.w,o.w,[]),a.Va(1073742336,o.u,o.u,[]),a.Va(1073742336,o.z,o.z,[]),a.Va(1073742336,o.B,o.B,[]),a.Va(1073742336,o.E,o.E,[]),a.Va(1073742336,o.m,o.m,[]),a.Va(1073742336,o.S,o.S,[]),a.Va(1073742336,d.b,d.b,[]),a.Va(1073742336,o.j,o.j,[]),a.Va(1073742336,w.n,w.n,[[2,w.t],[2,w.m]]),a.Va(1073742336,n,n,[]),a.Va(256,h.l,"XSRF-TOKEN",[]),a.Va(256,h.m,"X-XSRF-TOKEN",[]),a.Va(1024,w.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})},U89g:function(e,t,l){"use strict";l.d(t,"a",function(){return n}),l.d(t,"b",function(){return i});var a=l("CcnG"),n=(l("d2mR"),l("Ip0R"),a.La({encapsulation:2,styles:[],data:{}}));function i(e){return a.hb(0,[],null,null)}},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,t,l){"use strict";l.d(t,"a",function(){return a}),l.d(t,"b",function(){return n}),l("wZee"),l("XIHC");var a=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),n=function(){}},wZee:function(e,t){var l="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a=l.Prism={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof n?new n(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var l=a.util.type(e);switch(t=t||{},l){case"Object":if(t[a.util.objId(e)])return t[a.util.objId(e)];var n={};for(var i in t[a.util.objId(e)]=n,e)e.hasOwnProperty(i)&&(n[i]=a.util.clone(e[i],t));return n;case"Array":return t[a.util.objId(e)]?t[a.util.objId(e)]:(n=[],t[a.util.objId(e)]=n,e.forEach(function(e,l){n[l]=a.util.clone(e,t)}),n)}return e}},languages:{extend:function(e,t){var l=a.util.clone(a.languages[e]);for(var n in t)l[n]=t[n];return l},insertBefore:function(e,t,l,n){var i=(n=n||a.languages)[e];if(2==arguments.length){for(var r in l=arguments[1])l.hasOwnProperty(r)&&(i[r]=l[r]);return i}var u={};for(var d in i)if(i.hasOwnProperty(d)){if(d==t)for(var r in l)l.hasOwnProperty(r)&&(u[r]=l[r]);u[d]=i[d]}return a.languages.DFS(a.languages,function(t,l){l===n[e]&&t!=e&&(this[t]=u)}),n[e]=u},DFS:function(e,t,l,n){for(var i in n=n||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],l||i),"Object"!==a.util.type(e[i])||n[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||n[a.util.objId(e[i])]||(n[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,n)):(n[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,n)))}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,l){var n={callback:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n);for(var i,r=n.elements||e.querySelectorAll(n.selector),u=0;i=r[u++];)a.highlightElement(i,!0===t,n.callback)},highlightElement:function(t,n,i){for(var r,u,d=t;d&&!e.test(d.className);)d=d.parentNode;d&&(r=(d.className.match(e)||[,""])[1].toLowerCase(),u=a.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&/pre/i.test((d=t.parentNode).nodeName)&&(d.className=d.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var o={element:t,language:r,grammar:u,code:t.textContent};if(a.hooks.run("before-sanity-check",o),!o.code||!o.grammar)return o.code&&(a.hooks.run("before-highlight",o),o.element.textContent=o.code,a.hooks.run("after-highlight",o)),void a.hooks.run("complete",o);if(a.hooks.run("before-highlight",o),n&&l.Worker){var s=new Worker(a.filename);s.onmessage=function(e){o.highlightedCode=e.data,a.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,i&&i.call(o.element),a.hooks.run("after-highlight",o),a.hooks.run("complete",o)},s.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else o.highlightedCode=a.highlight(o.code,o.grammar,o.language),a.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,i&&i.call(t),a.hooks.run("after-highlight",o),a.hooks.run("complete",o)},highlight:function(e,t,l){var i={code:e,grammar:t,language:l};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),n.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,l,n,i,r,u){var d=a.Token;for(var o in l)if(l.hasOwnProperty(o)&&l[o]){if(o==u)return;var s=l[o];s="Array"===a.util.type(s)?s:[s];for(var c=0;c<s.length;++c){var h=s[c],p=h.inside,b=!!h.lookbehind,m=!!h.greedy,g=0,f=h.alias;if(m&&!h.pattern.global){var y=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,y+"g")}h=h.pattern||h;for(var x=n,w=i;x<t.length;w+=t[x].length,++x){var k=t[x];if(t.length>e.length)return;if(!(k instanceof d)){if(m&&x!=t.length-1){if(h.lastIndex=w,!(A=h.exec(e)))break;for(var v=A.index+(b?A[1].length:0),N=A.index+A[0].length,M=x,C=w,T=t.length;M<T&&(C<N||!t[M].type&&!t[M-1].greedy);++M)v>=(C+=t[M].length)&&(++x,w=C);if(t[x]instanceof d)continue;S=M-x,k=e.slice(w,C),A.index-=w}else{h.lastIndex=0;var A=h.exec(k),S=1}if(A){b&&(g=A[1]?A[1].length:0),N=(v=A.index+g)+(A=A[0].slice(g)).length;var F=k.slice(0,v),E=k.slice(N),I=[x,S];F&&(++x,w+=F.length,I.push(F));var j=new d(o,p?a.tokenize(A,p):A,f,A,m);if(I.push(j),E&&I.push(E),Array.prototype.splice.apply(t,I),1!=S&&a.matchGrammar(e,t,l,x,w,!0,o),r)break}else if(r)break}}}}},tokenize:function(e,t,l){var n=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var l=a.hooks.all;l[e]=l[e]||[],l[e].push(t)},run:function(e,t){var l=a.hooks.all[e];if(l&&l.length)for(var n,i=0;n=l[i++];)n(t)}}},n=a.Token=function(e,t,l,a,n){this.type=e,this.content=t,this.alias=l,this.length=0|(a||"").length,this.greedy=!!n};if(n.stringify=function(e,t,l){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(l){return n.stringify(l,t,e)}).join("");var i={type:e.type,content:n.stringify(e.content,t,l),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:l};if(e.alias){var r="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}a.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!l.document)return l.addEventListener?(a.disableWorkerMessageHandler||l.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,i=t.immediateClose;l.postMessage(a.highlight(t.code,a.languages[n],n)),i&&l.close()},!1),l.Prism):l.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),l.Prism}();void 0!==e&&e.exports&&(e.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var l,n=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-(?!\*)([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(l=(t.className.match(r)||[,""])[1]),!l){var u=(n.match(/\.(\w+)$/)||[,""])[1];l=e[u]||u}var d=document.createElement("code");d.className="language-"+l,t.textContent="",d.textContent="Loading\u2026",t.appendChild(d);var o=new XMLHttpRequest;o.open("GET",n,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?(d.textContent=o.responseText,a.highlightElement(d)):d.textContent=o.status>=400?"\u2716 Error "+o.status+" while fetching file: "+o.statusText:"\u2716 Error: File does not exist or is empty")},t.hasAttribute("data-download-link")&&a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(){var e=document.createElement("a");return e.textContent=t.getAttribute("data-download-link-label")||"Download",e.setAttribute("download",""),e.href=n,e}),o.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);