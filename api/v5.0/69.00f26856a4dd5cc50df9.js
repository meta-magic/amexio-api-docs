(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"gvb+":function(l,a,n){"use strict";n.r(a);var e=n("CcnG"),t=function(){},u=n("gTgE"),d=n("pMnS"),i=n("U89g"),o=n("d2mR"),b=n("O4vx"),c=n("Ip0R"),r=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,a,n=this;this.http.get("assets/data/code/layout/tab/scrollabletab/tab.html").subscribe(function(a){l=a.text()},function(l){},function(){n.htmlCode=l}),this.http.get("assets/data/code/layout/tab/scrollabletab/tab.text").subscribe(function(l){a=l.text()},function(l){},function(){n.typeScriptCode=a})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),s=n("sE5F"),m=e.La({encapsulation:2,styles:[],data:{}});function p(l){return e.hb(0,[(l()(),e.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Na(1,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),e.Ma(2,4243456,null,0,o.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null)],function(l,a){l(a,2,0,a.component.htmlCode,"html")},null)}function h(l){return e.hb(0,[(l()(),e.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Na(1,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),e.Ma(2,4243456,null,0,o.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null)],function(l,a){l(a,2,0,a.component.typeScriptCode,"typescript")},null)}function x(l){return e.hb(0,[(l()(),e.Na(0,0,null,null,207,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,a,n){var t=!0;return"document:click"===a&&(t=!1!==e.Xa(l,1).onWindowClick()&&t),"document:scroll"===a&&(t=!1!==e.Xa(l,1).onscroll()&&t),t},u.Lb,u.i)),e.Ma(1,5357568,null,3,b.h,[],{header:[0,"header"]},null),e.db(603979776,1,{amexioHeader:1}),e.db(603979776,2,{amexioBody:1}),e.db(603979776,3,{amexioFooter:1}),(l()(),e.Na(5,0,null,0,2,"amexio-header",[],null,null,null,u.Ub,u.r)),e.Ma(6,114688,[[1,4]],0,b.v,[],null,null),(l()(),e.fb(-1,0,[" Scrollable Tab "])),(l()(),e.Na(8,0,null,1,199,"amexio-body",[],null,null,null,u.Hb,u.e)),e.Ma(9,114688,[[2,4]],0,b.d,[],null,null),(l()(),e.Na(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.fb(-1,null,["Scrollable Tab component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs"])),(l()(),e.Na(12,16777216,null,0,195,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,a,n){var t=!0;return"document:click"===a&&(t=!1!==e.Xa(l,13).onWindowClick()&&t),"document:scroll"===a&&(t=!1!==e.Xa(l,13).onscroll()&&t),t},u.fc,u.C)),e.Ma(13,5357568,null,2,b.L,[e.B,e.j,e.M],null,null),e.db(603979776,4,{queryTabs:1}),e.db(603979776,5,{queryAction:1}),(l()(),e.Na(16,0,null,1,95,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.gc,u.D)),e.Ma(17,114688,[[4,4]],0,b.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e.Na(18,16777216,null,0,93,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,a,n){var t=!0;return"document:click"===a&&(t=!1!==e.Xa(l,19).onWindowClick()&&t),"document:scroll"===a&&(t=!1!==e.Xa(l,19).onscroll()&&t),t},u.fc,u.C)),e.Ma(19,5357568,null,2,b.L,[e.B,e.j,e.M],{closable:[0,"closable"]},null),e.db(603979776,6,{queryTabs:1}),e.db(603979776,7,{queryAction:1}),(l()(),e.Na(22,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(23,114688,[[6,4]],0,b.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e.Na(24,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(25,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 1"])),(l()(),e.Na(27,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(28,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(29,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(30,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 2"])),(l()(),e.Na(32,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(33,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(34,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(35,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 3"])),(l()(),e.Na(37,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(38,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(39,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(40,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 4"])),(l()(),e.Na(42,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(43,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(44,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(45,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 5"])),(l()(),e.Na(47,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(48,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(49,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(50,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 6"])),(l()(),e.Na(52,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(53,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(54,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(55,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 7"])),(l()(),e.Na(57,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(58,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(59,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(60,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 8"])),(l()(),e.Na(62,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(63,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(64,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(65,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 9"])),(l()(),e.Na(67,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(68,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(69,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(70,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 10"])),(l()(),e.Na(72,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(73,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(74,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(75,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 11"])),(l()(),e.Na(77,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(78,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(79,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(80,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 12"])),(l()(),e.Na(82,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(83,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(84,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(85,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 13"])),(l()(),e.Na(87,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(88,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(89,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(90,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 14"])),(l()(),e.Na(92,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(93,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(94,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(95,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 15"])),(l()(),e.Na(97,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(98,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(99,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(100,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 16"])),(l()(),e.Na(102,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(103,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(104,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(105,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 17"])),(l()(),e.Na(107,0,null,1,4,"amexio-tab",[],null,null,null,u.gc,u.D)),e.Ma(108,114688,[[6,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(109,0,null,0,2,"amexio-label",[],null,null,null,u.Fd,u.Cb)),e.Ma(110,114688,null,0,b.pc,[],{styleClass:[0,"styleClass"]},null),(l()(),e.fb(-1,0,["Tab 18"])),(l()(),e.Na(112,0,null,1,76,"amexio-tab",[["title","API Reference"]],null,null,null,u.gc,u.D)),e.Ma(113,114688,[[4,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(114,0,null,0,22,"amexio-datagrid",[["title","Tab View Properties  <amexio-tab-view>"]],null,[["document","scroll"],["document","click"]],function(l,a,n){var t=!0;return"document:scroll"===a&&(t=!1!==e.Xa(l,115).onscroll()&&t),"document:click"===a&&(t=!1!==e.Xa(l,115).onclick()&&t),t},u.fd,u.cb)),e.Ma(115,1163264,null,1,b.Ib,[e.k,b.Ia,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.db(603979776,8,{columnRef:1}),(l()(),e.Na(117,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.gd,u.db)),e.Ma(118,49152,[[8,4]],2,b.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.db(335544320,9,{headerTemplate:0}),e.db(335544320,10,{bodyTemplate:0}),(l()(),e.Na(121,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.gd,u.db)),e.Ma(122,49152,[[8,4]],2,b.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.db(335544320,11,{headerTemplate:0}),e.db(335544320,12,{bodyTemplate:0}),(l()(),e.Na(125,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.gd,u.db)),e.Ma(126,49152,[[8,4]],2,b.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.db(335544320,13,{headerTemplate:0}),e.db(335544320,14,{bodyTemplate:0}),(l()(),e.Na(129,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.gd,u.db)),e.Ma(130,49152,[[8,4]],2,b.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.db(335544320,15,{headerTemplate:0}),e.db(335544320,16,{bodyTemplate:0}),(l()(),e.Na(133,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.gd,u.db)),e.Ma(134,49152,[[8,4]],2,b.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.db(335544320,17,{headerTemplate:0}),e.db(335544320,18,{bodyTemplate:0}),(l()(),e.Na(137,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Na(138,0,null,0,22,"amexio-datagrid",[["title","Tab Properties  <amexio-tab>"]],null,[["document","scroll"],["document","click"]],function(l,a,n){var t=!0;return"document:scroll"===a&&(t=!1!==e.Xa(l,139).onscroll()&&t),"document:click"===a&&(t=!1!==e.Xa(l,139).onclick()&&t),t},u.fd,u.cb)),e.Ma(139,1163264,null,1,b.Ib,[e.k,b.Ia,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.db(603979776,19,{columnRef:1}),(l()(),e.Na(141,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.gd,u.db)),e.Ma(142,49152,[[19,4]],2,b.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.db(335544320,20,{headerTemplate:0}),e.db(335544320,21,{bodyTemplate:0}),(l()(),e.Na(145,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.gd,u.db)),e.Ma(146,49152,[[19,4]],2,b.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.db(335544320,22,{headerTemplate:0}),e.db(335544320,23,{bodyTemplate:0}),(l()(),e.Na(149,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.gd,u.db)),e.Ma(150,49152,[[19,4]],2,b.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.db(335544320,24,{headerTemplate:0}),e.db(335544320,25,{bodyTemplate:0}),(l()(),e.Na(153,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.gd,u.db)),e.Ma(154,49152,[[19,4]],2,b.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.db(335544320,26,{headerTemplate:0}),e.db(335544320,27,{bodyTemplate:0}),(l()(),e.Na(157,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.gd,u.db)),e.Ma(158,49152,[[19,4]],2,b.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.db(335544320,28,{headerTemplate:0}),e.db(335544320,29,{bodyTemplate:0}),(l()(),e.Na(161,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Na(162,0,null,0,10,"amexio-datagrid",[["title","Tab Events"]],null,[["document","scroll"],["document","click"]],function(l,a,n){var t=!0;return"document:scroll"===a&&(t=!1!==e.Xa(l,163).onscroll()&&t),"document:click"===a&&(t=!1!==e.Xa(l,163).onclick()&&t),t},u.fd,u.cb)),e.Ma(163,1163264,null,1,b.Ib,[e.k,b.Ia,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.db(603979776,30,{columnRef:1}),(l()(),e.Na(165,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.gd,u.db)),e.Ma(166,49152,[[30,4]],2,b.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.db(335544320,31,{headerTemplate:0}),e.db(335544320,32,{bodyTemplate:0}),(l()(),e.Na(169,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.gd,u.db)),e.Ma(170,49152,[[30,4]],2,b.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.db(335544320,33,{headerTemplate:0}),e.db(335544320,34,{bodyTemplate:0}),(l()(),e.Na(173,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Na(174,0,null,0,14,"amexio-datagrid",[["title","Tab Methods"]],null,[["document","scroll"],["document","click"]],function(l,a,n){var t=!0;return"document:scroll"===a&&(t=!1!==e.Xa(l,175).onscroll()&&t),"document:click"===a&&(t=!1!==e.Xa(l,175).onclick()&&t),t},u.fd,u.cb)),e.Ma(175,1163264,null,1,b.Ib,[e.k,b.Ia,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e.db(603979776,35,{columnRef:1}),(l()(),e.Na(177,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.gd,u.db)),e.Ma(178,49152,[[35,4]],2,b.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.db(335544320,36,{headerTemplate:0}),e.db(335544320,37,{bodyTemplate:0}),(l()(),e.Na(181,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.gd,u.db)),e.Ma(182,49152,[[35,4]],2,b.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.db(335544320,38,{headerTemplate:0}),e.db(335544320,39,{bodyTemplate:0}),(l()(),e.Na(185,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.gd,u.db)),e.Ma(186,49152,[[35,4]],2,b.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e.db(335544320,40,{headerTemplate:0}),e.db(335544320,41,{bodyTemplate:0}),(l()(),e.Na(189,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,u.gc,u.D)),e.Ma(190,114688,[[4,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(191,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),e.Na(192,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,u.ic,u.F)),e.Ma(193,5357568,null,1,b.Q,[e.B],null,null),e.db(603979776,42,{queryTabs:1}),(l()(),e.Na(195,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.gc,u.D)),e.Ma(196,114688,[[42,4]],0,b.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e.Ea(16777216,null,0,1,null,p)),e.Ma(198,16384,null,0,c.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.Na(199,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.gc,u.D)),e.Ma(200,114688,[[42,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Ea(16777216,null,0,1,null,h)),e.Ma(202,16384,null,0,c.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.Na(203,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.gc,u.D)),e.Ma(204,114688,[[4,4]],0,b.M,[],{title:[0,"title"]},null),(l()(),e.Na(205,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),e.fb(-1,null,["Amexio Sandbox"])),(l()(),e.Na(207,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-horizontal-scrollable-tab?embed=1&file=app/tabs/scrollabletab/scrollabletab.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,a){var n=a.component;l(a,1,0,"true"),l(a,6,0),l(a,9,0),l(a,13,0),l(a,17,0,"Demo","true"),l(a,19,0,!0),l(a,23,0,"Tab 1",!0),l(a,25,0,"medium"),l(a,28,0,"Tab 2"),l(a,30,0,"medium"),l(a,33,0,"Tab 3"),l(a,35,0,"medium"),l(a,38,0,"Tab 4"),l(a,40,0,"medium"),l(a,43,0,"Tab 5"),l(a,45,0,"medium"),l(a,48,0,"Tab 6"),l(a,50,0,"medium"),l(a,53,0,"Tab 7"),l(a,55,0,"medium"),l(a,58,0,"Tab 8"),l(a,60,0,"medium"),l(a,63,0,"Tab 9"),l(a,65,0,"medium"),l(a,68,0,"Tab 10"),l(a,70,0,"medium"),l(a,73,0,"Tab 11"),l(a,75,0,"medium"),l(a,78,0,"Tab 12"),l(a,80,0,"medium"),l(a,83,0,"Tab 13"),l(a,85,0,"medium"),l(a,88,0,"Tab 14"),l(a,90,0,"medium"),l(a,93,0,"Tab 15"),l(a,95,0,"medium"),l(a,98,0,"Tab 16"),l(a,100,0,"medium"),l(a,103,0,"Tab 17"),l(a,105,0,"medium"),l(a,108,0,"Tab 18"),l(a,110,0,"medium"),l(a,113,0,"API Reference"),l(a,115,0,"Tab View Properties  <amexio-tab-view>","assets/apireference/layout/tab/horizontaltab.json","get","properties",!1,!1),l(a,118,0,"Name","name",!1,"string",15),l(a,122,0,"Version","version",!1,"string",20),l(a,126,0,"Type","type",!1,"string",10),l(a,130,0,"Default","default",!1,"string",10),l(a,134,0,"Description","description",!1,"string",45),l(a,139,0,"Tab Properties  <amexio-tab>","assets/apireference/layout/tab/horizontaltab.json","get","tabproperties",!1,!1),l(a,142,0,"Name","name",!1,"string",15),l(a,146,0,"Version","version",!1,"string",20),l(a,150,0,"Type","type",!1,"string",10),l(a,154,0,"Default","default",!1,"string",10),l(a,158,0,"Description","description",!1,"string",45),l(a,163,0,"Tab Events","assets/apireference/layout/tab/horizontaltab.json","get","events",!1,!1),l(a,166,0,"Name","name",!1,"string",40),l(a,170,0,"Description","description",!1,"string",60),l(a,175,0,"Tab Methods","assets/apireference/layout/tab/horizontaltab.json","get","methods",!1,!1),l(a,178,0,"Name","name",!1,"string",40),l(a,182,0,"Version","version",!1,"string",20),l(a,186,0,"Description","description",!1,"string",40),l(a,190,0,"Source"),l(a,193,0),l(a,196,0,"HTML",!0),l(a,198,0,n.htmlCode),l(a,200,0,"Type Script"),l(a,202,0,n.typeScriptCode),l(a,204,0,"Live")},null)}var y=e.Ja("scrollable-tab-demo",r,function(l){return e.hb(0,[(l()(),e.Na(0,0,null,null,1,"scrollable-tab-demo",[],null,null,null,x,m)),e.Ma(1,49152,null,0,r,[s.d],null,null)],null,null)},{},{},[]),M=n("gIcY"),f=n("t/Na"),g=n("ZYCi");n.d(a,"ScrollableTabDemoModuleNgFactory",function(){return T});var T=e.Ka(t,[],function(l){return e.Ua([e.Va(512,e.j,e.Z,[[8,[u.a,d.a,y]],[3,e.j],e.v]),e.Va(4608,c.n,c.m,[e.s,[2,c.w]]),e.Va(4608,M.r,M.r,[]),e.Va(4608,s.c,s.c,[]),e.Va(4608,s.g,s.b,[]),e.Va(5120,s.i,s.j,[]),e.Va(4608,s.h,s.h,[s.c,s.g,s.i]),e.Va(4608,s.f,s.a,[]),e.Va(5120,s.d,s.k,[s.h,s.f]),e.Va(4608,f.h,f.n,[c.c,e.z,f.l]),e.Va(4608,f.o,f.o,[f.h,f.m]),e.Va(5120,f.a,function(l){return[l]},[f.o]),e.Va(4608,f.k,f.k,[]),e.Va(6144,f.i,null,[f.k]),e.Va(4608,f.g,f.g,[f.i]),e.Va(6144,f.b,null,[f.g]),e.Va(4608,f.f,f.j,[f.b,e.p]),e.Va(4608,f.c,f.c,[f.f]),e.Va(4608,b.Ia,b.Ia,[f.c]),e.Va(4608,b.Sa,b.Sa,[e.z]),e.Va(4608,b.Za,b.Za,[]),e.Va(4608,b.lc,b.lc,[]),e.Va(1073742336,c.b,c.b,[]),e.Va(1073742336,M.o,M.o,[]),e.Va(1073742336,M.e,M.e,[]),e.Va(1073742336,s.e,s.e,[]),e.Va(1073742336,o.b,o.b,[]),e.Va(1073742336,f.e,f.e,[]),e.Va(1073742336,f.d,f.d,[]),e.Va(1073742336,b.w,b.w,[]),e.Va(1073742336,b.u,b.u,[]),e.Va(1073742336,b.z,b.z,[]),e.Va(1073742336,b.B,b.B,[]),e.Va(1073742336,b.E,b.E,[]),e.Va(1073742336,b.m,b.m,[]),e.Va(1073742336,b.S,b.S,[]),e.Va(1073742336,g.n,g.n,[[2,g.t],[2,g.m]]),e.Va(1073742336,t,t,[]),e.Va(256,f.l,"XSRF-TOKEN",[]),e.Va(256,f.m,"X-XSRF-TOKEN",[]),e.Va(1024,g.i,function(){return[[{path:"",component:r,pathMatch:"full"}]]},[])])})}}]);