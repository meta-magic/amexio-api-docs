webpackJsonp(["gauge.demo.module"],{ofyC:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e("LMZF"),t=function(){},a=e("tfJK"),o=e("KhCp"),_=e("kL+h"),i=e("drlO"),d=e("Un6q"),r=e("9iV4"),c=function(){function l(l){this.http=l,this.gaugeChartData=[["Label","Value"],["Memory",80],["CPU",55],["Network",68]],this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/dashboard/gauge/chart.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/dashboard/gauge/chart.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n}),this.http.get("assets/data/code/dashboard/gauge/datasource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.dataSourceCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.ngOnInit=function(){},l}(),s=u._1({encapsulation:2,styles:[],data:{}});function p(l){return u._27(0,[(l()(),u._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(3,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),u._2(4,4243456,null,0,_.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function m(l){return u._27(0,[(l()(),u._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(2,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),u._2(3,4243456,null,0,_.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function h(l){return u._27(0,[(l()(),u._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(2,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),u._2(3,4243456,null,0,_.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.dataSourceCode,"json")},null)}function g(l){return u._27(0,[(l()(),u._25(-1,null,["\n    "])),(l()(),u._3(1,0,null,null,112,"amexio-card",[["header","true"]],null,null,null,a._58,a.h)),u._2(2,5357568,null,3,i.g,[],{header:[0,"header"]},null),u._23(603979776,1,{amexioHeader:1}),u._23(603979776,2,{amexioBody:1}),u._23(603979776,3,{amexioFooter:1}),(l()(),u._25(-1,null,["\n      "])),(l()(),u._3(7,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),u._2(8,114688,[[1,4]],0,i.u,[],null,null),(l()(),u._25(-1,0,["\n         Gauge Chart \n      "])),(l()(),u._25(-1,null,["\n      "])),(l()(),u._3(11,0,null,1,101,"amexio-body",[],null,null,null,a._54,a.d)),u._2(12,114688,[[2,4]],0,i.c,[],null,null),(l()(),u._25(-1,0,["\n     "])),(l()(),u._3(14,0,null,0,6,"p",[],null,null,null,null,null)),(l()(),u._25(-1,null,["A gauge with a dial, rendered within the browser using SVG. Guages are available under "])),(l()(),u._3(16,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u._25(-1,null,["AmexioDashboardModule"])),(l()(),u._25(-1,null,[" from "])),(l()(),u._3(19,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u._25(-1,null,["amexio-ng-extensions/dashboard"])),(l()(),u._25(-1,0,["\n        "])),(l()(),u._3(22,16777216,null,0,89,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var t=!0;return"document:click"===n&&(t=!1!==u._16(l,23).onWindowClick()&&t),"document:scroll"===n&&(t=!1!==u._16(l,23).onscroll()&&t),t},a._77,a.A)),u._2(23,5357568,null,2,i.J,[u.B,u.j,u.M],null,null),u._23(603979776,4,{queryTabs:1}),u._23(603979776,5,{queryAction:1}),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(27,0,null,1,15,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,a._78,a.B)),u._2(28,114688,[[4,4]],0,i.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n           "])),(l()(),u._3(30,0,null,0,11,"amexio-row",[],null,null,null,a._73,a.w)),u._2(31,1163264,null,0,i.F,[],null,null),(l()(),u._25(-1,0,["\n             "])),(l()(),u._3(33,0,null,0,7,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,a._60,a.j)),u._2(34,114688,null,0,i.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n               "])),(l()(),u._3(36,0,null,0,3,"amexio-dashboard-gauge",[],null,null,null,a._101,a.Y)),u._2(37,1163264,null,1,i._18,[i._8],{height:[0,"height"],data:[1,"data"],redcolorfrom:[2,"redcolorfrom"],redcolorto:[3,"redcolorto"],yellowcolorfrom:[4,"yellowcolorfrom"],yellowcolorto:[5,"yellowcolorto"],scalevalue:[6,"scalevalue"]},null),u._23(603979776,6,{chartTitleComp:1}),(l()(),u._25(-1,null,["\n               "])),(l()(),u._25(-1,0,["\n             "])),(l()(),u._25(-1,0,["\n           "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(44,0,null,1,27,"amexio-tab",[["title","API Reference"]],null,null,null,a._78,a.B)),u._2(45,114688,[[4,4]],0,i.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(47,0,null,0,23,"amexio-datagrid",[["title","Properties<amexio-dashboard-gauge>"]],null,null,null,a._135,a._32)),u._2(48,1425408,null,1,i._66,[i._5,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),u._23(603979776,7,{columnRef:1}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(51,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(52,49152,[[7,4]],2,i._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,8,{headerTemplate:0}),u._23(335544320,9,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(56,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(57,49152,[[7,4]],2,i._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,10,{headerTemplate:0}),u._23(335544320,11,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(61,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(62,49152,[[7,4]],2,i._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,12,{headerTemplate:0}),u._23(335544320,13,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(66,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(67,49152,[[7,4]],2,i._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,14,{headerTemplate:0}),u._23(335544320,15,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(73,0,null,1,28,"amexio-tab",[["title","Source"]],null,null,null,a._78,a.B)),u._2(74,114688,[[4,4]],0,i.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(76,0,null,0,24,"amexio-vertical-tab-view",[],null,null,null,a._80,a.D)),u._2(77,5357568,null,1,i.O,[u.B],null,null),u._23(603979776,16,{queryTabs:1}),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(80,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,a._78,a.B)),u._2(81,114688,[[16,4]],0,i.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u.Y(16777216,null,0,1,null,p)),u._2(84,16384,null,0,d.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(87,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,a._78,a.B)),u._2(88,114688,[[16,4]],0,i.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u.Y(16777216,null,0,1,null,m)),u._2(91,16384,null,0,d.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(94,0,null,0,5,"amexio-tab",[["title","Data Source"]],null,null,null,a._78,a.B)),u._2(95,114688,[[16,4]],0,i.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u.Y(16777216,null,0,1,null,h)),u._2(98,16384,null,0,d.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(103,0,null,1,7,"amexio-tab",[["title","Live"]],null,null,null,a._78,a.B)),u._2(104,114688,[[4,4]],0,i.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n           "])),(l()(),u._3(106,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),u._25(-1,null,["Amexio Sandbox"])),(l()(),u._25(-1,0,["\n"])),(l()(),u._3(109,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-gauge?embed=1&file=app/dashboard/gauge/gauge.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,1,["\n        "])),(l()(),u._25(-1,0,["\n      "])),(l()(),u._25(-1,null,["\n    "])),(l()(),u._25(-1,null,["\n  \n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,8,0),l(n,12,0),l(n,23,0),l(n,28,0,"Demo","true"),l(n,31,0),l(n,34,0,"12"),l(n,37,0,"400px",e.gaugeChartData,90,100,75,90,5),l(n,45,0,"API Reference"),l(n,48,0,"Properties<amexio-dashboard-gauge>","assets/apireference/dashboard/gauge.json","get","dashboard",!1,!1),l(n,52,0,"Name","name",!1,"string",15),l(n,57,0,"Type","type",!1,"string",10),l(n,62,0,"Default","default",!1,"string",10),l(n,67,0,"Description","description",!1,"string",65),l(n,74,0,"Source"),l(n,77,0),l(n,81,0,"HTML",!0),l(n,84,0,e.htmlCode),l(n,88,0,"Type Script"),l(n,91,0,e.typeScriptCode),l(n,95,0,"Data Source"),l(n,98,0,e.dataSourceCode),l(n,104,0,"Live")},function(l,n){l(n,33,0,u._16(n,34).colclass)})}var f=u.Z("gauge-dashboard-demo",c,function(l){return u._27(0,[(l()(),u._3(0,0,null,null,1,"gauge-dashboard-demo",[],null,null,null,g,s)),u._2(1,114688,null,0,c,[r.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),b=e("0nO6"),y=e("UHIZ");e.d(n,"GaugeDemoModuleNgFactory",function(){return x});var x=u._0(t,[],function(l){return u._12([u._13(512,u.j,u.W,[[8,[a.a,f]],[3,u.j],u.v]),u._13(4608,d.n,d.m,[u.s,[2,d.u]]),u._13(4608,b.s,b.s,[]),u._13(4608,r.h,r.m,[d.c,u.z,r.k]),u._13(4608,r.n,r.n,[r.h,r.l]),u._13(5120,r.a,function(l){return[l]},[r.n]),u._13(4608,r.j,r.j,[]),u._13(6144,r.i,null,[r.j]),u._13(4608,r.g,r.g,[r.i]),u._13(6144,r.b,null,[r.g]),u._13(5120,r.f,r.o,[r.b,[2,r.a]]),u._13(4608,r.c,r.c,[r.f]),u._13(4608,i._5,i._5,[r.c]),u._13(4608,i._15,i._15,[u.z]),u._13(4608,i._22,i._22,[]),u._13(4608,i._40,i._40,[]),u._13(4608,i._8,i._8,[]),u._13(512,d.b,d.b,[]),u._13(512,b.p,b.p,[]),u._13(512,b.e,b.e,[]),u._13(512,r.e,r.e,[]),u._13(512,r.d,r.d,[]),u._13(512,i.v,i.v,[]),u._13(512,i.t,i.t,[]),u._13(512,i.y,i.y,[]),u._13(512,i.A,i.A,[]),u._13(512,i.D,i.D,[]),u._13(512,i.l,i.l,[]),u._13(512,i.Q,i.Q,[]),u._13(512,_.b,_.b,[]),u._13(512,i.k,i.k,[]),u._13(512,y.n,y.n,[[2,y.s],[2,y.m]]),u._13(512,t,t,[]),u._13(256,r.k,"XSRF-TOKEN",[]),u._13(256,r.l,"X-XSRF-TOKEN",[]),u._13(1024,y.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})}});