webpackJsonp(["panel.demo.module"],{"D+R9":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("LMZF"),u=e("9iV4"),a=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getDta=function(){var l=this;this.asyncFlag=!0,setTimeout(function(){l.asyncFlag=!1},3e3)},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/layout/panel/panel.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/layout/panel/panel.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.refreshData=function(){this.refreshDialogue=!this.refreshDialogue},l}(),i=function(){},o=e("tfJK"),_=e("KhCp"),r=e("kL+h"),s=e("drlO"),d=e("Un6q"),p=t._1({encapsulation:2,styles:[],data:{}});function m(l){return t._27(0,[(l()(),t._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._3(3,0,null,null,1,"prism-block",[],null,null,null,_.b,_.a)),t._2(4,4243456,null,0,r.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function c(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._3(2,0,null,null,1,"prism-block",[],null,null,null,_.b,_.a)),t._2(3,4243456,null,0,r.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function h(l){return t._27(0,[(l()(),t._25(-1,null,["\n    "])),(l()(),t._3(1,0,null,null,154,"amexio-card",[["header","true"]],null,null,null,o._58,o.h)),t._2(2,5357568,null,3,s.g,[],{header:[0,"header"]},null),t._23(603979776,1,{amexioHeader:1}),t._23(603979776,2,{amexioBody:1}),t._23(603979776,3,{amexioFooter:1}),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(7,0,null,0,2,"amexio-header",[],null,null,null,o._67,o.q)),t._2(8,114688,[[1,4]],0,s.u,[],null,null),(l()(),t._25(-1,0,["\n         Panel \n      "])),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(11,0,null,1,143,"amexio-body",[],null,null,null,o._54,o.d)),t._2(12,114688,[[2,4]],0,s.c,[],null,null),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(14,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t._25(-1,null,["Panel provides an easy way to organize big forms by grouping the fields in panel"])),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(17,16777216,null,0,136,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var u=!0;return"document:click"===n&&(u=!1!==t._16(l,18).onWindowClick()&&u),"document:scroll"===n&&(u=!1!==t._16(l,18).onscroll()&&u),u},o._77,o.A)),t._2(18,5357568,null,2,s.J,[t.B,t.j,t.M],null,null),t._23(603979776,4,{queryTabs:1}),t._23(603979776,5,{queryAction:1}),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(22,0,null,1,46,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,o._78,o.B)),t._2(23,114688,[[4,4]],0,s.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(25,0,null,0,42,"amexio-row",[],null,null,null,o._73,o.w)),t._2(26,1163264,null,0,s.F,[],null,null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(28,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,o._60,o.j)),t._2(29,114688,null,0,s.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(31,0,null,0,2,"amexio-panel",[["title","Panel"]],null,null,null,o._134,o._31)),t._2(32,114688,null,0,s._64,[],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"]},null),(l()(),t._25(-1,1,["\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(36,0,null,0,18,"amexio-column",[],[[8,"className",0]],null,null,o._60,o.j)),t._2(37,114688,null,0,s.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(39,0,null,0,10,"amexio-panel",[["expanded","true"],["title","Custom Header"]],null,null,null,o._134,o._31)),t._2(40,114688,null,0,s._64,[],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"]},null),(l()(),t._25(-1,1,["\n                  "])),(l()(),t._3(42,0,null,0,6,"amexio-header",[],null,null,null,o._67,o.q)),t._2(43,114688,null,0,s.u,[],null,null),(l()(),t._25(-1,0,["\n                    "])),(l()(),t._3(45,0,null,0,2,"amexio-image",[],null,[[null,"onClick"]],function(l,n,e){var t=!0;return"onClick"===n&&(t=!1!==l.component.refreshData()&&t),t},o._128,o._25)),t._2(46,114688,null,0,s._54,[],{iconclass:[0,"iconclass"]},{onClick:"onClick"}),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._25(-1,0,["\n                  "])),(l()(),t._25(-1,1,["\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                "])),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(51,0,null,0,2,"amexio-dialogue",[],null,[["window","keyup"]],function(l,n,e){var u=!0;return"window:keyup"===n&&(u=!1!==t._16(l,52).keyEvent(e)&&u),u},o._84,o.H)),t._2(52,638976,null,0,s.T,[],{showdialogue:[0,"showdialogue"],title:[1,"title"],message:[2,"message"],type:[3,"type"],primaryactionlabel:[4,"primaryactionlabel"],messagetype:[5,"messagetype"]},null),(l()(),t._25(-1,null,["\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(56,0,null,0,10,"amexio-column",[],[[8,"className",0]],null,null,o._60,o.j)),t._2(57,114688,null,0,s.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(59,0,null,0,6,"amexio-panel",[["expanded","true"]],null,null,null,o._134,o._31)),t._2(60,114688,null,0,s._64,[],{header:[0,"header"],expanded:[1,"expanded"],height:[2,"height"]},null),(l()(),t._25(-1,1,["\n                  "])),(l()(),t._3(62,0,null,0,2,"amexio-header",[],null,null,null,o._67,o.q)),t._2(63,114688,null,0,s.u,[],null,null),(l()(),t._25(-1,0,["\n                    Custom Header\n                  "])),(l()(),t._25(-1,1,["\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._25(-1,0,["\n        \n          "])),(l()(),t._25(-1,1,["\n          \n          "])),(l()(),t._3(70,0,null,1,44,"amexio-tab",[["title","API Reference"]],null,null,null,o._78,o.B)),t._2(71,114688,[[4,4]],0,s.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(73,0,null,0,23,"amexio-datagrid",[["title","Properties <amexio-panel>"]],null,null,null,o._135,o._32)),t._2(74,1425408,null,1,s._66,[s._5,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,6,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),t._2(78,49152,[[6,4]],2,s._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,7,{headerTemplate:0}),t._23(335544320,8,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(82,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),t._2(83,49152,[[6,4]],2,s._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,9,{headerTemplate:0}),t._23(335544320,10,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(87,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),t._2(88,49152,[[6,4]],2,s._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,11,{headerTemplate:0}),t._23(335544320,12,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(92,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),t._2(93,49152,[[6,4]],2,s._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,13,{headerTemplate:0}),t._23(335544320,14,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(98,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(100,0,null,0,13,"amexio-datagrid",[["title","Events"]],null,null,null,o._135,o._32)),t._2(101,1425408,null,1,s._66,[s._5,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,15,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(104,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),t._2(105,49152,[[15,4]],2,s._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,16,{headerTemplate:0}),t._23(335544320,17,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(109,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),t._2(110,49152,[[15,4]],2,s._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,18,{headerTemplate:0}),t._23(335544320,19,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n\n\n          "])),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(116,0,null,1,27,"amexio-tab",[["title","Source"]],null,null,null,o._78,o.B)),t._2(117,114688,[[4,4]],0,s.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(119,0,null,0,23,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(121,0,null,null,20,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(123,0,null,null,17,"amexio-vertical-tab-view",[],null,null,null,o._80,o.D)),t._2(124,5357568,null,1,s.O,[t.B],null,null),t._23(603979776,20,{queryTabs:1}),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(127,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,o._78,o.B)),t._2(128,114688,[[20,4]],0,s.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n                  "])),(l()(),t.Y(16777216,null,0,1,null,m)),t._2(131,16384,null,0,d.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(134,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,o._78,o.B)),t._2(135,114688,[[20,4]],0,s.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n                  "])),(l()(),t.Y(16777216,null,0,1,null,c)),t._2(138,16384,null,0,d.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,null,[" \n              "])),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n           \n          "])),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(145,0,null,1,7,"amexio-tab",[["title","Live"]],null,null,null,o._78,o.B)),t._2(146,114688,[[4,4]],0,s.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(148,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),t._25(-1,null,["Amexio Sandbox"])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(151,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-panel?embed=1&file=app/panels/panel/panel.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,1,["\n        "])),(l()(),t._25(-1,0,["\n      "])),(l()(),t._25(-1,null,["\n    "])),(l()(),t._25(-1,null,["\n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,8,0),l(n,12,0),l(n,18,0),l(n,23,0,"Demo","true"),l(n,26,0),l(n,29,0,4),l(n,32,0,"Panel",!0,!1),l(n,37,0,4),l(n,40,0,"Custom Header",!0,"true"),l(n,43,0),l(n,46,0,"fa fa-refresh fa-fw"),l(n,52,0,e.refreshDialogue,"refresh","Data refresh successfully.","alert","ok","warning"),l(n,57,0,4),l(n,60,0,!1,"true",800),l(n,63,0),l(n,71,0,"API Reference"),l(n,74,0,"Properties <amexio-panel>","assets/apireference/layout/panel/panel.json","get","properties",!1,!1),l(n,78,0,"Name","name",!1,"string",15),l(n,83,0,"Type","type",!1,"string",10),l(n,88,0,"Default","default",!1,"string",10),l(n,93,0,"Description","description",!1,"string",65),l(n,101,0,"Events","assets/apireference/layout/panel/panel.json","get","events",!1,!1),l(n,105,0,"Name","name",!1,"string",15),l(n,110,0,"Description","description",!1,"string",65),l(n,117,0,"Source"),l(n,124,0),l(n,128,0,"HTML",!0),l(n,131,0,e.htmlCode),l(n,135,0,"Type Script"),l(n,138,0,e.typeScriptCode),l(n,146,0,"Live")},function(l,n){l(n,28,0,t._16(n,29).colclass),l(n,36,0,t._16(n,37).colclass),l(n,56,0,t._16(n,57).colclass)})}var y=t.Z("panel-demo",a,function(l){return t._27(0,[(l()(),t._3(0,0,null,null,1,"panel-demo",[],null,null,null,h,p)),t._2(1,49152,null,0,a,[u.c],null,null)],null,null)},{},{},[]),f=e("0nO6"),g=e("UHIZ");e.d(n,"PanelDemoModuleNgFactory",function(){return x});var x=t._0(i,[],function(l){return t._12([t._13(512,t.j,t.W,[[8,[o.a,y]],[3,t.j],t.v]),t._13(4608,d.n,d.m,[t.s,[2,d.u]]),t._13(4608,u.h,u.m,[d.c,t.z,u.k]),t._13(4608,u.n,u.n,[u.h,u.l]),t._13(5120,u.a,function(l){return[l]},[u.n]),t._13(4608,u.j,u.j,[]),t._13(6144,u.i,null,[u.j]),t._13(4608,u.g,u.g,[u.i]),t._13(6144,u.b,null,[u.g]),t._13(5120,u.f,u.o,[u.b,[2,u.a]]),t._13(4608,u.c,u.c,[u.f]),t._13(4608,f.s,f.s,[]),t._13(4608,s._5,s._5,[u.c]),t._13(4608,s._15,s._15,[t.z]),t._13(4608,s._22,s._22,[]),t._13(4608,s._40,s._40,[]),t._13(512,d.b,d.b,[]),t._13(512,u.e,u.e,[]),t._13(512,u.d,u.d,[]),t._13(512,f.p,f.p,[]),t._13(512,f.e,f.e,[]),t._13(512,s.v,s.v,[]),t._13(512,s.t,s.t,[]),t._13(512,s.y,s.y,[]),t._13(512,s.A,s.A,[]),t._13(512,s.D,s.D,[]),t._13(512,s.l,s.l,[]),t._13(512,s.Q,s.Q,[]),t._13(512,r.b,r.b,[]),t._13(512,g.n,g.n,[[2,g.s],[2,g.m]]),t._13(512,i,i,[]),t._13(256,u.k,"XSRF-TOKEN",[]),t._13(256,u.l,"X-XSRF-TOKEN",[]),t._13(1024,g.i,function(){return[[{path:"",component:a}]]},[])])})}});