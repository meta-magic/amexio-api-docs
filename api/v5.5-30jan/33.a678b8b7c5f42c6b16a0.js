(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"5r3b":function(l,e,a){"use strict";a.r(e);var t=a("CcnG"),n=function(){},i=a("gTgE"),u=a("pMnS"),r=a("U89g"),o=a("d2mR"),d=a("O4vx"),s=a("Ip0R"),g=function(){function l(l,e){this.http=l,this._gridlayoutService=e,this.createLayouts(),this._gridlayoutService.createLayout(this.imageGridDesktop),this._gridlayoutService.createLayout(this.imageGridTablet),this._gridlayoutService.createLayout(this.imageGridMobile),this._gridlayoutService.createLayout(this.leftGridDesktop),this._gridlayoutService.createLayout(this.leftGridTablet),this._gridlayoutService.createLayout(this.leftGridMobile),this._gridlayoutService.createLayout(this.gridDesktop),this._gridlayoutService.createLayout(this.gridTablet),this._gridlayoutService.createLayout(this.gridMobile),this.getHtmlAndTypeScriptCode()}return l.prototype.createLayouts=function(){this.gridDesktop=new d.kb("Layout2",d.lb.Desktop).addlayout(["gridheader","gridheader","gridheader","gridheader"]).addlayout(["gridheader1","gridheader1","gridheader2","gridheader2"]).addlayout(["gridleft1","gridmain","gridmain","gridright"]).addlayout(["gridleft1","gridmain","gridmain","gridright"]).addlayout(["gridleft1","gridfooter","gridfooter1","gridfooter1"]),this.gridTablet=new d.kb("Layout2",d.lb.Tablet).addlayout(["gridheader","gridheader","gridheader","gridheader"]).addlayout(["gridheader1","gridheader1","gridheader1","gridheader1"]).addlayout(["gridheader2","gridheader2","gridright","gridright"]).addlayout(["gridheader2","gridheader2","gridright","gridright"]).addlayout(["gridmain","gridmain","gridmain","gridmain"]).addlayout(["gridfooter","gridfooter","gridfooter","gridfooter"]).addlayout(["gridfooter1","gridfooter1","gridfooter1","gridfooter1"]).addlayout(["gridleft1","gridleft1","gridleft1","gridleft1"]),this.gridMobile=new d.kb("Layout2",d.lb.Mobile).addlayout(["gridheader","gridheader","gridheader","gridheader"]).addlayout(["gridheader1","gridheader1","gridheader1","gridheader1"]).addlayout(["gridheader2","gridheader2","gridheader2","gridheader2"]).addlayout(["gridright","gridright","gridright","gridright"]).addlayout(["gridmain","gridmain","gridmain","gridmain"]).addlayout(["gridfooter","gridfooter","gridfooter","gridfooter"]).addlayout(["gridfooter1","gridfooter1","gridfooter1","gridfooter1"]).addlayout(["gridleft1","gridleft1","gridleft1","gridleft1"]),this.imageGridDesktop=new d.kb("gridimagelayout",d.lb.Desktop).addlayout(["gridimage1","gridimage2","gridimage3","gridimage4"]),this.imageGridTablet=new d.kb("gridimagelayout",d.lb.Tablet).addlayout(["gridimage1","gridimage2","gridimage3","gridimage4"]),this.imageGridMobile=new d.kb("gridimagelayout",d.lb.Mobile).addlayout(["gridimage1","gridimage1","gridimage2","gridimage2"]).addlayout(["gridimage3","gridimage3","gridimage4","gridimage4"]),this.leftGridDesktop=new d.kb("leftlayout",d.lb.Desktop).addlayout(["leftlayout1","leftlayout1","leftlayout1","leftlayout1"]).addlayout(["leftlayout2","leftlayout2","leftlayout2","leftlayout2"]).addlayout(["leftlayout3","leftlayout3","leftlayout3","leftlayout3"]).addlayout(["leftlayout4","leftlayout4","leftlayout4","leftlayout4"]),this.leftGridTablet=new d.kb("leftlayout",d.lb.Tablet).addlayout(["leftlayout1","leftlayout2","leftlayout3","leftlayout4"]),this.leftGridMobile=new d.kb("leftlayout",d.lb.Mobile).addlayout(["leftlayout1","leftlayout1","leftlayout2","leftlayout2"]).addlayout(["leftlayout3","leftlayout3","leftlayout4","leftlayout4"])},l.prototype.getHtmlAndTypeScriptCode=function(){var l,e,a=this;this.http.get("assets/data/code/data/gridlayout/gridlayoutexp2.html",{responseType:"text"}).subscribe(function(e){l=e},function(l){},function(){a.htmlCode=l}),this.http.get("assets/data/code/data/gridlayout/gridlayoutexp2.text",{responseType:"text"}).subscribe(function(l){e=l},function(l){},function(){a.typeScriptCode=e})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.onClick=function(){},l.prototype.onRowSelect=function(l){this.selectedData=l},l}(),c=a("t/Na"),m=t.Qa({encapsulation:2,styles:[],data:{}});function h(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.htmlCode,"html")},null)}function p(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.typeScriptCode,"typescript")},null)}function b(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,221,"amexio-card",[["header","true"]],null,null,null,i.dc,i.k)),t.Ra(1,7585792,null,3,d.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(l()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.pc,i.w)),t.Ra(6,114688,[[1,4]],0,d.C,[],null,null),(l()(),t.kb(-1,0,[" Grid Layout "])),(l()(),t.Sa(8,0,null,1,213,"amexio-body",[],null,null,null,i.Xb,i.e)),t.Ra(9,114688,[[2,4]],0,d.d,[],null,null),(l()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows. Grid Layout can be used by applying CSS rules both to a parent element (which becomes the Grid Container) and to that elements children (which become Grid Items)."])),(l()(),t.Sa(12,0,null,0,209,"amexio-tab-view",[],null,null,null,i.Ac,i.H)),t.Ra(13,5488640,null,2,d.S,[t.F,t.k,t.F],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(l()(),t.Sa(16,0,null,1,137,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.Bc,i.I)),t.Ra(17,114688,[[4,4]],0,d.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Sa(18,0,null,0,135,"amexio-row",[],null,null,null,i.wc,i.D)),t.Ra(19,1163264,null,0,d.O,[],null,null),(l()(),t.Sa(20,0,null,0,133,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.fc,i.m)),t.Ra(21,114688,null,0,d.m,[],{size:[0,"size"]},null),(l()(),t.Sa(22,0,null,0,131,"amexio-card",[],null,null,null,i.dc,i.k)),t.Ra(23,7585792,null,3,d.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,6,{amexioHeader:1}),t.ib(603979776,7,{amexioBody:1}),t.ib(603979776,8,{amexioFooter:1}),(l()(),t.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.pc,i.w)),t.Ra(28,114688,[[6,4]],0,d.C,[],null,null),(l()(),t.kb(-1,0,[" Grid Layout "])),(l()(),t.Sa(30,0,null,1,123,"amexio-body",[],null,null,null,i.Xb,i.e)),t.Ra(31,114688,[[7,4]],0,d.d,[],null,null),(l()(),t.Sa(32,0,null,0,121,"amexio-layout-grid",[],null,null,null,i.nc,i.u)),t.Ra(33,1163264,null,1,d.z,[d.B],{layout:[0,"layout"]},null),t.ib(603979776,9,{queryItem:1}),(l()(),t.Sa(35,0,null,0,7,"amexio-grid-item",[],[[8,"className",0]],null,null,i.oc,i.v)),t.Ra(36,114688,[[9,4]],0,d.A,[],{name:[0,"name"]},null),(l()(),t.Sa(37,0,null,0,5,"amexio-panel",[],null,null,null,i.Qd,i.xb)),t.Ra(38,245760,null,0,d.qc,[t.F],{expanded:[0,"expanded"],contentAlign:[1,"contentAlign"]},null),(l()(),t.Sa(39,0,null,2,3,"amexio-label",[],null,null,null,i.wd,i.db)),t.Ra(40,114688,null,0,d.Ob,[],{styleClass:[0,"styleClass"]},null),(l()(),t.Sa(41,0,null,0,1,"u",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["THE COLLECTION"])),(l()(),t.Sa(43,0,null,0,16,"amexio-grid-item",[],[[8,"className",0]],null,null,i.oc,i.v)),t.Ra(44,114688,[[9,4]],0,d.A,[],{name:[0,"name"]},null),(l()(),t.Sa(45,0,null,0,14,"amexio-panel",[],null,null,null,i.Qd,i.xb)),t.Ra(46,245760,null,0,d.qc,[t.F],{expanded:[0,"expanded"],border:[1,"border"],contentAlign:[2,"contentAlign"]},null),(l()(),t.Sa(47,0,null,2,2,"amexio-label",[],null,null,null,i.wd,i.db)),t.Ra(48,114688,null,0,d.Ob,[],null,null),(l()(),t.kb(-1,0,[" CLASSIC "])),(l()(),t.Sa(50,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(51,0,null,2,4,"amexio-label",[],null,null,null,i.wd,i.db)),t.Ra(52,114688,null,0,d.Ob,[],null,null),(l()(),t.Sa(53,0,null,0,2,"em",[],null,null,null,null,null)),(l()(),t.Sa(54,0,null,null,1,"u",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Holiday"])),(l()(),t.Sa(56,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(57,0,null,2,2,"amexio-label",[],null,null,null,i.wd,i.db)),t.Ra(58,114688,null,0,d.Ob,[],null,null),(l()(),t.kb(-1,0,["COLLECTION"])),(l()(),t.Sa(60,0,null,0,3,"amexio-grid-item",[],[[8,"className",0]],null,null,i.oc,i.v)),t.Ra(61,114688,[[9,4]],0,d.A,[],{name:[0,"name"]},null),(l()(),t.Sa(62,0,null,0,1,"h2",[["class","label-block"]],null,null,null,null,null)),(l()(),t.kb(-1,null,[" ART . LOVE . COLOR "])),(l()(),t.Sa(64,0,null,0,9,"amexio-grid-item",[],[[8,"className",0]],null,null,i.oc,i.v)),t.Ra(65,114688,[[9,4]],0,d.A,[],{name:[0,"name"]},null),(l()(),t.Sa(66,0,null,0,2,"amexio-panel",[["title","Panel"]],null,null,null,i.Qd,i.xb)),t.Ra(67,245760,null,0,d.qc,[t.F],{title:[0,"title"],expanded:[1,"expanded"]},null),(l()(),t.kb(-1,2,[" Inspired by painter Yago Hortal\u2019s one-of-a-kind, vivid artwork, this set features 40 shades of color for cheeks and eyes. The panels easily pop in and out, making it perfectly portable for holiday trips. limited-edition kits featuring all of their bestsellers in a range of shades\u2014from bold pops of color to always-flattering neutrals. "])),(l()(),t.Sa(69,0,null,0,4,"amexio-panel",[],null,null,null,i.Qd,i.xb)),t.Ra(70,245760,null,0,d.qc,[t.F],{expanded:[0,"expanded"],border:[1,"border"],contentAlign:[2,"contentAlign"]},null),(l()(),t.Sa(71,0,null,2,2,"amexio-label",[],null,null,null,i.wd,i.db)),t.Ra(72,114688,null,0,d.Ob,[],null,null),(l()(),t.kb(-1,0,[" MORE DETAILS "])),(l()(),t.Sa(74,0,null,0,20,"amexio-grid-item",[],[[8,"className",0]],null,null,i.oc,i.v)),t.Ra(75,114688,[[9,4]],0,d.A,[],{name:[0,"name"]},null),(l()(),t.Sa(76,0,null,0,18,"amexio-layout-grid",[],null,null,null,i.nc,i.u)),t.Ra(77,1163264,null,1,d.z,[d.B],{layout:[0,"layout"]},null),t.ib(603979776,10,{queryItem:1}),(l()(),t.Sa(79,0,null,0,3,"amexio-grid-item",[],[[8,"className",0]],null,null,i.oc,i.v)),t.Ra(80,114688,[[10,4]],0,d.A,[],{name:[0,"name"]},null),(l()(),t.Sa(81,0,null,0,1,"amexio-image",[],null,null,null,i.Kd,i.rb)),t.Ra(82,114688,null,0,d.fc,[],{tooltip:[0,"tooltip"],path:[1,"path"]},null),(l()(),t.Sa(83,0,null,0,3,"amexio-grid-item",[],[[8,"className",0]],null,null,i.oc,i.v)),t.Ra(84,114688,[[10,4]],0,d.A,[],{name:[0,"name"]},null),(l()(),t.Sa(85,0,null,0,1,"amexio-image",[],null,null,null,i.Kd,i.rb)),t.Ra(86,114688,null,0,d.fc,[],{tooltip:[0,"tooltip"],path:[1,"path"]},null),(l()(),t.Sa(87,0,null,0,3,"amexio-grid-item",[],[[8,"className",0]],null,null,i.oc,i.v)),t.Ra(88,114688,[[10,4]],0,d.A,[],{name:[0,"name"]},null),(l()(),t.Sa(89,0,null,0,1,"amexio-image",[],null,null,null,i.Kd,i.rb)),t.Ra(90,114688,null,0,d.fc,[],{tooltip:[0,"tooltip"],path:[1,"path"]},null),(l()(),t.Sa(91,0,null,0,3,"amexio-grid-item",[],[[8,"className",0]],null,null,i.oc,i.v)),t.Ra(92,114688,[[10,4]],0,d.A,[],{name:[0,"name"]},null),(l()(),t.Sa(93,0,null,0,1,"amexio-image",[],null,null,null,i.Kd,i.rb)),t.Ra(94,114688,null,0,d.fc,[],{tooltip:[0,"tooltip"],path:[1,"path"]},null),(l()(),t.Sa(95,0,null,0,42,"amexio-grid-item",[],[[8,"className",0]],null,null,i.oc,i.v)),t.Ra(96,114688,[[9,4]],0,d.A,[],{name:[0,"name"]},null),(l()(),t.Sa(97,0,null,0,2,"amexio-label",[],null,null,null,i.wd,i.db)),t.Ra(98,114688,null,0,d.Ob,[],{styleClass:[0,"styleClass"]},null),(l()(),t.kb(-1,0,[" Shop By "])),(l()(),t.Sa(100,0,null,0,0,"hr",[],null,null,null,null,null)),(l()(),t.Sa(101,0,null,0,36,"amexio-layout-grid",[],null,null,null,i.nc,i.u)),t.Ra(102,1163264,null,1,d.z,[d.B],{layout:[0,"layout"]},null),t.ib(603979776,11,{queryItem:1}),(l()(),t.Sa(104,0,null,0,8,"amexio-grid-item",[],[[8,"className",0]],null,null,i.oc,i.v)),t.Ra(105,114688,[[11,4]],0,d.A,[],{name:[0,"name"]},null),(l()(),t.Sa(106,0,null,0,6,"amexio-panel",[],null,null,null,i.Qd,i.xb)),t.Ra(107,245760,null,0,d.qc,[t.F],{header:[0,"header"],expanded:[1,"expanded"]},null),(l()(),t.kb(-1,2,[" Makeup "])),(l()(),t.Sa(109,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),t.kb(-1,2,[" Skincare "])),(l()(),t.Sa(111,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),t.kb(-1,2,[" Fragrance "])),(l()(),t.Sa(113,0,null,0,8,"amexio-grid-item",[],[[8,"className",0]],null,null,i.oc,i.v)),t.Ra(114,114688,[[11,4]],0,d.A,[],{name:[0,"name"]},null),(l()(),t.Sa(115,0,null,0,6,"amexio-panel",[],null,null,null,i.Qd,i.xb)),t.Ra(116,245760,null,0,d.qc,[t.F],{header:[0,"header"],expanded:[1,"expanded"]},null),(l()(),t.kb(-1,2,[" Bath & Body "])),(l()(),t.Sa(118,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),t.kb(-1,2,[" Hair "])),(l()(),t.Sa(120,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),t.kb(-1,2,[" Nails "])),(l()(),t.Sa(122,0,null,0,8,"amexio-grid-item",[],[[8,"className",0]],null,null,i.oc,i.v)),t.Ra(123,114688,[[11,4]],0,d.A,[],{name:[0,"name"]},null),(l()(),t.Sa(124,0,null,0,6,"amexio-panel",[],null,null,null,i.Qd,i.xb)),t.Ra(125,245760,null,0,d.qc,[t.F],{header:[0,"header"],expanded:[1,"expanded"]},null),(l()(),t.kb(-1,2,[" Tools & Brushes "])),(l()(),t.Sa(127,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),t.kb(-1,2,[" Men "])),(l()(),t.Sa(129,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),t.kb(-1,2,[" Gifts "])),(l()(),t.Sa(131,0,null,0,6,"amexio-grid-item",[],[[8,"className",0]],null,null,i.oc,i.v)),t.Ra(132,114688,[[11,4]],0,d.A,[],{name:[0,"name"]},null),(l()(),t.Sa(133,0,null,0,4,"amexio-panel",[],null,null,null,i.Qd,i.xb)),t.Ra(134,245760,null,0,d.qc,[t.F],{header:[0,"header"],expanded:[1,"expanded"]},null),(l()(),t.kb(-1,2,[" Sales "])),(l()(),t.Sa(136,0,null,2,0,"br",[],null,null,null,null,null)),(l()(),t.kb(-1,2,[" Brands "])),(l()(),t.Sa(138,0,null,0,3,"amexio-grid-item",[],[[8,"className",0]],null,null,i.oc,i.v)),t.Ra(139,114688,[[9,4]],0,d.A,[],{name:[0,"name"]},null),(l()(),t.Sa(140,0,null,0,1,"amexio-image",[["path","assets/images/grid1.jpg"]],null,null,null,i.Kd,i.rb)),t.Ra(141,114688,null,0,d.fc,[],{path:[0,"path"]},null),(l()(),t.Sa(142,0,null,0,11,"amexio-grid-item",[],[[8,"className",0]],null,null,i.oc,i.v)),t.Ra(143,114688,[[9,4]],0,d.A,[],{name:[0,"name"]},null),(l()(),t.Sa(144,0,null,0,9,"amexio-panel",[],null,null,null,i.Qd,i.xb)),t.Ra(145,245760,null,0,d.qc,[t.F],{expanded:[0,"expanded"],contentAlign:[1,"contentAlign"]},null),(l()(),t.Sa(146,0,null,2,7,"amexio-label",[],null,null,null,i.wd,i.db)),t.Ra(147,114688,null,0,d.Ob,[],{styleClass:[0,"styleClass"]},null),(l()(),t.kb(-1,0,[" OUR "])),(l()(),t.Sa(149,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(150,0,null,0,1,"em",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["COMMUNITY"])),(l()(),t.Sa(152,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.kb(-1,0,[" FEATURING YOU! "])),(l()(),t.Sa(154,0,null,1,48,"amexio-tab",[["title","API Reference"]],null,null,null,i.Bc,i.I)),t.Ra(155,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(l()(),t.Sa(156,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-layout-grid>"]],null,null,null,i.Rd,i.yb)),t.Ra(157,1294336,null,1,d.tc,[t.l,d.Ta,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,12,{columnRef:1}),(l()(),t.Sa(159,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),t.Ra(160,49152,[[12,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,13,{headerTemplate:0}),t.ib(335544320,14,{bodyTemplate:0}),(l()(),t.Sa(163,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),t.Ra(164,49152,[[12,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,15,{headerTemplate:0}),t.ib(335544320,16,{bodyTemplate:0}),(l()(),t.Sa(167,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),t.Ra(168,49152,[[12,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,17,{headerTemplate:0}),t.ib(335544320,18,{bodyTemplate:0}),(l()(),t.Sa(171,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),t.Ra(172,49152,[[12,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,19,{headerTemplate:0}),t.ib(335544320,20,{bodyTemplate:0}),(l()(),t.Sa(175,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),t.Ra(176,49152,[[12,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,21,{headerTemplate:0}),t.ib(335544320,22,{bodyTemplate:0}),(l()(),t.Sa(179,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(180,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-grid-item>"]],null,null,null,i.Rd,i.yb)),t.Ra(181,1294336,null,1,d.tc,[t.l,d.Ta,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,23,{columnRef:1}),(l()(),t.Sa(183,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),t.Ra(184,49152,[[23,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,24,{headerTemplate:0}),t.ib(335544320,25,{bodyTemplate:0}),(l()(),t.Sa(187,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),t.Ra(188,49152,[[23,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,26,{headerTemplate:0}),t.ib(335544320,27,{bodyTemplate:0}),(l()(),t.Sa(191,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),t.Ra(192,49152,[[23,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,28,{headerTemplate:0}),t.ib(335544320,29,{bodyTemplate:0}),(l()(),t.Sa(195,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),t.Ra(196,49152,[[23,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,30,{headerTemplate:0}),t.ib(335544320,31,{bodyTemplate:0}),(l()(),t.Sa(199,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),t.Ra(200,49152,[[23,4]],2,d.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,32,{headerTemplate:0}),t.ib(335544320,33,{bodyTemplate:0}),(l()(),t.Sa(203,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.Bc,i.I)),t.Ra(204,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(l()(),t.Sa(205,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t.Sa(206,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.Dc,i.K)),t.Ra(207,5357568,null,1,d.X,[t.F,t.k],null,null),t.ib(603979776,34,{queryTabs:1}),(l()(),t.Sa(209,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.Bc,i.I)),t.Ra(210,114688,[[34,4]],0,d.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Ja(16777216,null,0,1,null,h)),t.Ra(212,16384,null,0,s.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(213,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.Bc,i.I)),t.Ra(214,114688,[[34,4]],0,d.T,[],{title:[0,"title"]},null),(l()(),t.Ja(16777216,null,0,1,null,p)),t.Ra(216,16384,null,0,s.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(217,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.Bc,i.I)),t.Ra(218,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(l()(),t.Sa(219,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Amexio Sandbox"])),(l()(),t.Sa(221,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-gridlayouttwo?embed=1&file=app/layouts/gridlayout/gridlayouttwo/gridlayout.demo.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,e){var a=e.component;l(e,1,0,"true"),l(e,6,0),l(e,9,0),l(e,13,0),l(e,17,0,"Demo","true"),l(e,19,0),l(e,21,0,"12"),l(e,23,0,!0),l(e,28,0),l(e,31,0),l(e,33,0,"Layout2"),l(e,36,0,"gridheader"),l(e,38,0,!0,"center"),l(e,40,0,"large-9vw-bold"),l(e,44,0,"gridheader1"),l(e,46,0,!0,!0,"center"),l(e,48,0),l(e,52,0),l(e,58,0),l(e,61,0,"gridheader2"),l(e,65,0,"gridright"),l(e,67,0,"Panel",!0),l(e,70,0,!0,!0,"center"),l(e,72,0),l(e,75,0,"gridfooter1"),l(e,77,0,"gridimagelayout"),l(e,80,0,"gridimage1"),l(e,82,0,"Image","assets/images/imggrid.jpg"),l(e,84,0,"gridimage2"),l(e,86,0,"Image","assets/images/imggrid.jpg"),l(e,88,0,"gridimage3"),l(e,90,0,"Image","assets/images/imggrid.jpg"),l(e,92,0,"gridimage4"),l(e,94,0,"Image","assets/images/imggrid.jpg"),l(e,96,0,"gridleft1"),l(e,98,0,"medium-bold"),l(e,102,0,"leftlayout"),l(e,105,0,"leftlayout1"),l(e,107,0,!1,!0),l(e,114,0,"leftlayout2"),l(e,116,0,!1,!0),l(e,123,0,"leftlayout3"),l(e,125,0,!1,!0),l(e,132,0,"leftlayout4"),l(e,134,0,!1,!0),l(e,139,0,"gridmain"),l(e,141,0,"assets/images/grid1.jpg"),l(e,143,0,"gridfooter"),l(e,145,0,!0,"center"),l(e,147,0,"large-24-bold"),l(e,155,0,"API Reference"),l(e,157,0,"Properties<amexio-layout-grid>","assets/apireference/data/gridlayout.json","get","properties",!1,!1),l(e,160,0,"Name","name",!1,"string",20),l(e,164,0,"Version","version",!1,"string",20),l(e,168,0,"Type","type",!1,"string",10),l(e,172,0,"Default","default",!1,"string",10),l(e,176,0,"Description","description",!1,"string",45),l(e,181,0,"Properties<amexio-grid-item>","assets/apireference/data/gridlayout.json","get","childproperties",!1,!1),l(e,184,0,"Name","name",!1,"string",20),l(e,188,0,"Version","version",!1,"string",20),l(e,192,0,"Type","type",!1,"string",10),l(e,196,0,"Default","default",!1,"string",10),l(e,200,0,"Description","description",!1,"string",45),l(e,204,0,"Source"),l(e,207,0),l(e,210,0,"HTML",!0),l(e,212,0,a.htmlCode),l(e,214,0,"Type Script"),l(e,216,0,a.typeScriptCode),l(e,218,0,"Live")},function(l,e){l(e,20,0,t.cb(e,21).role),l(e,35,0,t.cb(e,36).hostname),l(e,43,0,t.cb(e,44).hostname),l(e,60,0,t.cb(e,61).hostname),l(e,64,0,t.cb(e,65).hostname),l(e,74,0,t.cb(e,75).hostname),l(e,79,0,t.cb(e,80).hostname),l(e,83,0,t.cb(e,84).hostname),l(e,87,0,t.cb(e,88).hostname),l(e,91,0,t.cb(e,92).hostname),l(e,95,0,t.cb(e,96).hostname),l(e,104,0,t.cb(e,105).hostname),l(e,113,0,t.cb(e,114).hostname),l(e,122,0,t.cb(e,123).hostname),l(e,131,0,t.cb(e,132).hostname),l(e,138,0,t.cb(e,139).hostname),l(e,142,0,t.cb(e,143).hostname)})}var y=t.Oa("gridlayout-demo-exp2",g,function(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"gridlayout-demo-exp2",[],null,null,null,b,m)),t.Ra(1,49152,null,0,g,[c.c,d.B],null,null)],null,null)},{},{},[]),f=a("gIcY"),x=a("ZYCi");a.d(e,"GridLayoutDemoModuleNgFactory",function(){return S});var S=t.Pa(n,[],function(l){return t.Za([t.ab(512,t.k,t.Ea,[[8,[i.a,u.a,y]],[3,t.k],t.z]),t.ab(4608,s.o,s.n,[t.w,[2,s.x]]),t.ab(4608,f.G,f.G,[]),t.ab(4608,c.i,c.o,[s.d,t.D,c.m]),t.ab(4608,c.p,c.p,[c.i,c.n]),t.ab(5120,c.a,function(l){return[l]},[c.p]),t.ab(4608,c.l,c.l,[]),t.ab(6144,c.j,null,[c.l]),t.ab(4608,c.h,c.h,[c.j]),t.ab(6144,c.b,null,[c.h]),t.ab(4608,c.f,c.k,[c.b,t.s]),t.ab(4608,c.c,c.c,[c.f]),t.ab(4608,d.Ta,d.Ta,[c.c]),t.ab(4608,d.Pa,d.Pa,[]),t.ab(4608,d.Wa,d.Wa,[]),t.ab(4608,d.ob,d.ob,[]),t.ab(4608,d.db,d.db,[t.D]),t.ab(4608,d.B,d.B,[]),t.ab(4608,d.Kb,d.Kb,[]),t.ab(4608,f.f,f.f,[]),t.ab(4608,d.jb,d.jb,[]),t.ab(1073742336,s.c,s.c,[]),t.ab(1073742336,f.D,f.D,[]),t.ab(1073742336,f.l,f.l,[]),t.ab(1073742336,c.e,c.e,[]),t.ab(1073742336,c.d,c.d,[]),t.ab(1073742336,d.l,d.l,[]),t.ab(1073742336,d.o,d.o,[]),t.ab(1073742336,o.b,o.b,[]),t.ab(1073742336,d.Db,d.Db,[]),t.ab(1073742336,d.D,d.D,[]),t.ab(1073742336,d.x,d.x,[]),t.ab(1073742336,d.G,d.G,[]),t.ab(1073742336,d.I,d.I,[]),t.ab(1073742336,f.z,f.z,[]),t.ab(1073742336,d.L,d.L,[]),t.ab(1073742336,d.p,d.p,[]),t.ab(1073742336,d.Aa,d.Aa,[]),t.ab(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),t.ab(1073742336,n,n,[]),t.ab(256,c.m,"XSRF-TOKEN",[]),t.ab(256,c.n,"X-XSRF-TOKEN",[]),t.ab(1024,x.i,function(){return[[{path:"",component:g,pathMatch:"full"}]]},[])])})},U89g:function(l,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i});var t=a("CcnG"),n=(a("d2mR"),a("Ip0R"),t.Qa({encapsulation:2,styles:[],data:{}}));function i(l){return t.mb(0,[],null,null)}},XIHC:function(l,e){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(l,e,a){"use strict";a.d(e,"a",function(){return t}),a.d(e,"b",function(){return n}),a("wZee"),a("XIHC");var t=function(){function l(l,e){this._renderer=l,this._el=e,this.nativeElement=e.nativeElement}return l.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},l}(),n=function(){}},wZee:function(l,e){var a="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},t=function(){var l=/\blang(?:uage)?-([\w-]+)\b/i,e=0,t=a.Prism={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function(l){return l instanceof n?new n(l.type,t.util.encode(l.content),l.alias):"Array"===t.util.type(l)?l.map(t.util.encode):l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).match(/\[object (\w+)\]/)[1]},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++e}),l.__id},clone:function(l,e){var a=t.util.type(l);switch(e=e||{},a){case"Object":if(e[t.util.objId(l)])return e[t.util.objId(l)];var n={};for(var i in e[t.util.objId(l)]=n,l)l.hasOwnProperty(i)&&(n[i]=t.util.clone(l[i],e));return n;case"Array":return e[t.util.objId(l)]?e[t.util.objId(l)]:(n=[],e[t.util.objId(l)]=n,l.forEach(function(l,a){n[a]=t.util.clone(l,e)}),n)}return l}},languages:{extend:function(l,e){var a=t.util.clone(t.languages[l]);for(var n in e)a[n]=e[n];return a},insertBefore:function(l,e,a,n){var i=(n=n||t.languages)[l];if(2==arguments.length){for(var u in a=arguments[1])a.hasOwnProperty(u)&&(i[u]=a[u]);return i}var r={};for(var o in i)if(i.hasOwnProperty(o)){if(o==e)for(var u in a)a.hasOwnProperty(u)&&(r[u]=a[u]);r[o]=i[o]}return t.languages.DFS(t.languages,function(e,a){a===n[l]&&e!=l&&(this[e]=r)}),n[l]=r},DFS:function(l,e,a,n){for(var i in n=n||{},l)l.hasOwnProperty(i)&&(e.call(l,i,l[i],a||i),"Object"!==t.util.type(l[i])||n[t.util.objId(l[i])]?"Array"!==t.util.type(l[i])||n[t.util.objId(l[i])]||(n[t.util.objId(l[i])]=!0,t.languages.DFS(l[i],e,i,n)):(n[t.util.objId(l[i])]=!0,t.languages.DFS(l[i],e,null,n)))}},plugins:{},highlightAll:function(l,e){t.highlightAllUnder(document,l,e)},highlightAllUnder:function(l,e,a){var n={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",n);for(var i,u=n.elements||l.querySelectorAll(n.selector),r=0;i=u[r++];)t.highlightElement(i,!0===e,n.callback)},highlightElement:function(e,n,i){for(var u,r,o=e;o&&!l.test(o.className);)o=o.parentNode;o&&(u=(o.className.match(l)||[,""])[1].toLowerCase(),r=t.languages[u]),e.className=e.className.replace(l,"").replace(/\s+/g," ")+" language-"+u,e.parentNode&&/pre/i.test((o=e.parentNode).nodeName)&&(o.className=o.className.replace(l,"").replace(/\s+/g," ")+" language-"+u);var d={element:e,language:u,grammar:r,code:e.textContent};if(t.hooks.run("before-sanity-check",d),!d.code||!d.grammar)return d.code&&(t.hooks.run("before-highlight",d),d.element.textContent=d.code,t.hooks.run("after-highlight",d)),void t.hooks.run("complete",d);if(t.hooks.run("before-highlight",d),n&&a.Worker){var s=new Worker(t.filename);s.onmessage=function(l){d.highlightedCode=l.data,t.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,i&&i.call(d.element),t.hooks.run("after-highlight",d),t.hooks.run("complete",d)},s.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else d.highlightedCode=t.highlight(d.code,d.grammar,d.language),t.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,i&&i.call(e),t.hooks.run("after-highlight",d),t.hooks.run("complete",d)},highlight:function(l,e,a){var i={code:l,grammar:e,language:a};return t.hooks.run("before-tokenize",i),i.tokens=t.tokenize(i.code,i.grammar),t.hooks.run("after-tokenize",i),n.stringify(t.util.encode(i.tokens),i.language)},matchGrammar:function(l,e,a,n,i,u,r){var o=t.Token;for(var d in a)if(a.hasOwnProperty(d)&&a[d]){if(d==r)return;var s=a[d];s="Array"===t.util.type(s)?s:[s];for(var g=0;g<s.length;++g){var c=s[g],m=c.inside,h=!!c.lookbehind,p=!!c.greedy,b=0,y=c.alias;if(p&&!c.pattern.global){var f=c.pattern.toString().match(/[imuy]*$/)[0];c.pattern=RegExp(c.pattern.source,f+"g")}c=c.pattern||c;for(var x=n,S=i;x<e.length;S+=e[x].length,++x){var k=e[x];if(e.length>l.length)return;if(!(k instanceof o)){if(p&&x!=e.length-1){if(c.lastIndex=S,!(F=c.exec(l)))break;for(var v=F.index+(h?F[1].length:0),w=F.index+F[0].length,R=x,A=S,T=e.length;R<T&&(A<w||!e[R].type&&!e[R-1].greedy);++R)v>=(A+=e[R].length)&&(++x,S=A);if(e[x]instanceof o)continue;C=R-x,k=l.slice(S,A),F.index-=S}else{c.lastIndex=0;var F=c.exec(k),C=1}if(F){h&&(b=F[1]?F[1].length:0),w=(v=F.index+b)+(F=F[0].slice(b)).length;var N=k.slice(0,v),I=k.slice(w),j=[x,C];N&&(++x,S+=N.length,j.push(N));var L=new o(d,m?t.tokenize(F,m):F,y,F,p);if(j.push(L),I&&j.push(I),Array.prototype.splice.apply(e,j),1!=C&&t.matchGrammar(l,e,a,x,S,!0,d),u)break}else if(u)break}}}}},tokenize:function(l,e,a){var n=[l],i=e.rest;if(i){for(var u in i)e[u]=i[u];delete e.rest}return t.matchGrammar(l,n,e,0,0,!1),n},hooks:{all:{},add:function(l,e){var a=t.hooks.all;a[l]=a[l]||[],a[l].push(e)},run:function(l,e){var a=t.hooks.all[l];if(a&&a.length)for(var n,i=0;n=a[i++];)n(e)}}},n=t.Token=function(l,e,a,t,n){this.type=l,this.content=e,this.alias=a,this.length=0|(t||"").length,this.greedy=!!n};if(n.stringify=function(l,e,a){if("string"==typeof l)return l;if("Array"===t.util.type(l))return l.map(function(a){return n.stringify(a,e,l)}).join("");var i={type:l.type,content:n.stringify(l.content,e,a),tag:"span",classes:["token",l.type],attributes:{},language:e,parent:a};if(l.alias){var u="Array"===t.util.type(l.alias)?l.alias:[l.alias];Array.prototype.push.apply(i.classes,u)}t.hooks.run("wrap",i);var r=Object.keys(i.attributes).map(function(l){return l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(r?" "+r:"")+">"+i.content+"</"+i.tag+">"},!a.document)return a.addEventListener?(t.disableWorkerMessageHandler||a.addEventListener("message",function(l){var e=JSON.parse(l.data),n=e.language,i=e.immediateClose;a.postMessage(t.highlight(e.code,t.languages[n],n)),i&&a.close()},!1),a.Prism):a.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(t.filename=i.src,t.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(t.highlightAll):window.setTimeout(t.highlightAll,16):document.addEventListener("DOMContentLoaded",t.highlightAll))),a.Prism}();void 0!==l&&l.exports&&(l.exports=t),"undefined"!=typeof global&&(global.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(l){"entity"===l.type&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),t.languages.xml=t.languages.markup,t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup&&(t.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:t.languages.css,alias:"language-css",greedy:!0}}),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},t.languages.markup.tag)),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),t.languages.javascript["template-string"].inside.interpolation.inside.rest=t.languages.javascript,t.languages.markup&&t.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:t.languages.javascript,alias:"language-javascript",greedy:!0}}),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(e){for(var a,n=e.getAttribute("data-src"),i=e,u=/\blang(?:uage)?-([\w-]+)\b/i;i&&!u.test(i.className);)i=i.parentNode;if(i&&(a=(e.className.match(u)||[,""])[1]),!a){var r=(n.match(/\.(\w+)$/)||[,""])[1];a=l[r]||r}var o=document.createElement("code");o.className="language-"+a,e.textContent="",o.textContent="Loading\u2026",e.appendChild(o);var d=new XMLHttpRequest;d.open("GET",n,!0),d.onreadystatechange=function(){4==d.readyState&&(d.status<400&&d.responseText?(o.textContent=d.responseText,t.highlightElement(o)):o.textContent=d.status>=400?"\u2716 Error "+d.status+" while fetching file: "+d.statusText:"\u2716 Error: File does not exist or is empty")},d.send(null)}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(l){var e=l.element.parentNode;if(e&&/pre/i.test(e.nodeName)&&e.hasAttribute("data-src")&&e.hasAttribute("data-download-link")){var a=e.getAttribute("data-src"),t=document.createElement("a");return t.textContent=e.getAttribute("data-download-link-label")||"Download",t.setAttribute("download",""),t.href=a,t}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);