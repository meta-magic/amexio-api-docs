webpackJsonp([3],{"D+R9":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("LMZF"),u=e("9iV4"),a=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getDta=function(){var l=this;this.asyncFlag=!0,setTimeout(function(){l.asyncFlag=!1},3e3)},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/layout/panel/panel.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/layout/panel/panel.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.refreshData=function(){this.refreshDialogue=!this.refreshDialogue},l}(),i=function(){},o=e("KhCp"),_=e("kL+h"),d=e("tfJK"),r=e("drlO"),s=e("Un6q"),p=t._1({encapsulation:2,styles:[],data:{}});function m(l){return t._27(0,[(l()(),t._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._3(3,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t._2(4,4243456,null,0,_.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function c(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._3(2,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t._2(3,4243456,null,0,_.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function h(l){return t._27(0,[(l()(),t._25(-1,null,["\n    "])),(l()(),t._3(1,0,null,null,177,"amexio-card",[["header","true"]],null,null,null,d._48,d.f)),t._2(2,4308992,null,0,r.f,[],{header:[0,"header"]},null),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(4,0,null,0,2,"amexio-header",[],null,null,null,d._57,d.o)),t._2(5,114688,null,0,r.t,[],null,null),(l()(),t._25(-1,0,["\n         Panel \n      "])),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(8,0,null,1,169,"amexio-body",[],null,null,null,d._45,d.c)),t._2(9,114688,null,0,r.c,[],null,null),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t._25(-1,null,["Panel provides an easy way to organize big forms by grouping the fields in panel"])),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(14,0,null,0,162,"amexio-tab-view",[],null,null,null,d._66,d.x)),t._2(15,5619712,null,1,r.G,[t.B],null,null),t._23(603979776,1,{queryTabs:1}),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(18,0,null,0,46,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,d._67,d.y)),t._2(19,114688,[[1,4]],0,r.H,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(21,0,null,0,42,"amexio-row",[],null,null,null,d._63,d.u)),t._2(22,1163264,null,0,r.D,[],null,null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(24,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,d._50,d.h)),t._2(25,114688,null,0,r.i,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(27,0,null,0,2,"amexio-panel",[["title","Panel"]],null,null,null,d._116,d._21)),t._2(28,114688,null,0,r._55,[],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"]},null),(l()(),t._25(-1,1,["\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(32,0,null,0,18,"amexio-column",[],[[8,"className",0]],null,null,d._50,d.h)),t._2(33,114688,null,0,r.i,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(35,0,null,0,10,"amexio-panel",[["expanded","true"],["title","Custom Header"]],null,null,null,d._116,d._21)),t._2(36,114688,null,0,r._55,[],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"]},null),(l()(),t._25(-1,1,["\n                  "])),(l()(),t._3(38,0,null,0,6,"amexio-header",[],null,null,null,d._57,d.o)),t._2(39,114688,null,0,r.t,[],null,null),(l()(),t._25(-1,0,["\n                    "])),(l()(),t._3(41,0,null,0,2,"amexio-image",[],null,[[null,"onClick"]],function(l,n,e){var t=!0;return"onClick"===n&&(t=!1!==l.component.refreshData()&&t),t},d._111,d._16)),t._2(42,114688,null,0,r._46,[],{iconclass:[0,"iconclass"]},{onClick:"onClick"}),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._25(-1,0,["\n                  "])),(l()(),t._25(-1,1,["\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                "])),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(47,0,null,0,2,"amexio-dialogue",[],null,null,null,d._72,d.D)),t._2(48,114688,null,0,r.P,[],{showdialogue:[0,"showdialogue"],title:[1,"title"],message:[2,"message"],type:[3,"type"],primaryactionlabel:[4,"primaryactionlabel"],messagetype:[5,"messagetype"]},null),(l()(),t._25(-1,null,["\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(52,0,null,0,10,"amexio-column",[],[[8,"className",0]],null,null,d._50,d.h)),t._2(53,114688,null,0,r.i,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(55,0,null,0,6,"amexio-panel",[["expanded","true"]],null,null,null,d._116,d._21)),t._2(56,114688,null,0,r._55,[],{header:[0,"header"],expanded:[1,"expanded"],height:[2,"height"]},null),(l()(),t._25(-1,1,["\n                  "])),(l()(),t._3(58,0,null,0,2,"amexio-header",[],null,null,null,d._57,d.o)),t._2(59,114688,null,0,r.t,[],null,null),(l()(),t._25(-1,0,["\n                    Custom Header\n                  "])),(l()(),t._25(-1,1,["\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._25(-1,0,["\n        \n          "])),(l()(),t._25(-1,0,["\n          \n          "])),(l()(),t._3(66,0,null,0,71,"amexio-tab",[["title","API Reference"]],null,null,null,d._67,d.y)),t._2(67,114688,[[1,4]],0,r.H,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(69,0,null,0,23,"amexio-datagrid",[["title","Properties <amexio-form>"]],null,null,null,d._117,d._22)),t._2(70,1425408,null,1,r._57,[r._1,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,2,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(73,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._118,d._23)),t._2(74,49152,[[2,4]],2,r._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,3,{headerTemplate:0}),t._23(335544320,4,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(78,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._118,d._23)),t._2(79,49152,[[2,4]],2,r._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,5,{headerTemplate:0}),t._23(335544320,6,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(83,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._118,d._23)),t._2(84,49152,[[2,4]],2,r._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,7,{headerTemplate:0}),t._23(335544320,8,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(88,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._118,d._23)),t._2(89,49152,[[2,4]],2,r._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,9,{headerTemplate:0}),t._23(335544320,10,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(94,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(96,0,null,0,23,"amexio-datagrid",[["title","Properties <amexio-form-action>"]],null,null,null,d._117,d._22)),t._2(97,1425408,null,1,r._57,[r._1,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,11,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(100,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._118,d._23)),t._2(101,49152,[[11,4]],2,r._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,12,{headerTemplate:0}),t._23(335544320,13,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(105,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._118,d._23)),t._2(106,49152,[[11,4]],2,r._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,14,{headerTemplate:0}),t._23(335544320,15,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(110,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._118,d._23)),t._2(111,49152,[[11,4]],2,r._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,16,{headerTemplate:0}),t._23(335544320,17,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(115,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._118,d._23)),t._2(116,49152,[[11,4]],2,r._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,18,{headerTemplate:0}),t._23(335544320,19,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(121,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(123,0,null,0,13,"amexio-datagrid",[["title","Events"]],null,null,null,d._117,d._22)),t._2(124,1425408,null,1,r._57,[r._1,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,20,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(127,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._118,d._23)),t._2(128,49152,[[20,4]],2,r._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,21,{headerTemplate:0}),t._23(335544320,22,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(132,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._118,d._23)),t._2(133,49152,[[20,4]],2,r._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,23,{headerTemplate:0}),t._23(335544320,24,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n\n\n          "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(139,0,null,0,27,"amexio-tab",[["title","Source"]],null,null,null,d._67,d.y)),t._2(140,114688,[[1,4]],0,r.H,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(142,0,null,0,23,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(144,0,null,null,20,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(146,0,null,null,17,"amexio-vertical-tab-view",[],null,null,null,d._69,d.A)),t._2(147,5357568,null,1,r.L,[t.B],null,null),t._23(603979776,25,{queryTabs:1}),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(150,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,d._67,d.y)),t._2(151,114688,[[25,4]],0,r.H,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n                  "])),(l()(),t.Y(16777216,null,0,1,null,m)),t._2(154,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(157,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,d._67,d.y)),t._2(158,114688,[[25,4]],0,r.H,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n                  "])),(l()(),t.Y(16777216,null,0,1,null,c)),t._2(161,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,null,[" \n              "])),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n           \n          "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(168,0,null,0,7,"amexio-tab",[["title","Live"]],null,null,null,d._67,d.y)),t._2(169,114688,[[1,4]],0,r.H,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(171,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),t._25(-1,null,["Amexio Sandbox"])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(174,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-panel?embed=1&file=app/panels/panel/panel.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,0,["\n        "])),(l()(),t._25(-1,0,["\n      "])),(l()(),t._25(-1,null,["\n    "])),(l()(),t._25(-1,null,["\n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,5,0),l(n,9,0),l(n,15,0),l(n,19,0,"Demo","true"),l(n,22,0),l(n,25,0,4),l(n,28,0,"Panel",!0,!1),l(n,33,0,4),l(n,36,0,"Custom Header",!0,"true"),l(n,39,0),l(n,42,0,"fa fa-refresh fa-fw"),l(n,48,0,e.refreshDialogue,"refresh","Data refresh successfully.","alert","ok","warning"),l(n,53,0,4),l(n,56,0,!1,"true",800),l(n,59,0),l(n,67,0,"API Reference"),l(n,70,0,"Properties <amexio-form>","assets/apireference/panel/form.component.json","get","properties",!1,!1),l(n,74,0,"Name","name",!1,"string",15),l(n,79,0,"Type","type",!1,"string",10),l(n,84,0,"Default","default",!1,"string",10),l(n,89,0,"Description","description",!1,"string",65),l(n,97,0,"Properties <amexio-form-action>","assets/apireference/panel/form.action.component.json","get","properties",!1,!1),l(n,101,0,"Name","name",!1,"string",15),l(n,106,0,"Type","type",!1,"string",10),l(n,111,0,"Default","default",!1,"string",10),l(n,116,0,"Description","description",!1,"string",65),l(n,124,0,"Events","assets/apireference/panel/form.component.json","get","events",!1,!1),l(n,128,0,"Name","name",!1,"string",15),l(n,133,0,"Description","description",!1,"string",65),l(n,140,0,"Source"),l(n,147,0),l(n,151,0,"HTML",!0),l(n,154,0,e.htmlCode),l(n,158,0,"Type Script"),l(n,161,0,e.typeScriptCode),l(n,169,0,"Live")},function(l,n){l(n,24,0,t._16(n,25).colclass),l(n,32,0,t._16(n,33).colclass),l(n,52,0,t._16(n,53).colclass)})}var y=t.Z("panel-demo",a,function(l){return t._27(0,[(l()(),t._3(0,0,null,null,1,"panel-demo",[],null,null,null,h,p)),t._2(1,49152,null,0,a,[u.c],null,null)],null,null)},{},{},[]),f=e("0nO6"),x=e("UHIZ");e.d(n,"PanelDemoModuleNgFactory",function(){return g});var g=t._0(i,[],function(l){return t._12([t._13(512,t.j,t.W,[[8,[y]],[3,t.j],t.v]),t._13(4608,s.n,s.m,[t.s,[2,s.u]]),t._13(4608,u.h,u.m,[s.c,t.z,u.k]),t._13(4608,u.n,u.n,[u.h,u.l]),t._13(5120,u.a,function(l){return[l]},[u.n]),t._13(4608,u.j,u.j,[]),t._13(6144,u.i,null,[u.j]),t._13(4608,u.g,u.g,[u.i]),t._13(6144,u.b,null,[u.g]),t._13(5120,u.f,u.o,[u.b,[2,u.a]]),t._13(4608,u.c,u.c,[u.f]),t._13(4608,f.r,f.r,[]),t._13(4608,r._1,r._1,[u.c]),t._13(4608,r._11,r._11,[t.z]),t._13(4608,r._17,r._17,[]),t._13(4608,r._37,r._37,[]),t._13(512,s.b,s.b,[]),t._13(512,u.e,u.e,[]),t._13(512,u.d,u.d,[]),t._13(512,f.o,f.o,[]),t._13(512,f.e,f.e,[]),t._13(512,r.u,r.u,[]),t._13(512,r.s,r.s,[]),t._13(512,r._44,r._44,[]),t._13(512,r.y,r.y,[]),t._13(512,r.B,r.B,[]),t._13(512,r.k,r.k,[]),t._13(512,r.M,r.M,[]),t._13(512,_.b,_.b,[]),t._13(512,x.n,x.n,[[2,x.s],[2,x.m]]),t._13(512,i,i,[]),t._13(256,u.k,"XSRF-TOKEN",[]),t._13(256,u.l,"X-XSRF-TOKEN",[]),t._13(1024,x.i,function(){return[[{path:"",component:a}]]},[])])})}});