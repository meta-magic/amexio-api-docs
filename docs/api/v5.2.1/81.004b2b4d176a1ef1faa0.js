(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"gvb+":function(l,a,n){"use strict";n.r(a);var e=n("CcnG"),t=function(){},u=n("gTgE"),i=n("pMnS"),d=n("U89g"),b=n("d2mR"),o=n("O4vx"),c=n("Ip0R"),r=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,a,n=this;this.http.get("assets/data/code/layout/tab/scrollabletab/tab.html").subscribe(function(a){l=a.text()},function(l){},function(){n.htmlCode=l}),this.http.get("assets/data/code/layout/tab/scrollabletab/tab.text").subscribe(function(l){a=l.text()},function(l){},function(){n.typeScriptCode=a})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),s=n("sE5F"),m=e.Qa({encapsulation:2,styles:[],data:{}});function h(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),e.Ra(2,4243456,null,0,b.a,[e.F,e.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,a){l(a,2,0,a.component.htmlCode,"html")},null)}function p(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),e.Ra(2,4243456,null,0,b.a,[e.F,e.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,a){l(a,2,0,a.component.typeScriptCode,"typescript")},null)}function x(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,207,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,a,n){var t=!0;return"document:click"===a&&(t=!1!==e.cb(l,1).onWindowClick()&&t),"document:scroll"===a&&(t=!1!==e.cb(l,1).onscroll()&&t),t},u.Pb,u.i)),e.Ra(1,5357568,null,3,o.h,[],{header:[0,"header"]},null),e.ib(603979776,1,{amexioHeader:1}),e.ib(603979776,2,{amexioBody:1}),e.ib(603979776,3,{amexioFooter:1}),(l()(),e.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.Yb,u.r)),e.Ra(6,114688,[[1,4]],0,o.v,[],null,null),(l()(),e.kb(-1,0,[" Scrollable Tab "])),(l()(),e.Sa(8,0,null,1,199,"amexio-body",[],null,null,null,u.Lb,u.e)),e.Ra(9,114688,[[2,4]],0,o.d,[],null,null),(l()(),e.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.kb(-1,null,["Scrollable Tab component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs"])),(l()(),e.Sa(12,16777216,null,0,195,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,a,n){var t=!0;return"document:click"===a&&(t=!1!==e.cb(l,13).onWindowClick()&&t),"document:scroll"===a&&(t=!1!==e.cb(l,13).onscroll()&&t),t},u.jc,u.C)),e.Ra(13,5357568,null,2,o.L,[e.F,e.k,e.R],null,null),e.ib(603979776,4,{queryTabs:1}),e.ib(603979776,5,{queryAction:1}),(l()(),e.Sa(16,0,null,1,95,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.kc,u.D)),e.Ra(17,114688,[[4,4]],0,o.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e.Sa(18,16777216,null,0,93,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,a,n){var t=!0;return"document:click"===a&&(t=!1!==e.cb(l,19).onWindowClick()&&t),"document:scroll"===a&&(t=!1!==e.cb(l,19).onscroll()&&t),t},u.jc,u.C)),e.Ra(19,5357568,null,2,o.L,[e.F,e.k,e.R],{closable:[0,"closable"]},null),e.ib(603979776,6,{queryTabs:1}),e.ib(603979776,7,{queryAction:1}),(l()(),e.Sa(22,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(23,114688,[[6,4]],0,o.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e.Sa(24,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(25,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 1"])),(l()(),e.Sa(27,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(28,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(29,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(30,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 2"])),(l()(),e.Sa(32,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(33,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(34,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(35,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 3"])),(l()(),e.Sa(37,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(38,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(39,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(40,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 4"])),(l()(),e.Sa(42,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(43,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(44,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(45,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 5"])),(l()(),e.Sa(47,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(48,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(49,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(50,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 6"])),(l()(),e.Sa(52,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(53,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(54,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(55,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 7"])),(l()(),e.Sa(57,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(58,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(59,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(60,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 8"])),(l()(),e.Sa(62,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(63,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(64,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(65,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 9"])),(l()(),e.Sa(67,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(68,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(69,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(70,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 10"])),(l()(),e.Sa(72,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(73,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(74,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(75,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 11"])),(l()(),e.Sa(77,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(78,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(79,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(80,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 12"])),(l()(),e.Sa(82,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(83,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(84,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(85,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 13"])),(l()(),e.Sa(87,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(88,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(89,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(90,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 14"])),(l()(),e.Sa(92,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(93,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(94,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(95,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 15"])),(l()(),e.Sa(97,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(98,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(99,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(100,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 16"])),(l()(),e.Sa(102,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(103,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(104,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(105,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 17"])),(l()(),e.Sa(107,0,null,1,4,"amexio-tab",[],null,null,null,u.kc,u.D)),e.Ra(108,114688,[[6,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(109,0,null,0,2,"amexio-label",[],null,null,null,u.Nd,u.Gb)),e.Ra(110,114688,null,0,o.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.kb(-1,0,["Tab 18"])),(l()(),e.Sa(112,0,null,1,76,"amexio-tab",[["title","API Reference"]],null,null,null,u.kc,u.D)),e.Ra(113,114688,[[4,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(114,0,null,0,22,"amexio-datagrid",[["title","Tab View Properties  <amexio-tab-view>"]],null,[["document","scroll"],["document","click"]],function(l,a,n){var t=!0;return"document:scroll"===a&&(t=!1!==e.cb(l,115).onscroll()&&t),"document:click"===a&&(t=!1!==e.cb(l,115).onclick()&&t),t},u.nd,u.gb)),e.Ra(115,1163264,null,1,o.Nb,[e.l,o.Ka,e.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,8,{columnRef:1}),(l()(),e.Sa(117,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),e.Ra(118,49152,[[8,4]],2,o.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,9,{headerTemplate:0}),e.ib(335544320,10,{bodyTemplate:0}),(l()(),e.Sa(121,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),e.Ra(122,49152,[[8,4]],2,o.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,11,{headerTemplate:0}),e.ib(335544320,12,{bodyTemplate:0}),(l()(),e.Sa(125,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),e.Ra(126,49152,[[8,4]],2,o.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,13,{headerTemplate:0}),e.ib(335544320,14,{bodyTemplate:0}),(l()(),e.Sa(129,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),e.Ra(130,49152,[[8,4]],2,o.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,15,{headerTemplate:0}),e.ib(335544320,16,{bodyTemplate:0}),(l()(),e.Sa(133,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),e.Ra(134,49152,[[8,4]],2,o.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,17,{headerTemplate:0}),e.ib(335544320,18,{bodyTemplate:0}),(l()(),e.Sa(137,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(138,0,null,0,22,"amexio-datagrid",[["title","Tab Properties  <amexio-tab>"]],null,[["document","scroll"],["document","click"]],function(l,a,n){var t=!0;return"document:scroll"===a&&(t=!1!==e.cb(l,139).onscroll()&&t),"document:click"===a&&(t=!1!==e.cb(l,139).onclick()&&t),t},u.nd,u.gb)),e.Ra(139,1163264,null,1,o.Nb,[e.l,o.Ka,e.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,19,{columnRef:1}),(l()(),e.Sa(141,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),e.Ra(142,49152,[[19,4]],2,o.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,20,{headerTemplate:0}),e.ib(335544320,21,{bodyTemplate:0}),(l()(),e.Sa(145,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),e.Ra(146,49152,[[19,4]],2,o.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,22,{headerTemplate:0}),e.ib(335544320,23,{bodyTemplate:0}),(l()(),e.Sa(149,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),e.Ra(150,49152,[[19,4]],2,o.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,24,{headerTemplate:0}),e.ib(335544320,25,{bodyTemplate:0}),(l()(),e.Sa(153,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),e.Ra(154,49152,[[19,4]],2,o.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,26,{headerTemplate:0}),e.ib(335544320,27,{bodyTemplate:0}),(l()(),e.Sa(157,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),e.Ra(158,49152,[[19,4]],2,o.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,28,{headerTemplate:0}),e.ib(335544320,29,{bodyTemplate:0}),(l()(),e.Sa(161,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(162,0,null,0,10,"amexio-datagrid",[["title","Tab Events"]],null,[["document","scroll"],["document","click"]],function(l,a,n){var t=!0;return"document:scroll"===a&&(t=!1!==e.cb(l,163).onscroll()&&t),"document:click"===a&&(t=!1!==e.cb(l,163).onclick()&&t),t},u.nd,u.gb)),e.Ra(163,1163264,null,1,o.Nb,[e.l,o.Ka,e.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,30,{columnRef:1}),(l()(),e.Sa(165,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),e.Ra(166,49152,[[30,4]],2,o.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,31,{headerTemplate:0}),e.ib(335544320,32,{bodyTemplate:0}),(l()(),e.Sa(169,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),e.Ra(170,49152,[[30,4]],2,o.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,33,{headerTemplate:0}),e.ib(335544320,34,{bodyTemplate:0}),(l()(),e.Sa(173,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Sa(174,0,null,0,14,"amexio-datagrid",[["title","Tab Methods"]],null,[["document","scroll"],["document","click"]],function(l,a,n){var t=!0;return"document:scroll"===a&&(t=!1!==e.cb(l,175).onscroll()&&t),"document:click"===a&&(t=!1!==e.cb(l,175).onclick()&&t),t},u.nd,u.gb)),e.Ra(175,1163264,null,1,o.Nb,[e.l,o.Ka,e.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.ib(603979776,35,{columnRef:1}),(l()(),e.Sa(177,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),e.Ra(178,49152,[[35,4]],2,o.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,36,{headerTemplate:0}),e.ib(335544320,37,{bodyTemplate:0}),(l()(),e.Sa(181,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),e.Ra(182,49152,[[35,4]],2,o.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,38,{headerTemplate:0}),e.ib(335544320,39,{bodyTemplate:0}),(l()(),e.Sa(185,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.od,u.hb)),e.Ra(186,49152,[[35,4]],2,o.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.ib(335544320,40,{headerTemplate:0}),e.ib(335544320,41,{bodyTemplate:0}),(l()(),e.Sa(189,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,u.kc,u.D)),e.Ra(190,114688,[[4,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(191,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),e.Sa(192,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,u.mc,u.F)),e.Ra(193,5357568,null,1,o.Q,[e.F],null,null),e.ib(603979776,42,{queryTabs:1}),(l()(),e.Sa(195,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.kc,u.D)),e.Ra(196,114688,[[42,4]],0,o.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e.Ja(16777216,null,0,1,null,h)),e.Ra(198,16384,null,0,c.l,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.Sa(199,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.kc,u.D)),e.Ra(200,114688,[[42,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Ja(16777216,null,0,1,null,p)),e.Ra(202,16384,null,0,c.l,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.Sa(203,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.kc,u.D)),e.Ra(204,114688,[[4,4]],0,o.M,[],{title:[0,"title"]},null),(l()(),e.Sa(205,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),e.kb(-1,null,["Amexio Sandbox"])),(l()(),e.Sa(207,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-horizontal-scrollable-tab?embed=1&file=app/tabs/scrollabletab/scrollabletab.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,a){var n=a.component;l(a,1,0,"true"),l(a,6,0),l(a,9,0),l(a,13,0),l(a,17,0,"Demo","true"),l(a,19,0,!0),l(a,23,0,"Tab 1",!0),l(a,25,0,"medium"),l(a,28,0,"Tab 2"),l(a,30,0,"medium"),l(a,33,0,"Tab 3"),l(a,35,0,"medium"),l(a,38,0,"Tab 4"),l(a,40,0,"medium"),l(a,43,0,"Tab 5"),l(a,45,0,"medium"),l(a,48,0,"Tab 6"),l(a,50,0,"medium"),l(a,53,0,"Tab 7"),l(a,55,0,"medium"),l(a,58,0,"Tab 8"),l(a,60,0,"medium"),l(a,63,0,"Tab 9"),l(a,65,0,"medium"),l(a,68,0,"Tab 10"),l(a,70,0,"medium"),l(a,73,0,"Tab 11"),l(a,75,0,"medium"),l(a,78,0,"Tab 12"),l(a,80,0,"medium"),l(a,83,0,"Tab 13"),l(a,85,0,"medium"),l(a,88,0,"Tab 14"),l(a,90,0,"medium"),l(a,93,0,"Tab 15"),l(a,95,0,"medium"),l(a,98,0,"Tab 16"),l(a,100,0,"medium"),l(a,103,0,"Tab 17"),l(a,105,0,"medium"),l(a,108,0,"Tab 18"),l(a,110,0,"medium"),l(a,113,0,"API Reference"),l(a,115,0,"Tab View Properties  <amexio-tab-view>","assets/apireference/layout/tab/horizontaltab.json","get","properties",!1,!1),l(a,118,0,"Name","name",!1,"string",15),l(a,122,0,"Version","version",!1,"string",20),l(a,126,0,"Type","type",!1,"string",10),l(a,130,0,"Default","default",!1,"string",10),l(a,134,0,"Description","description",!1,"string",45),l(a,139,0,"Tab Properties  <amexio-tab>","assets/apireference/layout/tab/horizontaltab.json","get","tabproperties",!1,!1),l(a,142,0,"Name","name",!1,"string",15),l(a,146,0,"Version","version",!1,"string",20),l(a,150,0,"Type","type",!1,"string",10),l(a,154,0,"Default","default",!1,"string",10),l(a,158,0,"Description","description",!1,"string",45),l(a,163,0,"Tab Events","assets/apireference/layout/tab/horizontaltab.json","get","events",!1,!1),l(a,166,0,"Name","name",!1,"string",40),l(a,170,0,"Description","description",!1,"string",60),l(a,175,0,"Tab Methods","assets/apireference/layout/tab/horizontaltab.json","get","methods",!1,!1),l(a,178,0,"Name","name",!1,"string",40),l(a,182,0,"Version","version",!1,"string",20),l(a,186,0,"Description","description",!1,"string",40),l(a,190,0,"Source"),l(a,193,0),l(a,196,0,"HTML",!0),l(a,198,0,n.htmlCode),l(a,200,0,"Type Script"),l(a,202,0,n.typeScriptCode),l(a,204,0,"Live")},null)}var y=e.Oa("scrollable-tab-demo",r,function(l){return e.mb(0,[(l()(),e.Sa(0,0,null,null,1,"scrollable-tab-demo",[],null,null,null,x,m)),e.Ra(1,49152,null,0,r,[s.d],null,null)],null,null)},{},{},[]),S=n("gIcY"),T=n("t/Na"),R=n("ZYCi");n.d(a,"ScrollableTabDemoModuleNgFactory",function(){return k});var k=e.Pa(t,[],function(l){return e.Za([e.ab(512,e.k,e.Ea,[[8,[u.a,i.a,y]],[3,e.k],e.z]),e.ab(4608,c.n,c.m,[e.w,[2,c.w]]),e.ab(4608,S.r,S.r,[]),e.ab(4608,s.c,s.c,[]),e.ab(4608,s.g,s.b,[]),e.ab(5120,s.i,s.j,[]),e.ab(4608,s.h,s.h,[s.c,s.g,s.i]),e.ab(4608,s.f,s.a,[]),e.ab(5120,s.d,s.k,[s.h,s.f]),e.ab(4608,T.h,T.n,[c.c,e.D,T.l]),e.ab(4608,T.o,T.o,[T.h,T.m]),e.ab(5120,T.a,function(l){return[l]},[T.o]),e.ab(4608,T.k,T.k,[]),e.ab(6144,T.i,null,[T.k]),e.ab(4608,T.g,T.g,[T.i]),e.ab(6144,T.b,null,[T.g]),e.ab(4608,T.f,T.j,[T.b,e.s]),e.ab(4608,T.c,T.c,[T.f]),e.ab(4608,o.Ka,o.Ka,[T.c]),e.ab(4608,o.Ua,o.Ua,[e.D]),e.ab(4608,o.bb,o.bb,[]),e.ab(4608,o.qc,o.qc,[]),e.ab(1073742336,c.b,c.b,[]),e.ab(1073742336,S.o,S.o,[]),e.ab(1073742336,S.e,S.e,[]),e.ab(1073742336,s.e,s.e,[]),e.ab(1073742336,b.b,b.b,[]),e.ab(1073742336,T.e,T.e,[]),e.ab(1073742336,T.d,T.d,[]),e.ab(1073742336,o.w,o.w,[]),e.ab(1073742336,o.u,o.u,[]),e.ab(1073742336,o.z,o.z,[]),e.ab(1073742336,o.B,o.B,[]),e.ab(1073742336,o.E,o.E,[]),e.ab(1073742336,o.m,o.m,[]),e.ab(1073742336,o.S,o.S,[]),e.ab(1073742336,R.n,R.n,[[2,R.t],[2,R.m]]),e.ab(1073742336,t,t,[]),e.ab(256,T.l,"XSRF-TOKEN",[]),e.ab(256,T.m,"X-XSRF-TOKEN",[]),e.ab(1024,R.i,function(){return[[{path:"",component:r,pathMatch:"full"}]]},[])])})}}]);