(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"3/NT":function(l,n,e){"use strict";e.r(n);var a=e("CcnG"),u=function(){},t=e("gTgE"),o=e("pMnS"),i=e("U89g"),d=e("d2mR"),r=e("O4vx"),c=e("gIcY"),b=e("Ip0R"),m=function(){function l(l){this.http=l,this.rightclickdata=[{text:"Add New",icon:"fa fa-plus",disabled:!0},{text:"Edit",icon:"",seperator:!0},{text:"Send data in email",icon:""}],this.flag=!0,this.getHtmlAndTypeScriptCode()}return l.prototype.toggle=function(){this.flag=!this.flag},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/layout/card/layout.html").subscribe(function(n){l=n.text()},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/layout/card/layout.text").subscribe(function(l){n=l.text()},function(l){},function(){e.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),s=e("sE5F"),p=a.La({encapsulation:2,styles:[],data:{}});function h(l){return a.hb(0,[(l()(),a.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Na(1,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),a.Ma(2,4243456,null,0,d.a,[a.B,a.k],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.htmlCode,"html")},null)}function f(l){return a.hb(0,[(l()(),a.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Na(1,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),a.Ma(2,4243456,null,0,d.a,[a.B,a.k],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.typeScriptCode,"typescript")},null)}function x(l){return a.hb(0,[(l()(),a.Na(0,0,null,null,142,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,n,e){var u=!0;return"document:click"===n&&(u=!1!==a.Xa(l,1).onWindowClick()&&u),"document:scroll"===n&&(u=!1!==a.Xa(l,1).onscroll()&&u),u},t.Hb,t.h)),a.Ma(1,5357568,null,3,r.g,[],{header:[0,"header"]},null),a.db(603979776,1,{amexioHeader:1}),a.db(603979776,2,{amexioBody:1}),a.db(603979776,3,{amexioFooter:1}),(l()(),a.Na(5,0,null,0,2,"amexio-header",[],null,null,null,t.Qb,t.q)),a.Ma(6,114688,[[1,4]],0,r.u,[],null,null),(l()(),a.fb(-1,0,[" Card "])),(l()(),a.Na(8,0,null,1,134,"amexio-body",[],null,null,null,t.Db,t.d)),a.Ma(9,114688,[[2,4]],0,r.c,[],null,null),(l()(),a.Na(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["A Simple Card which renders card based on title, body and actions user has configured"])),(l()(),a.Na(12,16777216,null,0,130,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var u=!0;return"document:click"===n&&(u=!1!==a.Xa(l,13).onWindowClick()&&u),"document:scroll"===n&&(u=!1!==a.Xa(l,13).onscroll()&&u),u},t.ac,t.A)),a.Ma(13,5357568,null,2,r.J,[a.B,a.j,a.M],null,null),a.db(603979776,4,{queryTabs:1}),a.db(603979776,5,{queryAction:1}),(l()(),a.Na(16,0,null,1,75,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,t.bc,t.B)),a.Ma(17,114688,[[4,4]],0,r.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Na(18,0,null,0,5,"amexio-row",[],null,null,null,t.Wb,t.w)),a.Ma(19,1163264,null,0,r.F,[],null,null),(l()(),a.Na(20,0,null,0,3,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,t.Jb,t.j)),a.Ma(21,114688,null,0,r.j,[],{size:[0,"size"]},null),(l()(),a.Na(22,0,null,0,1,"amexio-button",[],null,[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.toggle()&&a),a},t.qd,t.qb)),a.Ma(23,114688,null,0,r.ac,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},null),(l()(),a.Na(24,0,null,0,65,"amexio-row",[],null,null,null,t.Wb,t.w)),a.Ma(25,1163264,null,0,r.F,[],null,null),(l()(),a.Na(26,0,null,0,63,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,t.Jb,t.j)),a.Ma(27,114688,null,0,r.j,[],{size:[0,"size"]},null),(l()(),a.Na(28,0,null,0,61,"amexio-card",[["height","250"]],null,[["document","click"],["document","scroll"]],function(l,n,e){var u=!0;return"document:click"===n&&(u=!1!==a.Xa(l,29).onWindowClick()&&u),"document:scroll"===n&&(u=!1!==a.Xa(l,29).onscroll()&&u),u},t.Hb,t.h)),a.Ma(29,5357568,null,3,r.g,[],{header:[0,"header"],footer:[1,"footer"],footeralign:[2,"footeralign"],show:[3,"show"],height:[4,"height"]},null),a.db(603979776,6,{amexioHeader:1}),a.db(603979776,7,{amexioBody:1}),a.db(603979776,8,{amexioFooter:1}),(l()(),a.Na(33,0,null,0,2,"amexio-header",[],null,null,null,t.Qb,t.q)),a.Ma(34,114688,[[6,4]],0,r.u,[],null,null),(l()(),a.fb(-1,0,[" Employee Registration "])),(l()(),a.Na(36,0,null,1,49,"amexio-body",[],null,null,null,t.Db,t.d)),a.Ma(37,114688,[[7,4]],0,r.c,[],null,null),(l()(),a.Na(38,0,null,0,11,"amexio-row",[],null,null,null,t.Wb,t.w)),a.Ma(39,1163264,null,0,r.F,[],null,null),(l()(),a.Na(40,0,null,0,4,"amexio-column",[],[[1,"class",0]],null,null,t.Jb,t.j)),a.Ma(41,114688,null,0,r.j,[],{size:[0,"size"]},null),(l()(),a.Na(42,0,null,0,2,"amexio-text-input",[["name","name"]],null,null,null,t.Mc,t.Ma)),a.cb(5120,null,c.g,function(l){return[l]},[r.mb]),a.Ma(44,114688,null,0,r.mb,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"]},null),(l()(),a.Na(45,0,null,0,4,"amexio-column",[],[[1,"class",0]],null,null,t.Jb,t.j)),a.Ma(46,114688,null,0,r.j,[],{size:[0,"size"]},null),(l()(),a.Na(47,0,null,0,2,"amexio-text-input",[["name","address"]],null,null,null,t.Mc,t.Ma)),a.cb(5120,null,c.g,function(l){return[l]},[r.mb]),a.Ma(49,114688,null,0,r.mb,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"]},null),(l()(),a.Na(50,0,null,0,11,"amexio-row",[],null,null,null,t.Wb,t.w)),a.Ma(51,1163264,null,0,r.F,[],null,null),(l()(),a.Na(52,0,null,0,4,"amexio-column",[],[[1,"class",0]],null,null,t.Jb,t.j)),a.Ma(53,114688,null,0,r.j,[],{size:[0,"size"]},null),(l()(),a.Na(54,0,null,0,2,"amexio-number-input",[],null,null,null,t.ld,t.lb)),a.cb(5120,null,c.g,function(l){return[l]},[r.Vb]),a.Ma(56,114688,null,0,r.Vb,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"]},null),(l()(),a.Na(57,0,null,0,4,"amexio-column",[],[[1,"class",0]],null,null,t.Jb,t.j)),a.Ma(58,114688,null,0,r.j,[],{size:[0,"size"]},null),(l()(),a.Na(59,0,null,0,2,"amexio-email-input",[["name","email"]],null,null,null,t.kd,t.kb)),a.cb(5120,null,c.g,function(l){return[l]},[r.Ub]),a.Ma(61,114688,null,0,r.Ub,[],{fieldlabel:[0,"fieldlabel"],allowblank:[1,"allowblank"],errormsg:[2,"errormsg"],placeholder:[3,"placeholder"],iconfeedback:[4,"iconfeedback"],enablepopover:[5,"enablepopover"]},null),(l()(),a.Na(62,0,null,0,11,"amexio-row",[],null,null,null,t.Wb,t.w)),a.Ma(63,1163264,null,0,r.F,[],null,null),(l()(),a.Na(64,0,null,0,4,"amexio-column",[],[[1,"class",0]],null,null,t.Jb,t.j)),a.Ma(65,114688,null,0,r.j,[],{size:[0,"size"]},null),(l()(),a.Na(66,0,null,0,2,"amexio-text-input",[["name","name"]],null,null,null,t.Mc,t.Ma)),a.cb(5120,null,c.g,function(l){return[l]},[r.mb]),a.Ma(68,114688,null,0,r.mb,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"]},null),(l()(),a.Na(69,0,null,0,4,"amexio-column",[],[[1,"class",0]],null,null,t.Jb,t.j)),a.Ma(70,114688,null,0,r.j,[],{size:[0,"size"]},null),(l()(),a.Na(71,0,null,0,2,"amexio-text-input",[["name","address"]],null,null,null,t.Mc,t.Ma)),a.cb(5120,null,c.g,function(l){return[l]},[r.mb]),a.Ma(73,114688,null,0,r.mb,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"]},null),(l()(),a.Na(74,0,null,0,11,"amexio-row",[],null,null,null,t.Wb,t.w)),a.Ma(75,1163264,null,0,r.F,[],null,null),(l()(),a.Na(76,0,null,0,4,"amexio-column",[],[[1,"class",0]],null,null,t.Jb,t.j)),a.Ma(77,114688,null,0,r.j,[],{size:[0,"size"]},null),(l()(),a.Na(78,0,null,0,2,"amexio-number-input",[],null,null,null,t.ld,t.lb)),a.cb(5120,null,c.g,function(l){return[l]},[r.Vb]),a.Ma(80,114688,null,0,r.Vb,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"]},null),(l()(),a.Na(81,0,null,0,4,"amexio-column",[],[[1,"class",0]],null,null,t.Jb,t.j)),a.Ma(82,114688,null,0,r.j,[],{size:[0,"size"]},null),(l()(),a.Na(83,0,null,0,2,"amexio-email-input",[["name","email"]],null,null,null,t.kd,t.kb)),a.cb(5120,null,c.g,function(l){return[l]},[r.Ub]),a.Ma(85,114688,null,0,r.Ub,[],{fieldlabel:[0,"fieldlabel"],allowblank:[1,"allowblank"],errormsg:[2,"errormsg"],placeholder:[3,"placeholder"],iconfeedback:[4,"iconfeedback"],enablepopover:[5,"enablepopover"]},null),(l()(),a.Na(86,0,null,2,3,"amexio-action",[],null,null,null,t.Lb,t.l)),a.Ma(87,114688,[[8,4]],0,r.o,[],null,null),(l()(),a.Na(88,0,null,0,1,"amexio-button",[],null,null,null,t.qd,t.qb)),a.Ma(89,114688,null,0,r.ac,[],{label:[0,"label"],type:[1,"type"]},null),(l()(),a.Na(90,0,null,0,1,"amexio-row",[],null,null,null,t.Wb,t.w)),a.Ma(91,1163264,null,0,r.F,[],null,null),(l()(),a.Na(92,0,null,1,31,"amexio-tab",[["title","API Reference"]],null,null,null,t.bc,t.B)),a.Ma(93,114688,[[4,4]],0,r.K,[],{title:[0,"title"]},null),(l()(),a.Na(94,0,null,0,18,"amexio-datagrid",[["title","Properties<amexio-card>"]],null,[["document","scroll"],["document","click"]],function(l,n,e){var u=!0;return"document:scroll"===n&&(u=!1!==a.Xa(l,95).onscroll()&&u),"document:click"===n&&(u=!1!==a.Xa(l,95).onclick()&&u),u},t.ad,t.ab)),a.Ma(95,1425408,null,1,r.Gb,[a.k,r.Ga,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.db(603979776,9,{columnRef:1}),(l()(),a.Na(97,0,null,null,3,"amexio-data-table-column",[],null,null,null,t.bd,t.bb)),a.Ma(98,49152,[[9,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,10,{headerTemplate:0}),a.db(335544320,11,{bodyTemplate:0}),(l()(),a.Na(101,0,null,null,3,"amexio-data-table-column",[],null,null,null,t.bd,t.bb)),a.Ma(102,49152,[[9,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,12,{headerTemplate:0}),a.db(335544320,13,{bodyTemplate:0}),(l()(),a.Na(105,0,null,null,3,"amexio-data-table-column",[],null,null,null,t.bd,t.bb)),a.Ma(106,49152,[[9,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,14,{headerTemplate:0}),a.db(335544320,15,{bodyTemplate:0}),(l()(),a.Na(109,0,null,null,3,"amexio-data-table-column",[],null,null,null,t.bd,t.bb)),a.Ma(110,49152,[[9,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,16,{headerTemplate:0}),a.db(335544320,17,{bodyTemplate:0}),(l()(),a.Na(113,0,null,0,10,"amexio-datagrid",[["title","Events"]],null,[["document","scroll"],["document","click"]],function(l,n,e){var u=!0;return"document:scroll"===n&&(u=!1!==a.Xa(l,114).onscroll()&&u),"document:click"===n&&(u=!1!==a.Xa(l,114).onclick()&&u),u},t.ad,t.ab)),a.Ma(114,1425408,null,1,r.Gb,[a.k,r.Ga,a.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.db(603979776,18,{columnRef:1}),(l()(),a.Na(116,0,null,null,3,"amexio-data-table-column",[],null,null,null,t.bd,t.bb)),a.Ma(117,49152,[[18,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,19,{headerTemplate:0}),a.db(335544320,20,{bodyTemplate:0}),(l()(),a.Na(120,0,null,null,3,"amexio-data-table-column",[],null,null,null,t.bd,t.bb)),a.Ma(121,49152,[[18,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.db(335544320,21,{headerTemplate:0}),a.db(335544320,22,{bodyTemplate:0}),(l()(),a.Na(124,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,t.bc,t.B)),a.Ma(125,114688,[[4,4]],0,r.K,[],{title:[0,"title"]},null),(l()(),a.Na(126,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),a.Na(127,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,t.dc,t.D)),a.Ma(128,5357568,null,1,r.O,[a.B],null,null),a.db(603979776,23,{queryTabs:1}),(l()(),a.Na(130,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,t.bc,t.B)),a.Ma(131,114688,[[23,4]],0,r.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Ea(16777216,null,0,1,null,h)),a.Ma(133,16384,null,0,b.l,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.Na(134,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,t.bc,t.B)),a.Ma(135,114688,[[23,4]],0,r.K,[],{title:[0,"title"]},null),(l()(),a.Ea(16777216,null,0,1,null,f)),a.Ma(137,16384,null,0,b.l,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.Na(138,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,t.bc,t.B)),a.Ma(139,114688,[[4,4]],0,r.K,[],{title:[0,"title"]},null),(l()(),a.Na(140,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Amexio Sandbox"])),(l()(),a.Na(142,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-card-form?embed=1&file=app/layouts/cardform/cardform.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,n){var e=n.component;l(n,1,0,"true"),l(n,6,0),l(n,9,0),l(n,13,0),l(n,17,0,"Demo","true"),l(n,19,0),l(n,21,0,"12"),l(n,23,0,"Hide / Un-hide Card","primary","Hide/UnHide Card"),l(n,25,0),l(n,27,0,"12"),l(n,29,0,!0,!0,"right",e.flag,"250"),l(n,34,0),l(n,37,0),l(n,39,0),l(n,41,0,6),l(n,44,0,"Name","Enter name",!0),l(n,46,0,6),l(n,49,0,"Local Address","Enter address",!0),l(n,51,0),l(n,53,0,6),l(n,56,0,"Number Input","Enter Age"),l(n,58,0,6),l(n,61,0,"Email Id",!1,"Please Enter Email Id","Enter Email Id",!0,!0),l(n,63,0),l(n,65,0,6),l(n,68,0,"Father Name","Enter name",!0),l(n,70,0,6),l(n,73,0,"Present Address","Enter address",!0),l(n,75,0),l(n,77,0,6),l(n,80,0,"Number Input","Enter Age"),l(n,82,0,6),l(n,85,0,"Father Email Id",!1,"Please Enter Email Id","Enter Email Id",!0,!0),l(n,87,0),l(n,89,0,"Save","primary"),l(n,91,0),l(n,93,0,"API Reference"),l(n,95,0,"Properties<amexio-card>","assets/apireference/layout/card.json","get","properties",!1,!1),l(n,98,0,"Name","name",!1,"string",15),l(n,102,0,"Type","type",!1,"string",10),l(n,106,0,"Default","default",!1,"string",10),l(n,110,0,"Description","description",!1,"string",65),l(n,114,0,"Events","assets/apireference/panes/window/window.json","get","events",!1,!1),l(n,117,0,"Name","name",!1,"string",15),l(n,121,0,"Description","description",!1,"string",65),l(n,125,0,"Source"),l(n,128,0),l(n,131,0,"HTML",!0),l(n,133,0,e.htmlCode),l(n,135,0,"Type Script"),l(n,137,0,e.typeScriptCode),l(n,139,0,"Live")},function(l,n){l(n,20,0,a.Xa(n,21).role),l(n,26,0,a.Xa(n,27).role),l(n,40,0,a.Xa(n,41).role),l(n,45,0,a.Xa(n,46).role),l(n,52,0,a.Xa(n,53).role),l(n,57,0,a.Xa(n,58).role),l(n,64,0,a.Xa(n,65).role),l(n,69,0,a.Xa(n,70).role),l(n,76,0,a.Xa(n,77).role),l(n,81,0,a.Xa(n,82).role)})}var g=a.Ja("card-form-demo",m,function(l){return a.hb(0,[(l()(),a.Na(0,0,null,null,1,"card-form-demo",[],null,null,null,x,p)),a.Ma(1,49152,null,0,m,[s.d],null,null)],null,null)},{},{},[]),M=e("t/Na"),N=e("ZYCi");e.d(n,"CardFormDemoModuleNgFactory",function(){return y});var y=a.Ka(u,[],function(l){return a.Ua([a.Va(512,a.j,a.Z,[[8,[t.a,o.a,g]],[3,a.j],a.v]),a.Va(4608,b.n,b.m,[a.s,[2,b.w]]),a.Va(4608,c.r,c.r,[]),a.Va(4608,s.c,s.c,[]),a.Va(4608,s.g,s.b,[]),a.Va(5120,s.i,s.j,[]),a.Va(4608,s.h,s.h,[s.c,s.g,s.i]),a.Va(4608,s.f,s.a,[]),a.Va(5120,s.d,s.k,[s.h,s.f]),a.Va(4608,M.h,M.n,[b.c,a.z,M.l]),a.Va(4608,M.o,M.o,[M.h,M.m]),a.Va(5120,M.a,function(l){return[l]},[M.o]),a.Va(4608,M.k,M.k,[]),a.Va(6144,M.i,null,[M.k]),a.Va(4608,M.g,M.g,[M.i]),a.Va(6144,M.b,null,[M.g]),a.Va(4608,M.f,M.j,[M.b,a.p]),a.Va(4608,M.c,M.c,[M.f]),a.Va(4608,r.Ga,r.Ga,[M.c]),a.Va(4608,r.Qa,r.Qa,[a.z]),a.Va(4608,r.Xa,r.Xa,[]),a.Va(4608,r.ic,r.ic,[]),a.Va(1073742336,b.b,b.b,[]),a.Va(1073742336,c.o,c.o,[]),a.Va(1073742336,c.e,c.e,[]),a.Va(1073742336,s.e,s.e,[]),a.Va(1073742336,d.b,d.b,[]),a.Va(1073742336,M.e,M.e,[]),a.Va(1073742336,M.d,M.d,[]),a.Va(1073742336,r.v,r.v,[]),a.Va(1073742336,r.t,r.t,[]),a.Va(1073742336,r.y,r.y,[]),a.Va(1073742336,r.A,r.A,[]),a.Va(1073742336,r.D,r.D,[]),a.Va(1073742336,r.l,r.l,[]),a.Va(1073742336,r.Q,r.Q,[]),a.Va(1073742336,N.n,N.n,[[2,N.t],[2,N.m]]),a.Va(1073742336,u,u,[]),a.Va(256,M.l,"XSRF-TOKEN",[]),a.Va(256,M.m,"X-XSRF-TOKEN",[]),a.Va(1024,N.i,function(){return[[{path:"",component:m,pathMatch:"full"}]]},[])])})}}]);