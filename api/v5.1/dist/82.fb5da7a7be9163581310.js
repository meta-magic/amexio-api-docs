(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{MJTz:function(e,l,n){"use strict";n.r(l);var t=n("CcnG"),a=function(){},i=n("gTgE"),u=n("pMnS"),o=n("gIcY"),r=n("O4vx"),s=n("U89g"),d=n("d2mR"),c=n("Ip0R"),p=function(){function e(e){this.http=e,this.topMenuData=JSON.parse('[{\n      "text": "About Us",\n      "submenus": [{\n        "text": "Amexio Canvas",\n        "link": "https://amexio.tech/amexio-canvas"\n      }, {\n        "text": "Amexio Themes",\n        "link": "https://amexio.tech/amexio-themes"\n      }]\n    }]\n'),this.getHtmlAndTypeScriptCode()}return e.prototype.onClick=function(e){},e.prototype.externalLink=function(e){},e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,n,t=this;this.http.get("assets/data/code/navigation/navbar/navigation.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){t.htmlCode=e}),this.http.get("assets/data/code/navigation/navbar/navigation.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){t.typeScriptCode=l}),this.http.get("assets/data/componentdata/navbar.json",{responseType:"text"}).subscribe(function(e){n=e},function(e){},function(){t.dataSource=n}),this.dataSource=""},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),m=n("t/Na"),g=t.La({encapsulation:2,styles:[],data:{}});function h(e){return t.hb(0,[(e()(),t.Na(0,0,null,null,2,"amexio-nav-item",[["position-right",""]],null,[[null,"onNavItemClick"]],function(e,l,n){var t=!0;return"onNavItemClick"===l&&(t=!1!==e.component.externalLink(n)&&t),t},i.Vc,i.Va)),t.cb(5120,null,o.g,function(e){return[e]},[r.wb]),t.Ma(2,5357568,[[9,4]],0,r.wb,[t.k],{type:[0,"type"],title:[1,"title"],data:[2,"data"]},{onNavItemClick:"onNavItemClick"})],function(e,l){e(l,2,0,"menu",l.context.$implicit.text,l.context.$implicit.submenus)},null)}function b(e){return t.hb(0,[(e()(),t.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Na(1,0,null,null,1,"prism-block",[],null,null,null,s.b,s.a)),t.Ma(2,4243456,null,0,d.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function f(e){return t.hb(0,[(e()(),t.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Na(1,0,null,null,1,"prism-block",[],null,null,null,s.b,s.a)),t.Ma(2,4243456,null,0,d.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function y(e){return t.hb(0,[(e()(),t.Na(0,0,null,null,157,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,n){var a=!0;return"document:click"===l&&(a=!1!==t.Xa(e,1).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==t.Xa(e,1).onscroll()&&a),a},i.Hb,i.h)),t.Ma(1,5357568,null,3,r.g,[],{header:[0,"header"]},null),t.db(603979776,1,{amexioHeader:1}),t.db(603979776,2,{amexioBody:1}),t.db(603979776,3,{amexioFooter:1}),(e()(),t.Na(5,0,null,0,2,"amexio-header",[],null,null,null,i.Qb,i.q)),t.Ma(6,114688,[[1,4]],0,r.u,[],null,null),(e()(),t.fb(-1,0,[" Nav Bar "])),(e()(),t.Na(8,0,null,1,149,"amexio-body",[],null,null,null,i.Db,i.d)),t.Ma(9,114688,[[2,4]],0,r.c,[],null,null),(e()(),t.Na(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),t.fb(-1,null,[" The Nav Bar Component is a familiar top navigation pattern for users. Nav bar has Logo/Title left align, than link, text field, button and menus on right side. v4.1 Nav bar is not backward compatible of v4.0, for v4.0 refer link "])),(e()(),t.Na(12,16777216,null,0,145,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,l,n){var a=!0;return"document:click"===l&&(a=!1!==t.Xa(e,13).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==t.Xa(e,13).onscroll()&&a),a},i.ac,i.A)),t.Ma(13,5357568,null,2,r.J,[t.B,t.j,t.M],null,null),t.db(603979776,4,{queryTabs:1}),t.db(603979776,5,{queryAction:1}),(e()(),t.Na(16,0,null,1,58,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.bc,i.B)),t.Ma(17,114688,[[4,4]],0,r.K,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Na(18,0,null,0,56,"amexio-row",[],null,null,null,i.Wb,i.w)),t.Ma(19,1163264,null,0,r.F,[],null,null),(e()(),t.Na(20,0,null,0,54,"amexio-column",[],[[1,"class",0]],null,null,i.Jb,i.j)),t.Ma(21,114688,null,0,r.j,[],{size:[0,"size"]},null),(e()(),t.Na(22,0,null,0,52,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,n){var a=!0;return"document:click"===l&&(a=!1!==t.Xa(e,23).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==t.Xa(e,23).onscroll()&&a),a},i.Hb,i.h)),t.Ma(23,5357568,null,3,r.g,[],{header:[0,"header"]},null),t.db(603979776,6,{amexioHeader:1}),t.db(603979776,7,{amexioBody:1}),t.db(603979776,8,{amexioFooter:1}),(e()(),t.Na(27,0,null,0,2,"amexio-header",[],null,null,null,i.Qb,i.q)),t.Ma(28,114688,[[6,4]],0,r.u,[],null,null),(e()(),t.fb(-1,0,[" Nav Bar Demo "])),(e()(),t.Na(30,0,null,1,44,"amexio-body",[],null,null,null,i.Db,i.d)),t.Ma(31,114688,[[7,4]],0,r.c,[],null,null),(e()(),t.Na(32,0,null,0,42,"div",[["class","navbardemo"]],null,null,null,null,null)),(e()(),t.Na(33,0,null,null,41,"amexio-nav",[],null,null,null,i.Sb,i.s)),t.Ma(34,5357568,null,1,r.z,[r.Qa],{title:[0,"title"],logo:[1,"logo"],sidenavspace:[2,"sidenavspace"]},null),t.db(603979776,9,{navitems:1}),(e()(),t.Na(36,0,null,2,2,"amexio-nav-item",[["position-right",""],["style","cursor: pointer;"]],null,[[null,"onNavItemClick"]],function(e,l,n){var t=!0;return"onNavItemClick"===l&&(t=!1!==e.component.onClick("http://amexio.tech")&&t),t},i.Vc,i.Va)),t.cb(5120,null,o.g,function(e){return[e]},[r.wb]),t.Ma(38,5357568,[[9,4]],0,r.wb,[t.k],{type:[0,"type"],icon:[1,"icon"]},{onNavItemClick:"onNavItemClick"}),(e()(),t.Na(39,0,null,2,2,"amexio-nav-item",[["position-right",""]],null,null,null,i.Vc,i.Va)),t.cb(5120,null,o.g,function(e){return[e]},[r.wb]),t.Ma(41,5357568,[[9,4]],0,r.wb,[t.k],{type:[0,"type"],title:[1,"title"]},null),(e()(),t.Na(42,0,null,2,30,"amexio-nav-item",[["position-right",""]],null,null,null,i.Vc,i.Va)),t.cb(5120,null,o.g,function(e){return[e]},[r.wb]),t.Ma(44,5357568,[[9,4]],0,r.wb,[t.k],{type:[0,"type"],title:[1,"title"]},null),(e()(),t.Na(45,0,null,0,4,"amexio-box",[["background-color","purple"],["padding","true"]],null,null,null,i.Gb,i.g)),t.Ma(46,114688,null,0,r.f,[],{bgColor:[0,"bgColor"],padding:[1,"padding"]},null),(e()(),t.Na(47,0,null,0,2,"amexio-label",[["size","small-bold"]],null,null,null,i.zd,i.zb)),t.Ma(48,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(e()(),t.fb(-1,0,["This account is managed by metamagic.in. "])),(e()(),t.Na(50,0,null,0,14,"amexio-row",[],null,null,null,i.Wb,i.w)),t.Ma(51,1163264,null,0,r.F,[],null,null),(e()(),t.Na(52,0,null,0,3,"amexio-column",[["size","5"]],[[1,"class",0]],null,null,i.Jb,i.j)),t.Ma(53,114688,null,0,r.j,[],{size:[0,"size"]},null),(e()(),t.Na(54,0,null,0,1,"amexio-image",[["path","assets/images/profile/mark.jpg"]],null,null,null,i.Uc,i.Ua)),t.Ma(55,114688,null,0,r.vb,[],{path:[0,"path"],cclass:[1,"cclass"],width:[2,"width"],height:[3,"height"]},null),(e()(),t.Na(56,0,null,0,8,"amexio-column",[["size","7"]],[[1,"class",0]],null,null,i.Jb,i.j)),t.Ma(57,114688,null,0,r.j,[],{size:[0,"size"]},null),(e()(),t.Na(58,0,null,0,2,"amexio-label",[],null,null,null,i.zd,i.zb)),t.Ma(59,114688,null,0,r.mc,[],null,null),(e()(),t.fb(-1,0,["John deo "])),(e()(),t.Na(61,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Na(62,0,null,0,2,"amexio-label",[],null,null,null,i.zd,i.zb)),t.Ma(63,114688,null,0,r.mc,[],null,null),(e()(),t.fb(-1,0,["john@metamagic.in"])),(e()(),t.Na(65,0,null,0,1,"amexio-drop-down-menu-item",[],null,null,null,i.Oc,i.Oa)),t.Ma(66,114688,null,0,r.ob,[],{label:[0,"label"],icon:[1,"icon"],separator:[2,"separator"]},null),(e()(),t.Na(67,0,null,0,1,"amexio-drop-down-menu-item",[],null,null,null,i.Oc,i.Oa)),t.Ma(68,114688,null,0,r.ob,[],{label:[0,"label"],icon:[1,"icon"],separator:[2,"separator"]},null),(e()(),t.Na(69,0,null,0,3,"amexio-drop-down-menu-item",[],null,null,null,i.Oc,i.Oa)),t.Ma(70,114688,null,0,r.ob,[],null,null),(e()(),t.Na(71,0,null,0,1,"amexio-button",[],null,null,null,i.qd,i.qb)),t.Ma(72,114688,null,0,r.ac,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},null),(e()(),t.Ea(16777216,null,2,1,null,h)),t.Ma(74,278528,null,0,c.k,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(e()(),t.Na(75,0,null,1,64,"amexio-tab",[["title","API Reference"]],null,null,null,i.bc,i.B)),t.Ma(76,114688,[[4,4]],0,r.K,[],{title:[0,"title"]},null),(e()(),t.Na(77,0,null,0,18,"amexio-datagrid",[["title","Properties<amexio-nav>"]],null,[["document","scroll"],["document","click"]],function(e,l,n){var a=!0;return"document:scroll"===l&&(a=!1!==t.Xa(e,78).onscroll()&&a),"document:click"===l&&(a=!1!==t.Xa(e,78).onclick()&&a),a},i.ad,i.ab)),t.Ma(78,1425408,null,1,r.Gb,[t.k,r.Ga,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.db(603979776,10,{columnRef:1}),(e()(),t.Na(80,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),t.Ma(81,49152,[[10,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,11,{headerTemplate:0}),t.db(335544320,12,{bodyTemplate:0}),(e()(),t.Na(84,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),t.Ma(85,49152,[[10,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,13,{headerTemplate:0}),t.db(335544320,14,{bodyTemplate:0}),(e()(),t.Na(88,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),t.Ma(89,49152,[[10,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,15,{headerTemplate:0}),t.db(335544320,16,{bodyTemplate:0}),(e()(),t.Na(92,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),t.Ma(93,49152,[[10,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,17,{headerTemplate:0}),t.db(335544320,18,{bodyTemplate:0}),(e()(),t.Na(96,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Na(97,0,null,0,10,"amexio-datagrid",[["title","Events: amexio-nav"]],null,[["document","scroll"],["document","click"]],function(e,l,n){var a=!0;return"document:scroll"===l&&(a=!1!==t.Xa(e,98).onscroll()&&a),"document:click"===l&&(a=!1!==t.Xa(e,98).onclick()&&a),a},i.ad,i.ab)),t.Ma(98,1425408,null,1,r.Gb,[t.k,r.Ga,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),t.db(603979776,19,{columnRef:1}),(e()(),t.Na(100,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),t.Ma(101,49152,[[19,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,20,{headerTemplate:0}),t.db(335544320,21,{bodyTemplate:0}),(e()(),t.Na(104,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),t.Ma(105,49152,[[19,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,22,{headerTemplate:0}),t.db(335544320,23,{bodyTemplate:0}),(e()(),t.Na(108,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Na(109,0,null,0,18,"amexio-datagrid",[["title","Properties:amexio-nav-item"]],null,[["document","scroll"],["document","click"]],function(e,l,n){var a=!0;return"document:scroll"===l&&(a=!1!==t.Xa(e,110).onscroll()&&a),"document:click"===l&&(a=!1!==t.Xa(e,110).onclick()&&a),a},i.ad,i.ab)),t.Ma(110,1425408,null,1,r.Gb,[t.k,r.Ga,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.db(603979776,24,{columnRef:1}),(e()(),t.Na(112,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),t.Ma(113,49152,[[24,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,25,{headerTemplate:0}),t.db(335544320,26,{bodyTemplate:0}),(e()(),t.Na(116,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),t.Ma(117,49152,[[24,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,27,{headerTemplate:0}),t.db(335544320,28,{bodyTemplate:0}),(e()(),t.Na(120,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),t.Ma(121,49152,[[24,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,29,{headerTemplate:0}),t.db(335544320,30,{bodyTemplate:0}),(e()(),t.Na(124,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),t.Ma(125,49152,[[24,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,31,{headerTemplate:0}),t.db(335544320,32,{bodyTemplate:0}),(e()(),t.Na(128,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Na(129,0,null,0,10,"amexio-datagrid",[["title","Events: amexio-nav-item "]],null,[["document","scroll"],["document","click"]],function(e,l,n){var a=!0;return"document:scroll"===l&&(a=!1!==t.Xa(e,130).onscroll()&&a),"document:click"===l&&(a=!1!==t.Xa(e,130).onclick()&&a),a},i.ad,i.ab)),t.Ma(130,1425408,null,1,r.Gb,[t.k,r.Ga,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),t.db(603979776,33,{columnRef:1}),(e()(),t.Na(132,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),t.Ma(133,49152,[[33,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,34,{headerTemplate:0}),t.db(335544320,35,{bodyTemplate:0}),(e()(),t.Na(136,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),t.Ma(137,49152,[[33,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,36,{headerTemplate:0}),t.db(335544320,37,{bodyTemplate:0}),(e()(),t.Na(140,0,null,1,12,"amexio-tab",[["title","Source"]],null,null,null,i.bc,i.B)),t.Ma(141,114688,[[4,4]],0,r.K,[],{title:[0,"title"]},null),(e()(),t.Na(142,0,null,0,10,"amexio-vertical-tab-view",[],null,null,null,i.dc,i.D)),t.Ma(143,5357568,null,1,r.O,[t.B],null,null),t.db(603979776,38,{queryTabs:1}),(e()(),t.Na(145,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.bc,i.B)),t.Ma(146,114688,[[38,4]],0,r.K,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Ea(16777216,null,0,1,null,b)),t.Ma(148,16384,null,0,c.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(e()(),t.Na(149,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.bc,i.B)),t.Ma(150,114688,[[38,4]],0,r.K,[],{title:[0,"title"]},null),(e()(),t.Ea(16777216,null,0,1,null,f)),t.Ma(152,16384,null,0,c.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(e()(),t.Na(153,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.bc,i.B)),t.Ma(154,114688,[[4,4]],0,r.K,[],{title:[0,"title"]},null),(e()(),t.Na(155,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),t.fb(-1,null,["Amexio Sandbox"])),(e()(),t.Na(157,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v41-navbar?embed=1&file=app/forms/navbar/navbar.demo.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,l){var n=l.component;e(l,1,0,"true"),e(l,6,0),e(l,9,0),e(l,13,0),e(l,17,0,"Demo","true"),e(l,19,0),e(l,21,0,12),e(l,23,0,"true"),e(l,28,0),e(l,31,0),e(l,34,0,"Amexio","assets/images/logos/amexio-logo.png",!1),e(l,38,0,"button","fa fa-bell fa-fw fa-lg"),e(l,41,0,"textfield","Enter your name"),e(l,44,0,"menucontainer","Settings"),e(l,46,0,"purple","true"),e(l,48,0,"small-bold"),e(l,51,0),e(l,53,0,"5"),e(l,55,0,"assets/images/profile/mark.jpg","image-round","95.75px","95.75px"),e(l,57,0,"7"),e(l,59,0),e(l,63,0),e(l,66,0,"Settings","fa fa-cog",!0),e(l,68,0,"Help Center","fa fa-question-circle",!0),e(l,70,0),e(l,72,0,"My Account","theme-color","My Account"),e(l,74,0,n.topMenuData),e(l,76,0,"API Reference"),e(l,78,0,"Properties<amexio-nav>","assets/apireference/navigation/navbar.json","get","properties",!1,!1),e(l,81,0,"Name","name",!1,"string",15),e(l,85,0,"Type","type",!1,"string",10),e(l,89,0,"Default","default",!1,"string",10),e(l,93,0,"Description","description",!1,"string",65),e(l,98,0,"Events: amexio-nav","assets/apireference/navigation/navbar.json","get","navevents",!1),e(l,101,0,"Name","name",!1,"string",20),e(l,105,0,"Description","description",!1,"string",80),e(l,110,0,"Properties:amexio-nav-item","assets/apireference/navigation/navbar.json","get","propertiesitem",!1,!1),e(l,113,0,"Name","name",!1,"string",20),e(l,117,0,"Type","type",!1,"string",10),e(l,121,0,"Default","default",!1,"string",10),e(l,125,0,"Description","description",!1,"string",80),e(l,130,0,"Events: amexio-nav-item ","assets/apireference/navigation/navbar.json","get","events",!1),e(l,133,0,"Name","name",!1,"string",20),e(l,137,0,"Description","description",!1,"string",80),e(l,141,0,"Source"),e(l,143,0),e(l,146,0,"HTML",!0),e(l,148,0,n.htmlCode),e(l,150,0,"Type Script"),e(l,152,0,n.typeScriptCode),e(l,154,0,"Live")},function(e,l){e(l,20,0,t.Xa(l,21).role),e(l,52,0,t.Xa(l,53).role),e(l,56,0,t.Xa(l,57).role)})}var x=t.Ja("navbar-demo",p,function(e){return t.hb(0,[(e()(),t.Na(0,0,null,null,1,"navbar-demo",[],null,null,null,y,g)),t.Ma(1,49152,null,0,p,[m.c],null,null)],null,null)},{},{},[]),v=n("ZYCi");n.d(l,"NavBarDemoModuleNgFactory",function(){return k});var k=t.Ka(a,[],function(e){return t.Ua([t.Va(512,t.j,t.Z,[[8,[i.a,u.a,x]],[3,t.j],t.v]),t.Va(4608,c.n,c.m,[t.s,[2,c.w]]),t.Va(4608,o.r,o.r,[]),t.Va(4608,m.h,m.n,[c.c,t.z,m.l]),t.Va(4608,m.o,m.o,[m.h,m.m]),t.Va(5120,m.a,function(e){return[e]},[m.o]),t.Va(4608,m.k,m.k,[]),t.Va(6144,m.i,null,[m.k]),t.Va(4608,m.g,m.g,[m.i]),t.Va(6144,m.b,null,[m.g]),t.Va(4608,m.f,m.j,[m.b,t.p]),t.Va(4608,m.c,m.c,[m.f]),t.Va(4608,r.Ga,r.Ga,[m.c]),t.Va(4608,r.Qa,r.Qa,[t.z]),t.Va(4608,r.Xa,r.Xa,[]),t.Va(4608,r.ic,r.ic,[]),t.Va(1073742336,c.b,c.b,[]),t.Va(1073742336,o.o,o.o,[]),t.Va(1073742336,o.e,o.e,[]),t.Va(1073742336,m.e,m.e,[]),t.Va(1073742336,m.d,m.d,[]),t.Va(1073742336,d.b,d.b,[]),t.Va(1073742336,r.v,r.v,[]),t.Va(1073742336,r.t,r.t,[]),t.Va(1073742336,r.y,r.y,[]),t.Va(1073742336,r.A,r.A,[]),t.Va(1073742336,r.D,r.D,[]),t.Va(1073742336,r.l,r.l,[]),t.Va(1073742336,r.Q,r.Q,[]),t.Va(1073742336,v.n,v.n,[[2,v.t],[2,v.m]]),t.Va(1073742336,a,a,[]),t.Va(256,m.l,"XSRF-TOKEN",[]),t.Va(256,m.m,"X-XSRF-TOKEN",[]),t.Va(1024,v.i,function(){return[[{path:"",component:p,pathMatch:"full"}]]},[])])})},U89g:function(e,l,n){"use strict";n.d(l,"a",function(){return a}),n.d(l,"b",function(){return i});var t=n("CcnG"),a=(n("d2mR"),n("Ip0R"),t.La({encapsulation:2,styles:[],data:{}}));function i(e){return t.hb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,l,n){"use strict";n.d(l,"a",function(){return t}),n.d(l,"b",function(){return a}),n("wZee"),n("XIHC");var t=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,l){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},t=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,t=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var n=t.util.type(e);switch(l=l||{},n){case"Object":if(l[t.util.objId(e)])return l[t.util.objId(e)];var a={};for(var i in l[t.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=t.util.clone(e[i],l));return a;case"Array":return l[t.util.objId(e)]?l[t.util.objId(e)]:(a=[],l[t.util.objId(e)]=a,e.forEach(function(e,n){a[n]=t.util.clone(e,l)}),a)}return e}},languages:{extend:function(e,l){var n=t.util.clone(t.languages[e]);for(var a in l)n[a]=l[a];return n},insertBefore:function(e,l,n,a){var i=(a=a||t.languages)[e];if(2==arguments.length){for(var u in n=arguments[1])n.hasOwnProperty(u)&&(i[u]=n[u]);return i}var o={};for(var r in i)if(i.hasOwnProperty(r)){if(r==l)for(var u in n)n.hasOwnProperty(u)&&(o[u]=n[u]);o[r]=i[r]}return t.languages.DFS(t.languages,function(l,n){n===a[e]&&l!=e&&(this[l]=o)}),a[e]=o},DFS:function(e,l,n,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(l.call(e,i,e[i],n||i),"Object"!==t.util.type(e[i])||a[t.util.objId(e[i])]?"Array"!==t.util.type(e[i])||a[t.util.objId(e[i])]||(a[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],l,i,a)):(a[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],l,null,a)))}},plugins:{},highlightAll:function(e,l){t.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",a);for(var i,u=a.elements||e.querySelectorAll(a.selector),o=0;i=u[o++];)t.highlightElement(i,!0===l,a.callback)},highlightElement:function(l,a,i){for(var u,o,r=l;r&&!e.test(r.className);)r=r.parentNode;r&&(u=(r.className.match(e)||[,""])[1].toLowerCase(),o=t.languages[u]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+u,l.parentNode&&/pre/i.test((r=l.parentNode).nodeName)&&(r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+u);var s={element:l,language:u,grammar:o,code:l.textContent};if(t.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(t.hooks.run("before-highlight",s),s.element.textContent=s.code,t.hooks.run("after-highlight",s)),void t.hooks.run("complete",s);if(t.hooks.run("before-highlight",s),a&&n.Worker){var d=new Worker(t.filename);d.onmessage=function(e){s.highlightedCode=e.data,t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},d.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=t.highlight(s.code,s.grammar,s.language),t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(l),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},highlight:function(e,l,n){var i={code:e,grammar:l,language:n};return t.hooks.run("before-tokenize",i),i.tokens=t.tokenize(i.code,i.grammar),t.hooks.run("after-tokenize",i),a.stringify(t.util.encode(i.tokens),i.language)},matchGrammar:function(e,l,n,a,i,u,o){var r=t.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==o)return;var d=n[s];d="Array"===t.util.type(d)?d:[d];for(var c=0;c<d.length;++c){var p=d[c],m=p.inside,g=!!p.lookbehind,h=!!p.greedy,b=0,f=p.alias;if(h&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var x=a,v=i;x<l.length;v+=l[x].length,++x){var k=l[x];if(l.length>e.length)return;if(!(k instanceof r)){if(h&&x!=l.length-1){if(p.lastIndex=v,!(T=p.exec(e)))break;for(var w=T.index+(g?T[1].length:0),N=T.index+T[0].length,M=x,C=v,A=l.length;M<A&&(C<N||!l[M].type&&!l[M-1].greedy);++M)w>=(C+=l[M].length)&&(++x,v=C);if(l[x]instanceof r)continue;F=M-x,k=e.slice(v,C),T.index-=v}else{p.lastIndex=0;var T=p.exec(k),F=1}if(T){g&&(b=T[1]?T[1].length:0),N=(w=T.index+b)+(T=T[0].slice(b)).length;var S=k.slice(0,w),j=k.slice(N),V=[x,F];S&&(++x,v+=S.length,V.push(S));var E=new r(s,m?t.tokenize(T,m):T,f,T,h);if(V.push(E),j&&V.push(j),Array.prototype.splice.apply(l,V),1!=F&&t.matchGrammar(e,l,n,x,v,!0,s),u)break}else if(u)break}}}}},tokenize:function(e,l,n){var a=[e],i=l.rest;if(i){for(var u in i)l[u]=i[u];delete l.rest}return t.matchGrammar(e,a,l,0,0,!1),a},hooks:{all:{},add:function(e,l){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(l)},run:function(e,l){var n=t.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(l)}}},a=t.Token=function(e,l,n,t,a){this.type=e,this.content=l,this.alias=n,this.length=0|(t||"").length,this.greedy=!!a};if(a.stringify=function(e,l,n){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(n){return a.stringify(n,l,e)}).join("");var i={type:e.type,content:a.stringify(e.content,l,n),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:n};if(e.alias){var u="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,u)}t.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(t.disableWorkerMessageHandler||n.addEventListener("message",function(e){var l=JSON.parse(e.data),a=l.language,i=l.immediateClose;n.postMessage(t.highlight(l.code,t.languages[a],a)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(t.filename=i.src,t.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(t.highlightAll):window.setTimeout(t.highlightAll,16):document.addEventListener("DOMContentLoaded",t.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=t),"undefined"!=typeof global&&(global.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),t.languages.xml=t.languages.markup,t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup&&(t.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:t.languages.css,alias:"language-css",greedy:!0}}),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},t.languages.markup.tag)),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:t.languages.javascript,alias:"language-javascript",greedy:!0}}),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var n,a=l.getAttribute("data-src"),i=l,u=/\blang(?:uage)?-(?!\*)([\w-]+)\b/i;i&&!u.test(i.className);)i=i.parentNode;if(i&&(n=(l.className.match(u)||[,""])[1]),!n){var o=(a.match(/\.(\w+)$/)||[,""])[1];n=e[o]||o}var r=document.createElement("code");r.className="language-"+n,l.textContent="",r.textContent="Loading\u2026",l.appendChild(r);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(r.textContent=s.responseText,t.highlightElement(r)):r.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},l.hasAttribute("data-download-link")&&t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(){var e=document.createElement("a");return e.textContent=l.getAttribute("data-download-link-label")||"Download",e.setAttribute("download",""),e.href=a,e}),s.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);