webpackJsonp(["border.demo.module"],{ObYc:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e("LMZF"),t=e("9iV4"),i=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getDta=function(){var l=this;this.asyncFlag=!0,setTimeout(function(){l.asyncFlag=!1},3e3)},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/border/border.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/border/border.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),o=function(){},a=e("tfJK"),r=e("KhCp"),d=e("kL+h"),_=e("drlO"),s=e("Un6q"),m=u._1({encapsulation:2,styles:[],data:{}});function c(l){return u._27(0,[(l()(),u._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                 "])),(l()(),u._25(-1,null,["\n                 "])),(l()(),u._3(3,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),u._2(4,4243456,null,0,d.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n               "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function p(l){return u._27(0,[(l()(),u._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                 "])),(l()(),u._3(2,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),u._2(3,4243456,null,0,d.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n               "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function x(l){return u._27(0,[(l()(),u._25(-1,null,["\n   "])),(l()(),u._3(1,0,null,null,175,"amexio-card",[["header","true"]],null,null,null,a._58,a.h)),u._2(2,5357568,null,3,_.g,[],{header:[0,"header"]},null),u._23(603979776,1,{amexioHeader:1}),u._23(603979776,2,{amexioBody:1}),u._23(603979776,3,{amexioFooter:1}),(l()(),u._25(-1,null,["\n     "])),(l()(),u._3(7,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),u._2(8,114688,[[1,4]],0,_.u,[],null,null),(l()(),u._25(-1,0,["\n        Border Layout \n     "])),(l()(),u._25(-1,null,["\n     "])),(l()(),u._3(11,0,null,1,164,"amexio-body",[],null,null,null,a._54,a.d)),u._2(12,114688,[[2,4]],0,_.c,[],null,null),(l()(),u._25(-1,0,["\n       "])),(l()(),u._3(14,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u._25(-1,null,["A border layout lays out a container, arranging and resizing its components to fit in five regions: north, south, east, west, and center."])),(l()(),u._25(-1,0,["\n       "])),(l()(),u._3(17,16777216,null,0,157,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var t=!0;return"document:click"===n&&(t=!1!==u._16(l,18).onWindowClick()&&t),"document:scroll"===n&&(t=!1!==u._16(l,18).onscroll()&&t),t},a._77,a.A)),u._2(18,5357568,null,2,_.J,[u.B,u.j,u.M],null,null),u._23(603979776,4,{queryTabs:1}),u._23(603979776,5,{queryAction:1}),(l()(),u._25(-1,1,["\n         "])),(l()(),u._3(22,0,null,1,87,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,a._78,a.B)),u._2(23,114688,[[4,4]],0,_.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n           "])),(l()(),u._3(25,0,null,0,83,"amexio-card",[["header","true"]],null,null,null,a._58,a.h)),u._2(26,5357568,null,3,_.g,[],{header:[0,"header"]},null),u._23(603979776,6,{amexioHeader:1}),u._23(603979776,7,{amexioBody:1}),u._23(603979776,8,{amexioFooter:1}),(l()(),u._25(-1,null,["\n             "])),(l()(),u._3(31,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),u._2(32,114688,[[6,4]],0,_.u,[],null,null),(l()(),u._25(-1,0,[" Border Layout"])),(l()(),u._25(-1,null,["\n             "])),(l()(),u._3(35,0,null,1,72,"amexio-body",[],null,null,null,a._54,a.d)),u._2(36,114688,[[7,4]],0,_.c,[],null,null),(l()(),u._25(-1,0,["\n               "])),(l()(),u._3(38,0,null,0,68,"amexio-borderlayout",[],null,null,null,a._55,a.e)),u._2(39,1163264,null,1,_.d,[],null,null),u._23(603979776,9,{layout:1}),(l()(),u._25(-1,0,["\n                 "])),(l()(),u._3(42,0,null,0,11,"amexio-borderlayout-item",[["position","north"]],[[8,"className",0]],null,null,a._56,a.f)),u._2(43,114688,[[9,4]],0,_.e,[],{position:[0,"position"]},null),(l()(),u._25(-1,0,["\n                   "])),(l()(),u._3(45,0,null,0,7,"amexio-card",[],null,null,null,a._58,a.h)),u._2(46,5357568,null,3,_.g,[],null,null),u._23(603979776,10,{amexioHeader:1}),u._23(603979776,11,{amexioBody:1}),u._23(603979776,12,{amexioFooter:1}),(l()(),u._3(50,0,null,1,2,"amexio-body",[],null,null,null,a._54,a.d)),u._2(51,114688,[[11,4]],0,_.c,[],null,null),(l()(),u._25(-1,0,["\n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                   "])),(l()(),u._25(-1,0,["\n                 "])),(l()(),u._25(-1,0,["\n                 "])),(l()(),u._3(55,0,null,0,11,"amexio-borderlayout-item",[["position","east"]],[[8,"className",0]],null,null,a._56,a.f)),u._2(56,114688,[[9,4]],0,_.e,[],{position:[0,"position"]},null),(l()(),u._25(-1,0,["\n                   "])),(l()(),u._3(58,0,null,0,7,"amexio-card",[],null,null,null,a._58,a.h)),u._2(59,5357568,null,3,_.g,[],null,null),u._23(603979776,13,{amexioHeader:1}),u._23(603979776,14,{amexioBody:1}),u._23(603979776,15,{amexioFooter:1}),(l()(),u._3(63,0,null,1,2,"amexio-body",[],null,null,null,a._54,a.d)),u._2(64,114688,[[14,4]],0,_.c,[],null,null),(l()(),u._25(-1,0,["\n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                  \n                   "])),(l()(),u._25(-1,0,["\n                 "])),(l()(),u._25(-1,0,["\n                 "])),(l()(),u._3(68,0,null,0,11,"amexio-borderlayout-item",[["position","center"]],[[8,"className",0]],null,null,a._56,a.f)),u._2(69,114688,[[9,4]],0,_.e,[],{position:[0,"position"]},null),(l()(),u._25(-1,0,["\n                   "])),(l()(),u._3(71,0,null,0,7,"amexio-card",[],null,null,null,a._58,a.h)),u._2(72,5357568,null,3,_.g,[],null,null),u._23(603979776,16,{amexioHeader:1}),u._23(603979776,17,{amexioBody:1}),u._23(603979776,18,{amexioFooter:1}),(l()(),u._3(76,0,null,1,2,"amexio-body",[],null,null,null,a._54,a.d)),u._2(77,114688,[[17,4]],0,_.c,[],null,null),(l()(),u._25(-1,0,["\n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                   "])),(l()(),u._25(-1,0,["\n                 "])),(l()(),u._25(-1,0,["\n                 "])),(l()(),u._3(81,0,null,0,11,"amexio-borderlayout-item",[["position","west"]],[[8,"className",0]],null,null,a._56,a.f)),u._2(82,114688,[[9,4]],0,_.e,[],{position:[0,"position"]},null),(l()(),u._25(-1,0,["\n                   "])),(l()(),u._3(84,0,null,0,7,"amexio-card",[],null,null,null,a._58,a.h)),u._2(85,5357568,null,3,_.g,[],null,null),u._23(603979776,19,{amexioHeader:1}),u._23(603979776,20,{amexioBody:1}),u._23(603979776,21,{amexioFooter:1}),(l()(),u._3(89,0,null,1,2,"amexio-body",[],null,null,null,a._54,a.d)),u._2(90,114688,[[20,4]],0,_.c,[],null,null),(l()(),u._25(-1,0,[" \n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                   "])),(l()(),u._25(-1,0,["\n                 "])),(l()(),u._25(-1,0,["\n                 "])),(l()(),u._3(94,0,null,0,11,"amexio-borderlayout-item",[["position","south"]],[[8,"className",0]],null,null,a._56,a.f)),u._2(95,114688,[[9,4]],0,_.e,[],{position:[0,"position"]},null),(l()(),u._25(-1,0,["\n                   "])),(l()(),u._3(97,0,null,0,7,"amexio-card",[],null,null,null,a._58,a.h)),u._2(98,5357568,null,3,_.g,[],null,null),u._23(603979776,22,{amexioHeader:1}),u._23(603979776,23,{amexioBody:1}),u._23(603979776,24,{amexioFooter:1}),(l()(),u._3(102,0,null,1,2,"amexio-body",[],null,null,null,a._54,a.d)),u._2(103,114688,[[23,4]],0,_.c,[],null,null),(l()(),u._25(-1,0,[" \n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                   "])),(l()(),u._25(-1,0,["\n                 "])),(l()(),u._25(-1,0,["\n               "])),(l()(),u._25(-1,0,["\n             "])),(l()(),u._25(-1,null,["\n           "])),(l()(),u._25(-1,0,["\n          \n         "])),(l()(),u._25(-1,1,["\n         "])),(l()(),u._3(111,0,null,1,27,"amexio-tab",[["title","API Reference"]],null,null,null,a._78,a.B)),u._2(112,114688,[[4,4]],0,_.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(114,0,null,0,23,"amexio-datagrid",[["title","Properties <amexio-borderlayout-item>"]],null,null,null,a._135,a._32)),u._2(115,1425408,null,1,_._66,[_._5,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),u._23(603979776,25,{columnRef:1}),(l()(),u._25(-1,null,["\n"])),(l()(),u._3(118,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(119,49152,[[25,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,26,{headerTemplate:0}),u._23(335544320,27,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n"])),(l()(),u._3(123,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(124,49152,[[25,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,28,{headerTemplate:0}),u._23(335544320,29,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n"])),(l()(),u._3(128,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(129,49152,[[25,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,30,{headerTemplate:0}),u._23(335544320,31,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n"])),(l()(),u._3(133,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(134,49152,[[25,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,32,{headerTemplate:0}),u._23(335544320,33,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n"])),(l()(),u._25(-1,0,["\n         "])),(l()(),u._25(-1,1,["\n         "])),(l()(),u._3(140,0,null,1,24,"amexio-tab",[["title","Source"]],null,null,null,a._78,a.B)),u._2(141,114688,[[4,4]],0,_.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n           "])),(l()(),u._3(143,0,null,0,20,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),u._25(-1,null,["\n           "])),(l()(),u._3(145,0,null,null,17,"amexio-vertical-tab-view",[],null,null,null,a._80,a.D)),u._2(146,5357568,null,1,_.O,[u.B],null,null),u._23(603979776,34,{queryTabs:1}),(l()(),u._25(-1,0,["\n             "])),(l()(),u._3(149,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,a._78,a.B)),u._2(150,114688,[[34,4]],0,_.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n               "])),(l()(),u.Y(16777216,null,0,1,null,c)),u._2(153,16384,null,0,s.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n             "])),(l()(),u._25(-1,0,["\n             "])),(l()(),u._3(156,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,a._78,a.B)),u._2(157,114688,[[34,4]],0,_.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n               "])),(l()(),u.Y(16777216,null,0,1,null,p)),u._2(160,16384,null,0,s.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n             "])),(l()(),u._25(-1,0,["\n           "])),(l()(),u._25(-1,null,["\n           "])),(l()(),u._25(-1,0,["\n         "])),(l()(),u._25(-1,1,["\n         "])),(l()(),u._3(166,0,null,1,7,"amexio-tab",[["title","Live"]],null,null,null,a._78,a.B)),u._2(167,114688,[[4,4]],0,_.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n         "])),(l()(),u._3(169,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),u._25(-1,null,["Amexio Sandbox"])),(l()(),u._25(-1,0,["\n         "])),(l()(),u._3(172,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-borderlayout?embed=1&file=app/layouts/borderlayout/borderlayout.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),u._25(-1,0,["\n         "])),(l()(),u._25(-1,1,["\n       "])),(l()(),u._25(-1,0,["\n     "])),(l()(),u._25(-1,null,["\n   "])),(l()(),u._25(-1,null,["\n "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,8,0),l(n,12,0),l(n,18,0),l(n,23,0,"Demo","true"),l(n,26,0,"true"),l(n,32,0),l(n,36,0),l(n,39,0),l(n,43,0,"north"),l(n,46,0),l(n,51,0),l(n,56,0,"east"),l(n,59,0),l(n,64,0),l(n,69,0,"center"),l(n,72,0),l(n,77,0),l(n,82,0,"west"),l(n,85,0),l(n,90,0),l(n,95,0,"south"),l(n,98,0),l(n,103,0),l(n,112,0,"API Reference"),l(n,115,0,"Properties <amexio-borderlayout-item>","assets/apireference/border/borderlayoutitem.component.json","get","properties",!1,!1),l(n,119,0,"Name","name",!1,"string",15),l(n,124,0,"Type","type",!1,"string",10),l(n,129,0,"Default","default",!1,"string",10),l(n,134,0,"Description","description",!1,"string",65),l(n,141,0,"Source"),l(n,146,0),l(n,150,0,"HTML",!0),l(n,153,0,e.htmlCode),l(n,157,0,"Type Script"),l(n,160,0,e.typeScriptCode),l(n,167,0,"Live")},function(l,n){l(n,42,0,u._16(n,43).positionClass),l(n,55,0,u._16(n,56).positionClass),l(n,68,0,u._16(n,69).positionClass),l(n,81,0,u._16(n,82).positionClass),l(n,94,0,u._16(n,95).positionClass)})}var b=u.Z("border-demo",i,function(l){return u._27(0,[(l()(),u._3(0,0,null,null,1,"border-demo",[],null,null,null,x,m)),u._2(1,49152,null,0,i,[t.c],null,null)],null,null)},{},{},[]),h=e("0nO6"),y=e("UHIZ");e.d(n,"BorderDemoRoutingModuleNgFactory",function(){return f});var f=u._0(o,[],function(l){return u._12([u._13(512,u.j,u.W,[[8,[a.a,b]],[3,u.j],u.v]),u._13(4608,s.n,s.m,[u.s,[2,s.u]]),u._13(4608,t.h,t.m,[s.c,u.z,t.k]),u._13(4608,t.n,t.n,[t.h,t.l]),u._13(5120,t.a,function(l){return[l]},[t.n]),u._13(4608,t.j,t.j,[]),u._13(6144,t.i,null,[t.j]),u._13(4608,t.g,t.g,[t.i]),u._13(6144,t.b,null,[t.g]),u._13(5120,t.f,t.o,[t.b,[2,t.a]]),u._13(4608,t.c,t.c,[t.f]),u._13(4608,h.s,h.s,[]),u._13(4608,_._5,_._5,[t.c]),u._13(4608,_._15,_._15,[u.z]),u._13(4608,_._22,_._22,[]),u._13(4608,_._40,_._40,[]),u._13(512,s.b,s.b,[]),u._13(512,t.e,t.e,[]),u._13(512,t.d,t.d,[]),u._13(512,d.b,d.b,[]),u._13(512,h.p,h.p,[]),u._13(512,h.e,h.e,[]),u._13(512,_.v,_.v,[]),u._13(512,_.t,_.t,[]),u._13(512,_.y,_.y,[]),u._13(512,_.A,_.A,[]),u._13(512,_.D,_.D,[]),u._13(512,_.l,_.l,[]),u._13(512,_.Q,_.Q,[]),u._13(512,y.n,y.n,[[2,y.s],[2,y.m]]),u._13(512,o,o,[]),u._13(256,t.k,"XSRF-TOKEN",[]),u._13(256,t.l,"X-XSRF-TOKEN",[]),u._13(1024,y.i,function(){return[[{path:"",component:i}]]},[])])})}});