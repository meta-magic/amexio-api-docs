(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{U89g:function(l,e,n){"use strict";n.d(e,"a",function(){return t}),n.d(e,"b",function(){return o});var a=n("CcnG"),t=(n("d2mR"),n("Ip0R"),a.Qa({encapsulation:2,styles:[],data:{}}));function o(l){return a.mb(0,[],null,null)}},XIHC:function(l,e){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(l,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return t}),n("wZee"),n("XIHC");var a=function(){function l(l,e){this._renderer=l,this._el=e,this.nativeElement=e.nativeElement}return l.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},l}(),t=function(){}},"j9+S":function(l,e,n){"use strict";n.r(e);var a=n("CcnG"),t=function(){},o=n("gTgE"),i=n("pMnS"),u=n("U89g"),r=n("d2mR"),c=n("O4vx"),s=n("Ip0R"),d=function(){function l(l){this.http=l,this.clickShow=!0,this.text="Hide",this.getHtmlAndTypeScriptCode(),this.colorModel=new m}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,e,n=this;this.http.get("assets/data/code/data/spinner/spinner.html",{responseType:"text"}).subscribe(function(e){l=e},function(l){},function(){n.htmlCode=l}),this.http.get("assets/data/code/data/spinner/spinner.text",{responseType:"text"}).subscribe(function(l){e=l},function(l){},function(){n.typeScriptCode=e})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.setColorForIndictor=function(l){this.colorModel.color=l.target.value},l.prototype.onButtonClick=function(l){this.text=this.clickShow?"Show":"Hide",this.clickShow=!this.clickShow},l}(),m=function(){},b=n("t/Na"),p=a.Qa({encapsulation:2,styles:[],data:{}});function h(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,r.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.htmlCode,"html")},null)}function g(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,r.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,e){l(e,2,0,e.component.typeScriptCode,"typescript")},null)}function f(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,200,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a.cb(l,1).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==a.cb(l,1).onscroll()&&t),t},o.Pb,o.i)),a.Ra(1,5357568,null,3,c.h,[],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(l()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,o.Yb,o.r)),a.Ra(6,114688,[[1,4]],0,c.v,[],null,null),(l()(),a.kb(-1,0,[" Data Loading Indicator "])),(l()(),a.Sa(8,0,null,1,192,"amexio-body",[],null,null,null,o.Lb,o.e)),a.Ra(9,114688,[[2,4]],0,c.d,[],null,null),(l()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a.kb(-1,null,["Data Loading Indicator Component Provides up-to-date feedback on the progress of a workflow or action with simple yet flexible spinner and easy to configure."])),(l()(),a.Sa(12,16777216,null,0,188,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a.cb(l,13).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==a.cb(l,13).onscroll()&&t),t},o.jc,o.C)),a.Ra(13,5357568,null,2,c.L,[a.F,a.k,a.R],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(l()(),a.Sa(16,0,null,1,140,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,o.kc,o.D)),a.Ra(17,114688,[[4,4]],0,c.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Sa(18,0,null,0,138,"amexio-row",[],null,null,null,o.fc,o.y)),a.Ra(19,1163264,null,0,c.H,[],null,null),(l()(),a.Sa(20,0,null,0,136,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,o.Rb,o.k)),a.Ra(21,114688,null,0,c.k,[],{size:[0,"size"]},null),(l()(),a.Sa(22,0,null,0,134,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a.cb(l,23).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==a.cb(l,23).onscroll()&&t),t},o.Pb,o.i)),a.Ra(23,5357568,null,3,c.h,[],{header:[0,"header"]},null),a.ib(603979776,6,{amexioHeader:1}),a.ib(603979776,7,{amexioBody:1}),a.ib(603979776,8,{amexioFooter:1}),(l()(),a.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,o.Yb,o.r)),a.Ra(28,114688,[[6,4]],0,c.v,[],null,null),(l()(),a.kb(-1,0,[" Data Loading Indicator "])),(l()(),a.Sa(30,0,null,1,126,"amexio-body",[],null,null,null,o.Lb,o.e)),a.Ra(31,114688,[[7,4]],0,c.d,[],null,null),(l()(),a.Sa(32,0,null,0,1,"amexio-button",[],null,[[null,"onClick"]],function(l,e,n){var t=!0;return"onClick"===e&&(t=!1!==l.component.onButtonClick(a.cb(l,54))&&t),t},o.Ed,o.xb)),a.Ra(33,114688,null,0,c.ic,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},{onClick:"onClick"}),(l()(),a.Sa(34,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),a.Sa(35,0,null,0,2,"amexio-label",[["size","small-bold"]],null,null,null,o.Nd,o.Gb)),a.Ra(36,114688,null,0,c.uc,[],{styleClass:[0,"styleClass"]},null),(l()(),a.kb(-1,0,["Select Color For Spinner : -"])),(l()(),a.Sa(38,0,null,0,0,"input",[["id","head"],["name","color"],["type","color"],["value","colorModel.color"]],null,[[null,"input"]],function(l,e,n){var a=!0;return"input"===e&&(a=!1!==l.component.setColorForIndictor(n)&&a),a},null,null)),(l()(),a.Sa(39,0,null,0,43,"amexio-row",[],null,null,null,o.fc,o.y)),a.Ra(40,1163264,null,0,c.H,[],null,null),(l()(),a.Sa(41,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,o.Rb,o.k)),a.Ra(42,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(43,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a.cb(l,44).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==a.cb(l,44).onscroll()&&t),t},o.Pb,o.i)),a.Ra(44,5357568,null,3,c.h,[],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),a.ib(603979776,9,{amexioHeader:1}),a.ib(603979776,10,{amexioBody:1}),a.ib(603979776,11,{amexioFooter:1}),(l()(),a.Sa(48,0,null,0,2,"amexio-header",[],null,null,null,o.Yb,o.r)),a.Ra(49,114688,[[9,4]],0,c.v,[],null,null),(l()(),a.kb(-1,0,[" fading circle round loader "])),(l()(),a.Sa(51,0,null,1,3,"amexio-body",[],null,null,null,o.Lb,o.e)),a.Ra(52,114688,[[10,4]],0,c.d,[],null,null),(l()(),a.Sa(53,0,null,0,1,"amexio-spinner",[],null,null,null,o.gd,o.Za)),a.Ra(54,114688,[["click",4]],0,c.Bb,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),a.Sa(55,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,o.Rb,o.k)),a.Ra(56,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(57,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a.cb(l,58).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==a.cb(l,58).onscroll()&&t),t},o.Pb,o.i)),a.Ra(58,5357568,null,3,c.h,[],{header:[0,"header"]},null),a.ib(603979776,12,{amexioHeader:1}),a.ib(603979776,13,{amexioBody:1}),a.ib(603979776,14,{amexioFooter:1}),(l()(),a.Sa(62,0,null,0,2,"amexio-header",[],null,null,null,o.Yb,o.r)),a.Ra(63,114688,[[12,4]],0,c.v,[],null,null),(l()(),a.kb(-1,0,[" ball spin loader "])),(l()(),a.Sa(65,0,null,1,3,"amexio-body",[],null,null,null,o.Lb,o.e)),a.Ra(66,114688,[[13,4]],0,c.d,[],null,null),(l()(),a.Sa(67,0,null,0,1,"amexio-spinner",[],null,null,null,o.gd,o.Za)),a.Ra(68,114688,null,0,c.Bb,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),a.Sa(69,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,o.Rb,o.k)),a.Ra(70,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(71,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a.cb(l,72).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==a.cb(l,72).onscroll()&&t),t},o.Pb,o.i)),a.Ra(72,5357568,null,3,c.h,[],{header:[0,"header"]},null),a.ib(603979776,15,{amexioHeader:1}),a.ib(603979776,16,{amexioBody:1}),a.ib(603979776,17,{amexioFooter:1}),(l()(),a.Sa(76,0,null,0,2,"amexio-header",[],null,null,null,o.Yb,o.r)),a.Ra(77,114688,[[15,4]],0,c.v,[],null,null),(l()(),a.kb(-1,0,[" fire spin loader "])),(l()(),a.Sa(79,0,null,1,3,"amexio-body",[],null,null,null,o.Lb,o.e)),a.Ra(80,114688,[[16,4]],0,c.d,[],null,null),(l()(),a.Sa(81,0,null,0,1,"amexio-spinner",[],null,null,null,o.gd,o.Za)),a.Ra(82,114688,null,0,c.Bb,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),a.Sa(83,0,null,0,43,"amexio-row",[],null,null,null,o.fc,o.y)),a.Ra(84,1163264,null,0,c.H,[],null,null),(l()(),a.Sa(85,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,o.Rb,o.k)),a.Ra(86,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(87,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a.cb(l,88).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==a.cb(l,88).onscroll()&&t),t},o.Pb,o.i)),a.Ra(88,5357568,null,3,c.h,[],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),a.ib(603979776,18,{amexioHeader:1}),a.ib(603979776,19,{amexioBody:1}),a.ib(603979776,20,{amexioFooter:1}),(l()(),a.Sa(92,0,null,0,2,"amexio-header",[],null,null,null,o.Yb,o.r)),a.Ra(93,114688,[[18,4]],0,c.v,[],null,null),(l()(),a.kb(-1,0,[" three bounce loader "])),(l()(),a.Sa(95,0,null,1,3,"amexio-body",[],null,null,null,o.Lb,o.e)),a.Ra(96,114688,[[19,4]],0,c.d,[],null,null),(l()(),a.Sa(97,0,null,0,1,"amexio-spinner",[],null,null,null,o.gd,o.Za)),a.Ra(98,114688,null,0,c.Bb,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),a.Sa(99,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,o.Rb,o.k)),a.Ra(100,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(101,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a.cb(l,102).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==a.cb(l,102).onscroll()&&t),t},o.Pb,o.i)),a.Ra(102,5357568,null,3,c.h,[],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),a.ib(603979776,21,{amexioHeader:1}),a.ib(603979776,22,{amexioBody:1}),a.ib(603979776,23,{amexioFooter:1}),(l()(),a.Sa(106,0,null,0,2,"amexio-header",[],null,null,null,o.Yb,o.r)),a.Ra(107,114688,[[21,4]],0,c.v,[],null,null),(l()(),a.kb(-1,0,[" spinner round loader "])),(l()(),a.Sa(109,0,null,1,3,"amexio-body",[],null,null,null,o.Lb,o.e)),a.Ra(110,114688,[[22,4]],0,c.d,[],null,null),(l()(),a.Sa(111,0,null,0,1,"amexio-spinner",[],null,null,null,o.gd,o.Za)),a.Ra(112,114688,null,0,c.Bb,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),a.Sa(113,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,o.Rb,o.k)),a.Ra(114,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(115,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a.cb(l,116).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==a.cb(l,116).onscroll()&&t),t},o.Pb,o.i)),a.Ra(116,5357568,null,3,c.h,[],{header:[0,"header"]},null),a.ib(603979776,24,{amexioHeader:1}),a.ib(603979776,25,{amexioBody:1}),a.ib(603979776,26,{amexioFooter:1}),(l()(),a.Sa(120,0,null,0,2,"amexio-header",[],null,null,null,o.Yb,o.r)),a.Ra(121,114688,[[24,4]],0,c.v,[],null,null),(l()(),a.kb(-1,0,[" ring loader "])),(l()(),a.Sa(123,0,null,1,3,"amexio-body",[],null,null,null,o.Lb,o.e)),a.Ra(124,114688,[[25,4]],0,c.d,[],null,null),(l()(),a.Sa(125,0,null,0,1,"amexio-spinner",[],null,null,null,o.gd,o.Za)),a.Ra(126,114688,null,0,c.Bb,[a.F],{type:[0,"type"],color:[1,"color"],show:[2,"show"],size:[3,"size"]},null),(l()(),a.Sa(127,0,null,0,29,"amexio-row",[],null,null,null,o.fc,o.y)),a.Ra(128,1163264,null,0,c.H,[],null,null),(l()(),a.Sa(129,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,o.Rb,o.k)),a.Ra(130,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(131,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a.cb(l,132).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==a.cb(l,132).onscroll()&&t),t},o.Pb,o.i)),a.Ra(132,5357568,null,3,c.h,[],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),a.ib(603979776,27,{amexioHeader:1}),a.ib(603979776,28,{amexioBody:1}),a.ib(603979776,29,{amexioFooter:1}),(l()(),a.Sa(136,0,null,0,2,"amexio-header",[],null,null,null,o.Yb,o.r)),a.Ra(137,114688,[[27,4]],0,c.v,[],null,null),(l()(),a.kb(-1,0,[" half circle loader "])),(l()(),a.Sa(139,0,null,1,3,"amexio-body",[],null,null,null,o.Lb,o.e)),a.Ra(140,114688,[[28,4]],0,c.d,[],null,null),(l()(),a.Sa(141,0,null,0,1,"amexio-spinner",[],null,null,null,o.gd,o.Za)),a.Ra(142,114688,null,0,c.Bb,[a.F],{type:[0,"type"],show:[1,"show"],size:[2,"size"]},null),(l()(),a.Sa(143,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,o.Rb,o.k)),a.Ra(144,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),a.Sa(145,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,e,n){var t=!0;return"document:click"===e&&(t=!1!==a.cb(l,146).onWindowClick()&&t),"document:scroll"===e&&(t=!1!==a.cb(l,146).onscroll()&&t),t},o.Pb,o.i)),a.Ra(146,5357568,null,3,c.h,[],{header:[0,"header"],bodyheight:[1,"bodyheight"]},null),a.ib(603979776,30,{amexioHeader:1}),a.ib(603979776,31,{amexioBody:1}),a.ib(603979776,32,{amexioFooter:1}),(l()(),a.Sa(150,0,null,0,2,"amexio-header",[],null,null,null,o.Yb,o.r)),a.Ra(151,114688,[[30,4]],0,c.v,[],null,null),(l()(),a.kb(-1,0,[" rectangle Bounce loader "])),(l()(),a.Sa(153,0,null,1,3,"amexio-body",[],null,null,null,o.Lb,o.e)),a.Ra(154,114688,[[31,4]],0,c.d,[],null,null),(l()(),a.Sa(155,0,null,0,1,"amexio-spinner",[],null,null,null,o.gd,o.Za)),a.Ra(156,114688,null,0,c.Bb,[a.F],{type:[0,"type"],show:[1,"show"],size:[2,"size"]},null),(l()(),a.Sa(157,0,null,1,24,"amexio-tab",[["title","API Reference"]],null,null,null,o.kc,o.D)),a.Ra(158,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),a.Sa(159,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-spinner>"]],null,[["document","scroll"],["document","click"]],function(l,e,n){var t=!0;return"document:scroll"===e&&(t=!1!==a.cb(l,160).onscroll()&&t),"document:click"===e&&(t=!1!==a.cb(l,160).onclick()&&t),t},o.nd,o.gb)),a.Ra(160,1163264,null,1,c.Nb,[a.l,c.Ka,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,33,{columnRef:1}),(l()(),a.Sa(162,0,null,null,3,"amexio-data-table-column",[],null,null,null,o.od,o.hb)),a.Ra(163,49152,[[33,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,34,{headerTemplate:0}),a.ib(335544320,35,{bodyTemplate:0}),(l()(),a.Sa(166,0,null,null,3,"amexio-data-table-column",[],null,null,null,o.od,o.hb)),a.Ra(167,49152,[[33,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,36,{headerTemplate:0}),a.ib(335544320,37,{bodyTemplate:0}),(l()(),a.Sa(170,0,null,null,3,"amexio-data-table-column",[],null,null,null,o.od,o.hb)),a.Ra(171,49152,[[33,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,38,{headerTemplate:0}),a.ib(335544320,39,{bodyTemplate:0}),(l()(),a.Sa(174,0,null,null,3,"amexio-data-table-column",[],null,null,null,o.od,o.hb)),a.Ra(175,49152,[[33,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,40,{headerTemplate:0}),a.ib(335544320,41,{bodyTemplate:0}),(l()(),a.Sa(178,0,null,null,3,"amexio-data-table-column",[],null,null,null,o.od,o.hb)),a.Ra(179,49152,[[33,4]],2,c.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,42,{headerTemplate:0}),a.ib(335544320,43,{bodyTemplate:0}),(l()(),a.Sa(182,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,o.kc,o.D)),a.Ra(183,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),a.Sa(184,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),a.Sa(185,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,o.mc,o.F)),a.Ra(186,5357568,null,1,c.Q,[a.F],null,null),a.ib(603979776,44,{queryTabs:1}),(l()(),a.Sa(188,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,o.kc,o.D)),a.Ra(189,114688,[[44,4]],0,c.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),a.Ja(16777216,null,0,1,null,h)),a.Ra(191,16384,null,0,s.l,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(192,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,o.kc,o.D)),a.Ra(193,114688,[[44,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),a.Ja(16777216,null,0,1,null,g)),a.Ra(195,16384,null,0,s.l,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Sa(196,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,o.kc,o.D)),a.Ra(197,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),a.Sa(198,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),a.kb(-1,null,["Amexio Sandbox"])),(l()(),a.Sa(200,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-progressbar?embed=1&file=app/data/progressbar/progressbar.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,e){var n=e.component;l(e,1,0,"true"),l(e,6,0),l(e,9,0),l(e,13,0),l(e,17,0,"Demo","true"),l(e,19,0),l(e,21,0,"12"),l(e,23,0,!0),l(e,28,0),l(e,31,0),l(e,33,0,n.text,"yellow","show"),l(e,36,0,"small-bold"),l(e,40,0),l(e,42,0,!0,4),l(e,44,0,!0,45),l(e,49,0),l(e,52,0),l(e,54,0,"fadingcircle",n.colorModel.color,n.clickShow,"18px"),l(e,56,0,!0,4),l(e,58,0,!0),l(e,63,0),l(e,66,0),l(e,68,0,"ballspin",n.colorModel.color,n.clickShow,"16px"),l(e,70,0,!0,4),l(e,72,0,!0),l(e,77,0),l(e,80,0),l(e,82,0,"firespin",n.colorModel.color,n.clickShow,"40px"),l(e,84,0),l(e,86,0,!0,4),l(e,88,0,!0,45),l(e,93,0),l(e,96,0),l(e,98,0,"threebounce",n.colorModel.color,n.clickShow,"15px"),l(e,100,0,!0,4),l(e,102,0,!0,45),l(e,107,0),l(e,110,0),l(e,112,0,"spinnerround",n.colorModel.color,n.clickShow,"8px"),l(e,114,0,!0,4),l(e,116,0,!0),l(e,121,0),l(e,124,0),l(e,126,0,"ring",n.colorModel.color,n.clickShow,"6px"),l(e,128,0),l(e,130,0,!0,4),l(e,132,0,!0,45),l(e,137,0),l(e,140,0),l(e,142,0,"halfcircle",n.clickShow,"9px"),l(e,144,0,!0,4),l(e,146,0,!0,45),l(e,151,0),l(e,154,0),l(e,156,0,"rectanglebounce",n.clickShow,"16px"),l(e,158,0,"API Reference"),l(e,160,0,"Properties<amexio-spinner>","assets/apireference/data/spinner.json","get","properties",!1,!1),l(e,163,0,"Name","name",!1,"string",15),l(e,167,0,"Version","version",!1,"string",10),l(e,171,0,"Type","type",!1,"string",10),l(e,175,0,"Default","default",!1,"string",10),l(e,179,0,"Description","description",!1,"string",65),l(e,183,0,"Source"),l(e,186,0),l(e,189,0,"HTML",!0),l(e,191,0,n.htmlCode),l(e,193,0,"Type Script"),l(e,195,0,n.typeScriptCode),l(e,197,0,"Live")},function(l,e){l(e,20,0,a.cb(e,21).role),l(e,41,0,a.cb(e,42).role),l(e,55,0,a.cb(e,56).role),l(e,69,0,a.cb(e,70).role),l(e,85,0,a.cb(e,86).role),l(e,99,0,a.cb(e,100).role),l(e,113,0,a.cb(e,114).role),l(e,129,0,a.cb(e,130).role),l(e,143,0,a.cb(e,144).role)})}var y=a.Oa("amexio-spinner-demo",d,function(l){return a.mb(0,[(l()(),a.Sa(0,0,null,null,1,"amexio-spinner-demo",[],null,null,null,f,p)),a.Ra(1,49152,null,0,d,[b.c],null,null)],null,null)},{},{},[]),x=n("gIcY"),k=n("ZYCi");n.d(e,"AmexioSpinnerDemoModuleNgFactory",function(){return S});var S=a.Pa(t,[],function(l){return a.Za([a.ab(512,a.k,a.Ea,[[8,[o.a,i.a,y]],[3,a.k],a.z]),a.ab(4608,s.n,s.m,[a.w,[2,s.w]]),a.ab(4608,x.r,x.r,[]),a.ab(4608,b.h,b.n,[s.c,a.D,b.l]),a.ab(4608,b.o,b.o,[b.h,b.m]),a.ab(5120,b.a,function(l){return[l]},[b.o]),a.ab(4608,b.k,b.k,[]),a.ab(6144,b.i,null,[b.k]),a.ab(4608,b.g,b.g,[b.i]),a.ab(6144,b.b,null,[b.g]),a.ab(4608,b.f,b.j,[b.b,a.s]),a.ab(4608,b.c,b.c,[b.f]),a.ab(4608,c.Ka,c.Ka,[b.c]),a.ab(4608,c.Ua,c.Ua,[a.D]),a.ab(4608,c.bb,c.bb,[]),a.ab(4608,c.qc,c.qc,[]),a.ab(1073742336,s.b,s.b,[]),a.ab(1073742336,x.o,x.o,[]),a.ab(1073742336,x.e,x.e,[]),a.ab(1073742336,b.e,b.e,[]),a.ab(1073742336,b.d,b.d,[]),a.ab(1073742336,r.b,r.b,[]),a.ab(1073742336,c.w,c.w,[]),a.ab(1073742336,c.u,c.u,[]),a.ab(1073742336,c.z,c.z,[]),a.ab(1073742336,c.B,c.B,[]),a.ab(1073742336,c.E,c.E,[]),a.ab(1073742336,c.m,c.m,[]),a.ab(1073742336,c.S,c.S,[]),a.ab(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),a.ab(1073742336,t,t,[]),a.ab(256,b.l,"XSRF-TOKEN",[]),a.ab(256,b.m,"X-XSRF-TOKEN",[]),a.ab(1024,k.i,function(){return[[{path:"",component:d,pathMatch:"full"}]]},[])])})},wZee:function(l,e){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var l=/\blang(?:uage)?-([\w-]+)\b/i,e=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(l){return l instanceof t?new t(l.type,a.util.encode(l.content),l.alias):"Array"===a.util.type(l)?l.map(a.util.encode):l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).match(/\[object (\w+)\]/)[1]},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++e}),l.__id},clone:function(l,e){var n=a.util.type(l);switch(e=e||{},n){case"Object":if(e[a.util.objId(l)])return e[a.util.objId(l)];var t={};for(var o in e[a.util.objId(l)]=t,l)l.hasOwnProperty(o)&&(t[o]=a.util.clone(l[o],e));return t;case"Array":return e[a.util.objId(l)]?e[a.util.objId(l)]:(t=[],e[a.util.objId(l)]=t,l.forEach(function(l,n){t[n]=a.util.clone(l,e)}),t)}return l}},languages:{extend:function(l,e){var n=a.util.clone(a.languages[l]);for(var t in e)n[t]=e[t];return n},insertBefore:function(l,e,n,t){var o=(t=t||a.languages)[l];if(2==arguments.length){for(var i in n=arguments[1])n.hasOwnProperty(i)&&(o[i]=n[i]);return o}var u={};for(var r in o)if(o.hasOwnProperty(r)){if(r==e)for(var i in n)n.hasOwnProperty(i)&&(u[i]=n[i]);u[r]=o[r]}return a.languages.DFS(a.languages,function(e,n){n===t[l]&&e!=l&&(this[e]=u)}),t[l]=u},DFS:function(l,e,n,t){for(var o in t=t||{},l)l.hasOwnProperty(o)&&(e.call(l,o,l[o],n||o),"Object"!==a.util.type(l[o])||t[a.util.objId(l[o])]?"Array"!==a.util.type(l[o])||t[a.util.objId(l[o])]||(t[a.util.objId(l[o])]=!0,a.languages.DFS(l[o],e,o,t)):(t[a.util.objId(l[o])]=!0,a.languages.DFS(l[o],e,null,t)))}},plugins:{},highlightAll:function(l,e){a.highlightAllUnder(document,l,e)},highlightAllUnder:function(l,e,n){var t={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",t);for(var o,i=t.elements||l.querySelectorAll(t.selector),u=0;o=i[u++];)a.highlightElement(o,!0===e,t.callback)},highlightElement:function(e,t,o){for(var i,u,r=e;r&&!l.test(r.className);)r=r.parentNode;r&&(i=(r.className.match(l)||[,""])[1].toLowerCase(),u=a.languages[i]),e.className=e.className.replace(l,"").replace(/\s+/g," ")+" language-"+i,e.parentNode&&/pre/i.test((r=e.parentNode).nodeName)&&(r.className=r.className.replace(l,"").replace(/\s+/g," ")+" language-"+i);var c={element:e,language:i,grammar:u,code:e.textContent};if(a.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(a.hooks.run("before-highlight",c),c.element.textContent=c.code,a.hooks.run("after-highlight",c)),void a.hooks.run("complete",c);if(a.hooks.run("before-highlight",c),t&&n.Worker){var s=new Worker(a.filename);s.onmessage=function(l){c.highlightedCode=l.data,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o&&o.call(c.element),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},s.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=a.highlight(c.code,c.grammar,c.language),a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o&&o.call(e),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},highlight:function(l,e,n){var o={code:l,grammar:e,language:n};return a.hooks.run("before-tokenize",o),o.tokens=a.tokenize(o.code,o.grammar),a.hooks.run("after-tokenize",o),t.stringify(a.util.encode(o.tokens),o.language)},matchGrammar:function(l,e,n,t,o,i,u){var r=a.Token;for(var c in n)if(n.hasOwnProperty(c)&&n[c]){if(c==u)return;var s=n[c];s="Array"===a.util.type(s)?s:[s];for(var d=0;d<s.length;++d){var m=s[d],b=m.inside,p=!!m.lookbehind,h=!!m.greedy,g=0,f=m.alias;if(h&&!m.pattern.global){var y=m.pattern.toString().match(/[imuy]*$/)[0];m.pattern=RegExp(m.pattern.source,y+"g")}m=m.pattern||m;for(var x=t,k=o;x<e.length;k+=e[x].length,++x){var S=e[x];if(e.length>l.length)return;if(!(S instanceof r)){if(h&&x!=e.length-1){if(m.lastIndex=k,!(z=m.exec(l)))break;for(var w=z.index+(p?z[1].length:0),v=z.index+z[0].length,R=x,F=k,C=e.length;R<C&&(F<v||!e[R].type&&!e[R-1].greedy);++R)w>=(F+=e[R].length)&&(++x,k=F);if(e[x]instanceof r)continue;A=R-x,S=l.slice(k,F),z.index-=k}else{m.lastIndex=0;var z=m.exec(S),A=1}if(z){p&&(g=z[1]?z[1].length:0),v=(w=z.index+g)+(z=z[0].slice(g)).length;var P=S.slice(0,w),T=S.slice(v),j=[x,A];P&&(++x,k+=P.length,j.push(P));var B=new r(c,b?a.tokenize(z,b):z,f,z,h);if(j.push(B),T&&j.push(T),Array.prototype.splice.apply(e,j),1!=A&&a.matchGrammar(l,e,n,x,k,!0,c),i)break}else if(i)break}}}}},tokenize:function(l,e,n){var t=[l],o=e.rest;if(o){for(var i in o)e[i]=o[i];delete e.rest}return a.matchGrammar(l,t,e,0,0,!1),t},hooks:{all:{},add:function(l,e){var n=a.hooks.all;n[l]=n[l]||[],n[l].push(e)},run:function(l,e){var n=a.hooks.all[l];if(n&&n.length)for(var t,o=0;t=n[o++];)t(e)}}},t=a.Token=function(l,e,n,a,t){this.type=l,this.content=e,this.alias=n,this.length=0|(a||"").length,this.greedy=!!t};if(t.stringify=function(l,e,n){if("string"==typeof l)return l;if("Array"===a.util.type(l))return l.map(function(n){return t.stringify(n,e,l)}).join("");var o={type:l.type,content:t.stringify(l.content,e,n),tag:"span",classes:["token",l.type],attributes:{},language:e,parent:n};if(l.alias){var i="Array"===a.util.type(l.alias)?l.alias:[l.alias];Array.prototype.push.apply(o.classes,i)}a.hooks.run("wrap",o);var u=Object.keys(o.attributes).map(function(l){return l+'="'+(o.attributes[l]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+(u?" "+u:"")+">"+o.content+"</"+o.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",function(l){var e=JSON.parse(l.data),t=e.language,o=e.immediateClose;n.postMessage(a.highlight(e.code,a.languages[t],t)),o&&n.close()},!1),n.Prism):n.Prism;var o=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return o&&(a.filename=o.src,a.manual||o.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();void 0!==l&&l.exports&&(l.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(l){"entity"===l.type&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(e){for(var n,t=e.getAttribute("data-src"),o=e,i=/\blang(?:uage)?-(?!\*)([\w-]+)\b/i;o&&!i.test(o.className);)o=o.parentNode;if(o&&(n=(e.className.match(i)||[,""])[1]),!n){var u=(t.match(/\.(\w+)$/)||[,""])[1];n=l[u]||u}var r=document.createElement("code");r.className="language-"+n,e.textContent="",r.textContent="Loading\u2026",e.appendChild(r);var c=new XMLHttpRequest;c.open("GET",t,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(r.textContent=c.responseText,a.highlightElement(r)):r.textContent=c.status>=400?"\u2716 Error "+c.status+" while fetching file: "+c.statusText:"\u2716 Error: File does not exist or is empty")},e.hasAttribute("data-download-link")&&a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(){var l=document.createElement("a");return l.textContent=e.getAttribute("data-download-link-label")||"Download",l.setAttribute("download",""),l.href=t,l}),c.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);