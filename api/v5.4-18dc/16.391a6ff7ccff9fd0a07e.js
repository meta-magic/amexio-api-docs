(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{HJn9:function(l,n,a){"use strict";a.r(n);var e=a("CcnG"),t=function(){},u=a("gTgE"),i=a("pMnS"),o=a("U89g"),r=a("d2mR"),d=a("O4vx"),c=a("thSD"),b=a("Jovw"),h=a("Ip0R"),m=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.ngOnInit=function(){this.userDefineColors=["#4040a1","#e06377"," #7e4a35","#6b5b95","#feb236","#d64161","#ff7b25"],this.defultColorData=[["year","performance"],["2011",1020],["2012",590],["2013",1260],["2014",830],["2015",1030],["2016",209],["2017",1006]],this.userDefineColorData=[["city","population"],["Mumbai",94423],["Kochi",69932],["Delhi",91345],["Chennai",46467],["Pune",31244],["Jaipur",30461],["Ranchi",84436]],this.barData=[["year","production"],["2011",300],["2012",500],["2013",700],["2014",400],["2015",600],["2016",500],["2017",200]]},l.prototype.onDefaultLegendClick=function(l){this.sourceData=l},l.prototype.onDefaultLegendClick1=function(l){this.sourceData1=l},l.prototype.onDefaultChartClick1=function(l){this.sourceData=l},l.prototype.onDefaultChartClick2=function(l){this.sourceData1=l},l.prototype.onDefaultChartClick=function(l){this.userDataSource=l},l.prototype.onUserDefineLegendClick=function(l){this.userDataSource=l},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,a=this;this.http.get("assets/data/code/charts/D3Charts/d3barchart/d3chart.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){a.htmlCode=l}),this.http.get("assets/data/code/charts/D3Charts/d3barchart/d3chart.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){a.typeScriptCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3barchart/datasource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){a.dataSourceCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3barchart/usersource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){a.userDataSourceCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),s=a("t/Na"),p=e.Qa({encapsulation:2,styles:[],data:{}});function x(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),e.Ra(2,4243456,null,0,r.a,[e.F,e.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.htmlCode,"html")},null)}function f(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),e.Ra(2,4243456,null,0,r.a,[e.F,e.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.typeScriptCode,"typescript")},null)}function y(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),e.Ra(2,4243456,null,0,r.a,[e.F,e.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.dataSourceCode,"json")},null)}function S(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,165,"amexio-card",[["header","true"]],null,null,null,u.bc,u.k)),e.Ra(1,5488640,null,3,d.j,[e.F],{header:[0,"header"]},null),e.ib(603979776,1,{amexioHeader:1}),e.ib(603979776,2,{amexioBody:1}),e.ib(603979776,3,{amexioFooter:1}),(l()(),e.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),e.Ra(6,114688,[[1,4]],0,d.B,[],null,null),(l()(),e.kb(-1,0,[" D3 bar Chart "])),(l()(),e.Sa(8,0,null,1,157,"amexio-body",[],null,null,null,u.Vb,u.e)),e.Ra(9,114688,[[2,4]],0,d.d,[],null,null),(l()(),e.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.kb(-1,null,["An D3 bar chart that is rendered within the browser using SVG .Displays tips when hovering over points."])),(l()(),e.Sa(12,0,null,0,153,"amexio-tab-view",[],null,null,null,u.xc,u.G)),e.Ra(13,5488640,null,2,d.R,[e.F,e.k,e.F],null,null),e.ib(603979776,4,{queryTabs:1}),e.ib(603979776,5,{queryAction:1}),(l()(),e.Sa(16,0,null,1,69,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.yc,u.H)),e.Ra(17,114688,[[4,4]],0,d.S,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e.Sa(18,0,null,0,67,"amexio-row",[],null,null,null,u.tc,u.C)),e.Ra(19,1163264,null,0,d.N,[],null,null),(l()(),e.Sa(20,0,null,0,65,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),e.Ra(21,114688,null,0,d.m,[],{size:[0,"size"]},null),(l()(),e.Sa(22,0,null,0,31,"amexio-row",[],null,null,null,u.tc,u.C)),e.Ra(23,1163264,null,0,d.N,[],null,null),(l()(),e.Sa(24,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),e.Ra(25,114688,null,0,d.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),e.Sa(26,0,null,0,11,"amexio-card",[],null,null,null,u.bc,u.k)),e.Ra(27,5488640,null,3,d.j,[e.F],{header:[0,"header"],show:[1,"show"]},null),e.ib(603979776,6,{amexioHeader:1}),e.ib(603979776,7,{amexioBody:1}),e.ib(603979776,8,{amexioFooter:1}),(l()(),e.Sa(31,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),e.Ra(32,114688,[[6,4]],0,d.B,[],null,null),(l()(),e.kb(-1,0,[" D3-bar chart with UserDefine Color "])),(l()(),e.Sa(34,0,null,1,3,"amexio-body",[],null,null,null,u.Vb,u.e)),e.Ra(35,114688,[[7,4]],0,d.d,[],null,null),(l()(),e.Sa(36,0,null,0,1,"amexio-d3-chart-bar",[],null,[[null,"onChartClick"],[null,"onLegendClick"]],function(l,n,a){var e=!0,t=l.component;return"onChartClick"===n&&(e=!1!==t.onDefaultChartClick(a)&&e),"onLegendClick"===n&&(e=!1!==t.onUserDefineLegendClick(a)&&e),e},c.n,c.a)),e.Ra(37,114688,null,0,b.b,[b.i,e.i,b.j],{data:[0,"data"],colors:[1,"colors"],title:[2,"title"],labelcolor:[3,"labelcolor"],labelflag:[4,"labelflag"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick"}),(l()(),e.Sa(38,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),e.Ra(39,114688,null,0,d.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),e.Sa(40,0,null,0,13,"amexio-card",[["header","true"]],null,null,null,u.bc,u.k)),e.Ra(41,5488640,null,3,d.j,[e.F],{header:[0,"header"]},null),e.ib(603979776,9,{amexioHeader:1}),e.ib(603979776,10,{amexioBody:1}),e.ib(603979776,11,{amexioFooter:1}),(l()(),e.Sa(45,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),e.Ra(46,114688,[[9,4]],0,d.B,[],null,null),(l()(),e.kb(-1,0,[" Click On Legend/ Click on Chart "])),(l()(),e.Sa(48,0,null,1,5,"amexio-body",[],null,null,null,u.Vb,u.e)),e.Ra(49,114688,[[10,4]],0,d.d,[],null,null),(l()(),e.Sa(50,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),e.Sa(51,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),e.kb(52,null,["",""])),e.eb(0,h.g,[]),(l()(),e.Sa(54,0,null,0,31,"amexio-row",[],null,null,null,u.tc,u.C)),e.Ra(55,1163264,null,0,d.N,[],null,null),(l()(),e.Sa(56,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),e.Ra(57,114688,null,0,d.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),e.Sa(58,0,null,0,11,"amexio-card",[],null,null,null,u.bc,u.k)),e.Ra(59,5488640,null,3,d.j,[e.F],{header:[0,"header"],show:[1,"show"]},null),e.ib(603979776,12,{amexioHeader:1}),e.ib(603979776,13,{amexioBody:1}),e.ib(603979776,14,{amexioFooter:1}),(l()(),e.Sa(63,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),e.Ra(64,114688,[[12,4]],0,d.B,[],null,null),(l()(),e.kb(-1,0,[" D3-bar with Legend Default Color "])),(l()(),e.Sa(66,0,null,1,3,"amexio-body",[],null,null,null,u.Vb,u.e)),e.Ra(67,114688,[[13,4]],0,d.d,[],null,null),(l()(),e.Sa(68,0,null,0,1,"amexio-d3-chart-bar",[],null,[[null,"onChartClick"],[null,"onLegendClick"]],function(l,n,a){var e=!0,t=l.component;return"onChartClick"===n&&(e=!1!==t.onDefaultChartClick1(a)&&e),"onLegendClick"===n&&(e=!1!==t.onDefaultLegendClick(a)&&e),e},c.n,c.a)),e.Ra(69,114688,null,0,b.b,[b.i,e.i,b.j],{data:[0,"data"],title:[1,"title"],labelflag:[2,"labelflag"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick"}),(l()(),e.Sa(70,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),e.Ra(71,114688,null,0,d.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),e.Sa(72,0,null,0,13,"amexio-card",[["header","true"]],null,null,null,u.bc,u.k)),e.Ra(73,5488640,null,3,d.j,[e.F],{header:[0,"header"]},null),e.ib(603979776,15,{amexioHeader:1}),e.ib(603979776,16,{amexioBody:1}),e.ib(603979776,17,{amexioFooter:1}),(l()(),e.Sa(77,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),e.Ra(78,114688,[[15,4]],0,d.B,[],null,null),(l()(),e.kb(-1,0,[" Click On Legend/ Click On Chart "])),(l()(),e.Sa(80,0,null,1,5,"amexio-body",[],null,null,null,u.Vb,u.e)),e.Ra(81,114688,[[16,4]],0,d.d,[],null,null),(l()(),e.Sa(82,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),e.Sa(83,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),e.kb(84,null,["",""])),e.eb(0,h.g,[]),(l()(),e.Sa(86,0,null,1,56,"amexio-tab",[["title","API Reference"]],null,null,null,u.yc,u.H)),e.Ra(87,114688,[[4,4]],0,d.S,[],{title:[0,"title"]},null),(l()(),e.Sa(88,0,null,0,22,"amexio-datagrid",[["title","D3-Bar-Chart Properties<amexio-d3-chart-bar>"]],null,null,null,u.Od,u.xb)),e.Ra(89,1294336,null,1,d.mc,[e.l,d.Qa,e.i,e.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,18,{columnRef:1}),(l()(),e.Sa(91,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(92,49152,[[18,4]],2,d.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,19,{headerTemplate:0}),e.ib(335544320,20,{bodyTemplate:0}),(l()(),e.Sa(95,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(96,49152,[[18,4]],2,d.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,21,{headerTemplate:0}),e.ib(335544320,22,{bodyTemplate:0}),(l()(),e.Sa(99,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(100,49152,[[18,4]],2,d.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,23,{headerTemplate:0}),e.ib(335544320,24,{bodyTemplate:0}),(l()(),e.Sa(103,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(104,49152,[[18,4]],2,d.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,25,{headerTemplate:0}),e.ib(335544320,26,{bodyTemplate:0}),(l()(),e.Sa(107,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(108,49152,[[18,4]],2,d.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,27,{headerTemplate:0}),e.ib(335544320,28,{bodyTemplate:0}),(l()(),e.Sa(111,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(112,0,null,0,14,"amexio-datagrid",[["title","Legend<amexio-d3-chart-bar>"]],null,null,null,u.Od,u.xb)),e.Ra(113,1294336,null,1,d.mc,[e.l,d.Qa,e.i,e.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,29,{columnRef:1}),(l()(),e.Sa(115,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(116,49152,[[29,4]],2,d.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,30,{headerTemplate:0}),e.ib(335544320,31,{bodyTemplate:0}),(l()(),e.Sa(119,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(120,49152,[[29,4]],2,d.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,32,{headerTemplate:0}),e.ib(335544320,33,{bodyTemplate:0}),(l()(),e.Sa(123,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(124,49152,[[29,4]],2,d.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,34,{headerTemplate:0}),e.ib(335544320,35,{bodyTemplate:0}),(l()(),e.Sa(127,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(128,0,null,0,14,"amexio-datagrid",[["title","Chart Event <amexio-d3-chart-bar>"]],null,null,null,u.Od,u.xb)),e.Ra(129,1294336,null,1,d.mc,[e.l,d.Qa,e.i,e.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,36,{columnRef:1}),(l()(),e.Sa(131,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(132,49152,[[36,4]],2,d.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,37,{headerTemplate:0}),e.ib(335544320,38,{bodyTemplate:0}),(l()(),e.Sa(135,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(136,49152,[[36,4]],2,d.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,39,{headerTemplate:0}),e.ib(335544320,40,{bodyTemplate:0}),(l()(),e.Sa(139,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Pd,u.yb)),e.Ra(140,49152,[[36,4]],2,d.nc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,41,{headerTemplate:0}),e.ib(335544320,42,{bodyTemplate:0}),(l()(),e.Sa(143,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,u.yc,u.H)),e.Ra(144,114688,[[4,4]],0,d.S,[],{title:[0,"title"]},null),(l()(),e.Sa(145,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),e.Sa(146,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,u.Ac,u.J)),e.Ra(147,5357568,null,1,d.W,[e.F],null,null),e.ib(603979776,43,{queryTabs:1}),(l()(),e.Sa(149,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.yc,u.H)),e.Ra(150,114688,[[43,4]],0,d.S,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e.Ja(16777216,null,0,1,null,x)),e.Ra(152,16384,null,0,h.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.Sa(153,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.yc,u.H)),e.Ra(154,114688,[[43,4]],0,d.S,[],{title:[0,"title"]},null),(l()(),e.Ja(16777216,null,0,1,null,f)),e.Ra(156,16384,null,0,h.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.Sa(157,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,u.yc,u.H)),e.Ra(158,114688,[[43,4]],0,d.S,[],{title:[0,"title"]},null),(l()(),e.Ja(16777216,null,0,1,null,y)),e.Ra(160,16384,null,0,h.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.Sa(161,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.yc,u.H)),e.Ra(162,114688,[[4,4]],0,d.S,[],{title:[0,"title"]},null),(l()(),e.Sa(163,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),e.kb(-1,null,["Amexio Sandbox"])),(l()(),e.Sa(165,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-d3-chart-bar?embed=1&file=src/app/d3chart/d3barchart/d3barchart.demo.component.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,n){var a=n.component;l(n,1,0,"true"),l(n,6,0),l(n,9,0),l(n,13,0),l(n,17,0,"Demo","true"),l(n,19,0),l(n,21,0,12),l(n,23,0),l(n,25,0,!0,8),l(n,27,0,!0,"true"),l(n,32,0),l(n,35,0),l(n,37,0,a.userDefineColorData,a.userDefineColors,"Population of Cities in India","white",!0),l(n,39,0,!0,4),l(n,41,0,"true"),l(n,46,0),l(n,49,0),l(n,55,0),l(n,57,0,!0,8),l(n,59,0,!0,"true"),l(n,64,0),l(n,67,0),l(n,69,0,a.defultColorData,"Company Performance Details",!0),l(n,71,0,!0,4),l(n,73,0,"true"),l(n,78,0),l(n,81,0),l(n,87,0,"API Reference"),l(n,89,0,"D3-Bar-Chart Properties<amexio-d3-chart-bar>","assets/apireference/charts/d3charts/d3barchart.json","get","properties",!1,!1),l(n,92,0,"Name","name",!1,"string",15),l(n,96,0,"version","version",!1,"string",15),l(n,100,0,"Type","type",!1,"string",15),l(n,104,0,"Default","default",!1,"string",15),l(n,108,0,"Description","description",!1,"string",40),l(n,113,0,"Legend<amexio-d3-chart-bar>","assets/apireference/charts/d3charts/d3barchart.json","get","legend",!1,!1),l(n,116,0,"Name","name",!1,"string",15),l(n,120,0,"version","version",!1,"string",15),l(n,124,0,"Description","description",!1,"string",55),l(n,129,0,"Chart Event <amexio-d3-chart-bar>","assets/apireference/charts/d3charts/d3barchart.json","get","chartevent",!1,!1),l(n,132,0,"Name","name",!1,"string",15),l(n,136,0,"version","version",!1,"string",15),l(n,140,0,"Description","description",!1,"string",55),l(n,144,0,"Source"),l(n,147,0),l(n,150,0,"HTML",!0),l(n,152,0,a.htmlCode),l(n,154,0,"Type Script"),l(n,156,0,a.typeScriptCode),l(n,158,0,"Data Source"),l(n,160,0,a.dataSourceCode),l(n,162,0,"Live")},function(l,n){var a=n.component;l(n,20,0,e.cb(n,21).role),l(n,24,0,e.cb(n,25).role),l(n,38,0,e.cb(n,39).role),l(n,52,0,e.lb(n,52,0,e.cb(n,53).transform(a.userDataSource))),l(n,56,0,e.cb(n,57).role),l(n,70,0,e.cb(n,71).role),l(n,84,0,e.lb(n,84,0,e.cb(n,85).transform(a.sourceData)))})}var C=e.Oa("amexio-d3-chart-bar-demo",m,function(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,1,"amexio-d3-chart-bar-demo",[],null,null,null,S,p)),e.Ra(1,114688,null,0,m,[s.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),g=a("gIcY"),R=a("ZYCi");a.d(n,"D3BarChartDemoModuleNgFactory",function(){return D});var D=e.Pa(t,[],function(l){return e.Za([e.ab(512,e.k,e.Ea,[[8,[u.a,i.a,C]],[3,e.k],e.z]),e.ab(4608,h.o,h.n,[e.w,[2,h.x]]),e.ab(4608,g.G,g.G,[]),e.ab(4608,s.i,s.o,[h.d,e.D,s.m]),e.ab(4608,s.p,s.p,[s.i,s.n]),e.ab(5120,s.a,function(l){return[l]},[s.p]),e.ab(4608,s.l,s.l,[]),e.ab(6144,s.j,null,[s.l]),e.ab(4608,s.h,s.h,[s.j]),e.ab(6144,s.b,null,[s.h]),e.ab(4608,s.f,s.k,[s.b,e.s]),e.ab(4608,s.c,s.c,[s.f]),e.ab(4608,d.Qa,d.Qa,[s.c]),e.ab(4608,d.ab,d.ab,[e.D]),e.ab(4608,d.jb,d.jb,[]),e.ab(4608,d.A,d.A,[]),e.ab(4608,d.Db,d.Db,[]),e.ab(4608,g.f,g.f,[]),e.ab(4608,b.j,b.j,[e.D]),e.ab(1073742336,h.c,h.c,[]),e.ab(1073742336,g.D,g.D,[]),e.ab(1073742336,g.l,g.l,[]),e.ab(1073742336,s.e,s.e,[]),e.ab(1073742336,s.d,s.d,[]),e.ab(1073742336,r.b,r.b,[]),e.ab(1073742336,d.C,d.C,[]),e.ab(1073742336,d.x,d.x,[]),e.ab(1073742336,d.F,d.F,[]),e.ab(1073742336,d.H,d.H,[]),e.ab(1073742336,g.z,g.z,[]),e.ab(1073742336,d.K,d.K,[]),e.ab(1073742336,d.p,d.p,[]),e.ab(1073742336,d.Y,d.Y,[]),e.ab(1073742336,R.n,R.n,[[2,R.t],[2,R.m]]),e.ab(1073742336,b.a,b.a,[]),e.ab(1073742336,t,t,[]),e.ab(256,s.m,"XSRF-TOKEN",[]),e.ab(256,s.n,"X-XSRF-TOKEN",[]),e.ab(1024,R.i,function(){return[[{path:"",component:m,pathMatch:"full"}]]},[])])})},U89g:function(l,n,a){"use strict";a.d(n,"a",function(){return t}),a.d(n,"b",function(){return u});var e=a("CcnG"),t=(a("d2mR"),a("Ip0R"),e.Qa({encapsulation:2,styles:[],data:{}}));function u(l){return e.mb(0,[],null,null)}}}]);