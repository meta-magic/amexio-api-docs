(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{MJTz:function(e,l,n){"use strict";n.r(l);var t=n("CcnG"),a=function(){},i=n("gTgE"),u=n("pMnS"),r=n("gIcY"),o=n("O4vx"),s=n("U89g"),d=n("d2mR"),c=n("Ip0R"),p=function(){function e(e){this.http=e,this.topMenuData=JSON.parse('[{\n      "text": "About Us",\n      "submenus": [{\n        "text": "Amexio Canvas",\n        "link": "https://amexio.tech/amexio-canvas"\n      }, {\n        "text": "Amexio Themes",\n        "link": "https://amexio.tech/amexio-themes"\n      }]\n    }]\n'),this.getHtmlAndTypeScriptCode()}return e.prototype.onClick=function(e){},e.prototype.externalLink=function(e){},e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,n,t=this;this.http.get("assets/data/code/navigation/navbar/navigation.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){t.htmlCode=e}),this.http.get("assets/data/code/navigation/navbar/navigation.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){t.typeScriptCode=l}),this.http.get("assets/data/componentdata/navbar.json",{responseType:"text"}).subscribe(function(e){n=e},function(e){},function(){t.dataSource=n}),this.dataSource=""},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),m=n("t/Na"),g=t.Qa({encapsulation:2,styles:[],data:{}});function b(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,"amexio-nav-item",[["position-right",""]],null,[[null,"onNavItemClick"]],function(e,l,n){var t=!0;return"onNavItemClick"===l&&(t=!1!==e.component.externalLink(n)&&t),t},i.Bd,i.lb)),t.hb(5120,null,r.h,function(e){return[e]},[o.Ob]),t.Ra(2,5357568,[[9,4]],0,o.Ob,[t.l],{type:[0,"type"],title:[1,"title"],data:[2,"data"]},{onNavItemClick:"onNavItemClick"})],function(e,l){e(l,2,0,"menu",l.context.$implicit.text,l.context.$implicit.submenus)},null)}function h(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,s.b,s.a)),t.Ra(2,4243456,null,0,d.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function f(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,s.b,s.a)),t.Ra(2,4243456,null,0,d.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function y(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,159,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,n){var a=!0;return"document:click"===l&&(a=!1!==t.cb(e,1).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==t.cb(e,1).onscroll()&&a),a},i.Yb,i.i)),t.Ra(1,5357568,null,3,o.h,[],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(e()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.hc,i.r)),t.Ra(6,114688,[[1,4]],0,o.v,[],null,null),(e()(),t.kb(-1,0,[" Nav Bar "])),(e()(),t.Sa(8,0,null,1,151,"amexio-body",[],null,null,null,i.Ub,i.e)),t.Ra(9,114688,[[2,4]],0,o.d,[],null,null),(e()(),t.Sa(10,0,null,0,3,"p",[],null,null,null,null,null)),(e()(),t.kb(-1,null,[" The Nav Bar Component is a familiar top navigation pattern for users. Nav bar has Logo/Title left align, than link, text field, button and menus on right side. v4.1 Nav bar is not backward compatible of v4.0, for v4.0 refer "])),(e()(),t.Sa(12,0,null,null,1,"a",[["href","https://amexio.org/api/v4.1/#/navbar-demo"]],null,null,null,null,null)),(e()(),t.kb(-1,null,["link"])),(e()(),t.Sa(14,16777216,null,0,145,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,l,n){var a=!0;return"document:click"===l&&(a=!1!==t.cb(e,15).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==t.cb(e,15).onscroll()&&a),a},i.sc,i.C)),t.Ra(15,5357568,null,2,o.L,[t.F,t.k,t.R],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(e()(),t.Sa(18,0,null,1,58,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.tc,i.D)),t.Ra(19,114688,[[4,4]],0,o.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Sa(20,0,null,0,56,"amexio-row",[],null,null,null,i.oc,i.y)),t.Ra(21,1163264,null,0,o.H,[],null,null),(e()(),t.Sa(22,0,null,0,54,"amexio-column",[],[[1,"class",0]],null,null,i.ac,i.k)),t.Ra(23,114688,null,0,o.k,[],{size:[0,"size"]},null),(e()(),t.Sa(24,0,null,0,52,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,n){var a=!0;return"document:click"===l&&(a=!1!==t.cb(e,25).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==t.cb(e,25).onscroll()&&a),a},i.Yb,i.i)),t.Ra(25,5357568,null,3,o.h,[],{header:[0,"header"]},null),t.ib(603979776,6,{amexioHeader:1}),t.ib(603979776,7,{amexioBody:1}),t.ib(603979776,8,{amexioFooter:1}),(e()(),t.Sa(29,0,null,0,2,"amexio-header",[],null,null,null,i.hc,i.r)),t.Ra(30,114688,[[6,4]],0,o.v,[],null,null),(e()(),t.kb(-1,0,[" Nav Bar Demo "])),(e()(),t.Sa(32,0,null,1,44,"amexio-body",[],null,null,null,i.Ub,i.e)),t.Ra(33,114688,[[7,4]],0,o.d,[],null,null),(e()(),t.Sa(34,0,null,0,42,"div",[["class","navbardemo"]],null,null,null,null,null)),(e()(),t.Sa(35,0,null,null,41,"amexio-nav",[],null,null,null,i.jc,i.t)),t.Ra(36,5357568,null,1,o.A,[o.Ua],{title:[0,"title"],logo:[1,"logo"],sidenavspace:[2,"sidenavspace"]},null),t.ib(603979776,9,{navitems:1}),(e()(),t.Sa(38,0,null,2,2,"amexio-nav-item",[["position-right",""],["style","cursor: pointer;"]],null,[[null,"onNavItemClick"]],function(e,l,n){var t=!0;return"onNavItemClick"===l&&(t=!1!==e.component.onClick("http://amexio.tech")&&t),t},i.Bd,i.lb)),t.hb(5120,null,r.h,function(e){return[e]},[o.Ob]),t.Ra(40,5357568,[[9,4]],0,o.Ob,[t.l],{type:[0,"type"],icon:[1,"icon"]},{onNavItemClick:"onNavItemClick"}),(e()(),t.Sa(41,0,null,2,2,"amexio-nav-item",[["position-right",""]],null,null,null,i.Bd,i.lb)),t.hb(5120,null,r.h,function(e){return[e]},[o.Ob]),t.Ra(43,5357568,[[9,4]],0,o.Ob,[t.l],{type:[0,"type"],title:[1,"title"]},null),(e()(),t.Sa(44,0,null,2,30,"amexio-nav-item",[["position-right",""]],null,null,null,i.Bd,i.lb)),t.hb(5120,null,r.h,function(e){return[e]},[o.Ob]),t.Ra(46,5357568,[[9,4]],0,o.Ob,[t.l],{type:[0,"type"],title:[1,"title"]},null),(e()(),t.Sa(47,0,null,0,4,"amexio-box",[["background-color","purple"],["padding","true"]],null,null,null,i.Xb,i.h)),t.Ra(48,114688,null,0,o.g,[],{bgColor:[0,"bgColor"],padding:[1,"padding"]},null),(e()(),t.Sa(49,0,null,0,2,"amexio-label",[["size","small-bold"]],null,null,null,i.md,i.Wa)),t.Ra(50,114688,null,0,o.xb,[],{styleClass:[0,"styleClass"]},null),(e()(),t.kb(-1,0,["This account is managed by metamagic.in. "])),(e()(),t.Sa(52,0,null,0,14,"amexio-row",[],null,null,null,i.oc,i.y)),t.Ra(53,1163264,null,0,o.H,[],null,null),(e()(),t.Sa(54,0,null,0,3,"amexio-column",[["size","5"]],[[1,"class",0]],null,null,i.ac,i.k)),t.Ra(55,114688,null,0,o.k,[],{size:[0,"size"]},null),(e()(),t.Sa(56,0,null,0,1,"amexio-image",[["path","assets/images/profile/mark.jpg"]],null,null,null,i.Ad,i.kb)),t.Ra(57,114688,null,0,o.Nb,[],{path:[0,"path"],cclass:[1,"cclass"],width:[2,"width"],height:[3,"height"]},null),(e()(),t.Sa(58,0,null,0,8,"amexio-column",[["size","7"]],[[1,"class",0]],null,null,i.ac,i.k)),t.Ra(59,114688,null,0,o.k,[],{size:[0,"size"]},null),(e()(),t.Sa(60,0,null,0,2,"amexio-label",[],null,null,null,i.md,i.Wa)),t.Ra(61,114688,null,0,o.xb,[],null,null),(e()(),t.kb(-1,0,["John deo "])),(e()(),t.Sa(63,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Sa(64,0,null,0,2,"amexio-label",[],null,null,null,i.md,i.Wa)),t.Ra(65,114688,null,0,o.xb,[],null,null),(e()(),t.kb(-1,0,["john@metamagic.in"])),(e()(),t.Sa(67,0,null,0,1,"amexio-drop-down-menu-item",[],null,null,null,i.pd,i.Za)),t.Ra(68,114688,null,0,o.Ab,[],{label:[0,"label"],icon:[1,"icon"]},null),(e()(),t.Sa(69,0,null,0,1,"amexio-drop-down-menu-item",[],null,null,null,i.pd,i.Za)),t.Ra(70,114688,null,0,o.Ab,[],{label:[0,"label"],icon:[1,"icon"],separator:[2,"separator"]},null),(e()(),t.Sa(71,0,null,0,3,"amexio-drop-down-menu-item",[],null,null,null,i.pd,i.Za)),t.Ra(72,114688,null,0,o.Ab,[],null,null),(e()(),t.Sa(73,0,null,0,1,"amexio-button",[],null,null,null,i.ce,i.Mb)),t.Ra(74,114688,null,0,o.Bc,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},null),(e()(),t.Ja(16777216,null,2,1,null,b)),t.Ra(76,278528,null,0,c.l,[t.R,t.O,t.u],{ngForOf:[0,"ngForOf"]},null),(e()(),t.Sa(77,0,null,1,64,"amexio-tab",[["title","API Reference"]],null,null,null,i.tc,i.D)),t.Ra(78,114688,[[4,4]],0,o.M,[],{title:[0,"title"]},null),(e()(),t.Sa(79,0,null,0,18,"amexio-datagrid",[["title","Properties<amexio-nav>"]],null,[["document","scroll"],["document","click"]],function(e,l,n){var a=!0;return"document:scroll"===l&&(a=!1!==t.cb(e,80).onscroll()&&a),"document:click"===l&&(a=!1!==t.cb(e,80).onclick()&&a),a},i.Kd,i.ub)),t.Ra(80,1163264,null,1,o.dc,[t.l,o.Ka,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,10,{columnRef:1}),(e()(),t.Sa(82,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(83,49152,[[10,4]],2,o.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,11,{headerTemplate:0}),t.ib(335544320,12,{bodyTemplate:0}),(e()(),t.Sa(86,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(87,49152,[[10,4]],2,o.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,13,{headerTemplate:0}),t.ib(335544320,14,{bodyTemplate:0}),(e()(),t.Sa(90,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(91,49152,[[10,4]],2,o.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,15,{headerTemplate:0}),t.ib(335544320,16,{bodyTemplate:0}),(e()(),t.Sa(94,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(95,49152,[[10,4]],2,o.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,17,{headerTemplate:0}),t.ib(335544320,18,{bodyTemplate:0}),(e()(),t.Sa(98,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Sa(99,0,null,0,10,"amexio-datagrid",[["title","Events<amexio-nav>"]],null,[["document","scroll"],["document","click"]],function(e,l,n){var a=!0;return"document:scroll"===l&&(a=!1!==t.cb(e,100).onscroll()&&a),"document:click"===l&&(a=!1!==t.cb(e,100).onclick()&&a),a},i.Kd,i.ub)),t.Ra(100,1163264,null,1,o.dc,[t.l,o.Ka,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),t.ib(603979776,19,{columnRef:1}),(e()(),t.Sa(102,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(103,49152,[[19,4]],2,o.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,20,{headerTemplate:0}),t.ib(335544320,21,{bodyTemplate:0}),(e()(),t.Sa(106,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(107,49152,[[19,4]],2,o.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,22,{headerTemplate:0}),t.ib(335544320,23,{bodyTemplate:0}),(e()(),t.Sa(110,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Sa(111,0,null,0,18,"amexio-datagrid",[["title","Properties<amexio-nav-item>"]],null,[["document","scroll"],["document","click"]],function(e,l,n){var a=!0;return"document:scroll"===l&&(a=!1!==t.cb(e,112).onscroll()&&a),"document:click"===l&&(a=!1!==t.cb(e,112).onclick()&&a),a},i.Kd,i.ub)),t.Ra(112,1163264,null,1,o.dc,[t.l,o.Ka,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,24,{columnRef:1}),(e()(),t.Sa(114,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(115,49152,[[24,4]],2,o.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,25,{headerTemplate:0}),t.ib(335544320,26,{bodyTemplate:0}),(e()(),t.Sa(118,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(119,49152,[[24,4]],2,o.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,27,{headerTemplate:0}),t.ib(335544320,28,{bodyTemplate:0}),(e()(),t.Sa(122,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(123,49152,[[24,4]],2,o.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,29,{headerTemplate:0}),t.ib(335544320,30,{bodyTemplate:0}),(e()(),t.Sa(126,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(127,49152,[[24,4]],2,o.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,31,{headerTemplate:0}),t.ib(335544320,32,{bodyTemplate:0}),(e()(),t.Sa(130,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Sa(131,0,null,0,10,"amexio-datagrid",[["title","Events<amexio-nav-item>"]],null,[["document","scroll"],["document","click"]],function(e,l,n){var a=!0;return"document:scroll"===l&&(a=!1!==t.cb(e,132).onscroll()&&a),"document:click"===l&&(a=!1!==t.cb(e,132).onclick()&&a),a},i.Kd,i.ub)),t.Ra(132,1163264,null,1,o.dc,[t.l,o.Ka,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),t.ib(603979776,33,{columnRef:1}),(e()(),t.Sa(134,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(135,49152,[[33,4]],2,o.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,34,{headerTemplate:0}),t.ib(335544320,35,{bodyTemplate:0}),(e()(),t.Sa(138,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(139,49152,[[33,4]],2,o.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,36,{headerTemplate:0}),t.ib(335544320,37,{bodyTemplate:0}),(e()(),t.Sa(142,0,null,1,12,"amexio-tab",[["title","Source"]],null,null,null,i.tc,i.D)),t.Ra(143,114688,[[4,4]],0,o.M,[],{title:[0,"title"]},null),(e()(),t.Sa(144,0,null,0,10,"amexio-vertical-tab-view",[],null,null,null,i.vc,i.F)),t.Ra(145,5357568,null,1,o.Q,[t.F],null,null),t.ib(603979776,38,{queryTabs:1}),(e()(),t.Sa(147,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.tc,i.D)),t.Ra(148,114688,[[38,4]],0,o.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Ja(16777216,null,0,1,null,h)),t.Ra(150,16384,null,0,c.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(151,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.tc,i.D)),t.Ra(152,114688,[[38,4]],0,o.M,[],{title:[0,"title"]},null),(e()(),t.Ja(16777216,null,0,1,null,f)),t.Ra(154,16384,null,0,c.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(155,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.tc,i.D)),t.Ra(156,114688,[[4,4]],0,o.M,[],{title:[0,"title"]},null),(e()(),t.Sa(157,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),t.kb(-1,null,["Amexio Sandbox"])),(e()(),t.Sa(159,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v41-navbar?embed=1&file=app/forms/navbar/navbar.demo.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,l){var n=l.component;e(l,1,0,"true"),e(l,6,0),e(l,9,0),e(l,15,0),e(l,19,0,"Demo","true"),e(l,21,0),e(l,23,0,12),e(l,25,0,"true"),e(l,30,0),e(l,33,0),e(l,36,0,"Amexio","assets/images/logos/amexio-logo.png",!1),e(l,40,0,"button","fa fa-bell fa-fw fa-lg"),e(l,43,0,"textfield","Enter your name"),e(l,46,0,"menucontainer","Settings"),e(l,48,0,"purple","true"),e(l,50,0,"small-bold"),e(l,53,0),e(l,55,0,"5"),e(l,57,0,"assets/images/profile/mark.jpg","image-round","95.75px","95.75px"),e(l,59,0,"7"),e(l,61,0),e(l,65,0),e(l,68,0,"Settings","fa fa-cog"),e(l,70,0,"Help Center","fa fa-question-circle",!0),e(l,72,0),e(l,74,0,"My Account","theme-color","My Account"),e(l,76,0,n.topMenuData),e(l,78,0,"API Reference"),e(l,80,0,"Properties<amexio-nav>","assets/apireference/navigation/navbar.json","get","properties",!1,!1),e(l,83,0,"Name","name",!1,"string",15),e(l,87,0,"Type","type",!1,"string",10),e(l,91,0,"Default","default",!1,"string",10),e(l,95,0,"Description","description",!1,"string",65),e(l,100,0,"Events<amexio-nav>","assets/apireference/navigation/navbar.json","get","navevents",!1),e(l,103,0,"Name","name",!1,"string",20),e(l,107,0,"Description","description",!1,"string",80),e(l,112,0,"Properties<amexio-nav-item>","assets/apireference/navigation/navbar.json","get","propertiesitem",!1,!1),e(l,115,0,"Name","name",!1,"string",20),e(l,119,0,"Type","type",!1,"string",10),e(l,123,0,"Default","default",!1,"string",10),e(l,127,0,"Description","description",!1,"string",80),e(l,132,0,"Events<amexio-nav-item>","assets/apireference/navigation/navbar.json","get","events",!1),e(l,135,0,"Name","name",!1,"string",20),e(l,139,0,"Description","description",!1,"string",80),e(l,143,0,"Source"),e(l,145,0),e(l,148,0,"HTML",!0),e(l,150,0,n.htmlCode),e(l,152,0,"Type Script"),e(l,154,0,n.typeScriptCode),e(l,156,0,"Live")},function(e,l){e(l,22,0,t.cb(l,23).role),e(l,54,0,t.cb(l,55).role),e(l,58,0,t.cb(l,59).role)})}var v=t.Oa("navbar-demo",p,function(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,1,"navbar-demo",[],null,null,null,y,g)),t.Ra(1,49152,null,0,p,[m.c],null,null)],null,null)},{},{},[]),x=n("ZYCi");n.d(l,"NavBarDemoModuleNgFactory",function(){return k});var k=t.Pa(a,[],function(e){return t.Za([t.ab(512,t.k,t.Ea,[[8,[i.a,u.a,v]],[3,t.k],t.z]),t.ab(4608,c.o,c.n,[t.w,[2,c.x]]),t.ab(4608,r.v,r.v,[]),t.ab(4608,m.i,m.o,[c.d,t.D,m.m]),t.ab(4608,m.p,m.p,[m.i,m.n]),t.ab(5120,m.a,function(e){return[e]},[m.p]),t.ab(4608,m.l,m.l,[]),t.ab(6144,m.j,null,[m.l]),t.ab(4608,m.h,m.h,[m.j]),t.ab(6144,m.b,null,[m.h]),t.ab(4608,m.f,m.k,[m.b,t.s]),t.ab(4608,m.c,m.c,[m.f]),t.ab(4608,o.Ka,o.Ka,[m.c]),t.ab(4608,o.Ua,o.Ua,[t.D]),t.ab(4608,o.bb,o.bb,[]),t.ab(4608,o.tb,o.tb,[]),t.ab(1073742336,c.c,c.c,[]),t.ab(1073742336,r.s,r.s,[]),t.ab(1073742336,r.e,r.e,[]),t.ab(1073742336,m.e,m.e,[]),t.ab(1073742336,m.d,m.d,[]),t.ab(1073742336,d.b,d.b,[]),t.ab(1073742336,o.w,o.w,[]),t.ab(1073742336,o.u,o.u,[]),t.ab(1073742336,o.z,o.z,[]),t.ab(1073742336,o.B,o.B,[]),t.ab(1073742336,o.E,o.E,[]),t.ab(1073742336,o.m,o.m,[]),t.ab(1073742336,o.S,o.S,[]),t.ab(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),t.ab(1073742336,a,a,[]),t.ab(256,m.m,"XSRF-TOKEN",[]),t.ab(256,m.n,"X-XSRF-TOKEN",[]),t.ab(1024,x.i,function(){return[[{path:"",component:p,pathMatch:"full"}]]},[])])})},U89g:function(e,l,n){"use strict";n.d(l,"a",function(){return a}),n.d(l,"b",function(){return i});var t=n("CcnG"),a=(n("d2mR"),n("Ip0R"),t.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return t.mb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,l,n){"use strict";n.d(l,"a",function(){return t}),n.d(l,"b",function(){return a}),n("wZee"),n("XIHC");var t=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,l){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},t=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,t=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var n=t.util.type(e);switch(l=l||{},n){case"Object":if(l[t.util.objId(e)])return l[t.util.objId(e)];var a={};for(var i in l[t.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=t.util.clone(e[i],l));return a;case"Array":return l[t.util.objId(e)]?l[t.util.objId(e)]:(a=[],l[t.util.objId(e)]=a,e.forEach(function(e,n){a[n]=t.util.clone(e,l)}),a)}return e}},languages:{extend:function(e,l){var n=t.util.clone(t.languages[e]);for(var a in l)n[a]=l[a];return n},insertBefore:function(e,l,n,a){var i=(a=a||t.languages)[e];if(2==arguments.length){for(var u in n=arguments[1])n.hasOwnProperty(u)&&(i[u]=n[u]);return i}var r={};for(var o in i)if(i.hasOwnProperty(o)){if(o==l)for(var u in n)n.hasOwnProperty(u)&&(r[u]=n[u]);r[o]=i[o]}return t.languages.DFS(t.languages,function(l,n){n===a[e]&&l!=e&&(this[l]=r)}),a[e]=r},DFS:function(e,l,n,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(l.call(e,i,e[i],n||i),"Object"!==t.util.type(e[i])||a[t.util.objId(e[i])]?"Array"!==t.util.type(e[i])||a[t.util.objId(e[i])]||(a[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],l,i,a)):(a[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],l,null,a)))}},plugins:{},highlightAll:function(e,l){t.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",a);for(var i,u=a.elements||e.querySelectorAll(a.selector),r=0;i=u[r++];)t.highlightElement(i,!0===l,a.callback)},highlightElement:function(l,a,i){for(var u,r,o=l;o&&!e.test(o.className);)o=o.parentNode;o&&(u=(o.className.match(e)||[,""])[1].toLowerCase(),r=t.languages[u]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+u,l.parentNode&&/pre/i.test((o=l.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+u);var s={element:l,language:u,grammar:r,code:l.textContent};if(t.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(t.hooks.run("before-highlight",s),s.element.textContent=s.code,t.hooks.run("after-highlight",s)),void t.hooks.run("complete",s);if(t.hooks.run("before-highlight",s),a&&n.Worker){var d=new Worker(t.filename);d.onmessage=function(e){s.highlightedCode=e.data,t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},d.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=t.highlight(s.code,s.grammar,s.language),t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(l),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},highlight:function(e,l,n){var i={code:e,grammar:l,language:n};return t.hooks.run("before-tokenize",i),i.tokens=t.tokenize(i.code,i.grammar),t.hooks.run("after-tokenize",i),a.stringify(t.util.encode(i.tokens),i.language)},matchGrammar:function(e,l,n,a,i,u,r){var o=t.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==r)return;var d=n[s];d="Array"===t.util.type(d)?d:[d];for(var c=0;c<d.length;++c){var p=d[c],m=p.inside,g=!!p.lookbehind,b=!!p.greedy,h=0,f=p.alias;if(b&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var v=a,x=i;v<l.length;x+=l[v].length,++v){var k=l[v];if(l.length>e.length)return;if(!(k instanceof o)){if(b&&v!=l.length-1){if(p.lastIndex=x,!(F=p.exec(e)))break;for(var w=F.index+(g?F[1].length:0),S=F.index+F[0].length,R=v,A=x,C=l.length;R<C&&(A<S||!l[R].type&&!l[R-1].greedy);++R)w>=(A+=l[R].length)&&(++v,x=A);if(l[v]instanceof o)continue;T=R-v,k=e.slice(x,A),F.index-=x}else{p.lastIndex=0;var F=p.exec(k),T=1}if(F){g&&(h=F[1]?F[1].length:0),S=(w=F.index+h)+(F=F[0].slice(h)).length;var N=k.slice(0,w),j=k.slice(S),E=[v,T];N&&(++v,x+=N.length,E.push(N));var O=new o(s,m?t.tokenize(F,m):F,f,F,b);if(E.push(O),j&&E.push(j),Array.prototype.splice.apply(l,E),1!=T&&t.matchGrammar(e,l,n,v,x,!0,s),u)break}else if(u)break}}}}},tokenize:function(e,l,n){var a=[e],i=l.rest;if(i){for(var u in i)l[u]=i[u];delete l.rest}return t.matchGrammar(e,a,l,0,0,!1),a},hooks:{all:{},add:function(e,l){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(l)},run:function(e,l){var n=t.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(l)}}},a=t.Token=function(e,l,n,t,a){this.type=e,this.content=l,this.alias=n,this.length=0|(t||"").length,this.greedy=!!a};if(a.stringify=function(e,l,n){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(n){return a.stringify(n,l,e)}).join("");var i={type:e.type,content:a.stringify(e.content,l,n),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:n};if(e.alias){var u="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,u)}t.hooks.run("wrap",i);var r=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(r?" "+r:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(t.disableWorkerMessageHandler||n.addEventListener("message",function(e){var l=JSON.parse(e.data),a=l.language,i=l.immediateClose;n.postMessage(t.highlight(l.code,t.languages[a],a)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(t.filename=i.src,t.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(t.highlightAll):window.setTimeout(t.highlightAll,16):document.addEventListener("DOMContentLoaded",t.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=t),"undefined"!=typeof global&&(global.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),t.languages.xml=t.languages.markup,t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup&&(t.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:t.languages.css,alias:"language-css",greedy:!0}}),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},t.languages.markup.tag)),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),t.languages.javascript["template-string"].inside.interpolation.inside.rest=t.languages.javascript,t.languages.markup&&t.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:t.languages.javascript,alias:"language-javascript",greedy:!0}}),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var n,a=l.getAttribute("data-src"),i=l,u=/\blang(?:uage)?-([\w-]+)\b/i;i&&!u.test(i.className);)i=i.parentNode;if(i&&(n=(l.className.match(u)||[,""])[1]),!n){var r=(a.match(/\.(\w+)$/)||[,""])[1];n=e[r]||r}var o=document.createElement("code");o.className="language-"+n,l.textContent="",o.textContent="Loading\u2026",l.appendChild(o);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,t.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(e){var l=e.element.parentNode;if(l&&/pre/i.test(l.nodeName)&&l.hasAttribute("data-src")&&l.hasAttribute("data-download-link")){var n=l.getAttribute("data-src"),t=document.createElement("a");return t.textContent=l.getAttribute("data-download-link-label")||"Download",t.setAttribute("download",""),t.href=n,t}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);