webpackJsonp(["barchart.demo.module"],{F27j:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("LMZF"),a=function(){},u=t("tfJK"),i=t("KhCp"),_=t("kL+h"),d=t("drlO"),r=t("Un6q"),o=t("9iV4"),c=function(){function l(l){this.http=l,this.barStackChartData=[["Year","Sales","Expenses","Profit"],["2014",1e3,400,200],["2015",1170,460,250],["2016",660,1120,300],["2017",1030,540,350]],this.barChartData=[["City","2010 Population"],["New York City, NY",8175e3],["Los Angeles, CA",3792e3],["Chicago, IL",2695e3],["Houston, TX",2099e3],["Philadelphia, PA",1526e3]],this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,t,e=this;this.http.get("assets/data/code/charts/barchart/chart.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/charts/barchart/chart.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n}),this.http.get("assets/data/code/charts/barchart/datasource.json",{responseType:"text"}).subscribe(function(l){t=l},function(l){},function(){e.dataSourceCode=t})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.ngOnInit=function(){},l}(),h=e._1({encapsulation:2,styles:[],data:{}});function p(l){return e._27(0,[(l()(),e._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(3,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),e._2(4,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function s(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),e._2(3,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function m(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),e._2(3,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.dataSourceCode,"json")},null)}function x(l){return e._27(0,[(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(1,0,null,null,189,"amexio-card",[["header","true"]],null,null,null,u._58,u.h)),e._2(2,5357568,null,3,d.g,[],{header:[0,"header"]},null),e._23(603979776,1,{amexioHeader:1}),e._23(603979776,2,{amexioBody:1}),e._23(603979776,3,{amexioFooter:1}),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(7,0,null,0,2,"amexio-header",[],null,null,null,u._67,u.q)),e._2(8,114688,[[1,4]],0,d.u,[],null,null),(l()(),e._25(-1,0,["\n         Bar Chart \n      "])),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(11,0,null,1,178,"amexio-body",[],null,null,null,u._54,u.d)),e._2(12,114688,[[2,4]],0,d.c,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(14,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["An bar chart that is rendered within the browser using SVG. A bar chart is a chart that presents grouped data with rectangular bars with lengths proportional to the values that they represent."])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(17,16777216,null,0,171,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,t){var a=!0;return"document:click"===n&&(a=!1!==e._16(l,18).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==e._16(l,18).onscroll()&&a),a},u._77,u.A)),e._2(18,5357568,null,2,d.J,[e.B,e.j,e.M],null,null),e._23(603979776,4,{queryTabs:1}),e._23(603979776,5,{queryAction:1}),(l()(),e._25(-1,1,["\n          "])),(l()(),e._3(22,0,null,1,40,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u._78,u.B)),e._2(23,114688,[[4,4]],0,d.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n           "])),(l()(),e._3(25,0,null,0,36,"amexio-row",[],null,null,null,u._73,u.w)),e._2(26,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n             "])),(l()(),e._3(28,0,null,0,15,"amexio-column",[["size","6"]],[[8,"className",0]],null,null,u._60,u.j)),e._2(29,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n               "])),(l()(),e._3(31,0,null,0,11,"amexio-chart-bar",[],null,null,null,u._86,u.J)),e._2(32,1163264,null,3,d.V,[d._1],{data:[0,"data"],width:[1,"width"],height:[2,"height"]},null),e._23(603979776,6,{chartLegendComp:1}),e._23(603979776,7,{chartTitleComp:1}),e._23(603979776,8,{chartAreaComp:1}),(l()(),e._25(-1,null,["\n                 "])),(l()(),e._3(37,0,null,null,1,"amexio-chart-title",[],null,null,null,u._91,u.O)),e._2(38,114688,[[7,4]],0,d._2,[],{title:[0,"title"]},null),(l()(),e._25(-1,null,["\n                 "])),(l()(),e._3(40,0,null,null,1,"amexio-chart-legend",[],null,null,null,u._90,u.N)),e._2(41,114688,[[6,4]],0,d._0,[],{position:[0,"position"]},null),(l()(),e._25(-1,null,["\n               "])),(l()(),e._25(-1,0,["\n             "])),(l()(),e._25(-1,0,["\n             "])),(l()(),e._3(45,0,null,0,15,"amexio-column",[["size","6"]],[[8,"className",0]],null,null,u._60,u.j)),e._2(46,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n               "])),(l()(),e._3(48,0,null,0,11,"amexio-chart-bar",[],null,null,null,u._86,u.J)),e._2(49,1163264,null,3,d.V,[d._1],{data:[0,"data"],width:[1,"width"],height:[2,"height"],stacked:[3,"stacked"]},null),e._23(603979776,9,{chartLegendComp:1}),e._23(603979776,10,{chartTitleComp:1}),e._23(603979776,11,{chartAreaComp:1}),(l()(),e._25(-1,null,["\n                 "])),(l()(),e._3(54,0,null,null,1,"amexio-chart-title",[],null,null,null,u._91,u.O)),e._2(55,114688,[[10,4]],0,d._2,[],{title:[0,"title"]},null),(l()(),e._25(-1,null,["\n                 "])),(l()(),e._3(57,0,null,null,1,"amexio-chart-legend",[],null,null,null,u._90,u.N)),e._2(58,114688,[[9,4]],0,d._0,[],{position:[0,"position"]},null),(l()(),e._25(-1,null,["\n               "])),(l()(),e._25(-1,0,["\n             "])),(l()(),e._25(-1,0,["\n           "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,1,["\n          "])),(l()(),e._3(64,0,null,1,81,"amexio-tab",[["title","API Reference"]],null,null,null,u._78,u.B)),e._2(65,114688,[[4,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(67,0,null,0,23,"amexio-datagrid",[["title","Chart Properties<amexio-chart-bar>"]],null,null,null,u._135,u._32)),e._2(68,1425408,null,1,d._66,[d._5,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,12,{columnRef:1}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(71,0,null,null,3,"amexio-data-table-column",[],null,null,null,u._136,u._33)),e._2(72,49152,[[12,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,13,{headerTemplate:0}),e._23(335544320,14,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(76,0,null,null,3,"amexio-data-table-column",[],null,null,null,u._136,u._33)),e._2(77,49152,[[12,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,15,{headerTemplate:0}),e._23(335544320,16,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(81,0,null,null,3,"amexio-data-table-column",[],null,null,null,u._136,u._33)),e._2(82,49152,[[12,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,17,{headerTemplate:0}),e._23(335544320,18,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(86,0,null,null,3,"amexio-data-table-column",[],null,null,null,u._136,u._33)),e._2(87,49152,[[12,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,19,{headerTemplate:0}),e._23(335544320,20,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(92,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(94,0,null,0,23,"amexio-datagrid",[["title","Chart Title Properties<amexio-chart-title>"]],null,null,null,u._135,u._32)),e._2(95,1425408,null,1,d._66,[d._5,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,21,{columnRef:1}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(98,0,null,null,3,"amexio-data-table-column",[],null,null,null,u._136,u._33)),e._2(99,49152,[[21,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,22,{headerTemplate:0}),e._23(335544320,23,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(103,0,null,null,3,"amexio-data-table-column",[],null,null,null,u._136,u._33)),e._2(104,49152,[[21,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,24,{headerTemplate:0}),e._23(335544320,25,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(108,0,null,null,3,"amexio-data-table-column",[],null,null,null,u._136,u._33)),e._2(109,49152,[[21,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,26,{headerTemplate:0}),e._23(335544320,27,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(113,0,null,null,3,"amexio-data-table-column",[],null,null,null,u._136,u._33)),e._2(114,49152,[[21,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,28,{headerTemplate:0}),e._23(335544320,29,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(119,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(121,0,null,0,23,"amexio-datagrid",[["title","Chart Legend Properties<amexio-chart-legend> "]],null,null,null,u._135,u._32)),e._2(122,1425408,null,1,d._66,[d._5,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,30,{columnRef:1}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(125,0,null,null,3,"amexio-data-table-column",[],null,null,null,u._136,u._33)),e._2(126,49152,[[30,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,31,{headerTemplate:0}),e._23(335544320,32,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(130,0,null,null,3,"amexio-data-table-column",[],null,null,null,u._136,u._33)),e._2(131,49152,[[30,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,33,{headerTemplate:0}),e._23(335544320,34,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(135,0,null,null,3,"amexio-data-table-column",[],null,null,null,u._136,u._33)),e._2(136,49152,[[30,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,35,{headerTemplate:0}),e._23(335544320,36,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(140,0,null,null,3,"amexio-data-table-column",[],null,null,null,u._136,u._33)),e._2(141,49152,[[30,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,37,{headerTemplate:0}),e._23(335544320,38,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,1,["\n          "])),(l()(),e._3(147,0,null,1,31,"amexio-tab",[["title","Source"]],null,null,null,u._78,u.B)),e._2(148,114688,[[4,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(150,0,null,0,27,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(152,0,null,null,24,"amexio-vertical-tab-view",[],null,null,null,u._80,u.D)),e._2(153,5357568,null,1,d.O,[e.B],null,null),e._23(603979776,39,{queryTabs:1}),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(156,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,u._78,u.B)),e._2(157,114688,[[39,4]],0,d.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,p)),e._2(160,16384,null,0,r.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(163,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,u._78,u.B)),e._2(164,114688,[[39,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,s)),e._2(167,16384,null,0,r.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(170,0,null,0,5,"amexio-tab",[["title","Data Source"]],null,null,null,u._78,u.B)),e._2(171,114688,[[39,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,m)),e._2(174,16384,null,0,r.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,1,["\n          "])),(l()(),e._3(180,0,null,1,7,"amexio-tab",[["title","Live"]],null,null,null,u._78,u.B)),e._2(181,114688,[[4,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                       "])),(l()(),e._3(183,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Amexio Sandbox"])),(l()(),e._25(-1,0,["\n"])),(l()(),e._3(186,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-barchart?embed=1&file=app/charts/barchart/barchart.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,1,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n    "])),(l()(),e._25(-1,null,["\n  \n  "]))],function(l,n){var t=n.component;l(n,2,0,"true"),l(n,8,0),l(n,12,0),l(n,18,0),l(n,23,0,"Demo","true"),l(n,26,0),l(n,29,0,"6"),l(n,32,0,t.barChartData,"100%","400px"),l(n,38,0,"Population of Largest U.S. Cities"),l(n,41,0,"bottom"),l(n,46,0,"6"),l(n,49,0,t.barStackChartData,"100%","400px",!0),l(n,55,0,"Company Performance"),l(n,58,0,"bottom"),l(n,65,0,"API Reference"),l(n,68,0,"Chart Properties<amexio-chart-bar>","assets/apireference/charts/barchart.json","get","properties",!1,!1),l(n,72,0,"Name","name",!1,"string",15),l(n,77,0,"Type","type",!1,"string",10),l(n,82,0,"Default","default",!1,"string",10),l(n,87,0,"Description","description",!1,"string",65),l(n,95,0,"Chart Title Properties<amexio-chart-title>","assets/apireference/charts/charttitle.json","get","properties",!1,!1),l(n,99,0,"Name","name",!1,"string",15),l(n,104,0,"Type","type",!1,"string",10),l(n,109,0,"Default","default",!1,"string",10),l(n,114,0,"Description","description",!1,"string",65),l(n,122,0,"Chart Legend Properties<amexio-chart-legend> ","assets/apireference/charts/chartlegend.json","get","properties",!1,!1),l(n,126,0,"Name","name",!1,"string",15),l(n,131,0,"Type","type",!1,"string",10),l(n,136,0,"Default","default",!1,"string",10),l(n,141,0,"Description","description",!1,"string",65),l(n,148,0,"Source"),l(n,153,0),l(n,157,0,"HTML",!0),l(n,160,0,t.htmlCode),l(n,164,0,"Type Script"),l(n,167,0,t.typeScriptCode),l(n,171,0,"Data Source"),l(n,174,0,t.dataSourceCode),l(n,181,0,"Live")},function(l,n){l(n,28,0,e._16(n,29).colclass),l(n,45,0,e._16(n,46).colclass)})}var b=e.Z("bar-chart-demo",c,function(l){return e._27(0,[(l()(),e._3(0,0,null,null,1,"bar-chart-demo",[],null,null,null,x,h)),e._2(1,114688,null,0,c,[o.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),y=t("0nO6"),f=t("UHIZ");t.d(n,"BarChartDemoModuleNgFactory",function(){return g});var g=e._0(a,[],function(l){return e._12([e._13(512,e.j,e.W,[[8,[u.a,b]],[3,e.j],e.v]),e._13(4608,r.n,r.m,[e.s,[2,r.u]]),e._13(4608,y.s,y.s,[]),e._13(4608,o.h,o.m,[r.c,e.z,o.k]),e._13(4608,o.n,o.n,[o.h,o.l]),e._13(5120,o.a,function(l){return[l]},[o.n]),e._13(4608,o.j,o.j,[]),e._13(6144,o.i,null,[o.j]),e._13(4608,o.g,o.g,[o.i]),e._13(6144,o.b,null,[o.g]),e._13(5120,o.f,o.o,[o.b,[2,o.a]]),e._13(4608,o.c,o.c,[o.f]),e._13(4608,d._5,d._5,[o.c]),e._13(4608,d._15,d._15,[e.z]),e._13(4608,d._22,d._22,[]),e._13(4608,d._40,d._40,[]),e._13(4608,d._1,d._1,[]),e._13(512,r.b,r.b,[]),e._13(512,y.p,y.p,[]),e._13(512,y.e,y.e,[]),e._13(512,o.e,o.e,[]),e._13(512,o.d,o.d,[]),e._13(512,d.v,d.v,[]),e._13(512,d.t,d.t,[]),e._13(512,d.y,d.y,[]),e._13(512,d.A,d.A,[]),e._13(512,d.D,d.D,[]),e._13(512,d.l,d.l,[]),e._13(512,d.Q,d.Q,[]),e._13(512,_.b,_.b,[]),e._13(512,d.i,d.i,[]),e._13(512,f.n,f.n,[[2,f.s],[2,f.m]]),e._13(512,a,a,[]),e._13(256,o.k,"XSRF-TOKEN",[]),e._13(256,o.l,"X-XSRF-TOKEN",[]),e._13(1024,f.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})}});