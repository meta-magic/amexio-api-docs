(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{"OO+E":function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),e=function(){},i=u("gTgE"),o=u("pMnS"),t=u("U89g"),b=u("d2mR"),m=u("O4vx"),c=u("Ip0R"),d=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,u=this;this.http.get("assets/data/code/layout/column/layout.html").subscribe(function(n){l=n.text()},function(l){},function(){u.htmlCode=l}),this.http.get("assets/data/code/layout/column/layout.text").subscribe(function(l){n=l.text()},function(l){},function(){u.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),r=u("sE5F"),s=a.Qa({encapsulation:2,styles:[],data:{}});function x(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,t.b,t.a)),a.Ra(2,4243456,null,0,b.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.htmlCode,"html")},null)}function p(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,t.b,t.a)),a.Ra(2,4243456,null,0,b.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.typeScriptCode,"typescript")},null)}function y(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,185,"amexio-card",[["header","true"]],null,null,null,i.bc,i.k)),a.Ra(1,5488640,null,3,m.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(l()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),a.Ra(6,114688,[[1,4]],0,m.B,[],null,null),(l()(),a.kb(-1,0,[" Column "])),(l()(),a.Sa(8,0,null,1,177,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(9,114688,[[2,4]],0,m.d,[],null,null),(l()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["Amexio column system allows up to 12 columns across the page."])),(l()(),a.Sa(12,0,null,0,173,"amexio-tab-view",[],null,null,null,i.xc,i.G)),a.Ra(13,5488640,null,2,m.R,[a.F,a.k,a.F],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(l()(),a.Sa(16,0,null,1,129,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.yc,i.H)),a.Ra(17,114688,[[4,4]],0,m.S,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Sa(18,0,null,0,61,"amexio-row",[],null,null,null,i.tc,i.C)),a.Ra(19,1163264,null,0,m.N,[],null,null),(l()(),a.Sa(20,0,null,0,9,"amexio-column",[["size","2"]],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(21,114688,null,0,m.m,[],{size:[0,"size"]},null),(l()(),a.Sa(22,0,null,0,7,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(23,5488640,null,3,m.j,[a.F],null,null),a.ib(603979776,6,{amexioHeader:1}),a.ib(603979776,7,{amexioBody:1}),a.ib(603979776,8,{amexioFooter:1}),(l()(),a.Sa(27,0,null,1,2,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(28,114688,[[7,4]],0,m.d,[],null,null),(l()(),a.kb(-1,0,["COL 2 "])),(l()(),a.Sa(30,0,null,0,9,"amexio-column",[["size","2"]],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(31,114688,null,0,m.m,[],{size:[0,"size"]},null),(l()(),a.Sa(32,0,null,0,7,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(33,5488640,null,3,m.j,[a.F],null,null),a.ib(603979776,9,{amexioHeader:1}),a.ib(603979776,10,{amexioBody:1}),a.ib(603979776,11,{amexioFooter:1}),(l()(),a.Sa(37,0,null,1,2,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(38,114688,[[10,4]],0,m.d,[],null,null),(l()(),a.kb(-1,0,[" COL 2 "])),(l()(),a.Sa(40,0,null,0,9,"amexio-column",[["size","2"]],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(41,114688,null,0,m.m,[],{size:[0,"size"]},null),(l()(),a.Sa(42,0,null,0,7,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(43,5488640,null,3,m.j,[a.F],null,null),a.ib(603979776,12,{amexioHeader:1}),a.ib(603979776,13,{amexioBody:1}),a.ib(603979776,14,{amexioFooter:1}),(l()(),a.Sa(47,0,null,1,2,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(48,114688,[[13,4]],0,m.d,[],null,null),(l()(),a.kb(-1,0,[" COL 2 "])),(l()(),a.Sa(50,0,null,0,9,"amexio-column",[["size","2"]],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(51,114688,null,0,m.m,[],{size:[0,"size"]},null),(l()(),a.Sa(52,0,null,0,7,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(53,5488640,null,3,m.j,[a.F],null,null),a.ib(603979776,15,{amexioHeader:1}),a.ib(603979776,16,{amexioBody:1}),a.ib(603979776,17,{amexioFooter:1}),(l()(),a.Sa(57,0,null,1,2,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(58,114688,[[16,4]],0,m.d,[],null,null),(l()(),a.kb(-1,0,[" COL 2 "])),(l()(),a.Sa(60,0,null,0,9,"amexio-column",[["size","2"]],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(61,114688,null,0,m.m,[],{size:[0,"size"]},null),(l()(),a.Sa(62,0,null,0,7,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(63,5488640,null,3,m.j,[a.F],null,null),a.ib(603979776,18,{amexioHeader:1}),a.ib(603979776,19,{amexioBody:1}),a.ib(603979776,20,{amexioFooter:1}),(l()(),a.Sa(67,0,null,1,2,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(68,114688,[[19,4]],0,m.d,[],null,null),(l()(),a.kb(-1,0,[" COL 2 "])),(l()(),a.Sa(70,0,null,0,9,"amexio-column",[["size","2"]],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(71,114688,null,0,m.m,[],{size:[0,"size"]},null),(l()(),a.Sa(72,0,null,0,7,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(73,5488640,null,3,m.j,[a.F],null,null),a.ib(603979776,21,{amexioHeader:1}),a.ib(603979776,22,{amexioBody:1}),a.ib(603979776,23,{amexioFooter:1}),(l()(),a.Sa(77,0,null,1,2,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(78,114688,[[22,4]],0,m.d,[],null,null),(l()(),a.kb(-1,0,[" COL 2 "])),(l()(),a.Sa(80,0,null,0,31,"amexio-row",[],null,null,null,i.tc,i.C)),a.Ra(81,1163264,null,0,m.N,[],null,null),(l()(),a.Sa(82,0,null,0,9,"amexio-column",[["size","4"]],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(83,114688,null,0,m.m,[],{size:[0,"size"]},null),(l()(),a.Sa(84,0,null,0,7,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(85,5488640,null,3,m.j,[a.F],null,null),a.ib(603979776,24,{amexioHeader:1}),a.ib(603979776,25,{amexioBody:1}),a.ib(603979776,26,{amexioFooter:1}),(l()(),a.Sa(89,0,null,1,2,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(90,114688,[[25,4]],0,m.d,[],null,null),(l()(),a.kb(-1,0,[" COL 4 "])),(l()(),a.Sa(92,0,null,0,9,"amexio-column",[["size","4"]],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(93,114688,null,0,m.m,[],{size:[0,"size"]},null),(l()(),a.Sa(94,0,null,0,7,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(95,5488640,null,3,m.j,[a.F],null,null),a.ib(603979776,27,{amexioHeader:1}),a.ib(603979776,28,{amexioBody:1}),a.ib(603979776,29,{amexioFooter:1}),(l()(),a.Sa(99,0,null,1,2,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(100,114688,[[28,4]],0,m.d,[],null,null),(l()(),a.kb(-1,0,[" COL 4 "])),(l()(),a.Sa(102,0,null,0,9,"amexio-column",[["size","4"]],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(103,114688,null,0,m.m,[],{size:[0,"size"]},null),(l()(),a.Sa(104,0,null,0,7,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(105,5488640,null,3,m.j,[a.F],null,null),a.ib(603979776,30,{amexioHeader:1}),a.ib(603979776,31,{amexioBody:1}),a.ib(603979776,32,{amexioFooter:1}),(l()(),a.Sa(109,0,null,1,2,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(110,114688,[[31,4]],0,m.d,[],null,null),(l()(),a.kb(-1,0,[" COL 4 "])),(l()(),a.Sa(112,0,null,0,21,"amexio-row",[],null,null,null,i.tc,i.C)),a.Ra(113,1163264,null,0,m.N,[],null,null),(l()(),a.Sa(114,0,null,0,9,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(115,114688,null,0,m.m,[],{size:[0,"size"]},null),(l()(),a.Sa(116,0,null,0,7,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(117,5488640,null,3,m.j,[a.F],null,null),a.ib(603979776,33,{amexioHeader:1}),a.ib(603979776,34,{amexioBody:1}),a.ib(603979776,35,{amexioFooter:1}),(l()(),a.Sa(121,0,null,1,2,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(122,114688,[[34,4]],0,m.d,[],null,null),(l()(),a.kb(-1,0,[" COL 6 "])),(l()(),a.Sa(124,0,null,0,9,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(125,114688,null,0,m.m,[],{size:[0,"size"]},null),(l()(),a.Sa(126,0,null,0,7,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(127,5488640,null,3,m.j,[a.F],null,null),a.ib(603979776,36,{amexioHeader:1}),a.ib(603979776,37,{amexioBody:1}),a.ib(603979776,38,{amexioFooter:1}),(l()(),a.Sa(131,0,null,1,2,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(132,114688,[[37,4]],0,m.d,[],null,null),(l()(),a.kb(-1,0,[" COL 6 "])),(l()(),a.Sa(134,0,null,0,11,"amexio-row",[],null,null,null,i.tc,i.C)),a.Ra(135,1163264,null,0,m.N,[],null,null),(l()(),a.Sa(136,0,null,0,9,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(137,114688,null,0,m.m,[],{size:[0,"size"]},null),(l()(),a.Sa(138,0,null,0,7,"amexio-card",[],null,null,null,i.bc,i.k)),a.Ra(139,5488640,null,3,m.j,[a.F],null,null),a.ib(603979776,39,{amexioHeader:1}),a.ib(603979776,40,{amexioBody:1}),a.ib(603979776,41,{amexioFooter:1}),(l()(),a.Sa(143,0,null,1,2,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(144,114688,[[40,4]],0,m.d,[],null,null),(l()(),a.kb(-1,0,[" COL 12 "])),(l()(),a.Sa(146,0,null,1,20,"amexio-tab",[["title","API Reference"]],null,null,null,i.yc,i.H)),a.Ra(147,114688,[[4,4]],0,m.S,[],{title:[0,"title"]},null),(l()(),a.Sa(148,0,null,0,18,"amexio-datagrid",[["title","Properties <amexio-column>"]],null,null,null,i.Nd,i.wb)),a.Ra(149,1294336,null,1,m.oc,[a.l,m.Qa,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,42,{columnRef:1}),(l()(),a.Sa(151,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),a.Ra(152,49152,[[42,4]],2,m.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,43,{headerTemplate:0}),a.ib(335544320,44,{bodyTemplate:0}),(l()(),a.Sa(155,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),a.Ra(156,49152,[[42,4]],2,m.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,45,{headerTemplate:0}),a.ib(335544320,46,{bodyTemplate:0}),(l()(),a.Sa(159,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),a.Ra(160,49152,[[42,4]],2,m.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,47,{headerTemplate:0}),a.ib(335544320,48,{bodyTemplate:0}),(l()(),a.Sa(163,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),a.Ra(164,49152,[[42,4]],2,m.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,49,{headerTemplate:0}),a.ib(335544320,50,{bodyTemplate:0}),(l()(),a.Sa(167,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.yc,i.H)),a.Ra(168,114688,[[4,4]],0,m.S,[],{title:[0,"title"]},null),(l()(),a.Sa(169,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),a.Sa(170,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.Ac,i.J)),a.Ra(171,5357568,null,1,m.W,[a.F,a.k],null,null),a.ib(603979776,51,{queryTabs:1}),(l()(),a.Sa(173,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.yc,i.H)),a.Ra(174,114688,[[51,4]],0,m.S,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Ja(16777216,null,0,1,null,x)),a.Ra(176,16384,null,0,c.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(177,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.yc,i.H)),a.Ra(178,114688,[[51,4]],0,m.S,[],{title:[0,"title"]},null),(l()(),a.Ja(16777216,null,0,1,null,p)),a.Ra(180,16384,null,0,c.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(181,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.yc,i.H)),a.Ra(182,114688,[[4,4]],0,m.S,[],{title:[0,"title"]},null),(l()(),a.Sa(183,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),a.kb(-1,null,["Amexio Sandbox"])),(l()(),a.Sa(185,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-columnlayout?embed=1&file=app/layouts/column/column.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,1,0,"true"),l(n,6,0),l(n,9,0),l(n,13,0),l(n,17,0,"Demo","true"),l(n,19,0),l(n,21,0,"2"),l(n,23,0),l(n,28,0),l(n,31,0,"2"),l(n,33,0),l(n,38,0),l(n,41,0,"2"),l(n,43,0),l(n,48,0),l(n,51,0,"2"),l(n,53,0),l(n,58,0),l(n,61,0,"2"),l(n,63,0),l(n,68,0),l(n,71,0,"2"),l(n,73,0),l(n,78,0),l(n,81,0),l(n,83,0,"4"),l(n,85,0),l(n,90,0),l(n,93,0,"4"),l(n,95,0),l(n,100,0),l(n,103,0,"4"),l(n,105,0),l(n,110,0),l(n,113,0),l(n,115,0,"6"),l(n,117,0),l(n,122,0),l(n,125,0,"6"),l(n,127,0),l(n,132,0),l(n,135,0),l(n,137,0,"12"),l(n,139,0),l(n,144,0),l(n,147,0,"API Reference"),l(n,149,0,"Properties <amexio-column>","assets/apireference/layout/column.json","get","properties",!1,!1),l(n,152,0,"Name","name",!1,"string",15),l(n,156,0,"Type","type",!1,"string",10),l(n,160,0,"Default","default",!1,"string",10),l(n,164,0,"Description","description",!1,"string",65),l(n,168,0,"Source"),l(n,171,0),l(n,174,0,"HTML",!0),l(n,176,0,u.htmlCode),l(n,178,0,"Type Script"),l(n,180,0,u.typeScriptCode),l(n,182,0,"Live")},function(l,n){l(n,20,0,a.cb(n,21).role),l(n,30,0,a.cb(n,31).role),l(n,40,0,a.cb(n,41).role),l(n,50,0,a.cb(n,51).role),l(n,60,0,a.cb(n,61).role),l(n,70,0,a.cb(n,71).role),l(n,82,0,a.cb(n,83).role),l(n,92,0,a.cb(n,93).role),l(n,102,0,a.cb(n,103).role),l(n,114,0,a.cb(n,115).role),l(n,124,0,a.cb(n,125).role),l(n,136,0,a.cb(n,137).role)})}var S=a.Oa("column-demo",d,function(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,1,"column-demo",[],null,null,null,y,s)),a.Ra(1,49152,null,0,d,[r.d],null,null)],null,null)},{},{},[]),R=u("gIcY"),h=u("t/Na"),f=u("ZYCi");u.d(n,"ColumnDemoModuleNgFactory",function(){return k});var k=a.Pa(e,[],function(l){return a.Za([a.ab(512,a.k,a.Ea,[[8,[i.a,o.a,S]],[3,a.k],a.z]),a.ab(4608,c.o,c.n,[a.w,[2,c.x]]),a.ab(4608,R.G,R.G,[]),a.ab(4608,r.c,r.c,[]),a.ab(4608,r.g,r.b,[]),a.ab(5120,r.i,r.j,[]),a.ab(4608,r.h,r.h,[r.c,r.g,r.i]),a.ab(4608,r.f,r.a,[]),a.ab(5120,r.d,r.k,[r.h,r.f]),a.ab(4608,h.i,h.o,[c.d,a.D,h.m]),a.ab(4608,h.p,h.p,[h.i,h.n]),a.ab(5120,h.a,function(l){return[l]},[h.p]),a.ab(4608,h.l,h.l,[]),a.ab(6144,h.j,null,[h.l]),a.ab(4608,h.h,h.h,[h.j]),a.ab(6144,h.b,null,[h.h]),a.ab(4608,h.f,h.k,[h.b,a.s]),a.ab(4608,h.c,h.c,[h.f]),a.ab(4608,m.Qa,m.Qa,[h.c]),a.ab(4608,m.jb,m.jb,[]),a.ab(4608,m.ab,m.ab,[a.D]),a.ab(4608,m.A,m.A,[]),a.ab(4608,m.Fb,m.Fb,[]),a.ab(4608,R.f,R.f,[]),a.ab(1073742336,c.c,c.c,[]),a.ab(1073742336,R.D,R.D,[]),a.ab(1073742336,R.l,R.l,[]),a.ab(1073742336,r.e,r.e,[]),a.ab(1073742336,b.b,b.b,[]),a.ab(1073742336,h.e,h.e,[]),a.ab(1073742336,h.d,h.d,[]),a.ab(1073742336,m.yb,m.yb,[]),a.ab(1073742336,m.C,m.C,[]),a.ab(1073742336,m.x,m.x,[]),a.ab(1073742336,m.F,m.F,[]),a.ab(1073742336,m.H,m.H,[]),a.ab(1073742336,R.z,R.z,[]),a.ab(1073742336,m.K,m.K,[]),a.ab(1073742336,m.p,m.p,[]),a.ab(1073742336,m.Y,m.Y,[]),a.ab(1073742336,f.n,f.n,[[2,f.t],[2,f.m]]),a.ab(1073742336,e,e,[]),a.ab(256,h.m,"XSRF-TOKEN",[]),a.ab(256,h.n,"X-XSRF-TOKEN",[]),a.ab(1024,f.i,function(){return[[{path:"",component:d,pathMatch:"full"}]]},[])])})}}]);