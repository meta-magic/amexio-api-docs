webpackJsonp([25],{"27IZ":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){this.copyMsgArray=[],this.flag=!1,this.htmlCode=' \n<amexio-btn [label]="\'Demo Example\'" [type]="\'default\'" [tooltipMessage]="\'Demo Example\'" (click)="toggle()"> </amexio-btn>\n\n<amexio-window-pane [(showWindow)]="flag" [title]="\'Side Menu Bar with Template\'" [closable]="true">\n          <amexio-pane-body>\n            <form style="height: 300px">\n           <amexio-sidemenubar\n                [httpUrl]="\'assets/data/menus/menubarexample.json\'"\n                [httpMethod]="\'get\'"\n                [dataReader]="\'data\'" [width]="\'50%\'">\n                <ng-template #amexioNavHeaderTmpl  let-navHeader="navHeader">\n                  <span [attr.class]="navHeader.icon"></span>&nbsp;{{navHeader.text}}\n                </ng-template>\n                <ng-template #amexioMenuHeaderTmpl  let-menuHeader="menuHeader">\n                  <span [attr.class]="menuHeader.icon"></span>&nbsp;{{menuHeader.text}}\n                </ng-template>\n                <ng-template #amexioSubMenuTmpl  let-subMenus="subMenus">\n                  <span [attr.class]="subMenus.icon"></span>&nbsp;{{subMenus.text}}\n                </ng-template>\n           </amexio-sidemenubar>\n            </form>\n          </amexio-pane-body>\n        </amexio-window-pane>',this.tsCode="\n    \nimport {Component, OnInit} from '@angular/core';\n\n@Component({\n  selector: 'side-menubar-temp-demo',\n  templateUrl: 'sidemenubartemp.demo.html'\n})\nexport class SideMenuBarTempDemoComponent implements OnInit {\n\n  flag : boolean;\n\n  constructor() {\n    this.flag=false;\n  }\n  ngOnInit() {}\n  \n  toggle(){\n    this.flag = !this.flag;\n  }  \n}       \n    \n    ",this.dataSource='\n{\n  "data":[\n    {\n      "text": "HOME",\n      "icon" : "fa fa-home"\n    },\n    {\n      "text": "ELECTRONICS",\n      "icon" : "fa fa-simplybuilt",\n      "childrens": [\n        {\n          "text": "Accessories",\n          "icon" : "fa fa-sitemap",\n          "childrens": [\n            {\n              "text": "Mobile",\n              "icon" : "fa fa-mobile",\n              "childrens": [\n\n                {\n                  "text": "Powerbank",\n                  "icon" : "fa fa-hdd-o"\n                },\n                {\n                  "text": "Headphone",\n                  "icon" : "fa fa-headphones"\n                }\n              ]\n            },\n            {\n              "text": "Laptops",\n              "icon" : "fa fa-laptop",\n              "childrens": [\n                {\n                  "text": "Bag" ,\n                  "icon" : "fa fa-briefcase"\n                },\n                {\n                  "text": "Charger",\n                  "icon" : "fa fa-plug"\n                },\n                {\n                  "text": "Harddrive",\n                  "icon" : "fa fa-hdd-o"\n                }\n              ]\n            }\n          ]\n        },\n        {\n          "text": "Camera",\n          "icon" : "fa fa-camera",\n          "childrens": [\n            {\n              "text": "DSLR",\n              "icon" : "fa fa-camera-retro"\n            },\n            {\n              "text": "Digital",\n              "icon" : "fa fa-camera"\n            },\n            {\n              "text": "Camcorder",\n              "icon" : "fa fa-camera-retro"\n            }\n          ]\n        },\n        {\n          "text": "Mobile",\n          "icon" : "fa fa-mobile",\n          "header": true,\n          "childrens": [\n            {\n              "text": "Samsung",\n              "icon" : "fa fa-building"\n            },\n            {\n              "text": "Lenovo",\n              "icon" : "fa fa-mobile"\n            },\n            {\n              "text": "Motorolo",\n              "icon" : "fa fa-building"\n\n            },\n            {\n              "text": "Apple",\n              "icon" : "fa fa-apple"\n\n            },\n            {\n              "text": "Asus",\n              "icon" : "fa fa-mobile"\n            }\n          ]\n        }\n\n      ]\n    },\n    {\n      "text": "APPLIANCE",\n      "icon" : "fa fa-sitemap",\n      "childrens": [\n        {\n          "text": "TV",\n          "icon" : "fa fa-desktop",\n          "childrens": [\n            {\n              "text": "Sony",\n              "icon" : "fa fa-television"\n            },\n            {\n              "text": "Samsung",\n              "icon" : "fa fa-television"\n            },\n            {\n              "text": "Toshiba",\n              "icon" : "fa fa-television"\n            },\n            {\n              "text": "LG",\n              "icon" : "fa fa-laptop"\n            },\n            {\n              "text": "Cloudwalker",\n              "icon" : "fa fa-desktop"\n            }\n          ]\n        },\n        {\n          "text": "Refrigerator",\n          "icon" : "fa fa-building",\n          "childrens": [\n            {\n              "text": "Singledoor",\n              "icon" : "fa fa-building-o"\n            },\n            {\n              "text": "Doubledoor",\n              "icon" : "fa fa-building-o"\n            },\n            {\n              "text": "Tripledoor",\n              "icon" : "fa fa-building-o"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n\n\n'}return n.prototype.toggle=function(){this.flag=!this.flag},n.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}()},"35Kk":function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("/oeL"),a=e("h3r1"),u=e("yZHs"),o=e("qbdv"),i=e("bm2B"),d=e("CPp0"),r=e("0QKF"),s=e("fc+i"),m=e("Ahuc"),p=e("BkNc"),c=e("k8FD"),f=(e.n(c),e("kL+h")),g=e("27IZ");e.d(l,"SideMenuBarTempModuleNgFactory",function(){return b});var b=t["ɵcmf"](a.a,[],function(n){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[u.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[t.LOCALE_ID]),t["ɵmpd"](4608,i["ɵi"],i["ɵi"],[]),t["ɵmpd"](4608,d.BrowserXhr,d.BrowserXhr,[]),t["ɵmpd"](4608,d.ResponseOptions,d.BaseResponseOptions,[]),t["ɵmpd"](5120,d.XSRFStrategy,d["ɵb"],[]),t["ɵmpd"](4608,d.XHRBackend,d.XHRBackend,[d.BrowserXhr,d.ResponseOptions,d.XSRFStrategy]),t["ɵmpd"](4608,d.RequestOptions,d.BaseRequestOptions,[]),t["ɵmpd"](5120,d.Http,d["ɵc"],[d.XHRBackend,d.RequestOptions]),t["ɵmpd"](4608,r.a,r.a,[s.u]),t["ɵmpd"](4608,m.a,m.a,[s.b]),t["ɵmpd"](512,o.CommonModule,o.CommonModule,[]),t["ɵmpd"](512,p.x,p.x,[[2,p.m],[2,p.c]]),t["ɵmpd"](512,i["ɵba"],i["ɵba"],[]),t["ɵmpd"](512,i.FormsModule,i.FormsModule,[]),t["ɵmpd"](512,d.HttpModule,d.HttpModule,[]),t["ɵmpd"](512,c.AmexioWidgetModule,c.AmexioWidgetModule,[]),t["ɵmpd"](512,f.a,f.a,[]),t["ɵmpd"](512,a.a,a.a,[]),t["ɵmpd"](1024,p.t,function(){return[[{path:"",component:g.a}]]},[])])})},h3r1:function(n,l,e){"use strict";var t=e("waH/"),a=(e.n(t),e("tqEy")),u=(e.n(a),e("27IZ"));e.d(l,"a",function(){return o});var o=(u.a,function(){function n(){}return n}());u.a},yZHs:function(n,l,e){"use strict";function t(n){return d["ɵvid"](0,[(n()(),d["ɵted"](null,["\n                  "])),(n()(),d["ɵeld"](0,null,null,0,"span",[],[[1,"class",0]],null,null,null,null)),(n()(),d["ɵted"](null,[" ","\n                "]))],null,function(n,l){n(l,1,0,l.context.navHeader.icon),n(l,2,0,l.context.navHeader.text)})}function a(n){return d["ɵvid"](0,[(n()(),d["ɵted"](null,["\n                  "])),(n()(),d["ɵeld"](0,null,null,0,"span",[],[[1,"class",0]],null,null,null,null)),(n()(),d["ɵted"](null,[" ","\n                "]))],null,function(n,l){n(l,1,0,l.context.menuHeader.icon),n(l,2,0,l.context.menuHeader.text)})}function u(n){return d["ɵvid"](0,[(n()(),d["ɵted"](null,["\n                  "])),(n()(),d["ɵeld"](0,null,null,0,"span",[],[[1,"class",0]],null,null,null,null)),(n()(),d["ɵted"](null,[" ","\n                "]))],null,function(n,l){n(l,1,0,l.context.subMenus.icon),n(l,2,0,l.context.subMenus.text)})}function o(n){return d["ɵvid"](0,[(n()(),d["ɵeld"](0,null,null,120,"amexio-card-pane",[],null,null,null,r.a,r.b)),d["ɵdid"](4308992,null,0,s.CardComponent,[],{enableFooter:[0,"enableFooter"]},null),(n()(),d["ɵted"](null,["\n  "])),(n()(),d["ɵeld"](0,null,0,5,"amexio-pane-header",[],null,null,null,r.c,r.d)),d["ɵdid"](114688,null,0,s.PaneHeaderComponent,[],null,null),(n()(),d["ɵted"](0,["\n    "])),(n()(),d["ɵeld"](0,null,0,1,"h1",[["class","page-header"]],null,null,null,null,null)),(n()(),d["ɵted"](null,["Side Menu Bar with Template Component"])),(n()(),d["ɵted"](0,["\n  "])),(n()(),d["ɵted"](null,["\n  "])),(n()(),d["ɵeld"](0,null,1,109,"amexio-pane-body",[],null,null,null,r.e,r.f)),d["ɵdid"](114688,null,0,s.PaneBodyComponent,[],null,null),(n()(),d["ɵted"](0,["\n    "])),(n()(),d["ɵeld"](0,null,0,1,"p",[],null,null,null,null,null)),(n()(),d["ɵted"](null,["The Side Menu Bar component is a familiar navigation pattern for users. Side menu bar can be placed on left or right side. It can fit as many navigation links as needed, scrolling when the content exceeds the viewport. Take a look at Datastructure format which this component can consume in datasource tab. Below demo is configured with user defined templates."])),(n()(),d["ɵted"](0,["\n    "])),(n()(),d["ɵeld"](0,null,0,102,"amexio-tab-pane",[],null,null,null,r.g,r.h)),d["ɵdid"](5357568,null,1,s.TabPaneComponent,[],null,null),d["ɵqud"](603979776,1,{queryTabs:1}),(n()(),d["ɵted"](0,["\n      "])),(n()(),d["ɵeld"](0,null,0,39,"amexio-tab",[["title","Demo"]],null,null,null,r.i,r.j)),d["ɵdid"](114688,[[1,4]],0,s.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(n()(),d["ɵted"](0,["\n        "])),(n()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(n()(),d["ɵted"](0,["\n          "])),(n()(),d["ɵeld"](0,null,0,2,"amexio-btn",[],null,[[null,"click"]],function(n,l,e){var t=!0,a=n.component;if("click"===l){t=!1!==a.toggle()&&t}return t},r.m,r.n)),d["ɵdid"](4833280,null,0,s.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"]},null),(n()(),d["ɵted"](null,[" "])),(n()(),d["ɵted"](0,["\n        "])),(n()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(n()(),d["ɵted"](0,["\n        "])),(n()(),d["ɵeld"](0,null,0,27,"amexio-window-pane",[],null,[[null,"showWindowChange"]],function(n,l,e){var t=!0,a=n.component;if("showWindowChange"===l){t=!1!==(a.flag=e)&&t}return t},r._12,r._13)),d["ɵdid"](4308992,null,0,s.WindowPaneComponent,[],{title:[0,"title"],closable:[1,"closable"],showWindow:[2,"showWindow"]},{showWindowChange:"showWindowChange"}),(n()(),d["ɵted"](null,["\n          "])),(n()(),d["ɵeld"](0,null,0,23,"amexio-pane-body",[],null,null,null,r.e,r.f)),d["ɵdid"](114688,null,0,s.PaneBodyComponent,[],null,null),(n()(),d["ɵted"](0,["\n            "])),(n()(),d["ɵeld"](0,null,0,19,"form",[["novalidate",""],["style","height: 400px"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var t=!0;if("submit"===l){t=!1!==d["ɵnov"](n,39).onSubmit(e)&&t}if("reset"===l){t=!1!==d["ɵnov"](n,39).onReset()&&t}return t},null,null)),d["ɵdid"](16384,null,0,p["ɵbf"],[],null,null),d["ɵdid"](16384,null,0,p.NgForm,[[8,null],[8,null]],null,null),d["ɵprd"](2048,null,p.ControlContainer,null,[p.NgForm]),d["ɵdid"](16384,null,0,p.NgControlStatusGroup,[p.ControlContainer],null,null),(n()(),d["ɵted"](null,["\n              "])),(n()(),d["ɵeld"](0,null,null,12,"amexio-sidemenubar",[],null,null,null,r._14,r._15)),d["ɵprd"](512,null,s.CommonHttpService,s.CommonHttpService,[c.Http]),d["ɵdid"](4308992,null,3,s.SideNavBarComponent,[c.Http,s.CommonHttpService,d.ChangeDetectorRef],{httpUrl:[0,"httpUrl"],httpMethod:[1,"httpMethod"],dataReader:[2,"dataReader"],width:[3,"width"]},null),d["ɵqud"](335544320,2,{headerTemplate:0}),d["ɵqud"](335544320,3,{childTemplate:0}),d["ɵqud"](335544320,4,{subMenuTemplate:0}),(n()(),d["ɵted"](null,["\n                "])),(n()(),d["ɵand"](0,[[2,2],["amexioNavHeaderTmpl",2]],null,0,null,t)),(n()(),d["ɵted"](null,["\n                "])),(n()(),d["ɵand"](0,[[3,2],["amexioMenuHeaderTmpl",2]],null,0,null,a)),(n()(),d["ɵted"](null,["\n                "])),(n()(),d["ɵand"](0,[[4,2],["amexioSubMenuTmpl",2]],null,0,null,u)),(n()(),d["ɵted"](null,["\n              "])),(n()(),d["ɵted"](null,["\n            "])),(n()(),d["ɵted"](0,["\n          "])),(n()(),d["ɵted"](null,["\n        "])),(n()(),d["ɵted"](0,["\n\n      "])),(n()(),d["ɵted"](0,["\n\n      "])),(n()(),d["ɵeld"](0,null,0,6,"amexio-tab",[["title","API Reference"]],null,null,null,r.i,r.j)),d["ɵdid"](114688,[[1,4]],0,s.TabComponent,[],{title:[0,"title"]},null),(n()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(n()(),d["ɵted"](0,["\n        "])),(n()(),d["ɵeld"](0,null,0,1,"menubar-api",[],null,null,null,f.a,f.b)),d["ɵdid"](114688,null,0,g.a,[],null,null),(n()(),d["ɵted"](0,["\n      "])),(n()(),d["ɵted"](0,["\n      "])),(n()(),d["ɵeld"](0,null,0,37,"amexio-tab",[["title","Source"]],null,null,null,r.i,r.j)),d["ɵdid"](114688,[[1,4]],0,s.TabComponent,[],{title:[0,"title"]},null),(n()(),d["ɵted"](0,["\n        "])),(n()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(n()(),d["ɵted"](0,["\n        "])),(n()(),d["ɵeld"](0,null,0,31,"amexio-vertical-left-tab-pane",[],null,null,null,r.k,r.l)),d["ɵdid"](5357568,null,1,s.VerticalLeftTabPaneComponent,[],null,null),d["ɵqud"](603979776,5,{queryTabs:1}),(n()(),d["ɵted"](0,["\n          "])),(n()(),d["ɵeld"](0,null,0,12,"amexio-tab",[["title","Markup"]],null,null,null,r.i,r.j)),d["ɵdid"](114688,[[5,4]],0,s.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(n()(),d["ɵted"](0,["\n            "])),(n()(),d["ɵeld"](0,null,0,8,"div",[["style","width: 800px; overflow-y: scroll"]],null,null,null,null,null)),(n()(),d["ɵted"](null,["\n              "])),(n()(),d["ɵted"](null,["\n              "])),(n()(),d["ɵeld"](0,null,null,1,"clip-copy",[],null,[[null,"onClick"]],function(n,l,e){var t=!0,a=n.component;if("onClick"===l){t=!1!==a.onCopyClick()&&t}return t},b.a,b.b)),d["ɵdid"](114688,null,0,h.a,[],{htmlCode:[0,"htmlCode"]},{onClick:"onClick"}),(n()(),d["ɵted"](null,["\n              "])),(n()(),d["ɵeld"](0,null,null,1,"prism-block",[],null,null,null,x.a,x.b)),d["ɵdid"](4243456,null,0,C.a,[d.Renderer2,d.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(n()(),d["ɵted"](null,["\n            "])),(n()(),d["ɵted"](0,["\n          "])),(n()(),d["ɵted"](0,["\n          "])),(n()(),d["ɵeld"](0,null,0,5,"amexio-tab",[["title","TypeScript"]],null,null,null,r.i,r.j)),d["ɵdid"](114688,[[5,4]],0,s.TabComponent,[],{title:[0,"title"]},null),(n()(),d["ɵted"](0,["\n\n              "])),(n()(),d["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,x.a,x.b)),d["ɵdid"](4243456,null,0,C.a,[d.Renderer2,d.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(n()(),d["ɵted"](0,["\n\n          "])),(n()(),d["ɵted"](0,["\n          "])),(n()(),d["ɵeld"](0,null,0,5,"amexio-tab",[["title","Data Store"]],null,null,null,r.i,r.j)),d["ɵdid"](114688,[[5,4]],0,s.TabComponent,[],{title:[0,"title"]},null),(n()(),d["ɵted"](0,["\n\n              "])),(n()(),d["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,x.a,x.b)),d["ɵdid"](4243456,null,0,C.a,[d.Renderer2,d.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(n()(),d["ɵted"](0,["\n\n          "])),(n()(),d["ɵted"](0,["\n        "])),(n()(),d["ɵted"](0,["\n      "])),(n()(),d["ɵted"](0,["\n      "])),(n()(),d["ɵeld"](0,null,0,9,"amexio-tab",[["title","Plunker"]],null,null,null,r.i,r.j)),d["ɵdid"](114688,[[1,4]],0,s.TabComponent,[],{title:[0,"title"]},null),(n()(),d["ɵted"](0,["\n        "])),(n()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(n()(),d["ɵted"](0,["\n        "])),(n()(),d["ɵeld"](0,null,0,1,"p",[["class","text-md-center text-primary"]],null,null,null,null,null)),(n()(),d["ɵted"](null,["Amexio Sandbox"])),(n()(),d["ɵted"](0,["\n        "])),(n()(),d["ɵeld"](0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://embed.plnkr.co/Vk7GrjlWxqSfnqy90BuP/"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(n()(),d["ɵted"](0,["\n      "])),(n()(),d["ɵted"](0,["\n    "])),(n()(),d["ɵted"](0,["\n  "])),(n()(),d["ɵted"](null,["\n"])),(n()(),d["ɵted"](null,["\n"])),(n()(),d["ɵeld"](0,null,null,1,"amexio-notification",[],null,null,null,r.s,r.t)),d["ɵdid"](114688,null,0,s.NotifyComponent,[d.ChangeDetectorRef],{messageData:[0,"messageData"]},null),(n()(),d["ɵted"](null,["\n\n"]))],function(n,l){var e=l.component;n(l,1,0,!1),n(l,4,0),n(l,11,0),n(l,17,0);n(l,21,0,"Demo",!0);n(l,26,0,"Demo Example","default","Demo Example");n(l,32,0," Side Menu Bar with Template",!0,e.flag),n(l,35,0);n(l,45,0,"assets/data/menus/menubarexample.json","get","data","50%");n(l,62,0,"API Reference"),n(l,66,0);n(l,70,0,"Source"),n(l,75,0);n(l,79,0,"Markup",!0),n(l,85,0,e.htmlCode);n(l,88,0,e.htmlCode,"html");n(l,93,0,"TypeScript");n(l,96,0,e.tsCode,"typescript");n(l,100,0,"Data Store");n(l,103,0,e.dataSource,"json");n(l,109,0,"Plunker"),n(l,123,0,e.copyMsgArray)},function(n,l){n(l,37,0,d["ɵnov"](l,41).ngClassUntouched,d["ɵnov"](l,41).ngClassTouched,d["ɵnov"](l,41).ngClassPristine,d["ɵnov"](l,41).ngClassDirty,d["ɵnov"](l,41).ngClassValid,d["ɵnov"](l,41).ngClassInvalid,d["ɵnov"](l,41).ngClassPending)})}function i(n){return d["ɵvid"](0,[(n()(),d["ɵeld"](0,null,null,1,"side-menubar-temp-demo",[],null,null,null,o,y)),d["ɵdid"](114688,null,0,m.a,[],null,null)],function(n,l){n(l,1,0)},null)}var d=e("/oeL"),r=e("Mspa"),s=e("k8FD"),m=(e.n(s),e("27IZ")),p=e("bm2B"),c=e("CPp0"),f=e("DZz/"),g=e("rJU4"),b=e("8mzU"),h=e("repp"),x=e("l0f3"),C=e("FMBD");e.d(l,"a",function(){return M});var v=[],y=d["ɵcrt"]({encapsulation:2,styles:v,data:{}}),M=d["ɵccf"]("side-menubar-temp-demo",m.a,i,{},{},[])}});