webpackJsonp([29],{"28HZ":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){this.copyMsgArray=[],this.htmlCode="\n  <amexio-menubar\n       [httpUrl]=\"'assets/data/menus/menubarexample.json'\"\n       [httpMethod]=\"'get'\"\n       [dataReader]=\"'data'\" >\n  </amexio-menubar>\n    ",this.tsCode="import { Component, OnInit } from '@angular/core';\n\n@Component({\n selector: 'menubar-demo',\n templateUrl: 'simplemenubar.demo.html'\n})\n\nexport class SimpleMenuBarDemoComponent implements OnInit {\n  constructor() {\n  }\n ngOnInit() { }\n}\n    ",this.dataSource='\n{\n  "data":[\n    {\n      "text": "HOME",\n      "icon" : "fa fa-home"\n    },\n    {\n      "text": "ELECTRONICS",\n      "icon" : "fa fa-simplybuilt",\n      "childrens": [\n        {\n          "text": "Accessories",\n          "icon" : "fa fa-sitemap",\n          "childrens": [\n            {\n              "text": "Mobile",\n              "icon" : "fa fa-mobile",\n              "childrens": [\n\n                {\n                  "text": "Powerbank",\n                  "icon" : "fa fa-hdd-o"\n                },\n                {\n                  "text": "Headphone",\n                  "icon" : "fa fa-headphones"\n                }\n              ]\n            },\n            {\n              "text": "Laptops",\n              "icon" : "fa fa-laptop",\n              "childrens": [\n                {\n                  "text": "Bag" ,\n                  "icon" : "fa fa-briefcase"\n                },\n                {\n                  "text": "Charger",\n                  "icon" : "fa fa-plug"\n                },\n                {\n                  "text": "Harddrive",\n                  "icon" : "fa fa-hdd-o"\n                }\n              ]\n            }\n          ]\n        },\n        {\n          "text": "Camera",\n          "icon" : "fa fa-camera",\n          "childrens": [\n            {\n              "text": "DSLR",\n              "icon" : "fa fa-camera-retro"\n            },\n            {\n              "text": "Digital",\n              "icon" : "fa fa-camera"\n            },\n            {\n              "text": "Camcorder",\n              "icon" : "fa fa-camera-retro"\n            }\n          ]\n        },\n        {\n          "text": "Mobile",\n          "icon" : "fa fa-mobile",\n          "header": true,\n          "childrens": [\n            {\n              "text": "Samsung",\n              "icon" : "fa fa-building"\n            },\n            {\n              "text": "Lenovo",\n              "icon" : "fa fa-mobile"\n            },\n            {\n              "text": "Motorolo",\n              "icon" : "fa fa-building"\n\n            },\n            {\n              "text": "Apple",\n              "icon" : "fa fa-apple"\n\n            },\n            {\n              "text": "Asus",\n              "icon" : "fa fa-mobile"\n            }\n          ]\n        }\n\n      ]\n    },\n    {\n      "text": "APPLIANCE",\n      "icon" : "fa fa-sitemap",\n      "childrens": [\n        {\n          "text": "TV",\n          "icon" : "fa fa-desktop",\n          "childrens": [\n            {\n              "text": "Sony",\n              "icon" : "fa fa-television"\n            },\n            {\n              "text": "Samsung",\n              "icon" : "fa fa-television"\n            },\n            {\n              "text": "Toshiba",\n              "icon" : "fa fa-television"\n            },\n            {\n              "text": "LG",\n              "icon" : "fa fa-laptop"\n            },\n            {\n              "text": "Cloudwalker",\n              "icon" : "fa fa-desktop"\n            }\n          ]\n        },\n        {\n          "text": "Refrigerator",\n          "icon" : "fa fa-building",\n          "childrens": [\n            {\n              "text": "Singledoor",\n              "icon" : "fa fa-building-o"\n            },\n            {\n              "text": "Doubledoor",\n              "icon" : "fa fa-building-o"\n            },\n            {\n              "text": "Tripledoor",\n              "icon" : "fa fa-building-o"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n\n\n    '}return n.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}()},ICzE:function(n,l,e){"use strict";var t=e("28HZ"),a=e("waH/"),u=(e.n(a),e("tqEy"));e.n(u);e.d(l,"a",function(){return o});var o=(t.a,function(){function n(){}return n}());t.a},XZvO:function(n,l,e){"use strict";function t(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,97,"amexio-card-pane",[],null,null,null,o.a,o.b)),u["ɵdid"](4308992,null,0,d.CardComponent,[],{enableFooter:[0,"enableFooter"]},null),(n()(),u["ɵted"](null,["\n  "])),(n()(),u["ɵeld"](0,null,0,5,"amexio-pane-header",[],null,null,null,o.c,o.d)),u["ɵdid"](114688,null,0,d.PaneHeaderComponent,[],null,null),(n()(),u["ɵted"](0,["\n    "])),(n()(),u["ɵeld"](0,null,0,1,"h1",[["class","page-header"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["Menu Bar Component"])),(n()(),u["ɵted"](0,["\n  "])),(n()(),u["ɵted"](null,["\n  "])),(n()(),u["ɵeld"](0,null,1,86,"amexio-pane-body",[],null,null,null,o.e,o.f)),u["ɵdid"](114688,null,0,d.PaneBodyComponent,[],null,null),(n()(),u["ɵted"](0,["\n    "])),(n()(),u["ɵeld"](0,null,0,1,"p",[],null,null,null,null,null)),(n()(),u["ɵted"](null,["The Menu Bar component is a familiar menu navigation pattern for users. Menu Bar can be placed on top or bottom. It can fit as many navigation links as needed. Take a look at Datastructure format which this component can consume in datasource tab."])),(n()(),u["ɵted"](0,["\n    "])),(n()(),u["ɵeld"](0,null,0,79,"amexio-tab-pane",[],null,null,null,o.g,o.h)),u["ɵdid"](5357568,null,1,d.TabPaneComponent,[],null,null),u["ɵqud"](603979776,1,{queryTabs:1}),(n()(),u["ɵted"](0,["\n      "])),(n()(),u["ɵeld"](0,null,0,16,"amexio-tab",[["title","Demo"]],null,null,null,o.i,o.j)),u["ɵdid"](114688,[[1,4]],0,d.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(n()(),u["ɵted"](0,["\n        "])),(n()(),u["ɵeld"](0,null,0,12,"div",[],null,null,null,null,null)),(n()(),u["ɵted"](null,["\n          "])),(n()(),u["ɵeld"](0,null,null,9,"div",[["style","padding-top: 5%"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["\n            "])),(n()(),u["ɵeld"](0,null,null,6,"amexio-menubar",[],null,null,null,o._18,o._19)),u["ɵprd"](512,null,d.CommonHttpService,d.CommonHttpService,[i.Http]),u["ɵdid"](4308992,null,3,d.NavbarComponent,[i.Http,d.CommonHttpService],{httpUrl:[0,"httpUrl"],httpMethod:[1,"httpMethod"],dataReader:[2,"dataReader"]},null),u["ɵqud"](335544320,2,{headerTemplate:0}),u["ɵqud"](335544320,3,{childTemplate:0}),u["ɵqud"](335544320,4,{subMenuTemplate:0}),(n()(),u["ɵted"](null,["\n            "])),(n()(),u["ɵted"](null,["\n          "])),(n()(),u["ɵted"](null,["\n        "])),(n()(),u["ɵted"](0,["\n      "])),(n()(),u["ɵted"](0,["\n      "])),(n()(),u["ɵeld"](0,null,0,6,"amexio-tab",[["title","API Reference"]],null,null,null,o.i,o.j)),u["ɵdid"](114688,[[1,4]],0,d.TabComponent,[],{title:[0,"title"]},null),(n()(),u["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(n()(),u["ɵted"](0,["\n        "])),(n()(),u["ɵeld"](0,null,0,1,"menubar-api",[],null,null,null,r.a,r.b)),u["ɵdid"](114688,null,0,c.a,[],null,null),(n()(),u["ɵted"](0,["\n      "])),(n()(),u["ɵted"](0,["\n      "])),(n()(),u["ɵeld"](0,null,0,37,"amexio-tab",[["title","Source"]],null,null,null,o.i,o.j)),u["ɵdid"](114688,[[1,4]],0,d.TabComponent,[],{title:[0,"title"]},null),(n()(),u["ɵted"](0,["\n        "])),(n()(),u["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(n()(),u["ɵted"](0,["\n        "])),(n()(),u["ɵeld"](0,null,0,31,"amexio-vertical-left-tab-pane",[],null,null,null,o.m,o.n)),u["ɵdid"](5357568,null,1,d.VerticalLeftTabPaneComponent,[],null,null),u["ɵqud"](603979776,5,{queryTabs:1}),(n()(),u["ɵted"](0,["\n          "])),(n()(),u["ɵeld"](0,null,0,12,"amexio-tab",[["title","Markup"]],null,null,null,o.i,o.j)),u["ɵdid"](114688,[[5,4]],0,d.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(n()(),u["ɵted"](0,["\n            "])),(n()(),u["ɵeld"](0,null,0,8,"div",[["style","width: 800px; overflow-y: scroll"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["\n              "])),(n()(),u["ɵted"](null,["\n              "])),(n()(),u["ɵeld"](0,null,null,1,"clip-copy",[],null,[[null,"onClick"]],function(n,l,e){var t=!0,a=n.component;if("onClick"===l){t=!1!==a.onCopyClick()&&t}return t},m.a,m.b)),u["ɵdid"](114688,null,0,s.a,[],{htmlCode:[0,"htmlCode"]},{onClick:"onClick"}),(n()(),u["ɵted"](null,["\n\n              "])),(n()(),u["ɵeld"](0,null,null,1,"prism-block",[],null,null,null,f.a,f.b)),u["ɵdid"](4243456,null,0,b.a,[u.Renderer2,u.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(n()(),u["ɵted"](null,["\n            "])),(n()(),u["ɵted"](0,["\n\n          "])),(n()(),u["ɵted"](0,["\n          "])),(n()(),u["ɵeld"](0,null,0,5,"amexio-tab",[["title","TypeScript"]],null,null,null,o.i,o.j)),u["ɵdid"](114688,[[5,4]],0,d.TabComponent,[],{title:[0,"title"]},null),(n()(),u["ɵted"](0,["\n\n              "])),(n()(),u["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,f.a,f.b)),u["ɵdid"](4243456,null,0,b.a,[u.Renderer2,u.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(n()(),u["ɵted"](0,["\n\n          "])),(n()(),u["ɵted"](0,["\n          "])),(n()(),u["ɵeld"](0,null,0,5,"amexio-tab",[["title","Data Store"]],null,null,null,o.i,o.j)),u["ɵdid"](114688,[[5,4]],0,d.TabComponent,[],{title:[0,"title"]},null),(n()(),u["ɵted"](0,["\n\n              "])),(n()(),u["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,f.a,f.b)),u["ɵdid"](4243456,null,0,b.a,[u.Renderer2,u.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(n()(),u["ɵted"](0,["\n\n          "])),(n()(),u["ɵted"](0,["\n        "])),(n()(),u["ɵted"](0,["\n      "])),(n()(),u["ɵted"](0,["\n      "])),(n()(),u["ɵeld"](0,null,0,9,"amexio-tab",[["title","Plunker"]],null,null,null,o.i,o.j)),u["ɵdid"](114688,[[1,4]],0,d.TabComponent,[],{title:[0,"title"]},null),(n()(),u["ɵted"](0,["\n        "])),(n()(),u["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(n()(),u["ɵted"](0,["\n        "])),(n()(),u["ɵeld"](0,null,0,1,"p",[["class","text-md-center text-primary"]],null,null,null,null,null)),(n()(),u["ɵted"](null,["Amexio Sandbox"])),(n()(),u["ɵted"](0,["\n        "])),(n()(),u["ɵeld"](0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://embed.plnkr.co/cdDajThtPxBdlMOEz5fy/"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(n()(),u["ɵted"](0,["\n      "])),(n()(),u["ɵted"](0,["\n    "])),(n()(),u["ɵted"](0,["\n  "])),(n()(),u["ɵted"](null,["\n"])),(n()(),u["ɵted"](null,["\n\n"])),(n()(),u["ɵeld"](0,null,null,1,"amexio-notification",[],null,null,null,o.o,o.p)),u["ɵdid"](114688,null,0,d.NotifyComponent,[u.ChangeDetectorRef],{messageData:[0,"messageData"]},null),(n()(),u["ɵted"](null,["\n"]))],function(n,l){var e=l.component;n(l,1,0,!1),n(l,4,0),n(l,11,0),n(l,17,0);n(l,21,0,"Demo",!0);n(l,29,0,"assets/data/menus/menubarexample.json","get","data");n(l,39,0,"API Reference"),n(l,43,0);n(l,47,0,"Source"),n(l,52,0);n(l,56,0,"Markup",!0),n(l,62,0,e.htmlCode);n(l,65,0,e.htmlCode,"html");n(l,70,0,"TypeScript");n(l,73,0,e.tsCode,"typescript");n(l,77,0,"Data Store");n(l,80,0,e.dataSource,"json");n(l,86,0,"Plunker"),n(l,100,0,e.copyMsgArray)},null)}function a(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"menubar-demo",[],null,null,null,t,x)),u["ɵdid"](114688,null,0,p.a,[],null,null)],function(n,l){n(l,1,0)},null)}var u=e("/oeL"),o=e("Mspa"),d=e("k8FD"),i=(e.n(d),e("CPp0")),r=e("DZz/"),c=e("rJU4"),p=e("28HZ"),m=e("8mzU"),s=e("repp"),f=e("l0f3"),b=e("FMBD");e.d(l,"a",function(){return C});var h=[],x=u["ɵcrt"]({encapsulation:2,styles:h,data:{}}),C=u["ɵccf"]("menubar-demo",p.a,a,{},{},[])},nv0d:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("/oeL"),a=e("ICzE"),u=e("XZvO"),o=e("qbdv"),d=e("bm2B"),i=e("CPp0"),r=e("0QKF"),c=e("fc+i"),p=e("Ahuc"),m=e("BkNc"),s=e("k8FD"),f=(e.n(s),e("kL+h")),b=e("28HZ");e.d(l,"SimpleMenuBarModuleNgFactory",function(){return h});var h=t["ɵcmf"](a.a,[],function(n){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[u.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[t.LOCALE_ID]),t["ɵmpd"](4608,d["ɵi"],d["ɵi"],[]),t["ɵmpd"](4608,i.BrowserXhr,i.BrowserXhr,[]),t["ɵmpd"](4608,i.ResponseOptions,i.BaseResponseOptions,[]),t["ɵmpd"](5120,i.XSRFStrategy,i["ɵb"],[]),t["ɵmpd"](4608,i.XHRBackend,i.XHRBackend,[i.BrowserXhr,i.ResponseOptions,i.XSRFStrategy]),t["ɵmpd"](4608,i.RequestOptions,i.BaseRequestOptions,[]),t["ɵmpd"](5120,i.Http,i["ɵc"],[i.XHRBackend,i.RequestOptions]),t["ɵmpd"](4608,r.a,r.a,[c.u]),t["ɵmpd"](4608,p.a,p.a,[c.b]),t["ɵmpd"](512,o.CommonModule,o.CommonModule,[]),t["ɵmpd"](512,m.x,m.x,[[2,m.m],[2,m.c]]),t["ɵmpd"](512,d["ɵba"],d["ɵba"],[]),t["ɵmpd"](512,d.FormsModule,d.FormsModule,[]),t["ɵmpd"](512,i.HttpModule,i.HttpModule,[]),t["ɵmpd"](512,s.AmexioWidgetModule,s.AmexioWidgetModule,[]),t["ɵmpd"](512,f.a,f.a,[]),t["ɵmpd"](512,a.a,a.a,[]),t["ɵmpd"](1024,m.t,function(){return[[{path:"",component:b.a}]]},[])])})}});