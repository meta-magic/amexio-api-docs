(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{TcFD:function(l,n,e){"use strict";e.r(n);var a=e("CcnG"),t=function(){},u=e("gTgE"),i=e("pMnS"),o=e("U89g"),r=e("d2mR"),c=e("O4vx"),d=e("thSD"),b=e("Jovw"),m=e("Ip0R"),s=function(){function l(l){this.http=l,this.lineArray=[],this.lineArray2=[],this.barArray=[],this.getHtmlAndTypeScriptCode()}return l.prototype.ngOnInit=function(){this.barData=[["State","Corn Export","Bajra Export","Rice Export","Wheat Export","Jowar Export"],["Andhra Pradesh",600,500,250,50,95],["Kerala",500,400,75,150,195],["Tamil Nadu",400,300,250,50,95],["Assam",250,150,75,150,195],["Maharshtra",300,200,250,50,95]],this.lineArray=[{column:"Rice Export",label:!0,color:"green"},{column:"Jowar Export"},{column:"Wheat Export"}],this.lineArray2=[{column:"Jowar Export"},{column:"Wheat Export",label:!0}],this.barArray=[{column:"Corn Export",label:!0},{column:"Bajra Export",label:!0}]},l.prototype.onDefaultChartClicksc1=function(l){this.userDataSourcesc1=l},l.prototype.onDefaultLineClicksc1=function(l){this.userDataSourcesc1=l},l.prototype.onUserDefineLegendClicksc1=function(l){this.userDataSourcesc1=l},l.prototype.onDefaultChartClicksc2=function(l){this.userDataSourcesc2=l},l.prototype.onDefaultLineClicksc2=function(l){this.userDataSourcesc2=l},l.prototype.onUserDefineLegendClicksc2=function(l){this.userDataSourcesc4=l},l.prototype.onDefaultChartClicksc3=function(l){this.userDataSourcesc3=l},l.prototype.onDefaultLineClicksc3=function(l){this.userDataSourcesc3=l},l.prototype.onUserDefineLegendClicksc3=function(l){this.userDataSourcesc3=l},l.prototype.onDefaultChartClicksc4=function(l){this.userDataSourcesc4=l},l.prototype.onDefaultLineClicksc4=function(l){this.userDataSourcesc4=l},l.prototype.onUserDefineLegendClicksc4=function(l){this.userDataSourcesc4=l},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/charts/D3Charts/d3combochart/d3chart.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/charts/D3Charts/d3combochart/d3chart.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3combochart/datasource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.dataSourceCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3combochart/usersource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.userDataSourceCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),h=e("t/Na"),p=a.Qa({encapsulation:2,styles:[],data:{}});function x(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),a.Ra(2,4243456,null,0,r.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.htmlCode,"html")},null)}function C(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),a.Ra(2,4243456,null,0,r.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.typeScriptCode,"typescript")},null)}function f(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),a.Ra(2,4243456,null,0,r.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.dataSourceCode,"json")},null)}function S(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,229,"amexio-card",[["header","true"]],null,null,null,u.bc,u.k)),a.Ra(1,5488640,null,3,c.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(l()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),a.Ra(6,114688,[[1,4]],0,c.B,[],null,null),(l()(),a.kb(-1,0,[" D3 Combo Chart "])),(l()(),a.Sa(8,0,null,1,221,"amexio-body",[],null,null,null,u.Vb,u.e)),a.Ra(9,114688,[[2,4]],0,c.d,[],null,null),(l()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["An D3 Combo chart that is rendered within the browser using SVG .Displays tips when hovering over points."])),(l()(),a.Sa(12,0,null,0,217,"amexio-tab-view",[],null,null,null,u.xc,u.G)),a.Ra(13,5488640,null,2,c.R,[a.F,a.k,a.F],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(l()(),a.Sa(16,0,null,1,133,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.yc,u.H)),a.Ra(17,114688,[[4,4]],0,c.S,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Sa(18,0,null,0,131,"amexio-row",[],null,null,null,u.tc,u.C)),a.Ra(19,1163264,null,0,c.N,[],null,null),(l()(),a.Sa(20,0,null,0,129,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(21,114688,null,0,c.m,[],{size:[0,"size"]},null),(l()(),a.Sa(22,0,null,0,31,"amexio-row",[],null,null,null,u.tc,u.C)),a.Ra(23,1163264,null,0,c.N,[],null,null),(l()(),a.Sa(24,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(25,114688,null,0,c.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(26,0,null,0,11,"amexio-card",[],null,null,null,u.bc,u.k)),a.Ra(27,5488640,null,3,c.j,[a.F],{header:[0,"header"],show:[1,"show"]},null),a.ib(603979776,6,{amexioHeader:1}),a.ib(603979776,7,{amexioBody:1}),a.ib(603979776,8,{amexioFooter:1}),(l()(),a.Sa(31,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),a.Ra(32,114688,[[6,4]],0,c.B,[],null,null),(l()(),a.kb(-1,0,[" D3-Combo Chart with bar, line and Data attribute "])),(l()(),a.Sa(34,0,null,1,3,"amexio-body",[],null,null,null,u.Vb,u.e)),a.Ra(35,114688,[[7,4]],0,c.d,[],null,null),(l()(),a.Sa(36,0,null,0,1,"amexio-d3-combochart",[],null,[[null,"onChartClick"],[null,"onLineClick"],[null,"onLegendClick"]],function(l,n,e){var a=!0,t=l.component;return"onChartClick"===n&&(a=!1!==t.onDefaultChartClicksc1(e)&&a),"onLineClick"===n&&(a=!1!==t.onDefaultLineClicksc1(e)&&a),"onLegendClick"===n&&(a=!1!==t.onUserDefineLegendClicksc1(e)&&a),a},d.u,d.g)),a.Ra(37,114688,null,0,b.k,[b.i,b.j],{data:[0,"data"],title:[1,"title"],lineInput:[2,"lineInput"],barInput:[3,"barInput"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick",onLineClick:"onLineClick"}),(l()(),a.Sa(38,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(39,114688,null,0,c.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(40,0,null,0,13,"amexio-card",[["header","true"]],null,null,null,u.bc,u.k)),a.Ra(41,5488640,null,3,c.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,9,{amexioHeader:1}),a.ib(603979776,10,{amexioBody:1}),a.ib(603979776,11,{amexioFooter:1}),(l()(),a.Sa(45,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),a.Ra(46,114688,[[9,4]],0,c.B,[],null,null),(l()(),a.kb(-1,0,[" Click On Legend/ Click on Chart "])),(l()(),a.Sa(48,0,null,1,5,"amexio-body",[],null,null,null,u.Vb,u.e)),a.Ra(49,114688,[[10,4]],0,c.d,[],null,null),(l()(),a.Sa(50,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),a.Sa(51,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),a.kb(52,null,["",""])),a.eb(0,m.g,[]),(l()(),a.Sa(54,0,null,0,31,"amexio-row",[],null,null,null,u.tc,u.C)),a.Ra(55,1163264,null,0,c.N,[],null,null),(l()(),a.Sa(56,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(57,114688,null,0,c.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(58,0,null,0,11,"amexio-card",[],null,null,null,u.bc,u.k)),a.Ra(59,5488640,null,3,c.j,[a.F],{header:[0,"header"],show:[1,"show"]},null),a.ib(603979776,12,{amexioHeader:1}),a.ib(603979776,13,{amexioBody:1}),a.ib(603979776,14,{amexioFooter:1}),(l()(),a.Sa(63,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),a.Ra(64,114688,[[12,4]],0,c.B,[],null,null),(l()(),a.kb(-1,0,[" D3-Combo Chart with data and line attribute "])),(l()(),a.Sa(66,0,null,1,3,"amexio-body",[],null,null,null,u.Vb,u.e)),a.Ra(67,114688,[[13,4]],0,c.d,[],null,null),(l()(),a.Sa(68,0,null,0,1,"amexio-d3-combochart",[],null,[[null,"onChartClick"],[null,"onLineClick"],[null,"onLegendClick"]],function(l,n,e){var a=!0,t=l.component;return"onChartClick"===n&&(a=!1!==t.onDefaultChartClicksc2(e)&&a),"onLineClick"===n&&(a=!1!==t.onDefaultLineClicksc2(e)&&a),"onLegendClick"===n&&(a=!1!==t.onUserDefineLegendClicksc2(e)&&a),a},d.u,d.g)),a.Ra(69,114688,null,0,b.k,[b.i,b.j],{data:[0,"data"],title:[1,"title"],lineInput:[2,"lineInput"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick",onLineClick:"onLineClick"}),(l()(),a.Sa(70,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(71,114688,null,0,c.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(72,0,null,0,13,"amexio-card",[["header","true"]],null,null,null,u.bc,u.k)),a.Ra(73,5488640,null,3,c.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,15,{amexioHeader:1}),a.ib(603979776,16,{amexioBody:1}),a.ib(603979776,17,{amexioFooter:1}),(l()(),a.Sa(77,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),a.Ra(78,114688,[[15,4]],0,c.B,[],null,null),(l()(),a.kb(-1,0,[" Click On Legend/ Click on Chart "])),(l()(),a.Sa(80,0,null,1,5,"amexio-body",[],null,null,null,u.Vb,u.e)),a.Ra(81,114688,[[16,4]],0,c.d,[],null,null),(l()(),a.Sa(82,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),a.Sa(83,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),a.kb(84,null,["",""])),a.eb(0,m.g,[]),(l()(),a.Sa(86,0,null,0,31,"amexio-row",[],null,null,null,u.tc,u.C)),a.Ra(87,1163264,null,0,c.N,[],null,null),(l()(),a.Sa(88,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(89,114688,null,0,c.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(90,0,null,0,11,"amexio-card",[],null,null,null,u.bc,u.k)),a.Ra(91,5488640,null,3,c.j,[a.F],{header:[0,"header"],show:[1,"show"]},null),a.ib(603979776,18,{amexioHeader:1}),a.ib(603979776,19,{amexioBody:1}),a.ib(603979776,20,{amexioFooter:1}),(l()(),a.Sa(95,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),a.Ra(96,114688,[[18,4]],0,c.B,[],null,null),(l()(),a.kb(-1,0,[" D3-Combo Chart with bar and data attribute "])),(l()(),a.Sa(98,0,null,1,3,"amexio-body",[],null,null,null,u.Vb,u.e)),a.Ra(99,114688,[[19,4]],0,c.d,[],null,null),(l()(),a.Sa(100,0,null,0,1,"amexio-d3-combochart",[],null,[[null,"onChartClick"],[null,"onLineClick"],[null,"onLegendClick"]],function(l,n,e){var a=!0,t=l.component;return"onChartClick"===n&&(a=!1!==t.onDefaultChartClicksc3(e)&&a),"onLineClick"===n&&(a=!1!==t.onDefaultLineClicksc3(e)&&a),"onLegendClick"===n&&(a=!1!==t.onUserDefineLegendClicksc3(e)&&a),a},d.u,d.g)),a.Ra(101,114688,null,0,b.k,[b.i,b.j],{data:[0,"data"],title:[1,"title"],barInput:[2,"barInput"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick",onLineClick:"onLineClick"}),(l()(),a.Sa(102,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(103,114688,null,0,c.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(104,0,null,0,13,"amexio-card",[["header","true"]],null,null,null,u.bc,u.k)),a.Ra(105,5488640,null,3,c.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,21,{amexioHeader:1}),a.ib(603979776,22,{amexioBody:1}),a.ib(603979776,23,{amexioFooter:1}),(l()(),a.Sa(109,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),a.Ra(110,114688,[[21,4]],0,c.B,[],null,null),(l()(),a.kb(-1,0,[" Click On Legend/ Click on Chart "])),(l()(),a.Sa(112,0,null,1,5,"amexio-body",[],null,null,null,u.Vb,u.e)),a.Ra(113,114688,[[22,4]],0,c.d,[],null,null),(l()(),a.Sa(114,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),a.Sa(115,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),a.kb(116,null,["",""])),a.eb(0,m.g,[]),(l()(),a.Sa(118,0,null,0,31,"amexio-row",[],null,null,null,u.tc,u.C)),a.Ra(119,1163264,null,0,c.N,[],null,null),(l()(),a.Sa(120,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(121,114688,null,0,c.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(122,0,null,0,11,"amexio-card",[],null,null,null,u.bc,u.k)),a.Ra(123,5488640,null,3,c.j,[a.F],{header:[0,"header"],show:[1,"show"]},null),a.ib(603979776,24,{amexioHeader:1}),a.ib(603979776,25,{amexioBody:1}),a.ib(603979776,26,{amexioFooter:1}),(l()(),a.Sa(127,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),a.Ra(128,114688,[[24,4]],0,c.B,[],null,null),(l()(),a.kb(-1,0,[" D3-Combo Chart with only data attribute "])),(l()(),a.Sa(130,0,null,1,3,"amexio-body",[],null,null,null,u.Vb,u.e)),a.Ra(131,114688,[[25,4]],0,c.d,[],null,null),(l()(),a.Sa(132,0,null,0,1,"amexio-d3-combochart",[],null,[[null,"onChartClick"],[null,"onLineClick"],[null,"onLegendClick"]],function(l,n,e){var a=!0,t=l.component;return"onChartClick"===n&&(a=!1!==t.onDefaultChartClicksc4(e)&&a),"onLineClick"===n&&(a=!1!==t.onDefaultLineClicksc4(e)&&a),"onLegendClick"===n&&(a=!1!==t.onUserDefineLegendClicksc4(e)&&a),a},d.u,d.g)),a.Ra(133,114688,null,0,b.k,[b.i,b.j],{data:[0,"data"],title:[1,"title"],label:[2,"label"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick",onLineClick:"onLineClick"}),(l()(),a.Sa(134,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.dc,u.m)),a.Ra(135,114688,null,0,c.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(136,0,null,0,13,"amexio-card",[["header","true"]],null,null,null,u.bc,u.k)),a.Ra(137,5488640,null,3,c.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,27,{amexioHeader:1}),a.ib(603979776,28,{amexioBody:1}),a.ib(603979776,29,{amexioFooter:1}),(l()(),a.Sa(141,0,null,0,2,"amexio-header",[],null,null,null,u.mc,u.v)),a.Ra(142,114688,[[27,4]],0,c.B,[],null,null),(l()(),a.kb(-1,0,[" Click On Legend/ Click on Chart "])),(l()(),a.Sa(144,0,null,1,5,"amexio-body",[],null,null,null,u.Vb,u.e)),a.Ra(145,114688,[[28,4]],0,c.d,[],null,null),(l()(),a.Sa(146,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),a.Sa(147,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),a.kb(148,null,["",""])),a.eb(0,m.g,[]),(l()(),a.Sa(150,0,null,1,56,"amexio-tab",[["title","API Reference"]],null,null,null,u.yc,u.H)),a.Ra(151,114688,[[4,4]],0,c.S,[],{title:[0,"title"]},null),(l()(),a.Sa(152,0,null,0,22,"amexio-datagrid",[["title","D3-Combo-Chart Properties<amexio-d3-combochart>"]],null,null,null,u.Nd,u.wb)),a.Ra(153,1294336,null,1,c.oc,[a.l,c.Qa,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,30,{columnRef:1}),(l()(),a.Sa(155,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Od,u.xb)),a.Ra(156,49152,[[30,4]],2,c.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,31,{headerTemplate:0}),a.ib(335544320,32,{bodyTemplate:0}),(l()(),a.Sa(159,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Od,u.xb)),a.Ra(160,49152,[[30,4]],2,c.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,33,{headerTemplate:0}),a.ib(335544320,34,{bodyTemplate:0}),(l()(),a.Sa(163,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Od,u.xb)),a.Ra(164,49152,[[30,4]],2,c.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,35,{headerTemplate:0}),a.ib(335544320,36,{bodyTemplate:0}),(l()(),a.Sa(167,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Od,u.xb)),a.Ra(168,49152,[[30,4]],2,c.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,37,{headerTemplate:0}),a.ib(335544320,38,{bodyTemplate:0}),(l()(),a.Sa(171,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Od,u.xb)),a.Ra(172,49152,[[30,4]],2,c.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,39,{headerTemplate:0}),a.ib(335544320,40,{bodyTemplate:0}),(l()(),a.Sa(175,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(176,0,null,0,14,"amexio-datagrid",[["title","Legend<amexio-d3-combochart>"]],null,null,null,u.Nd,u.wb)),a.Ra(177,1294336,null,1,c.oc,[a.l,c.Qa,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,41,{columnRef:1}),(l()(),a.Sa(179,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Od,u.xb)),a.Ra(180,49152,[[41,4]],2,c.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,42,{headerTemplate:0}),a.ib(335544320,43,{bodyTemplate:0}),(l()(),a.Sa(183,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Od,u.xb)),a.Ra(184,49152,[[41,4]],2,c.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,44,{headerTemplate:0}),a.ib(335544320,45,{bodyTemplate:0}),(l()(),a.Sa(187,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Od,u.xb)),a.Ra(188,49152,[[41,4]],2,c.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,46,{headerTemplate:0}),a.ib(335544320,47,{bodyTemplate:0}),(l()(),a.Sa(191,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(192,0,null,0,14,"amexio-datagrid",[["title","Chart Event <amexio-d3-combochart>"]],null,null,null,u.Nd,u.wb)),a.Ra(193,1294336,null,1,c.oc,[a.l,c.Qa,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,48,{columnRef:1}),(l()(),a.Sa(195,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Od,u.xb)),a.Ra(196,49152,[[48,4]],2,c.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,49,{headerTemplate:0}),a.ib(335544320,50,{bodyTemplate:0}),(l()(),a.Sa(199,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Od,u.xb)),a.Ra(200,49152,[[48,4]],2,c.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,51,{headerTemplate:0}),a.ib(335544320,52,{bodyTemplate:0}),(l()(),a.Sa(203,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Od,u.xb)),a.Ra(204,49152,[[48,4]],2,c.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,53,{headerTemplate:0}),a.ib(335544320,54,{bodyTemplate:0}),(l()(),a.Sa(207,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,u.yc,u.H)),a.Ra(208,114688,[[4,4]],0,c.S,[],{title:[0,"title"]},null),(l()(),a.Sa(209,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),a.Sa(210,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,u.Ac,u.J)),a.Ra(211,5357568,null,1,c.W,[a.F,a.k],null,null),a.ib(603979776,55,{queryTabs:1}),(l()(),a.Sa(213,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.yc,u.H)),a.Ra(214,114688,[[55,4]],0,c.S,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Ja(16777216,null,0,1,null,x)),a.Ra(216,16384,null,0,m.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(217,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.yc,u.H)),a.Ra(218,114688,[[55,4]],0,c.S,[],{title:[0,"title"]},null),(l()(),a.Ja(16777216,null,0,1,null,C)),a.Ra(220,16384,null,0,m.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(221,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,u.yc,u.H)),a.Ra(222,114688,[[55,4]],0,c.S,[],{title:[0,"title"]},null),(l()(),a.Ja(16777216,null,0,1,null,f)),a.Ra(224,16384,null,0,m.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(225,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.yc,u.H)),a.Ra(226,114688,[[4,4]],0,c.S,[],{title:[0,"title"]},null),(l()(),a.Sa(227,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),a.kb(-1,null,["Amexio Sandbox"])),(l()(),a.Sa(229,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-d3-chart-combo?embed=1&file=src/app/d3chart/d3linechart/d3linechart.demo.component.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,n){var e=n.component;l(n,1,0,"true"),l(n,6,0),l(n,9,0),l(n,13,0),l(n,17,0,"Demo","true"),l(n,19,0),l(n,21,0,12),l(n,23,0),l(n,25,0,!0,8),l(n,27,0,!0,"true"),l(n,32,0),l(n,35,0),l(n,37,0,e.barData,"Rice Production in India",e.lineArray,e.barArray),l(n,39,0,!0,4),l(n,41,0,"true"),l(n,46,0),l(n,49,0),l(n,55,0),l(n,57,0,!0,8),l(n,59,0,!0,"true"),l(n,64,0),l(n,67,0),l(n,69,0,e.barData,"Rice Production in India",e.lineArray2),l(n,71,0,!0,4),l(n,73,0,"true"),l(n,78,0),l(n,81,0),l(n,87,0),l(n,89,0,!0,8),l(n,91,0,!0,"true"),l(n,96,0),l(n,99,0),l(n,101,0,e.barData,"Rice Production in India",e.barArray),l(n,103,0,!0,4),l(n,105,0,"true"),l(n,110,0),l(n,113,0),l(n,119,0),l(n,121,0,!0,8),l(n,123,0,!0,"true"),l(n,128,0),l(n,131,0),l(n,133,0,e.barData,"Rice Production in India",!0),l(n,135,0,!0,4),l(n,137,0,"true"),l(n,142,0),l(n,145,0),l(n,151,0,"API Reference"),l(n,153,0,"D3-Combo-Chart Properties<amexio-d3-combochart>","assets/apireference/charts/d3charts/d3combochart.json","get","properties",!1,!1),l(n,156,0,"Name","name",!1,"string",15),l(n,160,0,"version","version",!1,"string",15),l(n,164,0,"Type","type",!1,"string",15),l(n,168,0,"Default","default",!1,"string",15),l(n,172,0,"Description","description",!1,"string",40),l(n,177,0,"Legend<amexio-d3-combochart>","assets/apireference/charts/d3charts/d3combochart.json","get","legend",!1,!1),l(n,180,0,"Name","name",!1,"string",15),l(n,184,0,"version","version",!1,"string",15),l(n,188,0,"Description","description",!1,"string",55),l(n,193,0,"Chart Event <amexio-d3-combochart>","assets/apireference/charts/d3charts/d3combochart.json","get","chartevent",!1,!1),l(n,196,0,"Name","name",!1,"string",15),l(n,200,0,"version","version",!1,"string",15),l(n,204,0,"Description","description",!1,"string",55),l(n,208,0,"Source"),l(n,211,0),l(n,214,0,"HTML",!0),l(n,216,0,e.htmlCode),l(n,218,0,"Type Script"),l(n,220,0,e.typeScriptCode),l(n,222,0,"Data Source"),l(n,224,0,e.dataSourceCode),l(n,226,0,"Live")},function(l,n){var e=n.component;l(n,20,0,a.cb(n,21).role),l(n,24,0,a.cb(n,25).role),l(n,38,0,a.cb(n,39).role),l(n,52,0,a.lb(n,52,0,a.cb(n,53).transform(e.userDataSourcesc1))),l(n,56,0,a.cb(n,57).role),l(n,70,0,a.cb(n,71).role),l(n,84,0,a.lb(n,84,0,a.cb(n,85).transform(e.userDataSourcesc2))),l(n,88,0,a.cb(n,89).role),l(n,102,0,a.cb(n,103).role),l(n,116,0,a.lb(n,116,0,a.cb(n,117).transform(e.userDataSourcesc3))),l(n,120,0,a.cb(n,121).role),l(n,134,0,a.cb(n,135).role),l(n,148,0,a.lb(n,148,0,a.cb(n,149).transform(e.userDataSourcesc4)))})}var y=a.Oa("amexio-d3-chart-combo-demo",s,function(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,1,"amexio-d3-chart-combo-demo",[],null,null,null,S,p)),a.Ra(1,114688,null,0,s,[h.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),k=e("gIcY"),g=e("ZYCi");e.d(n,"D3ComboChartDemoModuleNgFactory",function(){return R});var R=a.Pa(t,[],function(l){return a.Za([a.ab(512,a.k,a.Ea,[[8,[u.a,i.a,y]],[3,a.k],a.z]),a.ab(4608,m.o,m.n,[a.w,[2,m.x]]),a.ab(4608,k.G,k.G,[]),a.ab(4608,h.i,h.o,[m.d,a.D,h.m]),a.ab(4608,h.p,h.p,[h.i,h.n]),a.ab(5120,h.a,function(l){return[l]},[h.p]),a.ab(4608,h.l,h.l,[]),a.ab(6144,h.j,null,[h.l]),a.ab(4608,h.h,h.h,[h.j]),a.ab(6144,h.b,null,[h.h]),a.ab(4608,h.f,h.k,[h.b,a.s]),a.ab(4608,h.c,h.c,[h.f]),a.ab(4608,c.Qa,c.Qa,[h.c]),a.ab(4608,c.jb,c.jb,[]),a.ab(4608,c.ab,c.ab,[a.D]),a.ab(4608,c.A,c.A,[]),a.ab(4608,c.Fb,c.Fb,[]),a.ab(4608,k.f,k.f,[]),a.ab(4608,b.j,b.j,[a.D]),a.ab(1073742336,m.c,m.c,[]),a.ab(1073742336,k.D,k.D,[]),a.ab(1073742336,k.l,k.l,[]),a.ab(1073742336,h.e,h.e,[]),a.ab(1073742336,h.d,h.d,[]),a.ab(1073742336,r.b,r.b,[]),a.ab(1073742336,c.yb,c.yb,[]),a.ab(1073742336,c.C,c.C,[]),a.ab(1073742336,c.x,c.x,[]),a.ab(1073742336,c.F,c.F,[]),a.ab(1073742336,c.H,c.H,[]),a.ab(1073742336,k.z,k.z,[]),a.ab(1073742336,c.K,c.K,[]),a.ab(1073742336,c.p,c.p,[]),a.ab(1073742336,c.Y,c.Y,[]),a.ab(1073742336,g.n,g.n,[[2,g.t],[2,g.m]]),a.ab(1073742336,b.a,b.a,[]),a.ab(1073742336,t,t,[]),a.ab(256,h.m,"XSRF-TOKEN",[]),a.ab(256,h.n,"X-XSRF-TOKEN",[]),a.ab(1024,g.i,function(){return[[{path:"",component:s,pathMatch:"full"}]]},[])])})},U89g:function(l,n,e){"use strict";e.d(n,"a",function(){return t}),e.d(n,"b",function(){return u});var a=e("CcnG"),t=(e("d2mR"),e("Ip0R"),a.Qa({encapsulation:2,styles:[],data:{}}));function u(l){return a.mb(0,[],null,null)}}}]);