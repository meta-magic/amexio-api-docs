webpackJsonp([4],{"22xC":function(l,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("LMZF"),t=n("9iV4"),u=function(){function l(l){this.http=l,this.currentDate=new Date,this.checkboxGroupdata={response:{data:[{language:"Learning",checked:!1,disabled:!1},{language:"Shopping",checked:!1,disabled:!1},{language:"Fishing",checked:!1,disabled:!1}]}},this.radioGroupData={response:{data:[{gender:"Male",genderId:"male"},{gender:"Female",genderId:"female",disabled:!0}]}},this.getHtmlAndTypeScriptCode()}return l.prototype.getDta=function(){var l=this;this.asyncFlag=!0,setTimeout(function(){l.asyncFlag=!1},3e3)},l.prototype.getHtmlAndTypeScriptCode=function(){var l,e,n=this;this.http.get("assets/data/code/pane/form/form.html",{responseType:"text"}).subscribe(function(e){l=e},function(l){},function(){n.htmlCode=l}),this.http.get("assets/data/code/pane/form/form.text",{responseType:"text"}).subscribe(function(l){e=l},function(l){},function(){n.typeScriptCode=e})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.refreshData=function(){this.refreshDialogue=!this.refreshDialogue},l}(),i=function(){},d=n("KhCp"),r=n("kL+h"),_=n("tfJK"),o=n("drlO"),m=n("0nO6"),s=n("Un6q"),c=a._1({encapsulation:2,styles:[],data:{}});function p(l){return a._27(0,[(l()(),a._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),a._25(-1,null,["\n                    "])),(l()(),a._25(-1,null,["\n                    "])),(l()(),a._3(3,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),a._2(4,4243456,null,0,r.a,[a.B,a.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),a._25(-1,null,["\n                  "]))],function(l,e){l(e,4,0,e.component.htmlCode,"html")},null)}function h(l){return a._27(0,[(l()(),a._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),a._25(-1,null,["\n                    "])),(l()(),a._3(2,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),a._2(3,4243456,null,0,r.a,[a.B,a.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),a._25(-1,null,["\n                  "]))],function(l,e){l(e,3,0,e.component.typeScriptCode,"typescript")},null)}function b(l){return a._27(0,[(l()(),a._25(-1,null,["\n      "])),(l()(),a._3(1,0,null,null,347,"amexio-card",[["header","true"]],null,null,null,_._48,_.f)),a._2(2,4308992,null,0,o.f,[],{header:[0,"header"]},null),(l()(),a._25(-1,null,["\n      "])),(l()(),a._3(4,0,null,0,2,"amexio-header",[],null,null,null,_._57,_.o)),a._2(5,114688,null,0,o.t,[],null,null),(l()(),a._25(-1,0,["\n         Form \n      "])),(l()(),a._25(-1,null,["\n      "])),(l()(),a._3(8,0,null,1,339,"amexio-body",[],null,null,null,_._45,_.c)),a._2(9,114688,null,0,o.c,[],null,null),(l()(),a._25(-1,0,["\n        "])),(l()(),a._3(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a._25(-1,null,[" Amexio Form can be used basically for validation purposes  \n        "])),(l()(),a._25(-1,0,["\n        "])),(l()(),a._3(14,0,null,0,332,"amexio-tab-view",[],null,null,null,_._66,_.x)),a._2(15,5619712,null,1,o.G,[a.B],null,null),a._23(603979776,1,{queryTabs:1}),(l()(),a._25(-1,0,["\n          "])),(l()(),a._3(18,0,null,0,164,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,_._67,_.y)),a._2(19,114688,[[1,4]],0,o.H,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a._25(-1,0,["\n\n            "])),(l()(),a._3(21,0,null,0,160,"amexio-form",[["form-name","validateForm"],["header","true"],["show-error","true"]],null,null,null,_._55,_.m)),a._2(22,5619712,null,14,o.q,[],{fname:[0,"fname"],header:[1,"header"],showError:[2,"showError"]},null),a._23(603979776,2,{queryTextinput:1}),a._23(603979776,3,{queryTextArea:1}),a._23(603979776,4,{queryEmailinput:1}),a._23(603979776,5,{queryNuminput:1}),a._23(603979776,6,{queryPassword:1}),a._23(603979776,7,{queryCheckbox:1}),a._23(603979776,8,{queryCheckboxGrp:1}),a._23(603979776,9,{queryRadio:1}),a._23(603979776,10,{queryDropdown:1}),a._23(603979776,11,{queryTypeahead:1}),a._23(603979776,12,{queryTags:1}),a._23(603979776,13,{queryDate:1}),a._23(603979776,14,{queryToggle:1}),a._23(603979776,15,{queryFooter:1}),(l()(),a._25(-1,null,["\n               "])),(l()(),a._3(38,0,null,0,2,"amexio-form-header",[],null,null,null,_._56,_.n)),a._2(39,114688,null,0,o.r,[],null,null),(l()(),a._25(-1,0,["\n                  Validation Form\n               "])),(l()(),a._25(-1,null,["\n            "])),(l()(),a._3(42,0,null,1,123,"amexio-form-body",[],null,null,null,_._54,_.l)),a._2(43,114688,null,0,o.p,[],null,null),(l()(),a._25(-1,0,["\n              "])),(l()(),a._3(45,0,null,0,20,"amexio-row",[],null,null,null,_._63,_.u)),a._2(46,1163264,null,0,o.D,[],null,null),(l()(),a._25(-1,0,["\n                "])),(l()(),a._3(48,0,null,0,7,"amexio-column",[],[[8,"className",0]],null,null,_._50,_.h)),a._2(49,114688,null,0,o.i,[],{size:[0,"size"]},null),(l()(),a._25(-1,0,["\n                    "])),(l()(),a._3(51,0,null,0,3,"amexio-text-input",[["field-label","Firstname"],["icon-feedback","true"],["name","name1"],["place-holder","Enter firstname"]],null,null,null,_._123,_._28)),a._22(5120,null,m.g,function(l){return[l]},[o._67]),a._2(53,114688,[[2,4]],0,o._67,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],placeholder:[4,"placeholder"],iconfeedback:[5,"iconfeedback"]},null),(l()(),a._25(-1,null,["\n                    "])),(l()(),a._25(-1,0,["\n                "])),(l()(),a._25(-1,0,["\n                "])),(l()(),a._3(57,0,null,0,7,"amexio-column",[],[[8,"className",0]],null,null,_._50,_.h)),a._2(58,114688,null,0,o.i,[],{size:[0,"size"]},null),(l()(),a._25(-1,0,["\n                    "])),(l()(),a._3(60,0,null,0,3,"amexio-text-input",[["allow-blank","false"],["enable-popover","true"],["error-msg","Please enter last name"],["field-label","Lastname"],["icon-feedback","true"],["max-error-msg","Maximum 10 char allowed"],["max-length","10"],["min-error-msg","Minimum 3 char required"],["min-length","3"],["name","name"],["place-holder","Enter lastname"]],null,null,null,_._123,_._28)),a._22(5120,null,m.g,function(l){return[l]},[o._67]),a._2(62,114688,[[2,4]],0,o._67,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],minerrormsg:[5,"minerrormsg"],maxerrormsg:[6,"maxerrormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"]},null),(l()(),a._25(-1,null,["\n                    "])),(l()(),a._25(-1,0,["\n                "])),(l()(),a._25(-1,0,["\n              "])),(l()(),a._25(-1,0,["\n\n              "])),(l()(),a._3(67,0,null,0,2,"amexio-textarea-input",[["name","Address"]],null,null,null,_._131,_._36)),a._22(5120,null,m.g,function(l){return[l]},[o._75]),a._2(69,114688,[[3,4]],0,o._75,[],{fieldlabel:[0,"fieldlabel"],rows:[1,"rows"],columns:[2,"columns"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],placeholder:[5,"placeholder"],disabled:[6,"disabled"],iconfeedback:[7,"iconfeedback"],enablepopover:[8,"enablepopover"]},null),(l()(),a._25(-1,0,["\n              "])),(l()(),a._3(71,0,null,0,18,"amexio-row",[],null,null,null,_._63,_.u)),a._2(72,1163264,null,0,o.D,[],null,null),(l()(),a._25(-1,0,["    \n    "])),(l()(),a._3(74,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,_._50,_.h)),a._2(75,114688,null,0,o.i,[],{size:[0,"size"]},null),(l()(),a._25(-1,0,["\n        "])),(l()(),a._3(77,0,null,0,2,"amexio-radio-group",[["name","name"]],null,null,null,_._127,_._32)),a._2(78,114688,[[9,4]],0,o._71,[o._1],{allowblank:[0,"allowblank"],name:[1,"name"],fieldlabel:[2,"fieldlabel"],datareader:[3,"datareader"],displayfield:[4,"displayfield"],valuefield:[5,"valuefield"],horizontal:[6,"horizontal"],data:[7,"data"]},null),(l()(),a._25(-1,null,["\n        "])),(l()(),a._25(-1,0,["\n    "])),(l()(),a._25(-1,0,["\n    "])),(l()(),a._3(82,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,_._50,_.h)),a._2(83,114688,null,0,o.i,[],{size:[0,"size"]},null),(l()(),a._25(-1,0,["\n        "])),(l()(),a._3(85,0,null,0,2,"amexio-checkbox-group",[["name","language"]],null,null,null,_._102,_._7)),a._2(86,376832,[[8,4]],0,o._34,[o._1],{horizontal:[0,"horizontal"],fieldlabel:[1,"fieldlabel"],datareader:[2,"datareader"],displayfield:[3,"displayfield"],valuefield:[4,"valuefield"],disabled:[5,"disabled"],data:[6,"data"],required:[7,"required"]},null),(l()(),a._25(-1,null,["\n        "])),(l()(),a._25(-1,0,["\n  \n      "])),(l()(),a._25(-1,0,["\n"])),(l()(),a._25(-1,0,["\n              "])),(l()(),a._3(91,0,null,0,19,"amexio-row",[],null,null,null,_._63,_.u)),a._2(92,1163264,null,0,o.D,[],null,null),(l()(),a._25(-1,0,["\n                  "])),(l()(),a._3(94,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,_._50,_.h)),a._2(95,114688,null,0,o.i,[],{size:[0,"size"]},null),(l()(),a._25(-1,0,["\n                      "])),(l()(),a._3(97,0,null,0,2,"amexio-tag-input",[],null,[["document","click"],["document","touchstart"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a._16(l,98).onElementOutClick(n.target)&&t),"document:touchstart"===e&&(t=!1!==a._16(l,98).onElementOutClick(n.target)&&t),t},_._104,_._9)),a._2(98,114688,[[12,4]],0,o._38,[o._1,a.k,a.B],{fieldlabel:[0,"fieldlabel"],allowblank:[1,"allowblank"],datareader:[2,"datareader"],httpmethod:[3,"httpmethod"],httpurl:[4,"httpurl"],displayfield:[5,"displayfield"],haslabel:[6,"haslabel"],key:[7,"key"]},null),(l()(),a._25(-1,null,["\n                      "])),(l()(),a._25(-1,0,["\n                  "])),(l()(),a._25(-1,0,["\n                  "])),(l()(),a._3(102,0,null,0,7,"amexio-column",[],[[8,"className",0]],null,null,_._50,_.h)),a._2(103,114688,null,0,o.i,[],{size:[0,"size"]},null),(l()(),a._25(-1,0,["\n                      "])),(l()(),a._3(105,0,null,0,3,"amexio-dropdown",[["name","city"]],null,[["document","click"],["document","touchstart"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a._16(l,107).onElementOutClick(n.target)&&t),"document:touchstart"===e&&(t=!1!==a._16(l,107).onElementOutClick(n.target)&&t),t},_._125,_._30)),a._22(5120,null,m.g,function(l){return[l]},[o._69]),a._2(107,376832,[[10,4]],0,o._69,[o._1,a.k,a.B],{fieldlabel:[0,"fieldlabel"],allowblank:[1,"allowblank"],datareader:[2,"datareader"],httpmethod:[3,"httpmethod"],httpurl:[4,"httpurl"],displayfield:[5,"displayfield"],valuefield:[6,"valuefield"],search:[7,"search"],placeholder:[8,"placeholder"]},null),(l()(),a._25(-1,null,["\n                      "])),(l()(),a._25(-1,0,["\n                  "])),(l()(),a._25(-1,0,["\n                \n              "])),(l()(),a._25(-1,0,["\n              "])),(l()(),a._3(112,0,null,0,25,"amexio-row",[],null,null,null,_._63,_.u)),a._2(113,1163264,null,0,o.D,[],null,null),(l()(),a._25(-1,0,["\n                "])),(l()(),a._3(115,0,null,0,7,"amexio-column",[["size","6"]],[[8,"className",0]],null,null,_._50,_.h)),a._2(116,114688,null,0,o.i,[],{size:[0,"size"]},null),(l()(),a._25(-1,0,["\n                    "])),(l()(),a._3(118,0,null,0,3,"amexio-number-input",[],null,null,null,_._129,_._34)),a._22(5120,null,m.g,function(l){return[l]},[o._73]),a._2(120,114688,[[5,4]],0,o._73,[],{fieldlabel:[0,"fieldlabel"],allowblank:[1,"allowblank"],minvalue:[2,"minvalue"],maxvalue:[3,"maxvalue"],errormsg:[4,"errormsg"],minerrormsg:[5,"minerrormsg"],maxerrormsg:[6,"maxerrormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"]},null),(l()(),a._25(-1,null,["\n                    "])),(l()(),a._25(-1,0,["\n                "])),(l()(),a._25(-1,0,["\n                "])),(l()(),a._3(124,0,null,0,12,"amexio-column",[],[[8,"className",0]],null,null,_._50,_.h)),a._2(125,114688,null,0,o.i,[],{size:[0,"size"]},null),(l()(),a._25(-1,0,["\n                    "])),(l()(),a._3(127,0,null,0,8,"amexio-date-time-picker",[],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],["document","click"],["document","touchstart"]],function(l,e,n){var t=!0,u=l.component;return"document:click"===e&&(t=!1!==a._16(l,130).onElementOutClick(n.target)&&t),"document:touchstart"===e&&(t=!1!==a._16(l,130).onElementOutClick(n.target)&&t),"ngModelChange"===e&&(t=!1!==(u.currentDate=n)&&t),t},_._105,_._10)),a._2(128,16384,null,0,m.n,[],{required:[0,"required"]},null),a._22(1024,null,m.f,function(l){return[l]},[m.n]),a._2(130,114688,[[13,4]],0,o._39,[a.k],{datepicker:[0,"datepicker"],timepicker:[1,"timepicker"],fieldlabel:[2,"fieldlabel"],required:[3,"required"]},null),a._22(1024,null,m.g,function(l){return[l]},[o._39]),a._2(132,671744,null,0,m.l,[[8,null],[2,m.f],[8,null],[2,m.g]],{model:[0,"model"]},{update:"ngModelChange"}),a._22(2048,null,m.h,null,[m.l]),a._2(134,16384,null,0,m.i,[m.h],null,null),(l()(),a._25(-1,null,["\n                    "])),(l()(),a._25(-1,0,["\n                "])),(l()(),a._25(-1,0,["\n              "])),(l()(),a._25(-1,0,["\n\n              "])),(l()(),a._3(139,0,null,0,20,"amexio-row",[],null,null,null,_._63,_.u)),a._2(140,1163264,null,0,o.D,[],null,null),(l()(),a._25(-1,0,["\n                "])),(l()(),a._3(142,0,null,0,7,"amexio-column",[],[[8,"className",0]],null,null,_._50,_.h)),a._2(143,114688,null,0,o.i,[],{size:[0,"size"]},null),(l()(),a._25(-1,0,["\n                    "])),(l()(),a._3(145,0,null,0,3,"amexio-email-input",[["name","email"]],null,null,null,_._128,_._33)),a._22(5120,null,m.g,function(l){return[l]},[o._72]),a._2(147,114688,[[4,4]],0,o._72,[],{fieldlabel:[0,"fieldlabel"],allowblank:[1,"allowblank"],errormsg:[2,"errormsg"],placeholder:[3,"placeholder"],iconfeedback:[4,"iconfeedback"],enablepopover:[5,"enablepopover"]},null),(l()(),a._25(-1,null,["\n                    "])),(l()(),a._25(-1,0,["\n                "])),(l()(),a._25(-1,0,["\n                "])),(l()(),a._3(151,0,null,0,7,"amexio-column",[],[[8,"className",0]],null,null,_._50,_.h)),a._2(152,114688,null,0,o.i,[],{size:[0,"size"]},null),(l()(),a._25(-1,0,["\n                    "])),(l()(),a._3(154,0,null,0,3,"amexio-password-input",[["name","password"]],null,null,null,_._130,_._35)),a._22(5120,null,m.g,function(l){return[l]},[o._74]),a._2(156,114688,[[6,4]],0,o._74,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],minerrormsg:[5,"minerrormsg"],maxerrormsg:[6,"maxerrormsg"],placeholder:[7,"placeholder"],iconfeedback:[8,"iconfeedback"],enablepopover:[9,"enablepopover"]},null),(l()(),a._25(-1,null,["\n                    "])),(l()(),a._25(-1,0,["\n                "])),(l()(),a._25(-1,0,["\n              "])),(l()(),a._25(-1,0,["\n\n              "])),(l()(),a._3(161,0,null,0,3,"amexio-checkbox",[],null,null,null,_._124,_._29)),a._22(5120,null,m.g,function(l){return[l]},[o._68]),a._2(163,114688,[[7,4]],0,o._68,[],{fieldlabel:[0,"fieldlabel"],required:[1,"required"]},null),(l()(),a._25(-1,null,["\n              "])),(l()(),a._25(-1,0,["\n            "])),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(167,0,null,2,13,"amexio-form-action",[],null,null,null,_._53,_.k)),a._2(168,4308992,[[15,4]],2,o.o,[],null,null),a._23(603979776,16,{btns:1}),a._23(603979776,17,{btngrp:1}),(l()(),a._25(-1,0,["\n                "])),(l()(),a._3(172,0,null,0,2,"amexio-button",[],null,null,null,_._134,_._39)),a._2(173,49152,[[16,4]],0,o._78,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"],disabled:[3,"disabled"],formbind:[4,"formbind"]},null),(l()(),a._25(-1,null,["\n                "])),(l()(),a._25(-1,0,["\n                "])),(l()(),a._3(176,0,null,0,2,"amexio-button",[],null,null,null,_._134,_._39)),a._2(177,49152,[[16,4]],0,o._78,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},null),(l()(),a._25(-1,null,["\n                  "])),(l()(),a._25(-1,0,["\n                "])),(l()(),a._25(-1,0,["\n\n              "])),(l()(),a._25(-1,null,["\n            "])),(l()(),a._25(-1,0,["\n          "])),(l()(),a._25(-1,0,["\n          \n          "])),(l()(),a._3(184,0,null,0,123,"amexio-tab",[["title","API Reference"]],null,null,null,_._67,_.y)),a._2(185,114688,[[1,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),a._25(-1,0,["\n            "])),(l()(),a._3(187,0,null,0,23,"amexio-datagrid",[["title","Properties <amexio-form>"]],null,null,null,_._117,_._22)),a._2(188,1425408,null,1,o._57,[o._1,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a._23(603979776,18,{columnRef:1}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(191,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(192,49152,[[18,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,19,{headerTemplate:0}),a._23(335544320,20,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(196,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(197,49152,[[18,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,21,{headerTemplate:0}),a._23(335544320,22,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(201,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(202,49152,[[18,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,23,{headerTemplate:0}),a._23(335544320,24,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(206,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(207,49152,[[18,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,25,{headerTemplate:0}),a._23(335544320,26,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n            "])),(l()(),a._25(-1,0,["\n             "])),(l()(),a._3(212,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a._25(-1,0,["\n              \n            "])),(l()(),a._3(214,0,null,0,23,"amexio-datagrid",[["title","Properties <amexio-form-header>"]],null,null,null,_._117,_._22)),a._2(215,1425408,null,1,o._57,[o._1,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a._23(603979776,27,{columnRef:1}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(218,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(219,49152,[[27,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,28,{headerTemplate:0}),a._23(335544320,29,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(223,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(224,49152,[[27,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,30,{headerTemplate:0}),a._23(335544320,31,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(228,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(229,49152,[[27,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,32,{headerTemplate:0}),a._23(335544320,33,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(233,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(234,49152,[[27,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,34,{headerTemplate:0}),a._23(335544320,35,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n            "])),(l()(),a._3(238,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a._25(-1,0,["\n\n            "])),(l()(),a._3(240,0,null,0,23,"amexio-datagrid",[["title","Properties <amexio-form-body>"]],null,null,null,_._117,_._22)),a._2(241,1425408,null,1,o._57,[o._1,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a._23(603979776,36,{columnRef:1}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(244,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(245,49152,[[36,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,37,{headerTemplate:0}),a._23(335544320,38,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(249,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(250,49152,[[36,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,39,{headerTemplate:0}),a._23(335544320,40,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(254,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(255,49152,[[36,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,41,{headerTemplate:0}),a._23(335544320,42,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(259,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(260,49152,[[36,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,43,{headerTemplate:0}),a._23(335544320,44,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n            "])),(l()(),a._25(-1,0,["\n "])),(l()(),a._3(265,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a._25(-1,0,["\n            "])),(l()(),a._3(267,0,null,0,23,"amexio-datagrid",[["title","Properties <amexio-form-action>"]],null,null,null,_._117,_._22)),a._2(268,1425408,null,1,o._57,[o._1,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a._23(603979776,45,{columnRef:1}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(271,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(272,49152,[[45,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,46,{headerTemplate:0}),a._23(335544320,47,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(276,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(277,49152,[[45,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,48,{headerTemplate:0}),a._23(335544320,49,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(281,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(282,49152,[[45,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,50,{headerTemplate:0}),a._23(335544320,51,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(286,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(287,49152,[[45,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,52,{headerTemplate:0}),a._23(335544320,53,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n            "])),(l()(),a._3(291,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a._25(-1,0,["\n\n\n\n            "])),(l()(),a._3(293,0,null,0,13,"amexio-datagrid",[["title","Events <amexio-form>"]],null,null,null,_._117,_._22)),a._2(294,1425408,null,1,o._57,[o._1,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a._23(603979776,54,{columnRef:1}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(297,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(298,49152,[[54,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,55,{headerTemplate:0}),a._23(335544320,56,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(302,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._118,_._23)),a._2(303,49152,[[54,4]],2,o._58,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a._23(335544320,57,{headerTemplate:0}),a._23(335544320,58,{bodyTemplate:0}),(l()(),a._25(-1,null,["\n            "])),(l()(),a._25(-1,0,["\n          "])),(l()(),a._25(-1,0,["\n          \n          "])),(l()(),a._3(309,0,null,0,27,"amexio-tab",[["title","Source"]],null,null,null,_._67,_.y)),a._2(310,114688,[[1,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),a._25(-1,0,["\n            "])),(l()(),a._3(312,0,null,0,23,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(314,0,null,null,20,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),a._25(-1,null,["\n              "])),(l()(),a._3(316,0,null,null,17,"amexio-vertical-tab-view",[],null,null,null,_._69,_.A)),a._2(317,5357568,null,1,o.L,[a.B],null,null),a._23(603979776,59,{queryTabs:1}),(l()(),a._25(-1,0,["\n                "])),(l()(),a._3(320,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,_._67,_.y)),a._2(321,114688,[[59,4]],0,o.H,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a._25(-1,0,["\n                  "])),(l()(),a.Y(16777216,null,0,1,null,p)),a._2(324,16384,null,0,s.l,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a._25(-1,0,["\n                "])),(l()(),a._25(-1,0,["\n                "])),(l()(),a._3(327,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,_._67,_.y)),a._2(328,114688,[[59,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),a._25(-1,0,["\n                  "])),(l()(),a.Y(16777216,null,0,1,null,h)),a._2(331,16384,null,0,s.l,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a._25(-1,0,["\n                "])),(l()(),a._25(-1,0,["\n              "])),(l()(),a._25(-1,null,[" \n              "])),(l()(),a._25(-1,null,["\n            "])),(l()(),a._25(-1,0,["\n           \n          "])),(l()(),a._25(-1,0,["\n          "])),(l()(),a._3(338,0,null,0,7,"amexio-tab",[["title","Live"]],null,null,null,_._67,_.y)),a._2(339,114688,[[1,4]],0,o.H,[],{title:[0,"title"]},null),(l()(),a._25(-1,0,["\n          "])),(l()(),a._3(341,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),a._25(-1,null,["Amexio Sandbox"])),(l()(),a._25(-1,0,["\n          "])),(l()(),a._3(344,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v42-form?embed=1&file=app/forms/form/form.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),a._25(-1,0,["\n          "])),(l()(),a._25(-1,0,["\n        "])),(l()(),a._25(-1,0,["\n      "])),(l()(),a._25(-1,null,["\n    "])),(l()(),a._25(-1,null,["\n  "]))],function(l,e){var n=e.component;l(e,2,0,"true"),l(e,5,0),l(e,9,0),l(e,15,0),l(e,19,0,"Demo","true"),l(e,22,0,"validateForm","true","true"),l(e,39,0),l(e,43,0),l(e,46,0),l(e,49,0,6),l(e,53,0,"Firstname",3,5,!1,"Enter firstname","true"),l(e,58,0,6),l(e,62,0,"Lastname","3","10","false","Please enter last name","Minimum 3 char required","Maximum 10 char allowed","Enter lastname","true","true"),l(e,69,0,"Address","1","2",!1,"Please enter address","Enter address",!1,!0,!0),l(e,72,0),l(e,75,0,6),l(e,78,0,!1,"name","Gender","response.data","gender","genderId",!0,n.radioGroupData),l(e,83,0,6),l(e,86,0,!0,"Hobbies","response.data","language","checked",!1,n.checkboxGroupdata,!0),l(e,92,0),l(e,95,0,6),l(e,98,0,"Having visa",!1,"response.data","get","assets/data/componentdata/countryy.json","countryName",!0,"countryName"),l(e,103,0,6),l(e,107,0,"City",!1,"response.data","get","assets/data/componentdata/cities.json","cityName","cityName","true","Choose City"),l(e,113,0),l(e,116,0,"6"),l(e,120,0,"Age",!1,1,100,"Please enter age","age can not be less than 1","age can not be greater than 100","Enter age",!0,!0),l(e,125,0,6),l(e,128,0,!0),l(e,130,0,!0,!1,"Date Of Birth",!0),l(e,132,0,n.currentDate),l(e,140,0),l(e,143,0,6),l(e,147,0,"Email Id",!1,"Please Enter Email Id","Enter Email Id",!0,!0),l(e,152,0,6),l(e,156,0,"Password Input",6,32,!1,"Please enter password","Minimum 6 char required","Maximum 32 char allowed","Enter Password",!0,!0),l(e,163,0,"Agree",!0),l(e,168,0),l(e,173,0,"OK","primary","Save",!0,"validateForm"),l(e,177,0,"Cancel","theme-backgroundcolor","Cancel"),l(e,185,0,"API Reference"),l(e,188,0,"Properties <amexio-form>","assets/apireference/panes/form.component.json","get","properties",!1,!1),l(e,192,0,"Name","name",!1,"string",15),l(e,197,0,"Type","type",!1,"string",10),l(e,202,0,"Default","default",!1,"string",10),l(e,207,0,"Description","description",!1,"string",65),l(e,215,0,"Properties <amexio-form-header>","assets/apireference/panes/form.action.component.json","get","properties",!1,!1),l(e,219,0,"Name","name",!1,"string",15),l(e,224,0,"Type","type",!1,"string",10),l(e,229,0,"Default","default",!1,"string",10),l(e,234,0,"Description","description",!1,"string",65),l(e,241,0,"Properties <amexio-form-body>","assets/apireference/panes/form.action.component.json","get","properties",!1,!1),l(e,245,0,"Name","name",!1,"string",15),l(e,250,0,"Type","type",!1,"string",10),l(e,255,0,"Default","default",!1,"string",10),l(e,260,0,"Description","description",!1,"string",65),l(e,268,0,"Properties <amexio-form-action>","assets/apireference/panes/form.action.component.json","get","properties",!1,!1),l(e,272,0,"Name","name",!1,"string",15),l(e,277,0,"Type","type",!1,"string",10),l(e,282,0,"Default","default",!1,"string",10),l(e,287,0,"Description","description",!1,"string",65),l(e,294,0,"Events <amexio-form>","assets/apireference/panes/form.component.json","get","events",!1,!1),l(e,298,0,"Name","name",!1,"string",15),l(e,303,0,"Description","description",!1,"string",65),l(e,310,0,"Source"),l(e,317,0),l(e,321,0,"HTML",!0),l(e,324,0,n.htmlCode),l(e,328,0,"Type Script"),l(e,331,0,n.typeScriptCode),l(e,339,0,"Live")},function(l,e){l(e,48,0,a._16(e,49).colclass),l(e,57,0,a._16(e,58).colclass),l(e,74,0,a._16(e,75).colclass),l(e,82,0,a._16(e,83).colclass),l(e,94,0,a._16(e,95).colclass),l(e,102,0,a._16(e,103).colclass),l(e,115,0,a._16(e,116).colclass),l(e,124,0,a._16(e,125).colclass),l(e,127,0,a._16(e,128).required?"":null,a._16(e,134).ngClassUntouched,a._16(e,134).ngClassTouched,a._16(e,134).ngClassPristine,a._16(e,134).ngClassDirty,a._16(e,134).ngClassValid,a._16(e,134).ngClassInvalid,a._16(e,134).ngClassPending),l(e,142,0,a._16(e,143).colclass),l(e,151,0,a._16(e,152).colclass)})}var f=a.Z("form-demo",u,function(l){return a._27(0,[(l()(),a._3(0,0,null,null,1,"form-demo",[],null,null,null,b,c)),a._2(1,49152,null,0,u,[t.c],null,null)],null,null)},{},{},[]),x=n("UHIZ");n.d(e,"FormDemoModuleNgFactory",function(){return g});var g=a._0(i,[],function(l){return a._12([a._13(512,a.j,a.W,[[8,[f]],[3,a.j],a.v]),a._13(4608,s.n,s.m,[a.s,[2,s.u]]),a._13(4608,t.h,t.m,[s.c,a.z,t.k]),a._13(4608,t.n,t.n,[t.h,t.l]),a._13(5120,t.a,function(l){return[l]},[t.n]),a._13(4608,t.j,t.j,[]),a._13(6144,t.i,null,[t.j]),a._13(4608,t.g,t.g,[t.i]),a._13(6144,t.b,null,[t.g]),a._13(5120,t.f,t.o,[t.b,[2,t.a]]),a._13(4608,t.c,t.c,[t.f]),a._13(4608,m.r,m.r,[]),a._13(4608,o._1,o._1,[t.c]),a._13(4608,o._11,o._11,[a.z]),a._13(4608,o._17,o._17,[]),a._13(4608,o._37,o._37,[]),a._13(512,s.b,s.b,[]),a._13(512,t.e,t.e,[]),a._13(512,t.d,t.d,[]),a._13(512,m.o,m.o,[]),a._13(512,m.e,m.e,[]),a._13(512,o.u,o.u,[]),a._13(512,o.s,o.s,[]),a._13(512,o._44,o._44,[]),a._13(512,o.y,o.y,[]),a._13(512,o.B,o.B,[]),a._13(512,o.k,o.k,[]),a._13(512,o.M,o.M,[]),a._13(512,r.b,r.b,[]),a._13(512,x.n,x.n,[[2,x.s],[2,x.m]]),a._13(512,i,i,[]),a._13(256,t.k,"XSRF-TOKEN",[]),a._13(256,t.l,"X-XSRF-TOKEN",[]),a._13(1024,x.i,function(){return[[{path:"",component:u}]]},[])])})}});