webpackJsonp([34],{dya2:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("LMZF"),t=u("9iV4"),_=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n=this;this.http.get("assets/data/code/gettingstated/gettingstated.text",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){n.tsCode=l}),this.http.get("assets/data/code/gettingstated/icon.text",{responseType:"text"}).subscribe(function(l){n.iconCode=l}),this.http.get("assets/data/code/gettingstated/data.text",{responseType:"text"}).subscribe(function(l){n.dataCode=l}),this.http.get("assets/data/code/gettingstated/style.text",{responseType:"text"}).subscribe(function(l){n.styleCode=l}),this.http.get("assets/apireference/modules/modules.json").subscribe(function(l){n.modulesData=l.properties.sort(function(l,n){return l.name<n.name?-1:l.name>n.name?1:0})}),this.http.get("assets/data/code/gettingstated/gettingstatedv32.text",{responseType:"text"}).subscribe(function(l){n.tsCodeV32=l}),this.http.get("assets/data/code/gettingstated/gettingstatedv1x.text",{responseType:"text"}).subscribe(function(l){n.tsCodeV1x=l})},l}(),a=function(){},o=u("Un6q"),i=u("0nO6"),s=u("drlO"),d=u("kL+h"),r=u("UHIZ"),c=u("KhCp"),m=u("tfJK");u.d(n,"GettingStatedModuleNgFactory",function(){return h}),u.d(n,"RenderType_GettingStatedDemo",function(){return p}),n.View_GettingStatedDemo_0=z,n.View_GettingStatedDemo_Host_0=A,u.d(n,"GettingStatedDemoNgFactory",function(){return T});var h=e._0(a,[],function(l){return e._12([e._13(512,e.j,e.W,[[8,[T]],[3,e.j],e.v]),e._13(4608,o.n,o.m,[e.s,[2,o.u]]),e._13(4608,i.r,i.r,[]),e._13(4608,t.h,t.m,[o.c,e.z,t.k]),e._13(4608,t.n,t.n,[t.h,t.l]),e._13(5120,t.a,function(l){return[l]},[t.n]),e._13(4608,t.j,t.j,[]),e._13(6144,t.i,null,[t.j]),e._13(4608,t.g,t.g,[t.i]),e._13(6144,t.b,null,[t.g]),e._13(5120,t.f,t.o,[t.b,[2,t.a]]),e._13(4608,t.c,t.c,[t.f]),e._13(4608,s._1,s._1,[t.c]),e._13(4608,s._11,s._11,[e.z]),e._13(4608,s._17,s._17,[]),e._13(4608,s._37,s._37,[]),e._13(512,o.b,o.b,[]),e._13(512,i.o,i.o,[]),e._13(512,i.e,i.e,[]),e._13(512,t.e,t.e,[]),e._13(512,t.d,t.d,[]),e._13(512,s.u,s.u,[]),e._13(512,s.s,s.s,[]),e._13(512,s._44,s._44,[]),e._13(512,s.y,s.y,[]),e._13(512,s.B,s.B,[]),e._13(512,s.k,s.k,[]),e._13(512,s.M,s.M,[]),e._13(512,d.b,d.b,[]),e._13(512,r.n,r.n,[[2,r.s],[2,r.m]]),e._13(512,a,a,[]),e._13(256,t.k,"XSRF-TOKEN",[]),e._13(256,t.l,"X-XSRF-TOKEN",[]),e._13(1024,r.i,function(){return[[{path:"",component:_,pathMatch:"full"}]]},[])])}),p=e._1({encapsulation:2,styles:[],data:{}});function g(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                                "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,c.b,c.a)),e._2(3,4243456,null,0,d.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                              "]))],function(l,n){l(n,3,0,n.component.tsCode,"typescript")},null)}function x(l){return e._27(0,[(l()(),e._3(0,0,null,null,17,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._3(2,0,null,null,14,"amexio-datagrid",[["title",""]],null,null,null,m._117,m._22)),e._2(3,1425408,null,1,s._57,[s._1,e.h],{title:[0,"title"],data:[1,"data"],height:[2,"height"],enabledatafilter:[3,"enabledatafilter"],enablecolumnfiter:[4,"enablecolumnfiter"]},null),e._23(603979776,3,{columnRef:1}),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(6,0,null,null,4,"amexio-data-table-column",[],null,null,null,m._118,m._23)),e._2(7,49152,[[3,4]],2,s._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,4,{headerTemplate:0}),e._23(335544320,5,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(12,0,null,null,3,"amexio-data-table-column",[],null,null,null,m._118,m._23)),e._2(13,49152,[[3,4]],2,s._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,6,{headerTemplate:0}),e._23(335544320,7,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._25(-1,null,["\n                        "]))],function(l,n){l(n,3,0,"",n.component.modulesData,300,!1,!1),l(n,7,0,"Module Name","name",!1,"string",25),l(n,13,0,"Description","description",!1,"string",65)},null)}function b(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,c.b,c.a)),e._2(3,4243456,null,0,d.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                          "]))],function(l,n){l(n,3,0,n.component.iconCode,"typescript")},null)}function f(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,c.b,c.a)),e._2(3,4243456,null,0,d.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                          "]))],function(l,n){l(n,3,0,n.component.dataCode,"typescript")},null)}function y(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,c.b,c.a)),e._2(3,4243456,null,0,d.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                        "]))],function(l,n){l(n,3,0,n.component.tsCodeV32,"typescript")},null)}function w(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,c.b,c.a)),e._2(3,4243456,null,0,d.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                        "]))],function(l,n){l(n,3,0,n.component.tsCodeV32,"typescript")},null)}function v(l){return e._27(0,[(l()(),e._3(0,0,null,null,7,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(2,0,null,null,4,"div",[["style","max-height: 300px;overflow-y: scroll;"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                "])),(l()(),e._3(4,0,null,null,1,"prism-block",[],null,null,null,c.b,c.a)),e._2(5,4243456,null,0,d.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n              "])),(l()(),e._25(-1,null,["\n\n            "]))],function(l,n){l(n,5,0,n.component.styleCode,"json")},null)}function z(l){return e._27(0,[(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(1,0,null,null,418,"div",[["style","padding-left: 10px;padding-right: 10px;"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(3,0,null,null,36,"amexio-row",[],null,null,null,m._63,m.u)),e._2(4,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(6,0,null,0,32,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(7,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(9,0,null,0,26,"div",[["align","center"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(11,0,null,null,4,"a",[["href","http://www.amexio.tech/"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(13,0,null,null,1,"amexio-image",[["path","https://image.ibb.co/kdy6Ev/logo.png"]],null,null,null,m._111,m._16)),e._2(14,114688,null,0,s._46,[],{path:[0,"path"]},null),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(17,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(19,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Amexio Angular EXtensions v4.1"])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(22,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(24,0,null,null,1,"amexio-image",[["path","assets/images/npm.svg"]],null,null,null,m._111,m._16)),e._2(25,114688,null,0,s._46,[],{path:[0,"path"]},null),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(27,0,null,null,1,"amexio-image",[["path","https://badge.fury.io/js/amexio-ng-extensions.svg"]],null,null,null,m._111,m._16)),e._2(28,114688,null,0,s._46,[],{path:[0,"path"]},null),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(30,0,null,null,4,"a",[["href","https://badge.fury.io/js/amexio-ng-extensions"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(32,0,null,null,1,"amexio-image",[["path","https://img.shields.io/npm/dt/amexio-ng-extensions.svg"]],null,null,null,m._111,m._16)),e._2(33,114688,null,0,s._46,[],{path:[0,"path"]},null),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,null,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(37,0,null,0,0,"hr",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(41,0,null,null,51,"amexio-row",[],null,null,null,m._63,m.u)),e._2(42,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(44,0,null,0,47,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(45,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(47,0,null,0,43,"amexio-card",[["header","true"]],null,null,null,m._48,m.f)),e._2(48,4308992,null,0,s.f,[],{header:[0,"header"]},null),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(50,0,null,0,2,"amexio-header",[],null,null,null,m._57,m.o)),e._2(51,114688,null,0,s.t,[],null,null),(l()(),e._25(-1,0,["\n              Table Of Contents\n            "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(54,0,null,1,35,"amexio-body",[],null,null,null,m._45,m.c)),e._2(55,114688,null,0,s.c,[],null,null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(57,0,null,0,9,"amexio-row",[],null,null,null,m._63,m.u)),e._2(58,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(60,0,null,0,5,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(61,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._3(63,0,null,0,1,"span",[["style","cursor: pointer"]],null,null,null,null,null)),(l()(),e._25(-1,null,["1. Installation Details"])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(68,0,null,0,9,"amexio-row",[],null,null,null,m._63,m.u)),e._2(69,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(71,0,null,0,5,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(72,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._3(74,0,null,0,1,"span",[["style","cursor: pointer;"]],null,null,null,null,null)),(l()(),e._25(-1,null,["2. Themes"])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(79,0,null,0,9,"amexio-row",[],null,null,null,m._63,m.u)),e._2(80,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(82,0,null,0,5,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(83,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._3(85,0,null,0,1,"span",[["style","cursor: pointer;"]],null,null,null,null,null)),(l()(),e._25(-1,null,["3. License"])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n\n            "])),(l()(),e._25(-1,null,["\n          "])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(94,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(96,0,null,null,212,"amexio-row",[],null,null,null,m._63,m.u)),e._2(97,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(99,0,null,0,208,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(100,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(102,0,null,0,204,"amexio-panel",[],null,null,null,m._116,m._21)),e._2(103,114688,null,0,s._55,[],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"]},null),(l()(),e._25(-1,1,["\n            "])),(l()(),e._3(105,0,null,1,200,"amexio-row",[],null,null,null,m._63,m.u)),e._2(106,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(108,0,null,0,196,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(109,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(111,0,null,0,192,"amexio-accordion",[],null,null,null,m._43,m.a)),e._2(112,1163264,null,1,s.a,[],null,null),e._23(603979776,1,{queryTabs:1}),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._3(115,0,null,0,96,"amexio-accordion-tab",[["active","true"],["header","Amexio 4.x - Angular 5"]],null,null,null,m._44,m.b)),e._2(116,49152,[[1,4]],0,s.b,[],{header:[0,"header"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(118,0,null,0,92,"amexio-tab-view",[],null,null,null,m._66,m.x)),e._2(119,5619712,null,1,s.G,[e.B],null,null),e._23(603979776,2,{queryTabs:1}),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._3(122,0,null,0,40,"amexio-tab",[["active","true"],["title","Installation"]],null,null,null,m._67,m.y)),e._2(123,114688,[[2,4]],0,s.H,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(125,0,null,0,20,"amexio-row",[],null,null,null,m._63,m.u)),e._2(126,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._3(128,0,null,0,16,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(129,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                            "])),(l()(),e._3(131,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e._25(-1,null,["To install this Amexio 4.x follow the steps given below:"])),(l()(),e._3(133,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                            "])),(l()(),e._3(135,0,null,0,2,"pre",[["style","font-weight: bold;color: #c0392b"]],null,null,null,null,null)),(l()(),e._3(136,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._25(-1,null,["npm install amexio-ng-extensions@latest --save"])),(l()(),e._25(-1,0,["\n                            Please make sure you have the latest version of\n                            "])),(l()(),e._3(139,0,null,0,1,"span",[["style","font-weight: bold;color: #21c00f"]],null,null,null,null,null)),(l()(),e._25(-1,null,["NodeJS & npm Angular CLI"])),(l()(),e._25(-1,0,["\n                            installed. "])),(l()(),e._3(142,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e._25(-1,null,["and then from your Angular AppModule:"])),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(147,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(149,0,null,0,12,"amexio-row",[],null,null,null,m._63,m.u)),e._2(150,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._3(152,0,null,0,8,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(153,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                            "])),(l()(),e._3(155,0,null,0,4,"div",[["style","height: 400px"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                              "])),(l()(),e.Y(16777216,null,null,1,null,g)),e._2(158,16384,null,0,o.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._25(-1,0,["\n\n                          "])),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._3(164,0,null,0,10,"amexio-tab",[["title","Modules"]],null,null,null,m._67,m.y)),e._2(165,114688,[[2,4]],0,s.H,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(167,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Amexio Library Consist of the following modules"])),(l()(),e._25(-1,0,["\n                        "])),(l()(),e.Y(16777216,null,0,1,null,x)),e._2(171,16384,null,0,o.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(173,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n\n                      "])),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._3(176,0,null,0,33,"amexio-tab",[["title","Services"]],null,null,null,m._67,m.y)),e._2(177,114688,[[2,4]],0,s.H,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(179,0,null,0,29,"div",[["style","height: 500px;overflow-x: auto;"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n\n\n                          "])),(l()(),e._3(181,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Amexio Provides the below services :"])),(l()(),e._25(-1,null,["\n\n                          "])),(l()(),e._3(184,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["IconService"])),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._3(187,0,null,null,3,"span",[["style","font-weight: bolder"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Change all amexio icons from font-awesome to material and vice versa in a single line of code by injecting the "])),(l()(),e._3(189,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._25(-1,null,["IconLoaderService"])),(l()(),e._25(-1,null,["\n                          "])),(l()(),e.Y(16777216,null,null,1,null,b)),e._2(193,16384,null,0,o.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._3(195,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._3(197,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["CommonDataService"])),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._3(200,0,null,null,4,"span",[["style","font-weight: bolder"]],null,null,null,null,null)),(l()(),e._25(-1,null,["By injecting "])),(l()(),e._3(202,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._25(-1,null,["CommonDataService"])),(l()(),e._25(-1,null,[" into to module, you could easly fetch data from Rest"])),(l()(),e._25(-1,null,["\n                          "])),(l()(),e.Y(16777216,null,null,1,null,f)),e._2(207,16384,null,0,o.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._3(213,0,null,0,43,"amexio-accordion-tab",[["expanded","true"],["header","Amexio 3.2.x - Angular 5 and Bootstrap 4"]],null,null,null,m._44,m.b)),e._2(214,49152,[[1,4]],0,s.b,[],{header:[0,"header"]},null),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(216,0,null,0,20,"amexio-row",[],null,null,null,m._63,m.u)),e._2(217,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._3(219,0,null,0,16,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(220,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(222,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e._25(-1,null,["To install this Amexio 3.2.x - Angular 5 and Bootstrap 4 follow the steps given below:"])),(l()(),e._3(224,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(226,0,null,0,2,"pre",[["style","font-weight: bold;color: #c0392b"]],null,null,null,null,null)),(l()(),e._3(227,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._25(-1,null,["npm install amexio-ng-extensions@3.2.1 --save"])),(l()(),e._25(-1,0,["\n                        Please make sure you have the latest version of\n                        "])),(l()(),e._3(230,0,null,0,1,"span",[["style","font-weight: bold;color: #21c00f"]],null,null,null,null,null)),(l()(),e._25(-1,null,["NodeJS & npm Angular CLI"])),(l()(),e._25(-1,0,["\n                        installed. "])),(l()(),e._3(233,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e._25(-1,null,["and then from your Angular AppModule:"])),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(238,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(240,0,null,0,9,"amexio-row",[],null,null,null,m._63,m.u)),e._2(241,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._3(243,0,null,0,5,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(244,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                        "])),(l()(),e.Y(16777216,null,0,1,null,y)),e._2(247,16384,null,0,o.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._25(-1,0,["\n\n                    "])),(l()(),e._3(251,0,null,0,4,"div",[["align","center"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                      "])),(l()(),e._3(253,0,null,null,1,"a",[["href","https://api.amexio.org/api/v3/index.html#/home"],["style","color: blueviolet"],["target","_blank"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Link for API for V3.2"])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,0,["\n\n                  "])),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._3(258,0,null,0,44,"amexio-accordion-tab",[["expanded","true"],["header","Amexio 3.0.x - Angular 4 and Bootstrap 4"]],null,null,null,m._44,m.b)),e._2(259,49152,[[1,4]],0,s.b,[],{header:[0,"header"]},null),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(261,0,null,0,20,"amexio-row",[],null,null,null,m._63,m.u)),e._2(262,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._3(264,0,null,0,16,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(265,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(267,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e._25(-1,null,["To install this Amexio 3.0.x - Angular 4 and Bootstrap 4 follow the steps given below:"])),(l()(),e._3(269,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(271,0,null,0,2,"pre",[["style","font-weight: bold;color: #c0392b"]],null,null,null,null,null)),(l()(),e._3(272,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._25(-1,null,["npm install amexio-ng-extensions@3.0.12 --save"])),(l()(),e._25(-1,0,["\n                        Please make sure you have the latest version of\n                        "])),(l()(),e._3(275,0,null,0,1,"span",[["style","font-weight: bold;color: #21c00f"]],null,null,null,null,null)),(l()(),e._25(-1,null,["NodeJS & npm Angular CLI"])),(l()(),e._25(-1,0,["\n                        installed. "])),(l()(),e._3(278,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e._25(-1,null,["and then from your Angular AppModule:"])),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._25(-1,0,["\n\n                    "])),(l()(),e._3(283,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(285,0,null,0,9,"amexio-row",[],null,null,null,m._63,m.u)),e._2(286,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._3(288,0,null,0,5,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(289,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                        "])),(l()(),e.Y(16777216,null,0,1,null,w)),e._2(292,16384,null,0,o.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(297,0,null,0,4,"div",[["align","center"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                      "])),(l()(),e._3(299,0,null,null,1,"a",[["href","https://api.amexio.org/api/v3/index.html#/home"],["style","color: blueviolet"],["target","_blank"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Link for API for V3.0.x"])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,0,["\n\n                  "])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,1,["\n\n\n          "])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n\n      "])),(l()(),e._3(310,0,null,null,84,"amexio-row",[],null,null,null,m._63,m.u)),e._2(311,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(313,0,null,0,80,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(314,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(316,0,null,0,76,"amexio-panel",[],null,null,null,m._116,m._21)),e._2(317,114688,null,0,s._55,[],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"]},null),(l()(),e._25(-1,1,["\n            "])),(l()(),e._3(319,0,null,1,1,"p",[["style","color: darkred"]],null,null,null,null,null)),(l()(),e._25(-1,null,[" Themes are available from Version 4 "])),(l()(),e._25(-1,1,["\n            "])),(l()(),e._3(322,0,null,1,8,"span",[],null,null,null,null,null)),(l()(),e._25(-1,null,["To use the default include the "])),(l()(),e._3(324,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e._3(325,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._25(-1,null,["../node_modules/amexio-ng-extensions/styles/mda/at-md-blue.scss"])),(l()(),e._25(-1,null,["in your app .angular-cli.json "])),(l()(),e._3(328,0,null,null,1,"code",[["style","font-weight: bolder"]],null,null,null,null,null)),(l()(),e._25(-1,null,["styles"])),(l()(),e._25(-1,null,[" key"])),(l()(),e._25(-1,1,["\n\n\n            "])),(l()(),e.Y(16777216,null,1,1,null,v)),e._2(333,16384,null,0,o.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,1,["\n\n            "])),(l()(),e._3(335,0,null,1,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Or refer the below table for other themes provided."])),(l()(),e._25(-1,1,["\n\n            "])),(l()(),e._3(338,0,null,1,29,"amexio-row",[],null,null,null,m._63,m.u)),e._2(339,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(341,0,null,0,25,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(342,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(344,0,null,0,21,"amexio-datagrid",[["title","Amexio Material Themes"]],null,null,null,m._117,m._22)),e._2(345,1425408,null,1,s._57,[s._1,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],height:[4,"height"],enabledatafilter:[5,"enabledatafilter"],enablecolumnfiter:[6,"enablecolumnfiter"]},null),e._23(603979776,8,{columnRef:1}),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(348,0,null,null,4,"amexio-data-table-column",[],null,null,null,m._118,m._23)),e._2(349,49152,[[8,4]],2,s._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,9,{headerTemplate:0}),e._23(335544320,10,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                                            "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(354,0,null,null,4,"amexio-data-table-column",[],null,null,null,m._118,m._23)),e._2(355,49152,[[8,4]],2,s._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,11,{headerTemplate:0}),e._23(335544320,12,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                                            "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(360,0,null,null,4,"amexio-data-table-column",[],null,null,null,m._118,m._23)),e._2(361,49152,[[8,4]],2,s._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,13,{headerTemplate:0}),e._23(335544320,14,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                                            "])),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,1,["\n\n            "])),(l()(),e._3(369,0,null,1,22,"amexio-row",[],null,null,null,m._63,m.u)),e._2(370,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(372,0,null,0,18,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(373,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(375,0,null,0,14,"amexio-datagrid",[["title","Amexio Themes"]],null,null,null,m._117,m._22)),e._2(376,1425408,null,1,s._57,[s._1,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],height:[4,"height"],enabledatafilter:[5,"enabledatafilter"],enablecolumnfiter:[6,"enablecolumnfiter"]},null),e._23(603979776,15,{columnRef:1}),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(379,0,null,null,4,"amexio-data-table-column",[],null,null,null,m._118,m._23)),e._2(380,49152,[[15,4]],2,s._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,16,{headerTemplate:0}),e._23(335544320,17,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(385,0,null,null,3,"amexio-data-table-column",[],null,null,null,m._118,m._23)),e._2(386,49152,[[15,4]],2,s._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,18,{headerTemplate:0}),e._23(335544320,19,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,1,["\n          "])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n\n      "])),(l()(),e._3(396,0,null,null,22,"amexio-row",[],null,null,null,m._63,m.u)),e._2(397,1163264,null,0,s.D,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(399,0,null,0,18,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,m._50,m.h)),e._2(400,114688,null,0,s.i,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(402,0,null,0,14,"amexio-panel",[],null,null,null,m._116,m._21)),e._2(403,114688,null,0,s._55,[],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"]},null),(l()(),e._25(-1,1,["\n            "])),(l()(),e._3(405,0,null,1,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,1,["\n            "])),(l()(),e._3(407,0,null,1,1,"b",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Amexio API License for Standard & Enterprise Edition"])),(l()(),e._25(-1,1,["\n            "])),(l()(),e._3(410,0,null,1,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n              Amexio API is Free & Open Source & based on Apache 2 License. A Permissive License whose main condition\n              require preservation of copyright and license notices.\n              Contributors provide an express grant of patent rights. Licensed works, modification and larger works may\n              be distributed under different terms and without source code.\n            "])),(l()(),e._25(-1,1,["\n            "])),(l()(),e._3(413,0,null,1,2,"p",[],null,null,null,null,null)),(l()(),e._3(414,0,null,null,1,"a",[["href","http://amexio.org/showcaseapp/v4/license.html"],["style","color: blue"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Click here to read the Apache\n              2 License. "])),(l()(),e._25(-1,1,["\n          "])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n\n\n  "]))],function(l,n){var u=n.component;l(n,4,0),l(n,7,0,"12"),l(n,14,0,"https://image.ibb.co/kdy6Ev/logo.png"),l(n,25,0,"assets/images/npm.svg"),l(n,28,0,"https://badge.fury.io/js/amexio-ng-extensions.svg"),l(n,33,0,"https://img.shields.io/npm/dt/amexio-ng-extensions.svg"),l(n,42,0),l(n,45,0,"12"),l(n,48,0,"true"),l(n,51,0),l(n,55,0),l(n,58,0),l(n,61,0,"12"),l(n,69,0),l(n,72,0,"12"),l(n,80,0),l(n,83,0,"12"),l(n,97,0),l(n,100,0,"12"),l(n,103,0,"Installation Details",!0,!0),l(n,106,0),l(n,109,0,"12"),l(n,112,0),l(n,116,0,"Amexio 4.x - Angular 5","true"),l(n,119,0),l(n,123,0,"Installation","true"),l(n,126,0),l(n,129,0,"12"),l(n,150,0),l(n,153,0,"12"),l(n,158,0,u.tsCode),l(n,165,0,"Modules"),l(n,171,0,u.modulesData),l(n,177,0,"Services"),l(n,193,0,u.iconCode),l(n,207,0,u.dataCode),l(n,214,0,"Amexio 3.2.x - Angular 5 and Bootstrap 4"),l(n,217,0),l(n,220,0,"12"),l(n,241,0),l(n,244,0,"12"),l(n,247,0,u.tsCodeV32),l(n,259,0,"Amexio 3.0.x - Angular 4 and Bootstrap 4"),l(n,262,0),l(n,265,0,"12"),l(n,286,0),l(n,289,0,"12"),l(n,292,0,u.tsCodeV32),l(n,311,0),l(n,314,0,"12"),l(n,317,0,"Themes",!0,!0),l(n,333,0,u.styleCode),l(n,339,0),l(n,342,0,"12"),l(n,345,0,"Amexio Material Themes","assets/apireference/modules/themes.json","get","properties",300,!1,!1),l(n,349,0,"Theme Name","name",!1,"string",15),l(n,355,0,"Version","version",!1,"string",15),l(n,361,0,"Path","description",!1,"string",60),l(n,370,0),l(n,373,0,"12"),l(n,376,0,"Amexio Themes","assets/apireference/modules/amx_themes.json","get","properties",300,!1,!1),l(n,380,0,"Theme Name","name",!1,"string",15),l(n,386,0,"Path","description",!1,"string",65),l(n,397,0),l(n,400,0,"12"),l(n,403,0,"License",!0,!0)},function(l,n){l(n,6,0,e._16(n,7).colclass),l(n,44,0,e._16(n,45).colclass),l(n,60,0,e._16(n,61).colclass),l(n,71,0,e._16(n,72).colclass),l(n,82,0,e._16(n,83).colclass),l(n,99,0,e._16(n,100).colclass),l(n,108,0,e._16(n,109).colclass),l(n,128,0,e._16(n,129).colclass),l(n,152,0,e._16(n,153).colclass),l(n,219,0,e._16(n,220).colclass),l(n,243,0,e._16(n,244).colclass),l(n,264,0,e._16(n,265).colclass),l(n,288,0,e._16(n,289).colclass),l(n,313,0,e._16(n,314).colclass),l(n,341,0,e._16(n,342).colclass),l(n,372,0,e._16(n,373).colclass),l(n,399,0,e._16(n,400).colclass)})}function A(l){return e._27(0,[(l()(),e._3(0,0,null,null,1,"getting-started",[],null,null,null,z,p)),e._2(1,49152,null,0,_,[t.c],null,null)],null,null)}var T=e.Z("getting-started",_,A,{},{},[])}});