webpackJsonp([21],{IF2R:function(l,n,u){"use strict";var e=u("zGn2");u.d(n,"a",function(){return t});var t=function(){function l(l){this.widgetService=l,this.htmlCode="\n<amexio-btn \n    (onClick)=\"widgetService.toasterInfo('Demo Info','Sample Info Message')\" \n    [label]=\"'Info Popup'\" [type]=\"'primary'\" \n    [tooltipMessage]=\"'Primary Button'\">\n</amexio-btn>\n   \x3c!--Success Info message button--\x3e   \n<amexio-btn \n    (onClick)=\"widgetService.toasterSuccess('Demo Success','Sample Success Message')\" \n    [label]=\"'Success Popup'\" [type]=\"'success'\" \n    [tooltipMessage]=\"'Success Button'\">\n</amexio-btn>\n    \x3c!--Danger Info message button--\x3e       \n<amexio-btn \n    (onClick)=\"widgetService.toasterDanger('Demo Danger','Sample Danger Message')\" \n    [label]=\"'Danger Popup'\" [type]=\"'danger'\" \n    [tooltipMessage]=\"'danger Button'\">\n</amexio-btn>\n   ",this.tsCode="import {Component, OnInit} from '@angular/core';\n\n@Component({\n  selector: 'notify-demo',\n  templateUrl: 'notification.demo.html'\n})\nexport class NotifiyDemoComponent implements OnInit {\n  constructor(private widgetService : WidgetService) {}\n  ngOnInit() {}\n  }\n  "}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[{type:e.a}]},l}()},PQoC:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("/oeL"),t=u("rShi"),o=u("qIFt"),i=u("qbdv"),a=u("bm2B"),s=u("CPp0"),c=u("BkNc"),r=u("zGn2"),p=u("kL+h"),X=u("IF2R");u.d(n,"NotificationDemoModuleNgFactory",function(){return d});var d=e.b(t.a,[],function(l){return e.c([e.d(512,e.e,e.f,[[8,[o.a]],[3,e.e],e.g]),e.d(4608,i.a,i.b,[e.h]),e.d(4608,a.a,a.a,[]),e.d(4608,s.a,s.a,[]),e.d(4608,s.b,s.c,[]),e.d(5120,s.d,s.e,[]),e.d(4608,s.f,s.f,[s.a,s.b,s.d]),e.d(4608,s.g,s.h,[]),e.d(5120,s.i,s.j,[s.f,s.g]),e.d(512,i.d,i.d,[]),e.d(512,c.x,c.x,[[2,c.m],[2,c.c]]),e.d(512,a.b,a.b,[]),e.d(512,a.c,a.c,[]),e.d(512,s.k,s.k,[]),e.d(512,r.b,r.b,[]),e.d(512,p.a,p.a,[]),e.d(512,t.a,t.a,[]),e.d(1024,c.t,function(){return[[{path:"",component:X.a}]]},[])])})},qIFt:function(l,n,u){"use strict";function e(l){return o.U(0,[(l()(),o.V(0,null,null,214,"amexio-card-pane",[],null,null,null,i.a,i.b)),o.W(4308992,null,0,a.c,[],null,null),(l()(),o.X(null,["\n  "])),(l()(),o.V(0,null,0,5,"amexio-pane-header",[],null,null,null,i.c,i.d)),o.W(114688,null,0,a.d,[],null,null),(l()(),o.X(0,["\n    "])),(l()(),o.V(0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),o.X(null,["App Notification's"])),(l()(),o.X(0,["\n  "])),(l()(),o.X(null,["\n\n  "])),(l()(),o.V(0,null,1,203,"amexio-pane-body",[],null,null,null,i.e,i.f)),o.W(114688,null,0,a.e,[],null,null),(l()(),o.X(0,["\n    "])),(l()(),o.V(0,null,0,4,"p",[],null,null,null,null,null)),(l()(),o.X(null,["Notification provides a way to let user know through pop-up messages. These come in Danger, Warning, Success & Info variant. Also one can simple use these by injecting & calling the methods in "])),(l()(),o.V(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.X(null,["WidgetService"])),(l()(),o.X(null,[" class"])),(l()(),o.X(0,["\n          "])),(l()(),o.V(0,null,0,193,"amexio-tab-pane",[],null,null,null,i.g,i.h)),o.W(5357568,null,1,a.f,[],null,null),o.Y(603979776,1,{queryTabs:1}),(l()(),o.X(0,["\n            "])),(l()(),o.V(0,null,0,40,"amexio-tab",[["title","Demo"]],null,null,null,i.i,i.j)),o.W(114688,[[1,4]],0,a.g,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),o.X(0,["\n              "])),(l()(),o.V(0,null,0,36,"div",[["style","height: 300px"]],null,null,null,null,null)),(l()(),o.V(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.X(null,["\n\n\n\n                      "])),(l()(),o.V(0,null,null,32,"div",[["class","card"]],null,null,null,null,null)),(l()(),o.X(null,["\n                        "])),(l()(),o.V(0,null,null,4,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),o.X(null,["\n                          "])),(l()(),o.V(0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),o.X(null,["Notification Buttons"])),(l()(),o.X(null,["\n                        "])),(l()(),o.X(null,["\n                        "])),(l()(),o.V(0,null,null,23,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),o.X(null,["\n                          "])),(l()(),o.V(0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(l()(),o.X(null,["\n                            "])),(l()(),o.V(0,null,null,4,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),o.X(null,["\n                              "])),(l()(),o.V(0,null,null,1,"amexio-btn",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){e=!1!==t.widgetService.toasterInfo("Demo Info","Sample Info Message","9000")&&e}return e},i.k,i.l)),o.W(4833280,null,0,a.h,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"]},{onClick:"onClick"}),(l()(),o.X(null,["\n                            "])),(l()(),o.X(null,["\n                            "])),(l()(),o.V(0,null,null,4,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),o.X(null,["\n                              "])),(l()(),o.V(0,null,null,1,"amexio-btn",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){e=!1!==t.widgetService.toasterSuccess("Demo Success","Sample Success Message","2000")&&e}return e},i.k,i.l)),o.W(4833280,null,0,a.h,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"]},{onClick:"onClick"}),(l()(),o.X(null,["\n                            "])),(l()(),o.X(null,["\n                            "])),(l()(),o.V(0,null,null,4,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),o.X(null,["\n                              "])),(l()(),o.V(0,null,null,1,"amexio-btn",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){e=!1!==t.widgetService.toasterDanger("Demo Danger","Sample Danger Message","3000")&&e}return e},i.k,i.l)),o.W(4833280,null,0,a.h,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"]},{onClick:"onClick"}),(l()(),o.X(null,["\n                            "])),(l()(),o.X(null,["\n                            "])),(l()(),o.X(null,["\n                          "])),(l()(),o.X(null,["\n                        "])),(l()(),o.X(null,["\n                      "])),(l()(),o.X(null,["\n                    "])),(l()(),o.X(0,["\n\n            "])),(l()(),o.X(0,["\n            "])),(l()(),o.V(0,null,0,121,"amexio-tab",[["title","API Reference"]],null,null,null,i.i,i.j)),o.W(114688,[[1,4]],0,a.g,[],{title:[0,"title"]},null),(l()(),o.V(0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.X(0,["\n\n              "])),(l()(),o.V(0,null,0,116,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),o.X(null,["\n                "])),(l()(),o.V(0,null,null,2,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),o.V(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),o.X(null,["API Reference"])),(l()(),o.X(null,["\n\n                "])),(l()(),o.V(0,null,null,109,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),o.X(null,["\n                  "])),(l()(),o.V(0,null,null,106,"div",[["class","row"],["id","notification-api-reference"]],null,null,null,null,null)),(l()(),o.V(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.X(null,["\n\n                    "])),(l()(),o.V(0,null,null,69,"table",[["class","table table-sm table-hover"]],null,null,null,null,null)),(l()(),o.X(null,["\n                      "])),(l()(),o.V(0,null,null,66,"tbody",[],null,null,null,null,null)),(l()(),o.X(null,["\n                      "])),(l()(),o.V(0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),o.X(null,["\n                        "])),(l()(),o.V(0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),o.V(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.X(null,["title"])),(l()(),o.X(null,["\n                        "])),(l()(),o.V(0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),o.X(null,["\n                          "])),(l()(),o.V(0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o.V(0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o.X(null,["Type: "])),(l()(),o.V(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.X(null,["string"])),(l()(),o.X(null,["\n\n                          "])),(l()(),o.V(0,null,null,3,"div",[],null,null,null,null,null)),(l()(),o.V(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o.X(null,["Title of pop up message"])),(l()(),o.X(null,["\n                          "])),(l()(),o.X(null,["\n                        "])),(l()(),o.X(null,["\n                      "])),(l()(),o.X(null,["\n                      "])),(l()(),o.V(0,null,null,1,"tr",[],null,null,null,null,null)),(l()(),o.X(null,["\n\n                      "])),(l()(),o.V(0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),o.X(null,["\n                        "])),(l()(),o.V(0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),o.V(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.X(null,["message"])),(l()(),o.X(null,["\n                        "])),(l()(),o.V(0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),o.X(null,["\n                          "])),(l()(),o.V(0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o.V(0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o.X(null,["Type: "])),(l()(),o.V(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.X(null,["string"])),(l()(),o.X(null,["\n                          "])),(l()(),o.V(0,null,null,3,"div",[],null,null,null,null,null)),(l()(),o.V(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o.X(null,["Message for to display in pop-up "])),(l()(),o.X(null,["\n                          "])),(l()(),o.X(null,["\n                        "])),(l()(),o.X(null,["\n                      "])),(l()(),o.X(null,["\n\n                      "])),(l()(),o.V(0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),o.X(null,["\n                        "])),(l()(),o.V(0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),o.V(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.X(null,["timeout"])),(l()(),o.X(null,["\n                        "])),(l()(),o.V(0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),o.X(null,["\n                          "])),(l()(),o.V(0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o.V(0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o.X(null,["Type: "])),(l()(),o.V(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.X(null,["string"])),(l()(),o.X(null,["\n\n                          "])),(l()(),o.V(0,null,null,3,"div",[],null,null,null,null,null)),(l()(),o.V(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o.X(null,["No of seconds before the pop is destructed "])),(l()(),o.X(null,["\n                          "])),(l()(),o.X(null,["\n                        "])),(l()(),o.X(null,["\n                      "])),(l()(),o.X(null,["\n\n                      "])),(l()(),o.X(null,["\n                    "])),(l()(),o.X(null,["\n\n                    "])),(l()(),o.V(0,null,null,31,"div",[["class","row"]],null,null,null,null,null)),(l()(),o.V(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.X(null,["\n                      "])),(l()(),o.V(0,null,null,27,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),o.X(null,["\n                        "])),(l()(),o.V(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o.X(null,["  Methods"])),(l()(),o.X(null,["\n                        "])),(l()(),o.V(0,null,null,21,"ul",[["class","list-group"]],null,null,null,null,null)),(l()(),o.X(null,["\n                          "])),(l()(),o.V(0,null,null,3,"li",[["class","list-group-item list-group-item-success"]],null,null,null,null,null)),(l()(),o.V(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.X(null,["toasterInfo(title ,message ,timeout)"])),(l()(),o.X(null,[" :: Info Popup"])),(l()(),o.X(null,["\n                          "])),(l()(),o.V(0,null,null,3,"li",[["class","list-group-item list-group-item-success"]],null,null,null,null,null)),(l()(),o.V(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.X(null,["toasterDanger(title ,message ,timeout)"])),(l()(),o.X(null,[":: Danger Popup"])),(l()(),o.X(null,["\n                          "])),(l()(),o.V(0,null,null,3,"li",[["class","list-group-item list-group-item-success"]],null,null,null,null,null)),(l()(),o.V(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.X(null,["toasterWarning(title ,message ,timeout)"])),(l()(),o.X(null,[":: Warning Popup"])),(l()(),o.X(null,["\n                          "])),(l()(),o.V(0,null,null,3,"li",[["class","list-group-item list-group-item-success"]],null,null,null,null,null)),(l()(),o.V(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o.X(null,["toasterSuccess(title ,message ,timeout)"])),(l()(),o.X(null,[":: Success Popup"])),(l()(),o.X(null,["\n                        "])),(l()(),o.X(null,["\n                      "])),(l()(),o.X(null,["\n                    "])),(l()(),o.X(null,["\n\n                  "])),(l()(),o.X(null,["\n                "])),(l()(),o.X(null,["\n              "])),(l()(),o.X(0,["\n            "])),(l()(),o.X(0,["\n\n            "])),(l()(),o.V(0,null,0,23,"amexio-tab",[["title","Source"]],null,null,null,i.i,i.j)),o.W(114688,[[1,4]],0,a.g,[],{title:[0,"title"]},null),(l()(),o.X(0,["\n              "])),(l()(),o.V(0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.X(0,["\n              "])),(l()(),o.V(0,null,0,17,"amexio-vertical-left-tab-pane",[],null,null,null,i.m,i.n)),o.W(5357568,null,1,a.i,[],null,null),o.Y(603979776,2,{queryTabs:1}),(l()(),o.X(0,["\n                "])),(l()(),o.V(0,null,0,5,"amexio-tab",[["title","Markup"]],null,null,null,i.i,i.j)),o.W(114688,[[2,4]],0,a.g,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),o.X(0,["\n\n                    "])),(l()(),o.V(0,null,0,1,"prism-block",[],null,null,null,c.a,c.b)),o.W(4243456,null,0,r.a,[o.Z,o._0],{code:[0,"code"],language:[1,"language"]},null),(l()(),o.X(0,["\n\n\n                "])),(l()(),o.X(0,["\n                "])),(l()(),o.V(0,null,0,5,"amexio-tab",[["title","TypeScript"]],null,null,null,i.i,i.j)),o.W(114688,[[2,4]],0,a.g,[],{title:[0,"title"]},null),(l()(),o.X(0,["\n\n                    "])),(l()(),o.V(0,null,0,1,"prism-block",[],null,null,null,c.a,c.b)),o.W(4243456,null,0,r.a,[o.Z,o._0],{code:[0,"code"],language:[1,"language"]},null),(l()(),o.X(0,["\n\n                "])),(l()(),o.X(0,["\n              "])),(l()(),o.X(0,["\n            "])),(l()(),o.X(0,["\n          "])),(l()(),o.X(0,["\n  "])),(l()(),o.X(null,["\n"])),(l()(),o.X(null,["\n\n\n"]))],function(l,n){var u=n.component;l(n,1,0),l(n,4,0),l(n,11,0),l(n,20,0);l(n,24,0,"Demo",!0);l(n,44,0,"Info Popup","primary","Primary Button");l(n,50,0,"Success Popup","success","Success Button");l(n,56,0,"Danger Popup","danger","danger Button");l(n,66,0,"API Reference");l(n,189,0,"Source"),l(n,194,0);l(n,198,0,"Markup",!0);l(n,201,0,u.htmlCode,"html");l(n,205,0,"TypeScript");l(n,208,0,u.tsCode,"typescript")},null)}function t(l){return o.U(0,[(l()(),o.V(0,null,null,1,"notification-demo",[],null,null,null,e,X)),o.W(114688,null,0,s.a,[a.a],null,null)],function(l,n){l(n,1,0)},null)}var o=u("/oeL"),i=u("Mspa"),a=u("zGn2"),s=u("IF2R"),c=u("l0f3"),r=u("FMBD");u.d(n,"a",function(){return d});var p=[],X=o.T({encapsulation:2,styles:p,data:{}}),d=o._1("notification-demo",s.a,t,{},{},[])},rShi:function(l,n,u){"use strict";var e=u("waH/"),t=(u.n(e),u("tqEy")),o=(u.n(t),u("IF2R"));u.d(n,"a",function(){return i});var i=(o.a,function(){function l(){}return l}());o.a}});