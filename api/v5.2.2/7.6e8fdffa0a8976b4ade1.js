(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{HJn9:function(l,n,e){"use strict";e.r(n);var a=e("CcnG"),t=function(){},u=e("gTgE"),o=e("pMnS"),i=e("U89g"),r=e("d2mR"),c=e("O4vx"),d=e("thSD"),b=e("Jovw"),h=e("Ip0R"),s=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.ngOnInit=function(){this.userDefineColors=["#4040a1","#e06377"," #7e4a35","#6b5b95","#feb236","#d64161","#ff7b25"],this.defultColorData=[{label:"2011",value:1020,textcolor:"blue"},{label:"2012",value:590},{label:"2013",value:1260},{label:"2014",value:830},{label:"2015",value:1030},{label:"2016",value:209},{label:"2017",value:1006}],this.userDefineColorData=[{label:"Mumbai",value:94423},{label:"Kochi",value:69932},{label:"Delhi",value:91345},{label:"Chennai",value:46467},{label:"Pune",value:31244},{label:"Jaipur",value:30461},{label:"Ranchi",value:84436}]},l.prototype.onDefaultLegendClick=function(l){this.sourceData=l},l.prototype.onDefaultChartClick1=function(l){this.sourceData=l},l.prototype.onDefaultChartClick=function(l){this.userDataSource=l},l.prototype.onUserDefineLegendClick=function(l){this.userDataSource=l},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/charts/D3Charts/d3barchart/d3chart.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/charts/D3Charts/d3barchart/d3chart.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3barchart/datasource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.dataSourceCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3barchart/usersource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.userDataSourceCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),m=e("t/Na"),p=a.Qa({encapsulation:2,styles:[],data:{}});function f(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),a.Ra(2,4243456,null,0,r.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.htmlCode,"html")},null)}function x(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),a.Ra(2,4243456,null,0,r.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.typeScriptCode,"typescript")},null)}function k(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,149,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,n,e){var t=!0;return"document:click"===n&&(t=!1!==a.cb(l,1).onWindowClick()&&t),"document:scroll"===n&&(t=!1!==a.cb(l,1).onscroll()&&t),t},u.Pb,u.i)),a.Ra(1,5357568,null,3,c.h,[],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(l()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.Yb,u.r)),a.Ra(6,114688,[[1,4]],0,c.v,[],null,null),(l()(),a.kb(-1,0,[" D3 bar Chart "])),(l()(),a.Sa(8,0,null,1,141,"amexio-body",[],null,null,null,u.Lb,u.e)),a.Ra(9,114688,[[2,4]],0,c.d,[],null,null),(l()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["An D3 bar chart that is rendered within the browser using SVG .Displays tips when hovering over points."])),(l()(),a.Sa(12,16777216,null,0,137,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var t=!0;return"document:click"===n&&(t=!1!==a.cb(l,13).onWindowClick()&&t),"document:scroll"===n&&(t=!1!==a.cb(l,13).onscroll()&&t),t},u.jc,u.C)),a.Ra(13,5357568,null,2,c.L,[a.F,a.k,a.R],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(l()(),a.Sa(16,0,null,1,69,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.kc,u.D)),a.Ra(17,114688,[[4,4]],0,c.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Sa(18,0,null,0,67,"amexio-row",[],null,null,null,u.fc,u.y)),a.Ra(19,1163264,null,0,c.H,[],null,null),(l()(),a.Sa(20,0,null,0,65,"amexio-column",[],[[1,"class",0]],null,null,u.Rb,u.k)),a.Ra(21,114688,null,0,c.k,[],{size:[0,"size"]},null),(l()(),a.Sa(22,0,null,0,31,"amexio-row",[],null,null,null,u.fc,u.y)),a.Ra(23,1163264,null,0,c.H,[],null,null),(l()(),a.Sa(24,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.Rb,u.k)),a.Ra(25,114688,null,0,c.k,[],{size:[0,"size"]},null),(l()(),a.Sa(26,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var t=!0;return"document:click"===n&&(t=!1!==a.cb(l,27).onWindowClick()&&t),"document:scroll"===n&&(t=!1!==a.cb(l,27).onscroll()&&t),t},u.Pb,u.i)),a.Ra(27,5357568,null,3,c.h,[],{header:[0,"header"],show:[1,"show"]},null),a.ib(603979776,6,{amexioHeader:1}),a.ib(603979776,7,{amexioBody:1}),a.ib(603979776,8,{amexioFooter:1}),(l()(),a.Sa(31,0,null,0,2,"amexio-header",[],null,null,null,u.Yb,u.r)),a.Ra(32,114688,[[6,4]],0,c.v,[],null,null),(l()(),a.kb(-1,0,[" D3-bar chart with UserDefine Color "])),(l()(),a.Sa(34,0,null,1,3,"amexio-body",[],null,null,null,u.Lb,u.e)),a.Ra(35,114688,[[7,4]],0,c.d,[],null,null),(l()(),a.Sa(36,0,null,0,1,"amexio-d3-chart-bar",[],null,[[null,"onChartClick"],[null,"onLegendClick"]],function(l,n,e){var a=!0,t=l.component;return"onChartClick"===n&&(a=!1!==t.onDefaultChartClick(e)&&a),"onLegendClick"===n&&(a=!1!==t.onUserDefineLegendClick(e)&&a),a},d.g,d.a)),a.Ra(37,114688,null,0,b.b,[],{data:[0,"data"],colors:[1,"colors"],title:[2,"title"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick"}),(l()(),a.Sa(38,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.Rb,u.k)),a.Ra(39,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(40,0,null,0,13,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,n,e){var t=!0;return"document:click"===n&&(t=!1!==a.cb(l,41).onWindowClick()&&t),"document:scroll"===n&&(t=!1!==a.cb(l,41).onscroll()&&t),t},u.Pb,u.i)),a.Ra(41,5357568,null,3,c.h,[],{header:[0,"header"]},null),a.ib(603979776,9,{amexioHeader:1}),a.ib(603979776,10,{amexioBody:1}),a.ib(603979776,11,{amexioFooter:1}),(l()(),a.Sa(45,0,null,0,2,"amexio-header",[],null,null,null,u.Yb,u.r)),a.Ra(46,114688,[[9,4]],0,c.v,[],null,null),(l()(),a.kb(-1,0,[" Click On Legend/ Click on Chart "])),(l()(),a.Sa(48,0,null,1,5,"amexio-body",[],null,null,null,u.Lb,u.e)),a.Ra(49,114688,[[10,4]],0,c.d,[],null,null),(l()(),a.Sa(50,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),a.Sa(51,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),a.kb(52,null,["",""])),a.eb(0,h.f,[]),(l()(),a.Sa(54,0,null,0,31,"amexio-row",[],null,null,null,u.fc,u.y)),a.Ra(55,1163264,null,0,c.H,[],null,null),(l()(),a.Sa(56,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.Rb,u.k)),a.Ra(57,114688,null,0,c.k,[],{size:[0,"size"]},null),(l()(),a.Sa(58,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var t=!0;return"document:click"===n&&(t=!1!==a.cb(l,59).onWindowClick()&&t),"document:scroll"===n&&(t=!1!==a.cb(l,59).onscroll()&&t),t},u.Pb,u.i)),a.Ra(59,5357568,null,3,c.h,[],{header:[0,"header"],show:[1,"show"],bodyheight:[2,"bodyheight"]},null),a.ib(603979776,12,{amexioHeader:1}),a.ib(603979776,13,{amexioBody:1}),a.ib(603979776,14,{amexioFooter:1}),(l()(),a.Sa(63,0,null,0,2,"amexio-header",[],null,null,null,u.Yb,u.r)),a.Ra(64,114688,[[12,4]],0,c.v,[],null,null),(l()(),a.kb(-1,0,[" D3-bar with Legend Default Color "])),(l()(),a.Sa(66,0,null,1,3,"amexio-body",[],null,null,null,u.Lb,u.e)),a.Ra(67,114688,[[13,4]],0,c.d,[],null,null),(l()(),a.Sa(68,0,null,0,1,"amexio-d3-chart-bar",[],null,[[null,"onChartClick"],[null,"onLegendClick"]],function(l,n,e){var a=!0,t=l.component;return"onChartClick"===n&&(a=!1!==t.onDefaultChartClick1(e)&&a),"onLegendClick"===n&&(a=!1!==t.onDefaultLegendClick(e)&&a),a},d.g,d.a)),a.Ra(69,114688,null,0,b.b,[],{data:[0,"data"],title:[1,"title"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick"}),(l()(),a.Sa(70,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.Rb,u.k)),a.Ra(71,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(72,0,null,0,13,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,n,e){var t=!0;return"document:click"===n&&(t=!1!==a.cb(l,73).onWindowClick()&&t),"document:scroll"===n&&(t=!1!==a.cb(l,73).onscroll()&&t),t},u.Pb,u.i)),a.Ra(73,5357568,null,3,c.h,[],{header:[0,"header"]},null),a.ib(603979776,15,{amexioHeader:1}),a.ib(603979776,16,{amexioBody:1}),a.ib(603979776,17,{amexioFooter:1}),(l()(),a.Sa(77,0,null,0,2,"amexio-header",[],null,null,null,u.Yb,u.r)),a.Ra(78,114688,[[15,4]],0,c.v,[],null,null),(l()(),a.kb(-1,0,[" Click On Legend/ Click On Chart "])),(l()(),a.Sa(80,0,null,1,5,"amexio-body",[],null,null,null,u.Lb,u.e)),a.Ra(81,114688,[[16,4]],0,c.d,[],null,null),(l()(),a.Sa(82,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),a.Sa(83,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),a.kb(84,null,["",""])),a.eb(0,h.f,[]),(l()(),a.Sa(86,0,null,1,44,"amexio-tab",[["title","API Reference"]],null,null,null,u.kc,u.D)),a.Ra(87,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),a.Sa(88,0,null,0,18,"amexio-datagrid",[["title","D3-Bar-Chart Properties<amexio-d3-chart-bar>"]],null,[["document","scroll"],["document","click"]],function(l,n,e){var t=!0;return"document:scroll"===n&&(t=!1!==a.cb(l,89).onscroll()&&t),"document:click"===n&&(t=!1!==a.cb(l,89).onclick()&&t),t},u.nd,u.gb)),a.Ra(89,1163264,null,1,c.Nb,[a.l,c.Ka,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,18,{columnRef:1}),(l()(),a.Sa(91,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),a.Ra(92,49152,[[18,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,19,{headerTemplate:0}),a.ib(335544320,20,{bodyTemplate:0}),(l()(),a.Sa(95,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),a.Ra(96,49152,[[18,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,21,{headerTemplate:0}),a.ib(335544320,22,{bodyTemplate:0}),(l()(),a.Sa(99,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),a.Ra(100,49152,[[18,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,23,{headerTemplate:0}),a.ib(335544320,24,{bodyTemplate:0}),(l()(),a.Sa(103,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),a.Ra(104,49152,[[18,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,25,{headerTemplate:0}),a.ib(335544320,26,{bodyTemplate:0}),(l()(),a.Sa(107,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(108,0,null,0,10,"amexio-datagrid",[["title","Legend<amexio-d3-chart-bar>"]],null,[["document","scroll"],["document","click"]],function(l,n,e){var t=!0;return"document:scroll"===n&&(t=!1!==a.cb(l,109).onscroll()&&t),"document:click"===n&&(t=!1!==a.cb(l,109).onclick()&&t),t},u.nd,u.gb)),a.Ra(109,1163264,null,1,c.Nb,[a.l,c.Ka,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,27,{columnRef:1}),(l()(),a.Sa(111,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),a.Ra(112,49152,[[27,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,28,{headerTemplate:0}),a.ib(335544320,29,{bodyTemplate:0}),(l()(),a.Sa(115,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),a.Ra(116,49152,[[27,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,30,{headerTemplate:0}),a.ib(335544320,31,{bodyTemplate:0}),(l()(),a.Sa(119,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(120,0,null,0,10,"amexio-datagrid",[["title","Chart Event <amexio-d3-chart-bar>"]],null,[["document","scroll"],["document","click"]],function(l,n,e){var t=!0;return"document:scroll"===n&&(t=!1!==a.cb(l,121).onscroll()&&t),"document:click"===n&&(t=!1!==a.cb(l,121).onclick()&&t),t},u.nd,u.gb)),a.Ra(121,1163264,null,1,c.Nb,[a.l,c.Ka,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,32,{columnRef:1}),(l()(),a.Sa(123,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),a.Ra(124,49152,[[32,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,33,{headerTemplate:0}),a.ib(335544320,34,{bodyTemplate:0}),(l()(),a.Sa(127,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),a.Ra(128,49152,[[32,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,35,{headerTemplate:0}),a.ib(335544320,36,{bodyTemplate:0}),(l()(),a.Sa(131,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,u.kc,u.D)),a.Ra(132,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),a.Sa(133,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),a.Sa(134,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,u.mc,u.F)),a.Ra(135,5357568,null,1,c.Q,[a.F],null,null),a.ib(603979776,37,{queryTabs:1}),(l()(),a.Sa(137,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.kc,u.D)),a.Ra(138,114688,[[37,4]],0,c.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Ja(16777216,null,0,1,null,f)),a.Ra(140,16384,null,0,h.l,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(141,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.kc,u.D)),a.Ra(142,114688,[[37,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),a.Ja(16777216,null,0,1,null,x)),a.Ra(144,16384,null,0,h.l,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(145,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.kc,u.D)),a.Ra(146,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),a.Sa(147,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),a.kb(-1,null,["Amexio Sandbox"])),(l()(),a.Sa(149,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-d3 bar chart?embed=1&file=app/charts/d3 bar chart/d3 bar chart.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,n){var e=n.component;l(n,1,0,"true"),l(n,6,0),l(n,9,0),l(n,13,0),l(n,17,0,"Demo","true"),l(n,19,0),l(n,21,0,12),l(n,23,0),l(n,25,0,8),l(n,27,0,!0,"true"),l(n,32,0),l(n,35,0),l(n,37,0,e.userDefineColorData,e.userDefineColors,"Population of Cities in India"),l(n,39,0,!0,4),l(n,41,0,"true"),l(n,46,0),l(n,49,0),l(n,55,0),l(n,57,0,8),l(n,59,0,!0,"true",72),l(n,64,0),l(n,67,0),l(n,69,0,e.defultColorData,"Company Performance Details"),l(n,71,0,!0,4),l(n,73,0,"true"),l(n,78,0),l(n,81,0),l(n,87,0,"API Reference"),l(n,89,0,"D3-Bar-Chart Properties<amexio-d3-chart-bar>","assets/apireference/charts/d3charts/d3barchart.json","get","properties",!1,!1),l(n,92,0,"Name","name",!1,"string",15),l(n,96,0,"Type","type",!1,"string",15),l(n,100,0,"Default","default",!1,"string",15),l(n,104,0,"Description","description",!1,"string",45),l(n,109,0,"Legend<amexio-d3-chart-bar>","assets/apireference/charts/d3charts/d3barchart.json","get","legend",!1,!1),l(n,112,0,"Name","name",!1,"string",15),l(n,116,0,"Description","description",!1,"string",65),l(n,121,0,"Chart Event <amexio-d3-chart-bar>","assets/apireference/charts/d3charts/d3barchart.json","get","chartevent",!1,!1),l(n,124,0,"Name","name",!1,"string",15),l(n,128,0,"Description","description",!1,"string",65),l(n,132,0,"Source"),l(n,135,0),l(n,138,0,"HTML",!0),l(n,140,0,e.htmlCode),l(n,142,0,"Type Script"),l(n,144,0,e.typeScriptCode),l(n,146,0,"Live")},function(l,n){var e=n.component;l(n,20,0,a.cb(n,21).role),l(n,24,0,a.cb(n,25).role),l(n,38,0,a.cb(n,39).role),l(n,52,0,a.lb(n,52,0,a.cb(n,53).transform(e.userDataSource))),l(n,56,0,a.cb(n,57).role),l(n,70,0,a.cb(n,71).role),l(n,84,0,a.lb(n,84,0,a.cb(n,85).transform(e.sourceData)))})}var C=a.Oa("amexio-d3-chart-bar-demo",s,function(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,1,"amexio-d3-chart-bar-demo",[],null,null,null,k,p)),a.Ra(1,114688,null,0,s,[m.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),y=e("gIcY"),S=e("ZYCi");e.d(n,"D3BarChartDemoModuleNgFactory",function(){return g});var g=a.Pa(t,[],function(l){return a.Za([a.ab(512,a.k,a.Ea,[[8,[u.a,o.a,C]],[3,a.k],a.z]),a.ab(4608,h.n,h.m,[a.w,[2,h.w]]),a.ab(4608,y.r,y.r,[]),a.ab(4608,m.h,m.n,[h.c,a.D,m.l]),a.ab(4608,m.o,m.o,[m.h,m.m]),a.ab(5120,m.a,function(l){return[l]},[m.o]),a.ab(4608,m.k,m.k,[]),a.ab(6144,m.i,null,[m.k]),a.ab(4608,m.g,m.g,[m.i]),a.ab(6144,m.b,null,[m.g]),a.ab(4608,m.f,m.j,[m.b,a.s]),a.ab(4608,m.c,m.c,[m.f]),a.ab(4608,c.Ka,c.Ka,[m.c]),a.ab(4608,c.Ua,c.Ua,[a.D]),a.ab(4608,c.bb,c.bb,[]),a.ab(4608,c.qc,c.qc,[]),a.ab(1073742336,h.b,h.b,[]),a.ab(1073742336,y.o,y.o,[]),a.ab(1073742336,y.e,y.e,[]),a.ab(1073742336,m.e,m.e,[]),a.ab(1073742336,m.d,m.d,[]),a.ab(1073742336,r.b,r.b,[]),a.ab(1073742336,c.w,c.w,[]),a.ab(1073742336,c.u,c.u,[]),a.ab(1073742336,c.z,c.z,[]),a.ab(1073742336,c.B,c.B,[]),a.ab(1073742336,c.E,c.E,[]),a.ab(1073742336,c.m,c.m,[]),a.ab(1073742336,c.S,c.S,[]),a.ab(1073742336,S.n,S.n,[[2,S.t],[2,S.m]]),a.ab(1073742336,b.a,b.a,[]),a.ab(1073742336,t,t,[]),a.ab(256,m.l,"XSRF-TOKEN",[]),a.ab(256,m.m,"X-XSRF-TOKEN",[]),a.ab(1024,S.i,function(){return[[{path:"",component:s,pathMatch:"full"}]]},[])])})},U89g:function(l,n,e){"use strict";e.d(n,"a",function(){return t}),e.d(n,"b",function(){return u});var a=e("CcnG"),t=(e("d2mR"),e("Ip0R"),a.Qa({encapsulation:2,styles:[],data:{}}));function u(l){return a.mb(0,[],null,null)}}}]);