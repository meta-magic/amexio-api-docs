webpackJsonp(["slider.demo.module"],{"/DZH":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e("LMZF"),t=function(){},_=e("tfJK"),a=e("KhCp"),i=e("kL+h"),d=e("drlO"),o=e("0nO6"),r=e("Un6q"),s=e("9iV4"),c=function(){function l(l){this.http=l,this.stepVal1=10,this.stepVal2=20,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/forms/slider/form.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/forms/slider/form.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),m=u._1({encapsulation:2,styles:[],data:{}});function p(l){return u._27(0,[(l()(),u._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(3,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),u._2(4,4243456,null,0,i.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function h(l){return u._27(0,[(l()(),u._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(2,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),u._2(3,4243456,null,0,i.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function g(l){return u._27(0,[(l()(),u._25(-1,null,["\n    "])),(l()(),u._3(1,0,null,null,172,"amexio-card",[["header","true"]],null,null,null,_._58,_.h)),u._2(2,5357568,null,3,d.g,[],{header:[0,"header"]},null),u._23(603979776,1,{amexioHeader:1}),u._23(603979776,2,{amexioBody:1}),u._23(603979776,3,{amexioFooter:1}),(l()(),u._25(-1,null,["\n      "])),(l()(),u._3(7,0,null,0,2,"amexio-header",[],null,null,null,_._67,_.q)),u._2(8,114688,[[1,4]],0,d.u,[],null,null),(l()(),u._25(-1,0,["\n         Slider \n      "])),(l()(),u._25(-1,null,["\n      "])),(l()(),u._3(11,0,null,1,161,"amexio-body",[],null,null,null,_._54,_.d)),u._2(12,114688,[[2,4]],0,d.c,[],null,null),(l()(),u._25(-1,0,["\n        "])),(l()(),u._3(14,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u._25(-1,null,["Slider with draggable input provide a way to input values."])),(l()(),u._25(-1,0,["\n        "])),(l()(),u._3(17,16777216,null,0,154,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var t=!0;return"document:click"===n&&(t=!1!==u._16(l,18).onWindowClick()&&t),"document:scroll"===n&&(t=!1!==u._16(l,18).onscroll()&&t),t},_._77,_.A)),u._2(18,5357568,null,2,d.J,[u.B,u.j,u.M],null,null),u._23(603979776,4,{queryTabs:1}),u._23(603979776,5,{queryAction:1}),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(22,0,null,1,67,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,_._78,_.B)),u._2(23,114688,[[4,4]],0,d.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(25,0,null,0,63,"amexio-row",[],null,null,null,_._73,_.w)),u._2(26,1163264,null,0,d.F,[],null,null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(28,0,null,0,59,"amexio-column",[["size","6"]],[[8,"className",0]],null,null,_._60,_.j)),u._2(29,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(31,0,null,0,55,"amexio-card",[],null,null,null,_._58,_.h)),u._2(32,5357568,null,3,d.g,[],{header:[0,"header"]},null),u._23(603979776,6,{amexioHeader:1}),u._23(603979776,7,{amexioBody:1}),u._23(603979776,8,{amexioFooter:1}),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(37,0,null,0,2,"amexio-header",[],null,null,null,_._67,_.q)),u._2(38,114688,[[6,4]],0,d.u,[],null,null),(l()(),u._25(-1,0,["\n                     Simple Slider \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(41,0,null,1,44,"amexio-body",[],null,null,null,_._54,_.d)),u._2(42,114688,[[7,4]],0,d.c,[],null,null),(l()(),u._25(-1,0,["\n                   "])),(l()(),u._3(44,0,null,0,24,"amexio-row",[],null,null,null,_._73,_.w)),u._2(45,1163264,null,0,d.F,[],null,null),(l()(),u._25(-1,0,["\n                     "])),(l()(),u._3(47,0,null,0,9,"amexio-column",[],[[8,"className",0]],null,null,_._60,_.j)),u._2(48,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                       "])),(l()(),u._3(50,0,null,0,5,"amexio-slider",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0;return"ngModelChange"===n&&(u=!1!==(l.component.stepVal1=e)&&u),u},_._115,_._12)),u._2(51,180224,null,0,d._39,[u.k,d._40,u.B,u.x],null,null),u._22(1024,null,o.g,function(l){return[l]},[d._39]),u._2(53,671744,null,0,o.l,[[8,null],[8,null],[8,null],[2,o.g]],{model:[0,"model"]},{update:"ngModelChange"}),u._22(2048,null,o.h,null,[o.l]),u._2(55,16384,null,0,o.i,[o.h],null,null),(l()(),u._25(56,0,["\n                      ","\n                     "])),(l()(),u._25(-1,0,["\n                     "])),(l()(),u._3(58,0,null,0,9,"amexio-column",[],[[8,"className",0]],null,null,_._60,_.j)),u._2(59,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                       "])),(l()(),u._3(61,0,null,0,5,"amexio-slider",[["disabled","true"],["max-value","50"],["min-value","0"],["step-value","2"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0;return"ngModelChange"===n&&(u=!1!==(l.component.stepVal2=e)&&u),u},_._115,_._12)),u._2(62,180224,null,0,d._39,[u.k,d._40,u.B,u.x],{disabled:[0,"disabled"],min:[1,"min"],max:[2,"max"],step:[3,"step"]},null),u._22(1024,null,o.g,function(l){return[l]},[d._39]),u._2(64,671744,null,0,o.l,[[8,null],[8,null],[8,null],[2,o.g]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),u._22(2048,null,o.h,null,[o.l]),u._2(66,16384,null,0,o.i,[o.h],null,null),(l()(),u._25(67,0,["\n                       ","\n                     "])),(l()(),u._25(-1,0,["\n                   "])),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(70,0,null,0,14,"amexio-row",[],null,null,null,_._73,_.w)),u._2(71,1163264,null,0,d.F,[],null,null),(l()(),u._25(-1,0,["\n                      "])),(l()(),u._3(73,0,null,0,10,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,_._60,_.j)),u._2(74,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                        "])),(l()(),u._3(76,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),u._25(-1,null,["Vertical Slider"])),(l()(),u._25(-1,0,["\n                        "])),(l()(),u._3(79,0,null,0,3,"amexio-slider",[["orientation","vertical"]],null,null,null,_._115,_._12)),u._22(5120,null,o.g,function(l){return[l]},[d._39]),u._2(81,180224,null,0,d._39,[u.k,d._40,u.B,u.x],{orientation:[0,"orientation"],style:[1,"style"]},null),u._20(82,{height:0}),(l()(),u._25(-1,0,["\n                        \n                      "])),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n             \n            "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(91,0,null,1,44,"amexio-tab",[["title","API Reference"]],null,null,null,_._78,_.B)),u._2(92,114688,[[4,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(94,0,null,0,23,"amexio-datagrid",[["title","Properties <amexio-slider>"]],null,null,null,_._135,_._32)),u._2(95,1425408,null,1,d._66,[d._5,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),u._23(603979776,9,{columnRef:1}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(98,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._136,_._33)),u._2(99,49152,[[9,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,10,{headerTemplate:0}),u._23(335544320,11,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(103,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._136,_._33)),u._2(104,49152,[[9,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,12,{headerTemplate:0}),u._23(335544320,13,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(108,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._136,_._33)),u._2(109,49152,[[9,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,14,{headerTemplate:0}),u._23(335544320,15,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(113,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._136,_._33)),u._2(114,49152,[[9,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,16,{headerTemplate:0}),u._23(335544320,17,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(119,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(121,0,null,0,13,"amexio-datagrid",[["title","Events <amexio-slider> "]],null,null,null,_._135,_._32)),u._2(122,1425408,null,1,d._66,[d._5,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),u._23(603979776,18,{columnRef:1}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(125,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._136,_._33)),u._2(126,49152,[[18,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,19,{headerTemplate:0}),u._23(335544320,20,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(130,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._136,_._33)),u._2(131,49152,[[18,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,21,{headerTemplate:0}),u._23(335544320,22,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n\n          "])),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(137,0,null,1,24,"amexio-tab",[["title","Source"]],null,null,null,_._78,_.B)),u._2(138,114688,[[4,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(140,0,null,0,20,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),u._25(-1,null,["\n            "])),(l()(),u._3(142,0,null,null,17,"amexio-vertical-tab-view",[],null,null,null,_._80,_.D)),u._2(143,5357568,null,1,d.O,[u.B],null,null),u._23(603979776,23,{queryTabs:1}),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(146,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,_._78,_.B)),u._2(147,114688,[[23,4]],0,d.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u.Y(16777216,null,0,1,null,p)),u._2(150,16384,null,0,r.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(153,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,_._78,_.B)),u._2(154,114688,[[23,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u.Y(16777216,null,0,1,null,h)),u._2(157,16384,null,0,r.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(163,0,null,1,7,"amexio-tab",[["title","Live"]],null,null,null,_._78,_.B)),u._2(164,114688,[[4,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(166,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),u._25(-1,null,["Amexio Sandbox"])),(l()(),u._25(-1,0,["\n"])),(l()(),u._3(169,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-slider?embed=1&file=app/forms/slider/slider.demo.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,1,["\n        "])),(l()(),u._25(-1,0,["\n      "])),(l()(),u._25(-1,null,["\n    "])),(l()(),u._25(-1,null,["\n    "])),(l()(),u._25(-1,null,["\n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,8,0),l(n,12,0),l(n,18,0),l(n,23,0,"Demo","true"),l(n,26,0),l(n,29,0,"6"),l(n,32,0,!0),l(n,38,0),l(n,42,0),l(n,45,0),l(n,48,0,6),l(n,53,0,e.stepVal1),l(n,59,0,6),l(n,62,0,"true","0","50","2"),l(n,64,0,"true",e.stepVal2),l(n,71,0),l(n,74,0,"12"),l(n,81,0,"vertical",l(n,82,0,"200px")),l(n,92,0,"API Reference"),l(n,95,0,"Properties <amexio-slider>","assets/apireference/forms/slider.json","get","properties",!1,!1),l(n,99,0,"Name","name",!1,"string",15),l(n,104,0,"Type","type",!1,"string",10),l(n,109,0,"Default","default",!1,"string",10),l(n,114,0,"Description","description",!1,"string",65),l(n,122,0,"Events <amexio-slider> ","assets/apireference/forms/slider.json","get","events",!1),l(n,126,0,"Name","name",!1,"string",20),l(n,131,0,"Description","description",!1,"string",80),l(n,138,0,"Source"),l(n,143,0),l(n,147,0,"HTML",!0),l(n,150,0,e.htmlCode),l(n,154,0,"Type Script"),l(n,157,0,e.typeScriptCode),l(n,164,0,"Live")},function(l,n){var e=n.component;l(n,28,0,u._16(n,29).colclass),l(n,47,0,u._16(n,48).colclass),l(n,50,0,u._16(n,55).ngClassUntouched,u._16(n,55).ngClassTouched,u._16(n,55).ngClassPristine,u._16(n,55).ngClassDirty,u._16(n,55).ngClassValid,u._16(n,55).ngClassInvalid,u._16(n,55).ngClassPending),l(n,56,0,e.stepVal1),l(n,58,0,u._16(n,59).colclass),l(n,61,0,u._16(n,66).ngClassUntouched,u._16(n,66).ngClassTouched,u._16(n,66).ngClassPristine,u._16(n,66).ngClassDirty,u._16(n,66).ngClassValid,u._16(n,66).ngClassInvalid,u._16(n,66).ngClassPending),l(n,67,0,e.stepVal2),l(n,73,0,u._16(n,74).colclass)})}var x=u.Z("slider-demo",c,function(l){return u._27(0,[(l()(),u._3(0,0,null,null,1,"slider-demo",[],null,null,null,g,m)),u._2(1,49152,null,0,c,[s.c],null,null)],null,null)},{},{},[]),f=e("UHIZ");e.d(n,"SliderDemoModuleNgFactory",function(){return y});var y=u._0(t,[],function(l){return u._12([u._13(512,u.j,u.W,[[8,[_.a,x]],[3,u.j],u.v]),u._13(4608,r.n,r.m,[u.s,[2,r.u]]),u._13(4608,o.s,o.s,[]),u._13(4608,s.h,s.m,[r.c,u.z,s.k]),u._13(4608,s.n,s.n,[s.h,s.l]),u._13(5120,s.a,function(l){return[l]},[s.n]),u._13(4608,s.j,s.j,[]),u._13(6144,s.i,null,[s.j]),u._13(4608,s.g,s.g,[s.i]),u._13(6144,s.b,null,[s.g]),u._13(5120,s.f,s.o,[s.b,[2,s.a]]),u._13(4608,s.c,s.c,[s.f]),u._13(4608,d._5,d._5,[s.c]),u._13(4608,d._15,d._15,[u.z]),u._13(4608,d._22,d._22,[]),u._13(4608,d._40,d._40,[]),u._13(512,r.b,r.b,[]),u._13(512,o.p,o.p,[]),u._13(512,o.e,o.e,[]),u._13(512,s.e,s.e,[]),u._13(512,s.d,s.d,[]),u._13(512,i.b,i.b,[]),u._13(512,d.v,d.v,[]),u._13(512,d.t,d.t,[]),u._13(512,d.y,d.y,[]),u._13(512,d.A,d.A,[]),u._13(512,d.D,d.D,[]),u._13(512,d.l,d.l,[]),u._13(512,d.Q,d.Q,[]),u._13(512,f.n,f.n,[[2,f.s],[2,f.m]]),u._13(512,t,t,[]),u._13(256,s.k,"XSRF-TOKEN",[]),u._13(256,s.l,"X-XSRF-TOKEN",[]),u._13(1024,f.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})}});