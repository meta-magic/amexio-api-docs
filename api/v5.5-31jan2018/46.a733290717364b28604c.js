(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{Arvt:function(e,l,t){"use strict";t.r(l);var a=t("CcnG"),n=function(){},r=t("gTgE"),i=t("pMnS"),u=t("U89g"),o=t("d2mR"),d=t("O4vx"),s=t("Ip0R"),c=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode(),this.treeData={data:[{text:"Web App",expand:!0,children:[{text:"app",expand:!0,children:[{leaf:!0,text:"Application.js"}]},{text:"button",expand:!0,children:[{leaf:!0,text:"Button.js"},{leaf:!0,text:"Cycle.js"},{leaf:!0,text:"Split.js"}]},{text:"container",expand:!0,children:[{leaf:!0,text:"ButtonGroup.js"},{leaf:!0,text:"Container.js"},{leaf:!0,text:"Viewport.js",expand:!0,children:[],lazy:{"http-url":"data/treeview.json","http-method":"get"}}]},{text:"core",expand:!0,children:[{text:"dom",expand:!0,children:[{leaf:!0,text:"Element.form.js"},{leaf:!0,text:"Element.static-more.js"}]}]}]}]},this.treeLocalData={data:[{text:"Web App",expand:!0,children:[{text:"app",expand:!0,children:[{leaf:!0,text:"Application.js"}]},{text:"button",expand:!0,children:[{leaf:!0,text:"Button.js"},{leaf:!0,text:"Cycle.js"},{leaf:!0,text:"Split.js"}]},{text:"container",expand:!0,children:[{leaf:!0,text:"ButtonGroup.js"},{leaf:!0,text:"Container.js"},{leaf:!0,text:"Viewport.js",expand:!0,children:[],lazy:{"http-url":"data/treeview.json","http-method":"get"}}]},{text:"core",expand:!0,children:[{text:"dom",expand:!0,children:[{leaf:!0,text:"Element.form.js"},{leaf:!0,text:"Element.static-more.js"}]}]}]}]},this.treeLocalData1={data:[{text:"Web App",expand:!0,children:[{text:"Grid",expand:!0,children:[{leaf:!0,text:"Column.js"},{leaf:!0,text:"Boolean.js"},{leaf:!0,text:"Check.js"}]},{text:"Layout",expand:!0,children:[{text:"Component",expand:!0,children:[{leaf:!0,text:"Auto.js"},{leaf:!0,text:"FieldSet.js"},{leaf:!0,text:"Dock.js"}]}]},{text:"Tree",expand:!0,children:[{text:"Plugin",expand:!0,children:[{leaf:!0,text:"TreeViewDragDrop.js"}]}]},{text:"Panel",expand:!0,children:[{leaf:!0,text:"Header.js"}]}]}]}}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,t=this;this.http.get("assets/data/code/data/tree/dragdroptree/dragdroptree.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){t.htmlCode=e}),this.http.get("assets/data/code/data/tree/dragdroptree/dragdroptree.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){t.typeScriptCode=l})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.getDropData=function(e){this.treeRef.removeNode(e)},e.prototype.getDropData1=function(e){this.treeRef1.removeNode(e)},e.prototype.drag=function(e){e.event.dataTransfer.setData("dragdata",JSON.stringify(e.data))},e.prototype.dragOver=function(e){e.preventDefault()},e.prototype.drop=function(e){e.preventDefault(),this.selectedData=JSON.parse(e.dataTransfer.getData("dragdata"))},e}(),p=t("t/Na"),g=a.Qa({encapsulation:2,styles:[],data:{}});function m(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function h(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function b(e){return a.mb(0,[a.ib(402653184,1,{treeRef:0}),a.ib(402653184,2,{treeRef1:0}),(e()(),a.Sa(2,0,null,null,190,"amexio-card",[["header","true"]],null,null,null,r.ec,r.k)),a.Ra(3,7585792,null,3,d.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,3,{amexioHeader:1}),a.ib(603979776,4,{amexioBody:1}),a.ib(603979776,5,{amexioFooter:1}),(e()(),a.Sa(7,0,null,0,2,"amexio-header",[],null,null,null,r.qc,r.w)),a.Ra(8,1163264,[[3,4]],0,d.C,[],null,null),(e()(),a.kb(-1,0,[" Tree with Drag Drop Functionality "])),(e()(),a.Sa(10,0,null,1,182,"amexio-body",[],null,null,null,r.Yb,r.e)),a.Ra(11,1163264,[[4,4]],0,d.d,[],null,null),(e()(),a.Sa(12,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),a.kb(-1,null,["A Expandable Tree component which create Tree View based on standard datasource attached and having functionality of drag and drop (within tree as well as across tree)"])),(e()(),a.Sa(14,0,null,0,178,"amexio-tab-view",[],null,null,null,r.Bc,r.H)),a.Ra(15,5488640,null,2,d.S,[a.F,a.k,a.F],null,null),a.ib(603979776,6,{queryTabs:1}),a.ib(603979776,7,{queryAction:1}),(e()(),a.Sa(18,0,null,1,99,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,r.Cc,r.I)),a.Ra(19,114688,[[6,4]],0,d.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Sa(20,0,null,0,97,"amexio-row",[],null,null,null,r.xc,r.D)),a.Ra(21,1163264,null,0,d.O,[],null,null),(e()(),a.Sa(22,0,null,0,14,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,r.gc,r.m)),a.Ra(23,114688,null,0,d.m,[],{size:[0,"size"]},null),(e()(),a.Sa(24,0,null,0,12,"amexio-card",[],null,null,null,r.ec,r.k)),a.Ra(25,7585792,null,3,d.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,8,{amexioHeader:1}),a.ib(603979776,9,{amexioBody:1}),a.ib(603979776,10,{amexioFooter:1}),(e()(),a.Sa(29,0,null,0,2,"amexio-header",[],null,null,null,r.qc,r.w)),a.Ra(30,1163264,[[8,4]],0,d.C,[],null,null),(e()(),a.kb(-1,0,[" Drag Drop Functionality within Tree "])),(e()(),a.Sa(32,0,null,1,4,"amexio-body",[],null,null,null,r.Yb,r.e)),a.Ra(33,1163264,[[9,4]],0,d.d,[],null,null),(e()(),a.Sa(34,0,null,0,2,"amexio-treeview",[],null,null,null,r.Dc,r.J)),a.Ra(35,4440064,null,1,d.W,[a.l,d.Ta,a.i,a.F],{data:[0,"data"],datareader:[1,"datareader"],enabledrag:[2,"enabledrag"],enabledrop:[3,"enabledrop"]},null),a.ib(335544320,11,{parentTmp:0}),(e()(),a.Sa(37,0,null,0,43,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,r.gc,r.m)),a.Ra(38,114688,null,0,d.m,[],{size:[0,"size"]},null),(e()(),a.Sa(39,0,null,0,41,"amexio-card",[],null,null,null,r.ec,r.k)),a.Ra(40,7585792,null,3,d.j,[a.F],{header:[0,"header"],footer:[1,"footer"],footeralign:[2,"footeralign"]},null),a.ib(603979776,12,{amexioHeader:1}),a.ib(603979776,13,{amexioBody:1}),a.ib(603979776,14,{amexioFooter:1}),(e()(),a.Sa(44,0,null,0,2,"amexio-header",[],null,null,null,r.qc,r.w)),a.Ra(45,1163264,[[12,4]],0,d.C,[],null,null),(e()(),a.kb(-1,0,[" Drag Drop Functionality across Tree "])),(e()(),a.Sa(47,0,null,1,33,"amexio-body",[],null,null,null,r.Yb,r.e)),a.Ra(48,1163264,[[13,4]],0,d.d,[],null,null),(e()(),a.Sa(49,0,null,0,31,"amexio-row",[],null,null,null,r.xc,r.D)),a.Ra(50,1163264,null,0,d.O,[],null,null),(e()(),a.Sa(51,0,null,0,14,"amexio-column",[],[[1,"class",0]],null,null,r.gc,r.m)),a.Ra(52,114688,null,0,d.m,[],{size:[0,"size"]},null),(e()(),a.Sa(53,0,null,0,12,"amexio-card",[],null,null,null,r.ec,r.k)),a.Ra(54,7585792,null,3,d.j,[a.F],{header:[0,"header"],footer:[1,"footer"],footeralign:[2,"footeralign"]},null),a.ib(603979776,15,{amexioHeader:1}),a.ib(603979776,16,{amexioBody:1}),a.ib(603979776,17,{amexioFooter:1}),(e()(),a.Sa(58,0,null,0,2,"amexio-header",[],null,null,null,r.qc,r.w)),a.Ra(59,1163264,[[15,4]],0,d.C,[],null,null),(e()(),a.kb(-1,0,[" Tree 1 "])),(e()(),a.Sa(61,0,null,1,4,"amexio-body",[],null,null,null,r.Yb,r.e)),a.Ra(62,1163264,[[16,4]],0,d.d,[],null,null),(e()(),a.Sa(63,0,null,0,2,"amexio-treeview",[],null,[[null,"onDrop"]],function(e,l,t){var a=!0;return"onDrop"===l&&(a=!1!==e.component.getDropData1(t)&&a),a},r.Dc,r.J)),a.Ra(64,4440064,[[1,4],["tree",4]],1,d.W,[a.l,d.Ta,a.i,a.F],{data:[0,"data"],datareader:[1,"datareader"],enabledrag:[2,"enabledrag"],enabledrop:[3,"enabledrop"],acrosstree:[4,"acrosstree"]},{onDrop:"onDrop"}),a.ib(335544320,18,{parentTmp:0}),(e()(),a.Sa(66,0,null,0,14,"amexio-column",[],[[1,"class",0]],null,null,r.gc,r.m)),a.Ra(67,114688,null,0,d.m,[],{size:[0,"size"]},null),(e()(),a.Sa(68,0,null,0,12,"amexio-card",[],null,null,null,r.ec,r.k)),a.Ra(69,7585792,null,3,d.j,[a.F],{header:[0,"header"],footer:[1,"footer"],footeralign:[2,"footeralign"]},null),a.ib(603979776,19,{amexioHeader:1}),a.ib(603979776,20,{amexioBody:1}),a.ib(603979776,21,{amexioFooter:1}),(e()(),a.Sa(73,0,null,0,2,"amexio-header",[],null,null,null,r.qc,r.w)),a.Ra(74,1163264,[[19,4]],0,d.C,[],null,null),(e()(),a.kb(-1,0,[" Tree 2 "])),(e()(),a.Sa(76,0,null,1,4,"amexio-body",[],null,null,null,r.Yb,r.e)),a.Ra(77,1163264,[[20,4]],0,d.d,[],null,null),(e()(),a.Sa(78,0,null,0,2,"amexio-treeview",[],null,[[null,"onDrop"]],function(e,l,t){var a=!0;return"onDrop"===l&&(a=!1!==e.component.getDropData(t)&&a),a},r.Dc,r.J)),a.Ra(79,4440064,[[2,4],["tree1",4]],1,d.W,[a.l,d.Ta,a.i,a.F],{data:[0,"data"],datareader:[1,"datareader"],enabledrag:[2,"enabledrag"],enabledrop:[3,"enabledrop"],acrosstree:[4,"acrosstree"]},{onDrop:"onDrop"}),a.ib(335544320,22,{parentTmp:0}),(e()(),a.Sa(81,0,null,0,36,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,r.gc,r.m)),a.Ra(82,114688,null,0,d.m,[],{size:[0,"size"]},null),(e()(),a.Sa(83,0,null,0,34,"amexio-card",[],null,null,null,r.ec,r.k)),a.Ra(84,7585792,null,3,d.j,[a.F],{header:[0,"header"],footer:[1,"footer"],footeralign:[2,"footeralign"]},null),a.ib(603979776,23,{amexioHeader:1}),a.ib(603979776,24,{amexioBody:1}),a.ib(603979776,25,{amexioFooter:1}),(e()(),a.Sa(88,0,null,0,2,"amexio-header",[],null,null,null,r.qc,r.w)),a.Ra(89,1163264,[[23,4]],0,d.C,[],null,null),(e()(),a.kb(-1,0,[" Drag and Drop: Tree to Panel "])),(e()(),a.Sa(91,0,null,1,26,"amexio-body",[],null,null,null,r.Yb,r.e)),a.Ra(92,1163264,[[24,4]],0,d.d,[],null,null),(e()(),a.Sa(93,0,null,0,24,"amexio-row",[],null,null,null,r.xc,r.D)),a.Ra(94,1163264,null,0,d.O,[],null,null),(e()(),a.Sa(95,0,null,0,14,"amexio-column",[],[[1,"class",0]],null,null,r.gc,r.m)),a.Ra(96,114688,null,0,d.m,[],{size:[0,"size"]},null),(e()(),a.Sa(97,0,null,0,12,"amexio-card",[],null,null,null,r.ec,r.k)),a.Ra(98,7585792,null,3,d.j,[a.F],{header:[0,"header"],footer:[1,"footer"],footeralign:[2,"footeralign"]},null),a.ib(603979776,26,{amexioHeader:1}),a.ib(603979776,27,{amexioBody:1}),a.ib(603979776,28,{amexioFooter:1}),(e()(),a.Sa(102,0,null,0,2,"amexio-header",[],null,null,null,r.qc,r.w)),a.Ra(103,1163264,[[26,4]],0,d.C,[],null,null),(e()(),a.kb(-1,0,[" Tree 1 "])),(e()(),a.Sa(105,0,null,1,4,"amexio-body",[],null,null,null,r.Yb,r.e)),a.Ra(106,1163264,[[27,4]],0,d.d,[],null,null),(e()(),a.Sa(107,0,null,0,2,"amexio-treeview",[],null,[[null,"onDrag"]],function(e,l,t){var a=!0;return"onDrag"===l&&(a=!1!==e.component.drag(t)&&a),a},r.Dc,r.J)),a.Ra(108,4440064,null,1,d.W,[a.l,d.Ta,a.i,a.F],{data:[0,"data"],datareader:[1,"datareader"],enabledrag:[2,"enabledrag"],enabledrop:[3,"enabledrop"]},{onDrag:"onDrag"}),a.ib(335544320,29,{parentTmp:0}),(e()(),a.Sa(110,0,null,0,7,"amexio-column",[],[[1,"class",0]],null,null,r.gc,r.m)),a.Ra(111,114688,null,0,d.m,[],{size:[0,"size"]},null),(e()(),a.Sa(112,0,null,0,5,"amexio-panel",[],null,[[null,"dragover"],[null,"drop"]],function(e,l,t){var a=!0,n=e.component;return"dragover"===l&&(a=!1!==n.dragOver(t)&&a),"drop"===l&&(a=!1!==n.drop(t)&&a),a},r.Sd,r.yb)),a.Ra(113,245760,null,0,d.vc,[a.F],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"]},null),(e()(),a.Sa(114,0,null,2,3,"pre",[],null,null,null,null,null)),(e()(),a.Sa(115,0,null,null,2,"code",[],null,null,null,null,null)),(e()(),a.kb(116,null,["",""])),a.eb(0,s.g,[]),(e()(),a.Sa(118,0,null,1,55,"amexio-tab",[["title","API Reference"]],null,null,null,r.Cc,r.I)),a.Ra(119,114688,[[6,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),a.Sa(120,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-treeview>"]],null,null,null,r.Td,r.zb)),a.Ra(121,1294336,null,1,d.yc,[a.l,d.Ta,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,30,{columnRef:1}),(e()(),a.Sa(123,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Ud,r.Ab)),a.Ra(124,49152,[[30,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,31,{headerTemplate:0}),a.ib(335544320,32,{bodyTemplate:0}),(e()(),a.Sa(127,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Ud,r.Ab)),a.Ra(128,49152,[[30,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,33,{headerTemplate:0}),a.ib(335544320,34,{bodyTemplate:0}),(e()(),a.Sa(131,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Ud,r.Ab)),a.Ra(132,49152,[[30,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,35,{headerTemplate:0}),a.ib(335544320,36,{bodyTemplate:0}),(e()(),a.Sa(135,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Ud,r.Ab)),a.Ra(136,49152,[[30,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,37,{headerTemplate:0}),a.ib(335544320,38,{bodyTemplate:0}),(e()(),a.Sa(139,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Ud,r.Ab)),a.Ra(140,49152,[[30,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,39,{headerTemplate:0}),a.ib(335544320,40,{bodyTemplate:0}),(e()(),a.Sa(143,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),a.Sa(144,0,null,0,14,"amexio-datagrid",[["title","Events"]],null,null,null,r.Td,r.zb)),a.Ra(145,1294336,null,1,d.yc,[a.l,d.Ta,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),a.ib(603979776,41,{columnRef:1}),(e()(),a.Sa(147,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Ud,r.Ab)),a.Ra(148,49152,[[41,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,42,{headerTemplate:0}),a.ib(335544320,43,{bodyTemplate:0}),(e()(),a.Sa(151,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Ud,r.Ab)),a.Ra(152,49152,[[41,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,44,{headerTemplate:0}),a.ib(335544320,45,{bodyTemplate:0}),(e()(),a.Sa(155,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Ud,r.Ab)),a.Ra(156,49152,[[41,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,46,{headerTemplate:0}),a.ib(335544320,47,{bodyTemplate:0}),(e()(),a.Sa(159,0,null,0,14,"amexio-datagrid",[["title","Methods"]],null,null,null,r.Td,r.zb)),a.Ra(160,1294336,null,1,d.yc,[a.l,d.Ta,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),a.ib(603979776,48,{columnRef:1}),(e()(),a.Sa(162,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Ud,r.Ab)),a.Ra(163,49152,[[48,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,49,{headerTemplate:0}),a.ib(335544320,50,{bodyTemplate:0}),(e()(),a.Sa(166,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Ud,r.Ab)),a.Ra(167,49152,[[48,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,51,{headerTemplate:0}),a.ib(335544320,52,{bodyTemplate:0}),(e()(),a.Sa(170,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Ud,r.Ab)),a.Ra(171,49152,[[48,4]],2,d.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,53,{headerTemplate:0}),a.ib(335544320,54,{bodyTemplate:0}),(e()(),a.Sa(174,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,r.Cc,r.I)),a.Ra(175,114688,[[6,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),a.Sa(176,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),a.Sa(177,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,r.Ec,r.K)),a.Ra(178,5357568,null,1,d.X,[a.F,a.k],null,null),a.ib(603979776,55,{queryTabs:1}),(e()(),a.Sa(180,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,r.Cc,r.I)),a.Ra(181,114688,[[55,4]],0,d.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Ja(16777216,null,0,1,null,m)),a.Ra(183,16384,null,0,s.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(184,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,r.Cc,r.I)),a.Ra(185,114688,[[55,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),a.Ja(16777216,null,0,1,null,h)),a.Ra(187,16384,null,0,s.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(188,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,r.Cc,r.I)),a.Ra(189,114688,[[6,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),a.Sa(190,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),a.kb(-1,null,["Amexio Sandbox"])),(e()(),a.Sa(192,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-dragdrop?embed=1&file=app/tree/acrosstree/acrosstree.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,l){var t=l.component;e(l,3,0,"true"),e(l,8,0),e(l,11,0),e(l,15,0),e(l,19,0,"Demo","true"),e(l,21,0),e(l,23,0,"12"),e(l,25,0,!0),e(l,30,0),e(l,33,0),e(l,35,0,t.treeData,"data",!0,!0),e(l,38,0,"12"),e(l,40,0,!0,!1,"right"),e(l,45,0),e(l,48,0),e(l,50,0),e(l,52,0,6),e(l,54,0,!0,!1,"right"),e(l,59,0),e(l,62,0),e(l,64,0,t.treeLocalData,"data",!0,!0,!0),e(l,67,0,6),e(l,69,0,!0,!1,"right"),e(l,74,0),e(l,77,0),e(l,79,0,t.treeLocalData1,"data",!0,!0,!0),e(l,82,0,"12"),e(l,84,0,!0,!1,"right"),e(l,89,0),e(l,92,0),e(l,94,0),e(l,96,0,6),e(l,98,0,!0,!1,"right"),e(l,103,0),e(l,106,0),e(l,108,0,t.treeLocalData,"data",!0,!1),e(l,111,0,6),e(l,113,0,"Panel",!0,!0),e(l,119,0,"API Reference"),e(l,121,0,"Properties<amexio-treeview>","assets/apireference/data/tree.json","get","properties",!1,!1),e(l,124,0,"Name","name",!1,"string",24),e(l,128,0,"Version","version",!1,"string",20),e(l,132,0,"Type","type",!1,"string",10),e(l,136,0,"Default","default",!1,"string",10),e(l,140,0,"Description","description",!1,"string",45),e(l,145,0,"Events","assets/apireference/data/tree.json","get","events",!1),e(l,148,0,"Name","name",!1,"string",20),e(l,152,0,"Version","version",!1,"string",15),e(l,156,0,"Description","description",!1,"string",65),e(l,160,0,"Methods","assets/apireference/data/tree.json","get","methods",!1),e(l,163,0,"Name","name",!1,"string",20),e(l,167,0,"Version","version",!1,"string",15),e(l,171,0,"Description","description",!1,"string",65),e(l,175,0,"Source"),e(l,178,0),e(l,181,0,"HTML",!0),e(l,183,0,t.htmlCode),e(l,185,0,"Type Script"),e(l,187,0,t.typeScriptCode),e(l,189,0,"Live")},function(e,l){var t=l.component;e(l,22,0,a.cb(l,23).role),e(l,37,0,a.cb(l,38).role),e(l,51,0,a.cb(l,52).role),e(l,66,0,a.cb(l,67).role),e(l,81,0,a.cb(l,82).role),e(l,95,0,a.cb(l,96).role),e(l,110,0,a.cb(l,111).role),e(l,116,0,a.lb(l,116,0,a.cb(l,117).transform(t.selectedData)))})}var f=a.Oa("dragdroptree-demo",c,function(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,1,"dragdroptree-demo",[],null,null,null,b,g)),a.Ra(1,49152,null,0,c,[p.c],null,null)],null,null)},{},{},[]),x=t("gIcY"),y=t("ZYCi");t.d(l,"DragDropTreeDemoModuleNgFactory",function(){return v});var v=a.Pa(n,[],function(e){return a.Za([a.ab(512,a.k,a.Ea,[[8,[r.a,i.a,f]],[3,a.k],a.z]),a.ab(4608,s.o,s.n,[a.w,[2,s.x]]),a.ab(4608,x.G,x.G,[]),a.ab(4608,p.i,p.o,[s.d,a.D,p.m]),a.ab(4608,p.p,p.p,[p.i,p.n]),a.ab(5120,p.a,function(e){return[e]},[p.p]),a.ab(4608,p.l,p.l,[]),a.ab(6144,p.j,null,[p.l]),a.ab(4608,p.h,p.h,[p.j]),a.ab(6144,p.b,null,[p.h]),a.ab(4608,p.f,p.k,[p.b,a.s]),a.ab(4608,p.c,p.c,[p.f]),a.ab(4608,d.Ta,d.Ta,[p.c]),a.ab(4608,d.ob,d.ob,[]),a.ab(4608,d.db,d.db,[a.D]),a.ab(4608,d.B,d.B,[]),a.ab(4608,d.Lb,d.Lb,[]),a.ab(4608,d.xb,d.xb,[]),a.ab(4608,x.f,x.f,[]),a.ab(4608,d.jb,d.jb,[]),a.ab(1073742336,s.c,s.c,[]),a.ab(1073742336,x.D,x.D,[]),a.ab(1073742336,x.l,x.l,[]),a.ab(1073742336,p.e,p.e,[]),a.ab(1073742336,p.d,p.d,[]),a.ab(1073742336,o.b,o.b,[]),a.ab(1073742336,d.Eb,d.Eb,[]),a.ab(1073742336,d.D,d.D,[]),a.ab(1073742336,d.x,d.x,[]),a.ab(1073742336,d.G,d.G,[]),a.ab(1073742336,d.I,d.I,[]),a.ab(1073742336,x.z,x.z,[]),a.ab(1073742336,d.L,d.L,[]),a.ab(1073742336,d.p,d.p,[]),a.ab(1073742336,d.Aa,d.Aa,[]),a.ab(1073742336,y.n,y.n,[[2,y.t],[2,y.m]]),a.ab(1073742336,n,n,[]),a.ab(256,p.m,"XSRF-TOKEN",[]),a.ab(256,p.n,"X-XSRF-TOKEN",[]),a.ab(1024,y.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})},U89g:function(e,l,t){"use strict";t.d(l,"a",function(){return n}),t.d(l,"b",function(){return r});var a=t("CcnG"),n=(t("d2mR"),t("Ip0R"),a.Qa({encapsulation:2,styles:[],data:{}}));function r(e){return a.mb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,l,t){"use strict";t.d(l,"a",function(){return a}),t.d(l,"b",function(){return n}),t("wZee"),t("XIHC");var a=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),n=function(){}},wZee:function(e,l){var t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,a=t.Prism={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof n?new n(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var t=a.util.type(e);switch(l=l||{},t){case"Object":if(l[a.util.objId(e)])return l[a.util.objId(e)];var n={};for(var r in l[a.util.objId(e)]=n,e)e.hasOwnProperty(r)&&(n[r]=a.util.clone(e[r],l));return n;case"Array":return l[a.util.objId(e)]?l[a.util.objId(e)]:(n=[],l[a.util.objId(e)]=n,e.forEach(function(e,t){n[t]=a.util.clone(e,l)}),n)}return e}},languages:{extend:function(e,l){var t=a.util.clone(a.languages[e]);for(var n in l)t[n]=l[n];return t},insertBefore:function(e,l,t,n){var r=(n=n||a.languages)[e];if(2==arguments.length){for(var i in t=arguments[1])t.hasOwnProperty(i)&&(r[i]=t[i]);return r}var u={};for(var o in r)if(r.hasOwnProperty(o)){if(o==l)for(var i in t)t.hasOwnProperty(i)&&(u[i]=t[i]);u[o]=r[o]}return a.languages.DFS(a.languages,function(l,t){t===n[e]&&l!=e&&(this[l]=u)}),n[e]=u},DFS:function(e,l,t,n){for(var r in n=n||{},e)e.hasOwnProperty(r)&&(l.call(e,r,e[r],t||r),"Object"!==a.util.type(e[r])||n[a.util.objId(e[r])]?"Array"!==a.util.type(e[r])||n[a.util.objId(e[r])]||(n[a.util.objId(e[r])]=!0,a.languages.DFS(e[r],l,r,n)):(n[a.util.objId(e[r])]=!0,a.languages.DFS(e[r],l,null,n)))}},plugins:{},highlightAll:function(e,l){a.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n);for(var r,i=n.elements||e.querySelectorAll(n.selector),u=0;r=i[u++];)a.highlightElement(r,!0===l,n.callback)},highlightElement:function(l,n,r){for(var i,u,o=l;o&&!e.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(e)||[,""])[1].toLowerCase(),u=a.languages[i]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,l.parentNode&&/pre/i.test((o=l.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var d={element:l,language:i,grammar:u,code:l.textContent};if(a.hooks.run("before-sanity-check",d),!d.code||!d.grammar)return d.code&&(a.hooks.run("before-highlight",d),d.element.textContent=d.code,a.hooks.run("after-highlight",d)),void a.hooks.run("complete",d);if(a.hooks.run("before-highlight",d),n&&t.Worker){var s=new Worker(a.filename);s.onmessage=function(e){d.highlightedCode=e.data,a.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,r&&r.call(d.element),a.hooks.run("after-highlight",d),a.hooks.run("complete",d)},s.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else d.highlightedCode=a.highlight(d.code,d.grammar,d.language),a.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,r&&r.call(l),a.hooks.run("after-highlight",d),a.hooks.run("complete",d)},highlight:function(e,l,t){var r={code:e,grammar:l,language:t};return a.hooks.run("before-tokenize",r),r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),n.stringify(a.util.encode(r.tokens),r.language)},matchGrammar:function(e,l,t,n,r,i,u){var o=a.Token;for(var d in t)if(t.hasOwnProperty(d)&&t[d]){if(d==u)return;var s=t[d];s="Array"===a.util.type(s)?s:[s];for(var c=0;c<s.length;++c){var p=s[c],g=p.inside,m=!!p.lookbehind,h=!!p.greedy,b=0,f=p.alias;if(h&&!p.pattern.global){var x=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,x+"g")}p=p.pattern||p;for(var y=n,v=r;y<l.length;v+=l[y].length,++y){var w=l[y];if(l.length>e.length)return;if(!(w instanceof o)){if(h&&y!=l.length-1){if(p.lastIndex=v,!(D=p.exec(e)))break;for(var S=D.index+(m?D[1].length:0),k=D.index+D[0].length,T=y,R=v,F=l.length;T<F&&(R<k||!l[T].type&&!l[T-1].greedy);++T)S>=(R+=l[T].length)&&(++y,v=R);if(l[y]instanceof o)continue;j=T-y,w=e.slice(v,R),D.index-=v}else{p.lastIndex=0;var D=p.exec(w),j=1}if(D){m&&(b=D[1]?D[1].length:0),k=(S=D.index+b)+(D=D[0].slice(b)).length;var A=w.slice(0,S),C=w.slice(k),z=[y,j];A&&(++y,v+=A.length,z.push(A));var N=new o(d,g?a.tokenize(D,g):D,f,D,h);if(z.push(N),C&&z.push(C),Array.prototype.splice.apply(l,z),1!=j&&a.matchGrammar(e,l,t,y,v,!0,d),i)break}else if(i)break}}}}},tokenize:function(e,l,t){var n=[e],r=l.rest;if(r){for(var i in r)l[i]=r[i];delete l.rest}return a.matchGrammar(e,n,l,0,0,!1),n},hooks:{all:{},add:function(e,l){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(l)},run:function(e,l){var t=a.hooks.all[e];if(t&&t.length)for(var n,r=0;n=t[r++];)n(l)}}},n=a.Token=function(e,l,t,a,n){this.type=e,this.content=l,this.alias=t,this.length=0|(a||"").length,this.greedy=!!n};if(n.stringify=function(e,l,t){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(t){return n.stringify(t,l,e)}).join("");var r={type:e.type,content:n.stringify(e.content,l,t),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:t};if(e.alias){var i="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,i)}a.hooks.run("wrap",r);var u=Object.keys(r.attributes).map(function(e){return e+'="'+(r.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+(u?" "+u:"")+">"+r.content+"</"+r.tag+">"},!t.document)return t.addEventListener?(a.disableWorkerMessageHandler||t.addEventListener("message",function(e){var l=JSON.parse(e.data),n=l.language,r=l.immediateClose;t.postMessage(a.highlight(l.code,a.languages[n],n)),r&&t.close()},!1),t.Prism):t.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(a.filename=r.src,a.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),t.Prism}();void 0!==e&&e.exports&&(e.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),a.languages.javascript["template-string"].inside.interpolation.inside.rest=a.languages.javascript,a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var t,n=l.getAttribute("data-src"),r=l,i=/\blang(?:uage)?-([\w-]+)\b/i;r&&!i.test(r.className);)r=r.parentNode;if(r&&(t=(l.className.match(i)||[,""])[1]),!t){var u=(n.match(/\.(\w+)$/)||[,""])[1];t=e[u]||u}var o=document.createElement("code");o.className="language-"+t,l.textContent="",o.textContent="Loading\u2026",l.appendChild(o);var d=new XMLHttpRequest;d.open("GET",n,!0),d.onreadystatechange=function(){4==d.readyState&&(d.status<400&&d.responseText?(o.textContent=d.responseText,a.highlightElement(o)):o.textContent=d.status>=400?"\u2716 Error "+d.status+" while fetching file: "+d.statusText:"\u2716 Error: File does not exist or is empty")},d.send(null)}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var l=e.element.parentNode;if(l&&/pre/i.test(l.nodeName)&&l.hasAttribute("data-src")&&l.hasAttribute("data-download-link")){var t=l.getAttribute("data-src"),a=document.createElement("a");return a.textContent=l.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=t,a}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);