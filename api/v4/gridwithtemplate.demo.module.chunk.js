webpackJsonp(["gridwithtemplate.demo.module"],{ccOd:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("LMZF"),u=function(){},a=e("tfJK"),_=e("drlO"),i=e("Un6q"),d=e("KhCp"),o=e("kL+h"),r=e("9iV4"),c=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode(),this.projectData={response:{success:!0,message:"Fetching  Data  Request Succeeded: Profile",data:[{name:"Admin Template\t",status:" 65%"},{name:"Landing Page",status:"Finished"},{name:"Backend UI\t",status:"Rejected"},{name:"Personal Blog",status:"40%"},{name:"E-mail Templates\t",status:"13%"},{name:"Corporate Website",status:"Pending"}]}},this.browserData={response:{success:!0,message:"Fetching  Data  Request Succeeded: Profile",data:[{name:"Google Chrome",usage:"23%",icon:"GoogleChrome.jpg "},{name:"Mozila Firefox",usage:"15%",icon:"MozilaFirefox.png "},{name:"Apple Safari",usage:"7%",icon:"AppleSafari.png "},{name:"Internet Explorer",usage:"9%",icon:"InternetExplorer.jpeg"},{name:"Opera mini",usage:"20%",icon:"Operamini.jpg"},{name:"Microsoft edge",usage:"9%",icon:"Microsoftedge.jpg"}]}}}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/data/templategrid/templategrid.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/data/templategrid/templategrid.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n}),this.http.get("assets/data/componentdata/templategrid.json ",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.dataSource=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.getRowData=function(l){this.clickedRowData=l},l.prototype.getGridTemplateData=function(l){return l.Usage>=50?"success":l.Usage<50&&l.Usage>=30?"warning":l.Usage<30?"danger":void 0},l}(),s=t._1({encapsulation:0,styles:[".listbox-StatusYellow[_ngcontent-%COMP%] {\n      background-color: yellow;\n    }\n    .listbox-StatusGreen[_ngcontent-%COMP%]  {\n      background-color: green;\n     }\n    .listbox-StatusRed[_ngcontent-%COMP%] {\n      background-color: red;\n  }\n  \n.red[_ngcontent-%COMP%] {\n    color: red!important;\n   \n}\n.green[_ngcontent-%COMP%] {\n    color: green!important;\n   \n}\n.yellow[_ngcontent-%COMP%] {\n    color: yellow!important;\n    \n}\n.template-progressBar[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{\n  height:5px !important;\n}"],data:{}});function m(l){return t._27(0,[(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(1,0,null,null,2,"amexio-label",[["font-color","grey"],["size","small"]],null,null,null,a._119,a._16)),t._2(2,114688,null,0,_._44,[],{styleClass:[0,"styleClass"],fontColor:[1,"fontColor"]},null),(l()(),t._25(3,0,["\n                          ","\n                      "])),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,2,0,"small","grey")},function(l,n){l(n,3,0,n.context.row.No)})}function p(l){return t._27(0,[(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(1,0,null,null,3,"amexio-label",[["class","fa fa-circle fa-lg"]],null,null,null,a._119,a._16)),t._2(2,278528,null,0,i.j,[t.q,t.r,t.k,t.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._20(3,{green:0,yellow:1,red:2}),t._2(4,114688,null,0,_._44,[],null,null),(l()(),t._25(5,null,["\n                      \xa0","\n                  "]))],function(l,n){l(n,2,0,"fa fa-circle fa-lg",l(n,3,0,"Paid"==n.context.row.Status,"Pending"==n.context.row.Status,"Paid Today"==n.context.row.Status)),l(n,4,0)},function(l,n){l(n,5,0,n.context.row.Status)})}function h(l){return t._27(0,[(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(1,0,null,null,34,"amexio-row",[],null,null,null,a._73,a.w)),t._2(2,1163264,null,0,_.F,[],null,null),(l()(),t._25(-1,0,["\n                          "])),(l()(),t._3(4,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),t._2(5,114688,null,0,_.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                              "])),(l()(),t._3(7,0,null,0,2,"amexio-button",[],null,null,null,a._151,a._48)),t._2(8,114688,null,0,_._86,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"],size:[3,"size"]},null),(l()(),t._25(-1,null,["\n                              "])),(l()(),t._25(-1,0,["\n                          "])),(l()(),t._25(-1,0,["\n                          "])),(l()(),t._3(12,0,null,0,15,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),t._2(13,114688,null,0,_.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                              "])),(l()(),t._3(15,0,null,0,11,"amexio-btn-dropdown",[],null,[["document","click"],["document","touchstart"]],function(l,n,e){var u=!0;return"document:click"===n&&(u=!1!==t._16(l,16).onElementOutClick(e.target)&&u),"document:touchstart"===n&&(u=!1!==t._16(l,16).onElementOutClick(e.target)&&u),u},a._153,a._50)),t._2(16,1097728,null,1,_._88,[t.k],{label:[0,"label"],type:[1,"type"],size:[2,"size"]},null),t._23(603979776,23,{buttons:1}),(l()(),t._25(-1,null,["\n                                  "])),(l()(),t._3(19,0,null,null,2,"amexio-btn-dropdown-item",[],null,null,null,a._154,a._51)),t._2(20,114688,[[23,4]],0,_._89,[],{label:[0,"label"]},null),(l()(),t._25(-1,null,["\n                                  "])),(l()(),t._25(-1,null,["\n                                  "])),(l()(),t._3(23,0,null,null,2,"amexio-btn-dropdown-item",[],null,null,null,a._154,a._51)),t._2(24,114688,[[23,4]],0,_._89,[],{label:[0,"label"]},null),(l()(),t._25(-1,null,["\n                                  "])),(l()(),t._25(-1,null,["\n                              "])),(l()(),t._25(-1,0,["\n                              \n                          "])),(l()(),t._25(-1,0,["\n                          "])),(l()(),t._3(29,0,null,0,5,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),t._2(30,114688,null,0,_.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                              "])),(l()(),t._3(32,0,null,0,1,"amexio-image",[["style","color:grey;"]],null,null,null,a._128,a._25)),t._2(33,114688,null,0,_._54,[],{iconclass:[0,"iconclass"]},null),(l()(),t._25(-1,0,["\n                          "])),(l()(),t._25(-1,0,["\n                      "])),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,2,0),l(n,5,0,4),l(n,8,0,"Manage","theme-backgroundcolor","Manage","small"),l(n,13,0,5),l(n,16,0,"Action","theme-backgroundcolor","small"),l(n,20,0,"Accept"),l(n,24,0,"Reject"),l(n,30,0,3),l(n,33,0,"fa fa-pencil fa-2x")},function(l,n){l(n,4,0,t._16(n,5).colclass),l(n,12,0,t._16(n,13).colclass),l(n,29,0,t._16(n,30).colclass)})}function x(l){return t._27(0,[(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(1,0,null,null,24,"amexio-row",[],null,null,null,a._73,a.w)),t._2(2,1163264,null,0,_.F,[],null,null),(l()(),t._25(-1,0,["\n                          "])),(l()(),t._3(4,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),t._2(5,114688,null,0,_.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                              "])),(l()(),t._3(7,0,null,0,2,"amexio-image",[],null,null,null,a._128,a._25)),t._2(8,114688,null,0,_._54,[],{path:[0,"path"],cclass:[1,"cclass"]},null),(l()(),t._25(-1,null,["\n                              "])),(l()(),t._25(-1,0,["\n                           "])),(l()(),t._25(-1,0,["\n                          "])),(l()(),t._3(12,0,null,0,12,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),t._2(13,114688,null,0,_.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                              "])),(l()(),t._3(15,0,null,0,2,"amexio-label",[["size","small"]],null,null,null,a._119,a._16)),t._2(16,114688,null,0,_._44,[],{styleClass:[0,"styleClass"]},null),(l()(),t._25(17,0,["\n                                  ","\n                              "])),(l()(),t._25(-1,0,["\n                              "])),(l()(),t._3(19,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n                              "])),(l()(),t._3(21,0,null,0,2,"amexio-label",[["font-color","grey"],["size","small"]],null,null,null,a._119,a._16)),t._2(22,114688,null,0,_._44,[],{styleClass:[0,"styleClass"],fontColor:[1,"fontColor"]},null),(l()(),t._25(23,0,["\n                                  Registered:","\n                              "])),(l()(),t._25(-1,0,["\n                          "])),(l()(),t._25(-1,0,["\n                      "])),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,2,0),l(n,5,0,3),l(n,8,0,"assets/images/profile/"+n.context.row.profile,"image-round"),l(n,13,0,9),l(n,16,0,"small"),l(n,22,0,"small","grey")},function(l,n){l(n,4,0,t._16(n,5).colclass),l(n,12,0,t._16(n,13).colclass),l(n,17,0,n.context.row.User),l(n,23,0,n.context.row.Date)})}function g(l){return t._27(0,[(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(1,0,null,null,2,"amexio-label",[],null,null,null,a._119,a._16)),t._2(2,114688,null,0,_._44,[],null,null),(l()(),t._25(3,0,["","%"])),(l()(),t._25(-1,null,["\n          \n                      "])),(l()(),t._3(5,0,null,null,1,"amexio-progress-bar",[],null,null,null,a._137,a._34)),t._2(6,114688,null,0,_._70,[],{infinite:[0,"infinite"],type:[1,"type"],currentvalue:[2,"currentvalue"],height:[3,"height"]},null),(l()(),t._25(-1,null,["\n          \n                      "])),(l()(),t._3(8,0,null,null,2,"amexio-label",[["font-color","grey"],["size","small"]],null,null,null,a._119,a._16)),t._2(9,114688,null,0,_._44,[],{styleClass:[0,"styleClass"],fontColor:[1,"fontColor"]},null),(l()(),t._25(10,0,["\n                          ","-","\n                      "])),(l()(),t._25(-1,null,["\n          \n                  "]))],function(l,n){var e=n.component;l(n,2,0),l(n,6,0,!1,e.getGridTemplateData(n.context.row),n.context.row.Usage,"10"),l(n,9,0,"small","grey")},function(l,n){l(n,3,0,n.context.row.Usage),l(n,10,0,n.context.row.usageFromDate,n.context.row.usageToDate)})}function y(l){return t._27(0,[(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(1,0,null,null,6,"amexio-label",[],null,null,null,a._119,a._16)),t._2(2,114688,null,0,_._44,[],null,null),(l()(),t._25(-1,0,["\n                          "])),(l()(),t._3(4,0,null,0,2,"amexio-image",[],null,null,null,a._128,a._25)),t._2(5,114688,null,0,_._54,[],{path:[0,"path"],cclass:[1,"cclass"],width:[2,"width"],height:[3,"height"]},null),(l()(),t._25(-1,null,["\n                          "])),(l()(),t._25(-1,0,["\n                       "])),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,2,0),l(n,5,0,"assets/images/"+n.context.row.Payment,"image-round","59.75px","59.75px")},null)}function f(l){return t._27(0,[(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(1,0,null,null,2,"amexio-label",[["font-color","grey"],["size","small"]],null,null,null,a._119,a._16)),t._2(2,114688,null,0,_._44,[],{styleClass:[0,"styleClass"],fontColor:[1,"fontColor"]},null),(l()(),t._25(-1,0,["\n                          Last login\n                      "])),(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(7,0,null,null,2,"amexio-label",[["size","small"]],null,null,null,a._119,a._16)),t._2(8,114688,null,0,_._44,[],{styleClass:[0,"styleClass"]},null),(l()(),t._25(9,0,["\n                          ","\n                      "])),(l()(),t._25(-1,null,["\n          \n          \n                  "]))],function(l,n){l(n,2,0,"small","grey"),l(n,8,0,"small")},function(l,n){l(n,9,0,n.context.row.Activity)})}function b(l){return t._27(0,[(l()(),t._25(-1,null,["\n          \n \n                          "])),(l()(),t._3(1,0,null,null,1,"amexio-image",[["style","color:grey;"]],null,null,null,a._128,a._25)),t._2(2,114688,null,0,_._54,[],{iconclass:[0,"iconclass"]},null),(l()(),t._25(-1,null,["\n \n          \n                  "]))],function(l,n){l(n,2,0,"fa fa-pencil  fa-2x")},null)}function w(l){return t._27(0,[(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(1,0,null,null,17,"amexio-label",[["class","datagrid-template"]],null,null,null,a._119,a._16)),t._2(2,114688,null,0,_._44,[],null,null),(l()(),t._25(-1,0,["\n                          "])),(l()(),t._3(4,0,null,0,5,"amexio-label",[],null,null,null,a._119,a._16)),t._2(5,114688,null,0,_._44,[],null,null),(l()(),t._25(-1,0,["\n                              "])),(l()(),t._3(7,0,null,0,1,"amexio-image",[],null,null,null,a._128,a._25)),t._2(8,114688,null,0,_._54,[],{path:[0,"path"],width:[1,"width"]},null),(l()(),t._25(-1,0,["\n                          "])),(l()(),t._25(-1,0,["\n                          "])),(l()(),t._3(11,0,null,0,2,"amexio-label",[],null,null,null,a._119,a._16)),t._2(12,114688,null,0,_._44,[],null,null),(l()(),t._25(13,0,["",""])),(l()(),t._25(-1,0,["\n          \n                          "])),(l()(),t._3(15,0,null,0,2,"amexio-label",[],null,null,null,a._119,a._16)),t._2(16,114688,null,0,_._44,[],null,null),(l()(),t._25(17,0,["( "," )"])),(l()(),t._25(-1,0,["\n                      "])),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,2,0),l(n,5,0),l(n,8,0,"../v1/assets/images/flags/flags/"+n.context.row.flag_32,100),l(n,12,0),l(n,16,0)},function(l,n){l(n,13,0,n.context.row.name),l(n,17,0,n.context.row.name_official)})}function T(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._3(2,0,null,null,1,"div",[["style","text-decoration: line-through red;"]],null,null,null,null,null)),(l()(),t._25(3,null,["",""])),(l()(),t._25(-1,null,["\n                  "]))],null,function(l,n){l(n,3,0,n.parent.context.row.name)})}function C(l){return t._27(0,[(l()(),t._3(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),t._25(1,null,["\n                    ","\n                  "]))],null,function(l,n){l(n,1,0,n.parent.context.row.name)})}function v(l){return t._27(0,[(l()(),t._25(-1,null,["\n                  "])),(l()(),t.Y(16777216,null,null,1,null,T)),t._2(2,16384,null,0,i.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,null,["\n                  "])),(l()(),t.Y(16777216,null,null,1,null,C)),t._2(5,16384,null,0,i.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,null,["\n                "]))],function(l,n){l(n,2,0,n.context.row.deprecated),l(n,5,0,!n.context.row.deprecated)},null)}function S(l){return t._27(0,[(l()(),t._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._3(3,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),t._2(4,4243456,null,0,o.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function k(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._3(2,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),t._2(3,4243456,null,0,o.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function j(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._3(2,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),t._2(3,4243456,null,0,o.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,3,0,n.component.dataSource,"json")},null)}function z(l){return t._27(0,[(l()(),t._25(-1,null,["\n    "])),(l()(),t._3(1,0,null,null,284,"amexio-card",[["header","true"]],null,null,null,a._58,a.h)),t._2(2,5357568,null,3,_.g,[],{header:[0,"header"]},null),t._23(603979776,1,{amexioHeader:1}),t._23(603979776,2,{amexioBody:1}),t._23(603979776,3,{amexioFooter:1}),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(7,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),t._2(8,114688,[[1,4]],0,_.u,[],null,null),(l()(),t._25(-1,0,["\n         Data Grid Template \n      "])),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(11,0,null,1,273,"amexio-body",[],null,null,null,a._54,a.d)),t._2(12,114688,[[2,4]],0,_.c,[],null,null),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(14,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t._25(-1,null,["To define the detail template, nest an ng-template tag inside the AmexioColumn component. The template context is set to the current row."])),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(17,16777216,null,0,266,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var u=!0;return"document:click"===n&&(u=!1!==t._16(l,18).onWindowClick()&&u),"document:scroll"===n&&(u=!1!==t._16(l,18).onscroll()&&u),u},a._77,a.A)),t._2(18,5357568,null,2,_.J,[t.B,t.j,t.M],null,null),t._23(603979776,4,{queryTabs:1}),t._23(603979776,5,{queryAction:1}),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(22,0,null,1,143,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,a._78,a.B)),t._2(23,114688,[[4,4]],0,_.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(26,0,null,0,57,"amexio-datagrid",[["title","Invoice Details"]],null,null,null,a._135,a._32)),t._2(27,1425408,null,1,_._66,[_._5,t.h],{title:[0,"title"],pagesize:[1,"pagesize"],httpurl:[2,"httpurl"],httpmethod:[3,"httpmethod"],datareader:[4,"datareader"],enablecheckbox:[5,"enablecheckbox"],enabledatafilter:[6,"enabledatafilter"]},null),t._23(603979776,6,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(30,0,null,null,6,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(31,49152,[[6,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,7,{headerTemplate:0}),t._23(335544320,8,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                  "])),(l()(),t.Y(0,[[8,2],["amexioBodyTmpl",2]],null,0,null,m)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(38,0,null,null,4,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(39,49152,[[6,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,9,{headerTemplate:0}),t._23(335544320,10,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(44,0,null,null,4,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(45,49152,[[6,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,11,{headerTemplate:0}),t._23(335544320,12,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n          \n              "])),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(50,0,null,null,4,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(51,49152,[[6,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,13,{headerTemplate:0}),t._23(335544320,14,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n          \n              "])),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(56,0,null,null,4,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(57,49152,[[6,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,15,{headerTemplate:0}),t._23(335544320,16,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n          \n              "])),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(62,0,null,null,6,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(63,49152,[[6,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,17,{headerTemplate:0}),t._23(335544320,18,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                  "])),(l()(),t.Y(0,[[18,2],["amexioBodyTmpl",2]],null,0,null,p)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(70,0,null,null,4,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(71,49152,[[6,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,19,{headerTemplate:0}),t._23(335544320,20,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n          \n              "])),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(76,0,null,null,6,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(77,49152,[[6,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,21,{headerTemplate:0}),t._23(335544320,22,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                  "])),(l()(),t.Y(0,[[22,2],["amexioBodyTmpl",2]],null,0,null,h)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._25(-1,null,["\n          \n          "])),(l()(),t._25(-1,0,["\n          \n          "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(86,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(88,0,null,0,43,"amexio-datagrid",[["title","User Activity Details"]],null,null,null,a._135,a._32)),t._2(89,1425408,null,1,_._66,[_._5,t.h],{title:[0,"title"],pagesize:[1,"pagesize"],httpurl:[2,"httpurl"],httpmethod:[3,"httpmethod"],datareader:[4,"datareader"],enablecheckbox:[5,"enablecheckbox"],enabledatafilter:[6,"enabledatafilter"]},null),t._23(603979776,24,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(92,0,null,null,6,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(93,49152,[[24,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,25,{headerTemplate:0}),t._23(335544320,26,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                  "])),(l()(),t.Y(0,[[26,2],["amexioBodyTmpl",2]],null,0,null,x)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(100,0,null,null,6,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(101,49152,[[24,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,27,{headerTemplate:0}),t._23(335544320,28,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                  "])),(l()(),t.Y(0,[[28,2],["amexioBodyTmpl",2]],null,0,null,g)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(108,0,null,null,6,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(109,49152,[[24,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,29,{headerTemplate:0}),t._23(335544320,30,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                  "])),(l()(),t.Y(0,[[30,2],["amexioBodyTmpl",2]],null,0,null,y)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(116,0,null,null,6,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(117,49152,[[24,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,31,{headerTemplate:0}),t._23(335544320,32,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                  "])),(l()(),t.Y(0,[[32,2],["amexioBodyTmpl",2]],null,0,null,f)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(124,0,null,null,6,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(125,49152,[[24,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,33,{headerTemplate:0}),t._23(335544320,34,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                  "])),(l()(),t.Y(0,[[34,2],["amexioBodyTmpl",2]],null,0,null,b)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._25(-1,null,["\n          "])),(l()(),t._25(-1,0,["\n          \n          "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(134,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(136,0,null,0,21,"amexio-datagrid",[["title","Country Grid"]],null,[[null,"rowSelect"]],function(l,n,e){var t=!0;return"rowSelect"===n&&(t=!1!==l.component.getRowData(e)&&t),t},a._135,a._32)),t._2(137,1425408,null,1,_._66,[_._5,t.h],{title:[0,"title"],pagesize:[1,"pagesize"],httpurl:[2,"httpurl"],httpmethod:[3,"httpmethod"],datareader:[4,"datareader"],enabledatafilter:[5,"enabledatafilter"]},{rowSelect:"rowSelect"}),t._23(603979776,35,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(140,0,null,null,6,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(141,49152,[[35,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,36,{headerTemplate:0}),t._23(335544320,37,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                  "])),(l()(),t.Y(0,[[37,2],["amexioBodyTmpl",2]],null,0,null,w)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(148,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(149,49152,[[35,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,38,{headerTemplate:0}),t._23(335544320,39,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(153,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(154,49152,[[35,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,40,{headerTemplate:0}),t._23(335544320,41,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n          "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(159,0,null,0,5,"p",[],null,null,null,null,null)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(161,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t._25(-1,null,["Clicked row data :"])),(l()(),t._25(163,null,[" ",""])),t._19(0,i.f,[]),(l()(),t._25(-1,0,["\n\n\n\n\n          "])),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(167,0,null,1,73,"amexio-tab",[["title","API Reference"]],null,null,null,a._78,a.B)),t._2(168,114688,[[4,4]],0,_.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(170,0,null,0,26,"amexio-datagrid",[["title","Properties<amexio-datagrid>"]],null,null,null,a._135,a._32)),t._2(171,1425408,null,1,_._66,[_._5,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,42,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(174,0,null,null,6,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(175,49152,[[42,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,43,{headerTemplate:0}),t._23(335544320,44,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                "])),(l()(),t.Y(0,[[44,2],["amexioBodyTmpl",2]],null,0,null,v)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(182,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(183,49152,[[42,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,45,{headerTemplate:0}),t._23(335544320,46,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(187,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(188,49152,[[42,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,47,{headerTemplate:0}),t._23(335544320,48,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(192,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(193,49152,[[42,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,49,{headerTemplate:0}),t._23(335544320,50,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._3(197,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(199,0,null,0,23,"amexio-datagrid",[["title","Column Properties"]],null,null,null,a._135,a._32)),t._2(200,1425408,null,1,_._66,[_._5,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,51,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(203,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(204,49152,[[51,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,52,{headerTemplate:0}),t._23(335544320,53,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(208,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(209,49152,[[51,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,54,{headerTemplate:0}),t._23(335544320,55,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(213,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(214,49152,[[51,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,56,{headerTemplate:0}),t._23(335544320,57,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(218,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(219,49152,[[51,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,58,{headerTemplate:0}),t._23(335544320,59,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(224,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(226,0,null,0,13,"amexio-datagrid",[["title","Events"]],null,null,null,a._135,a._32)),t._2(227,1425408,null,1,_._66,[_._5,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),t._23(603979776,60,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(230,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(231,49152,[[60,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,61,{headerTemplate:0}),t._23(335544320,62,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(235,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(236,49152,[[60,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,63,{headerTemplate:0}),t._23(335544320,64,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n\n          "])),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(242,0,null,1,31,"amexio-tab",[["title","Source"]],null,null,null,a._78,a.B)),t._2(243,114688,[[4,4]],0,_.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(245,0,null,0,27,"div",[["style","overflow-y: scroll;"]],null,null,null,null,null)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(247,0,null,null,24,"amexio-vertical-tab-view",[],null,null,null,a._80,a.D)),t._2(248,5357568,null,1,_.O,[t.B],null,null),t._23(603979776,65,{queryTabs:1}),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(251,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,a._78,a.B)),t._2(252,114688,[[65,4]],0,_.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n                  "])),(l()(),t.Y(16777216,null,0,1,null,S)),t._2(255,16384,null,0,i.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(258,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,a._78,a.B)),t._2(259,114688,[[65,4]],0,_.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n                  "])),(l()(),t.Y(16777216,null,0,1,null,k)),t._2(262,16384,null,0,i.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(265,0,null,0,5,"amexio-tab",[["title","DataSource"]],null,null,null,a._78,a.B)),t._2(266,114688,[[65,4]],0,_.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n                  "])),(l()(),t.Y(16777216,null,0,1,null,j)),t._2(269,16384,null,0,i.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,null,["  \n            "])),(l()(),t._25(-1,0,["\n            \n          "])),(l()(),t._25(-1,1,["\n\n          "])),(l()(),t._3(275,0,null,1,7,"amexio-tab",[["title","Live"]],null,null,null,a._78,a.B)),t._2(276,114688,[[4,4]],0,_.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(278,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),t._25(-1,null,["Amexio Sandbox"])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(281,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-template-grid?embed=1&file=app/grid/templategrid/templategrid.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,1,["\n        "])),(l()(),t._25(-1,0,["\n      "])),(l()(),t._25(-1,null,["\n    "])),(l()(),t._25(-1,null,["\n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,8,0),l(n,12,0),l(n,18,0),l(n,23,0,"Demo","true"),l(n,27,0,"Invoice Details",10,"assets/data/componentdata/templategrid.json","get","response.data",!1,!1),l(n,31,0,"No.","No",!1,"string",5),l(n,39,0,"Invoice Subject","Invoice Subject",!1,"string",10),l(n,45,0,"Client","client",!1,"string",8),l(n,51,0,"Vat No.","Vat No.",!1,"string",6),l(n,57,0,"Created","Created",!1,"string",8),l(n,63,0,"Status","Status",!1,"string",10),l(n,71,0,"Price","Price",!1,"string",5),l(n,77,0,"","",!1,"string",15),l(n,89,0,"User Activity Details",10,"assets/data/componentdata/datagridtemplate.json","get","response.data",!1,!1),l(n,93,0,"USER","User",!1,"string",40),l(n,101,0,"USAGE","Usage",!1,"string",40),l(n,109,0,"PAYMENT","Payment",!1,"string",20),l(n,117,0,"ACTIVITY","Activity",!1,"string",20),l(n,125,0,"","",!1,"string",10),l(n,137,0,"Country Grid",10,"assets/data/componentdata/gridtemplate.json","get","data",!1),l(n,141,0,"Name","name_official",!1,"string",70),l(n,149,0,"Latitude","latitude",!1,"number",20),l(n,154,0,"Longitude","longitude",!1,"number",20),l(n,168,0,"API Reference"),l(n,171,0,"Properties<amexio-datagrid>","assets/apireference/data/grid.json","get","properties",!1,!1),l(n,175,0,"Name","name",!1,"string",20),l(n,183,0,"Type","type",!1,"string",10),l(n,188,0,"Default","default",!1,"string",10),l(n,193,0,"Description","description",!1,"string",65),l(n,200,0,"Column Properties","assets/apireference/data/grid.json","get","columnProperties",!1,!1),l(n,204,0,"Name","name",!1,"string",15),l(n,209,0,"Type","type",!1,"string",10),l(n,214,0,"Default","default",!1,"string",10),l(n,219,0,"Description","description",!1,"string",65),l(n,227,0,"Events","assets/apireference/data/grid.json","get","events",!1),l(n,231,0,"Name","name",!1,"string",20),l(n,236,0,"Description","description",!1,"string",65),l(n,243,0,"Source"),l(n,248,0),l(n,252,0,"HTML",!0),l(n,255,0,e.htmlCode),l(n,259,0,"Type Script"),l(n,262,0,e.typeScriptCode),l(n,266,0,"DataSource"),l(n,269,0,e.dataSource),l(n,276,0,"Live")},function(l,n){var e=n.component;l(n,163,0,t._26(n,163,0,t._16(n,164).transform(e.clickedRowData)))})}var D=t.Z("grid-template-demo",c,function(l){return t._27(0,[(l()(),t._3(0,0,null,null,1,"grid-template-demo",[],null,null,null,z,s)),t._2(1,49152,null,0,c,[r.c],null,null)],null,null)},{},{},[]),M=e("0nO6"),P=e("UHIZ");e.d(n,"GridWithTemplateDemoModuleNgFactory",function(){return B});var B=t._0(u,[],function(l){return t._12([t._13(512,t.j,t.W,[[8,[a.a,D]],[3,t.j],t.v]),t._13(4608,i.n,i.m,[t.s,[2,i.u]]),t._13(4608,M.s,M.s,[]),t._13(4608,r.h,r.m,[i.c,t.z,r.k]),t._13(4608,r.n,r.n,[r.h,r.l]),t._13(5120,r.a,function(l){return[l]},[r.n]),t._13(4608,r.j,r.j,[]),t._13(6144,r.i,null,[r.j]),t._13(4608,r.g,r.g,[r.i]),t._13(6144,r.b,null,[r.g]),t._13(5120,r.f,r.o,[r.b,[2,r.a]]),t._13(4608,r.c,r.c,[r.f]),t._13(4608,_._5,_._5,[r.c]),t._13(4608,_._15,_._15,[t.z]),t._13(4608,_._22,_._22,[]),t._13(4608,_._40,_._40,[]),t._13(512,i.b,i.b,[]),t._13(512,M.p,M.p,[]),t._13(512,M.e,M.e,[]),t._13(512,r.e,r.e,[]),t._13(512,r.d,r.d,[]),t._13(512,o.b,o.b,[]),t._13(512,_.v,_.v,[]),t._13(512,_.t,_.t,[]),t._13(512,_.y,_.y,[]),t._13(512,_.A,_.A,[]),t._13(512,_.D,_.D,[]),t._13(512,_.l,_.l,[]),t._13(512,_.Q,_.Q,[]),t._13(512,P.n,P.n,[[2,P.s],[2,P.m]]),t._13(512,u,u,[]),t._13(256,r.k,"XSRF-TOKEN",[]),t._13(256,r.l,"X-XSRF-TOKEN",[]),t._13(1024,P.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})}});