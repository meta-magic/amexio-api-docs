webpackJsonp([16],{DLB2:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("LMZF"),a=function(){},u=e("KhCp"),i=e("kL+h"),_=e("tfJK"),o=e("drlO"),d=e("Un6q"),r=e("9iV4"),c=function(){function l(l){this.http=l,this.treeMapData=[["Location","Parent","Market trade volume (size)","Market increase/decrease (color)"],["Global",null,0,0],["America","Global",0,0],["Europe","Global",0,0],["Asia","Global",0,0],["Australia","Global",0,0],["Africa","Global",0,0],["Brazil","America",11,10],["USA","America",52,31],["Mexico","America",24,12],["Canada","America",16,-23],["France","Europe",42,-11],["Germany","Europe",31,-2],["Sweden","Europe",22,-13],["Italy","Europe",17,4],["UK","Europe",21,-5],["China","Asia",36,4],["Japan","Asia",20,-12],["India","Asia",40,63],["Laos","Asia",4,34],["Mongolia","Asia",1,-5],["Israel","Asia",12,24],["Iran","Asia",18,13],["Pakistan","Asia",11,-52],["Egypt","Africa",21,0],["S. Africa","Africa",30,43],["Sudan","Africa",12,2],["Congo","Africa",10,12],["Zaire","Africa",8,10]],this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/map/treemap/chart.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/map/treemap/chart.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n}),this.http.get("assets/data/code/map/treemap/datasource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.dataSourceCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.ngOnInit=function(){},l}(),p=t._1({encapsulation:2,styles:[],data:{}});function m(l){return t._27(0,[(l()(),t._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(3,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),t._2(4,4243456,null,0,i.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function s(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(2,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),t._2(3,4243456,null,0,i.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function h(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(2,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),t._2(3,4243456,null,0,i.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.dataSourceCode,"json")},null)}function f(l){return t._27(0,[(l()(),t._25(-1,null,["\n    "])),(l()(),t._3(1,0,null,null,133,"amexio-card",[["header","true"]],null,null,null,_._48,_.f)),t._2(2,4308992,null,0,o.f,[],{header:[0,"header"]},null),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(4,0,null,0,2,"amexio-header",[],null,null,null,_._57,_.o)),t._2(5,114688,null,0,o.t,[],null,null),(l()(),t._25(-1,0,["\n         TreeMap \n      "])),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(8,0,null,1,125,"amexio-body",[],null,null,null,_._45,_.c)),t._2(9,114688,null,0,o.c,[],null,null),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t._25(-1,null,["A visual representation of a data tree, where each node can have zero or more children, and one parent (except for the root, which has no parents). Each node is displayed as a rectangle, sized and colored according to values that you assign. "])),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(14,0,null,0,118,"amexio-tab-view",[],null,null,null,_._66,_.x)),t._2(15,5619712,null,1,o.G,[t.B],null,null),t._23(603979776,1,{queryTabs:1}),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(18,0,null,0,15,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,_._67,_.y)),t._2(19,114688,[[1,4]],0,o.H,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n           "])),(l()(),t._3(21,0,null,0,11,"amexio-row",[],null,null,null,_._63,_.u)),t._2(22,1163264,null,0,o.D,[],null,null),(l()(),t._25(-1,0,["\n             "])),(l()(),t._3(24,0,null,0,7,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,_._50,_.h)),t._2(25,114688,null,0,o.i,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n               "])),(l()(),t._3(27,0,null,0,3,"amexio-map-treemap",[],[[8,"title",0]],null,null,_._99,_._4)),t._2(28,1163264,null,1,o._29,[o._19],{width:[0,"width"],height:[1,"height"],data:[2,"data"],mincolor:[3,"mincolor"],midcolor:[4,"midcolor"],maxcolor:[5,"maxcolor"],showscale:[6,"showscale"],maxpostdepth:[7,"maxpostdepth"]},null),t._23(603979776,2,{maptleComp:1}),(l()(),t._25(-1,null,["\n               "])),(l()(),t._25(-1,0,["\n             "])),(l()(),t._25(-1,0,["\n           "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(35,0,null,0,54,"amexio-tab",[["title","API Reference"]],null,null,null,_._67,_.y)),t._2(36,114688,[[1,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(38,0,null,0,23,"amexio-datagrid",[["title","Map Properties"]],null,null,null,_._117,_._22)),t._2(39,1425408,null,1,o._57,[o._1,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,3,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(42,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),t._2(43,49152,[[3,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,4,{headerTemplate:0}),t._23(335544320,5,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(47,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),t._2(48,49152,[[3,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,6,{headerTemplate:0}),t._23(335544320,7,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(52,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),t._2(53,49152,[[3,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,8,{headerTemplate:0}),t._23(335544320,9,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(57,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),t._2(58,49152,[[3,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,10,{headerTemplate:0}),t._23(335544320,11,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(63,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(65,0,null,0,23,"amexio-datagrid",[["title","Map Title Properties"]],null,null,null,_._117,_._22)),t._2(66,1425408,null,1,o._57,[o._1,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,12,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(69,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),t._2(70,49152,[[12,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,13,{headerTemplate:0}),t._23(335544320,14,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(74,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),t._2(75,49152,[[12,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,15,{headerTemplate:0}),t._23(335544320,16,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(79,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),t._2(80,49152,[[12,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,17,{headerTemplate:0}),t._23(335544320,18,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(84,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),t._2(85,49152,[[12,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,19,{headerTemplate:0}),t._23(335544320,20,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(91,0,null,0,31,"amexio-tab",[["title","Source"]],null,null,null,_._67,_.y)),t._2(92,114688,[[1,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(94,0,null,0,27,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t._25(-1,null,["\n            "])),(l()(),t._3(96,0,null,null,24,"amexio-vertical-tab-view",[],null,null,null,_._69,_.A)),t._2(97,5357568,null,1,o.L,[t.B],null,null),t._23(603979776,21,{queryTabs:1}),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(100,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,_._67,_.y)),t._2(101,114688,[[21,4]],0,o.H,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t.Y(16777216,null,0,1,null,m)),t._2(104,16384,null,0,d.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(107,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,_._67,_.y)),t._2(108,114688,[[21,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t.Y(16777216,null,0,1,null,s)),t._2(111,16384,null,0,d.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(114,0,null,0,5,"amexio-tab",[["title","Data Source"]],null,null,null,_._67,_.y)),t._2(115,114688,[[21,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t.Y(16777216,null,0,1,null,h)),t._2(118,16384,null,0,d.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(124,0,null,0,7,"amexio-tab",[["title","Live"]],null,null,null,_._67,_.y)),t._2(125,114688,[[1,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(127,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),t._25(-1,null,["Amexio Sandbox"])),(l()(),t._25(-1,0,["\n"])),(l()(),t._3(130,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexi-v4-treemap?embed=1&file=app/map/treemap/treemap.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,0,["\n        "])),(l()(),t._25(-1,0,["\n      "])),(l()(),t._25(-1,null,["\n    "])),(l()(),t._25(-1,null,["\n  \n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,5,0),l(n,9,0),l(n,15,0),l(n,19,0,"Demo","true"),l(n,22,0),l(n,25,0,"12"),l(n,28,0,"100%","500px",e.treeMapData,"#f00","#ddd","#0d0",!0,2),l(n,36,0,"API Reference"),l(n,39,0,"Map Properties","assets/apireference/map/treemap.json","get","chart",!1,!1),l(n,43,0,"Name","name",!1,"string",15),l(n,48,0,"Type","type",!1,"string",10),l(n,53,0,"Default","default",!1,"string",10),l(n,58,0,"Description","description",!1,"string",65),l(n,66,0,"Map Title Properties","assets/apireference/map/treemap.json","get","chartTitle",!1,!1),l(n,70,0,"Name","name",!1,"string",15),l(n,75,0,"Type","type",!1,"string",10),l(n,80,0,"Default","default",!1,"string",10),l(n,85,0,"Description","description",!1,"string",65),l(n,92,0,"Source"),l(n,97,0),l(n,101,0,"HTML",!0),l(n,104,0,e.htmlCode),l(n,108,0,"Type Script"),l(n,111,0,e.typeScriptCode),l(n,115,0,"Data Source"),l(n,118,0,e.dataSourceCode),l(n,125,0,"Live")},function(l,n){l(n,24,0,t._16(n,25).colclass),l(n,27,0,"tree")})}var y=t.Z("tree-map-demo",c,function(l){return t._27(0,[(l()(),t._3(0,0,null,null,1,"tree-map-demo",[],null,null,null,f,p)),t._2(1,114688,null,0,c,[r.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),x=e("0nO6"),b=e("UHIZ");e.d(n,"TreeMapDemoModuleNgFactory",function(){return g});var g=t._0(a,[],function(l){return t._12([t._13(512,t.j,t.W,[[8,[y]],[3,t.j],t.v]),t._13(4608,d.n,d.m,[t.s,[2,d.u]]),t._13(4608,x.r,x.r,[]),t._13(4608,r.h,r.m,[d.c,t.z,r.k]),t._13(4608,r.n,r.n,[r.h,r.l]),t._13(5120,r.a,function(l){return[l]},[r.n]),t._13(4608,r.j,r.j,[]),t._13(6144,r.i,null,[r.j]),t._13(4608,r.g,r.g,[r.i]),t._13(6144,r.b,null,[r.g]),t._13(5120,r.f,r.o,[r.b,[2,r.a]]),t._13(4608,r.c,r.c,[r.f]),t._13(4608,o._1,o._1,[r.c]),t._13(4608,o._11,o._11,[t.z]),t._13(4608,o._17,o._17,[]),t._13(4608,o._37,o._37,[]),t._13(4608,o._19,o._19,[]),t._13(512,d.b,d.b,[]),t._13(512,x.o,x.o,[]),t._13(512,x.e,x.e,[]),t._13(512,r.e,r.e,[]),t._13(512,r.d,r.d,[]),t._13(512,o.u,o.u,[]),t._13(512,o.s,o.s,[]),t._13(512,o._44,o._44,[]),t._13(512,o.y,o.y,[]),t._13(512,o.B,o.B,[]),t._13(512,o.k,o.k,[]),t._13(512,o.M,o.M,[]),t._13(512,i.b,i.b,[]),t._13(512,o.w,o.w,[]),t._13(512,b.n,b.n,[[2,b.s],[2,b.m]]),t._13(512,a,a,[]),t._13(256,r.k,"XSRF-TOKEN",[]),t._13(256,r.l,"X-XSRF-TOKEN",[]),t._13(1024,b.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})}});