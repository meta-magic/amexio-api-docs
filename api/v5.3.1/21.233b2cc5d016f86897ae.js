(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{RZgD:function(l,e,t){"use strict";t.r(e);var n=t("CcnG"),a=function(){},i=t("gTgE"),u=t("pMnS"),o=t("U89g"),d=t("d2mR"),c=t("O4vx"),r=t("Ip0R"),s=function(){function l(l){this.http=l,this.rightclickdata=[{text:"Back",icon:"fa fa-arrow-left",disabled:!0},{text:"Reload",icon:"fa fa-refresh",seperator:!1},{text:"Save",icon:"fa fa-save"}],this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,e,t=this;this.http.get("assets/data/code/layout/tab/contextmenutab/tab.html").subscribe(function(e){l=e.text()},function(l){},function(){t.htmlCode=l}),this.http.get("assets/data/code/layout/tab/contextmenutab/tab.text").subscribe(function(l){e=l.text()},function(l){},function(){t.typeScriptCode=e})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),b=t("sE5F"),m=n.Qa({encapsulation:2,styles:[],data:{}});function p(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,d.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.htmlCode,"html")},null)}function h(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,d.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.typeScriptCode,"typescript")},null)}function x(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,167,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,e,t){var a=!0;return"document:click"===e&&(a=!1!==n.cb(l,1).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==n.cb(l,1).onscroll()&&a),a},i.Yb,i.i)),n.Ra(1,5357568,null,3,c.h,[],{header:[0,"header"]},null),n.ib(603979776,1,{amexioHeader:1}),n.ib(603979776,2,{amexioBody:1}),n.ib(603979776,3,{amexioFooter:1}),(l()(),n.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.hc,i.r)),n.Ra(6,114688,[[1,4]],0,c.v,[],null,null),(l()(),n.kb(-1,0,[" Tab with Context Menu "])),(l()(),n.Sa(8,0,null,1,159,"amexio-body",[],null,null,null,i.Ub,i.e)),n.Ra(9,114688,[[2,4]],0,c.d,[],null,null),(l()(),n.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),n.kb(-1,null,["Tab component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs and with custom context menu (right click operation) and default context menu(close all and close others) "])),(l()(),n.Sa(12,16777216,null,0,155,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,e,t){var a=!0;return"document:click"===e&&(a=!1!==n.cb(l,13).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==n.cb(l,13).onscroll()&&a),a},i.sc,i.C)),n.Ra(13,5357568,null,2,c.L,[n.F,n.k,n.R],null,null),n.ib(603979776,4,{queryTabs:1}),n.ib(603979776,5,{queryAction:1}),(l()(),n.Sa(16,0,null,1,51,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.tc,i.D)),n.Ra(17,114688,[[4,4]],0,c.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),n.Sa(18,0,null,0,22,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,t){var a=!0;return"document:click"===e&&(a=!1!==n.cb(l,19).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==n.cb(l,19).onscroll()&&a),a},i.Yb,i.i)),n.Ra(19,5357568,null,3,c.h,[],{header:[0,"header"],footer:[1,"footer"],footeralign:[2,"footeralign"]},null),n.ib(603979776,6,{amexioHeader:1}),n.ib(603979776,7,{amexioBody:1}),n.ib(603979776,8,{amexioFooter:1}),(l()(),n.Sa(23,0,null,0,2,"amexio-header",[],null,null,null,i.hc,i.r)),n.Ra(24,114688,[[6,4]],0,c.v,[],null,null),(l()(),n.kb(-1,0,[" Tab layout with default context menu "])),(l()(),n.Sa(26,0,null,1,14,"amexio-body",[],null,null,null,i.Ub,i.e)),n.Ra(27,114688,[[7,4]],0,c.d,[],null,null),(l()(),n.Sa(28,16777216,null,0,12,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,e,t){var a=!0;return"document:click"===e&&(a=!1!==n.cb(l,29).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==n.cb(l,29).onscroll()&&a),a},i.sc,i.C)),n.Ra(29,5357568,null,2,c.L,[n.F,n.k,n.R],{tabPosition:[0,"tabPosition"],defaultContextMenu:[1,"defaultContextMenu"]},null),n.ib(603979776,9,{queryTabs:1}),n.ib(603979776,10,{queryAction:1}),(l()(),n.Sa(32,0,null,1,2,"amexio-tab",[["title","Person"]],null,null,null,i.tc,i.D)),n.Ra(33,114688,[[9,4]],0,c.M,[],{title:[0,"title"],active:[1,"active"],closable:[2,"closable"]},null),(l()(),n.kb(-1,0,[" Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "])),(l()(),n.Sa(35,0,null,1,2,"amexio-tab",[["title","Work"]],null,null,null,i.tc,i.D)),n.Ra(36,114688,[[9,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),n.kb(-1,0,[" Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. "])),(l()(),n.Sa(38,0,null,1,2,"amexio-tab",[["title","Education"]],null,null,null,i.tc,i.D)),n.Ra(39,114688,[[9,4]],0,c.M,[],{title:[0,"title"],closable:[1,"closable"]},null),(l()(),n.kb(-1,0,[" Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. "])),(l()(),n.Sa(41,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),n.Sa(42,0,null,0,25,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,t){var a=!0;return"document:click"===e&&(a=!1!==n.cb(l,43).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==n.cb(l,43).onscroll()&&a),a},i.Yb,i.i)),n.Ra(43,5357568,null,3,c.h,[],{header:[0,"header"],footer:[1,"footer"],footeralign:[2,"footeralign"]},null),n.ib(603979776,11,{amexioHeader:1}),n.ib(603979776,12,{amexioBody:1}),n.ib(603979776,13,{amexioFooter:1}),(l()(),n.Sa(47,0,null,0,2,"amexio-header",[],null,null,null,i.hc,i.r)),n.Ra(48,114688,[[11,4]],0,c.v,[],null,null),(l()(),n.kb(-1,0,[" Tab layout with custom context menu "])),(l()(),n.Sa(50,0,null,1,17,"amexio-body",[],null,null,null,i.Ub,i.e)),n.Ra(51,114688,[[12,4]],0,c.d,[],null,null),(l()(),n.Sa(52,16777216,null,0,15,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,e,t){var a=!0;return"document:click"===e&&(a=!1!==n.cb(l,53).onWindowClick()&&a),"document:scroll"===e&&(a=!1!==n.cb(l,53).onscroll()&&a),a},i.sc,i.C)),n.Ra(53,5357568,null,2,c.L,[n.F,n.k,n.R],{contextmenu:[0,"contextmenu"]},null),n.ib(603979776,14,{queryTabs:1}),n.ib(603979776,15,{queryAction:1}),(l()(),n.Sa(56,0,null,1,2,"amexio-tab",[["title","Person"]],null,null,null,i.tc,i.D)),n.Ra(57,114688,[[14,4]],0,c.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),n.kb(-1,0,[" Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "])),(l()(),n.Sa(59,0,null,1,2,"amexio-tab",[["title","Work"]],null,null,null,i.tc,i.D)),n.Ra(60,114688,[[14,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),n.kb(-1,0,[" Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. "])),(l()(),n.Sa(62,0,null,1,2,"amexio-tab",[["title","Education"]],null,null,null,i.tc,i.D)),n.Ra(63,114688,[[14,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),n.kb(-1,0,[" Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. "])),(l()(),n.Sa(65,0,null,1,2,"amexio-tab",[["title","Hobbies"]],null,null,null,i.tc,i.D)),n.Ra(66,114688,[[14,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),n.kb(-1,0,[" Hobbies Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. "])),(l()(),n.Sa(68,0,null,1,80,"amexio-tab",[["title","API Reference"]],null,null,null,i.tc,i.D)),n.Ra(69,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),n.Sa(70,0,null,0,22,"amexio-datagrid",[["title","Tab View Properties <amexio-tab-view>"]],null,[["document","scroll"],["document","click"]],function(l,e,t){var a=!0;return"document:scroll"===e&&(a=!1!==n.cb(l,71).onscroll()&&a),"document:click"===e&&(a=!1!==n.cb(l,71).onclick()&&a),a},i.Kd,i.ub)),n.Ra(71,1163264,null,1,c.dc,[n.l,c.Ka,n.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,16,{columnRef:1}),(l()(),n.Sa(73,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),n.Ra(74,49152,[[16,4]],2,c.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,17,{headerTemplate:0}),n.ib(335544320,18,{bodyTemplate:0}),(l()(),n.Sa(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),n.Ra(78,49152,[[16,4]],2,c.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,19,{headerTemplate:0}),n.ib(335544320,20,{bodyTemplate:0}),(l()(),n.Sa(81,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),n.Ra(82,49152,[[16,4]],2,c.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,21,{headerTemplate:0}),n.ib(335544320,22,{bodyTemplate:0}),(l()(),n.Sa(85,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),n.Ra(86,49152,[[16,4]],2,c.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,23,{headerTemplate:0}),n.ib(335544320,24,{bodyTemplate:0}),(l()(),n.Sa(89,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),n.Ra(90,49152,[[16,4]],2,c.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,25,{headerTemplate:0}),n.ib(335544320,26,{bodyTemplate:0}),(l()(),n.Sa(93,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),n.Sa(94,0,null,0,22,"amexio-datagrid",[["title","Tab Properties <amexio-tab>"]],null,[["document","scroll"],["document","click"]],function(l,e,t){var a=!0;return"document:scroll"===e&&(a=!1!==n.cb(l,95).onscroll()&&a),"document:click"===e&&(a=!1!==n.cb(l,95).onclick()&&a),a},i.Kd,i.ub)),n.Ra(95,1163264,null,1,c.dc,[n.l,c.Ka,n.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,27,{columnRef:1}),(l()(),n.Sa(97,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),n.Ra(98,49152,[[27,4]],2,c.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,28,{headerTemplate:0}),n.ib(335544320,29,{bodyTemplate:0}),(l()(),n.Sa(101,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),n.Ra(102,49152,[[27,4]],2,c.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,30,{headerTemplate:0}),n.ib(335544320,31,{bodyTemplate:0}),(l()(),n.Sa(105,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),n.Ra(106,49152,[[27,4]],2,c.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,32,{headerTemplate:0}),n.ib(335544320,33,{bodyTemplate:0}),(l()(),n.Sa(109,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),n.Ra(110,49152,[[27,4]],2,c.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,34,{headerTemplate:0}),n.ib(335544320,35,{bodyTemplate:0}),(l()(),n.Sa(113,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),n.Ra(114,49152,[[27,4]],2,c.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,36,{headerTemplate:0}),n.ib(335544320,37,{bodyTemplate:0}),(l()(),n.Sa(117,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),n.Sa(118,0,null,0,14,"amexio-datagrid",[["title","Tab Events"]],null,[["document","scroll"],["document","click"]],function(l,e,t){var a=!0;return"document:scroll"===e&&(a=!1!==n.cb(l,119).onscroll()&&a),"document:click"===e&&(a=!1!==n.cb(l,119).onclick()&&a),a},i.Kd,i.ub)),n.Ra(119,1163264,null,1,c.dc,[n.l,c.Ka,n.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,38,{columnRef:1}),(l()(),n.Sa(121,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),n.Ra(122,49152,[[38,4]],2,c.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,39,{headerTemplate:0}),n.ib(335544320,40,{bodyTemplate:0}),(l()(),n.Sa(125,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),n.Ra(126,49152,[[38,4]],2,c.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,41,{headerTemplate:0}),n.ib(335544320,42,{bodyTemplate:0}),(l()(),n.Sa(129,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),n.Ra(130,49152,[[38,4]],2,c.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,43,{headerTemplate:0}),n.ib(335544320,44,{bodyTemplate:0}),(l()(),n.Sa(133,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),n.Sa(134,0,null,0,14,"amexio-datagrid",[["title","Tab Methods"]],null,[["document","scroll"],["document","click"]],function(l,e,t){var a=!0;return"document:scroll"===e&&(a=!1!==n.cb(l,135).onscroll()&&a),"document:click"===e&&(a=!1!==n.cb(l,135).onclick()&&a),a},i.Kd,i.ub)),n.Ra(135,1163264,null,1,c.dc,[n.l,c.Ka,n.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,45,{columnRef:1}),(l()(),n.Sa(137,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),n.Ra(138,49152,[[45,4]],2,c.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,46,{headerTemplate:0}),n.ib(335544320,47,{bodyTemplate:0}),(l()(),n.Sa(141,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),n.Ra(142,49152,[[45,4]],2,c.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,48,{headerTemplate:0}),n.ib(335544320,49,{bodyTemplate:0}),(l()(),n.Sa(145,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),n.Ra(146,49152,[[45,4]],2,c.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,50,{headerTemplate:0}),n.ib(335544320,51,{bodyTemplate:0}),(l()(),n.Sa(149,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.tc,i.D)),n.Ra(150,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),n.Sa(151,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),n.Sa(152,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.vc,i.F)),n.Ra(153,5357568,null,1,c.Q,[n.F],null,null),n.ib(603979776,52,{queryTabs:1}),(l()(),n.Sa(155,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.tc,i.D)),n.Ra(156,114688,[[52,4]],0,c.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),n.Ja(16777216,null,0,1,null,p)),n.Ra(158,16384,null,0,r.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(l()(),n.Sa(159,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.tc,i.D)),n.Ra(160,114688,[[52,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),n.Ja(16777216,null,0,1,null,h)),n.Ra(162,16384,null,0,r.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(l()(),n.Sa(163,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.tc,i.D)),n.Ra(164,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),n.Sa(165,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),n.kb(-1,null,["Amexio Sandbox"])),(l()(),n.Sa(167,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-tab-contextmenu-demo?embed=1&file=src/app/contextualmenu/tab/tab.demo.component.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,e){var t=e.component;l(e,1,0,"true"),l(e,6,0),l(e,9,0),l(e,13,0),l(e,17,0,"Demo","true"),l(e,19,0,!0,!1,"right"),l(e,24,0),l(e,27,0),l(e,29,0,"top",!0),l(e,33,0,"Person",!0,!0),l(e,36,0,"Work"),l(e,39,0,"Education",!0),l(e,43,0,!0,!1,"right"),l(e,48,0),l(e,51,0),l(e,53,0,t.rightclickdata),l(e,57,0,"Person",!0),l(e,60,0,"Work"),l(e,63,0,"Education"),l(e,66,0,"Hobbies"),l(e,69,0,"API Reference"),l(e,71,0,"Tab View Properties <amexio-tab-view>","assets/apireference/layout/tab/contextmenu-tab/contextmenutab.json","get","properties",!1,!1),l(e,74,0,"Name","name",!1,"string",15),l(e,78,0,"Version","version",!1,"string",10),l(e,82,0,"Type","type",!1,"string",10),l(e,86,0,"Default","default",!1,"string",10),l(e,90,0,"Description","description",!1,"string",65),l(e,95,0,"Tab Properties <amexio-tab>","assets/apireference/layout/tab/contextmenu-tab/contextmenutab.json","get","tabproperties",!1,!1),l(e,98,0,"Name","name",!1,"string",15),l(e,102,0,"Version","version",!1,"string",10),l(e,106,0,"Type","type",!1,"string",10),l(e,110,0,"Default","default",!1,"string",10),l(e,114,0,"Description","description",!1,"string",65),l(e,119,0,"Tab Events","assets/apireference/layout/tab/contextmenu-tab/contextmenutab.json","get","events",!1,!1),l(e,122,0,"Name","name",!1,"string",20),l(e,126,0,"Version","version",!1,"string",10),l(e,130,0,"Description","description",!1,"string",70),l(e,135,0,"Tab Methods","assets/apireference/layout/tab/horizontaltab.json","get","methods",!1,!1),l(e,138,0,"Name","name",!1,"string",40),l(e,142,0,"Version","version",!1,"string",20),l(e,146,0,"Description","description",!1,"string",40),l(e,150,0,"Source"),l(e,153,0),l(e,156,0,"HTML",!0),l(e,158,0,t.htmlCode),l(e,160,0,"Type Script"),l(e,162,0,t.typeScriptCode),l(e,164,0,"Live")},null)}var y=n.Oa("context-menu-tab-demo",s,function(l){return n.mb(0,[(l()(),n.Sa(0,0,null,null,1,"context-menu-tab-demo",[],null,null,null,x,m)),n.Ra(1,49152,null,0,s,[b.d],null,null)],null,null)},{},{},[]),f=t("gIcY"),g=t("t/Na"),S=t("ZYCi");t.d(e,"ContextMenuTabDemoModuleNgFactory",function(){return v});var v=n.Pa(a,[],function(l){return n.Za([n.ab(512,n.k,n.Ea,[[8,[i.a,u.a,y]],[3,n.k],n.z]),n.ab(4608,r.o,r.n,[n.w,[2,r.x]]),n.ab(4608,f.v,f.v,[]),n.ab(4608,b.c,b.c,[]),n.ab(4608,b.g,b.b,[]),n.ab(5120,b.i,b.j,[]),n.ab(4608,b.h,b.h,[b.c,b.g,b.i]),n.ab(4608,b.f,b.a,[]),n.ab(5120,b.d,b.k,[b.h,b.f]),n.ab(4608,g.i,g.o,[r.d,n.D,g.m]),n.ab(4608,g.p,g.p,[g.i,g.n]),n.ab(5120,g.a,function(l){return[l]},[g.p]),n.ab(4608,g.l,g.l,[]),n.ab(6144,g.j,null,[g.l]),n.ab(4608,g.h,g.h,[g.j]),n.ab(6144,g.b,null,[g.h]),n.ab(4608,g.f,g.k,[g.b,n.s]),n.ab(4608,g.c,g.c,[g.f]),n.ab(4608,c.Ka,c.Ka,[g.c]),n.ab(4608,c.Ua,c.Ua,[n.D]),n.ab(4608,c.bb,c.bb,[]),n.ab(4608,c.tb,c.tb,[]),n.ab(1073742336,r.c,r.c,[]),n.ab(1073742336,f.s,f.s,[]),n.ab(1073742336,f.e,f.e,[]),n.ab(1073742336,b.e,b.e,[]),n.ab(1073742336,d.b,d.b,[]),n.ab(1073742336,g.e,g.e,[]),n.ab(1073742336,g.d,g.d,[]),n.ab(1073742336,c.w,c.w,[]),n.ab(1073742336,c.u,c.u,[]),n.ab(1073742336,c.z,c.z,[]),n.ab(1073742336,c.B,c.B,[]),n.ab(1073742336,c.E,c.E,[]),n.ab(1073742336,c.m,c.m,[]),n.ab(1073742336,c.S,c.S,[]),n.ab(1073742336,S.n,S.n,[[2,S.t],[2,S.m]]),n.ab(1073742336,a,a,[]),n.ab(256,g.m,"XSRF-TOKEN",[]),n.ab(256,g.n,"X-XSRF-TOKEN",[]),n.ab(1024,S.i,function(){return[[{path:"",component:s,pathMatch:"full"}]]},[])])})}}]);