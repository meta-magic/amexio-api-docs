webpackJsonp(["notification.demo.module"],{ITcF:function(l,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o("LMZF"),u=function(){},t=o("tfJK"),i=o("drlO"),a=o("KhCp"),_=o("kL+h"),s=o("Un6q"),r=o("9iV4"),c=function(){function l(l){this.http=l,this.verticalLeftMessageArray=[],this.verticalCenterMessageArray=[],this.verticalRightMessageArray=[],this.horizontalLeftMessageArray=[],this.horizontalCenterMessageArray=[],this.horizontalRightMessageArray=[],this.getHtmlAndTypeScriptCode()}return l.prototype.verticalLeftNotification=function(){this.verticalLeftMessageArray.push("Welcome To Amexio!!!")},l.prototype.verticalCenterNotification=function(){this.verticalCenterMessageArray.push("top Center Notification!!!")},l.prototype.verticalRightNotification=function(){this.verticalRightMessageArray.push("top Right Notification!!!")},l.prototype.horizontalLeftNotification=function(){this.horizontalLeftMessageArray.push("bottom Left Notification!!!")},l.prototype.horizontalCenterNotification=function(){this.horizontalCenterMessageArray.push("bottom Center Notification!!!")},l.prototype.horizontalRightNotification=function(){this.horizontalRightMessageArray.push("bottom Right Notification!!!")},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,o=this;this.http.get("assets/data/code/navigation/notification/navigation.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){o.htmlCode=l}),this.http.get("assets/data/code/navigation/notification/navigation.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){o.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.closeCookie=function(){this.horizontalRightMessageArray=[]},l}(),m=e._1({encapsulation:2,styles:[],data:{}});function d(l){return e._27(0,[(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(1,0,null,null,24,"amexio-row",[],null,null,null,t._73,t.w)),e._2(2,1163264,null,0,i.F,[],null,null),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._3(4,0,null,0,6,"amexio-column",[["size","2"]],[[8,"className",0]],null,null,t._60,t.j)),e._2(5,114688,null,0,i.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                            "])),(l()(),e._3(7,0,null,0,2,"amexio-image",[["style","font-size: 25px;"]],null,null,null,t._128,t._25)),e._2(8,114688,null,0,i._54,[],{iconclass:[0,"iconclass"]},null),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._25(-1,0,[" \xa0\xa0\n                          "])),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._3(12,0,null,0,12,"amexio-column",[["size","8"]],[[8,"className",0]],null,null,t._60,t.j)),e._2(13,114688,null,0,i.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                            "])),(l()(),e._3(15,0,null,0,2,"amexio-label",[["font-color","white"],["size","small-bold"]],null,null,null,t._119,t._16)),e._2(16,114688,null,0,i._44,[],{styleClass:[0,"styleClass"],fontColor:[1,"fontColor"]},null),(l()(),e._25(-1,0,[" Warning Message "])),(l()(),e._3(18,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                            "])),(l()(),e._3(20,0,null,0,2,"amexio-label",[["font-color","white"],["size","small"]],null,null,null,t._119,t._16)),e._2(21,114688,null,0,i._44,[],{styleClass:[0,"styleClass"],fontColor:[1,"fontColor"]},null),(l()(),e._25(-1,0,["There are unsaved changes"])),(l()(),e._3(23,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._25(-1,0,["\n\n                        "])),(l()(),e._25(-1,null,["\n                      "]))],function(l,n){l(n,2,0),l(n,5,0,"2"),l(n,8,0,"\tfa fa-exclamation-triangle"),l(n,13,0,"8"),l(n,16,0,"small-bold","white"),l(n,21,0,"small","white")},function(l,n){l(n,4,0,e._16(n,5).colclass),l(n,12,0,e._16(n,13).colclass)})}function p(l){return e._27(0,[(l()(),e._25(-1,null,["  \n                            "])),(l()(),e._3(1,0,null,null,10,"amexio-box",[],null,null,null,t._57,t.g)),e._2(2,114688,null,0,i.f,[],{width:[0,"width"]},null),(l()(),e._25(-1,0,["\n                              "])),(l()(),e._3(4,0,null,0,2,"amexio-image",[],null,null,null,t._128,t._25)),e._2(5,114688,null,0,i._54,[],{iconclass:[0,"iconclass"]},null),(l()(),e._25(-1,null,["\n                              "])),(l()(),e._25(-1,0,[" \xa0\xa0\n                              "])),(l()(),e._3(8,0,null,0,2,"amexio-label",[["font-color","black"],["size","small-bold"]],null,null,null,t._119,t._16)),e._2(9,114688,null,0,i._44,[],{badge:[0,"badge"],styleClass:[1,"styleClass"],fontColor:[2,"fontColor"]},null),(l()(),e._25(-1,0,[" We have to update security policy"])),(l()(),e._25(-1,0,["\n                            "])),(l()(),e._25(-1,null,["\n                      "]))],function(l,n){l(n,2,0,"350px"),l(n,5,0,"\tfa fa-info-circle fa-2x"),l(n,9,0,7,"small-bold","black")},null)}function f(l){return e._27(0,[(l()(),e._25(-1,null,["\n                                 "])),(l()(),e._3(1,0,null,null,28,"amexio-row",[],null,null,null,t._73,t.w)),e._2(2,1163264,null,0,i.F,[],null,null),(l()(),e._25(-1,0,["\n                                   "])),(l()(),e._3(4,0,null,0,6,"amexio-column",[["size","2"]],[[8,"className",0]],null,null,t._60,t.j)),e._2(5,114688,null,0,i.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                                     "])),(l()(),e._3(7,0,null,0,2,"amexio-image",[["style","font-size: 25px;"]],null,null,null,t._128,t._25)),e._2(8,114688,null,0,i._54,[],{iconclass:[0,"iconclass"]},null),(l()(),e._25(-1,null,["\n                                     "])),(l()(),e._25(-1,0,[" \xa0\xa0\n                                   "])),(l()(),e._25(-1,0,["\n                                   "])),(l()(),e._3(12,0,null,0,16,"amexio-column",[["size","10"]],[[8,"className",0]],null,null,t._60,t.j)),e._2(13,114688,null,0,i.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                                      "])),(l()(),e._3(15,0,null,0,2,"amexio-label",[["font-color","white"],["size","small-bold"]],null,null,null,t._119,t._16)),e._2(16,114688,null,0,i._44,[],{styleClass:[0,"styleClass"],fontColor:[1,"fontColor"]},null),(l()(),e._25(-1,0,["Error Message"])),(l()(),e._3(18,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                                      "])),(l()(),e._3(20,0,null,0,2,"amexio-label",[["font-color","white"]],null,null,null,t._119,t._16)),e._2(21,114688,null,0,i._44,[],{fontColor:[0,"fontColor"]},null),(l()(),e._25(-1,0,["Please Enter Name"])),(l()(),e._3(23,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                                      "])),(l()(),e._3(25,0,null,0,2,"amexio-label",[["font-color","white"]],null,null,null,t._119,t._16)),e._2(26,114688,null,0,i._44,[],{fontColor:[0,"fontColor"]},null),(l()(),e._25(-1,0,["Please Enter Phone No."])),(l()(),e._25(-1,0,["\n                                   "])),(l()(),e._25(-1,0,["\n                                 "])),(l()(),e._25(-1,null,["\n                      "]))],function(l,n){l(n,2,0),l(n,5,0,"2"),l(n,8,0,"\tfa fa-times-circle-o"),l(n,13,0,"10"),l(n,16,0,"small-bold","white"),l(n,21,0,"white"),l(n,26,0,"white")},function(l,n){l(n,4,0,e._16(n,5).colclass),l(n,12,0,e._16(n,13).colclass)})}function h(l){return e._27(0,[(l()(),e._25(-1,null,["\n\n                        "])),(l()(),e._3(1,0,null,null,22,"amexio-row",[],null,null,null,t._73,t.w)),e._2(2,1163264,null,0,i.F,[],null,null),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._3(4,0,null,0,6,"amexio-column",[["size","2"]],[[8,"className",0]],null,null,t._60,t.j)),e._2(5,114688,null,0,i.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                            "])),(l()(),e._3(7,0,null,0,2,"amexio-image",[["style","font-size: 25px;"]],null,null,null,t._128,t._25)),e._2(8,114688,null,0,i._54,[],{iconclass:[0,"iconclass"]},null),(l()(),e._25(-1,null,["\n                            "])),(l()(),e._25(-1,0,[" \xa0\xa0\n                          "])),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._3(12,0,null,0,10,"amexio-column",[["size","8"]],[[8,"className",0]],null,null,t._60,t.j)),e._2(13,114688,null,0,i.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                            "])),(l()(),e._3(15,0,null,0,2,"amexio-label",[["font-color","white"],["size","small-bold"]],null,null,null,t._119,t._16)),e._2(16,114688,null,0,i._44,[],{styleClass:[0,"styleClass"],fontColor:[1,"fontColor"]},null),(l()(),e._25(-1,0,["Success Message "])),(l()(),e._25(-1,0,["\n                            "])),(l()(),e._3(19,0,null,0,2,"amexio-label",[["font-color","white"]],null,null,null,t._119,t._16)),e._2(20,114688,null,0,i._44,[],{fontColor:[0,"fontColor"]},null),(l()(),e._25(-1,0,[" Order Submitted "])),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._25(-1,null,["\n                        \n                      "]))],function(l,n){l(n,2,0),l(n,5,0,"2"),l(n,8,0,"\tfa fa-check"),l(n,13,0,"8"),l(n,16,0,"small-bold","white"),l(n,20,0,"white")},function(l,n){l(n,4,0,e._16(n,5).colclass),l(n,12,0,e._16(n,13).colclass)})}function g(l){return e._27(0,[(l()(),e._25(-1,null,["\n\n\n                        "])),(l()(),e._3(1,0,null,null,10,"amexio-box",[],null,null,null,t._57,t.g)),e._2(2,114688,null,0,i.f,[],null,null),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._3(4,0,null,0,2,"amexio-image",[["style","font-size: 25px;"]],null,null,null,t._128,t._25)),e._2(5,114688,null,0,i._54,[],{iconclass:[0,"iconclass"]},null),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._25(-1,0,[" \xa0\xa0\n                          "])),(l()(),e._3(8,0,null,0,2,"amexio-label",[["font-color","white"]],null,null,null,t._119,t._16)),e._2(9,114688,null,0,i._44,[],{fontColor:[0,"fontColor"]},null),(l()(),e._25(-1,0,["Event Registered"])),(l()(),e._25(-1,0,["\n                          \n                        "])),(l()(),e._25(-1,null,["\n                        \n                      "]))],function(l,n){l(n,2,0),l(n,5,0,"\tfa fa-check-square-o"),l(n,9,0,"white")},null)}function y(l){return e._27(0,[(l()(),e._25(-1,null,["\n                        "])),(l()(),e._3(1,0,null,null,18,"amexio-box",[["padding","true"]],null,null,null,t._57,t.g)),e._2(2,114688,null,0,i.f,[],{padding:[0,"padding"],width:[1,"width"]},null),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._3(4,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,t._119,t._16)),e._2(5,114688,null,0,i._44,[],{styleClass:[0,"styleClass"]},null),(l()(),e._25(-1,0,["Cookies Policy"])),(l()(),e._3(7,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._3(9,0,null,0,2,"amexio-label",[],null,null,null,t._119,t._16)),e._2(10,114688,null,0,i._44,[],null,null),(l()(),e._25(-1,0,["We use cookies to help our site work, to understand how it is used and analytics cookies to learn more and track the website's performance. By continuing to use this site,you accept our use of cookies."])),(l()(),e._3(12,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._3(14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n                          "])),(l()(),e._3(16,0,null,0,2,"amexio-button",[],null,[[null,"onClick"]],function(l,n,o){var e=!0;return"onClick"===n&&(e=!1!==l.component.closeCookie()&&e),e},t._151,t._48)),e._2(17,114688,null,0,i._86,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"],size:[3,"size"]},{onClick:"onClick"}),(l()(),e._25(-1,null,["\n                          "])),(l()(),e._25(-1,0,["\n                        "])),(l()(),e._25(-1,null,["\n                      "]))],function(l,n){l(n,2,0,"true","225px"),l(n,5,0,"medium-bold"),l(n,10,0),l(n,17,0,"Accept & Close","theme-color","cookies accepted button","small")},null)}function x(l){return e._27(0,[(l()(),e._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(3,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),e._2(4,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function b(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),e._2(3,4243456,null,0,_.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function C(l){return e._27(0,[(l()(),e._25(-1,null,["\n    \n   \n    "])),(l()(),e._3(1,0,null,null,278,"amexio-card",[["header","true"]],null,null,null,t._58,t.h)),e._2(2,5357568,null,3,i.g,[],{header:[0,"header"]},null),e._23(603979776,1,{amexioHeader:1}),e._23(603979776,2,{amexioBody:1}),e._23(603979776,3,{amexioFooter:1}),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(7,0,null,0,2,"amexio-header",[],null,null,null,t._67,t.q)),e._2(8,114688,[[1,4]],0,i.u,[],null,null),(l()(),e._25(-1,0,["\n         App Notification's \n      "])),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(11,0,null,1,267,"amexio-body",[],null,null,null,t._54,t.d)),e._2(12,114688,[[2,4]],0,i.c,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(14,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Notification provides a way to let user know through pop-up messages."])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(17,16777216,null,0,260,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,o){var u=!0;return"document:click"===n&&(u=!1!==e._16(l,18).onWindowClick()&&u),"document:scroll"===n&&(u=!1!==e._16(l,18).onscroll()&&u),u},t._77,t.A)),e._2(18,5357568,null,2,i.J,[e.B,e.j,e.M],null,null),e._23(603979776,4,{queryTabs:1}),e._23(603979776,5,{queryAction:1}),(l()(),e._25(-1,1,["\n          "])),(l()(),e._3(22,0,null,1,190,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,t._78,t.B)),e._2(23,114688,[[4,4]],0,i.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(25,0,null,0,92,"amexio-row",[],null,null,null,t._73,t.w)),e._2(26,1163264,null,0,i.F,[],null,null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(28,0,null,0,28,"amexio-column",[["size","4"]],[[8,"className",0]],null,null,t._60,t.j)),e._2(29,114688,null,0,i.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(31,0,null,0,24,"amexio-card",[],null,null,null,t._58,t.h)),e._2(32,5357568,null,3,i.g,[],{header:[0,"header"]},null),e._23(603979776,6,{amexioHeader:1}),e._23(603979776,7,{amexioBody:1}),e._23(603979776,8,{amexioFooter:1}),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(37,0,null,0,2,"amexio-header",[],null,null,null,t._67,t.q)),e._2(38,114688,[[6,4]],0,i.u,[],null,null),(l()(),e._25(-1,0,[" Vertical Top Notification "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(41,0,null,1,13,"amexio-body",[],null,null,null,t._54,t.d)),e._2(42,114688,[[7,4]],0,i.c,[],null,null),(l()(),e._25(-1,0,["\n\n                    "])),(l()(),e._3(44,0,null,0,5,"amexio-notification",[],null,[["window","keyup"]],function(l,n,o){var u=!0;return"window:keyup"===n&&(u=!1!==e._16(l,45).keyEvent(o)&&u),u},t._70,t.t)),e._2(45,114688,null,1,i.B,[e.h],{messageData:[0,"messageData"],verticalposition:[1,"verticalposition"],horizontalposition:[2,"horizontalposition"],autodismissmsg:[3,"autodismissmsg"],autodismissmsginterval:[4,"autodismissmsginterval"],closeonescape:[5,"closeonescape"],backgroundColor:[6,"backgroundColor"],foregroundColor:[7,"foregroundColor"]},null),e._23(335544320,9,{notificationTemplate:0}),(l()(),e._25(-1,null,["\n\n                      "])),(l()(),e.Y(0,[[9,2],["amexioNotificationTemp",2]],null,0,null,d)),(l()(),e._25(-1,null,["\n\n\n                    "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(51,0,null,0,2,"amexio-button",[],null,[[null,"onClick"]],function(l,n,o){var e=!0;return"onClick"===n&&(e=!1!==l.component.verticalLeftNotification()&&e),e},t._151,t._48)),e._2(52,114688,null,0,i._86,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},{onClick:"onClick"}),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(58,0,null,0,28,"amexio-column",[["size","4"]],[[8,"className",0]],null,null,t._60,t.j)),e._2(59,114688,null,0,i.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(61,0,null,0,24,"amexio-card",[],null,null,null,t._58,t.h)),e._2(62,5357568,null,3,i.g,[],{header:[0,"header"]},null),e._23(603979776,10,{amexioHeader:1}),e._23(603979776,11,{amexioBody:1}),e._23(603979776,12,{amexioFooter:1}),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(67,0,null,0,2,"amexio-header",[],null,null,null,t._67,t.q)),e._2(68,114688,[[10,4]],0,i.u,[],null,null),(l()(),e._25(-1,0,[" Vertical Center Notification "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(71,0,null,1,13,"amexio-body",[],null,null,null,t._54,t.d)),e._2(72,114688,[[11,4]],0,i.c,[],null,null),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(74,0,null,0,5,"amexio-notification",[],null,[["window","keyup"]],function(l,n,o){var u=!0;return"window:keyup"===n&&(u=!1!==e._16(l,75).keyEvent(o)&&u),u},t._70,t.t)),e._2(75,114688,null,1,i.B,[e.h],{messageData:[0,"messageData"],verticalposition:[1,"verticalposition"],horizontalposition:[2,"horizontalposition"],autodismissmsg:[3,"autodismissmsg"],autodismissmsginterval:[4,"autodismissmsginterval"],closeonescape:[5,"closeonescape"],backgroundColor:[6,"backgroundColor"]},null),e._23(335544320,13,{notificationTemplate:0}),(l()(),e._25(-1,null,["\n                      "])),(l()(),e.Y(0,[[13,2],["amexioNotificationTemp",2]],null,0,null,p)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,0,[" \n                    "])),(l()(),e._3(81,0,null,0,2,"amexio-button",[],null,[[null,"onClick"]],function(l,n,o){var e=!0;return"onClick"===n&&(e=!1!==l.component.verticalCenterNotification()&&e),e},t._151,t._48)),e._2(82,114688,null,0,i._86,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},{onClick:"onClick"}),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(88,0,null,0,28,"amexio-column",[["size","4"]],[[8,"className",0]],null,null,t._60,t.j)),e._2(89,114688,null,0,i.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(91,0,null,0,24,"amexio-card",[],null,null,null,t._58,t.h)),e._2(92,5357568,null,3,i.g,[],{header:[0,"header"]},null),e._23(603979776,14,{amexioHeader:1}),e._23(603979776,15,{amexioBody:1}),e._23(603979776,16,{amexioFooter:1}),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(97,0,null,0,2,"amexio-header",[],null,null,null,t._67,t.q)),e._2(98,114688,[[14,4]],0,i.u,[],null,null),(l()(),e._25(-1,0,[" Vertical Right Notification "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(101,0,null,1,13,"amexio-body",[],null,null,null,t._54,t.d)),e._2(102,114688,[[15,4]],0,i.c,[],null,null),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(104,0,null,0,5,"amexio-notification",[],null,[["window","keyup"]],function(l,n,o){var u=!0;return"window:keyup"===n&&(u=!1!==e._16(l,105).keyEvent(o)&&u),u},t._70,t.t)),e._2(105,114688,null,1,i.B,[e.h],{messageData:[0,"messageData"],verticalposition:[1,"verticalposition"],horizontalposition:[2,"horizontalposition"],autodismissmsg:[3,"autodismissmsg"],autodismissmsginterval:[4,"autodismissmsginterval"],closeonescape:[5,"closeonescape"],backgroundColor:[6,"backgroundColor"]},null),e._23(335544320,17,{notificationTemplate:0}),(l()(),e._25(-1,null,["\n                      "])),(l()(),e.Y(0,[[17,2],["amexioNotificationTemp",2]],null,0,null,f)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(111,0,null,0,2,"amexio-button",[],null,[[null,"onClick"]],function(l,n,o){var e=!0;return"onClick"===n&&(e=!1!==l.component.verticalRightNotification()&&e),e},t._151,t._48)),e._2(112,114688,null,0,i._86,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},{onClick:"onClick"}),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["\n            \n            \n            "])),(l()(),e._3(119,0,null,0,92,"amexio-row",[],null,null,null,t._73,t.w)),e._2(120,1163264,null,0,i.F,[],null,null),(l()(),e._25(-1,0,["\n\n              "])),(l()(),e._3(122,0,null,0,28,"amexio-column",[["size","4"]],[[8,"className",0]],null,null,t._60,t.j)),e._2(123,114688,null,0,i.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(125,0,null,0,24,"amexio-card",[],null,null,null,t._58,t.h)),e._2(126,5357568,null,3,i.g,[],{header:[0,"header"]},null),e._23(603979776,18,{amexioHeader:1}),e._23(603979776,19,{amexioBody:1}),e._23(603979776,20,{amexioFooter:1}),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(131,0,null,0,2,"amexio-header",[],null,null,null,t._67,t.q)),e._2(132,114688,[[18,4]],0,i.u,[],null,null),(l()(),e._25(-1,0,[" Horizontal Left Notification "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(135,0,null,1,13,"amexio-body",[],null,null,null,t._54,t.d)),e._2(136,114688,[[19,4]],0,i.c,[],null,null),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(138,0,null,0,5,"amexio-notification",[],null,[["window","keyup"]],function(l,n,o){var u=!0;return"window:keyup"===n&&(u=!1!==e._16(l,139).keyEvent(o)&&u),u},t._70,t.t)),e._2(139,114688,null,1,i.B,[e.h],{messageData:[0,"messageData"],verticalposition:[1,"verticalposition"],horizontalposition:[2,"horizontalposition"],autodismissmsg:[3,"autodismissmsg"],autodismissmsginterval:[4,"autodismissmsginterval"],closeonescape:[5,"closeonescape"],backgroundColor:[6,"backgroundColor"]},null),e._23(335544320,21,{notificationTemplate:0}),(l()(),e._25(-1,null,["\n                      "])),(l()(),e.Y(0,[[21,2],["amexioNotificationTemp",2]],null,0,null,h)),(l()(),e._25(-1,null,["\n                      \n                    "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(145,0,null,0,2,"amexio-button",[],null,[[null,"onClick"]],function(l,n,o){var e=!0;return"onClick"===n&&(e=!1!==l.component.horizontalLeftNotification()&&e),e},t._151,t._48)),e._2(146,114688,null,0,i._86,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},{onClick:"onClick"}),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,0,["\n\n                  "])),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(152,0,null,0,28,"amexio-column",[["size","4"]],[[8,"className",0]],null,null,t._60,t.j)),e._2(153,114688,null,0,i.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(155,0,null,0,24,"amexio-card",[],null,null,null,t._58,t.h)),e._2(156,5357568,null,3,i.g,[],{header:[0,"header"]},null),e._23(603979776,22,{amexioHeader:1}),e._23(603979776,23,{amexioBody:1}),e._23(603979776,24,{amexioFooter:1}),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(161,0,null,0,2,"amexio-header",[],null,null,null,t._67,t.q)),e._2(162,114688,[[22,4]],0,i.u,[],null,null),(l()(),e._25(-1,0,[" Horizontal Center Notification "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(165,0,null,1,13,"amexio-body",[],null,null,null,t._54,t.d)),e._2(166,114688,[[23,4]],0,i.c,[],null,null),(l()(),e._25(-1,0,["\n\n                    "])),(l()(),e._3(168,0,null,0,5,"amexio-notification",[],null,[["window","keyup"]],function(l,n,o){var u=!0;return"window:keyup"===n&&(u=!1!==e._16(l,169).keyEvent(o)&&u),u},t._70,t.t)),e._2(169,114688,null,1,i.B,[e.h],{messageData:[0,"messageData"],verticalposition:[1,"verticalposition"],horizontalposition:[2,"horizontalposition"],autodismissmsg:[3,"autodismissmsg"],autodismissmsginterval:[4,"autodismissmsginterval"],closeonescape:[5,"closeonescape"],backgroundColor:[6,"backgroundColor"],foregroundColor:[7,"foregroundColor"]},null),e._23(335544320,25,{notificationTemplate:0}),(l()(),e._25(-1,null,["\n                      "])),(l()(),e.Y(0,[[25,2],["amexioNotificationTemp",2]],null,0,null,g)),(l()(),e._25(-1,null,["\n                      \n                    "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(175,0,null,0,2,"amexio-button",[],null,[[null,"onClick"]],function(l,n,o){var e=!0;return"onClick"===n&&(e=!1!==l.component.horizontalCenterNotification()&&e),e},t._151,t._48)),e._2(176,114688,null,0,i._86,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},{onClick:"onClick"}),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,0,["\n\n                  "])),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,0,["\n\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(182,0,null,0,28,"amexio-column",[["size","4"]],[[8,"className",0]],null,null,t._60,t.j)),e._2(183,114688,null,0,i.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(185,0,null,0,24,"amexio-card",[],null,null,null,t._58,t.h)),e._2(186,5357568,null,3,i.g,[],{header:[0,"header"]},null),e._23(603979776,26,{amexioHeader:1}),e._23(603979776,27,{amexioBody:1}),e._23(603979776,28,{amexioFooter:1}),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(191,0,null,0,2,"amexio-header",[],null,null,null,t._67,t.q)),e._2(192,114688,[[26,4]],0,i.u,[],null,null),(l()(),e._25(-1,0,[" Horizontal Right Notification "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(195,0,null,1,13,"amexio-body",[],null,null,null,t._54,t.d)),e._2(196,114688,[[27,4]],0,i.c,[],null,null),(l()(),e._25(-1,0,["\n\n                    "])),(l()(),e._3(198,0,null,0,5,"amexio-notification",[],null,[["window","keyup"]],function(l,n,o){var u=!0;return"window:keyup"===n&&(u=!1!==e._16(l,199).keyEvent(o)&&u),u},t._70,t.t)),e._2(199,114688,null,1,i.B,[e.h],{messageData:[0,"messageData"],verticalposition:[1,"verticalposition"],horizontalposition:[2,"horizontalposition"],autodismissmsg:[3,"autodismissmsg"],autodismissmsginterval:[4,"autodismissmsginterval"],closeonescape:[5,"closeonescape"],backgroundColor:[6,"backgroundColor"],foregroundColor:[7,"foregroundColor"]},null),e._23(335544320,29,{notificationTemplate:0}),(l()(),e._25(-1,null,["\n\n                      "])),(l()(),e.Y(0,[[29,2],["amexioNotificationTemp",2]],null,0,null,y)),(l()(),e._25(-1,null,["\n\n\n                    "])),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(205,0,null,0,2,"amexio-button",[],null,[[null,"onClick"]],function(l,n,o){var e=!0;return"onClick"===n&&(e=!1!==l.component.horizontalRightNotification()&&e),e},t._151,t._48)),e._2(206,114688,null,0,i._86,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},{onClick:"onClick"}),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,0,["\n\n                  "])),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,0,["\n\n              "])),(l()(),e._25(-1,0,["\n\n            "])),(l()(),e._25(-1,0,["\n           \n            \n          "])),(l()(),e._25(-1,1,["\n          "])),(l()(),e._3(214,0,null,1,27,"amexio-tab",[["title","API Reference"]],null,null,null,t._78,t.B)),e._2(215,114688,[[4,4]],0,i.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(217,0,null,0,23,"amexio-datagrid",[["title","Propeties<amexio-notification>"]],null,null,null,t._135,t._32)),e._2(218,1425408,null,1,i._66,[i._5,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,30,{columnRef:1}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(221,0,null,null,3,"amexio-data-table-column",[],null,null,null,t._136,t._33)),e._2(222,49152,[[30,4]],2,i._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,31,{headerTemplate:0}),e._23(335544320,32,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(226,0,null,null,3,"amexio-data-table-column",[],null,null,null,t._136,t._33)),e._2(227,49152,[[30,4]],2,i._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,33,{headerTemplate:0}),e._23(335544320,34,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(231,0,null,null,3,"amexio-data-table-column",[],null,null,null,t._136,t._33)),e._2(232,49152,[[30,4]],2,i._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,35,{headerTemplate:0}),e._23(335544320,36,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(236,0,null,null,3,"amexio-data-table-column",[],null,null,null,t._136,t._33)),e._2(237,49152,[[30,4]],2,i._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,37,{headerTemplate:0}),e._23(335544320,38,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n\n          "])),(l()(),e._25(-1,1,["\n          "])),(l()(),e._3(243,0,null,1,24,"amexio-tab",[["title","Source"]],null,null,null,t._78,t.B)),e._2(244,114688,[[4,4]],0,i.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(246,0,null,0,20,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n            "])),(l()(),e._3(248,0,null,null,17,"amexio-vertical-tab-view",[],null,null,null,t._80,t.D)),e._2(249,5357568,null,1,i.O,[e.B],null,null),e._23(603979776,39,{queryTabs:1}),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(252,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,t._78,t.B)),e._2(253,114688,[[39,4]],0,i.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,x)),e._2(256,16384,null,0,s.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(259,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,t._78,t.B)),e._2(260,114688,[[39,4]],0,i.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,b)),e._2(263,16384,null,0,s.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,1,["\n          "])),(l()(),e._3(269,0,null,1,7,"amexio-tab",[["title","Live"]],null,null,null,t._78,t.B)),e._2(270,114688,[[4,4]],0,i.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n           "])),(l()(),e._3(272,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Amexio Sandbox"])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(275,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-notification?embed=1&file=app/navigation/notification/notification.demo.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,1,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n    "])),(l()(),e._25(-1,null,["\n    "])),(l()(),e._25(-1,null,["\n\n  "]))],function(l,n){var o=n.component;l(n,2,0,"true"),l(n,8,0),l(n,12,0),l(n,18,0),l(n,23,0,"Demo","true"),l(n,26,0),l(n,29,0,"4"),l(n,32,0,!0),l(n,38,0),l(n,42,0),l(n,45,0,o.verticalLeftMessageArray,"top","left",!0,6e3,!0,"orange ","black"),l(n,52,0,"Info Top Left","primary","Primary Button"),l(n,59,0,"4"),l(n,62,0,!0),l(n,68,0),l(n,72,0),l(n,75,0,o.verticalCenterMessageArray,"top","center",!0,6e3,!0,"yellow"),l(n,82,0,"Info center Popup","primary","Primary Button"),l(n,89,0,"4"),l(n,92,0,!0),l(n,98,0),l(n,102,0),l(n,105,0,o.verticalRightMessageArray,"top","right",!0,4e3,!0,"red"),l(n,112,0,"Info Right Popup","primary","Primary Button"),l(n,120,0),l(n,123,0,"4"),l(n,126,0,!0),l(n,132,0),l(n,136,0),l(n,139,0,o.horizontalLeftMessageArray,"bottom","left",!0,4e3,!0,"green"),l(n,146,0,"Info Bottom Left ","primary","Primary Button"),l(n,153,0,"4"),l(n,156,0,!0),l(n,162,0),l(n,166,0),l(n,169,0,o.horizontalCenterMessageArray,"bottom","center",!0,4e3,!0,"black","white"),l(n,176,0,"Info Bottom center","primary","Primary Button"),l(n,183,0,"4"),l(n,186,0,!0),l(n,192,0),l(n,196,0),l(n,199,0,o.horizontalRightMessageArray,"bottom","right",!1,6e3,!0,"orange","black"),l(n,206,0,"Info Bottom Right","primary","Primary Button"),l(n,215,0,"API Reference"),l(n,218,0,"Propeties<amexio-notification>","assets/apireference/navigation/notification.json","get","properties",!1,!1),l(n,222,0,"Name","name",!1,"string",25),l(n,227,0,"Type","type",!1,"string",10),l(n,232,0,"Default","default",!1,"string",10),l(n,237,0,"Description","description",!1,"string",55),l(n,244,0,"Source"),l(n,249,0),l(n,253,0,"HTML",!0),l(n,256,0,o.htmlCode),l(n,260,0,"Type Script"),l(n,263,0,o.typeScriptCode),l(n,270,0,"Live")},function(l,n){l(n,28,0,e._16(n,29).colclass),l(n,58,0,e._16(n,59).colclass),l(n,88,0,e._16(n,89).colclass),l(n,122,0,e._16(n,123).colclass),l(n,152,0,e._16(n,153).colclass),l(n,182,0,e._16(n,183).colclass)})}var v=e.Z("notification-demo",c,function(l){return e._27(0,[(l()(),e._3(0,0,null,null,1,"notification-demo",[],null,null,null,C,m)),e._2(1,49152,null,0,c,[r.c],null,null)],null,null)},{},{},[]),k=o("0nO6"),z=o("UHIZ");o.d(n,"NotificationDemoModuleNgFactory",function(){return w});var w=e._0(u,[],function(l){return e._12([e._13(512,e.j,e.W,[[8,[t.a,v]],[3,e.j],e.v]),e._13(4608,s.n,s.m,[e.s,[2,s.u]]),e._13(4608,k.s,k.s,[]),e._13(4608,r.h,r.m,[s.c,e.z,r.k]),e._13(4608,r.n,r.n,[r.h,r.l]),e._13(5120,r.a,function(l){return[l]},[r.n]),e._13(4608,r.j,r.j,[]),e._13(6144,r.i,null,[r.j]),e._13(4608,r.g,r.g,[r.i]),e._13(6144,r.b,null,[r.g]),e._13(5120,r.f,r.o,[r.b,[2,r.a]]),e._13(4608,r.c,r.c,[r.f]),e._13(4608,i._5,i._5,[r.c]),e._13(4608,i._15,i._15,[e.z]),e._13(4608,i._22,i._22,[]),e._13(4608,i._40,i._40,[]),e._13(512,s.b,s.b,[]),e._13(512,k.p,k.p,[]),e._13(512,k.e,k.e,[]),e._13(512,r.e,r.e,[]),e._13(512,r.d,r.d,[]),e._13(512,_.b,_.b,[]),e._13(512,i.v,i.v,[]),e._13(512,i.t,i.t,[]),e._13(512,i.y,i.y,[]),e._13(512,i.A,i.A,[]),e._13(512,i.D,i.D,[]),e._13(512,i.l,i.l,[]),e._13(512,i.Q,i.Q,[]),e._13(512,z.n,z.n,[[2,z.s],[2,z.m]]),e._13(512,u,u,[]),e._13(256,r.k,"XSRF-TOKEN",[]),e._13(256,r.l,"X-XSRF-TOKEN",[]),e._13(1024,z.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})}});