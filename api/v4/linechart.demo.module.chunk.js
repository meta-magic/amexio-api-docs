webpackJsonp(["linechart.demo.module"],{"4rS2":function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("LMZF"),u=function(){},a=t("tfJK"),i=t("KhCp"),_=t("kL+h"),d=t("drlO"),o=t("Un6q"),r=t("9iV4"),c=function(){function l(l){this.http=l,this.lineChartData=[[{datatype:"number",label:"Day"},{datatype:"number",label:"Guardians of the Galaxy"},{datatype:"number",label:"The Avengers"},{datatype:"number",label:"Transformers: Age of Extinction"}],[1,37.8,80.8,41.8],[2,30.9,69.5,32.4],[3,25.4,57,25.7],[4,11.7,18.8,10.5],[5,11.9,17.6,10.4],[6,8.8,13.6,7.7],[7,7.6,12.3,9.6],[8,12.3,29.2,10.6],[9,16.9,42.9,14.8],[10,12.8,30.9,11.6],[11,5.3,7.9,4.7],[12,6.6,8.4,5.2],[13,4.8,6.3,3.6],[14,4.2,6.2,3.4]],this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,t=this;this.http.get("assets/data/code/charts/linechart/chart.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){t.htmlCode=l}),this.http.get("assets/data/code/charts/linechart/chart.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){t.typeScriptCode=n}),this.http.get("assets/data/code/charts/linechart/datasource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){t.dataSourceCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.ngOnInit=function(){},l}(),h=e._1({encapsulation:2,styles:[],data:{}});function p(l){return e._27(0,[(l()(),e._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(3,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),e._2(4,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function m(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),e._2(3,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function s(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),e._2(3,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.dataSourceCode,"json")},null)}function x(l){return e._27(0,[(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(1,0,null,null,142,"amexio-card",[["header","true"]],null,null,null,a._58,a.h)),e._2(2,5357568,null,3,d.g,[],{header:[0,"header"]},null),e._23(603979776,1,{amexioHeader:1}),e._23(603979776,2,{amexioBody:1}),e._23(603979776,3,{amexioFooter:1}),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(7,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),e._2(8,114688,[[1,4]],0,d.u,[],null,null),(l()(),e._25(-1,0,["\n         Line Chart \n      "])),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(11,0,null,1,131,"amexio-body",[],null,null,null,a._54,a.d)),e._2(12,114688,[[2,4]],0,d.c,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(14,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["A line chart that is rendered within the browser using SVG."])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(17,16777216,null,0,124,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,t){var u=!0;return"document:click"===n&&(u=!1!==e._16(l,18).onWindowClick()&&u),"document:scroll"===n&&(u=!1!==e._16(l,18).onscroll()&&u),u},a._77,a.A)),e._2(18,5357568,null,2,d.J,[e.B,e.j,e.M],null,null),e._23(603979776,4,{queryTabs:1}),e._23(603979776,5,{queryAction:1}),(l()(),e._25(-1,1,["\n          "])),(l()(),e._3(22,0,null,1,20,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,a._78,a.B)),e._2(23,114688,[[4,4]],0,d.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(25,0,null,0,16,"amexio-row",[],null,null,null,a._73,a.w)),e._2(26,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(28,0,null,0,12,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,a._60,a.j)),e._2(29,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(31,0,null,0,8,"amexio-chart-line",[],null,null,null,a._105,a._2)),e._2(32,1163264,null,3,d._23,[d._1],{width:[0,"width"],height:[1,"height"],data:[2,"data"]},null),e._23(603979776,6,{chartLegendComp:1}),e._23(603979776,7,{chartTitleComp:1}),e._23(603979776,8,{chartAreaComp:1}),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(37,0,null,null,1,"amexio-chart-legend",[],null,null,null,a._90,a.N)),e._2(38,114688,[[6,4]],0,d._0,[],{position:[0,"position"]},null),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,1,["\n          "])),(l()(),e._3(44,0,null,1,54,"amexio-tab",[["title","API Reference"]],null,null,null,a._78,a.B)),e._2(45,114688,[[4,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(47,0,null,0,23,"amexio-datagrid",[["title","Chart Properties<amexio-chart-line>"]],null,null,null,a._135,a._32)),e._2(48,1425408,null,1,d._66,[d._5,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,9,{columnRef:1}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(51,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),e._2(52,49152,[[9,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,10,{headerTemplate:0}),e._23(335544320,11,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(56,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),e._2(57,49152,[[9,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,12,{headerTemplate:0}),e._23(335544320,13,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(61,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),e._2(62,49152,[[9,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,14,{headerTemplate:0}),e._23(335544320,15,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(66,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),e._2(67,49152,[[9,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,16,{headerTemplate:0}),e._23(335544320,17,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(72,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(74,0,null,0,23,"amexio-datagrid",[["title","Chart Title Properties<amexio-chart-title>"]],null,null,null,a._135,a._32)),e._2(75,1425408,null,1,d._66,[d._5,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,18,{columnRef:1}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(78,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),e._2(79,49152,[[18,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,19,{headerTemplate:0}),e._23(335544320,20,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(83,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),e._2(84,49152,[[18,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,21,{headerTemplate:0}),e._23(335544320,22,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(88,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),e._2(89,49152,[[18,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,23,{headerTemplate:0}),e._23(335544320,24,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(93,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),e._2(94,49152,[[18,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,25,{headerTemplate:0}),e._23(335544320,26,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,1,["\n          "])),(l()(),e._3(100,0,null,1,31,"amexio-tab",[["title","Source"]],null,null,null,a._78,a.B)),e._2(101,114688,[[4,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(103,0,null,0,27,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(105,0,null,null,24,"amexio-vertical-tab-view",[],null,null,null,a._80,a.D)),e._2(106,5357568,null,1,d.O,[e.B],null,null),e._23(603979776,27,{queryTabs:1}),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(109,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,a._78,a.B)),e._2(110,114688,[[27,4]],0,d.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,p)),e._2(113,16384,null,0,o.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(116,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,a._78,a.B)),e._2(117,114688,[[27,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,m)),e._2(120,16384,null,0,o.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(123,0,null,0,5,"amexio-tab",[["title","Data Source"]],null,null,null,a._78,a.B)),e._2(124,114688,[[27,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,s)),e._2(127,16384,null,0,o.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,1,["\n          "])),(l()(),e._3(133,0,null,1,7,"amexio-tab",[["title","Live"]],null,null,null,a._78,a.B)),e._2(134,114688,[[4,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n           "])),(l()(),e._3(136,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Amexio Sandbox"])),(l()(),e._25(-1,0,["\n"])),(l()(),e._3(139,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-linechart?embed=1&file=app/charts/linechart/linechart.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,1,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n    "])),(l()(),e._25(-1,null,["\n\n  "]))],function(l,n){var t=n.component;l(n,2,0,"true"),l(n,8,0),l(n,12,0),l(n,18,0),l(n,23,0,"Demo","true"),l(n,26,0),l(n,29,0,"12"),l(n,32,0,"100%","400px",t.lineChartData),l(n,38,0,"top"),l(n,45,0,"API Reference"),l(n,48,0,"Chart Properties<amexio-chart-line>","assets/apireference/charts/linechart.json","get","chart",!1,!1),l(n,52,0,"Name","name",!1,"string",15),l(n,57,0,"Type","type",!1,"string",10),l(n,62,0,"Default","default",!1,"string",10),l(n,67,0,"Description","description",!1,"string",65),l(n,75,0,"Chart Title Properties<amexio-chart-title>","assets/apireference/charts/linechart.json","get","chartLegend",!1,!1),l(n,79,0,"Name","name",!1,"string",15),l(n,84,0,"Type","type",!1,"string",10),l(n,89,0,"Default","default",!1,"string",10),l(n,94,0,"Description","description",!1,"string",65),l(n,101,0,"Source"),l(n,106,0),l(n,110,0,"HTML",!0),l(n,113,0,t.htmlCode),l(n,117,0,"Type Script"),l(n,120,0,t.typeScriptCode),l(n,124,0,"Data Source"),l(n,127,0,t.dataSourceCode),l(n,134,0,"Live")},function(l,n){l(n,28,0,e._16(n,29).colclass)})}var f=e.Z("line-chart-demo",c,function(l){return e._27(0,[(l()(),e._3(0,0,null,null,1,"line-chart-demo",[],null,null,null,x,h)),e._2(1,114688,null,0,c,[r.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),y=t("0nO6"),b=t("UHIZ");t.d(n,"LineChartDemoModuleNgFactory",function(){return g});var g=e._0(u,[],function(l){return e._12([e._13(512,e.j,e.W,[[8,[a.a,f]],[3,e.j],e.v]),e._13(4608,o.n,o.m,[e.s,[2,o.u]]),e._13(4608,y.s,y.s,[]),e._13(4608,r.h,r.m,[o.c,e.z,r.k]),e._13(4608,r.n,r.n,[r.h,r.l]),e._13(5120,r.a,function(l){return[l]},[r.n]),e._13(4608,r.j,r.j,[]),e._13(6144,r.i,null,[r.j]),e._13(4608,r.g,r.g,[r.i]),e._13(6144,r.b,null,[r.g]),e._13(5120,r.f,r.o,[r.b,[2,r.a]]),e._13(4608,r.c,r.c,[r.f]),e._13(4608,d._5,d._5,[r.c]),e._13(4608,d._15,d._15,[e.z]),e._13(4608,d._22,d._22,[]),e._13(4608,d._40,d._40,[]),e._13(4608,d._1,d._1,[]),e._13(512,o.b,o.b,[]),e._13(512,y.p,y.p,[]),e._13(512,y.e,y.e,[]),e._13(512,r.e,r.e,[]),e._13(512,r.d,r.d,[]),e._13(512,d.v,d.v,[]),e._13(512,d.t,d.t,[]),e._13(512,d.y,d.y,[]),e._13(512,d.A,d.A,[]),e._13(512,d.D,d.D,[]),e._13(512,d.l,d.l,[]),e._13(512,d.Q,d.Q,[]),e._13(512,_.b,_.b,[]),e._13(512,d.i,d.i,[]),e._13(512,b.n,b.n,[[2,b.s],[2,b.m]]),e._13(512,u,u,[]),e._13(256,r.k,"XSRF-TOKEN",[]),e._13(256,r.l,"X-XSRF-TOKEN",[]),e._13(1024,b.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})}});