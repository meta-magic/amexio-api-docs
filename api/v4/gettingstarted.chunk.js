webpackJsonp(["gettingstarted"],{dya2:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("LMZF"),t=u("9iV4"),_=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n=this;this.http.get("assets/data/code/gettingstated/gettingstated.text",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){n.tsCode=l}),this.http.get("assets/data/code/gettingstated/icon.text",{responseType:"text"}).subscribe(function(l){n.iconCode=l}),this.http.get("assets/data/code/gettingstated/data.text",{responseType:"text"}).subscribe(function(l){n.dataCode=l}),this.http.get("assets/data/code/gettingstated/style.text",{responseType:"text"}).subscribe(function(l){n.styleCode=l}),this.http.get("assets/apireference/modules/modules.json").subscribe(function(l){n.modulesData=l.properties.sort(function(l,n){return l.name<n.name?-1:l.name>n.name?1:0})}),this.http.get("assets/data/code/gettingstated/gettingstatedv32.text",{responseType:"text"}).subscribe(function(l){n.tsCodeV32=l}),this.http.get("assets/data/code/gettingstated/gettingstatedv1x.text",{responseType:"text"}).subscribe(function(l){n.tsCodeV1x=l})},l}(),a=function(){},o=u("tfJK"),i=u("Un6q"),s=u("0nO6"),d=u("drlO"),r=u("kL+h"),c=u("UHIZ"),m=u("KhCp");u.d(n,"GettingStatedModuleNgFactory",function(){return h}),u.d(n,"RenderType_GettingStatedDemo",function(){return p}),n.View_GettingStatedDemo_0=z,n.View_GettingStatedDemo_Host_0=j,u.d(n,"GettingStatedDemoNgFactory",function(){return A});var h=e._0(a,[],function(l){return e._12([e._13(512,e.j,e.W,[[8,[o.a,A]],[3,e.j],e.v]),e._13(4608,i.n,i.m,[e.s,[2,i.u]]),e._13(4608,s.s,s.s,[]),e._13(4608,t.h,t.m,[i.c,e.z,t.k]),e._13(4608,t.n,t.n,[t.h,t.l]),e._13(5120,t.a,function(l){return[l]},[t.n]),e._13(4608,t.j,t.j,[]),e._13(6144,t.i,null,[t.j]),e._13(4608,t.g,t.g,[t.i]),e._13(6144,t.b,null,[t.g]),e._13(5120,t.f,t.o,[t.b,[2,t.a]]),e._13(4608,t.c,t.c,[t.f]),e._13(4608,d._5,d._5,[t.c]),e._13(4608,d._15,d._15,[e.z]),e._13(4608,d._22,d._22,[]),e._13(4608,d._40,d._40,[]),e._13(512,i.b,i.b,[]),e._13(512,s.p,s.p,[]),e._13(512,s.e,s.e,[]),e._13(512,t.e,t.e,[]),e._13(512,t.d,t.d,[]),e._13(512,d.v,d.v,[]),e._13(512,d.t,d.t,[]),e._13(512,d.y,d.y,[]),e._13(512,d.A,d.A,[]),e._13(512,d.D,d.D,[]),e._13(512,d.l,d.l,[]),e._13(512,d.Q,d.Q,[]),e._13(512,r.b,r.b,[]),e._13(512,c.n,c.n,[[2,c.s],[2,c.m]]),e._13(512,a,a,[]),e._13(256,t.k,"XSRF-TOKEN",[]),e._13(256,t.l,"X-XSRF-TOKEN",[]),e._13(1024,c.i,function(){return[[{path:"",component:_,pathMatch:"full"}]]},[])])}),p=e._1({encapsulation:2,styles:[],data:{}});function g(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                                "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,m.b,m.a)),e._2(3,4243456,null,0,r.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                              "]))],function(l,n){l(n,3,0,n.component.tsCode,"typescript")},null)}function x(l){return e._27(0,[(l()(),e._3(0,0,null,null,17,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._3(2,0,null,null,14,"amexio-datagrid",[["title",""]],null,null,null,o._135,o._32)),e._2(3,1425408,null,1,d._66,[d._5,e.h],{title:[0,"title"],data:[1,"data"],height:[2,"height"],enabledatafilter:[3,"enabledatafilter"],enablecolumnfiter:[4,"enablecolumnfiter"]},null),e._23(603979776,7,{columnRef:1}),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(6,0,null,null,4,"amexio-data-table-column",[],null,null,null,o._136,o._33)),e._2(7,49152,[[7,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,8,{headerTemplate:0}),e._23(335544320,9,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(12,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),e._2(13,49152,[[7,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,10,{headerTemplate:0}),e._23(335544320,11,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._25(-1,null,["\n                        "]))],function(l,n){l(n,3,0,"",n.component.modulesData,300,!1,!1),l(n,7,0,"Module Name","name",!1,"string",25),l(n,13,0,"Description","description",!1,"string",65)},null)}function b(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,m.b,m.a)),e._2(3,4243456,null,0,r.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                          "]))],function(l,n){l(n,3,0,n.component.iconCode,"typescript")},null)}function f(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,m.b,m.a)),e._2(3,4243456,null,0,r.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                          "]))],function(l,n){l(n,3,0,n.component.dataCode,"typescript")},null)}function w(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,m.b,m.a)),e._2(3,4243456,null,0,r.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                        "]))],function(l,n){l(n,3,0,n.component.tsCodeV32,"typescript")},null)}function y(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,m.b,m.a)),e._2(3,4243456,null,0,r.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                        "]))],function(l,n){l(n,3,0,n.component.tsCodeV32,"typescript")},null)}function v(l){return e._27(0,[(l()(),e._3(0,0,null,null,7,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(2,0,null,null,4,"div",[["style","max-height: 300px;overflow-y: scroll;"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                "])),(l()(),e._3(4,0,null,null,1,"prism-block",[],null,null,null,m.b,m.a)),e._2(5,4243456,null,0,r.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n              "])),(l()(),e._25(-1,null,["\n\n            "]))],function(l,n){l(n,5,0,n.component.styleCode,"json")},null)}function z(l){return e._27(0,[(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(1,0,null,null,429,"div",[["style","padding-left: 10px;padding-right: 10px;"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(3,0,null,null,43,"amexio-row",[],null,null,null,o._73,o.w)),e._2(4,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(6,0,null,0,39,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(7,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(9,0,null,0,33,"div",[["align","center"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(11,0,null,null,15,"div",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(13,0,null,null,4,"a",[["href","http://www.amexio.tech/"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(15,0,null,null,1,"amexio-image",[["path","https://image.ibb.co/kdy6Ev/logo.png"]],null,null,null,o._128,o._25)),e._2(16,114688,null,0,d._54,[],{path:[0,"path"],width:[1,"width"],height:[2,"height"]},null),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(19,0,null,null,0,"iframe",[["align","right"],["allowfullscreen",""],["frameborder","0"],["height","270"],["src","https://www.youtube.com/embed/videoseries?list=PLi505KVOMPrGRUgJF4C3QoXbrhFGEOI4j&hl=en_US"],["width","560"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(21,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(23,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n\n            "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(28,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Amexio Angular EXtensions v4.3"])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(31,0,null,null,1,"amexio-image",[["path","assets/images/npm.svg"]],null,null,null,o._128,o._25)),e._2(32,114688,null,0,d._54,[],{path:[0,"path"],width:[1,"width"],height:[2,"height"]},null),(l()(),e._25(-1,null,["\n\n                    "])),(l()(),e._3(34,0,null,null,1,"amexio-image",[["path","https://badge.fury.io/js/amexio-ng-extensions.svg"]],null,null,null,o._128,o._25)),e._2(35,114688,null,0,d._54,[],{path:[0,"path"],width:[1,"width"],height:[2,"height"]},null),(l()(),e._25(-1,null,["\n\n                    "])),(l()(),e._3(37,0,null,null,4,"a",[["href","https://badge.fury.io/js/amexio-ng-extensions"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                      "])),(l()(),e._3(39,0,null,null,1,"amexio-image",[["path","https://img.shields.io/npm/dt/amexio-ng-extensions.svg"]],null,null,null,o._128,o._25)),e._2(40,114688,null,0,d._54,[],{path:[0,"path"],width:[1,"width"],height:[2,"height"]},null),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(44,0,null,0,0,"hr",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(48,0,null,null,54,"amexio-row",[],null,null,null,o._73,o.w)),e._2(49,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(51,0,null,0,50,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(52,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(54,0,null,0,46,"amexio-card",[["header","true"]],null,null,null,o._58,o.h)),e._2(55,5357568,null,3,d.g,[],{header:[0,"header"]},null),e._23(603979776,1,{amexioHeader:1}),e._23(603979776,2,{amexioBody:1}),e._23(603979776,3,{amexioFooter:1}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(60,0,null,0,2,"amexio-header",[],null,null,null,o._67,o.q)),e._2(61,114688,[[1,4]],0,d.u,[],null,null),(l()(),e._25(-1,0,["\n              Table Of Contents\n            "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(64,0,null,1,35,"amexio-body",[],null,null,null,o._54,o.d)),e._2(65,114688,[[2,4]],0,d.c,[],null,null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(67,0,null,0,9,"amexio-row",[],null,null,null,o._73,o.w)),e._2(68,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(70,0,null,0,5,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(71,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._3(73,0,null,0,1,"span",[["style","cursor: pointer"]],null,null,null,null,null)),(l()(),e._25(-1,null,["1. Installation Details"])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(78,0,null,0,9,"amexio-row",[],null,null,null,o._73,o.w)),e._2(79,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(81,0,null,0,5,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(82,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._3(84,0,null,0,1,"span",[["style","cursor: pointer;"]],null,null,null,null,null)),(l()(),e._25(-1,null,["2. Themes"])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(89,0,null,0,9,"amexio-row",[],null,null,null,o._73,o.w)),e._2(90,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(92,0,null,0,5,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(93,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._3(95,0,null,0,1,"span",[["style","cursor: pointer;"]],null,null,null,null,null)),(l()(),e._25(-1,null,["3. License"])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n\n            "])),(l()(),e._25(-1,null,["\n          "])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(104,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(106,0,null,null,213,"amexio-row",[],null,null,null,o._73,o.w)),e._2(107,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(109,0,null,0,209,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(110,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(112,0,null,0,205,"amexio-panel",[],null,null,null,o._134,o._31)),e._2(113,114688,null,0,d._64,[],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"]},null),(l()(),e._25(-1,1,["\n            "])),(l()(),e._3(115,0,null,1,201,"amexio-row",[],null,null,null,o._73,o.w)),e._2(116,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(118,0,null,0,197,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(119,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(121,0,null,0,193,"amexio-accordion",[],null,null,null,o._52,o.b)),e._2(122,1163264,null,1,d.a,[],null,null),e._23(603979776,4,{queryTabs:1}),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._3(125,0,null,0,97,"amexio-accordion-tab",[["active","true"],["header","Amexio 4.x - Angular 5"]],null,null,null,o._53,o.c)),e._2(126,49152,[[4,4]],0,d.b,[],{header:[0,"header"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(128,16777216,null,0,93,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,u){var t=!0;return"document:click"===n&&(t=!1!==e._16(l,129).onWindowClick()&&t),"document:scroll"===n&&(t=!1!==e._16(l,129).onscroll()&&t),t},o._77,o.A)),e._2(129,5357568,null,2,d.J,[e.B,e.j,e.M],null,null),e._23(603979776,5,{queryTabs:1}),e._23(603979776,6,{queryAction:1}),(l()(),e._25(-1,1,["\n                      "])),(l()(),e._3(133,0,null,1,40,"amexio-tab",[["active","true"],["title"," Installation"]],null,null,null,o._78,o.B)),e._2(134,114688,[[5,4]],0,d.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(136,0,null,0,20,"amexio-row",[],null,null,null,o._73,o.w)),e._2(137,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._3(139,0,null,0,16,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(140,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                            "])),(l()(),e._3(142,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e._25(-1,null,["To install this Amexio 4.x follow the steps given below:"])),(l()(),e._3(144,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                            "])),(l()(),e._3(146,0,null,0,2,"pre",[["style","font-weight: bold;color: #c0392b"]],null,null,null,null,null)),(l()(),e._3(147,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._25(-1,null,["npm install amexio-ng-extensions@latest --save"])),(l()(),e._25(-1,0,["\n                            Please make sure you have the latest version of\n                            "])),(l()(),e._3(150,0,null,0,1,"span",[["style","font-weight: bold;color: #21c00f"]],null,null,null,null,null)),(l()(),e._25(-1,null,["NodeJS & npm Angular CLI"])),(l()(),e._25(-1,0,["\n                            installed. "])),(l()(),e._3(153,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e._25(-1,null,["and then from your Angular AppModule:"])),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(158,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(160,0,null,0,12,"amexio-row",[],null,null,null,o._73,o.w)),e._2(161,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._3(163,0,null,0,8,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(164,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                            "])),(l()(),e._3(166,0,null,0,4,"div",[["style","height: 400px"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                              "])),(l()(),e.Y(16777216,null,null,1,null,g)),e._2(169,16384,null,0,i.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._25(-1,0,["\n\n                          "])),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._25(-1,1,["\n                      "])),(l()(),e._3(175,0,null,1,10,"amexio-tab",[["title","Modules"]],null,null,null,o._78,o.B)),e._2(176,114688,[[5,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(178,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Amexio Library Consist of the following modules"])),(l()(),e._25(-1,0,["\n                        "])),(l()(),e.Y(16777216,null,0,1,null,x)),e._2(182,16384,null,0,i.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(184,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n\n                      "])),(l()(),e._25(-1,1,["\n                      "])),(l()(),e._3(187,0,null,1,33,"amexio-tab",[["title","Services"]],null,null,null,o._78,o.B)),e._2(188,114688,[[5,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(190,0,null,0,29,"div",[["style","height: 500px;overflow-x: auto;"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n\n\n                          "])),(l()(),e._3(192,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Amexio Provides the below services :"])),(l()(),e._25(-1,null,["\n\n                          "])),(l()(),e._3(195,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["IconService"])),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._3(198,0,null,null,3,"span",[["style","font-weight: bolder"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Change all amexio icons from font-awesome to material and vice versa in a single line of code by injecting the "])),(l()(),e._3(200,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._25(-1,null,["IconLoaderService"])),(l()(),e._25(-1,null,["\n                          "])),(l()(),e.Y(16777216,null,null,1,null,b)),e._2(204,16384,null,0,i.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._3(206,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._3(208,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e._25(-1,null,["CommonDataService"])),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._3(211,0,null,null,4,"span",[["style","font-weight: bolder"]],null,null,null,null,null)),(l()(),e._25(-1,null,["By injecting "])),(l()(),e._3(213,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._25(-1,null,["CommonDataService"])),(l()(),e._25(-1,null,[" into to module, you could easly fetch data from Rest"])),(l()(),e._25(-1,null,["\n                          "])),(l()(),e.Y(16777216,null,null,1,null,f)),e._2(218,16384,null,0,i.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,null,["\n                        "])),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._25(-1,1,["\n                    "])),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._3(224,0,null,0,43,"amexio-accordion-tab",[["expanded","true"],["header","Amexio 3.2.x - Angular 5 and Bootstrap 4"]],null,null,null,o._53,o.c)),e._2(225,49152,[[4,4]],0,d.b,[],{header:[0,"header"]},null),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(227,0,null,0,20,"amexio-row",[],null,null,null,o._73,o.w)),e._2(228,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._3(230,0,null,0,16,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(231,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(233,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e._25(-1,null,["To install this Amexio 3.2.x - Angular 5 and Bootstrap 4 follow the steps given below:"])),(l()(),e._3(235,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(237,0,null,0,2,"pre",[["style","font-weight: bold;color: #c0392b"]],null,null,null,null,null)),(l()(),e._3(238,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._25(-1,null,["npm install amexio-ng-extensions@3.2.1 --save"])),(l()(),e._25(-1,0,["\n                        Please make sure you have the latest version of\n                        "])),(l()(),e._3(241,0,null,0,1,"span",[["style","font-weight: bold;color: #21c00f"]],null,null,null,null,null)),(l()(),e._25(-1,null,["NodeJS & npm Angular CLI"])),(l()(),e._25(-1,0,["\n                        installed. "])),(l()(),e._3(244,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e._25(-1,null,["and then from your Angular AppModule:"])),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(249,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(251,0,null,0,9,"amexio-row",[],null,null,null,o._73,o.w)),e._2(252,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._3(254,0,null,0,5,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(255,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                        "])),(l()(),e.Y(16777216,null,0,1,null,w)),e._2(258,16384,null,0,i.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._25(-1,0,["\n\n                    "])),(l()(),e._3(262,0,null,0,4,"div",[["align","center"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                      "])),(l()(),e._3(264,0,null,null,1,"a",[["href","../v3/index.html#/home"],["style","color: blueviolet"],["target","_blank"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Link for API for V3.2"])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,0,["\n\n                  "])),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._3(269,0,null,0,44,"amexio-accordion-tab",[["expanded","true"],["header","Amexio 3.0.x - Angular 4 and Bootstrap 4"]],null,null,null,o._53,o.c)),e._2(270,49152,[[4,4]],0,d.b,[],{header:[0,"header"]},null),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(272,0,null,0,20,"amexio-row",[],null,null,null,o._73,o.w)),e._2(273,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._3(275,0,null,0,16,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(276,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(278,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e._25(-1,null,["To install this Amexio 3.0.x - Angular 4 and Bootstrap 4 follow the steps given below:"])),(l()(),e._3(280,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._3(282,0,null,0,2,"pre",[["style","font-weight: bold;color: #c0392b"]],null,null,null,null,null)),(l()(),e._3(283,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._25(-1,null,["npm install amexio-ng-extensions@3.0.12 --save"])),(l()(),e._25(-1,0,["\n                        Please make sure you have the latest version of\n                        "])),(l()(),e._3(286,0,null,0,1,"span",[["style","font-weight: bold;color: #21c00f"]],null,null,null,null,null)),(l()(),e._25(-1,null,["NodeJS & npm Angular CLI"])),(l()(),e._25(-1,0,["\n                        installed. "])),(l()(),e._3(289,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e._25(-1,null,["and then from your Angular AppModule:"])),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._25(-1,0,["\n\n                    "])),(l()(),e._3(294,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(296,0,null,0,9,"amexio-row",[],null,null,null,o._73,o.w)),e._2(297,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._3(299,0,null,0,5,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(300,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                        "])),(l()(),e.Y(16777216,null,0,1,null,y)),e._2(303,16384,null,0,i.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n                      "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(308,0,null,0,4,"div",[["align","center"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                      "])),(l()(),e._3(310,0,null,null,1,"a",[["href","../v3/index.html#/home"],["style","color: blueviolet"],["target","_blank"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Link for API for V3.0.x"])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,0,["\n\n                  "])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,1,["\n\n\n          "])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n\n      "])),(l()(),e._3(321,0,null,null,84,"amexio-row",[],null,null,null,o._73,o.w)),e._2(322,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(324,0,null,0,80,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(325,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(327,0,null,0,76,"amexio-panel",[],null,null,null,o._134,o._31)),e._2(328,114688,null,0,d._64,[],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"]},null),(l()(),e._25(-1,1,["\n            "])),(l()(),e._3(330,0,null,1,1,"p",[["style","color: darkred"]],null,null,null,null,null)),(l()(),e._25(-1,null,[" Themes are available from Version 4 "])),(l()(),e._25(-1,1,["\n            "])),(l()(),e._3(333,0,null,1,8,"span",[],null,null,null,null,null)),(l()(),e._25(-1,null,["To use the default include the "])),(l()(),e._3(335,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e._3(336,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._25(-1,null,["../node_modules/amexio-ng-extensions/styles/css/at-md-blue.css"])),(l()(),e._25(-1,null,["in your app .angular-cli.json "])),(l()(),e._3(339,0,null,null,1,"code",[["style","font-weight: bolder"]],null,null,null,null,null)),(l()(),e._25(-1,null,["styles"])),(l()(),e._25(-1,null,[" key"])),(l()(),e._25(-1,1,["\n\n\n            "])),(l()(),e.Y(16777216,null,1,1,null,v)),e._2(344,16384,null,0,i.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,1,["\n\n            "])),(l()(),e._3(346,0,null,1,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Or refer the below table for other themes provided."])),(l()(),e._25(-1,1,["\n\n            "])),(l()(),e._3(349,0,null,1,29,"amexio-row",[],null,null,null,o._73,o.w)),e._2(350,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(352,0,null,0,25,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(353,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(355,0,null,0,21,"amexio-datagrid",[["title","Amexio Material Themes"]],null,null,null,o._135,o._32)),e._2(356,1425408,null,1,d._66,[d._5,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],height:[4,"height"],enabledatafilter:[5,"enabledatafilter"],enablecolumnfiter:[6,"enablecolumnfiter"]},null),e._23(603979776,12,{columnRef:1}),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(359,0,null,null,4,"amexio-data-table-column",[],null,null,null,o._136,o._33)),e._2(360,49152,[[12,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,13,{headerTemplate:0}),e._23(335544320,14,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                                            "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(365,0,null,null,4,"amexio-data-table-column",[],null,null,null,o._136,o._33)),e._2(366,49152,[[12,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,15,{headerTemplate:0}),e._23(335544320,16,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                                            "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(371,0,null,null,4,"amexio-data-table-column",[],null,null,null,o._136,o._33)),e._2(372,49152,[[12,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,17,{headerTemplate:0}),e._23(335544320,18,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                                            "])),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,1,["\n\n            "])),(l()(),e._3(380,0,null,1,22,"amexio-row",[],null,null,null,o._73,o.w)),e._2(381,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(383,0,null,0,18,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(384,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(386,0,null,0,14,"amexio-datagrid",[["title","Amexio Themes"]],null,null,null,o._135,o._32)),e._2(387,1425408,null,1,d._66,[d._5,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],height:[4,"height"],enabledatafilter:[5,"enabledatafilter"],enablecolumnfiter:[6,"enablecolumnfiter"]},null),e._23(603979776,19,{columnRef:1}),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(390,0,null,null,4,"amexio-data-table-column",[],null,null,null,o._136,o._33)),e._2(391,49152,[[19,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,20,{headerTemplate:0}),e._23(335544320,21,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(396,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),e._2(397,49152,[[19,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,22,{headerTemplate:0}),e._23(335544320,23,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,1,["\n          "])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n\n      "])),(l()(),e._3(407,0,null,null,22,"amexio-row",[],null,null,null,o._73,o.w)),e._2(408,1163264,null,0,d.F,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(410,0,null,0,18,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),e._2(411,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(413,0,null,0,14,"amexio-panel",[],null,null,null,o._134,o._31)),e._2(414,114688,null,0,d._64,[],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"]},null),(l()(),e._25(-1,1,["\n            "])),(l()(),e._3(416,0,null,1,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,1,["\n            "])),(l()(),e._3(418,0,null,1,1,"b",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Amexio API License for Standard & Enterprise Edition"])),(l()(),e._25(-1,1,["\n            "])),(l()(),e._3(421,0,null,1,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["\n              Amexio API is Free & Open Source & based on Apache 2 License. A Permissive License whose main condition\n              require preservation of copyright and license notices.\n              Contributors provide an express grant of patent rights. Licensed works, modification and larger works may\n              be distributed under different terms and without source code.\n            "])),(l()(),e._25(-1,1,["\n            "])),(l()(),e._3(424,0,null,1,2,"p",[],null,null,null,null,null)),(l()(),e._3(425,0,null,null,1,"a",[["href","https://api.amexio.org/api/license.html"],["style","color: blue"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Click here to read the Apache\n              2 License. "])),(l()(),e._25(-1,1,["\n          "])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n\n\n  "]))],function(l,n){var u=n.component;l(n,4,0),l(n,7,0,"12"),l(n,16,0,"https://image.ibb.co/kdy6Ev/logo.png",150,200),l(n,32,0,"assets/images/npm.svg",50,50),l(n,35,0,"https://badge.fury.io/js/amexio-ng-extensions.svg",50,50),l(n,40,0,"https://img.shields.io/npm/dt/amexio-ng-extensions.svg",50,50),l(n,49,0),l(n,52,0,"12"),l(n,55,0,"true"),l(n,61,0),l(n,65,0),l(n,68,0),l(n,71,0,"12"),l(n,79,0),l(n,82,0,"12"),l(n,90,0),l(n,93,0,"12"),l(n,107,0),l(n,110,0,"12"),l(n,113,0,"1. Installation Details",!0,!0),l(n,116,0),l(n,119,0,"12"),l(n,122,0),l(n,126,0,"Amexio 4.x - Angular 5","true"),l(n,129,0),l(n,134,0," Installation","true"),l(n,137,0),l(n,140,0,"12"),l(n,161,0),l(n,164,0,"12"),l(n,169,0,u.tsCode),l(n,176,0,"Modules"),l(n,182,0,u.modulesData),l(n,188,0,"Services"),l(n,204,0,u.iconCode),l(n,218,0,u.dataCode),l(n,225,0,"Amexio 3.2.x - Angular 5 and Bootstrap 4"),l(n,228,0),l(n,231,0,"12"),l(n,252,0),l(n,255,0,"12"),l(n,258,0,u.tsCodeV32),l(n,270,0,"Amexio 3.0.x - Angular 4 and Bootstrap 4"),l(n,273,0),l(n,276,0,"12"),l(n,297,0),l(n,300,0,"12"),l(n,303,0,u.tsCodeV32),l(n,322,0),l(n,325,0,"12"),l(n,328,0,"2. Themes",!0,!0),l(n,344,0,u.styleCode),l(n,350,0),l(n,353,0,"12"),l(n,356,0,"Amexio Material Themes","assets/apireference/modules/themes.json","get","properties",300,!1,!1),l(n,360,0,"Theme Name","name",!1,"string",15),l(n,366,0,"Version","version",!1,"string",15),l(n,372,0,"Path","description",!1,"string",60),l(n,381,0),l(n,384,0,"12"),l(n,387,0,"Amexio Themes","assets/apireference/modules/amx_themes.json","get","properties",300,!1,!1),l(n,391,0,"Theme Name","name",!1,"string",15),l(n,397,0,"Path","description",!1,"string",65),l(n,408,0),l(n,411,0,"12"),l(n,414,0,"3. License",!0,!0)},function(l,n){l(n,6,0,e._16(n,7).colclass),l(n,51,0,e._16(n,52).colclass),l(n,70,0,e._16(n,71).colclass),l(n,81,0,e._16(n,82).colclass),l(n,92,0,e._16(n,93).colclass),l(n,109,0,e._16(n,110).colclass),l(n,118,0,e._16(n,119).colclass),l(n,139,0,e._16(n,140).colclass),l(n,163,0,e._16(n,164).colclass),l(n,230,0,e._16(n,231).colclass),l(n,254,0,e._16(n,255).colclass),l(n,275,0,e._16(n,276).colclass),l(n,299,0,e._16(n,300).colclass),l(n,324,0,e._16(n,325).colclass),l(n,352,0,e._16(n,353).colclass),l(n,383,0,e._16(n,384).colclass),l(n,410,0,e._16(n,411).colclass)})}function j(l){return e._27(0,[(l()(),e._3(0,0,null,null,1,"getting-started",[],null,null,null,z,p)),e._2(1,49152,null,0,_,[t.c],null,null)],null,null)}var A=e.Z("getting-started",_,j,{},{},[])}});