webpackJsonp([14],{"1B5C":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e("LMZF"),t=function(){},_=e("KhCp"),a=e("kL+h"),i=e("tfJK"),o=e("drlO"),d=e("Un6q"),r=e("9iV4"),p=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/media/video/media.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/media/video/media.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),c=u._1({encapsulation:2,styles:[],data:{}});function s(l){return u._27(0,[(l()(),u._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(3,0,null,null,1,"prism-block",[],null,null,null,_.b,_.a)),u._2(4,4243456,null,0,a.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function m(l){return u._27(0,[(l()(),u._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(2,0,null,null,1,"prism-block",[],null,null,null,_.b,_.a)),u._2(3,4243456,null,0,a.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function h(l){return u._27(0,[(l()(),u._25(-1,null,["\n    "])),(l()(),u._3(1,0,null,null,113,"amexio-card",[["header","true"]],null,null,null,i._48,i.f)),u._2(2,4308992,null,0,o.f,[],{header:[0,"header"]},null),(l()(),u._25(-1,null,["\n      "])),(l()(),u._3(4,0,null,0,2,"amexio-header",[],null,null,null,i._57,i.o)),u._2(5,114688,null,0,o.t,[],null,null),(l()(),u._25(-1,0,["\n         Video Player \n      "])),(l()(),u._25(-1,null,["\n      "])),(l()(),u._3(8,0,null,1,105,"amexio-body",[],null,null,null,i._45,i.c)),u._2(9,114688,null,0,o.c,[],null,null),(l()(),u._25(-1,0,["\n        "])),(l()(),u._3(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u._25(-1,null,["Video player component support all types of videos. "])),(l()(),u._25(-1,0,["\n        "])),(l()(),u._3(14,0,null,0,98,"amexio-tab-view",[],null,null,null,i._66,i.x)),u._2(15,5619712,null,1,o.G,[u.B],null,null),u._23(603979776,1,{queryTabs:1}),(l()(),u._25(-1,0,["\n          "])),(l()(),u._3(18,0,null,0,29,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i._67,i.y)),u._2(19,114688,[[1,4]],0,o.H,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(21,0,null,0,25,"amexio-row",[],null,null,null,i._63,i.u)),u._2(22,1163264,null,0,o.D,[],null,null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(24,0,null,0,21,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,i._50,i.h)),u._2(25,114688,null,0,o.i,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(27,0,null,0,17,"amexio-card",[],null,null,null,i._48,i.f)),u._2(28,4308992,null,0,o.f,[],{header:[0,"header"]},null),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(30,0,null,0,2,"amexio-header",[],null,null,null,i._57,i.o)),u._2(31,114688,null,0,o.t,[],null,null),(l()(),u._25(-1,0,["\n                     Video Player \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(34,0,null,1,9,"amexio-body",[],null,null,null,i._45,i.c)),u._2(35,114688,null,0,o.c,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(37,0,null,0,5,"amexio-row",[],null,null,null,i._63,i.u)),u._2(38,1163264,null,0,o.D,[],null,null),(l()(),u._25(-1,0,["\n                      "])),(l()(),u._3(40,0,null,0,1,"amexio-video-player",[["path","../assets/videos/sample_bunny.mp4"]],null,null,null,i._110,i._15)),u._2(41,114688,null,0,o._45,[],{path:[0,"path"]},null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._3(49,0,null,0,27,"amexio-tab",[["title","API Reference"]],null,null,null,i._67,i.y)),u._2(50,114688,[[1,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(52,0,null,0,23,"amexio-datagrid",[["title","Properties"]],null,null,null,i._117,i._22)),u._2(53,1425408,null,1,o._57,[o._1,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),u._23(603979776,2,{columnRef:1}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(56,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),u._2(57,49152,[[2,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,3,{headerTemplate:0}),u._23(335544320,4,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(61,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),u._2(62,49152,[[2,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,5,{headerTemplate:0}),u._23(335544320,6,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(66,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),u._2(67,49152,[[2,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,7,{headerTemplate:0}),u._23(335544320,8,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(71,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._118,i._23)),u._2(72,49152,[[2,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,9,{headerTemplate:0}),u._23(335544320,10,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._3(78,0,null,0,24,"amexio-tab",[["title","Source"]],null,null,null,i._67,i.y)),u._2(79,114688,[[1,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(81,0,null,0,20,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),u._25(-1,null,["\n            "])),(l()(),u._3(83,0,null,null,17,"amexio-vertical-tab-view",[],null,null,null,i._69,i.A)),u._2(84,5357568,null,1,o.L,[u.B],null,null),u._23(603979776,11,{queryTabs:1}),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(87,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,i._67,i.y)),u._2(88,114688,[[11,4]],0,o.H,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u.Y(16777216,null,0,1,null,s)),u._2(91,16384,null,0,d.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(94,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,i._67,i.y)),u._2(95,114688,[[11,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u.Y(16777216,null,0,1,null,m)),u._2(98,16384,null,0,d.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._3(104,0,null,0,7,"amexio-tab",[["title","Live"]],null,null,null,i._67,i.y)),u._2(105,114688,[[1,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(107,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),u._25(-1,null,["Amexio Sandbox"])),(l()(),u._25(-1,0,["\n"])),(l()(),u._3(110,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://embed.plnkr.co/sM1HxXKKemniINKhc4Q0/"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,0,["\n        "])),(l()(),u._25(-1,0,["\n      "])),(l()(),u._25(-1,null,["\n    "])),(l()(),u._25(-1,null,["\n    "])),(l()(),u._25(-1,null,["\n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,5,0),l(n,9,0),l(n,15,0),l(n,19,0,"Demo","true"),l(n,22,0),l(n,25,0,"12"),l(n,28,0,!0),l(n,31,0),l(n,35,0),l(n,38,0),l(n,41,0,"../assets/videos/sample_bunny.mp4"),l(n,50,0,"API Reference"),l(n,53,0,"Properties","assets/apireference/media/video.json","get","properties",!1,!1),l(n,57,0,"Name","name",!1,"string",15),l(n,62,0,"Type","type",!1,"string",10),l(n,67,0,"Default","default",!1,"string",10),l(n,72,0,"Description","description",!1,"string",65),l(n,79,0,"Source"),l(n,84,0),l(n,88,0,"HTML",!0),l(n,91,0,e.htmlCode),l(n,95,0,"Type Script"),l(n,98,0,e.typeScriptCode),l(n,105,0,"Live")},function(l,n){l(n,24,0,u._16(n,25).colclass)})}var y=u.Z("video-demo",p,function(l){return u._27(0,[(l()(),u._3(0,0,null,null,1,"video-demo",[],null,null,null,h,c)),u._2(1,49152,null,0,p,[r.c],null,null)],null,null)},{},{},[]),f=e("0nO6"),x=e("UHIZ");e.d(n,"VideoDemoModuleNgFactory",function(){return b});var b=u._0(t,[],function(l){return u._12([u._13(512,u.j,u.W,[[8,[y]],[3,u.j],u.v]),u._13(4608,d.n,d.m,[u.s,[2,d.u]]),u._13(4608,f.r,f.r,[]),u._13(4608,r.h,r.m,[d.c,u.z,r.k]),u._13(4608,r.n,r.n,[r.h,r.l]),u._13(5120,r.a,function(l){return[l]},[r.n]),u._13(4608,r.j,r.j,[]),u._13(6144,r.i,null,[r.j]),u._13(4608,r.g,r.g,[r.i]),u._13(6144,r.b,null,[r.g]),u._13(5120,r.f,r.o,[r.b,[2,r.a]]),u._13(4608,r.c,r.c,[r.f]),u._13(4608,o._1,o._1,[r.c]),u._13(4608,o._11,o._11,[u.z]),u._13(4608,o._17,o._17,[]),u._13(4608,o._37,o._37,[]),u._13(512,d.b,d.b,[]),u._13(512,f.o,f.o,[]),u._13(512,f.e,f.e,[]),u._13(512,r.e,r.e,[]),u._13(512,r.d,r.d,[]),u._13(512,a.b,a.b,[]),u._13(512,o.u,o.u,[]),u._13(512,o.s,o.s,[]),u._13(512,o._44,o._44,[]),u._13(512,o.y,o.y,[]),u._13(512,o.B,o.B,[]),u._13(512,o.k,o.k,[]),u._13(512,o.M,o.M,[]),u._13(512,x.n,x.n,[[2,x.s],[2,x.m]]),u._13(512,t,t,[]),u._13(256,r.k,"XSRF-TOKEN",[]),u._13(256,r.l,"X-XSRF-TOKEN",[]),u._13(1024,x.i,function(){return[[{path:"",component:p,pathMatch:"full"}]]},[])])})}});