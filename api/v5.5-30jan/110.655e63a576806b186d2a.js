(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{VKgI:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),e=function(){},o=u("gTgE"),i=u("pMnS"),t=u("U89g"),b=u("d2mR"),c=u("O4vx"),r=u("Ip0R"),m=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,u=this;this.http.get("assets/data/code/layout/row/layout.html").subscribe(function(n){l=n.text()},function(l){},function(){u.htmlCode=l}),this.http.get("assets/data/code/layout/row/layout.text").subscribe(function(l){n=l.text()},function(l){},function(){u.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),d=u("sE5F"),s=a.Qa({encapsulation:2,styles:[],data:{}});function x(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,t.b,t.a)),a.Ra(2,4243456,null,0,b.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.htmlCode,"html")},null)}function p(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,t.b,t.a)),a.Ra(2,4243456,null,0,b.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.typeScriptCode,"typescript")},null)}function S(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,132,"amexio-card",[["header","true"]],null,null,null,o.dc,o.k)),a.Ra(1,7585792,null,3,c.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(l()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,o.pc,o.w)),a.Ra(6,114688,[[1,4]],0,c.C,[],null,null),(l()(),a.kb(-1,0,[" Row "])),(l()(),a.Sa(8,0,null,1,124,"amexio-body",[],null,null,null,o.Xb,o.e)),a.Ra(9,114688,[[2,4]],0,c.d,[],null,null),(l()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["Amexio uses a series of rows and columns to layout and align content and is fully responsive."])),(l()(),a.Sa(12,0,null,0,120,"amexio-tab-view",[],null,null,null,o.Ac,o.H)),a.Ra(13,5488640,null,2,c.S,[a.F,a.k,a.F],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(l()(),a.Sa(16,0,null,1,97,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,o.Bc,o.I)),a.Ra(17,114688,[[4,4]],0,c.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Sa(18,0,null,0,41,"amexio-card",[["header","true"]],null,null,null,o.dc,o.k)),a.Ra(19,7585792,null,3,c.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,6,{amexioHeader:1}),a.ib(603979776,7,{amexioBody:1}),a.ib(603979776,8,{amexioFooter:1}),(l()(),a.Sa(23,0,null,0,2,"amexio-header",[],null,null,null,o.pc,o.w)),a.Ra(24,114688,[[6,4]],0,c.C,[],null,null),(l()(),a.kb(-1,0,["1 Row 3 Column"])),(l()(),a.Sa(26,0,null,1,33,"amexio-body",[],null,null,null,o.Xb,o.e)),a.Ra(27,114688,[[7,4]],0,c.d,[],null,null),(l()(),a.Sa(28,0,null,0,31,"amexio-row",[],null,null,null,o.wc,o.D)),a.Ra(29,1163264,null,0,c.O,[],null,null),(l()(),a.Sa(30,0,null,0,9,"amexio-column",[["size","4"]],[[1,"class",0]],null,null,o.fc,o.m)),a.Ra(31,114688,null,0,c.m,[],{size:[0,"size"]},null),(l()(),a.Sa(32,0,null,0,7,"amexio-card",[],null,null,null,o.dc,o.k)),a.Ra(33,7585792,null,3,c.j,[a.F],null,null),a.ib(603979776,9,{amexioHeader:1}),a.ib(603979776,10,{amexioBody:1}),a.ib(603979776,11,{amexioFooter:1}),(l()(),a.Sa(37,0,null,1,2,"amexio-body",[],null,null,null,o.Xb,o.e)),a.Ra(38,114688,[[10,4]],0,c.d,[],null,null),(l()(),a.kb(-1,0,["COL 4"])),(l()(),a.Sa(40,0,null,0,9,"amexio-column",[["size","4"]],[[1,"class",0]],null,null,o.fc,o.m)),a.Ra(41,114688,null,0,c.m,[],{size:[0,"size"]},null),(l()(),a.Sa(42,0,null,0,7,"amexio-card",[],null,null,null,o.dc,o.k)),a.Ra(43,7585792,null,3,c.j,[a.F],null,null),a.ib(603979776,12,{amexioHeader:1}),a.ib(603979776,13,{amexioBody:1}),a.ib(603979776,14,{amexioFooter:1}),(l()(),a.Sa(47,0,null,1,2,"amexio-body",[],null,null,null,o.Xb,o.e)),a.Ra(48,114688,[[13,4]],0,c.d,[],null,null),(l()(),a.kb(-1,0,["COL 4"])),(l()(),a.Sa(50,0,null,0,9,"amexio-column",[["size","4"]],[[1,"class",0]],null,null,o.fc,o.m)),a.Ra(51,114688,null,0,c.m,[],{size:[0,"size"]},null),(l()(),a.Sa(52,0,null,0,7,"amexio-card",[],null,null,null,o.dc,o.k)),a.Ra(53,7585792,null,3,c.j,[a.F],null,null),a.ib(603979776,15,{amexioHeader:1}),a.ib(603979776,16,{amexioBody:1}),a.ib(603979776,17,{amexioFooter:1}),(l()(),a.Sa(57,0,null,1,2,"amexio-body",[],null,null,null,o.Xb,o.e)),a.Ra(58,114688,[[16,4]],0,c.d,[],null,null),(l()(),a.kb(-1,0,["COL 4"])),(l()(),a.Sa(60,0,null,0,53,"amexio-card",[["header","true"]],null,null,null,o.dc,o.k)),a.Ra(61,7585792,null,3,c.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,18,{amexioHeader:1}),a.ib(603979776,19,{amexioBody:1}),a.ib(603979776,20,{amexioFooter:1}),(l()(),a.Sa(65,0,null,0,2,"amexio-header",[],null,null,null,o.pc,o.w)),a.Ra(66,114688,[[18,4]],0,c.C,[],null,null),(l()(),a.kb(-1,0,["2 Row 2 Column"])),(l()(),a.Sa(68,0,null,1,45,"amexio-body",[],null,null,null,o.Xb,o.e)),a.Ra(69,114688,[[19,4]],0,c.d,[],null,null),(l()(),a.Sa(70,0,null,0,21,"amexio-row",[],null,null,null,o.wc,o.D)),a.Ra(71,1163264,null,0,c.O,[],null,null),(l()(),a.Sa(72,0,null,0,9,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,o.fc,o.m)),a.Ra(73,114688,null,0,c.m,[],{size:[0,"size"]},null),(l()(),a.Sa(74,0,null,0,7,"amexio-card",[],null,null,null,o.dc,o.k)),a.Ra(75,7585792,null,3,c.j,[a.F],null,null),a.ib(603979776,21,{amexioHeader:1}),a.ib(603979776,22,{amexioBody:1}),a.ib(603979776,23,{amexioFooter:1}),(l()(),a.Sa(79,0,null,1,2,"amexio-body",[],null,null,null,o.Xb,o.e)),a.Ra(80,114688,[[22,4]],0,c.d,[],null,null),(l()(),a.kb(-1,0,["COL 6"])),(l()(),a.Sa(82,0,null,0,9,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,o.fc,o.m)),a.Ra(83,114688,null,0,c.m,[],{size:[0,"size"]},null),(l()(),a.Sa(84,0,null,0,7,"amexio-card",[],null,null,null,o.dc,o.k)),a.Ra(85,7585792,null,3,c.j,[a.F],null,null),a.ib(603979776,24,{amexioHeader:1}),a.ib(603979776,25,{amexioBody:1}),a.ib(603979776,26,{amexioFooter:1}),(l()(),a.Sa(89,0,null,1,2,"amexio-body",[],null,null,null,o.Xb,o.e)),a.Ra(90,114688,[[25,4]],0,c.d,[],null,null),(l()(),a.kb(-1,0,["COL 6"])),(l()(),a.Sa(92,0,null,0,21,"amexio-row",[],null,null,null,o.wc,o.D)),a.Ra(93,1163264,null,0,c.O,[],null,null),(l()(),a.Sa(94,0,null,0,9,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,o.fc,o.m)),a.Ra(95,114688,null,0,c.m,[],{size:[0,"size"]},null),(l()(),a.Sa(96,0,null,0,7,"amexio-card",[],null,null,null,o.dc,o.k)),a.Ra(97,7585792,null,3,c.j,[a.F],null,null),a.ib(603979776,27,{amexioHeader:1}),a.ib(603979776,28,{amexioBody:1}),a.ib(603979776,29,{amexioFooter:1}),(l()(),a.Sa(101,0,null,1,2,"amexio-body",[],null,null,null,o.Xb,o.e)),a.Ra(102,114688,[[28,4]],0,c.d,[],null,null),(l()(),a.kb(-1,0,["COL 6"])),(l()(),a.Sa(104,0,null,0,9,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,o.fc,o.m)),a.Ra(105,114688,null,0,c.m,[],{size:[0,"size"]},null),(l()(),a.Sa(106,0,null,0,7,"amexio-card",[],null,null,null,o.dc,o.k)),a.Ra(107,7585792,null,3,c.j,[a.F],null,null),a.ib(603979776,30,{amexioHeader:1}),a.ib(603979776,31,{amexioBody:1}),a.ib(603979776,32,{amexioFooter:1}),(l()(),a.Sa(111,0,null,1,2,"amexio-body",[],null,null,null,o.Xb,o.e)),a.Ra(112,114688,[[31,4]],0,c.d,[],null,null),(l()(),a.kb(-1,0,["COL 6"])),(l()(),a.Sa(114,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,o.Bc,o.I)),a.Ra(115,114688,[[4,4]],0,c.T,[],{title:[0,"title"]},null),(l()(),a.Sa(116,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),a.Sa(117,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,o.Dc,o.K)),a.Ra(118,5357568,null,1,c.X,[a.F,a.k],null,null),a.ib(603979776,33,{queryTabs:1}),(l()(),a.Sa(120,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,o.Bc,o.I)),a.Ra(121,114688,[[33,4]],0,c.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Ja(16777216,null,0,1,null,x)),a.Ra(123,16384,null,0,r.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(124,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,o.Bc,o.I)),a.Ra(125,114688,[[33,4]],0,c.T,[],{title:[0,"title"]},null),(l()(),a.Ja(16777216,null,0,1,null,p)),a.Ra(127,16384,null,0,r.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(128,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,o.Bc,o.I)),a.Ra(129,114688,[[4,4]],0,c.T,[],{title:[0,"title"]},null),(l()(),a.Sa(130,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),a.kb(-1,null,["Amexio Sandbox"])),(l()(),a.Sa(132,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-rowlayout?embed=1&file=app/layouts/row/row.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,1,0,"true"),l(n,6,0),l(n,9,0),l(n,13,0),l(n,17,0,"Demo","true"),l(n,19,0,"true"),l(n,24,0),l(n,27,0),l(n,29,0),l(n,31,0,"4"),l(n,33,0),l(n,38,0),l(n,41,0,"4"),l(n,43,0),l(n,48,0),l(n,51,0,"4"),l(n,53,0),l(n,58,0),l(n,61,0,"true"),l(n,66,0),l(n,69,0),l(n,71,0),l(n,73,0,"6"),l(n,75,0),l(n,80,0),l(n,83,0,"6"),l(n,85,0),l(n,90,0),l(n,93,0),l(n,95,0,"6"),l(n,97,0),l(n,102,0),l(n,105,0,"6"),l(n,107,0),l(n,112,0),l(n,115,0,"Source"),l(n,118,0),l(n,121,0,"HTML",!0),l(n,123,0,u.htmlCode),l(n,125,0,"Type Script"),l(n,127,0,u.typeScriptCode),l(n,129,0,"Live")},function(l,n){l(n,30,0,a.cb(n,31).role),l(n,40,0,a.cb(n,41).role),l(n,50,0,a.cb(n,51).role),l(n,72,0,a.cb(n,73).role),l(n,82,0,a.cb(n,83).role),l(n,94,0,a.cb(n,95).role),l(n,104,0,a.cb(n,105).role)})}var y=a.Oa("row-demo",m,function(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,1,"row-demo",[],null,null,null,S,s)),a.Ra(1,49152,null,0,m,[d.d],null,null)],null,null)},{},{},[]),R=u("gIcY"),f=u("t/Na"),h=u("ZYCi");u.d(n,"RowDemoModuleNgFactory",function(){return g});var g=a.Pa(e,[],function(l){return a.Za([a.ab(512,a.k,a.Ea,[[8,[o.a,i.a,y]],[3,a.k],a.z]),a.ab(4608,r.o,r.n,[a.w,[2,r.x]]),a.ab(4608,R.G,R.G,[]),a.ab(4608,d.c,d.c,[]),a.ab(4608,d.g,d.b,[]),a.ab(5120,d.i,d.j,[]),a.ab(4608,d.h,d.h,[d.c,d.g,d.i]),a.ab(4608,d.f,d.a,[]),a.ab(5120,d.d,d.k,[d.h,d.f]),a.ab(4608,f.i,f.o,[r.d,a.D,f.m]),a.ab(4608,f.p,f.p,[f.i,f.n]),a.ab(5120,f.a,function(l){return[l]},[f.p]),a.ab(4608,f.l,f.l,[]),a.ab(6144,f.j,null,[f.l]),a.ab(4608,f.h,f.h,[f.j]),a.ab(6144,f.b,null,[f.h]),a.ab(4608,f.f,f.k,[f.b,a.s]),a.ab(4608,f.c,f.c,[f.f]),a.ab(4608,c.Ta,c.Ta,[f.c]),a.ab(4608,c.ob,c.ob,[]),a.ab(4608,c.db,c.db,[a.D]),a.ab(4608,c.B,c.B,[]),a.ab(4608,c.Kb,c.Kb,[]),a.ab(4608,R.f,R.f,[]),a.ab(4608,c.jb,c.jb,[]),a.ab(1073742336,r.c,r.c,[]),a.ab(1073742336,R.D,R.D,[]),a.ab(1073742336,R.l,R.l,[]),a.ab(1073742336,d.e,d.e,[]),a.ab(1073742336,b.b,b.b,[]),a.ab(1073742336,f.e,f.e,[]),a.ab(1073742336,f.d,f.d,[]),a.ab(1073742336,c.Db,c.Db,[]),a.ab(1073742336,c.D,c.D,[]),a.ab(1073742336,c.x,c.x,[]),a.ab(1073742336,c.G,c.G,[]),a.ab(1073742336,c.I,c.I,[]),a.ab(1073742336,R.z,R.z,[]),a.ab(1073742336,c.L,c.L,[]),a.ab(1073742336,c.p,c.p,[]),a.ab(1073742336,c.Aa,c.Aa,[]),a.ab(1073742336,h.n,h.n,[[2,h.t],[2,h.m]]),a.ab(1073742336,e,e,[]),a.ab(256,f.m,"XSRF-TOKEN",[]),a.ab(256,f.n,"X-XSRF-TOKEN",[]),a.ab(1024,h.i,function(){return[[{path:"",component:m,pathMatch:"full"}]]},[])])})}}]);