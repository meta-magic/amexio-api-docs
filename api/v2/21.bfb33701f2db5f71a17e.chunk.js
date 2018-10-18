webpackJsonp([21],{IF2R:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){this.data=[],this.htmlCode='\n\n<amexio-notification [messageData]="data"></amexio-notification>\n\n<amexio-btn (onClick)="infoNotification()" \n    [label]="\'Info Popup\'" [type]="\'primary\'" \n    [tooltipMessage]="\'Primary Button\'">\n</amexio-btn>\n               \n<amexio-btn (onClick)="successNotification()" \n    [label]="\'Success Popup\'" [type]="\'success\'" \n    [tooltipMessage]="\'Success Button\'">\n</amexio-btn>\n            \n<amexio-btn (onClick)="dangerNotification()" \n    [label]="\'Danger Popup\'" [type]="\'danger\'" \n    [tooltipMessage]="\'danger Button\'">\n</amexio-btn>\n               \n<amexio-btn (onClick)="warningNotification()" \n    [label]="\'Warning\'" [type]="\'warning\'" \n    [tooltipMessage]="\'Warning Button\'">\n</amexio-btn>\n                \n   ',this.tsCode="import {Component, OnInit} from '@angular/core';\n\n@Component({\n selector: 'notification-demo',\n templateUrl: 'notification.demo.html'\n})\n\nexport class NotificationDemoComponent implements OnInit {\n\n  data : any=[];\n  constructor() {}\n  ngOnInit() {}\n  \n  infoNotification(){\n    this.data.push({'msg':'Sample Info Message', 'type' : 'info'});\n  }\n  warningNotification(){\n    this.data.push({'msg':'Sample Warning Message', 'type' : 'warn'});\n  }\n  successNotification(){\n    this.data.push({'msg':'Sample Success Message', 'type' : 'success'});\n  }\n  dangerNotification(){\n    this.data.push({'msg':'Sample Danger Message', 'type' : 'danger'});\n  }\n  }\n  "}return l.prototype.ngOnInit=function(){},l.prototype.infoNotification=function(){this.data.push({msg:"Sample Info Message",type:"info"})},l.prototype.warningNotification=function(){this.data.push({msg:"Sample Warning Message",type:"warn"})},l.prototype.successNotification=function(){this.data.push({msg:"Sample Success Message",type:"success"})},l.prototype.dangerNotification=function(){this.data.push({msg:"Sample Danger Message",type:"danger"})},l.ctorParameters=function(){return[]},l}()},PQoC:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("/oeL"),t=u("rShi"),o=u("qIFt"),i=u("qbdv"),a=u("bm2B"),d=u("CPp0"),s=u("BkNc"),c=u("k8FD"),r=(u.n(c),u("kL+h")),p=u("IF2R");u.d(n,"NotificationDemoModuleNgFactory",function(){return m});var m=e["ɵcmf"](t.a,[],function(l){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[o.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[e.LOCALE_ID]),e["ɵmpd"](4608,a["ɵi"],a["ɵi"],[]),e["ɵmpd"](4608,d.BrowserXhr,d.BrowserXhr,[]),e["ɵmpd"](4608,d.ResponseOptions,d.BaseResponseOptions,[]),e["ɵmpd"](5120,d.XSRFStrategy,d["ɵb"],[]),e["ɵmpd"](4608,d.XHRBackend,d.XHRBackend,[d.BrowserXhr,d.ResponseOptions,d.XSRFStrategy]),e["ɵmpd"](4608,d.RequestOptions,d.BaseRequestOptions,[]),e["ɵmpd"](5120,d.Http,d["ɵc"],[d.XHRBackend,d.RequestOptions]),e["ɵmpd"](512,i.CommonModule,i.CommonModule,[]),e["ɵmpd"](512,s.x,s.x,[[2,s.m],[2,s.c]]),e["ɵmpd"](512,a["ɵba"],a["ɵba"],[]),e["ɵmpd"](512,a.FormsModule,a.FormsModule,[]),e["ɵmpd"](512,d.HttpModule,d.HttpModule,[]),e["ɵmpd"](512,c.AmexioWidgetModule,c.AmexioWidgetModule,[]),e["ɵmpd"](512,r.a,r.a,[]),e["ɵmpd"](512,t.a,t.a,[]),e["ɵmpd"](1024,s.t,function(){return[[{path:"",component:p.a}]]},[])])})},qIFt:function(l,n,u){"use strict";function e(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,null,null,149,"amexio-card-pane",[],null,null,null,i.a,i.b)),o["ɵdid"](4308992,null,0,a.CardComponent,[],{enableFooter:[0,"enableFooter"]},null),(l()(),o["ɵted"](null,["\n  "])),(l()(),o["ɵeld"](0,null,0,5,"amexio-pane-header",[],null,null,null,i.c,i.d)),o["ɵdid"](114688,null,0,a.PaneHeaderComponent,[],null,null),(l()(),o["ɵted"](0,["\n    "])),(l()(),o["ɵeld"](0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["App Notification's"])),(l()(),o["ɵted"](0,["\n  "])),(l()(),o["ɵted"](null,["\n\n  "])),(l()(),o["ɵeld"](0,null,1,138,"amexio-pane-body",[],null,null,null,i.e,i.f)),o["ɵdid"](114688,null,0,a.PaneBodyComponent,[],null,null),(l()(),o["ɵted"](0,["\n    "])),(l()(),o["ɵeld"](0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Notification provides a way to let user know through pop-up messages. These come in Danger, Warning, Success & Info variant. "])),(l()(),o["ɵted"](0,["\n    "])),(l()(),o["ɵeld"](0,null,0,131,"amexio-tab-pane",[],null,null,null,i.g,i.h)),o["ɵdid"](5357568,null,1,a.TabPaneComponent,[],null,null),o["ɵqud"](603979776,1,{queryTabs:1}),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵeld"](0,null,0,45,"amexio-tab",[["title","Demo"]],null,null,null,i.i,i.j)),o["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,41,"div",[["style","height: 300px"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,37,"div",[["class","card"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵeld"](0,null,null,4,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵeld"](0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Notification Buttons"])),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵeld"](0,null,null,28,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵeld"](0,null,null,25,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,4,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-btn",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){e=!1!==t.infoNotification()&&e}return e},i.w,i.x)),o["ɵdid"](4833280,null,0,a.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"]},{onClick:"onClick"}),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,4,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-btn",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){e=!1!==t.successNotification()&&e}return e},i.w,i.x)),o["ɵdid"](4833280,null,0,a.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"]},{onClick:"onClick"}),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,4,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-btn",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){e=!1!==t.dangerNotification()&&e}return e},i.w,i.x)),o["ɵdid"](4833280,null,0,a.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"]},{onClick:"onClick"}),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                 "])),(l()(),o["ɵeld"](0,null,null,4,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                   "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-btn",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){e=!1!==t.warningNotification()&&e}return e},i.w,i.x)),o["ɵdid"](4833280,null,0,a.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"]},{onClick:"onClick"}),(l()(),o["ɵted"](null,["\n                 "])),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵted"](null,["\n        "])),(l()(),o["ɵted"](0,["\n\n      "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵeld"](0,null,0,54,"amexio-tab",[["title","API Reference"]],null,null,null,i.i,i.j)),o["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),o["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](0,["\n\n        "])),(l()(),o["ɵeld"](0,null,0,49,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,2,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"b",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["API Reference"])),(l()(),o["ɵted"](null,["\n\n          "])),(l()(),o["ɵeld"](0,null,null,42,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵeld"](0,null,null,39,"div",[["class","row"],["id","notification-api-reference"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n\n              "])),(l()(),o["ɵeld"](0,null,null,35,"table",[["class","table table-sm table-hover"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,32,"tbody",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,27,"tr",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["messageData"])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,20,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Type: "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Array"])),(l()(),o["ɵted"](null,["\n\n                    "])),(l()(),o["ɵeld"](0,null,null,11,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,9,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["list of notification with key "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["msg"])),(l()(),o["ɵted"](null,[" and type of notification :  like "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["danger,success,info,warn "])),(l()(),o["ɵted"](null,["  against key "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["type"])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,1,"tr",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n\n                "])),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵted"](null,["\n\n            "])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵted"](null,["\n        "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵted"](0,["\n\n      "])),(l()(),o["ɵeld"](0,null,0,23,"amexio-tab",[["title","Source"]],null,null,null,i.i,i.j)),o["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,17,"amexio-vertical-left-tab-pane",[],null,null,null,i.k,i.l)),o["ɵdid"](5357568,null,1,a.VerticalLeftTabPaneComponent,[],null,null),o["ɵqud"](603979776,2,{queryTabs:1}),(l()(),o["ɵted"](0,["\n          "])),(l()(),o["ɵeld"](0,null,0,5,"amexio-tab",[["title","Markup"]],null,null,null,i.i,i.j)),o["ɵdid"](114688,[[2,4]],0,a.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),o["ɵted"](0,["\n\n            "])),(l()(),o["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,s.a,s.b)),o["ɵdid"](4243456,null,0,c.a,[o.Renderer2,o.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),o["ɵted"](0,["\n\n\n          "])),(l()(),o["ɵted"](0,["\n          "])),(l()(),o["ɵeld"](0,null,0,5,"amexio-tab",[["title","TypeScript"]],null,null,null,i.i,i.j)),o["ɵdid"](114688,[[2,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),o["ɵted"](0,["\n\n            "])),(l()(),o["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,s.a,s.b)),o["ɵdid"](4243456,null,0,c.a,[o.Renderer2,o.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),o["ɵted"](0,["\n\n          "])),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵted"](0,["\n    "])),(l()(),o["ɵted"](0,["\n  "])),(l()(),o["ɵted"](null,["\n\n"])),(l()(),o["ɵted"](null,["\n\n"])),(l()(),o["ɵeld"](0,null,null,1,"amexio-notification",[],null,null,null,i.A,i.B)),o["ɵdid"](114688,null,0,a.NotifyComponent,[o.ChangeDetectorRef],{messageData:[0,"messageData"]},null),(l()(),o["ɵted"](null,["\n\n"]))],function(l,n){var u=n.component;l(n,1,0,!1),l(n,4,0),l(n,11,0),l(n,17,0);l(n,21,0,"Demo",!0);l(n,41,0,"Info Popup","primary","Primary Button");l(n,47,0,"Success Popup","success","Success Button");l(n,53,0,"Danger Popup","danger","danger Button");l(n,59,0,"Warning","warning","Warning Button");l(n,68,0,"API Reference");l(n,124,0,"Source"),l(n,129,0);l(n,133,0,"Markup",!0);l(n,136,0,u.htmlCode,"html");l(n,140,0,"TypeScript");l(n,143,0,u.tsCode,"typescript"),l(n,152,0,u.data)},null)}function t(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,null,null,1,"notification-demo",[],null,null,null,e,p)),o["ɵdid"](114688,null,0,d.a,[],null,null)],function(l,n){l(n,1,0)},null)}var o=u("/oeL"),i=u("Mspa"),a=u("k8FD"),d=(u.n(a),u("IF2R")),s=u("l0f3"),c=u("FMBD");u.d(n,"a",function(){return m});var r=[],p=o["ɵcrt"]({encapsulation:2,styles:r,data:{}}),m=o["ɵccf"]("notification-demo",d.a,t,{},{},[])},rShi:function(l,n,u){"use strict";var e=u("waH/"),t=(u.n(e),u("tqEy")),o=(u.n(t),u("IF2R"));u.d(n,"a",function(){return i});var i=(o.a,function(){function l(){}return l}());o.a}});