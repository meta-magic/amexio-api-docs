webpackJsonp([92],{"/HGF":function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("LMZF"),u=function(){},a=t("KhCp"),_=t("kL+h"),i=t("tfJK"),d=t("drlO"),r=t("Un6q"),o=t("9iV4"),h=function(){function l(l){this.http=l,this.areaChartData=[["Year","Sales","Expenses"],["2013",1e3,400],["2014",1170,460],["2015",660,1120],["2016",1030,540]],this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,t,e=this;this.http.get("assets/data/code/charts/areachart/chart.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/charts/areachart/chart.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n}),this.http.get("assets/data/code/charts/areachart/datasource.json",{responseType:"text"}).subscribe(function(l){t=l},function(l){},function(){e.dataSourceCode=t})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.ngOnInit=function(){},l}(),c=e._1({encapsulation:2,styles:[],data:{}});function p(l){return e._27(0,[(l()(),e._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(3,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),e._2(4,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function s(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),e._2(3,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function m(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),e._2(3,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.dataSourceCode,"json")},null)}function x(l){return e._27(0,[(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(1,0,null,null,168,"amexio-card",[["header","true"]],null,null,null,i._48,i.f)),e._2(2,4308992,null,0,d.f,[],{header:[0,"header"]},null),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(4,0,null,0,2,"amexio-header",[],null,null,null,i._57,i.o)),e._2(5,114688,null,0,d.t,[],null,null),(l()(),e._25(-1,0,["\n         Area Chart \n      "])),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(8,0,null,1,160,"amexio-body",[],null,null,null,i._45,i.c)),e._2(9,114688,null,0,d.c,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["An area chart that is rendered within the browser using SVG .Displays tips when hovering over points."])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(14,0,null,0,153,"amexio-tab-view",[],null,null,null,i._66,i.x)),e._2(15,5619712,null,1,d.G,[e.B],null,null),e._23(603979776,1,{queryTabs:1}),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(18,0,null,0,23,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i._67,i.y)),e._2(19,114688,[[1,4]],0,d.H,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n           "])),(l()(),e._3(21,0,null,0,19,"amexio-row",[],null,null,null,i._63,i.u)),e._2(22,1163264,null,0,d.D,[],null,null),(l()(),e._25(-1,0,["\n             "])),(l()(),e._3(24,0,null,0,15,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,i._50,i.h)),e._2(25,114688,null,0,d.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n               "])),(l()(),e._3(27,0,null,0,11,"amexio-chart-area",[],null,null,null,i._73,i.E)),e._2(28,1163264,null,3,d.Q,[d.X],{width:[0,"width"],height:[1,"height"],data:[2,"data"]},null),e._23(603979776,2,{chartLegendComp:1}),e._23(603979776,3,{chartTitleComp:1}),e._23(603979776,4,{chartAreaComp:1}),(l()(),e._25(-1,null,["\n                 "])),(l()(),e._3(33,0,null,null,1,"amexio-chart-title",[],null,null,null,i._79,i.K)),e._2(34,114688,[[3,4]],0,d.Y,[],{title:[0,"title"]},null),(l()(),e._25(-1,null,["\n                 "])),(l()(),e._3(36,0,null,null,1,"amexio-chart-legend",[],null,null,null,i._78,i.J)),e._2(37,114688,[[2,4]],0,d.W,[],{position:[0,"position"]},null),(l()(),e._25(-1,null,["\n               "])),(l()(),e._25(-1,0,["\n             "])),(l()(),e._25(-1,0,["\n           "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(43,0,null,0,81,"amexio-tab",[["title","API Reference"]],null,null,null,i._67,i.y)),e._2(44,114688,[[1,4]],0,d.H,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(46,0,null,0,23,"amexio-datagrid",[["title","Chart Properties"]],null,null,null,i._117,i._22)),e._2(47,1425408,null,1,d._57,[d._1,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,5,{columnRef:1}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(50,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),e._2(51,49152,[[5,4]],2,d._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,6,{headerTemplate:0}),e._23(335544320,7,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(55,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),e._2(56,49152,[[5,4]],2,d._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,8,{headerTemplate:0}),e._23(335544320,9,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(60,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),e._2(61,49152,[[5,4]],2,d._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,10,{headerTemplate:0}),e._23(335544320,11,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(65,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),e._2(66,49152,[[5,4]],2,d._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,12,{headerTemplate:0}),e._23(335544320,13,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(71,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(73,0,null,0,23,"amexio-datagrid",[["title","Chart Title Properties"]],null,null,null,i._117,i._22)),e._2(74,1425408,null,1,d._57,[d._1,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,14,{columnRef:1}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),e._2(78,49152,[[14,4]],2,d._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,15,{headerTemplate:0}),e._23(335544320,16,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(82,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),e._2(83,49152,[[14,4]],2,d._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,17,{headerTemplate:0}),e._23(335544320,18,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(87,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),e._2(88,49152,[[14,4]],2,d._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,19,{headerTemplate:0}),e._23(335544320,20,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(92,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),e._2(93,49152,[[14,4]],2,d._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,21,{headerTemplate:0}),e._23(335544320,22,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(98,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(100,0,null,0,23,"amexio-datagrid",[["title","Chart Legend Properties"]],null,null,null,i._117,i._22)),e._2(101,1425408,null,1,d._57,[d._1,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,23,{columnRef:1}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(104,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),e._2(105,49152,[[23,4]],2,d._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,24,{headerTemplate:0}),e._23(335544320,25,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(109,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),e._2(110,49152,[[23,4]],2,d._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,26,{headerTemplate:0}),e._23(335544320,27,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(114,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),e._2(115,49152,[[23,4]],2,d._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,28,{headerTemplate:0}),e._23(335544320,29,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(119,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),e._2(120,49152,[[23,4]],2,d._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,30,{headerTemplate:0}),e._23(335544320,31,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(126,0,null,0,31,"amexio-tab",[["title","Source"]],null,null,null,i._67,i.y)),e._2(127,114688,[[1,4]],0,d.H,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(129,0,null,0,27,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(131,0,null,null,24,"amexio-vertical-tab-view",[],null,null,null,i._69,i.A)),e._2(132,5357568,null,1,d.L,[e.B],null,null),e._23(603979776,32,{queryTabs:1}),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(135,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,i._67,i.y)),e._2(136,114688,[[32,4]],0,d.H,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,p)),e._2(139,16384,null,0,r.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(142,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,i._67,i.y)),e._2(143,114688,[[32,4]],0,d.H,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,s)),e._2(146,16384,null,0,r.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(149,0,null,0,5,"amexio-tab",[["title","Data Source"]],null,null,null,i._67,i.y)),e._2(150,114688,[[32,4]],0,d.H,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,m)),e._2(153,16384,null,0,r.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(159,0,null,0,7,"amexio-tab",[["title","Live"]],null,null,null,i._67,i.y)),e._2(160,114688,[[1,4]],0,d.H,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                     "])),(l()(),e._3(162,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Amexio Sandbox"])),(l()(),e._25(-1,0,["\n"])),(l()(),e._3(165,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-areachart?embed=1&file=app/charts/areachart/areachart.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n    "])),(l()(),e._25(-1,null,["\n  \n  "]))],function(l,n){var t=n.component;l(n,2,0,"true"),l(n,5,0),l(n,9,0),l(n,15,0),l(n,19,0,"Demo","true"),l(n,22,0),l(n,25,0,"12"),l(n,28,0,"100%","500px",t.areaChartData),l(n,34,0,"Company Performance"),l(n,37,0,"bottom"),l(n,44,0,"API Reference"),l(n,47,0,"Chart Properties","assets/apireference/charts/areachart.json","get","properties",!1,!1),l(n,51,0,"Name","name",!1,"string",15),l(n,56,0,"Type","type",!1,"string",10),l(n,61,0,"Default","default",!1,"string",10),l(n,66,0,"Description","description",!1,"string",65),l(n,74,0,"Chart Title Properties","assets/apireference/charts/charttitle.json","get","properties",!1,!1),l(n,78,0,"Name","name",!1,"string",15),l(n,83,0,"Type","type",!1,"string",10),l(n,88,0,"Default","default",!1,"string",10),l(n,93,0,"Description","description",!1,"string",65),l(n,101,0,"Chart Legend Properties","assets/apireference/charts/chartlegend.json","get","properties",!1,!1),l(n,105,0,"Name","name",!1,"string",15),l(n,110,0,"Type","type",!1,"string",10),l(n,115,0,"Default","default",!1,"string",10),l(n,120,0,"Description","description",!1,"string",65),l(n,127,0,"Source"),l(n,132,0),l(n,136,0,"HTML",!0),l(n,139,0,t.htmlCode),l(n,143,0,"Type Script"),l(n,146,0,t.typeScriptCode),l(n,150,0,"Data Source"),l(n,153,0,t.dataSourceCode),l(n,160,0,"Live")},function(l,n){l(n,24,0,e._16(n,25).colclass)})}var y=e.Z("area-chart-demo",h,function(l){return e._27(0,[(l()(),e._3(0,0,null,null,1,"area-chart-demo",[],null,null,null,x,c)),e._2(1,114688,null,0,h,[o.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),f=t("0nO6"),b=t("UHIZ");t.d(n,"AreaChartDemoModuleNgFactory",function(){return g});var g=e._0(u,[],function(l){return e._12([e._13(512,e.j,e.W,[[8,[y]],[3,e.j],e.v]),e._13(4608,r.n,r.m,[e.s,[2,r.u]]),e._13(4608,f.r,f.r,[]),e._13(4608,o.h,o.m,[r.c,e.z,o.k]),e._13(4608,o.n,o.n,[o.h,o.l]),e._13(5120,o.a,function(l){return[l]},[o.n]),e._13(4608,o.j,o.j,[]),e._13(6144,o.i,null,[o.j]),e._13(4608,o.g,o.g,[o.i]),e._13(6144,o.b,null,[o.g]),e._13(5120,o.f,o.o,[o.b,[2,o.a]]),e._13(4608,o.c,o.c,[o.f]),e._13(4608,d._1,d._1,[o.c]),e._13(4608,d._11,d._11,[e.z]),e._13(4608,d._17,d._17,[]),e._13(4608,d._37,d._37,[]),e._13(4608,d.X,d.X,[]),e._13(512,r.b,r.b,[]),e._13(512,f.o,f.o,[]),e._13(512,f.e,f.e,[]),e._13(512,o.e,o.e,[]),e._13(512,o.d,o.d,[]),e._13(512,_.b,_.b,[]),e._13(512,d.u,d.u,[]),e._13(512,d.s,d.s,[]),e._13(512,d._44,d._44,[]),e._13(512,d.y,d.y,[]),e._13(512,d.B,d.B,[]),e._13(512,d.k,d.k,[]),e._13(512,d.M,d.M,[]),e._13(512,d.h,d.h,[]),e._13(512,b.n,b.n,[[2,b.s],[2,b.m]]),e._13(512,u,u,[]),e._13(256,o.k,"XSRF-TOKEN",[]),e._13(256,o.l,"X-XSRF-TOKEN",[]),e._13(1024,b.i,function(){return[[{path:"",component:h,pathMatch:"full"}]]},[])])})}});