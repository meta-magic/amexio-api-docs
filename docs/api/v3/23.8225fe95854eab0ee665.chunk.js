webpackJsonp([23],{OkO2:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){this.copyMsgArray=[],this.flag=!1,this.htmlCode='\n<amexio-btn [label]="\'Show\'" [type]="\'default\'" [tooltipMessage]="\'Hide/UnHide\'" (click)="toggle()"> </amexio-btn>\n\n<amexio-window-pane [(showWindow)]="flag" [title]="\'Employee Registration\'" [closable]="true">\n  <amexio-pane-body>\n    <form>\n      <div class="form-group">\n        <amexio-text-input [fieldLabel]="\'Name\'" name ="name"\n                           [placeholder]="\'Enter name\'"\n                           [iconFeedBack]="true">\n        </amexio-text-input>\n      </div>\n      <div class="form-group">\n        <amexio-text-input [fieldLabel]="\'Address\'" name ="address"\n                           [placeholder]="\'Enter address\'"\n                           [iconFeedBack]="true">\n        </amexio-text-input>\n      </div>\n      <div class="form-group">\n        <amexio-text-input [fieldLabel]="\'Phone\'" name ="phone"\n                           [placeholder]="\'Enter phone\'"\n                           [iconFeedBack]="true">\n        </amexio-text-input>\n      </div>\n      <div class="form-group">\n        <amexio-text-input [fieldLabel]="\'Email\'" name ="email"\n                           [placeholder]="\'Enter Email\'"\n                           [iconFeedBack]="true">\n        </amexio-text-input>\n      </div>\n    </form>\n  </amexio-pane-body>\n  <amexio-pane-action>\n    <div style="float: right;">\n      <amexio-btn [label]="\'Save\'" [type]="\'primary\'"></amexio-btn>\n    </div>\n  </amexio-pane-action>\n</amexio-window-pane>\n',this.tsCode="\nimport {Component, OnInit} from '@angular/core';\n\n@Component({\n  selector: 'basic-window-demo',\n templateUrl: 'basicwindow.demo.html'\n})\nexport class BasicWindowDemoComponent implements OnInit {\n\n  flag : boolean;\n\n  constructor() {\n    this.flag=false;\n  }\n  ngOnInit() {}\n  \n  toggle(){\n    this.flag = !this.flag;\n  }  \n}       \n    \n    "}return l.prototype.toggle=function(){this.flag=!this.flag},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},kjZi:function(l,n,u){"use strict";var e=u("waH/"),t=(u.n(e),u("tqEy")),d=(u.n(t),u("OkO2"));u.d(n,"a",function(){return o});var o=(d.a,function(){function l(){}return l}());d.a},kobt:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("/oeL"),t=u("kjZi"),d=u("uUL2"),o=u("qbdv"),a=u("bm2B"),i=u("CPp0"),r=u("0QKF"),p=u("fc+i"),s=u("Ahuc"),c=u("BkNc"),m=u("k8FD"),g=(u.n(m),u("kL+h")),f=u("OkO2");u.d(n,"BasicWindowModuleNgFactory",function(){return C});var C=e["ɵcmf"](t.a,[],function(l){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[d.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[e.LOCALE_ID]),e["ɵmpd"](4608,a["ɵi"],a["ɵi"],[]),e["ɵmpd"](4608,i.BrowserXhr,i.BrowserXhr,[]),e["ɵmpd"](4608,i.ResponseOptions,i.BaseResponseOptions,[]),e["ɵmpd"](5120,i.XSRFStrategy,i["ɵb"],[]),e["ɵmpd"](4608,i.XHRBackend,i.XHRBackend,[i.BrowserXhr,i.ResponseOptions,i.XSRFStrategy]),e["ɵmpd"](4608,i.RequestOptions,i.BaseRequestOptions,[]),e["ɵmpd"](5120,i.Http,i["ɵc"],[i.XHRBackend,i.RequestOptions]),e["ɵmpd"](4608,r.a,r.a,[p.u]),e["ɵmpd"](4608,s.a,s.a,[p.b]),e["ɵmpd"](512,o.CommonModule,o.CommonModule,[]),e["ɵmpd"](512,c.x,c.x,[[2,c.m],[2,c.c]]),e["ɵmpd"](512,a["ɵba"],a["ɵba"],[]),e["ɵmpd"](512,a.FormsModule,a.FormsModule,[]),e["ɵmpd"](512,i.HttpModule,i.HttpModule,[]),e["ɵmpd"](512,m.AmexioWidgetModule,m.AmexioWidgetModule,[]),e["ɵmpd"](512,g.a,g.a,[]),e["ɵmpd"](512,t.a,t.a,[]),e["ɵmpd"](1024,c.t,function(){return[[{path:"",component:f.a}]]},[])])})},uUL2:function(l,n,u){"use strict";function e(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,null,null,271,"amexio-card-pane",[],null,null,null,o.a,o.b)),d["ɵdid"](4308992,null,0,a.CardComponent,[],{enableFooter:[0,"enableFooter"]},null),(l()(),d["ɵted"](null,["\n  "])),(l()(),d["ɵeld"](0,null,0,5,"amexio-pane-header",[],null,null,null,o.c,o.d)),d["ɵdid"](114688,null,0,a.PaneHeaderComponent,[],null,null),(l()(),d["ɵted"](0,["\n    "])),(l()(),d["ɵeld"](0,null,0,1,"h1",[["class","page-header"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["Window Pane Component"])),(l()(),d["ɵted"](0,["\n  "])),(l()(),d["ɵted"](null,["\n  "])),(l()(),d["ɵeld"](0,null,1,260,"amexio-pane-body",[],null,null,null,o.e,o.f)),d["ɵdid"](114688,null,0,a.PaneBodyComponent,[],null,null),(l()(),d["ɵted"](0,["\n    "])),(l()(),d["ɵeld"](0,null,0,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["A Simple Window Pane which renders window based on title, body and actions user has configured"])),(l()(),d["ɵted"](0,["\n    "])),(l()(),d["ɵeld"](0,null,0,253,"amexio-tab-pane",[],null,null,null,o.g,o.h)),d["ɵdid"](5357568,null,1,a.TabPaneComponent,[],null,null),d["ɵqud"](603979776,1,{queryTabs:1}),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵeld"](0,null,0,83,"amexio-tab",[["title","Demo"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](0,["\n          "])),(l()(),d["ɵeld"](0,null,0,2,"amexio-btn",[],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;if("click"===n){e=!1!==t.toggle()&&e}return e},o.y,o.z)),d["ɵdid"](4833280,null,0,a.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"]},null),(l()(),d["ɵted"](null,[" "])),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵeld"](0,null,0,71,"amexio-window-pane",[],null,[[null,"showWindowChange"]],function(l,n,u){var e=!0,t=l.component;if("showWindowChange"===n){e=!1!==(t.flag=u)&&e}return e},o._24,o._25)),d["ɵdid"](4308992,null,0,a.WindowPaneComponent,[],{title:[0,"title"],closable:[1,"closable"],showWindow:[2,"showWindow"]},{showWindowChange:"showWindowChange"}),(l()(),d["ɵted"](null,["\n          "])),(l()(),d["ɵeld"](0,null,0,57,"amexio-pane-body",[],null,null,null,o.e,o.f)),d["ɵdid"](114688,null,0,a.PaneBodyComponent,[],null,null),(l()(),d["ɵted"](0,["\n            "])),(l()(),d["ɵeld"](0,null,0,53,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;if("submit"===n){e=!1!==d["ɵnov"](l,39).onSubmit(u)&&e}if("reset"===n){e=!1!==d["ɵnov"](l,39).onReset()&&e}return e},null,null)),d["ɵdid"](16384,null,0,r["ɵbf"],[],null,null),d["ɵdid"](16384,null,0,r.NgForm,[[8,null],[8,null]],null,null),d["ɵprd"](2048,null,r.ControlContainer,null,[r.NgForm]),d["ɵdid"](16384,null,0,r.NgControlStatusGroup,[r.ControlContainer],null,null),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵeld"](0,null,null,7,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,4,"amexio-text-input",[["name","name"]],null,null,null,o.M,o.N)),d["ɵprd"](5120,null,r.NG_VALUE_ACCESSOR,function(l){return[l]},[a.TextInputComponent]),d["ɵprd"](6144,null,a.FormInputBase,null,[a.TextInputComponent]),d["ɵdid"](4308992,null,0,a.TextInputComponent,[],{fieldLabel:[0,"fieldLabel"],placeholder:[1,"placeholder"],iconFeedBack:[2,"iconFeedBack"]},null),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵeld"](0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n\n                "])),(l()(),d["ɵeld"](0,null,null,7,"amexio-dropdown",[["name","sportName"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t.sportName=u)&&e}return e},o._30,o._31)),d["ɵprd"](6144,null,a.FormInputBase,null,[a.DropDownComponent]),d["ɵdid"](376832,null,0,a.DropDownComponent,[a.CommonHttpService],{fieldLabel:[0,"fieldLabel"],placeholder:[1,"placeholder"],dataReader:[2,"dataReader"],httpMethod:[3,"httpMethod"],httpUrl:[4,"httpUrl"],displayField:[5,"displayField"],valueField:[6,"valueField"],width:[7,"width"]},null),d["ɵprd"](1024,null,r.NG_VALUE_ACCESSOR,function(l){return[l]},[a.DropDownComponent]),d["ɵdid"](671744,null,0,r.NgModel,[[2,r.ControlContainer],[8,null],[8,null],[2,r.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),d["ɵprd"](2048,null,r.NgControl,null,[r.NgModel]),d["ɵdid"](16384,null,0,r.NgControlStatus,[r.NgControl],null,null),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵeld"](0,null,null,7,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,4,"amexio-text-input",[["name","address"]],null,null,null,o.M,o.N)),d["ɵprd"](5120,null,r.NG_VALUE_ACCESSOR,function(l){return[l]},[a.TextInputComponent]),d["ɵprd"](6144,null,a.FormInputBase,null,[a.TextInputComponent]),d["ɵdid"](4308992,null,0,a.TextInputComponent,[],{fieldLabel:[0,"fieldLabel"],placeholder:[1,"placeholder"],iconFeedBack:[2,"iconFeedBack"]},null),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵeld"](0,null,null,7,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,4,"amexio-text-input",[["name","phone"]],null,null,null,o.M,o.N)),d["ɵprd"](5120,null,r.NG_VALUE_ACCESSOR,function(l){return[l]},[a.TextInputComponent]),d["ɵprd"](6144,null,a.FormInputBase,null,[a.TextInputComponent]),d["ɵdid"](4308992,null,0,a.TextInputComponent,[],{fieldLabel:[0,"fieldLabel"],placeholder:[1,"placeholder"],iconFeedBack:[2,"iconFeedBack"]},null),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵeld"](0,null,null,7,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,4,"amexio-text-input",[["name","email"]],null,null,null,o.M,o.N)),d["ɵprd"](5120,null,r.NG_VALUE_ACCESSOR,function(l){return[l]},[a.TextInputComponent]),d["ɵprd"](6144,null,a.FormInputBase,null,[a.TextInputComponent]),d["ɵdid"](4308992,null,0,a.TextInputComponent,[],{fieldLabel:[0,"fieldLabel"],placeholder:[1,"placeholder"],iconFeedBack:[2,"iconFeedBack"]},null),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵted"](null,["\n            "])),(l()(),d["ɵted"](0,["\n          "])),(l()(),d["ɵted"](null,["\n          "])),(l()(),d["ɵeld"](0,null,1,8,"amexio-pane-action",[],null,null,null,o._40,o._41)),d["ɵdid"](114688,null,0,a.PaneActionComponent,[],null,null),(l()(),d["ɵted"](0,["\n            "])),(l()(),d["ɵeld"](0,null,0,4,"div",[["style","float: right;"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵeld"](0,null,null,1,"amexio-btn",[],null,null,null,o.y,o.z)),d["ɵdid"](4833280,null,0,a.ButtonComponent,[],{label:[0,"label"],type:[1,"type"]},null),(l()(),d["ɵted"](null,["\n            "])),(l()(),d["ɵted"](0,["\n          "])),(l()(),d["ɵted"](null,["\n        "])),(l()(),d["ɵted"](0,["\n\n      "])),(l()(),d["ɵted"](0,["\n\n      "])),(l()(),d["ɵeld"](0,null,0,120,"amexio-tab",[["title","API Reference"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵeld"](0,null,0,116,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n          "])),(l()(),d["ɵeld"](0,null,null,2,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"b",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["API Reference"])),(l()(),d["ɵted"](null,["\n          "])),(l()(),d["ɵeld"](0,null,null,109,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n            "])),(l()(),d["ɵeld"](0,null,null,106,"div",[["class","row"],["id","rating-api-reference"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵeld"](0,null,null,103,"table",[["class","table table-sm table-hover"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,100,"tbody",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,28,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["showWindow"])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,21,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["boolean"])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,7,"div",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵeld"](0,null,null,4,"span",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Default value: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["true"])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["User can bind variable to this and hide/unhide based on requirement "])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,1,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["title"])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,7,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["string"])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,28,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["closable"])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,21,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["boolean"])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,7,"div",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵeld"](0,null,null,4,"span",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Default value: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["false"])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["This will enable closable icon on window pane."])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["size"])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["integer"])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["1 is small modal , 2 is large modal"])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵted"](null,["\n\n            "])),(l()(),d["ɵted"](null,["\n          "])),(l()(),d["ɵted"](null,["\n        "])),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵeld"](0,null,0,30,"amexio-tab",[["title","Source"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵeld"](0,null,0,24,"amexio-vertical-left-tab-pane",[],null,null,null,o.o,o.p)),d["ɵdid"](5357568,null,1,a.VerticalLeftTabPaneComponent,[],null,null),d["ɵqud"](603979776,2,{queryTabs:1}),(l()(),d["ɵted"](0,["\n          "])),(l()(),d["ɵeld"](0,null,0,12,"amexio-tab",[["title","Markup"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[2,4]],0,a.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),d["ɵted"](0,["\n              "])),(l()(),d["ɵeld"](0,null,0,8,"div",[["style","width: 800px; overflow-y: scroll"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,1,"clip-copy",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){e=!1!==t.onCopyClick()&&e}return e},p.a,p.b)),d["ɵdid"](114688,null,0,s.a,[],{htmlCode:[0,"htmlCode"]},{onClick:"onClick"}),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,1,"prism-block",[],null,null,null,c.a,c.b)),d["ɵdid"](4243456,null,0,m.a,[d.Renderer2,d.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵted"](0,["\n\n          "])),(l()(),d["ɵted"](0,["\n          "])),(l()(),d["ɵeld"](0,null,0,5,"amexio-tab",[["title","TypeScript"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[2,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),d["ɵted"](0,["\n\n              "])),(l()(),d["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,c.a,c.b)),d["ɵdid"](4243456,null,0,m.a,[d.Renderer2,d.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),d["ɵted"](0,["\n\n          "])),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵeld"](0,null,0,9,"amexio-tab",[["title","Plunker"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),d["ɵted"](0,["\n         "])),(l()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](0,["\n         "])),(l()(),d["ɵeld"](0,null,0,1,"p",[["class","text-md-center text-primary"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["Amexio Sandbox"])),(l()(),d["ɵted"](0,["\n         "])),(l()(),d["ɵeld"](0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://embed.plnkr.co/DYGvXUQEPv0wEABrOxI1/"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵted"](0,["\n    "])),(l()(),d["ɵted"](0,["\n  "])),(l()(),d["ɵted"](null,["\n"])),(l()(),d["ɵted"](null,["\n\n"])),(l()(),d["ɵeld"](0,null,null,1,"amexio-notification",[],null,null,null,o.q,o.r)),d["ɵdid"](114688,null,0,a.NotifyComponent,[d.ChangeDetectorRef],{messageData:[0,"messageData"]},null),(l()(),d["ɵted"](null,["\n\n"]))],function(l,n){var u=n.component;l(n,1,0,!1),l(n,4,0),l(n,11,0),l(n,17,0);l(n,21,0,"Demo",!0);l(n,26,0,"Show","default","Show");l(n,32,0,"Employee Registration",!0,u.flag),l(n,35,0);l(n,48,0,"Name","Enter name",!0);l(n,56,0,"Choose Sport","Choose","response.data","get","assets/data/dropdown/sports.json","sportName","code","250px");l(n,58,0,"sportName",u.sportName);l(n,69,0,"Address","Enter address",!0);l(n,78,0,"Phone","Enter phone",!0);l(n,87,0,"Email","Enter Email",!0),l(n,94,0);l(n,99,0,"Save","primary");l(n,106,0,"API Reference");l(n,228,0,"Source"),l(n,233,0);l(n,237,0,"Markup",!0),l(n,243,0,u.htmlCode);l(n,246,0,u.htmlCode,"html");l(n,251,0,"TypeScript");l(n,254,0,u.tsCode,"typescript");l(n,260,0,"Plunker"),l(n,274,0,u.copyMsgArray)},function(l,n){l(n,37,0,d["ɵnov"](n,41).ngClassUntouched,d["ɵnov"](n,41).ngClassTouched,d["ɵnov"](n,41).ngClassPristine,d["ɵnov"](n,41).ngClassDirty,d["ɵnov"](n,41).ngClassValid,d["ɵnov"](n,41).ngClassInvalid,d["ɵnov"](n,41).ngClassPending),l(n,54,0,d["ɵnov"](n,60).ngClassUntouched,d["ɵnov"](n,60).ngClassTouched,d["ɵnov"](n,60).ngClassPristine,d["ɵnov"](n,60).ngClassDirty,d["ɵnov"](n,60).ngClassValid,d["ɵnov"](n,60).ngClassInvalid,d["ɵnov"](n,60).ngClassPending)})}function t(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,null,null,1,"basic-window-demo",[],null,null,null,e,f)),d["ɵdid"](114688,null,0,i.a,[],null,null)],function(l,n){l(n,1,0)},null)}var d=u("/oeL"),o=u("Mspa"),a=u("k8FD"),i=(u.n(a),u("OkO2")),r=u("bm2B"),p=u("8mzU"),s=u("repp"),c=u("l0f3"),m=u("FMBD");u.d(n,"a",function(){return C});var g=[],f=d["ɵcrt"]({encapsulation:2,styles:g,data:{}}),C=d["ɵccf"]("basic-window-demo",i.a,t,{},{},[])}});