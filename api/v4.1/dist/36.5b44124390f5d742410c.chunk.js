webpackJsonp([36],{ww2l:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e("LMZF"),t=function(){},a=e("KhCp"),_=e("kL+h"),i=e("tfJK"),o=e("drlO"),d=e("0nO6"),r=e("Un6q"),c=e("9iV4"),s=function(){function l(l){this.http=l,this.toggleMsgArray=[],this.getHtmlAndTypeScriptCode()}return l.prototype.onSquareToggleClick=function(l){this.toggleMsgArray.push("Square Toggle Click")},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/forms/toggle/form.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/forms/toggle/form.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),p=u._1({encapsulation:2,styles:[],data:{}});function m(l){return u._27(0,[(l()(),u._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(3,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),u._2(4,4243456,null,0,_.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function h(l){return u._27(0,[(l()(),u._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(2,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),u._2(3,4243456,null,0,_.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function g(l){return u._27(0,[(l()(),u._25(-1,null,["\n    "])),(l()(),u._3(1,0,null,null,147,"amexio-card",[["header","true"]],null,null,null,i._48,i.f)),u._2(2,4308992,null,0,o.f,[],{header:[0,"header"]},null),(l()(),u._25(-1,null,["\n      "])),(l()(),u._3(4,0,null,0,2,"amexio-header",[],null,null,null,i._57,i.o)),u._2(5,114688,null,0,o.t,[],null,null),(l()(),u._25(-1,0,["\n         Toggle Switch \n      "])),(l()(),u._25(-1,null,["\n      "])),(l()(),u._3(8,0,null,1,139,"amexio-body",[],null,null,null,i._45,i.c)),u._2(9,114688,null,0,o.c,[],null,null),(l()(),u._25(-1,0,["\n        "])),(l()(),u._3(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u._25(-1,null,["Toggle Switches are checkboxes with a toggle switch UI."])),(l()(),u._25(-1,0,["\n        "])),(l()(),u._3(14,0,null,0,132,"amexio-tab-view",[],null,null,null,i._66,i.x)),u._2(15,5619712,null,1,o.G,[u.B],null,null),u._23(603979776,1,{queryTabs:1}),(l()(),u._25(-1,0,["\n          "])),(l()(),u._3(18,0,null,0,46,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i._67,i.y)),u._2(19,114688,[[1,4]],0,o.H,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(21,0,null,0,42,"amexio-row",[],null,null,null,i._63,i.u)),u._2(22,1163264,null,0,o.D,[],null,null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(24,0,null,0,18,"amexio-column",[],[[8,"className",0]],null,null,i._50,i.h)),u._2(25,114688,null,0,o.i,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(27,0,null,0,14,"amexio-card",[],null,null,null,i._48,i.f)),u._2(28,4308992,null,0,o.f,[],{header:[0,"header"]},null),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(30,0,null,0,2,"amexio-header",[],null,null,null,i._57,i.o)),u._2(31,114688,null,0,o.t,[],null,null),(l()(),u._25(-1,0,["\n                      Round Toggle \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(34,0,null,1,6,"amexio-body",[],null,null,null,i._45,i.c)),u._2(35,114688,null,0,o.c,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(37,0,null,0,2,"amexio-toggle",[],null,null,null,i._132,i._37)),u._22(5120,null,d.g,function(l){return[l]},[o._76]),u._2(39,114688,null,0,o._76,[],{fieldlabel:[0,"fieldlabel"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(44,0,null,0,18,"amexio-column",[],[[8,"className",0]],null,null,i._50,i.h)),u._2(45,114688,null,0,o.i,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(47,0,null,0,14,"amexio-card",[],null,null,null,i._48,i.f)),u._2(48,4308992,null,0,o.f,[],{header:[0,"header"]},null),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(50,0,null,0,2,"amexio-header",[],null,null,null,i._57,i.o)),u._2(51,114688,null,0,o.t,[],null,null),(l()(),u._25(-1,0,["\n                      Square Toggle \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(54,0,null,1,6,"amexio-body",[],null,null,null,i._45,i.c)),u._2(55,114688,null,0,o.c,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(57,0,null,0,2,"amexio-toggle",[["shape","square"]],null,[[null,"onChange"]],function(l,n,e){var u=!0;return"onChange"===n&&(u=!1!==l.component.onSquareToggleClick(e)&&u),u},i._132,i._37)),u._22(5120,null,d.g,function(l){return[l]},[o._76]),u._2(59,114688,null,0,o._76,[],{shape:[0,"shape"],fieldlabel:[1,"fieldlabel"]},{onChange:"onChange"}),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              \n            "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._3(66,0,null,0,44,"amexio-tab",[["title","API Reference"]],null,null,null,i._67,i.y)),u._2(67,114688,[[1,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(69,0,null,0,23,"amexio-datagrid",[["title","Properties <amexio-toggle>"]],null,null,null,i._117,i._22)),u._2(70,1425408,null,1,o._57,[o._1,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),u._23(603979776,2,{columnRef:1}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(73,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),u._2(74,49152,[[2,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,3,{headerTemplate:0}),u._23(335544320,4,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(78,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),u._2(79,49152,[[2,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,5,{headerTemplate:0}),u._23(335544320,6,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(83,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),u._2(84,49152,[[2,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,7,{headerTemplate:0}),u._23(335544320,8,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(88,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),u._2(89,49152,[[2,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,9,{headerTemplate:0}),u._23(335544320,10,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(94,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(96,0,null,0,13,"amexio-datagrid",[["title","Events"]],null,null,null,i._117,i._22)),u._2(97,1425408,null,1,o._57,[o._1,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),u._23(603979776,11,{columnRef:1}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(100,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),u._2(101,49152,[[11,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,12,{headerTemplate:0}),u._23(335544320,13,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(105,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),u._2(106,49152,[[11,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,14,{headerTemplate:0}),u._23(335544320,15,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n            \n          "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._3(112,0,null,0,24,"amexio-tab",[["title","Source"]],null,null,null,i._67,i.y)),u._2(113,114688,[[1,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(115,0,null,0,20,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),u._25(-1,null,["\n            "])),(l()(),u._3(117,0,null,null,17,"amexio-vertical-tab-view",[],null,null,null,i._69,i.A)),u._2(118,5357568,null,1,o.L,[u.B],null,null),u._23(603979776,16,{queryTabs:1}),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(121,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,i._67,i.y)),u._2(122,114688,[[16,4]],0,o.H,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u.Y(16777216,null,0,1,null,m)),u._2(125,16384,null,0,r.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(128,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,i._67,i.y)),u._2(129,114688,[[16,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u.Y(16777216,null,0,1,null,h)),u._2(132,16384,null,0,r.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._3(138,0,null,0,7,"amexio-tab",[["title","Live"]],null,null,null,i._67,i.y)),u._2(139,114688,[[1,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n          "])),(l()(),u._3(141,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),u._25(-1,null,["Amexio Sandbox"])),(l()(),u._25(-1,0,["\n"])),(l()(),u._3(144,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-toggle?embed=1&file=app/forms/toggle/toggle.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,0,["\n        "])),(l()(),u._25(-1,0,["\n      "])),(l()(),u._25(-1,null,["\n    "])),(l()(),u._25(-1,null,["\n    "])),(l()(),u._25(-1,null,["\n    "])),(l()(),u._3(151,0,null,null,1,"amexio-notification",[],null,null,null,i._60,i.r)),u._2(152,114688,null,0,o.z,[u.h],{verticalposition:[0,"verticalposition"],horizontalposition:[1,"horizontalposition"],messageData:[2,"messageData"]},null),(l()(),u._25(-1,null,["\n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,5,0),l(n,9,0),l(n,15,0),l(n,19,0,"Demo","true"),l(n,22,0),l(n,25,0,6),l(n,28,0,!0),l(n,31,0),l(n,35,0),l(n,39,0,"Round"),l(n,45,0,6),l(n,48,0,!0),l(n,51,0),l(n,55,0),l(n,59,0,"square","Square"),l(n,67,0,"API Reference"),l(n,70,0,"Properties <amexio-toggle>","assets/apireference/forms/toggle.json","get","properties",!1,!1),l(n,74,0,"Name","name",!1,"string",15),l(n,79,0,"Type","type",!1,"string",10),l(n,84,0,"Default","default",!1,"string",10),l(n,89,0,"Description","description",!1,"string",65),l(n,97,0,"Events","assets/apireference/forms/toggle.json","get","events",!1),l(n,101,0,"Name","name",!1,"string",20),l(n,106,0,"Description","description",!1,"string",80),l(n,113,0,"Source"),l(n,118,0),l(n,122,0,"HTML",!0),l(n,125,0,e.htmlCode),l(n,129,0,"Type Script"),l(n,132,0,e.typeScriptCode),l(n,139,0,"Live"),l(n,152,0,"top","right",e.toggleMsgArray)},function(l,n){l(n,24,0,u._16(n,25).colclass),l(n,44,0,u._16(n,45).colclass)})}var f=u.Z("toggle-demo",s,function(l){return u._27(0,[(l()(),u._3(0,0,null,null,1,"toggle-demo",[],null,null,null,g,p)),u._2(1,49152,null,0,s,[c.c],null,null)],null,null)},{},{},[]),x=e("UHIZ");e.d(n,"ToggleDemoModuleNgFactory",function(){return y});var y=u._0(t,[],function(l){return u._12([u._13(512,u.j,u.W,[[8,[f]],[3,u.j],u.v]),u._13(4608,r.n,r.m,[u.s,[2,r.u]]),u._13(4608,d.r,d.r,[]),u._13(4608,c.h,c.m,[r.c,u.z,c.k]),u._13(4608,c.n,c.n,[c.h,c.l]),u._13(5120,c.a,function(l){return[l]},[c.n]),u._13(4608,c.j,c.j,[]),u._13(6144,c.i,null,[c.j]),u._13(4608,c.g,c.g,[c.i]),u._13(6144,c.b,null,[c.g]),u._13(5120,c.f,c.o,[c.b,[2,c.a]]),u._13(4608,c.c,c.c,[c.f]),u._13(4608,o._1,o._1,[c.c]),u._13(4608,o._11,o._11,[u.z]),u._13(4608,o._17,o._17,[]),u._13(4608,o._37,o._37,[]),u._13(512,r.b,r.b,[]),u._13(512,d.o,d.o,[]),u._13(512,d.e,d.e,[]),u._13(512,c.e,c.e,[]),u._13(512,c.d,c.d,[]),u._13(512,_.b,_.b,[]),u._13(512,o.u,o.u,[]),u._13(512,o.s,o.s,[]),u._13(512,o._44,o._44,[]),u._13(512,o.y,o.y,[]),u._13(512,o.B,o.B,[]),u._13(512,o.k,o.k,[]),u._13(512,o.M,o.M,[]),u._13(512,x.n,x.n,[[2,x.s],[2,x.m]]),u._13(512,t,t,[]),u._13(256,c.k,"XSRF-TOKEN",[]),u._13(256,c.l,"X-XSRF-TOKEN",[]),u._13(1024,x.i,function(){return[[{path:"",component:s,pathMatch:"full"}]]},[])])})}});