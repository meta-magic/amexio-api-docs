(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{RZgD:function(l,e,t){"use strict";t.r(e);var a=t("CcnG"),n=function(){},u=t("gTgE"),i=t("pMnS"),d=t("U89g"),o=t("d2mR"),r=t("O4vx"),b=t("Ip0R"),s=function(){function l(l){this.http=l,this.rightclickdata=[{text:"Back",icon:"fa fa-arrow-left",disabled:!0},{text:"Reload",icon:"fa fa-refresh",seperator:!1},{text:"Save",icon:"fa fa-save"}],this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,e,t=this;this.http.get("assets/data/code/layout/tab/contextmenutab/tab.html").subscribe(function(e){l=e.text()},function(l){},function(){t.htmlCode=l}),this.http.get("assets/data/code/layout/tab/contextmenutab/tab.text").subscribe(function(l){e=l.text()},function(l){},function(){t.typeScriptCode=e})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),c=t("sE5F"),m=a.Qa({encapsulation:2,styles:[],data:{}});function p(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.htmlCode,"html")},null)}function h(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.typeScriptCode,"typescript")},null)}function x(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,167,"amexio-card",[["header","true"]],null,null,null,u.dc,u.k)),a.Ra(1,7585792,null,3,r.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(l()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.pc,u.w)),a.Ra(6,114688,[[1,4]],0,r.C,[],null,null),(l()(),a.kb(-1,0,[" Tab with Context Menu "])),(l()(),a.Sa(8,0,null,1,159,"amexio-body",[],null,null,null,u.Xb,u.e)),a.Ra(9,114688,[[2,4]],0,r.d,[],null,null),(l()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["Tab component for Angular Apps with multiple configurations such as Tab, Icon support, Scrollable tabs, Closable tab, Vertical Tabs and with custom context menu (right click operation) and default context menu(close all and close others) "])),(l()(),a.Sa(12,0,null,0,155,"amexio-tab-view",[],null,null,null,u.Ac,u.H)),a.Ra(13,5488640,null,2,r.S,[a.F,a.k,a.F],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(l()(),a.Sa(16,0,null,1,51,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.Bc,u.I)),a.Ra(17,114688,[[4,4]],0,r.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Sa(18,0,null,0,22,"amexio-card",[],null,null,null,u.dc,u.k)),a.Ra(19,7585792,null,3,r.j,[a.F],{header:[0,"header"],footer:[1,"footer"],footeralign:[2,"footeralign"]},null),a.ib(603979776,6,{amexioHeader:1}),a.ib(603979776,7,{amexioBody:1}),a.ib(603979776,8,{amexioFooter:1}),(l()(),a.Sa(23,0,null,0,2,"amexio-header",[],null,null,null,u.pc,u.w)),a.Ra(24,114688,[[6,4]],0,r.C,[],null,null),(l()(),a.kb(-1,0,[" Tab layout with default context menu "])),(l()(),a.Sa(26,0,null,1,14,"amexio-body",[],null,null,null,u.Xb,u.e)),a.Ra(27,114688,[[7,4]],0,r.d,[],null,null),(l()(),a.Sa(28,0,null,0,12,"amexio-tab-view",[],null,null,null,u.Ac,u.H)),a.Ra(29,5488640,null,2,r.S,[a.F,a.k,a.F],{tabPosition:[0,"tabPosition"],defaultContextMenu:[1,"defaultContextMenu"]},null),a.ib(603979776,9,{queryTabs:1}),a.ib(603979776,10,{queryAction:1}),(l()(),a.Sa(32,0,null,1,2,"amexio-tab",[["title","Person"]],null,null,null,u.Bc,u.I)),a.Ra(33,114688,[[9,4]],0,r.T,[],{title:[0,"title"],active:[1,"active"],closable:[2,"closable"]},null),(l()(),a.kb(-1,0,[" Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "])),(l()(),a.Sa(35,0,null,1,2,"amexio-tab",[["title","Work"]],null,null,null,u.Bc,u.I)),a.Ra(36,114688,[[9,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),a.kb(-1,0,[" Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. "])),(l()(),a.Sa(38,0,null,1,2,"amexio-tab",[["title","Education"]],null,null,null,u.Bc,u.I)),a.Ra(39,114688,[[9,4]],0,r.T,[],{title:[0,"title"],closable:[1,"closable"]},null),(l()(),a.kb(-1,0,[" Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. "])),(l()(),a.Sa(41,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(42,0,null,0,25,"amexio-card",[],null,null,null,u.dc,u.k)),a.Ra(43,7585792,null,3,r.j,[a.F],{header:[0,"header"],footer:[1,"footer"],footeralign:[2,"footeralign"]},null),a.ib(603979776,11,{amexioHeader:1}),a.ib(603979776,12,{amexioBody:1}),a.ib(603979776,13,{amexioFooter:1}),(l()(),a.Sa(47,0,null,0,2,"amexio-header",[],null,null,null,u.pc,u.w)),a.Ra(48,114688,[[11,4]],0,r.C,[],null,null),(l()(),a.kb(-1,0,[" Tab layout with custom context menu "])),(l()(),a.Sa(50,0,null,1,17,"amexio-body",[],null,null,null,u.Xb,u.e)),a.Ra(51,114688,[[12,4]],0,r.d,[],null,null),(l()(),a.Sa(52,0,null,0,15,"amexio-tab-view",[],null,null,null,u.Ac,u.H)),a.Ra(53,5488640,null,2,r.S,[a.F,a.k,a.F],{contextmenu:[0,"contextmenu"]},null),a.ib(603979776,14,{queryTabs:1}),a.ib(603979776,15,{queryAction:1}),(l()(),a.Sa(56,0,null,1,2,"amexio-tab",[["title","Person"]],null,null,null,u.Bc,u.I)),a.Ra(57,114688,[[14,4]],0,r.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.kb(-1,0,[" Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "])),(l()(),a.Sa(59,0,null,1,2,"amexio-tab",[["title","Work"]],null,null,null,u.Bc,u.I)),a.Ra(60,114688,[[14,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),a.kb(-1,0,[" Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. "])),(l()(),a.Sa(62,0,null,1,2,"amexio-tab",[["title","Education"]],null,null,null,u.Bc,u.I)),a.Ra(63,114688,[[14,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),a.kb(-1,0,[" Education Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. "])),(l()(),a.Sa(65,0,null,1,2,"amexio-tab",[["title","Hobbies"]],null,null,null,u.Bc,u.I)),a.Ra(66,114688,[[14,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),a.kb(-1,0,[" Hobbies Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. "])),(l()(),a.Sa(68,0,null,1,80,"amexio-tab",[["title","API Reference"]],null,null,null,u.Bc,u.I)),a.Ra(69,114688,[[4,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),a.Sa(70,0,null,0,22,"amexio-datagrid",[["title","Tab View Properties <amexio-tab-view>"]],null,null,null,u.Rd,u.yb)),a.Ra(71,1294336,null,1,r.tc,[a.l,r.Ta,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,16,{columnRef:1}),(l()(),a.Sa(73,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(74,49152,[[16,4]],2,r.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,17,{headerTemplate:0}),a.ib(335544320,18,{bodyTemplate:0}),(l()(),a.Sa(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(78,49152,[[16,4]],2,r.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,19,{headerTemplate:0}),a.ib(335544320,20,{bodyTemplate:0}),(l()(),a.Sa(81,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(82,49152,[[16,4]],2,r.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,21,{headerTemplate:0}),a.ib(335544320,22,{bodyTemplate:0}),(l()(),a.Sa(85,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(86,49152,[[16,4]],2,r.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,23,{headerTemplate:0}),a.ib(335544320,24,{bodyTemplate:0}),(l()(),a.Sa(89,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(90,49152,[[16,4]],2,r.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,25,{headerTemplate:0}),a.ib(335544320,26,{bodyTemplate:0}),(l()(),a.Sa(93,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(94,0,null,0,22,"amexio-datagrid",[["title","Tab Properties <amexio-tab>"]],null,null,null,u.Rd,u.yb)),a.Ra(95,1294336,null,1,r.tc,[a.l,r.Ta,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,27,{columnRef:1}),(l()(),a.Sa(97,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(98,49152,[[27,4]],2,r.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,28,{headerTemplate:0}),a.ib(335544320,29,{bodyTemplate:0}),(l()(),a.Sa(101,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(102,49152,[[27,4]],2,r.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,30,{headerTemplate:0}),a.ib(335544320,31,{bodyTemplate:0}),(l()(),a.Sa(105,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(106,49152,[[27,4]],2,r.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,32,{headerTemplate:0}),a.ib(335544320,33,{bodyTemplate:0}),(l()(),a.Sa(109,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(110,49152,[[27,4]],2,r.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,34,{headerTemplate:0}),a.ib(335544320,35,{bodyTemplate:0}),(l()(),a.Sa(113,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(114,49152,[[27,4]],2,r.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,36,{headerTemplate:0}),a.ib(335544320,37,{bodyTemplate:0}),(l()(),a.Sa(117,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(118,0,null,0,14,"amexio-datagrid",[["title","Tab Events"]],null,null,null,u.Rd,u.yb)),a.Ra(119,1294336,null,1,r.tc,[a.l,r.Ta,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,38,{columnRef:1}),(l()(),a.Sa(121,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(122,49152,[[38,4]],2,r.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,39,{headerTemplate:0}),a.ib(335544320,40,{bodyTemplate:0}),(l()(),a.Sa(125,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(126,49152,[[38,4]],2,r.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,41,{headerTemplate:0}),a.ib(335544320,42,{bodyTemplate:0}),(l()(),a.Sa(129,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(130,49152,[[38,4]],2,r.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,43,{headerTemplate:0}),a.ib(335544320,44,{bodyTemplate:0}),(l()(),a.Sa(133,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(134,0,null,0,14,"amexio-datagrid",[["title","Tab Methods"]],null,null,null,u.Rd,u.yb)),a.Ra(135,1294336,null,1,r.tc,[a.l,r.Ta,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,45,{columnRef:1}),(l()(),a.Sa(137,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(138,49152,[[45,4]],2,r.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,46,{headerTemplate:0}),a.ib(335544320,47,{bodyTemplate:0}),(l()(),a.Sa(141,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(142,49152,[[45,4]],2,r.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,48,{headerTemplate:0}),a.ib(335544320,49,{bodyTemplate:0}),(l()(),a.Sa(145,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Sd,u.zb)),a.Ra(146,49152,[[45,4]],2,r.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,50,{headerTemplate:0}),a.ib(335544320,51,{bodyTemplate:0}),(l()(),a.Sa(149,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,u.Bc,u.I)),a.Ra(150,114688,[[4,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),a.Sa(151,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),a.Sa(152,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,u.Dc,u.K)),a.Ra(153,5357568,null,1,r.X,[a.F,a.k],null,null),a.ib(603979776,52,{queryTabs:1}),(l()(),a.Sa(155,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.Bc,u.I)),a.Ra(156,114688,[[52,4]],0,r.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Ja(16777216,null,0,1,null,p)),a.Ra(158,16384,null,0,b.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(159,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.Bc,u.I)),a.Ra(160,114688,[[52,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),a.Ja(16777216,null,0,1,null,h)),a.Ra(162,16384,null,0,b.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(163,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.Bc,u.I)),a.Ra(164,114688,[[4,4]],0,r.T,[],{title:[0,"title"]},null),(l()(),a.Sa(165,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),a.kb(-1,null,["Amexio Sandbox"])),(l()(),a.Sa(167,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-tab-contextmenu-demo?embed=1&file=src/app/contextualmenu/tab/tab.demo.component.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,e){var t=e.component;l(e,1,0,"true"),l(e,6,0),l(e,9,0),l(e,13,0),l(e,17,0,"Demo","true"),l(e,19,0,!0,!1,"right"),l(e,24,0),l(e,27,0),l(e,29,0,"top",!0),l(e,33,0,"Person",!0,!0),l(e,36,0,"Work"),l(e,39,0,"Education",!0),l(e,43,0,!0,!1,"right"),l(e,48,0),l(e,51,0),l(e,53,0,t.rightclickdata),l(e,57,0,"Person",!0),l(e,60,0,"Work"),l(e,63,0,"Education"),l(e,66,0,"Hobbies"),l(e,69,0,"API Reference"),l(e,71,0,"Tab View Properties <amexio-tab-view>","assets/apireference/layout/tab/contextmenu-tab/contextmenutab.json","get","properties",!1,!1),l(e,74,0,"Name","name",!1,"string",15),l(e,78,0,"Version","version",!1,"string",10),l(e,82,0,"Type","type",!1,"string",10),l(e,86,0,"Default","default",!1,"string",10),l(e,90,0,"Description","description",!1,"string",65),l(e,95,0,"Tab Properties <amexio-tab>","assets/apireference/layout/tab/contextmenu-tab/contextmenutab.json","get","tabproperties",!1,!1),l(e,98,0,"Name","name",!1,"string",15),l(e,102,0,"Version","version",!1,"string",10),l(e,106,0,"Type","type",!1,"string",10),l(e,110,0,"Default","default",!1,"string",10),l(e,114,0,"Description","description",!1,"string",65),l(e,119,0,"Tab Events","assets/apireference/layout/tab/contextmenu-tab/contextmenutab.json","get","events",!1,!1),l(e,122,0,"Name","name",!1,"string",20),l(e,126,0,"Version","version",!1,"string",10),l(e,130,0,"Description","description",!1,"string",70),l(e,135,0,"Tab Methods","assets/apireference/layout/tab/horizontaltab.json","get","methods",!1,!1),l(e,138,0,"Name","name",!1,"string",40),l(e,142,0,"Version","version",!1,"string",20),l(e,146,0,"Description","description",!1,"string",40),l(e,150,0,"Source"),l(e,153,0),l(e,156,0,"HTML",!0),l(e,158,0,t.htmlCode),l(e,160,0,"Type Script"),l(e,162,0,t.typeScriptCode),l(e,164,0,"Live")},null)}var y=a.Oa("context-menu-tab-demo",s,function(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,1,"context-menu-tab-demo",[],null,null,null,x,m)),a.Ra(1,49152,null,0,s,[c.d],null,null)],null,null)},{},{},[]),f=t("gIcY"),S=t("t/Na"),T=t("ZYCi");t.d(e,"ContextMenuTabDemoModuleNgFactory",function(){return g});var g=a.Pa(n,[],function(l){return a.Za([a.ab(512,a.k,a.Ea,[[8,[u.a,i.a,y]],[3,a.k],a.z]),a.ab(4608,b.o,b.n,[a.w,[2,b.x]]),a.ab(4608,f.G,f.G,[]),a.ab(4608,c.c,c.c,[]),a.ab(4608,c.g,c.b,[]),a.ab(5120,c.i,c.j,[]),a.ab(4608,c.h,c.h,[c.c,c.g,c.i]),a.ab(4608,c.f,c.a,[]),a.ab(5120,c.d,c.k,[c.h,c.f]),a.ab(4608,S.i,S.o,[b.d,a.D,S.m]),a.ab(4608,S.p,S.p,[S.i,S.n]),a.ab(5120,S.a,function(l){return[l]},[S.p]),a.ab(4608,S.l,S.l,[]),a.ab(6144,S.j,null,[S.l]),a.ab(4608,S.h,S.h,[S.j]),a.ab(6144,S.b,null,[S.h]),a.ab(4608,S.f,S.k,[S.b,a.s]),a.ab(4608,S.c,S.c,[S.f]),a.ab(4608,r.Ta,r.Ta,[S.c]),a.ab(4608,r.ob,r.ob,[]),a.ab(4608,r.db,r.db,[a.D]),a.ab(4608,r.B,r.B,[]),a.ab(4608,r.Kb,r.Kb,[]),a.ab(4608,f.f,f.f,[]),a.ab(4608,r.jb,r.jb,[]),a.ab(1073742336,b.c,b.c,[]),a.ab(1073742336,f.D,f.D,[]),a.ab(1073742336,f.l,f.l,[]),a.ab(1073742336,c.e,c.e,[]),a.ab(1073742336,o.b,o.b,[]),a.ab(1073742336,S.e,S.e,[]),a.ab(1073742336,S.d,S.d,[]),a.ab(1073742336,r.Db,r.Db,[]),a.ab(1073742336,r.D,r.D,[]),a.ab(1073742336,r.x,r.x,[]),a.ab(1073742336,r.G,r.G,[]),a.ab(1073742336,r.I,r.I,[]),a.ab(1073742336,f.z,f.z,[]),a.ab(1073742336,r.L,r.L,[]),a.ab(1073742336,r.p,r.p,[]),a.ab(1073742336,r.Aa,r.Aa,[]),a.ab(1073742336,T.n,T.n,[[2,T.t],[2,T.m]]),a.ab(1073742336,n,n,[]),a.ab(256,S.m,"XSRF-TOKEN",[]),a.ab(256,S.n,"X-XSRF-TOKEN",[]),a.ab(1024,T.i,function(){return[[{path:"",component:s,pathMatch:"full"}]]},[])])})}}]);