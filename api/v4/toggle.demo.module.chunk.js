webpackJsonp(["toggle.demo.module"],{ww2l:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("LMZF"),u=function(){},a=e("tfJK"),_=e("KhCp"),o=e("kL+h"),i=e("drlO"),d=e("0nO6"),r=e("Un6q"),c=e("9iV4"),m=function(){function l(l){this.http=l,this.toggleMsgArray=[],this.getHtmlAndTypeScriptCode()}return l.prototype.onSquareToggleClick=function(l){this.toggleMsgArray.push("Square Toggle Click")},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/forms/toggle/form.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/forms/toggle/form.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),s=t._1({encapsulation:2,styles:[],data:{}});function p(l){return t._27(0,[(l()(),t._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(3,0,null,null,1,"prism-block",[],null,null,null,_.b,_.a)),t._2(4,4243456,null,0,o.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function h(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(2,0,null,null,1,"prism-block",[],null,null,null,_.b,_.a)),t._2(3,4243456,null,0,o.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function g(l){return t._27(0,[(l()(),t._25(-1,null,["\n    "])),(l()(),t._3(1,0,null,null,157,"amexio-card",[["header","true"]],null,null,null,a._58,a.h)),t._2(2,5357568,null,3,i.g,[],{header:[0,"header"]},null),t._23(603979776,1,{amexioHeader:1}),t._23(603979776,2,{amexioBody:1}),t._23(603979776,3,{amexioFooter:1}),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(7,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),t._2(8,114688,[[1,4]],0,i.u,[],null,null),(l()(),t._25(-1,0,["\n         Toggle Switch \n      "])),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(11,0,null,1,146,"amexio-body",[],null,null,null,a._54,a.d)),t._2(12,114688,[[2,4]],0,i.c,[],null,null),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(14,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t._25(-1,null,["Toggle Switches are checkboxes with a toggle switch UI."])),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(17,16777216,null,0,139,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var u=!0;return"document:click"===n&&(u=!1!==t._16(l,18).onWindowClick()&&u),"document:scroll"===n&&(u=!1!==t._16(l,18).onscroll()&&u),u},a._77,a.A)),t._2(18,5357568,null,2,i.J,[t.B,t.j,t.M],null,null),t._23(603979776,4,{queryTabs:1}),t._23(603979776,5,{queryAction:1}),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(22,0,null,1,52,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,a._78,a.B)),t._2(23,114688,[[4,4]],0,i.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(25,0,null,0,48,"amexio-row",[],null,null,null,a._73,a.w)),t._2(26,1163264,null,0,i.F,[],null,null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(28,0,null,0,21,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),t._2(29,114688,null,0,i.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(31,0,null,0,17,"amexio-card",[],null,null,null,a._58,a.h)),t._2(32,5357568,null,3,i.g,[],{header:[0,"header"]},null),t._23(603979776,6,{amexioHeader:1}),t._23(603979776,7,{amexioBody:1}),t._23(603979776,8,{amexioFooter:1}),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(37,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),t._2(38,114688,[[6,4]],0,i.u,[],null,null),(l()(),t._25(-1,0,["\n                      Round Toggle \n                  "])),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(41,0,null,1,6,"amexio-body",[],null,null,null,a._54,a.d)),t._2(42,114688,[[7,4]],0,i.c,[],null,null),(l()(),t._25(-1,0,["\n                    "])),(l()(),t._3(44,0,null,0,2,"amexio-toggle",[],null,null,null,a._149,a._46)),t._22(5120,null,d.g,function(l){return[l]},[i._84]),t._2(46,114688,null,0,i._84,[],{fieldlabel:[0,"fieldlabel"]},null),(l()(),t._25(-1,0,["\n                  "])),(l()(),t._25(-1,null,["\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(51,0,null,0,21,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),t._2(52,114688,null,0,i.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(54,0,null,0,17,"amexio-card",[],null,null,null,a._58,a.h)),t._2(55,5357568,null,3,i.g,[],{header:[0,"header"]},null),t._23(603979776,9,{amexioHeader:1}),t._23(603979776,10,{amexioBody:1}),t._23(603979776,11,{amexioFooter:1}),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(60,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),t._2(61,114688,[[9,4]],0,i.u,[],null,null),(l()(),t._25(-1,0,["\n                      Square Toggle \n                  "])),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(64,0,null,1,6,"amexio-body",[],null,null,null,a._54,a.d)),t._2(65,114688,[[10,4]],0,i.c,[],null,null),(l()(),t._25(-1,0,["\n                    "])),(l()(),t._3(67,0,null,0,2,"amexio-toggle",[["shape","square"]],null,[[null,"onChange"]],function(l,n,e){var t=!0;return"onChange"===n&&(t=!1!==l.component.onSquareToggleClick(e)&&t),t},a._149,a._46)),t._22(5120,null,d.g,function(l){return[l]},[i._84]),t._2(69,114688,null,0,i._84,[],{shape:[0,"shape"],fieldlabel:[1,"fieldlabel"]},{onChange:"onChange"}),(l()(),t._25(-1,0,["\n                  "])),(l()(),t._25(-1,null,["\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n              \n            "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(76,0,null,1,44,"amexio-tab",[["title","API Reference"]],null,null,null,a._78,a.B)),t._2(77,114688,[[4,4]],0,i.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(79,0,null,0,23,"amexio-datagrid",[["title","Properties <amexio-toggle>"]],null,null,null,a._135,a._32)),t._2(80,1425408,null,1,i._66,[i._5,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,12,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(83,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(84,49152,[[12,4]],2,i._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,13,{headerTemplate:0}),t._23(335544320,14,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(88,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(89,49152,[[12,4]],2,i._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,15,{headerTemplate:0}),t._23(335544320,16,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(93,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(94,49152,[[12,4]],2,i._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,17,{headerTemplate:0}),t._23(335544320,18,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(98,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(99,49152,[[12,4]],2,i._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,19,{headerTemplate:0}),t._23(335544320,20,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(104,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(106,0,null,0,13,"amexio-datagrid",[["title","Events"]],null,null,null,a._135,a._32)),t._2(107,1425408,null,1,i._66,[i._5,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),t._23(603979776,21,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(110,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(111,49152,[[21,4]],2,i._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,22,{headerTemplate:0}),t._23(335544320,23,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(115,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(116,49152,[[21,4]],2,i._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,24,{headerTemplate:0}),t._23(335544320,25,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n            \n          "])),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(122,0,null,1,24,"amexio-tab",[["title","Source"]],null,null,null,a._78,a.B)),t._2(123,114688,[[4,4]],0,i.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(125,0,null,0,20,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t._25(-1,null,["\n            "])),(l()(),t._3(127,0,null,null,17,"amexio-vertical-tab-view",[],null,null,null,a._80,a.D)),t._2(128,5357568,null,1,i.O,[t.B],null,null),t._23(603979776,26,{queryTabs:1}),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(131,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,a._78,a.B)),t._2(132,114688,[[26,4]],0,i.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t.Y(16777216,null,0,1,null,p)),t._2(135,16384,null,0,r.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(138,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,a._78,a.B)),t._2(139,114688,[[26,4]],0,i.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t.Y(16777216,null,0,1,null,h)),t._2(142,16384,null,0,r.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(148,0,null,1,7,"amexio-tab",[["title","Live"]],null,null,null,a._78,a.B)),t._2(149,114688,[[4,4]],0,i.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(151,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),t._25(-1,null,["Amexio Sandbox"])),(l()(),t._25(-1,0,["\n"])),(l()(),t._3(154,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-toggle?embed=1&file=app/forms/toggle/toggle.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,1,["\n        "])),(l()(),t._25(-1,0,["\n      "])),(l()(),t._25(-1,null,["\n    "])),(l()(),t._25(-1,null,["\n    "])),(l()(),t._25(-1,null,["\n    "])),(l()(),t._3(161,0,null,null,2,"amexio-notification",[],null,[["window","keyup"]],function(l,n,e){var u=!0;return"window:keyup"===n&&(u=!1!==t._16(l,162).keyEvent(e)&&u),u},a._70,a.t)),t._2(162,114688,null,1,i.B,[t.h],{messageData:[0,"messageData"],verticalposition:[1,"verticalposition"],horizontalposition:[2,"horizontalposition"]},null),t._23(335544320,27,{notificationTemplate:0}),(l()(),t._25(-1,null,["\n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,8,0),l(n,12,0),l(n,18,0),l(n,23,0,"Demo","true"),l(n,26,0),l(n,29,0,6),l(n,32,0,!0),l(n,38,0),l(n,42,0),l(n,46,0,"Round"),l(n,52,0,6),l(n,55,0,!0),l(n,61,0),l(n,65,0),l(n,69,0,"square","Square"),l(n,77,0,"API Reference"),l(n,80,0,"Properties <amexio-toggle>","assets/apireference/forms/toggle.json","get","properties",!1,!1),l(n,84,0,"Name","name",!1,"string",15),l(n,89,0,"Type","type",!1,"string",10),l(n,94,0,"Default","default",!1,"string",10),l(n,99,0,"Description","description",!1,"string",65),l(n,107,0,"Events","assets/apireference/forms/toggle.json","get","events",!1),l(n,111,0,"Name","name",!1,"string",20),l(n,116,0,"Description","description",!1,"string",80),l(n,123,0,"Source"),l(n,128,0),l(n,132,0,"HTML",!0),l(n,135,0,e.htmlCode),l(n,139,0,"Type Script"),l(n,142,0,e.typeScriptCode),l(n,149,0,"Live"),l(n,162,0,e.toggleMsgArray,"top","right")},function(l,n){l(n,28,0,t._16(n,29).colclass),l(n,51,0,t._16(n,52).colclass)})}var f=t.Z("toggle-demo",m,function(l){return t._27(0,[(l()(),t._3(0,0,null,null,1,"toggle-demo",[],null,null,null,g,s)),t._2(1,49152,null,0,m,[c.c],null,null)],null,null)},{},{},[]),x=e("UHIZ");e.d(n,"ToggleDemoModuleNgFactory",function(){return y});var y=t._0(u,[],function(l){return t._12([t._13(512,t.j,t.W,[[8,[a.a,f]],[3,t.j],t.v]),t._13(4608,r.n,r.m,[t.s,[2,r.u]]),t._13(4608,d.s,d.s,[]),t._13(4608,c.h,c.m,[r.c,t.z,c.k]),t._13(4608,c.n,c.n,[c.h,c.l]),t._13(5120,c.a,function(l){return[l]},[c.n]),t._13(4608,c.j,c.j,[]),t._13(6144,c.i,null,[c.j]),t._13(4608,c.g,c.g,[c.i]),t._13(6144,c.b,null,[c.g]),t._13(5120,c.f,c.o,[c.b,[2,c.a]]),t._13(4608,c.c,c.c,[c.f]),t._13(4608,i._5,i._5,[c.c]),t._13(4608,i._15,i._15,[t.z]),t._13(4608,i._22,i._22,[]),t._13(4608,i._40,i._40,[]),t._13(512,r.b,r.b,[]),t._13(512,d.p,d.p,[]),t._13(512,d.e,d.e,[]),t._13(512,c.e,c.e,[]),t._13(512,c.d,c.d,[]),t._13(512,o.b,o.b,[]),t._13(512,i.v,i.v,[]),t._13(512,i.t,i.t,[]),t._13(512,i.y,i.y,[]),t._13(512,i.A,i.A,[]),t._13(512,i.D,i.D,[]),t._13(512,i.l,i.l,[]),t._13(512,i.Q,i.Q,[]),t._13(512,x.n,x.n,[[2,x.s],[2,x.m]]),t._13(512,u,u,[]),t._13(256,c.k,"XSRF-TOKEN",[]),t._13(256,c.l,"X-XSRF-TOKEN",[]),t._13(1024,x.i,function(){return[[{path:"",component:m,pathMatch:"full"}]]},[])])})}});