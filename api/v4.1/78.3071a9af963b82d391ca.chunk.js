webpackJsonp([78],{ofyC:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("LMZF"),t=function(){},a=u("KhCp"),_=u("kL+h"),o=u("tfJK"),i=u("drlO"),r=u("Un6q"),d=u("9iV4"),c=function(){function l(l){this.http=l,this.gaugeChartData=[["Label","Value"],["Memory",80],["CPU",55],["Network",68]],this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,u=this;this.http.get("assets/data/code/dashboard/gauge/chart.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){u.htmlCode=l}),this.http.get("assets/data/code/dashboard/gauge/chart.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){u.typeScriptCode=n}),this.http.get("assets/data/code/dashboard/gauge/datasource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){u.dataSourceCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.ngOnInit=function(){},l}(),s=e._1({encapsulation:2,styles:[],data:{}});function h(l){return e._27(0,[(l()(),e._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(3,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),e._2(4,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function p(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),e._2(3,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function m(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),e._2(3,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.dataSourceCode,"json")},null)}function g(l){return e._27(0,[(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(1,0,null,null,108,"amexio-card",[["header","true"]],null,null,null,o._48,o.f)),e._2(2,4308992,null,0,i.f,[],{header:[0,"header"]},null),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(4,0,null,0,2,"amexio-header",[],null,null,null,o._57,o.o)),e._2(5,114688,null,0,i.t,[],null,null),(l()(),e._25(-1,0,["\n         Gauge Chart \n      "])),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(8,0,null,1,100,"amexio-body",[],null,null,null,o._45,o.c)),e._2(9,114688,null,0,i.c,[],null,null),(l()(),e._25(-1,0,["\n     "])),(l()(),e._3(11,0,null,0,6,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["A gauge with a dial, rendered within the browser using SVG. Guages are available under "])),(l()(),e._3(13,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._25(-1,null,["AmexioDashboardModule"])),(l()(),e._25(-1,null,[" from "])),(l()(),e._3(16,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._25(-1,null,["amexio-ng-extensions/dashboard"])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(19,0,null,0,88,"amexio-tab-view",[],null,null,null,o._66,o.x)),e._2(20,5619712,null,1,i.G,[e.B],null,null),e._23(603979776,1,{queryTabs:1}),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(23,0,null,0,15,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,o._67,o.y)),e._2(24,114688,[[1,4]],0,i.H,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n           "])),(l()(),e._3(26,0,null,0,11,"amexio-row",[],null,null,null,o._63,o.u)),e._2(27,1163264,null,0,i.D,[],null,null),(l()(),e._25(-1,0,["\n             "])),(l()(),e._3(29,0,null,0,7,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._50,o.h)),e._2(30,114688,null,0,i.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n               "])),(l()(),e._3(32,0,null,0,3,"amexio-dashboard-gauge",[],null,null,null,o._88,o.T)),e._2(33,1163264,null,1,i._13,[i._4],{height:[0,"height"],data:[1,"data"],redcolorfrom:[2,"redcolorfrom"],redcolorto:[3,"redcolorto"],yellowcolorfrom:[4,"yellowcolorfrom"],yellowcolorto:[5,"yellowcolorto"],scalevalue:[6,"scalevalue"]},null),e._23(603979776,2,{chartTitleComp:1}),(l()(),e._25(-1,null,["\n               "])),(l()(),e._25(-1,0,["\n             "])),(l()(),e._25(-1,0,["\n           "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(40,0,null,0,27,"amexio-tab",[["title","API Reference"]],null,null,null,o._67,o.y)),e._2(41,114688,[[1,4]],0,i.H,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(43,0,null,0,23,"amexio-datagrid",[["title","Chart Properties"]],null,null,null,o._117,o._22)),e._2(44,1425408,null,1,i._57,[i._1,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,3,{columnRef:1}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(47,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._118,o._23)),e._2(48,49152,[[3,4]],2,i._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,4,{headerTemplate:0}),e._23(335544320,5,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(52,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._118,o._23)),e._2(53,49152,[[3,4]],2,i._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,6,{headerTemplate:0}),e._23(335544320,7,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(57,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._118,o._23)),e._2(58,49152,[[3,4]],2,i._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,8,{headerTemplate:0}),e._23(335544320,9,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(62,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._118,o._23)),e._2(63,49152,[[3,4]],2,i._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,10,{headerTemplate:0}),e._23(335544320,11,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(69,0,null,0,28,"amexio-tab",[["title","Source"]],null,null,null,o._67,o.y)),e._2(70,114688,[[1,4]],0,i.H,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(72,0,null,0,24,"amexio-vertical-tab-view",[],null,null,null,o._69,o.A)),e._2(73,5357568,null,1,i.L,[e.B],null,null),e._23(603979776,12,{queryTabs:1}),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(76,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,o._67,o.y)),e._2(77,114688,[[12,4]],0,i.H,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,h)),e._2(80,16384,null,0,r.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(83,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,o._67,o.y)),e._2(84,114688,[[12,4]],0,i.H,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,p)),e._2(87,16384,null,0,r.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(90,0,null,0,5,"amexio-tab",[["title","Data Source"]],null,null,null,o._67,o.y)),e._2(91,114688,[[12,4]],0,i.H,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,m)),e._2(94,16384,null,0,r.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(99,0,null,0,7,"amexio-tab",[["title","Live"]],null,null,null,o._67,o.y)),e._2(100,114688,[[1,4]],0,i.H,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n           "])),(l()(),e._3(102,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Amexio Sandbox"])),(l()(),e._25(-1,0,["\n"])),(l()(),e._3(105,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-gauge?embed=1&file=app/dashboard/gauge/gauge.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n    "])),(l()(),e._25(-1,null,["\n  \n  "]))],function(l,n){var u=n.component;l(n,2,0,"true"),l(n,5,0),l(n,9,0),l(n,20,0),l(n,24,0,"Demo","true"),l(n,27,0),l(n,30,0,"12"),l(n,33,0,"400px",u.gaugeChartData,90,100,75,90,5),l(n,41,0,"API Reference"),l(n,44,0,"Chart Properties","assets/apireference/dashboard/gauge.json","get","dashboard",!1,!1),l(n,48,0,"Name","name",!1,"string",15),l(n,53,0,"Type","type",!1,"string",10),l(n,58,0,"Default","default",!1,"string",10),l(n,63,0,"Description","description",!1,"string",65),l(n,70,0,"Source"),l(n,73,0),l(n,77,0,"HTML",!0),l(n,80,0,u.htmlCode),l(n,84,0,"Type Script"),l(n,87,0,u.typeScriptCode),l(n,91,0,"Data Source"),l(n,94,0,u.dataSourceCode),l(n,100,0,"Live")},function(l,n){l(n,29,0,e._16(n,30).colclass)})}var f=e.Z("gauge-dashboard-demo",c,function(l){return e._27(0,[(l()(),e._3(0,0,null,null,1,"gauge-dashboard-demo",[],null,null,null,g,s)),e._2(1,114688,null,0,c,[d.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),b=u("0nO6"),y=u("UHIZ");u.d(n,"GaugeDemoModuleNgFactory",function(){return x});var x=e._0(t,[],function(l){return e._12([e._13(512,e.j,e.W,[[8,[f]],[3,e.j],e.v]),e._13(4608,r.n,r.m,[e.s,[2,r.u]]),e._13(4608,b.r,b.r,[]),e._13(4608,d.h,d.m,[r.c,e.z,d.k]),e._13(4608,d.n,d.n,[d.h,d.l]),e._13(5120,d.a,function(l){return[l]},[d.n]),e._13(4608,d.j,d.j,[]),e._13(6144,d.i,null,[d.j]),e._13(4608,d.g,d.g,[d.i]),e._13(6144,d.b,null,[d.g]),e._13(5120,d.f,d.o,[d.b,[2,d.a]]),e._13(4608,d.c,d.c,[d.f]),e._13(4608,i._1,i._1,[d.c]),e._13(4608,i._11,i._11,[e.z]),e._13(4608,i._17,i._17,[]),e._13(4608,i._37,i._37,[]),e._13(4608,i._4,i._4,[]),e._13(512,r.b,r.b,[]),e._13(512,b.o,b.o,[]),e._13(512,b.e,b.e,[]),e._13(512,d.e,d.e,[]),e._13(512,d.d,d.d,[]),e._13(512,i.u,i.u,[]),e._13(512,i.s,i.s,[]),e._13(512,i._44,i._44,[]),e._13(512,i.y,i.y,[]),e._13(512,i.B,i.B,[]),e._13(512,i.k,i.k,[]),e._13(512,i.M,i.M,[]),e._13(512,_.b,_.b,[]),e._13(512,i.j,i.j,[]),e._13(512,y.n,y.n,[[2,y.s],[2,y.m]]),e._13(512,t,t,[]),e._13(256,d.k,"XSRF-TOKEN",[]),e._13(256,d.l,"X-XSRF-TOKEN",[]),e._13(1024,y.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})}});