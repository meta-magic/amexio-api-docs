webpackJsonp(["fileupload.demo.module"],{u3yp:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e("LMZF"),t=function(){},a=e("tfJK"),_=e("KhCp"),i=e("kL+h"),o=e("drlO"),d=e("Un6q"),r=e("9iV4"),p=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/forms/fileupload/form.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/forms/fileupload/form.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),m=u._1({encapsulation:2,styles:[],data:{}});function c(l){return u._27(0,[(l()(),u._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(3,0,null,null,1,"prism-block",[],null,null,null,_.b,_.a)),u._2(4,4243456,null,0,i.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function h(l){return u._27(0,[(l()(),u._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(2,0,null,null,1,"prism-block",[],null,null,null,_.b,_.a)),u._2(3,4243456,null,0,i.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function s(l){return u._27(0,[(l()(),u._25(-1,null,["\n    "])),(l()(),u._3(1,0,null,null,161,"amexio-card",[["header","true"]],null,null,null,a._58,a.h)),u._2(2,5357568,null,3,o.g,[],{header:[0,"header"]},null),u._23(603979776,1,{amexioHeader:1}),u._23(603979776,2,{amexioBody:1}),u._23(603979776,3,{amexioFooter:1}),(l()(),u._25(-1,null,["\n      "])),(l()(),u._3(7,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),u._2(8,114688,[[1,4]],0,o.u,[],null,null),(l()(),u._25(-1,0,["\n         File Upload \n      "])),(l()(),u._25(-1,null,["\n      "])),(l()(),u._3(11,0,null,1,150,"amexio-body",[],null,null,null,a._54,a.d)),u._2(12,114688,[[2,4]],0,o.c,[],null,null),(l()(),u._25(-1,0,["\n        "])),(l()(),u._3(14,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u._25(-1,null,["This component use for uploading all types of files."])),(l()(),u._25(-1,0,["\n        "])),(l()(),u._3(17,16777216,null,0,143,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var t=!0;return"document:click"===n&&(t=!1!==u._16(l,18).onWindowClick()&&t),"document:scroll"===n&&(t=!1!==u._16(l,18).onscroll()&&t),t},a._77,a.A)),u._2(18,5357568,null,2,o.J,[u.B,u.j,u.M],null,null),u._23(603979776,4,{queryTabs:1}),u._23(603979776,5,{queryAction:1}),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(22,0,null,1,51,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,a._78,a.B)),u._2(23,114688,[[4,4]],0,o.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(25,0,null,0,47,"amexio-row",[],null,null,null,a._73,a.w)),u._2(26,1163264,null,0,o.F,[],null,null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(28,0,null,0,21,"amexio-column",[["size","6"]],[[8,"className",0]],null,null,a._60,a.j)),u._2(29,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(31,0,null,0,17,"amexio-card",[],null,null,null,a._58,a.h)),u._2(32,5357568,null,3,o.g,[],{header:[0,"header"]},null),u._23(603979776,6,{amexioHeader:1}),u._23(603979776,7,{amexioBody:1}),u._23(603979776,8,{amexioFooter:1}),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(37,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),u._2(38,114688,[[6,4]],0,o.u,[],null,null),(l()(),u._25(-1,0,["\n                     Basic File Upload \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(41,0,null,1,6,"amexio-body",[],null,null,null,a._54,a.d)),u._2(42,114688,[[7,4]],0,o.c,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(44,0,null,0,2,"amexio-fileupload",[],null,null,null,a._118,a._15)),u._2(45,4308992,null,0,o._43,[o._5],{fieldlabel:[0,"fieldlabel"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],filetype:[3,"filetype"],multiplefile:[4,"multiplefile"]},null),(l()(),u._25(-1,null,["\n                    "])),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(51,0,null,0,20,"amexio-column",[["size","6"]],[[8,"className",0]],null,null,a._60,a.j)),u._2(52,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(54,0,null,0,16,"amexio-card",[],null,null,null,a._58,a.h)),u._2(55,5357568,null,3,o.g,[],{header:[0,"header"]},null),u._23(603979776,9,{amexioHeader:1}),u._23(603979776,10,{amexioBody:1}),u._23(603979776,11,{amexioFooter:1}),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(60,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),u._2(61,114688,[[9,4]],0,o.u,[],null,null),(l()(),u._25(-1,0,["\n                     Drag Drop File Upload \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(64,0,null,1,5,"amexio-body",[],null,null,null,a._54,a.d)),u._2(65,114688,[[10,4]],0,o.c,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(67,0,null,0,1,"amexio-fileupload",[["droppable","true"]],null,null,null,a._118,a._15)),u._2(68,4308992,null,0,o._43,[o._5],{fieldlabel:[0,"fieldlabel"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],filetype:[3,"filetype"],droppable:[4,"droppable"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(75,0,null,1,49,"amexio-tab",[["title","API Reference"]],null,null,null,a._78,a.B)),u._2(76,114688,[[4,4]],0,o.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(78,0,null,0,28,"amexio-datagrid",[["title","Properties <amexio-fileupload>"]],null,null,null,a._135,a._32)),u._2(79,1425408,null,1,o._66,[o._5,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),u._23(603979776,12,{columnRef:1}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(82,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(83,49152,[[12,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,13,{headerTemplate:0}),u._23(335544320,14,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(87,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(88,49152,[[12,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,15,{headerTemplate:0}),u._23(335544320,16,{bodyTemplate:0}),(l()(),u._25(-1,null,["                                                      \n              "])),(l()(),u._3(92,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(93,49152,[[12,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,17,{headerTemplate:0}),u._23(335544320,18,{bodyTemplate:0}),(l()(),u._25(-1,null,["                    \n              "])),(l()(),u._3(97,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(98,49152,[[12,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,19,{headerTemplate:0}),u._23(335544320,20,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(102,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(103,49152,[[12,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,21,{headerTemplate:0}),u._23(335544320,22,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(108,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(110,0,null,0,13,"amexio-datagrid",[["title","Events"]],null,null,null,a._135,a._32)),u._2(111,1425408,null,1,o._66,[o._5,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),u._23(603979776,23,{columnRef:1}),(l()(),u._25(-1,null,["\n"])),(l()(),u._3(114,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(115,49152,[[23,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,24,{headerTemplate:0}),u._23(335544320,25,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n"])),(l()(),u._3(119,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(120,49152,[[23,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,26,{headerTemplate:0}),u._23(335544320,27,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n"])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(126,0,null,1,24,"amexio-tab",[["title","Source"]],null,null,null,a._78,a.B)),u._2(127,114688,[[4,4]],0,o.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(129,0,null,0,20,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),u._25(-1,null,["\n            "])),(l()(),u._3(131,0,null,null,17,"amexio-vertical-tab-view",[],null,null,null,a._80,a.D)),u._2(132,5357568,null,1,o.O,[u.B],null,null),u._23(603979776,28,{queryTabs:1}),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(135,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,a._78,a.B)),u._2(136,114688,[[28,4]],0,o.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u.Y(16777216,null,0,1,null,c)),u._2(139,16384,null,0,d.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(142,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,a._78,a.B)),u._2(143,114688,[[28,4]],0,o.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u.Y(16777216,null,0,1,null,h)),u._2(146,16384,null,0,d.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(152,0,null,1,7,"amexio-tab",[["title","Live"]],null,null,null,a._78,a.B)),u._2(153,114688,[[4,4]],0,o.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n           "])),(l()(),u._3(155,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),u._25(-1,null,["Amexio Sandbox"])),(l()(),u._25(-1,0,["\n"])),(l()(),u._3(158,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-fileupload?embed=1&file=app/forms/fileupload/fileupload.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,1,["\n        "])),(l()(),u._25(-1,0,["\n      "])),(l()(),u._25(-1,null,["\n    "])),(l()(),u._25(-1,null,["\n    "])),(l()(),u._25(-1,null,["\n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,8,0),l(n,12,0),l(n,18,0),l(n,23,0,"Demo","true"),l(n,26,0),l(n,29,0,"6"),l(n,32,0,!0),l(n,38,0),l(n,42,0),l(n,45,0,"Photo Upload","/upload","POST","image/*","*"),l(n,52,0,"6"),l(n,55,0,!0),l(n,61,0),l(n,65,0),l(n,68,0,"Photo Upload","/upload","POST","image/*","true"),l(n,76,0,"API Reference"),l(n,79,0,"Properties <amexio-fileupload>","assets/apireference/forms/fileupload.json","get","properties",!1,!1),l(n,83,0,"Name","name",!1,"string",15),l(n,88,0,"Version","version",!1,"string",10),l(n,93,0,"Type","type",!1,"string",10),l(n,98,0,"Default","default",!1,"string",10),l(n,103,0,"Description","description",!1,"string",65),l(n,111,0,"Events","assets/apireference/forms/fileupload.json","get","events",!1,!1),l(n,115,0,"Name","name",!1,"string",15),l(n,120,0,"Description","description",!1,"string",65),l(n,127,0,"Source"),l(n,132,0),l(n,136,0,"HTML",!0),l(n,139,0,e.htmlCode),l(n,143,0,"Type Script"),l(n,146,0,e.typeScriptCode),l(n,153,0,"Live")},function(l,n){l(n,28,0,u._16(n,29).colclass),l(n,51,0,u._16(n,52).colclass)})}var f=u.Z("fileupload-demo",p,function(l){return u._27(0,[(l()(),u._3(0,0,null,null,1,"fileupload-demo",[],null,null,null,s,m)),u._2(1,49152,null,0,p,[r.c],null,null)],null,null)},{},{},[]),x=e("0nO6"),y=e("UHIZ");e.d(n,"FileUploadDemoModuleNgFactory",function(){return b});var b=u._0(t,[],function(l){return u._12([u._13(512,u.j,u.W,[[8,[a.a,f]],[3,u.j],u.v]),u._13(4608,d.n,d.m,[u.s,[2,d.u]]),u._13(4608,x.s,x.s,[]),u._13(4608,r.h,r.m,[d.c,u.z,r.k]),u._13(4608,r.n,r.n,[r.h,r.l]),u._13(5120,r.a,function(l){return[l]},[r.n]),u._13(4608,r.j,r.j,[]),u._13(6144,r.i,null,[r.j]),u._13(4608,r.g,r.g,[r.i]),u._13(6144,r.b,null,[r.g]),u._13(5120,r.f,r.o,[r.b,[2,r.a]]),u._13(4608,r.c,r.c,[r.f]),u._13(4608,o._5,o._5,[r.c]),u._13(4608,o._15,o._15,[u.z]),u._13(4608,o._22,o._22,[]),u._13(4608,o._40,o._40,[]),u._13(512,d.b,d.b,[]),u._13(512,x.p,x.p,[]),u._13(512,x.e,x.e,[]),u._13(512,r.e,r.e,[]),u._13(512,r.d,r.d,[]),u._13(512,i.b,i.b,[]),u._13(512,o.v,o.v,[]),u._13(512,o.t,o.t,[]),u._13(512,o.y,o.y,[]),u._13(512,o.A,o.A,[]),u._13(512,o.D,o.D,[]),u._13(512,o.l,o.l,[]),u._13(512,o.Q,o.Q,[]),u._13(512,y.n,y.n,[[2,y.s],[2,y.m]]),u._13(512,t,t,[]),u._13(256,r.k,"XSRF-TOKEN",[]),u._13(256,r.l,"X-XSRF-TOKEN",[]),u._13(1024,y.i,function(){return[[{path:"",component:p,pathMatch:"full"}]]},[])])})}});