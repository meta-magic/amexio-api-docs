webpackJsonp(["text.demo.module"],{"0cEE":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e("LMZF"),t=function(){},a=e("tfJK"),_=e("KhCp"),i=e("kL+h"),o=e("drlO"),d=e("0nO6"),r=e("Un6q"),m=e("9iV4"),c=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/forms/textinput/form.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/forms/textinput/form.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),s=u._1({encapsulation:2,styles:[],data:{}});function x(l){return u._27(0,[(l()(),u._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(3,0,null,null,1,"prism-block",[],null,null,null,_.b,_.a)),u._2(4,4243456,null,0,i.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function p(l){return u._27(0,[(l()(),u._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(2,0,null,null,1,"prism-block",[],null,null,null,_.b,_.a)),u._2(3,4243456,null,0,i.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function h(l){return u._27(0,[(l()(),u._25(-1,null,["\n    "])),(l()(),u._3(1,0,null,null,284,"amexio-card",[["header","true"]],null,null,null,a._58,a.h)),u._2(2,5357568,null,3,o.g,[],{header:[0,"header"]},null),u._23(603979776,1,{amexioHeader:1}),u._23(603979776,2,{amexioBody:1}),u._23(603979776,3,{amexioFooter:1}),(l()(),u._25(-1,null,["\n      "])),(l()(),u._3(7,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),u._2(8,114688,[[1,4]],0,o.u,[],null,null),(l()(),u._25(-1,0,["\n         Text Input \n      "])),(l()(),u._25(-1,null,["\n      "])),(l()(),u._3(11,0,null,1,273,"amexio-body",[],null,null,null,a._54,a.d)),u._2(12,114688,[[2,4]],0,o.c,[],null,null),(l()(),u._25(-1,0,["\n        "])),(l()(),u._3(14,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u._25(-1,null,["Text input component has been created with different configurable attributes for validation (min/max length,\n          allow blank, custom regex), custom error message, help, custom styles."])),(l()(),u._25(-1,0,["\n        "])),(l()(),u._3(17,16777216,null,0,266,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var t=!0;return"document:click"===n&&(t=!1!==u._16(l,18).onWindowClick()&&t),"document:scroll"===n&&(t=!1!==u._16(l,18).onscroll()&&t),t},a._77,a.A)),u._2(18,5357568,null,2,o.J,[u.B,u.j,u.M],null,null),u._23(603979776,4,{queryTabs:1}),u._23(603979776,5,{queryAction:1}),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(22,0,null,1,179,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,a._78,a.B)),u._2(23,114688,[[4,4]],0,o.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(25,0,null,0,48,"amexio-row",[],null,null,null,a._73,a.w)),u._2(26,1163264,null,0,o.F,[],null,null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(28,0,null,0,21,"amexio-column",[["size","6"]],[[8,"className",0]],null,null,a._60,a.j)),u._2(29,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(31,0,null,0,17,"amexio-card",[["header","true"]],null,null,null,a._58,a.h)),u._2(32,5357568,null,3,o.g,[],{header:[0,"header"]},null),u._23(603979776,6,{amexioHeader:1}),u._23(603979776,7,{amexioBody:1}),u._23(603979776,8,{amexioFooter:1}),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(37,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),u._2(38,114688,[[6,4]],0,o.u,[],null,null),(l()(),u._25(-1,0,["\n                     Basic Text Field \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(41,0,null,1,6,"amexio-body",[],null,null,null,a._54,a.d)),u._2(42,114688,[[7,4]],0,o.c,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(44,0,null,0,2,"amexio-text-input",[["field-label","Name"],["icon-feedback","true"],["name","name"],["place-holder","Enter name"]],null,null,null,a._130,a._27)),u._22(5120,null,d.g,function(l){return[l]},[o._59]),u._2(46,114688,null,0,o._59,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(51,0,null,0,21,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),u._2(52,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(54,0,null,0,17,"amexio-card",[],null,null,null,a._58,a.h)),u._2(55,5357568,null,3,o.g,[],{header:[0,"header"]},null),u._23(603979776,9,{amexioHeader:1}),u._23(603979776,10,{amexioBody:1}),u._23(603979776,11,{amexioFooter:1}),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(60,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),u._2(61,114688,[[9,4]],0,o.u,[],null,null),(l()(),u._25(-1,0,["\n                     Input Without Label and Icon feedback \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(64,0,null,1,6,"amexio-body",[],null,null,null,a._54,a.d)),u._2(65,114688,[[10,4]],0,o.c,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(67,0,null,0,2,"amexio-text-input",[["has-label","false"],["icon-feedback","false"],["name","name"],["place-holder","Enter name"]],null,null,null,a._130,a._27)),u._22(5120,null,d.g,function(l){return[l]},[o._59]),u._2(69,114688,null,0,o._59,[],{placeholder:[0,"placeholder"],iconfeedback:[1,"iconfeedback"],haslabel:[2,"haslabel"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(75,0,null,0,48,"amexio-row",[],null,null,null,a._73,a.w)),u._2(76,1163264,null,0,o.F,[],null,null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(78,0,null,0,21,"amexio-column",[["size","6"]],[[8,"className",0]],null,null,a._60,a.j)),u._2(79,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(81,0,null,0,17,"amexio-card",[],null,null,null,a._58,a.h)),u._2(82,5357568,null,3,o.g,[],{header:[0,"header"]},null),u._23(603979776,12,{amexioHeader:1}),u._23(603979776,13,{amexioBody:1}),u._23(603979776,14,{amexioFooter:1}),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(87,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),u._2(88,114688,[[12,4]],0,o.u,[],null,null),(l()(),u._25(-1,0,["\n                     Min/Max Validations \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(91,0,null,1,6,"amexio-body",[],null,null,null,a._54,a.d)),u._2(92,114688,[[13,4]],0,o.c,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(94,0,null,0,2,"amexio-text-input",[["allow-blank","false"],["enable-popover","true"],["error-msg","Please enter last name"],["field-label","Name"],["icon-feedback","true"],["max-error-msg","Maximum 10 char allowed"],["max-length","10"],["min-length","1"],["minerror-msg","Minimum 1 char required"],["name","name"],["place-holder","Enter name"]],null,null,null,a._130,a._27)),u._22(5120,null,d.g,function(l){return[l]},[o._59]),u._2(96,114688,null,0,o._59,[],{fieldlabel:[0,"fieldlabel"],minlength:[1,"minlength"],maxlength:[2,"maxlength"],allowblank:[3,"allowblank"],errormsg:[4,"errormsg"],maxerrormsg:[5,"maxerrormsg"],placeholder:[6,"placeholder"],iconfeedback:[7,"iconfeedback"],enablepopover:[8,"enablepopover"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(101,0,null,0,21,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),u._2(102,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(104,0,null,0,17,"amexio-card",[],null,null,null,a._58,a.h)),u._2(105,5357568,null,3,o.g,[],{header:[0,"header"]},null),u._23(603979776,15,{amexioHeader:1}),u._23(603979776,16,{amexioBody:1}),u._23(603979776,17,{amexioFooter:1}),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(110,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),u._2(111,114688,[[15,4]],0,o.u,[],null,null),(l()(),u._25(-1,0,["\n                     Disabled Text Field \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(114,0,null,1,6,"amexio-body",[],null,null,null,a._54,a.d)),u._2(115,114688,[[16,4]],0,o.c,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(117,0,null,0,2,"amexio-text-input",[["disabled","true"],["field-label","Name"],["name","name"],["place-holder","Enter name"]],null,null,null,a._130,a._27)),u._22(5120,null,d.g,function(l){return[l]},[o._59]),u._2(119,114688,null,0,o._59,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],disabled:[2,"disabled"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(125,0,null,0,48,"amexio-row",[],null,null,null,a._73,a.w)),u._2(126,1163264,null,0,o.F,[],null,null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(128,0,null,0,21,"amexio-column",[["size","6"]],[[8,"className",0]],null,null,a._60,a.j)),u._2(129,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(131,0,null,0,17,"amexio-card",[["header","true"]],null,null,null,a._58,a.h)),u._2(132,5357568,null,3,o.g,[],{header:[0,"header"]},null),u._23(603979776,18,{amexioHeader:1}),u._23(603979776,19,{amexioBody:1}),u._23(603979776,20,{amexioFooter:1}),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(137,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),u._2(138,114688,[[18,4]],0,o.u,[],null,null),(l()(),u._25(-1,0,["\n                     Font Styling \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(141,0,null,1,6,"amexio-body",[],null,null,null,a._54,a.d)),u._2(142,114688,[[19,4]],0,o.c,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(144,0,null,0,2,"amexio-text-input",[["field-label","Name"],["font-style","italic"],["icon-feedback","true"],["name","name"],["place-holder","Enter name"]],null,null,null,a._130,a._27)),u._22(5120,null,d.g,function(l){return[l]},[o._59]),u._2(146,114688,null,0,o._59,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"],fontstyle:[3,"fontstyle"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(151,0,null,0,21,"amexio-column",[["size","6"]],[[8,"className",0]],null,null,a._60,a.j)),u._2(152,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(154,0,null,0,17,"amexio-card",[["header","true"]],null,null,null,a._58,a.h)),u._2(155,5357568,null,3,o.g,[],{header:[0,"header"]},null),u._23(603979776,21,{amexioHeader:1}),u._23(603979776,22,{amexioBody:1}),u._23(603979776,23,{amexioFooter:1}),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(160,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),u._2(161,114688,[[21,4]],0,o.u,[],null,null),(l()(),u._25(-1,0,["\n                     Font Size & Family Styling \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(164,0,null,1,6,"amexio-body",[],null,null,null,a._54,a.d)),u._2(165,114688,[[22,4]],0,o.c,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(167,0,null,0,2,"amexio-text-input",[["name","name"]],null,null,null,a._130,a._27)),u._22(5120,null,d.g,function(l){return[l]},[o._59]),u._2(169,114688,null,0,o._59,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"],fontsize:[3,"fontsize"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(175,0,null,0,25,"amexio-row",[],null,null,null,a._73,a.w)),u._2(176,1163264,null,0,o.F,[],null,null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(178,0,null,0,21,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),u._2(179,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(181,0,null,0,17,"amexio-card",[],null,null,null,a._58,a.h)),u._2(182,5357568,null,3,o.g,[],{header:[0,"header"]},null),u._23(603979776,24,{amexioHeader:1}),u._23(603979776,25,{amexioBody:1}),u._23(603979776,26,{amexioFooter:1}),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(187,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),u._2(188,114688,[[24,4]],0,o.u,[],null,null),(l()(),u._25(-1,0,["\n                     Input with Pattern \n                  "])),(l()(),u._25(-1,null,["\n                  "])),(l()(),u._3(191,0,null,1,6,"amexio-body",[],null,null,null,a._54,a.d)),u._2(192,114688,[[25,4]],0,o.c,[],null,null),(l()(),u._25(-1,0,["\n                    "])),(l()(),u._3(194,0,null,0,2,"amexio-text-input",[["name","name"]],null,null,null,a._130,a._27)),u._22(5120,null,d.g,function(l){return[l]},[o._59]),u._2(196,114688,null,0,o._59,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"],pattern:[3,"pattern"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._25(-1,null,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(203,0,null,1,44,"amexio-tab",[["title","API Reference"]],null,null,null,a._78,a.B)),u._2(204,114688,[[4,4]],0,o.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,[" \n            "])),(l()(),u._3(206,0,null,0,23,"amexio-datagrid",[["title","Properties <amexio-textinput>"]],null,null,null,a._135,a._32)),u._2(207,1425408,null,1,o._66,[o._5,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),u._23(603979776,27,{columnRef:1}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(210,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(211,49152,[[27,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,28,{headerTemplate:0}),u._23(335544320,29,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(215,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(216,49152,[[27,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,30,{headerTemplate:0}),u._23(335544320,31,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(220,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(221,49152,[[27,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,32,{headerTemplate:0}),u._23(335544320,33,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(225,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(226,49152,[[27,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,34,{headerTemplate:0}),u._23(335544320,35,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(231,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(233,0,null,0,13,"amexio-datagrid",[["title","Events <amexio-textinput>"]],null,null,null,a._135,a._32)),u._2(234,1425408,null,1,o._66,[o._5,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),u._23(603979776,36,{columnRef:1}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(237,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(238,49152,[[36,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,37,{headerTemplate:0}),u._23(335544320,38,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(242,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),u._2(243,49152,[[36,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,39,{headerTemplate:0}),u._23(335544320,40,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n            \n          "])),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(249,0,null,1,24,"amexio-tab",[["title","Source"]],null,null,null,a._78,a.B)),u._2(250,114688,[[4,4]],0,o.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(252,0,null,0,20,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),u._25(-1,null,["\n            "])),(l()(),u._3(254,0,null,null,17,"amexio-vertical-tab-view",[],null,null,null,a._80,a.D)),u._2(255,5357568,null,1,o.O,[u.B],null,null),u._23(603979776,41,{queryTabs:1}),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(258,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,a._78,a.B)),u._2(259,114688,[[41,4]],0,o.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u.Y(16777216,null,0,1,null,x)),u._2(262,16384,null,0,r.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(265,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,a._78,a.B)),u._2(266,114688,[[41,4]],0,o.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u.Y(16777216,null,0,1,null,p)),u._2(269,16384,null,0,r.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(275,0,null,1,7,"amexio-tab",[["title","Live"]],null,null,null,a._78,a.B)),u._2(276,114688,[[4,4]],0,o.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n          "])),(l()(),u._3(278,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),u._25(-1,null,["Amexio Sandbox"])),(l()(),u._25(-1,0,["\n"])),(l()(),u._3(281,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-textinput?embed=1&file=app/forms/text/text.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,1,["\n        "])),(l()(),u._25(-1,0,["\n      "])),(l()(),u._25(-1,null,["\n    "])),(l()(),u._25(-1,null,["\n    "])),(l()(),u._25(-1,null,["\n\n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,8,0),l(n,12,0),l(n,18,0),l(n,23,0,"Demo","true"),l(n,26,0),l(n,29,0,"6"),l(n,32,0,"true"),l(n,38,0),l(n,42,0),l(n,46,0,"Name","Enter name","true"),l(n,52,0,6),l(n,55,0,!0),l(n,61,0),l(n,65,0),l(n,69,0,"Enter name","false","false"),l(n,76,0),l(n,79,0,"6"),l(n,82,0,!0),l(n,88,0),l(n,92,0),l(n,96,0,"Name","1","10","false","Please enter last name","Maximum 10 char allowed","Enter name","true",!0),l(n,102,0,6),l(n,105,0,!0),l(n,111,0),l(n,115,0),l(n,119,0,"Name","Enter name","true"),l(n,126,0),l(n,129,0,"6"),l(n,132,0,"true"),l(n,138,0),l(n,142,0),l(n,146,0,"Name","Enter name","true","italic"),l(n,152,0,"6"),l(n,155,0,"true"),l(n,161,0),l(n,165,0),l(n,169,0,"Name","Enter name",!0,"large"),l(n,176,0),l(n,179,0,6),l(n,182,0,!0),l(n,188,0),l(n,192,0),l(n,196,0,"Name","Enter name",!0,"[a-z]"),l(n,204,0,"API Reference"),l(n,207,0,"Properties <amexio-textinput>","assets/apireference/forms/textinput.json","get","properties",!1,!1),l(n,211,0,"Name","name",!1,"string",15),l(n,216,0,"Type","type",!1,"string",10),l(n,221,0,"Default","default",!1,"string",10),l(n,226,0,"Description","description",!1,"string",65),l(n,234,0,"Events <amexio-textinput>","assets/apireference/forms/textinput.json","get","events",!1),l(n,238,0,"Name","name",!1,"string",20),l(n,243,0,"Description","description",!1,"string",80),l(n,250,0,"Source"),l(n,255,0),l(n,259,0,"HTML",!0),l(n,262,0,e.htmlCode),l(n,266,0,"Type Script"),l(n,269,0,e.typeScriptCode),l(n,276,0,"Live")},function(l,n){l(n,28,0,u._16(n,29).colclass),l(n,51,0,u._16(n,52).colclass),l(n,78,0,u._16(n,79).colclass),l(n,101,0,u._16(n,102).colclass),l(n,128,0,u._16(n,129).colclass),l(n,151,0,u._16(n,152).colclass),l(n,178,0,u._16(n,179).colclass)})}var f=u.Z("text-demo",c,function(l){return u._27(0,[(l()(),u._3(0,0,null,null,1,"text-demo",[],null,null,null,h,s)),u._2(1,49152,null,0,c,[m.c],null,null)],null,null)},{},{},[]),b=e("UHIZ");e.d(n,"TextDemoModuleNgFactory",function(){return y});var y=u._0(t,[],function(l){return u._12([u._13(512,u.j,u.W,[[8,[a.a,f]],[3,u.j],u.v]),u._13(4608,r.n,r.m,[u.s,[2,r.u]]),u._13(4608,d.s,d.s,[]),u._13(4608,m.h,m.m,[r.c,u.z,m.k]),u._13(4608,m.n,m.n,[m.h,m.l]),u._13(5120,m.a,function(l){return[l]},[m.n]),u._13(4608,m.j,m.j,[]),u._13(6144,m.i,null,[m.j]),u._13(4608,m.g,m.g,[m.i]),u._13(6144,m.b,null,[m.g]),u._13(5120,m.f,m.o,[m.b,[2,m.a]]),u._13(4608,m.c,m.c,[m.f]),u._13(4608,o._5,o._5,[m.c]),u._13(4608,o._15,o._15,[u.z]),u._13(4608,o._22,o._22,[]),u._13(4608,o._40,o._40,[]),u._13(512,r.b,r.b,[]),u._13(512,d.p,d.p,[]),u._13(512,d.e,d.e,[]),u._13(512,m.e,m.e,[]),u._13(512,m.d,m.d,[]),u._13(512,i.b,i.b,[]),u._13(512,o.v,o.v,[]),u._13(512,o.t,o.t,[]),u._13(512,o.y,o.y,[]),u._13(512,o.A,o.A,[]),u._13(512,o.D,o.D,[]),u._13(512,o.l,o.l,[]),u._13(512,o.Q,o.Q,[]),u._13(512,b.n,b.n,[[2,b.s],[2,b.m]]),u._13(512,t,t,[]),u._13(256,m.k,"XSRF-TOKEN",[]),u._13(256,m.l,"X-XSRF-TOKEN",[]),u._13(1024,b.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})}});