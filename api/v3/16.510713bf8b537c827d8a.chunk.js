webpackJsonp([16],{N5aN:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("/oeL"),t=u("wxsT"),o=u("nu5T"),d=u("qbdv"),a=u("bm2B"),s=u("CPp0"),i=u("0QKF"),c=u("fc+i"),p=u("Ahuc"),r=u("BkNc"),m=u("k8FD"),b=(u.n(m),u("kL+h")),h=u("hwnl");u.d(n,"StepBoxModuleNgFactory",function(){return x});var x=e["ɵcmf"](t.a,[],function(l){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[o.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[e.LOCALE_ID]),e["ɵmpd"](4608,a["ɵi"],a["ɵi"],[]),e["ɵmpd"](4608,s.BrowserXhr,s.BrowserXhr,[]),e["ɵmpd"](4608,s.ResponseOptions,s.BaseResponseOptions,[]),e["ɵmpd"](5120,s.XSRFStrategy,s["ɵb"],[]),e["ɵmpd"](4608,s.XHRBackend,s.XHRBackend,[s.BrowserXhr,s.ResponseOptions,s.XSRFStrategy]),e["ɵmpd"](4608,s.RequestOptions,s.BaseRequestOptions,[]),e["ɵmpd"](5120,s.Http,s["ɵc"],[s.XHRBackend,s.RequestOptions]),e["ɵmpd"](4608,i.a,i.a,[c.u]),e["ɵmpd"](4608,p.a,p.a,[c.b]),e["ɵmpd"](512,d.CommonModule,d.CommonModule,[]),e["ɵmpd"](512,r.x,r.x,[[2,r.m],[2,r.c]]),e["ɵmpd"](512,a["ɵba"],a["ɵba"],[]),e["ɵmpd"](512,a.FormsModule,a.FormsModule,[]),e["ɵmpd"](512,s.HttpModule,s.HttpModule,[]),e["ɵmpd"](512,m.AmexioWidgetModule,m.AmexioWidgetModule,[]),e["ɵmpd"](512,b.a,b.a,[]),e["ɵmpd"](512,t.a,t.a,[]),e["ɵmpd"](1024,r.t,function(){return[[{path:"",component:h.a}]]},[])])})},hwnl:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){this.copyMsgArray=[],this.clickMsgArray=[],this.user=!1,this.shop=!0,this.payment=!1,this.confirmation=!1,this.htmlCode='\n      \x3c!--Normal Step box with index --\x3e\n        <p><strong>Step box</strong></p>\n        <amexio-steps [showBlockBox]="true" [showIndex]="true" >\n             <amexio-step-block [label]="\'User\'" [active]="true" ></amexio-step-block>\n             <amexio-step-block [label]="\'Shop\'" [active]="false" ></amexio-step-block>\n             <amexio-step-block [label]="\'Payment\'" [active]="false"></amexio-step-block>\n             <amexio-step-block [label]="\'Confirmation\'" [active]="false" ></amexio-step-block>\n        </amexio-steps>\n    \n      \x3c!--Step box & icons with clickabel --\x3e\n      <amexio-steps [showBlockBox]="true" [showIndex]="true" (onBlockClick)="stepBlockClick($event)">\n             <amexio-step-block [label]="\'User\'" [active]="user" ></amexio-step-block>\n             <amexio-step-block [label]="\'Shop\'" [active]="shop" ></amexio-step-block>\n             <amexio-step-block [label]="\'Payment\'" [active]="payment"></amexio-step-block>\n             <amexio-step-block [label]="\'Confirmation\'" [active]="confirmation"></amexio-step-block>\n      </amexio-steps>\n    \n      \x3c!--Step-box index --\x3e\n      <amexio-steps [showIndex]="true">\n             <amexio-step-block [label]="\'step-1\'" [active]="true"></amexio-step-block>\n             <amexio-step-block [label]="\'step-2\'" [active]="false"></amexio-step-block>\n             <amexio-step-block [label]="\'step-3\'" [active]="false"></amexio-step-block>\n             <amexio-step-block [label]="\'step-4\'" [active]="false"></amexio-step-block>\n      </amexio-steps>\n  \n    ',this.tsCode="import {Component, OnInit} from '@angular/core';\n\n@Component({\n  selector: 'step-box-demo',\n  templateUrl: 'stepbox.demo.html'\n})\nexport class StepBoxDemoComponent implements OnInit {\n clickMsgArray:any=[];\n user:boolean;\n  shop:boolean;\n  payment:boolean;\n  confirmation:boolean;\n  constructor() {\n   this.user=false;\n   this.shop=true;\n   this.payment=false;\n   this.confirmation=false;\n  }\n  \n  // step box click event\n  stepBlockClick(event:any){\n    if(event.label==\"User\"){\n      this.updateFlag(true,false,false,false);\n      this.showMsg(\"Step 1 User\");\n    }else if(event.label==\"Shop\"){\n      this.updateFlag(false,true,false,false);\n      this.showMsg(\"Step 2 Shop\");\n    }else if(event.label==\"Payment\"){\n      this.showMsg(\"Step 3 Payment\");\n      this.updateFlag(false,false,true,false);\n    }else if(event.label==\"Confirmation\"){\n      this.updateFlag(false,false,false,true);\n      this.showMsg(\"Step 4 Confirmation\");\n    }\n  }\n  updateFlag(user:boolean,shop:boolean,payment:boolean,confirmation:boolean){\n    this.user=user;\n    this.shop=shop;\n    this.payment=payment;\n    this.confirmation=confirmation;\n  }\n  showMsg(msg){\n    if(this.clickMsgArray.length>=1){\n      this.clickMsgArray=[];\n      this.clickMsgArray.push({'msg':msg, 'type' : 'info'});\n    }else{\n      this.clickMsgArray.push({'msg':msg, 'type' : 'info'});\n    }\n  }\n  ngOnInit() {}\n}\n    "}return l.prototype.stepBlockClick=function(l){"User"==l.label?(this.updateFlag(!0,!1,!1,!1),this.showMsg("Step 1 User")):"Shop"==l.label?(this.updateFlag(!1,!0,!1,!1),this.showMsg("Step 2 Shop")):"Payment"==l.label?(this.showMsg("Step 3 Payment"),this.updateFlag(!1,!1,!0,!1)):"Confirmation"==l.label&&(this.updateFlag(!1,!1,!1,!0),this.showMsg("Step 4 Confirmation"))},l.prototype.updateFlag=function(l,n,u,e){this.user=l,this.shop=n,this.payment=u,this.confirmation=e},l.prototype.showMsg=function(l){this.clickMsgArray.length>=1?(this.clickMsgArray=[],this.clickMsgArray.push({msg:l,type:"info"})):this.clickMsgArray.push({msg:l,type:"info"})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},nu5T:function(l,n,u){"use strict";function e(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,null,null,356,"amexio-card-pane",[],null,null,null,d.a,d.b)),o["ɵdid"](4308992,null,0,a.CardComponent,[],{enableFooter:[0,"enableFooter"]},null),(l()(),o["ɵted"](null,["\n  "])),(l()(),o["ɵeld"](0,null,0,5,"amexio-pane-header",[],null,null,null,d.c,d.d)),o["ɵdid"](114688,null,0,a.PaneHeaderComponent,[],null,null),(l()(),o["ɵted"](0,["\n    "])),(l()(),o["ɵeld"](0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Step-box Component"])),(l()(),o["ɵted"](0,["\n  "])),(l()(),o["ɵted"](null,["\n  "])),(l()(),o["ɵeld"](0,null,1,345,"amexio-pane-body",[],null,null,null,d.e,d.f)),o["ɵdid"](114688,null,0,a.PaneBodyComponent,[],null,null),(l()(),o["ɵted"](0,["\n    "])),(l()(),o["ɵeld"](0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Step-box component is an indicator for the steps in a workflow."])),(l()(),o["ɵted"](0,["\n    "])),(l()(),o["ɵeld"](0,null,0,338,"amexio-tab-pane",[],null,null,null,d.g,d.h)),o["ɵdid"](5357568,null,1,a.TabPaneComponent,[],null,null),o["ɵqud"](603979776,1,{queryTabs:1}),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵeld"](0,null,0,104,"amexio-tab",[["title","Demo"]],null,null,null,d.i,d.j)),o["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,98,"amexio-card-pane",[],null,null,null,d.a,d.b)),o["ɵdid"](4308992,null,0,a.CardComponent,[],{enableFooter:[0,"enableFooter"]},null),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,0,2,"amexio-pane-header",[],null,null,null,d.c,d.d)),o["ɵdid"](114688,null,0,a.PaneHeaderComponent,[],null,null),(l()(),o["ɵted"](0,["\n            Step-box Component\n          "])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,1,90,"amexio-pane-body",[],null,null,null,d.e,d.f)),o["ɵdid"](114688,null,0,a.PaneBodyComponent,[],null,null),(l()(),o["ɵted"](0,["\n            "])),(l()(),o["ɵeld"](0,null,0,26,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵeld"](0,null,null,23,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,2,"p",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Step box"])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,15,"amexio-steps",[],null,null,null,d.w,d.x)),o["ɵdid"](1163264,null,1,a.StepsComponent,[],{showIndex:[0,"showIndex"],showBlockBox:[1,"showBlockBox"]},null),o["ɵqud"](603979776,2,{stepBlocks:1}),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-step-block",[],null,null,null,d.y,d.z)),o["ɵdid"](114688,[[2,4]],0,a.StepBlockComponent,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-step-block",[],null,null,null,d.y,d.z)),o["ɵdid"](114688,[[2,4]],0,a.StepBlockComponent,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-step-block",[],null,null,null,d.y,d.z)),o["ɵdid"](114688,[[2,4]],0,a.StepBlockComponent,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-step-block",[],null,null,null,d.y,d.z)),o["ɵdid"](114688,[[2,4]],0,a.StepBlockComponent,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵted"](0,["\n            "])),(l()(),o["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](0,["\n            "])),(l()(),o["ɵeld"](0,null,0,26,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵeld"](0,null,null,23,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,2,"p",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Step box with clickabel"])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,15,"amexio-steps",[],null,[[null,"onBlockClick"]],function(l,n,u){var e=!0,t=l.component;if("onBlockClick"===n){e=!1!==t.stepBlockClick(u)&&e}return e},d.w,d.x)),o["ɵdid"](1163264,null,1,a.StepsComponent,[],{showIndex:[0,"showIndex"],showBlockBox:[1,"showBlockBox"]},{onBlockClick:"onBlockClick"}),o["ɵqud"](603979776,3,{stepBlocks:1}),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-step-block",[],null,null,null,d.y,d.z)),o["ɵdid"](114688,[[3,4]],0,a.StepBlockComponent,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-step-block",[],null,null,null,d.y,d.z)),o["ɵdid"](114688,[[3,4]],0,a.StepBlockComponent,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-step-block",[],null,null,null,d.y,d.z)),o["ɵdid"](114688,[[3,4]],0,a.StepBlockComponent,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-step-block",[],null,null,null,d.y,d.z)),o["ɵdid"](114688,[[3,4]],0,a.StepBlockComponent,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵted"](0,["\n            "])),(l()(),o["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](0,["\n            "])),(l()(),o["ɵeld"](0,null,0,26,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵeld"](0,null,null,23,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,2,"p",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Step-box index"])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,15,"amexio-steps",[],null,null,null,d.w,d.x)),o["ɵdid"](1163264,null,1,a.StepsComponent,[],{showIndex:[0,"showIndex"]},null),o["ɵqud"](603979776,4,{stepBlocks:1}),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-step-block",[],null,null,null,d.y,d.z)),o["ɵdid"](114688,[[4,4]],0,a.StepBlockComponent,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-step-block",[],null,null,null,d.y,d.z)),o["ɵdid"](114688,[[4,4]],0,a.StepBlockComponent,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-step-block",[],null,null,null,d.y,d.z)),o["ɵdid"](114688,[[4,4]],0,a.StepBlockComponent,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-step-block",[],null,null,null,d.y,d.z)),o["ɵdid"](114688,[[4,4]],0,a.StepBlockComponent,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵted"](0,["\n          "])),(l()(),o["ɵted"](null,["\n        "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵeld"](0,null,0,184,"amexio-tab",[["title","API Reference"]],null,null,null,d.i,d.j)),o["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),o["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,82,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,4,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,3,"b",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["API Reference: "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["amexio-steps"])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,73,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵeld"](0,null,null,70,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵeld"](0,null,null,67,"table",[["class","table table-sm table-hover"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,64,"tbody",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["showIndex"])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Type: "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["boolean"])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["show circle-boxs."])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["showBlockBox"])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Type: "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["boolean"])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["show step-boxes"])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["showIcon"])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Type: "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["boolean"])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["show icons "])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵted"](null,["\n\n            "])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵted"](null,["\n        "])),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,32,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,3,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,2,"b",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Events"])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,24,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵeld"](0,null,null,21,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵeld"](0,null,null,18,"table",[["class","table table-sm table-hover"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,15,"tbody",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["onBlockClick"])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,5,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,2,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["get selected step-box."])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵted"](null,["\n        "])),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,61,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,5,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,4,"b",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["API Reference: "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["amexio-step-block "])),(l()(),o["ɵted"](null,[" "])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,51,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵeld"](0,null,null,48,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵeld"](0,null,null,45,"table",[["class","table table-sm table-hover"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,42,"tbody",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,18,"tr",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["label"])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,11,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Type: "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["string"])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,2,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["label of step-box.\n                    "])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["active"])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Type: "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["boolean"])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["active step-box.this property is mandatory\n                      "])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵted"](null,["\n        "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵeld"](0,null,0,30,"amexio-tab",[["title","Source"]],null,null,null,d.i,d.j)),o["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,24,"amexio-vertical-left-tab-pane",[],null,null,null,d.m,d.n)),o["ɵdid"](5357568,null,1,a.VerticalLeftTabPaneComponent,[],null,null),o["ɵqud"](603979776,5,{queryTabs:1}),(l()(),o["ɵted"](0,["\n          "])),(l()(),o["ɵeld"](0,null,0,12,"amexio-tab",[["title","Markup"]],null,null,null,d.i,d.j)),o["ɵdid"](114688,[[5,4]],0,a.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),o["ɵted"](0,["\n            "])),(l()(),o["ɵeld"](0,null,0,8,"div",[["style","width: 800px; overflow-y: scroll"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵeld"](0,null,null,1,"clip-copy",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){e=!1!==t.onCopyClick()&&e}return e},i.a,i.b)),o["ɵdid"](114688,null,0,c.a,[],{htmlCode:[0,"htmlCode"]},{onClick:"onClick"}),(l()(),o["ɵted"](null,["\n\n              "])),(l()(),o["ɵeld"](0,null,null,1,"prism-block",[],null,null,null,p.a,p.b)),o["ɵdid"](4243456,null,0,r.a,[o.Renderer2,o.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵted"](0,["\n          "])),(l()(),o["ɵted"](0,["\n          "])),(l()(),o["ɵeld"](0,null,0,5,"amexio-tab",[["title","TypeScript"]],null,null,null,d.i,d.j)),o["ɵdid"](114688,[[5,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),o["ɵted"](0,["\n            "])),(l()(),o["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,p.a,p.b)),o["ɵdid"](4243456,null,0,r.a,[o.Renderer2,o.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),o["ɵted"](0,["\n          "])),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵeld"](0,null,0,9,"amexio-tab",[["title","Plunker"]],null,null,null,d.i,d.j)),o["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,1,"p",[["class","text-md-center text-primary"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["Amexio Sandbox"])),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://embed.plnkr.co/kxi4AJKPdoACmQJPKtd4/"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵted"](0,["\n    "])),(l()(),o["ɵted"](0,["\n  "])),(l()(),o["ɵted"](null,["\n"])),(l()(),o["ɵted"](null,["\n"])),(l()(),o["ɵeld"](0,null,null,1,"amexio-notification",[],null,null,null,d.o,d.p)),o["ɵdid"](114688,null,0,a.NotifyComponent,[o.ChangeDetectorRef],{messageData:[0,"messageData"]},null),(l()(),o["ɵted"](null,["\n"])),(l()(),o["ɵeld"](0,null,null,1,"amexio-notification",[],null,null,null,d.o,d.p)),o["ɵdid"](114688,null,0,a.NotifyComponent,[o.ChangeDetectorRef],{messageData:[0,"messageData"]},null),(l()(),o["ɵted"](null,["\n"]))],function(l,n){var u=n.component;l(n,1,0,!1),l(n,4,0),l(n,11,0),l(n,17,0);l(n,21,0,"Demo",!0);l(n,26,0,!1),l(n,29,0),l(n,33,0);l(n,45,0,!0,!0);l(n,49,0,!0,"User");l(n,52,0,!1,"Shop");l(n,55,0,!1,"Payment");l(n,58,0,!1,"Confirmation");l(n,75,0,!0,!0);l(n,79,0,u.user,"User");l(n,82,0,u.shop,"Shop");l(n,85,0,u.payment,"Payment");l(n,88,0,u.confirmation,"Confirmation");l(n,105,0,!0);l(n,109,0,!0,"step-1");l(n,112,0,!1,"step-2");l(n,115,0,!1,"step-3");l(n,118,0,!1,"step-4");l(n,127,0,"API Reference");l(n,313,0,"Source"),l(n,318,0);l(n,322,0,"Markup",!0),l(n,328,0,u.htmlCode);l(n,331,0,u.htmlCode,"markup");l(n,336,0,"TypeScript");l(n,339,0,u.tsCode,"typescript");l(n,345,0,"Plunker"),l(n,359,0,u.copyMsgArray),l(n,362,0,u.clickMsgArray)},null)}function t(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,null,null,1,"step-box",[],null,null,null,e,b)),o["ɵdid"](114688,null,0,s.a,[],null,null)],function(l,n){l(n,1,0)},null)}var o=u("/oeL"),d=u("Mspa"),a=u("k8FD"),s=(u.n(a),u("hwnl")),i=u("8mzU"),c=u("repp"),p=u("l0f3"),r=u("FMBD");u.d(n,"a",function(){return h});var m=[],b=o["ɵcrt"]({encapsulation:2,styles:m,data:{}}),h=o["ɵccf"]("step-box",s.a,t,{},{},[])},wxsT:function(l,n,u){"use strict";var e=u("waH/"),t=(u.n(e),u("tqEy")),o=(u.n(t),u("hwnl"));u.d(n,"a",function(){return d});var d=(o.a,function(){function l(){}return l}());o.a}});