webpackJsonp(["groupbygrid.demo.module"],{kBre:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("LMZF"),u=function(){},a=e("tfJK"),d=e("Un6q"),i=e("KhCp"),_=e("kL+h"),o=e("drlO"),r=e("9iV4"),p=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/data/groupby/groupby.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/data/groupby/groupby.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n}),this.http.get("assets/data/componentdata/datagridgroupby.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.dataSource=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),c=t._1({encapsulation:2,styles:[],data:{}});function m(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._3(2,0,null,null,1,"div",[["style","text-decoration: line-through red;"]],null,null,null,null,null)),(l()(),t._25(3,null,["",""])),(l()(),t._25(-1,null,["\n                  "]))],null,function(l,n){l(n,3,0,n.parent.context.row.name)})}function h(l){return t._27(0,[(l()(),t._3(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),t._25(1,null,["\n                    ","\n                  "]))],null,function(l,n){l(n,1,0,n.parent.context.row.name)})}function s(l){return t._27(0,[(l()(),t._25(-1,null,["\n                  "])),(l()(),t.Y(16777216,null,null,1,null,m)),t._2(2,16384,null,0,d.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,null,["\n                  "])),(l()(),t.Y(16777216,null,null,1,null,h)),t._2(5,16384,null,0,d.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,null,["\n                "]))],function(l,n){l(n,2,0,n.context.row.deprecated),l(n,5,0,!n.context.row.deprecated)},null)}function x(l){return t._27(0,[(l()(),t._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._3(3,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),t._2(4,4243456,null,0,_.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function y(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._3(2,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),t._2(3,4243456,null,0,_.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function g(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._3(2,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),t._2(3,4243456,null,0,_.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,3,0,n.component.dataSource,"json")},null)}function b(l){return t._27(0,[(l()(),t._25(-1,null,["\n    "])),(l()(),t._3(1,0,null,null,187,"amexio-card",[["header","true"]],null,null,null,a._58,a.h)),t._2(2,5357568,null,3,o.g,[],{header:[0,"header"]},null),t._23(603979776,1,{amexioHeader:1}),t._23(603979776,2,{amexioBody:1}),t._23(603979776,3,{amexioFooter:1}),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(7,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),t._2(8,114688,[[1,4]],0,o.u,[],null,null),(l()(),t._25(-1,0,["\n         Data Grid Group By \n      "])),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(11,0,null,1,176,"amexio-body",[],null,null,null,a._54,a.d)),t._2(12,114688,[[2,4]],0,o.c,[],null,null),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(14,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t._25(-1,null,["Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection,Filtering(enable only for string and number type data) user define template for rendering for column header and column data, displaying summation of numeric column."])),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(17,16777216,null,0,169,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var u=!0;return"document:click"===n&&(u=!1!==t._16(l,18).onWindowClick()&&u),"document:scroll"===n&&(u=!1!==t._16(l,18).onscroll()&&u),u},a._77,a.A)),t._2(18,5357568,null,2,o.J,[t.B,t.j,t.M],null,null),t._23(603979776,4,{queryTabs:1}),t._23(603979776,5,{queryAction:1}),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(22,0,null,1,46,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,a._78,a.B)),t._2(23,114688,[[4,4]],0,o.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(25,0,null,0,42,"amexio-row",[],null,null,null,a._73,a.w)),t._2(26,1163264,null,0,o.F,[],null,null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(28,0,null,0,38,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,a._60,a.j)),t._2(29,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(31,0,null,0,34,"amexio-card",[],null,null,null,a._58,a.h)),t._2(32,5357568,null,3,o.g,[],{header:[0,"header"]},null),t._23(603979776,6,{amexioHeader:1}),t._23(603979776,7,{amexioBody:1}),t._23(603979776,8,{amexioFooter:1}),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(37,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),t._2(38,114688,[[6,4]],0,o.u,[],null,null),(l()(),t._25(-1,0,["\n                     Data Grid Group By \n                  "])),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(41,0,null,1,23,"amexio-body",[],null,null,null,a._54,a.d)),t._2(42,114688,[[7,4]],0,o.c,[],null,null),(l()(),t._25(-1,0,["\n                    "])),(l()(),t._3(44,0,null,0,19,"amexio-datagrid",[],null,null,null,a._135,a._32)),t._2(45,1425408,null,1,o._66,[o._5,t.h],{title:[0,"title"],pagesize:[1,"pagesize"],httpurl:[2,"httpurl"],httpmethod:[3,"httpmethod"],datareader:[4,"datareader"],groupby:[5,"groupby"],groupbydataindex:[6,"groupbydataindex"]},null),t._23(603979776,9,{columnRef:1}),(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(48,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(49,49152,[[9,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,10,{headerTemplate:0}),t._23(335544320,11,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(53,0,null,null,4,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(54,49152,[[9,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,12,{headerTemplate:0}),t._23(335544320,13,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                      "])),(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(59,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(60,49152,[[9,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,14,{headerTemplate:0}),t._23(335544320,15,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._25(-1,0,["\n                  "])),(l()(),t._25(-1,null,["\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(70,0,null,1,73,"amexio-tab",[["title","API Reference"]],null,null,null,a._78,a.B)),t._2(71,114688,[[4,4]],0,o.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(73,0,null,0,26,"amexio-datagrid",[["title","Properties<amexio-datagrid>"]],null,null,null,a._135,a._32)),t._2(74,1425408,null,1,o._66,[o._5,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,16,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(77,0,null,null,6,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(78,49152,[[16,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,17,{headerTemplate:0}),t._23(335544320,18,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                "])),(l()(),t.Y(0,[[18,2],["amexioBodyTmpl",2]],null,0,null,s)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(85,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(86,49152,[[16,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,19,{headerTemplate:0}),t._23(335544320,20,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(90,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(91,49152,[[16,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,21,{headerTemplate:0}),t._23(335544320,22,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(95,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(96,49152,[[16,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,23,{headerTemplate:0}),t._23(335544320,24,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._3(100,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(102,0,null,0,23,"amexio-datagrid",[["title","Column Properties"]],null,null,null,a._135,a._32)),t._2(103,1425408,null,1,o._66,[o._5,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,25,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(106,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(107,49152,[[25,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,26,{headerTemplate:0}),t._23(335544320,27,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(111,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(112,49152,[[25,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,28,{headerTemplate:0}),t._23(335544320,29,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(116,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(117,49152,[[25,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,30,{headerTemplate:0}),t._23(335544320,31,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(121,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(122,49152,[[25,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,32,{headerTemplate:0}),t._23(335544320,33,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(127,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(129,0,null,0,13,"amexio-datagrid",[["title","Events"]],null,null,null,a._135,a._32)),t._2(130,1425408,null,1,o._66,[o._5,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),t._23(603979776,34,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(133,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(134,49152,[[34,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,35,{headerTemplate:0}),t._23(335544320,36,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(138,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(139,49152,[[34,4]],2,o._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,37,{headerTemplate:0}),t._23(335544320,38,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n\n          "])),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(145,0,null,1,31,"amexio-tab",[["title","Source"]],null,null,null,a._78,a.B)),t._2(146,114688,[[4,4]],0,o.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(148,0,null,0,27,"div",[["style","overflow-y: scroll;"]],null,null,null,null,null)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(150,0,null,null,24,"amexio-vertical-tab-view",[],null,null,null,a._80,a.D)),t._2(151,5357568,null,1,o.O,[t.B],null,null),t._23(603979776,39,{queryTabs:1}),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(154,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,a._78,a.B)),t._2(155,114688,[[39,4]],0,o.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n                  "])),(l()(),t.Y(16777216,null,0,1,null,x)),t._2(158,16384,null,0,d.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(161,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,a._78,a.B)),t._2(162,114688,[[39,4]],0,o.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n                  "])),(l()(),t.Y(16777216,null,0,1,null,y)),t._2(165,16384,null,0,d.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(168,0,null,0,5,"amexio-tab",[["title","DataSource"]],null,null,null,a._78,a.B)),t._2(169,114688,[[39,4]],0,o.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n                  "])),(l()(),t.Y(16777216,null,0,1,null,g)),t._2(172,16384,null,0,d.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n           \n          "])),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(178,0,null,1,7,"amexio-tab",[["title","Live"]],null,null,null,a._78,a.B)),t._2(179,114688,[[4,4]],0,o.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(181,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),t._25(-1,null,["Amexio Sandbox"])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(184,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-groupby-grid?embed=1&file=app/grid/groupbygrid/groupbygrid.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,1,["\n        "])),(l()(),t._25(-1,0,["\n      "])),(l()(),t._25(-1,null,["\n    "])),(l()(),t._25(-1,null,["\n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,8,0),l(n,12,0),l(n,18,0),l(n,23,0,"Demo","true"),l(n,26,0),l(n,29,0,"12"),l(n,32,0,!0),l(n,38,0),l(n,42,0),l(n,45,0,"Employee Data",10,"assets/data/componentdata/datagridgroupby.json","get","data",!0,"jobTitle"),l(n,49,0,"Full Name","preferredFullName",!1,"string",30),l(n,54,0,"Job Title","jobTitle",!1,"string",30),l(n,60,0,"Salary","salary",!1,"number",30),l(n,71,0,"API Reference"),l(n,74,0,"Properties<amexio-datagrid>","assets/apireference/data/grid.json","get","properties",!1,!1),l(n,78,0,"Name","name",!1,"string",20),l(n,86,0,"Type","type",!1,"string",10),l(n,91,0,"Default","default",!1,"string",10),l(n,96,0,"Description","description",!1,"string",65),l(n,103,0,"Column Properties","assets/apireference/data/grid.json","get","columnProperties",!1,!1),l(n,107,0,"Name","name",!1,"string",15),l(n,112,0,"Type","type",!1,"string",10),l(n,117,0,"Default","default",!1,"string",10),l(n,122,0,"Description","description",!1,"string",65),l(n,130,0,"Events","assets/apireference/data/grid.json","get","events",!1),l(n,134,0,"Name","name",!1,"string",20),l(n,139,0,"Description","description",!1,"string",65),l(n,146,0,"Source"),l(n,151,0),l(n,155,0,"HTML",!0),l(n,158,0,e.htmlCode),l(n,162,0,"Type Script"),l(n,165,0,e.typeScriptCode),l(n,169,0,"DataSource"),l(n,172,0,e.dataSource),l(n,179,0,"Live")},function(l,n){l(n,28,0,t._16(n,29).colclass)})}var f=t.Z("groupbygrid-demo",p,function(l){return t._27(0,[(l()(),t._3(0,0,null,null,1,"groupbygrid-demo",[],null,null,null,b,c)),t._2(1,49152,null,0,p,[r.c],null,null)],null,null)},{},{},[]),T=e("0nO6"),w=e("UHIZ");e.d(n,"GroupByGridDemoModuleNgFactory",function(){return v});var v=t._0(u,[],function(l){return t._12([t._13(512,t.j,t.W,[[8,[a.a,f]],[3,t.j],t.v]),t._13(4608,d.n,d.m,[t.s,[2,d.u]]),t._13(4608,T.s,T.s,[]),t._13(4608,r.h,r.m,[d.c,t.z,r.k]),t._13(4608,r.n,r.n,[r.h,r.l]),t._13(5120,r.a,function(l){return[l]},[r.n]),t._13(4608,r.j,r.j,[]),t._13(6144,r.i,null,[r.j]),t._13(4608,r.g,r.g,[r.i]),t._13(6144,r.b,null,[r.g]),t._13(5120,r.f,r.o,[r.b,[2,r.a]]),t._13(4608,r.c,r.c,[r.f]),t._13(4608,o._5,o._5,[r.c]),t._13(4608,o._15,o._15,[t.z]),t._13(4608,o._22,o._22,[]),t._13(4608,o._40,o._40,[]),t._13(512,d.b,d.b,[]),t._13(512,T.p,T.p,[]),t._13(512,T.e,T.e,[]),t._13(512,r.e,r.e,[]),t._13(512,r.d,r.d,[]),t._13(512,_.b,_.b,[]),t._13(512,o.v,o.v,[]),t._13(512,o.t,o.t,[]),t._13(512,o.y,o.y,[]),t._13(512,o.A,o.A,[]),t._13(512,o.D,o.D,[]),t._13(512,o.l,o.l,[]),t._13(512,o.Q,o.Q,[]),t._13(512,w.n,w.n,[[2,w.s],[2,w.m]]),t._13(512,u,u,[]),t._13(256,r.k,"XSRF-TOKEN",[]),t._13(256,r.l,"X-XSRF-TOKEN",[]),t._13(1024,w.i,function(){return[[{path:"",component:p,pathMatch:"full"}]]},[])])})}});