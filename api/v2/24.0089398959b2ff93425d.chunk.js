webpackJsonp([24],{"4jp7":function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("/oeL"),o=e("AujL"),a=e("ioY4"),u=e("qbdv"),i=e("bm2B"),d=e("CPp0"),r=e("BkNc"),s=e("k8FD"),m=(e.n(s),e("kL+h")),c=e("CqsP");e.d(l,"SideMenuBarModuleNgFactory",function(){return p});var p=t["ɵcmf"](o.a,[],function(n){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[a.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,u.NgLocalization,u.NgLocaleLocalization,[t.LOCALE_ID]),t["ɵmpd"](4608,i["ɵi"],i["ɵi"],[]),t["ɵmpd"](4608,d.BrowserXhr,d.BrowserXhr,[]),t["ɵmpd"](4608,d.ResponseOptions,d.BaseResponseOptions,[]),t["ɵmpd"](5120,d.XSRFStrategy,d["ɵb"],[]),t["ɵmpd"](4608,d.XHRBackend,d.XHRBackend,[d.BrowserXhr,d.ResponseOptions,d.XSRFStrategy]),t["ɵmpd"](4608,d.RequestOptions,d.BaseRequestOptions,[]),t["ɵmpd"](5120,d.Http,d["ɵc"],[d.XHRBackend,d.RequestOptions]),t["ɵmpd"](512,u.CommonModule,u.CommonModule,[]),t["ɵmpd"](512,r.x,r.x,[[2,r.m],[2,r.c]]),t["ɵmpd"](512,i["ɵba"],i["ɵba"],[]),t["ɵmpd"](512,i.FormsModule,i.FormsModule,[]),t["ɵmpd"](512,d.HttpModule,d.HttpModule,[]),t["ɵmpd"](512,s.AmexioWidgetModule,s.AmexioWidgetModule,[]),t["ɵmpd"](512,m.a,m.a,[]),t["ɵmpd"](512,o.a,o.a,[]),t["ɵmpd"](1024,r.t,function(){return[[{path:"",component:c.a}]]},[])])})},AujL:function(n,l,e){"use strict";var t=e("waH/"),o=(e.n(t),e("tqEy")),a=(e.n(o),e("CqsP"));e.d(l,"a",function(){return u});var u=(a.a,function(){function n(){}return n}());a.a},CqsP:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){this.flag=!1,this.htmlCode='\n<amexio-btn [label]="\'Demo Example\'" [type]="\'default\'" [tooltipMessage]="\'Demo Example\'" (click)="toggle()"> </amexio-btn>\n\n<amexio-window-pane [(showWindow)]="flag" [title]="\'Menu Bar Bottom\'" [closable]="true">\n          <amexio-pane-body>\n            <form style="height: 300px">\n            <amexio-menubar\n              [httpUrl]="\'assets/data/menus/menubarexample.json\'"\n              [httpMethod]="\'get\'"\n              [dataReader]="\'data\'" [bottom]="true">\n            </amexio-menubar>\n            </form>\n          </amexio-pane-body>\n</amexio-window-pane>',this.tsCode="\n    \nimport {Component, OnInit} from '@angular/core';\n\n@Component({\n  selector: 'side-menubar-demo',\n  templateUrl: 'sidemenubar.demo.html'\n})\nexport class SideMenuBarDemoComponent implements OnInit {\n\n  flag : boolean;\n\n  constructor() {\n    this.flag=false;\n  }\n  ngOnInit() {}\n  \n  toggle(){\n    this.flag = !this.flag;\n  }  \n}       \n    \n    ",this.dataSource='\n{\n  "data":[\n    {\n      "text": "HOME",\n      "icon" : "fa fa-home"\n    },\n    {\n      "text": "ELECTRONICS",\n      "icon" : "fa fa-simplybuilt",\n      "childrens": [\n        {\n          "text": "Accessories",\n          "icon" : "fa fa-sitemap",\n          "childrens": [\n            {\n              "text": "Mobile",\n              "icon" : "fa fa-mobile",\n              "childrens": [\n\n                {\n                  "text": "Powerbank",\n                  "icon" : "fa fa-hdd-o"\n                },\n                {\n                  "text": "Headphone",\n                  "icon" : "fa fa-headphones"\n                }\n              ]\n            },\n            {\n              "text": "Laptops",\n              "icon" : "fa fa-laptop",\n              "childrens": [\n                {\n                  "text": "Bag" ,\n                  "icon" : "fa fa-briefcase"\n                },\n                {\n                  "text": "Charger",\n                  "icon" : "fa fa-plug"\n                },\n                {\n                  "text": "Harddrive",\n                  "icon" : "fa fa-hdd-o"\n                }\n              ]\n            }\n          ]\n        },\n        {\n          "text": "Camera",\n          "icon" : "fa fa-camera",\n          "childrens": [\n            {\n              "text": "DSLR",\n              "icon" : "fa fa-camera-retro"\n            },\n            {\n              "text": "Digital",\n              "icon" : "fa fa-camera"\n            },\n            {\n              "text": "Camcorder",\n              "icon" : "fa fa-camera-retro"\n            }\n          ]\n        },\n        {\n          "text": "Mobile",\n          "icon" : "fa fa-mobile",\n          "header": true,\n          "childrens": [\n            {\n              "text": "Samsung",\n              "icon" : "fa fa-building"\n            },\n            {\n              "text": "Lenovo",\n              "icon" : "fa fa-mobile"\n            },\n            {\n              "text": "Motorolo",\n              "icon" : "fa fa-building"\n\n            },\n            {\n              "text": "Apple",\n              "icon" : "fa fa-apple"\n\n            },\n            {\n              "text": "Asus",\n              "icon" : "fa fa-mobile"\n            }\n          ]\n        }\n\n      ]\n    },\n    {\n      "text": "APPLIANCE",\n      "icon" : "fa fa-sitemap",\n      "childrens": [\n        {\n          "text": "TV",\n          "icon" : "fa fa-desktop",\n          "childrens": [\n            {\n              "text": "Sony",\n              "icon" : "fa fa-television"\n            },\n            {\n              "text": "Samsung",\n              "icon" : "fa fa-television"\n            },\n            {\n              "text": "Toshiba",\n              "icon" : "fa fa-television"\n            },\n            {\n              "text": "LG",\n              "icon" : "fa fa-laptop"\n            },\n            {\n              "text": "Cloudwalker",\n              "icon" : "fa fa-desktop"\n            }\n          ]\n        },\n        {\n          "text": "Refrigerator",\n          "icon" : "fa fa-building",\n          "childrens": [\n            {\n              "text": "Singledoor",\n              "icon" : "fa fa-building-o"\n            },\n            {\n              "text": "Doubledoor",\n              "icon" : "fa fa-building-o"\n            },\n            {\n              "text": "Tripledoor",\n              "icon" : "fa fa-building-o"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n\n\n    '}return n.prototype.toggle=function(){this.flag=!this.flag},n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}()},ioY4:function(n,l,e){"use strict";function t(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,null,null,99,"amexio-card-pane",[],null,null,null,u.a,u.b)),a["ɵdid"](4308992,null,0,i.CardComponent,[],{enableFooter:[0,"enableFooter"]},null),(n()(),a["ɵted"](null,["\n  "])),(n()(),a["ɵeld"](0,null,0,5,"amexio-pane-header",[],null,null,null,u.c,u.d)),a["ɵdid"](114688,null,0,i.PaneHeaderComponent,[],null,null),(n()(),a["ɵted"](0,["\n    "])),(n()(),a["ɵeld"](0,null,0,1,"h1",[["class","page-header"]],null,null,null,null,null)),(n()(),a["ɵted"](null,["Side Menu Bar Component"])),(n()(),a["ɵted"](0,["\n  "])),(n()(),a["ɵted"](null,["\n  "])),(n()(),a["ɵeld"](0,null,1,88,"amexio-pane-body",[],null,null,null,u.e,u.f)),a["ɵdid"](114688,null,0,i.PaneBodyComponent,[],null,null),(n()(),a["ɵted"](0,["\n    "])),(n()(),a["ɵeld"](0,null,0,1,"p",[],null,null,null,null,null)),(n()(),a["ɵted"](null,["The Side Menu Bar Component is a familiar side navigation pattern for users. Side menu bar can be placed on left or right side. It can fit as many navigation links as needed, scrolling when the content exceeds the viewport. Take a look at Datastructure format which this component can consume in datasource tab."])),(n()(),a["ɵted"](0,["\n    "])),(n()(),a["ɵeld"](0,null,0,81,"amexio-tab-pane",[],null,null,null,u.g,u.h)),a["ɵdid"](5357568,null,1,i.TabPaneComponent,[],null,null),a["ɵqud"](603979776,1,{queryTabs:1}),(n()(),a["ɵted"](0,["\n      "])),(n()(),a["ɵeld"](0,null,0,33,"amexio-tab",[["title","Demo"]],null,null,null,u.i,u.j)),a["ɵdid"](114688,[[1,4]],0,i.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(n()(),a["ɵted"](0,["\n        "])),(n()(),a["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(n()(),a["ɵted"](0,["\n          "])),(n()(),a["ɵeld"](0,null,0,2,"amexio-btn",[],null,[[null,"click"]],function(n,l,e){var t=!0,o=n.component;if("click"===l){t=!1!==o.toggle()&&t}return t},u.w,u.x)),a["ɵdid"](4833280,null,0,i.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"]},null),(n()(),a["ɵted"](null,[" "])),(n()(),a["ɵted"](0,["\n        "])),(n()(),a["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(n()(),a["ɵted"](0,["\n        "])),(n()(),a["ɵeld"](0,null,0,21,"amexio-window-pane",[],null,[[null,"showWindowChange"]],function(n,l,e){var t=!0,o=n.component;if("showWindowChange"===l){t=!1!==(o.flag=e)&&t}return t},u._4,u._5)),a["ɵdid"](4308992,null,0,i.WindowPaneComponent,[],{title:[0,"title"],closable:[1,"closable"],showWindow:[2,"showWindow"]},{showWindowChange:"showWindowChange"}),(n()(),a["ɵted"](null,["\n          "])),(n()(),a["ɵeld"](0,null,0,17,"amexio-pane-body",[],null,null,null,u.e,u.f)),a["ɵdid"](114688,null,0,i.PaneBodyComponent,[],null,null),(n()(),a["ɵted"](0,["\n            "])),(n()(),a["ɵeld"](0,null,0,13,"form",[["novalidate",""],["style","height: 400px"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var t=!0;if("submit"===l){t=!1!==a["ɵnov"](n,39).onSubmit(e)&&t}if("reset"===l){t=!1!==a["ɵnov"](n,39).onReset()&&t}return t},null,null)),a["ɵdid"](16384,null,0,r["ɵbf"],[],null,null),a["ɵdid"](16384,null,0,r.NgForm,[[8,null],[8,null]],null,null),a["ɵprd"](2048,null,r.ControlContainer,null,[r.NgForm]),a["ɵdid"](16384,null,0,r.NgControlStatusGroup,[r.ControlContainer],null,null),(n()(),a["ɵted"](null,["\n\n              "])),(n()(),a["ɵeld"](0,null,null,6,"amexio-sidemenubar",[],null,null,null,u._6,u._7)),a["ɵprd"](512,null,i.CommonHttpService,i.CommonHttpService,[s.Http]),a["ɵdid"](4308992,null,3,i.SideNavBarComponent,[s.Http,i.CommonHttpService,a.ChangeDetectorRef],{httpUrl:[0,"httpUrl"],httpMethod:[1,"httpMethod"],dataReader:[2,"dataReader"],expanded:[3,"expanded"],filter:[4,"filter"],width:[5,"width"]},null),a["ɵqud"](335544320,2,{headerTemplate:0}),a["ɵqud"](335544320,3,{childTemplate:0}),a["ɵqud"](335544320,4,{subMenuTemplate:0}),(n()(),a["ɵted"](null,["\n              "])),(n()(),a["ɵted"](null,["\n            "])),(n()(),a["ɵted"](0,["\n          "])),(n()(),a["ɵted"](null,["\n        "])),(n()(),a["ɵted"](0,["\n\n      "])),(n()(),a["ɵted"](0,["\n\n      "])),(n()(),a["ɵeld"](0,null,0,6,"amexio-tab",[["title","API Reference"]],null,null,null,u.i,u.j)),a["ɵdid"](114688,[[1,4]],0,i.TabComponent,[],{title:[0,"title"]},null),(n()(),a["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(n()(),a["ɵted"](0,["\n        "])),(n()(),a["ɵeld"](0,null,0,1,"menubar-api",[],null,null,null,m.a,m.b)),a["ɵdid"](114688,null,0,c.a,[],null,null),(n()(),a["ɵted"](0,["\n      "])),(n()(),a["ɵted"](0,["\n      "])),(n()(),a["ɵeld"](0,null,0,33,"amexio-tab",[["title","Source"]],null,null,null,u.i,u.j)),a["ɵdid"](114688,[[1,4]],0,i.TabComponent,[],{title:[0,"title"]},null),(n()(),a["ɵted"](0,["\n        "])),(n()(),a["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(n()(),a["ɵted"](0,["\n        "])),(n()(),a["ɵeld"](0,null,0,27,"amexio-vertical-left-tab-pane",[],null,null,null,u.k,u.l)),a["ɵdid"](5357568,null,1,i.VerticalLeftTabPaneComponent,[],null,null),a["ɵqud"](603979776,5,{queryTabs:1}),(n()(),a["ɵted"](0,["\n          "])),(n()(),a["ɵeld"](0,null,0,8,"amexio-tab",[["title","Markup"]],null,null,null,u.i,u.j)),a["ɵdid"](114688,[[5,4]],0,i.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(n()(),a["ɵted"](0,["\n            "])),(n()(),a["ɵeld"](0,null,0,4,"div",[["style","width: 800px; overflow-y: scroll"]],null,null,null,null,null)),(n()(),a["ɵted"](null,["\n              "])),(n()(),a["ɵeld"](0,null,null,1,"prism-block",[],null,null,null,p.a,p.b)),a["ɵdid"](4243456,null,0,f.a,[a.Renderer2,a.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(n()(),a["ɵted"](null,["\n            "])),(n()(),a["ɵted"](0,["\n\n          "])),(n()(),a["ɵted"](0,["\n          "])),(n()(),a["ɵeld"](0,null,0,5,"amexio-tab",[["title","TypeScript"]],null,null,null,u.i,u.j)),a["ɵdid"](114688,[[5,4]],0,i.TabComponent,[],{title:[0,"title"]},null),(n()(),a["ɵted"](0,["\n\n              "])),(n()(),a["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,p.a,p.b)),a["ɵdid"](4243456,null,0,f.a,[a.Renderer2,a.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(n()(),a["ɵted"](0,["\n\n          "])),(n()(),a["ɵted"](0,["\n          "])),(n()(),a["ɵeld"](0,null,0,5,"amexio-tab",[["title","Data Store"]],null,null,null,u.i,u.j)),a["ɵdid"](114688,[[5,4]],0,i.TabComponent,[],{title:[0,"title"]},null),(n()(),a["ɵted"](0,["\n\n              "])),(n()(),a["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,p.a,p.b)),a["ɵdid"](4243456,null,0,f.a,[a.Renderer2,a.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(n()(),a["ɵted"](0,["\n\n          "])),(n()(),a["ɵted"](0,["\n        "])),(n()(),a["ɵted"](0,["\n      "])),(n()(),a["ɵted"](0,["\n    "])),(n()(),a["ɵted"](0,["\n  "])),(n()(),a["ɵted"](null,["\n"])),(n()(),a["ɵted"](null,["\n\n\n"]))],function(n,l){var e=l.component;n(l,1,0,!1),n(l,4,0),n(l,11,0),n(l,17,0);n(l,21,0,"Demo",!0);n(l,26,0,"Demo Example","default","Demo Example");n(l,32,0,"Side Menu Bar",!0,e.flag),n(l,35,0);n(l,45,0,"assets/data/menus/menubarexample.json","get","data",!1,!0,"50%");n(l,56,0,"API Reference"),n(l,60,0);n(l,64,0,"Source"),n(l,69,0);n(l,73,0,"Markup",!0);n(l,78,0,e.htmlCode,"html");n(l,83,0,"TypeScript");n(l,86,0,e.tsCode,"typescript");n(l,90,0,"Data Store");n(l,93,0,e.dataSource,"json")},function(n,l){n(l,37,0,a["ɵnov"](l,41).ngClassUntouched,a["ɵnov"](l,41).ngClassTouched,a["ɵnov"](l,41).ngClassPristine,a["ɵnov"](l,41).ngClassDirty,a["ɵnov"](l,41).ngClassValid,a["ɵnov"](l,41).ngClassInvalid,a["ɵnov"](l,41).ngClassPending)})}function o(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,null,null,1,"side-menubar-demo",[],null,null,null,t,b)),a["ɵdid"](114688,null,0,d.a,[],null,null)],function(n,l){n(l,1,0)},null)}var a=e("/oeL"),u=e("Mspa"),i=e("k8FD"),d=(e.n(i),e("CqsP")),r=e("bm2B"),s=e("CPp0"),m=e("DZz/"),c=e("rJU4"),p=e("l0f3"),f=e("FMBD");e.d(l,"a",function(){return h});var g=[],b=a["ɵcrt"]({encapsulation:2,styles:g,data:{}}),h=a["ɵccf"]("side-menubar-demo",d.a,o,{},{},[])}});