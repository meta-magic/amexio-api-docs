webpackJsonp([14],{BZHK:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){this.progressType="info",this.buttonLabel="Stop",this.buttonState=!1,this.progressStat=!0,this.nonInfinteprogressStat=!1,this.progressValue=100,this.BprogressType="info",this.basicProgressValue=20,this.htmlCode='\n     <div class="card">\n                      <div class="card-header">\n                        <h5>Basic Progress Bar</h5>\n                      </div>\n                      <div class="card-block">\n                        <amexio-progress-bar [showProgress]="true" [infinteMode]="false" [currentValue]="basicProgressValue" [progressType]="BprogressType"></amexio-progress-bar>\n                      </div>\n                      <div class="card-footer">\n                        <p class="text-md-center text-muted">Progress Types</p>\n                        <div class="row">\n                          <div class="col-lg-2">\n                            <amexio-btn [label]="\'Warning\'" [type]="\'warning\'" [tooltipMessage]="buttonLabel" [disabled]="buttonState" (onClick)="BprogressType=\'warning\';basicProgressValue = 40;"></amexio-btn>\n                          </div>\n                          <div class="col-lg-2">\n                            <amexio-btn [label]="\'Success\'" [type]="\'success\'" [tooltipMessage]="buttonLabel" [disabled]="buttonState" (onClick)="BprogressType=\'success\';basicProgressValue = 60;"></amexio-btn>\n                          </div>\n                          <div class="col-lg-2">\n                            <amexio-btn [label]="\'Danger\'" [type]="\'danger\'" [tooltipMessage]="buttonLabel" [disabled]="buttonState" (onClick)="BprogressType=\'danger\';basicProgressValue = 30;"></amexio-btn>\n                          </div>\n                          <div class="col-lg-2">\n                            <amexio-btn [label]="\'Info\'" [type]="\'info\'" [tooltipMessage]="buttonLabel" [disabled]="buttonState" (onClick)="BprogressType=\'info\';basicProgressValue = 90;"></amexio-btn>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    \n                    <div class="card">\n                      <div class="card-header">\n                        <h5>Infinte Progress Bar</h5>\n                      </div>\n                      <div class="card-block">\n                        <amexio-progress-bar [showProgress]="progressStat"  [infinteMode]="true" [currentValue]="progressValue" [progressType]="progressType"></amexio-progress-bar>\n                      </div>\n                      <div class="card-footer">\n                        <div class="row">\n                          <div class="col-lg-2">\n                            <amexio-btn [label]="buttonLabel" [type]="\'primary\'" [tooltipMessage]="buttonLabel" [disabled]="buttonState" (onClick)="buttonClick($event)"></amexio-btn>\n                          </div>\n\n                        </div>\n                        <p class="text-md-center text-muted">Progress Types</p>\n                        <div class="row">\n                          <div class="col-lg-2">\n                            <amexio-btn [label]="\'Warning\'" [type]="\'warning\'" [tooltipMessage]="buttonLabel" [disabled]="buttonState" (onClick)="progressType=\'warning\';progressValue = 40;"></amexio-btn>\n                          </div>\n                          <div class="col-lg-2">\n                            <amexio-btn [label]="\'Success\'" [type]="\'success\'" [tooltipMessage]="buttonLabel" [disabled]="buttonState" (onClick)="progressType=\'success\';progressValue = 60;"></amexio-btn>\n                          </div>\n                          <div class="col-lg-2">\n                            <amexio-btn [label]="\'Danger\'" [type]="\'danger\'" [tooltipMessage]="buttonLabel" [disabled]="buttonState" (onClick)="progressType=\'danger\';progressValue = 30;"></amexio-btn>\n                          </div>\n                          <div class="col-lg-2">\n                            <amexio-btn [label]="\'Info\'" [type]="\'info\'" [tooltipMessage]="buttonLabel" [disabled]="buttonState" (onClick)="progressType=\'info\';progressValue = 90;"></amexio-btn>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n    ',this.tsCode="import { Component, OnInit} from '@angular/core';\n@Component({\n  selector: 'progress-demo',\n  templateUrl: 'progress.demo.html'\n})\n\nexport class ProgressDemoComponent implements OnInit{\n  buttonLabel : string = 'Stop';\n  progressStat : boolean = true;\n  basicProgressValue : any = 20;\n  ngOnInit(){}\n  buttonClick(event : any){\n      if(this.progressStat){\n        this.progressStat = !this.progressStat;\n        this.buttonLabel = 'Start';\n      }\n      else{\n        this.progressStat = !this.progressStat;\n        this.buttonLabel = 'Stop';\n      }\n    }\n}\n    "}return l.prototype.ngOnInit=function(){},l.prototype.buttonClick=function(l){this.nonInfinteprogressStat=!1,this.progressStat?(this.progressStat=!this.progressStat,this.buttonLabel="Start"):(this.progressStat=!this.progressStat,this.buttonLabel="Stop")},l.ctorParameters=function(){return[]},l}()},XxrO:function(l,n,u){"use strict";function e(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,null,null,328,"amexio-card-pane",[],null,null,null,o.a,o.b)),d["ɵdid"](4308992,null,0,s.CardComponent,[],{enableFooter:[0,"enableFooter"]},null),(l()(),d["ɵted"](null,["\n  "])),(l()(),d["ɵeld"](0,null,0,5,"amexio-pane-header",[],null,null,null,o.c,o.d)),d["ɵdid"](114688,null,0,s.PaneHeaderComponent,[],null,null),(l()(),d["ɵted"](0,["\n    "])),(l()(),d["ɵeld"](0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Progress Bar Component"])),(l()(),d["ɵted"](0,["\n  "])),(l()(),d["ɵted"](null,["\n\n  "])),(l()(),d["ɵeld"](0,null,1,317,"amexio-pane-body",[],null,null,null,o.e,o.f)),d["ɵdid"](114688,null,0,s.PaneBodyComponent,[],null,null),(l()(),d["ɵted"](0,["\n    "])),(l()(),d["ɵeld"](0,null,0,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Progress Bar Component Provides up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars and easy to configure"])),(l()(),d["ɵted"](0,["\n        and use.\n          "])),(l()(),d["ɵeld"](0,null,0,310,"amexio-tab-pane",[],null,null,null,o.g,o.h)),d["ɵdid"](5357568,null,1,s.TabPaneComponent,[],null,null),d["ɵqud"](603979776,1,{queryTabs:1}),(l()(),d["ɵted"](0,["\n            "])),(l()(),d["ɵeld"](0,null,0,124,"amexio-tab",[["title","Demo"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[1,4]],0,s.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),d["ɵted"](0,["\n              "])),(l()(),d["ɵeld"](0,null,0,120,"div",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n\n                "])),(l()(),d["ɵeld"](0,null,null,52,"div",[["class","row"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,49,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,46,"div",[["class","card"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Basic Progress Bar"])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,1,"amexio-progress-bar",[],null,null,null,o.G,o.H)),d["ɵdid"](114688,null,0,s.ProgressComponent,[],{showProgress:[0,"showProgress"],infinteMode:[1,"infinteMode"],currentValue:[2,"currentValue"],progressType:[3,"progressType"]},null),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵeld"](0,null,null,31,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,1,"p",[["class","text-md-center text-muted"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["Progress Types"])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,25,"div",[["class","row"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","col-lg-2"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                            "])),(l()(),d["ɵeld"](0,null,null,1,"amexio-btn",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){t.BprogressType="warning";e=!1!==(t.basicProgressValue=40)&&e}return e},o.y,o.z)),d["ɵdid"](4833280,null,0,s.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"],disabled:[3,"disabled"]},{onClick:"onClick"}),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","col-lg-2"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                            "])),(l()(),d["ɵeld"](0,null,null,1,"amexio-btn",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){t.BprogressType="success";e=!1!==(t.basicProgressValue=60)&&e}return e},o.y,o.z)),d["ɵdid"](4833280,null,0,s.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"],disabled:[3,"disabled"]},{onClick:"onClick"}),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","col-lg-2"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                            "])),(l()(),d["ɵeld"](0,null,null,1,"amexio-btn",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){t.BprogressType="danger";e=!1!==(t.basicProgressValue=30)&&e}return e},o.y,o.z)),d["ɵdid"](4833280,null,0,s.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"],disabled:[3,"disabled"]},{onClick:"onClick"}),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","col-lg-2"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                            "])),(l()(),d["ɵeld"](0,null,null,1,"amexio-btn",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){t.BprogressType="info";e=!1!==(t.basicProgressValue=90)&&e}return e},o.y,o.z)),d["ɵdid"](4833280,null,0,s.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"],disabled:[3,"disabled"]},{onClick:"onClick"}),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n\n                "])),(l()(),d["ɵeld"](0,null,null,63,"div",[["class","row"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,60,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,55,"div",[["class","card"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Infinte Progress Bar"])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,1,"amexio-progress-bar",[],null,null,null,o.G,o.H)),d["ɵdid"](114688,null,0,s.ProgressComponent,[],{showProgress:[0,"showProgress"],infinteMode:[1,"infinteMode"],currentValue:[2,"currentValue"],progressType:[3,"progressType"]},null),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵeld"](0,null,null,40,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","col-lg-2"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                            "])),(l()(),d["ɵeld"](0,null,null,1,"amexio-btn",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){e=!1!==t.buttonClick(u)&&e}return e},o.y,o.z)),d["ɵdid"](4833280,null,0,s.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"],disabled:[3,"disabled"]},{onClick:"onClick"}),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵted"](null,["\n\n                        "])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,1,"p",[["class","text-md-center text-muted"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["Progress Types"])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,25,"div",[["class","row"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","col-lg-2"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                            "])),(l()(),d["ɵeld"](0,null,null,1,"amexio-btn",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){t.progressType="warning";e=!1!==(t.progressValue=40)&&e}return e},o.y,o.z)),d["ɵdid"](4833280,null,0,s.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"],disabled:[3,"disabled"]},{onClick:"onClick"}),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","col-lg-2"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                            "])),(l()(),d["ɵeld"](0,null,null,1,"amexio-btn",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){t.progressType="success";e=!1!==(t.progressValue=60)&&e}return e},o.y,o.z)),d["ɵdid"](4833280,null,0,s.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"],disabled:[3,"disabled"]},{onClick:"onClick"}),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","col-lg-2"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                            "])),(l()(),d["ɵeld"](0,null,null,1,"amexio-btn",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){t.progressType="danger";e=!1!==(t.progressValue=30)&&e}return e},o.y,o.z)),d["ɵdid"](4833280,null,0,s.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"],disabled:[3,"disabled"]},{onClick:"onClick"}),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","col-lg-2"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                            "])),(l()(),d["ɵeld"](0,null,null,1,"amexio-btn",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){t.progressType="info";e=!1!==(t.progressValue=90)&&e}return e},o.y,o.z)),d["ɵdid"](4833280,null,0,s.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"],disabled:[3,"disabled"]},{onClick:"onClick"}),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n\n                  "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n\n\n\n              "])),(l()(),d["ɵted"](0,["\n            "])),(l()(),d["ɵted"](0,["\n            "])),(l()(),d["ɵeld"](0,null,0,151,"amexio-tab",[["title","API Reference"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[1,4]],0,s.TabComponent,[],{title:[0,"title"]},null),(l()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](0,["\n              "])),(l()(),d["ɵeld"](0,null,0,146,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,2,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"b",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["API Reference"])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,139,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,136,"div",[["class","row"],["id","progress-api-reference"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,133,"table",[["class","table table-sm table-hover"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵeld"](0,null,null,130,"tbody",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["showProgress"])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["boolean"])),(l()(),d["ɵted"](null,["\n\n                          "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Shows / Hides the progress bar."])),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["infinteMode"])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["boolean"])),(l()(),d["ɵted"](null,["\n\n                          "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Enable/Disable Infinite Mode"])),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["progressType"])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["string"])),(l()(),d["ɵted"](null,["\n\n                          "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Color scheme for bar.info,warning,success & danger"])),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵeld"](0,null,null,1,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n\n                      "])),(l()(),d["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["minValue"])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["string"])),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Min value for progress bar"])),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵted"](null,["\n\n                      "])),(l()(),d["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["maxValue"])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["string"])),(l()(),d["ɵted"](null,["\n\n                          "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Max value for progress Bar"])),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵted"](null,["\n\n                      "])),(l()(),d["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["currentValue"])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["string"])),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Current Postion of progess "])),(l()(),d["ɵted"](null,["\n                          "])),(l()(),d["ɵted"](null,["\n                        "])),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵted"](null,["\n\n                      "])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵted"](0,["\n            "])),(l()(),d["ɵted"](0,["\n\n            "])),(l()(),d["ɵeld"](0,null,0,26,"amexio-tab",[["title","Source"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[1,4]],0,s.TabComponent,[],{title:[0,"title"]},null),(l()(),d["ɵted"](0,["\n              "])),(l()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](0,["\n              "])),(l()(),d["ɵeld"](0,null,0,20,"amexio-vertical-left-tab-pane",[],null,null,null,o.m,o.n)),d["ɵdid"](5357568,null,1,s.VerticalLeftTabPaneComponent,[],null,null),d["ɵqud"](603979776,2,{queryTabs:1}),(l()(),d["ɵted"](0,["\n                "])),(l()(),d["ɵeld"](0,null,0,8,"amexio-tab",[["title","Markup"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[2,4]],0,s.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),d["ɵted"](0,["\n                  "])),(l()(),d["ɵeld"](0,null,0,4,"div",[["style","width: 800px; overflow-y: scroll"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,1,"prism-block",[],null,null,null,r.a,r.b)),d["ɵdid"](4243456,null,0,i.a,[d.Renderer2,d.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵted"](0,["\n\n                "])),(l()(),d["ɵted"](0,["\n                "])),(l()(),d["ɵeld"](0,null,0,5,"amexio-tab",[["title","TypeScript"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[2,4]],0,s.TabComponent,[],{title:[0,"title"]},null),(l()(),d["ɵted"](0,["\n\n                    "])),(l()(),d["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,r.a,r.b)),d["ɵdid"](4243456,null,0,i.a,[d.Renderer2,d.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),d["ɵted"](0,["\n\n                "])),(l()(),d["ɵted"](0,["\n              "])),(l()(),d["ɵted"](0,["\n            "])),(l()(),d["ɵted"](0,["\n\n          "])),(l()(),d["ɵted"](0,["\n  "])),(l()(),d["ɵted"](null,["\n"])),(l()(),d["ɵted"](null,["\n\n\n"]))],function(l,n){var u=n.component;l(n,1,0,!1),l(n,4,0),l(n,11,0),l(n,17,0);l(n,21,0,"Demo",!0);l(n,40,0,!0,!1,u.basicProgressValue,u.BprogressType);l(n,53,0,"Warning","warning",u.buttonLabel,u.buttonState);l(n,59,0,"Success","success",u.buttonLabel,u.buttonState);l(n,65,0,"Danger","danger",u.buttonLabel,u.buttonState);l(n,71,0,"Info","info",u.buttonLabel,u.buttonState);l(n,96,0,u.progressStat,!0,u.progressValue,u.progressType);l(n,106,0,u.buttonLabel,"primary",u.buttonLabel,u.buttonState);l(n,118,0,"Warning","warning",u.buttonLabel,u.buttonState);l(n,124,0,"Success","success",u.buttonLabel,u.buttonState);l(n,130,0,"Danger","danger",u.buttonLabel,u.buttonState);l(n,136,0,"Info","info",u.buttonLabel,u.buttonState);l(n,147,0,"API Reference");l(n,300,0,"Source"),l(n,305,0);l(n,309,0,"Markup",!0);l(n,314,0,u.htmlCode,"html");l(n,319,0,"TypeScript");l(n,322,0,u.tsCode,"typescript")},null)}function t(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,null,null,1,"progress-demo",[],null,null,null,e,p)),d["ɵdid"](114688,null,0,a.a,[],null,null)],function(l,n){l(n,1,0)},null)}var d=u("/oeL"),o=u("Mspa"),s=u("k8FD"),a=(u.n(s),u("BZHK")),r=u("l0f3"),i=u("FMBD");u.d(n,"a",function(){return b});var c=[],p=d["ɵcrt"]({encapsulation:2,styles:c,data:{}}),b=d["ɵccf"]("progress-demo",a.a,t,{},{},[])},difQ:function(l,n,u){"use strict";var e=u("waH/"),t=(u.n(e),u("tqEy")),d=(u.n(t),u("BZHK"));u.d(n,"a",function(){return o});var o=(d.a,function(){function l(){}return l}());d.a},hB9Z:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("/oeL"),t=u("difQ"),d=u("XxrO"),o=u("qbdv"),s=u("bm2B"),a=u("CPp0"),r=u("BkNc"),i=u("k8FD"),c=(u.n(i),u("kL+h")),p=u("BZHK");u.d(n,"ProgressModuleNgFactory",function(){return b});var b=e["ɵcmf"](t.a,[],function(l){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[d.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[e.LOCALE_ID]),e["ɵmpd"](4608,s["ɵi"],s["ɵi"],[]),e["ɵmpd"](4608,a.BrowserXhr,a.BrowserXhr,[]),e["ɵmpd"](4608,a.ResponseOptions,a.BaseResponseOptions,[]),e["ɵmpd"](5120,a.XSRFStrategy,a["ɵb"],[]),e["ɵmpd"](4608,a.XHRBackend,a.XHRBackend,[a.BrowserXhr,a.ResponseOptions,a.XSRFStrategy]),e["ɵmpd"](4608,a.RequestOptions,a.BaseRequestOptions,[]),e["ɵmpd"](5120,a.Http,a["ɵc"],[a.XHRBackend,a.RequestOptions]),e["ɵmpd"](512,o.CommonModule,o.CommonModule,[]),e["ɵmpd"](512,r.x,r.x,[[2,r.m],[2,r.c]]),e["ɵmpd"](512,s["ɵba"],s["ɵba"],[]),e["ɵmpd"](512,s.FormsModule,s.FormsModule,[]),e["ɵmpd"](512,a.HttpModule,a.HttpModule,[]),e["ɵmpd"](512,i.AmexioWidgetModule,i.AmexioWidgetModule,[]),e["ɵmpd"](512,c.a,c.a,[]),e["ɵmpd"](512,t.a,t.a,[]),e["ɵmpd"](1024,r.t,function(){return[[{path:"",component:p.a}]]},[])])})}});