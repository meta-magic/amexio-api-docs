(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{U89g:function(l,n,e){"use strict";e.d(n,"a",function(){return t}),e.d(n,"b",function(){return u});var a=e("CcnG"),t=(e("d2mR"),e("Ip0R"),a.Qa({encapsulation:2,styles:[],data:{}}));function u(l){return a.mb(0,[],null,null)}},W9WH:function(l,n,e){"use strict";e.r(n);var a=e("CcnG"),t=function(){},u=e("gTgE"),i=e("pMnS"),o=e("U89g"),r=e("d2mR"),d=e("O4vx"),c=e("thSD"),s=e("Jovw"),b=e("Ip0R"),h=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.ngOnInit=function(){this.mineralScatterChartData=[["Calories","Protein","Type","Brand"],[5,25,"Kelloggs","All-Bran"],[8,20,"Kelloggs","Apple_Jacks"],[10,25,"Kelloggs","Corn_Flakes"],[2,15,"Kelloggs","All-Bran"],[12,22,"Kelloggs","Apple_Jacks"],[10,15,"Kelloggs","Corn_Flakes"],[3,12,"Kelloggs","Fruitful_Bran"],[12,18,"Oats","Honey_Graham_Ohs"],[7,19,"Oats","Life"],[11,9,"Oats","Honey_Graham_Ohs"],[6,19,"Oats","Life"],[7,10,"Oats","Puffed_Rice"],[8,22,"General Mills","Lucky_Charms"],[5,1,"General Mills","Raisin_Nut"],[7,16,"General Mills","Triples"],[7,26,"General Mills","Corn Flakes"]],this.scatterChartData=[["Age","Weight"],[5,35],[8,40],[10,45],[3,12],[12,48],[6,39],[8,42],[5,32],[7,46],[1,10],[3,15],[2,8],[4,20]]},l.prototype.onLegendClick=function(l){this.userDataSource=l},l.prototype.onChartClick=function(l){this.userDataSource=l},l.prototype.onLegendClick1=function(l){this.userDataSource1=l},l.prototype.onChartClick1=function(l){this.userDataSource1=l},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/charts/D3Charts/d3scatterchart/d3chart.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/charts/D3Charts/d3scatterchart/d3chart.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3scatterchart/datasource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.dataSourceCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3scatterchart/usersource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.userDataSourceCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),m=e("t/Na"),p=a.Qa({encapsulation:2,styles:[],data:{}});function x(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),a.Ra(2,4243456,null,0,r.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.htmlCode,"html")},null)}function f(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),a.Ra(2,4243456,null,0,r.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.typeScriptCode,"typescript")},null)}function S(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),a.Ra(2,4243456,null,0,r.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.dataSourceCode,"json")},null)}function g(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,165,"amexio-card",[["header","true"]],null,null,null,u.dc,u.k)),a.Ra(1,7585792,null,3,d.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(l()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.pc,u.w)),a.Ra(6,114688,[[1,4]],0,d.C,[],null,null),(l()(),a.kb(-1,0,[" D3 Scatter Chart "])),(l()(),a.Sa(8,0,null,1,157,"amexio-body",[],null,null,null,u.Xb,u.e)),a.Ra(9,114688,[[2,4]],0,d.d,[],null,null),(l()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["An D3 scatter chart that is rendered within the browser using SVG .Displays tips when hovering over points."])),(l()(),a.Sa(12,0,null,0,153,"amexio-tab-view",[],null,null,null,u.Ac,u.H)),a.Ra(13,5488640,null,2,d.S,[a.F,a.k,a.F],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(l()(),a.Sa(16,0,null,1,69,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.Bc,u.I)),a.Ra(17,114688,[[4,4]],0,d.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Sa(18,0,null,0,67,"amexio-row",[],null,null,null,u.wc,u.D)),a.Ra(19,1163264,null,0,d.O,[],null,null),(l()(),a.Sa(20,0,null,0,65,"amexio-column",[],[[1,"class",0]],null,null,u.fc,u.m)),a.Ra(21,114688,null,0,d.m,[],{size:[0,"size"]},null),(l()(),a.Sa(22,0,null,0,31,"amexio-row",[],null,null,null,u.wc,u.D)),a.Ra(23,1163264,null,0,d.O,[],null,null),(l()(),a.Sa(24,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.fc,u.m)),a.Ra(25,114688,null,0,d.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(26,0,null,0,11,"amexio-card",[],null,null,null,u.dc,u.k)),a.Ra(27,7585792,null,3,d.j,[a.F],{header:[0,"header"],show:[1,"show"]},null),a.ib(603979776,6,{amexioHeader:1}),a.ib(603979776,7,{amexioBody:1}),a.ib(603979776,8,{amexioFooter:1}),(l()(),a.Sa(31,0,null,0,2,"amexio-header",[],null,null,null,u.pc,u.w)),a.Ra(32,114688,[[6,4]],0,d.C,[],null,null),(l()(),a.kb(-1,0,[" D3-scatter chart with UserDefine Color "])),(l()(),a.Sa(34,0,null,1,3,"amexio-body",[],null,null,null,u.Xb,u.e)),a.Ra(35,114688,[[7,4]],0,d.d,[],null,null),(l()(),a.Sa(36,0,null,0,1,"amexio-d3-chart-scatter",[],null,[[null,"onChartClick"],[null,"onLegendClick"]],function(l,n,e){var a=!0,t=l.component;return"onChartClick"===n&&(a=!1!==t.onChartClick(e)&&a),"onLegendClick"===n&&(a=!1!==t.onLegendClick(e)&&a),a},c.x,c.j)),a.Ra(37,114688,null,0,s.n,[s.i,s.j],{data:[0,"data"],labelcolor:[1,"labelcolor"],labelflag:[2,"labelflag"],color:[3,"color"],zoomflag:[4,"zoomflag"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick"}),(l()(),a.Sa(38,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.fc,u.m)),a.Ra(39,114688,null,0,d.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(40,0,null,0,13,"amexio-card",[["header","true"]],null,null,null,u.dc,u.k)),a.Ra(41,7585792,null,3,d.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,9,{amexioHeader:1}),a.ib(603979776,10,{amexioBody:1}),a.ib(603979776,11,{amexioFooter:1}),(l()(),a.Sa(45,0,null,0,2,"amexio-header",[],null,null,null,u.pc,u.w)),a.Ra(46,114688,[[9,4]],0,d.C,[],null,null),(l()(),a.kb(-1,0,[" Click On Legend/ Click on Chart "])),(l()(),a.Sa(48,0,null,1,5,"amexio-body",[],null,null,null,u.Xb,u.e)),a.Ra(49,114688,[[10,4]],0,d.d,[],null,null),(l()(),a.Sa(50,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),a.Sa(51,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),a.kb(52,null,["",""])),a.eb(0,b.g,[]),(l()(),a.Sa(54,0,null,0,31,"amexio-row",[],null,null,null,u.wc,u.D)),a.Ra(55,1163264,null,0,d.O,[],null,null),(l()(),a.Sa(56,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.fc,u.m)),a.Ra(57,114688,null,0,d.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(58,0,null,0,11,"amexio-card",[],null,null,null,u.dc,u.k)),a.Ra(59,7585792,null,3,d.j,[a.F],{header:[0,"header"],show:[1,"show"]},null),a.ib(603979776,12,{amexioHeader:1}),a.ib(603979776,13,{amexioBody:1}),a.ib(603979776,14,{amexioFooter:1}),(l()(),a.Sa(63,0,null,0,2,"amexio-header",[],null,null,null,u.pc,u.w)),a.Ra(64,114688,[[12,4]],0,d.C,[],null,null),(l()(),a.kb(-1,0,[" D3-scatter chart with Multiple Scatter Points "])),(l()(),a.Sa(66,0,null,1,3,"amexio-body",[],null,null,null,u.Xb,u.e)),a.Ra(67,114688,[[13,4]],0,d.d,[],null,null),(l()(),a.Sa(68,0,null,0,1,"amexio-d3-chart-scatter",[],null,[[null,"onChartClick"],[null,"onLegendClick"]],function(l,n,e){var a=!0,t=l.component;return"onChartClick"===n&&(a=!1!==t.onChartClick1(e)&&a),"onLegendClick"===n&&(a=!1!==t.onLegendClick1(e)&&a),a},c.x,c.j)),a.Ra(69,114688,null,0,s.n,[s.i,s.j],{data:[0,"data"],title:[1,"title"],labelflag:[2,"labelflag"],vScale:[3,"vScale"],svgwidth:[4,"svgwidth"],svgheight:[5,"svgheight"],zoomflag:[6,"zoomflag"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick"}),(l()(),a.Sa(70,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.fc,u.m)),a.Ra(71,114688,null,0,d.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(72,0,null,0,13,"amexio-card",[["header","true"]],null,null,null,u.dc,u.k)),a.Ra(73,7585792,null,3,d.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,15,{amexioHeader:1}),a.ib(603979776,16,{amexioBody:1}),a.ib(603979776,17,{amexioFooter:1}),(l()(),a.Sa(77,0,null,0,2,"amexio-header",[],null,null,null,u.pc,u.w)),a.Ra(78,114688,[[15,4]],0,d.C,[],null,null),(l()(),a.kb(-1,0,[" Click On Legend/ Click on Chart "])),(l()(),a.Sa(80,0,null,1,5,"amexio-body",[],null,null,null,u.Xb,u.e)),a.Ra(81,114688,[[16,4]],0,d.d,[],null,null),(l()(),a.Sa(82,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),a.Sa(83,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),a.kb(84,null,["",""])),a.eb(0,b.g,[]),(l()(),a.Sa(86,0,null,1,56,"amexio-tab",[["title","API Reference"]],null,null,null,u.Bc,u.I)),a.Ra(87,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(l()(),a.Sa(88,0,null,0,22,"amexio-datagrid",[["title","D3-Scatter-Chart Properties <amexio-d3-chart-scatter>"]],null,null,null,u.Rd,u.yb)),a.Ra(89,1294336,null,1,d.tc,[a.l,d.Ta,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,18,{columnRef:1}),(l()(),a.Sa(91,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(92,49152,[[18,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,19,{headerTemplate:0}),a.ib(335544320,20,{bodyTemplate:0}),(l()(),a.Sa(95,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(96,49152,[[18,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,21,{headerTemplate:0}),a.ib(335544320,22,{bodyTemplate:0}),(l()(),a.Sa(99,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(100,49152,[[18,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,23,{headerTemplate:0}),a.ib(335544320,24,{bodyTemplate:0}),(l()(),a.Sa(103,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(104,49152,[[18,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,25,{headerTemplate:0}),a.ib(335544320,26,{bodyTemplate:0}),(l()(),a.Sa(107,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(108,49152,[[18,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,27,{headerTemplate:0}),a.ib(335544320,28,{bodyTemplate:0}),(l()(),a.Sa(111,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(112,0,null,0,14,"amexio-datagrid",[["title","Legend Event <amexio-d3-chart-scatter>"]],null,null,null,u.Rd,u.yb)),a.Ra(113,1294336,null,1,d.tc,[a.l,d.Ta,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,29,{columnRef:1}),(l()(),a.Sa(115,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(116,49152,[[29,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,30,{headerTemplate:0}),a.ib(335544320,31,{bodyTemplate:0}),(l()(),a.Sa(119,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(120,49152,[[29,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,32,{headerTemplate:0}),a.ib(335544320,33,{bodyTemplate:0}),(l()(),a.Sa(123,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(124,49152,[[29,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,34,{headerTemplate:0}),a.ib(335544320,35,{bodyTemplate:0}),(l()(),a.Sa(127,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(128,0,null,0,14,"amexio-datagrid",[["title","Chart Event <amexio-d3-chart-scatter>"]],null,null,null,u.Rd,u.yb)),a.Ra(129,1294336,null,1,d.tc,[a.l,d.Ta,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,36,{columnRef:1}),(l()(),a.Sa(131,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(132,49152,[[36,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,37,{headerTemplate:0}),a.ib(335544320,38,{bodyTemplate:0}),(l()(),a.Sa(135,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(136,49152,[[36,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,39,{headerTemplate:0}),a.ib(335544320,40,{bodyTemplate:0}),(l()(),a.Sa(139,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(140,49152,[[36,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,41,{headerTemplate:0}),a.ib(335544320,42,{bodyTemplate:0}),(l()(),a.Sa(143,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,u.Bc,u.I)),a.Ra(144,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(l()(),a.Sa(145,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),a.Sa(146,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,u.Dc,u.K)),a.Ra(147,5357568,null,1,d.X,[a.F,a.k],null,null),a.ib(603979776,43,{queryTabs:1}),(l()(),a.Sa(149,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.Bc,u.I)),a.Ra(150,114688,[[43,4]],0,d.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Ja(16777216,null,0,1,null,x)),a.Ra(152,16384,null,0,b.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(153,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.Bc,u.I)),a.Ra(154,114688,[[43,4]],0,d.T,[],{title:[0,"title"]},null),(l()(),a.Ja(16777216,null,0,1,null,f)),a.Ra(156,16384,null,0,b.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(157,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,u.Bc,u.I)),a.Ra(158,114688,[[43,4]],0,d.T,[],{title:[0,"title"]},null),(l()(),a.Ja(16777216,null,0,1,null,S)),a.Ra(160,16384,null,0,b.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(161,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.Bc,u.I)),a.Ra(162,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(l()(),a.Sa(163,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),a.kb(-1,null,["Amexio Sandbox"])),(l()(),a.Sa(165,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-d3-chart-scatter?embed=1&file=src/app/d3chart/d3linechart/d3linechart.demo.component.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,n){var e=n.component;l(n,1,0,"true"),l(n,6,0),l(n,9,0),l(n,13,0),l(n,17,0,"Demo","true"),l(n,19,0),l(n,21,0,12),l(n,23,0),l(n,25,0,!0,8),l(n,27,0,!0,"true"),l(n,32,0),l(n,35,0),l(n,37,0,e.scatterChartData,"#0000b3",!0,"green",!0),l(n,39,0,!0,4),l(n,41,0,"true"),l(n,46,0),l(n,49,0),l(n,55,0),l(n,57,0,!0,8),l(n,59,0,!0,"true"),l(n,64,0),l(n,67,0),l(n,69,0,e.mineralScatterChartData,"Minerals",!0,!1,400,400,!0),l(n,71,0,!0,4),l(n,73,0,"true"),l(n,78,0),l(n,81,0),l(n,87,0,"API Reference"),l(n,89,0,"D3-Scatter-Chart Properties <amexio-d3-chart-scatter>","assets/apireference/charts/d3charts/d3scatterchart.json","get","properties",!1,!1),l(n,92,0,"Name","name",!1,"string",15),l(n,96,0,"version","version",!1,"string",15),l(n,100,0,"Type","type",!1,"string",15),l(n,104,0,"Default","default",!1,"string",15),l(n,108,0,"Description","description",!1,"string",40),l(n,113,0,"Legend Event <amexio-d3-chart-scatter>","assets/apireference/charts/d3charts/d3scatterchart.json","get","legend",!1,!1),l(n,116,0,"Name","name",!1,"string",15),l(n,120,0,"version","version",!1,"string",15),l(n,124,0,"Description","description",!1,"string",55),l(n,129,0,"Chart Event <amexio-d3-chart-scatter>","assets/apireference/charts/d3charts/d3scatterchart.json","get","chartevent",!1,!1),l(n,132,0,"Name","name",!1,"string",15),l(n,136,0,"version","version",!1,"string",15),l(n,140,0,"Description","description",!1,"string",55),l(n,144,0,"Source"),l(n,147,0),l(n,150,0,"HTML",!0),l(n,152,0,e.htmlCode),l(n,154,0,"Type Script"),l(n,156,0,e.typeScriptCode),l(n,158,0,"Data Source"),l(n,160,0,e.dataSourceCode),l(n,162,0,"Live")},function(l,n){var e=n.component;l(n,20,0,a.cb(n,21).role),l(n,24,0,a.cb(n,25).role),l(n,38,0,a.cb(n,39).role),l(n,52,0,a.lb(n,52,0,a.cb(n,53).transform(e.userDataSource))),l(n,56,0,a.cb(n,57).role),l(n,70,0,a.cb(n,71).role),l(n,84,0,a.lb(n,84,0,a.cb(n,85).transform(e.userDataSource1)))})}var y=a.Oa("amexio-d3-chart-scatter-demo",h,function(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,1,"amexio-d3-chart-scatter-demo",[],null,null,null,g,p)),a.Ra(1,114688,null,0,h,[m.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),C=e("gIcY"),R=e("ZYCi");e.d(n,"D3ScatterChartDemoModuleNgFactory",function(){return k});var k=a.Pa(t,[],function(l){return a.Za([a.ab(512,a.k,a.Ea,[[8,[u.a,i.a,y]],[3,a.k],a.z]),a.ab(4608,b.o,b.n,[a.w,[2,b.x]]),a.ab(4608,C.G,C.G,[]),a.ab(4608,m.i,m.o,[b.d,a.D,m.m]),a.ab(4608,m.p,m.p,[m.i,m.n]),a.ab(5120,m.a,function(l){return[l]},[m.p]),a.ab(4608,m.l,m.l,[]),a.ab(6144,m.j,null,[m.l]),a.ab(4608,m.h,m.h,[m.j]),a.ab(6144,m.b,null,[m.h]),a.ab(4608,m.f,m.k,[m.b,a.s]),a.ab(4608,m.c,m.c,[m.f]),a.ab(4608,d.Ta,d.Ta,[m.c]),a.ab(4608,d.ob,d.ob,[]),a.ab(4608,d.db,d.db,[a.D]),a.ab(4608,d.B,d.B,[]),a.ab(4608,d.Kb,d.Kb,[]),a.ab(4608,C.f,C.f,[]),a.ab(4608,d.jb,d.jb,[]),a.ab(4608,s.j,s.j,[a.D]),a.ab(1073742336,b.c,b.c,[]),a.ab(1073742336,C.D,C.D,[]),a.ab(1073742336,C.l,C.l,[]),a.ab(1073742336,m.e,m.e,[]),a.ab(1073742336,m.d,m.d,[]),a.ab(1073742336,r.b,r.b,[]),a.ab(1073742336,d.Db,d.Db,[]),a.ab(1073742336,d.D,d.D,[]),a.ab(1073742336,d.x,d.x,[]),a.ab(1073742336,d.G,d.G,[]),a.ab(1073742336,d.I,d.I,[]),a.ab(1073742336,C.z,C.z,[]),a.ab(1073742336,d.L,d.L,[]),a.ab(1073742336,d.p,d.p,[]),a.ab(1073742336,d.Aa,d.Aa,[]),a.ab(1073742336,R.n,R.n,[[2,R.t],[2,R.m]]),a.ab(1073742336,s.a,s.a,[]),a.ab(1073742336,t,t,[]),a.ab(256,m.m,"XSRF-TOKEN",[]),a.ab(256,m.n,"X-XSRF-TOKEN",[]),a.ab(1024,R.i,function(){return[[{path:"",component:h,pathMatch:"full"}]]},[])])})}}]);