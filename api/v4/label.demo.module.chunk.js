webpackJsonp(["label.demo.module"],{m7C3:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("LMZF"),_=function(){},a=u("tfJK"),o=u("KhCp"),i=u("kL+h"),t=u("drlO"),r=u("0nO6"),d=u("Un6q"),s=u("9iV4"),m=function(){function l(l){this.http=l,this.age=10,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,u=this;this.http.get("assets/data/code/forms/label/label.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){u.htmlCode=l}),this.http.get("assets/data/code/forms/label/label.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){u.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),b=e._1({encapsulation:2,styles:[],data:{}});function c(l){return e._27(0,[(l()(),e._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(3,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),e._2(4,4243456,null,0,i.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                  "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function p(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),e._2(3,4243456,null,0,i.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                  "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function x(l){return e._27(0,[(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(1,0,null,null,403,"amexio-card",[["header","true"]],null,null,null,a._58,a.h)),e._2(2,5357568,null,3,t.g,[],{header:[0,"header"]},null),e._23(603979776,1,{amexioHeader:1}),e._23(603979776,2,{amexioBody:1}),e._23(603979776,3,{amexioFooter:1}),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(7,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),e._2(8,114688,[[1,4]],0,t.u,[],null,null),(l()(),e._25(-1,0,["\n        Amexio Label\n      "])),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(11,0,null,1,392,"amexio-body",[],null,null,null,a._54,a.d)),e._2(12,114688,[[2,4]],0,t.c,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(14,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Amexio Label can be easily wrapped around any text and configure using the different responsive styling"])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(17,16777216,null,0,385,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,u){var _=!0;return"document:click"===n&&(_=!1!==e._16(l,18).onWindowClick()&&_),"document:scroll"===n&&(_=!1!==e._16(l,18).onscroll()&&_),_},a._77,a.A)),e._2(18,5357568,null,2,t.J,[e.B,e.j,e.M],null,null),e._23(603979776,4,{queryTabs:1}),e._23(603979776,5,{queryAction:1}),(l()(),e._25(-1,1,["\n          "])),(l()(),e._3(22,0,null,1,293,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,a._78,a.B)),e._2(23,114688,[[4,4]],0,t.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(25,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Label Component"])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(28,0,null,0,26,"amexio-row",[],null,null,null,a._73,a.w)),e._2(29,1163264,null,0,t.F,[],null,null),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(31,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(32,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(34,0,null,0,2,"amexio-label",[["size","large"]],null,null,null,a._119,a._16)),e._2(35,114688,null,0,t._44,[],{styleClass:[0,"styleClass"]},null),(l()(),e._25(-1,0,["This is large amexio label"])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(39,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(40,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(42,0,null,0,2,"amexio-label",[["size","large-bold"]],null,null,null,a._119,a._16)),e._2(43,114688,null,0,t._44,[],{styleClass:[0,"styleClass"]},null),(l()(),e._25(-1,0,["This is large-bold amexio label "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(47,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(48,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["    \n            "])),(l()(),e._3(50,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,a._119,a._16)),e._2(51,114688,null,0,t._44,[],{styleClass:[0,"styleClass"]},null),(l()(),e._25(-1,0,["This is medium-bold amexio label"])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(56,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(58,0,null,0,26,"amexio-row",[],null,null,null,a._73,a.w)),e._2(59,1163264,null,0,t.F,[],null,null),(l()(),e._25(-1,0,["        \n          "])),(l()(),e._3(61,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(62,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(64,0,null,0,2,"amexio-label",[],null,null,null,a._119,a._16)),e._2(65,114688,null,0,t._44,[],null,null),(l()(),e._25(-1,0,["This is small amexio label"])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(69,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(70,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(72,0,null,0,2,"amexio-label",[["size","small-bold"]],null,null,null,a._119,a._16)),e._2(73,114688,null,0,t._44,[],{styleClass:[0,"styleClass"]},null),(l()(),e._25(-1,0,["This is small-bold amexio label"])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(77,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(78,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(80,0,null,0,2,"amexio-label",[["font-color","#FF5733"],["size","medium-bold"]],null,null,null,a._119,a._16)),e._2(81,114688,null,0,t._44,[],{styleClass:[0,"styleClass"],fontColor:[1,"fontColor"]},null),(l()(),e._25(-1,0,["This is  amexio label"])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,[" \n          "])),(l()(),e._3(86,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(88,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Label Component With Badges "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(91,0,null,0,26,"amexio-row",[],null,null,null,a._73,a.w)),e._2(92,1163264,null,0,t.F,[],null,null),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(94,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(95,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(97,0,null,0,2,"amexio-label",[["size","large"]],null,null,null,a._119,a._16)),e._2(98,114688,null,0,t._44,[],{badge:[0,"badge"],styleClass:[1,"styleClass"]},null),(l()(),e._25(-1,0,["This is large amexio label"])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(102,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(103,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(105,0,null,0,2,"amexio-label",[["size","large-bold"]],null,null,null,a._119,a._16)),e._2(106,114688,null,0,t._44,[],{badge:[0,"badge"],styleClass:[1,"styleClass"]},null),(l()(),e._25(-1,0,["This is large-bold amexio label"])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(110,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(111,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["    \n            "])),(l()(),e._3(113,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,a._119,a._16)),e._2(114,114688,null,0,t._44,[],{badge:[0,"badge"],styleClass:[1,"styleClass"]},null),(l()(),e._25(-1,0,["This is medium-bold amexio label"])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(119,0,null,0,26,"amexio-row",[],null,null,null,a._73,a.w)),e._2(120,1163264,null,0,t.F,[],null,null),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(122,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(123,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(125,0,null,0,2,"amexio-label",[["size","small"]],null,null,null,a._119,a._16)),e._2(126,114688,null,0,t._44,[],{badge:[0,"badge"],styleClass:[1,"styleClass"]},null),(l()(),e._25(-1,0,["This is small amexio label"])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(130,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(131,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(133,0,null,0,2,"amexio-label",[["size","small-bold"]],null,null,null,a._119,a._16)),e._2(134,114688,null,0,t._44,[],{badge:[0,"badge"],styleClass:[1,"styleClass"]},null),(l()(),e._25(-1,0,["This is small-bold amexio label"])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(138,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(139,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["    \n            "])),(l()(),e._3(141,0,null,0,2,"amexio-label",[["font-color","#FF5733"],["size","medium-bold"]],null,null,null,a._119,a._16)),e._2(142,114688,null,0,t._44,[],{badge:[0,"badge"],styleClass:[1,"styleClass"],fontColor:[2,"fontColor"]},null),(l()(),e._25(-1,0,["This is medium-bold amexio label"])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(147,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Box Component"])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(150,0,null,0,38,"amexio-row",[],null,null,null,a._73,a.w)),e._2(151,1163264,null,0,t.F,[],null,null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(153,0,null,0,10,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(154,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(156,0,null,0,6,"amexio-box",[["border","top"],["border-color","red"],["closable","'true'"],["padding","true"]],null,null,null,a._57,a.g)),e._2(157,114688,null,0,t.f,[],{border:[0,"border"],borderColor:[1,"borderColor"],padding:[2,"padding"],closable:[3,"closable"]},null),(l()(),e._25(-1,0,["\n                 "])),(l()(),e._3(159,0,null,0,2,"amexio-label",[["border","top"]],null,null,null,a._119,a._16)),e._2(160,114688,null,0,t._44,[],null,null),(l()(),e._25(-1,0,["This is small-bold amexio label with red border"])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(165,0,null,0,10,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(166,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(168,0,null,0,6,"amexio-box",[["border","bottom"],["border-color","blue"],["padding","true"]],null,null,null,a._57,a.g)),e._2(169,114688,null,0,t.f,[],{border:[0,"border"],borderColor:[1,"borderColor"],padding:[2,"padding"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(171,0,null,0,2,"amexio-label",[["border","bottom"]],null,null,null,a._119,a._16)),e._2(172,114688,null,0,t._44,[],null,null),(l()(),e._25(-1,0,["This is small-bold amexio label with blue border"])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(177,0,null,0,10,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(178,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(180,0,null,0,6,"amexio-box",[["border","right"],["border-color","yellow"],["padding","true"]],null,null,null,a._57,a.g)),e._2(181,114688,null,0,t.f,[],{border:[0,"border"],borderColor:[1,"borderColor"],padding:[2,"padding"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(183,0,null,0,2,"amexio-label",[["border","right"]],null,null,null,a._119,a._16)),e._2(184,114688,null,0,t._44,[],null,null),(l()(),e._25(-1,0,["This is small-bold amexio label with yellow border"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["   \n            "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(190,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(192,0,null,0,38,"amexio-row",[],null,null,null,a._73,a.w)),e._2(193,1163264,null,0,t.F,[],null,null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(195,0,null,0,10,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(196,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(198,0,null,0,6,"amexio-box",[["border","left"],["border-color","green"],["padding","true"]],null,null,null,a._57,a.g)),e._2(199,114688,null,0,t.f,[],{border:[0,"border"],borderColor:[1,"borderColor"],padding:[2,"padding"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(201,0,null,0,2,"amexio-label",[["border","left"]],null,null,null,a._119,a._16)),e._2(202,114688,null,0,t._44,[],null,null),(l()(),e._25(-1,0,["This is small-bold amexio label with green border"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(207,0,null,0,10,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(208,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(210,0,null,0,6,"amexio-box",[["background-color","purple"],["padding","true"]],null,null,null,a._57,a.g)),e._2(211,114688,null,0,t.f,[],{bgColor:[0,"bgColor"],padding:[1,"padding"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(213,0,null,0,2,"amexio-label",[],null,null,null,a._119,a._16)),e._2(214,114688,null,0,t._44,[],null,null),(l()(),e._25(-1,0,["This is small-bold amexio label with purple bg color"])),(l()(),e._25(-1,0,["\n           "])),(l()(),e._25(-1,0,["  \n           "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(219,0,null,0,10,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(220,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n           "])),(l()(),e._3(222,0,null,0,6,"amexio-box",[["background-color","yellow"],["padding","true"]],null,null,null,a._57,a.g)),e._2(223,114688,null,0,t.f,[],{bgColor:[0,"bgColor"],padding:[1,"padding"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(225,0,null,0,2,"amexio-label",[],null,null,null,a._119,a._16)),e._2(226,114688,null,0,t._44,[],null,null),(l()(),e._25(-1,0,["This is small-bold amexio label with background-color yellow"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["  "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(232,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(234,0,null,0,37,"amexio-row",[],null,null,null,a._73,a.w)),e._2(235,1163264,null,0,t.F,[],null,null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(237,0,null,0,10,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(238,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(240,0,null,0,6,"amexio-box",[["background-color","red"],["padding","true"]],null,null,null,a._57,a.g)),e._2(241,114688,null,0,t.f,[],{bgColor:[0,"bgColor"],padding:[1,"padding"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(243,0,null,0,2,"amexio-label",[],null,null,null,a._119,a._16)),e._2(244,114688,null,0,t._44,[],null,null),(l()(),e._25(-1,0,["This is small-bold amexio label with background-color red"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["  \n            "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(249,0,null,0,10,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(250,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(252,0,null,0,6,"amexio-box",[["background-color","blue"],["padding","true"]],null,null,null,a._57,a.g)),e._2(253,114688,null,0,t.f,[],{bgColor:[0,"bgColor"],padding:[1,"padding"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(255,0,null,0,2,"amexio-label",[],null,null,null,a._119,a._16)),e._2(256,114688,null,0,t._44,[],null,null),(l()(),e._25(-1,0,["This is small-bold amexio label with background-color blue"])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["        \n            "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(261,0,null,0,9,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(262,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(264,0,null,0,6,"amexio-box",[["background-color","yellow"],["border","bottom"],["border-color","green"],["padding","true"]],null,null,null,a._57,a.g)),e._2(265,114688,null,0,t.f,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(267,0,null,0,2,"amexio-label",[],null,null,null,a._119,a._16)),e._2(268,114688,null,0,t._44,[],null,null),(l()(),e._25(-1,0,["This is small-bold amexio label with background-color green"])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(273,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(275,0,null,0,39,"amexio-row",[],null,null,null,a._73,a.w)),e._2(276,1163264,null,0,t.F,[],null,null),(l()(),e._25(-1,0,["\n \n              "])),(l()(),e._3(278,0,null,0,10,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(279,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(281,0,null,0,6,"amexio-box",[["background-color","brown"],["border","right-left"],["border-color","brown"],["padding","true"]],null,null,null,a._57,a.g)),e._2(282,114688,null,0,t.f,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(284,0,null,0,2,"amexio-label",[],null,null,null,a._119,a._16)),e._2(285,114688,null,0,t._44,[],null,null),(l()(),e._25(-1,0,["This is small-bold amexio label with background-color"])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(290,0,null,0,11,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(291,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._3(293,0,null,0,7,"amexio-box",[["background-color","purple"],["border","all"],["border-color","purple"],["box-height","100px"],["box-width","300px"],["padding","true"]],null,null,null,a._57,a.g)),e._2(294,114688,null,0,t.f,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"],height:[4,"height"],width:[5,"width"]},null),(l()(),e._25(-1,0,["\n                    "])),(l()(),e._3(296,0,null,0,3,"amexio-text-input",[["field-label","Aadhar No"],["icon-feedback","true"],["name","name"],["place-holder","Enter aadhar card no"]],null,null,null,a._130,a._27)),e._22(5120,null,r.g,function(l){return[l]},[t._59]),e._2(298,114688,null,0,t._59,[],{fieldlabel:[0,"fieldlabel"],placeholder:[1,"placeholder"],iconfeedback:[2,"iconfeedback"]},null),(l()(),e._25(-1,null,["\n                    "])),(l()(),e._25(-1,0,["\n                  "])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(303,0,null,0,10,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),e._2(304,114688,null,0,t.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(306,0,null,0,6,"amexio-box",[["border","top-bottom"],["padding","true"]],null,null,null,a._57,a.g)),e._2(307,114688,null,0,t.f,[],{border:[0,"border"],padding:[1,"padding"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(309,0,null,0,2,"amexio-label",[],null,null,null,a._119,a._16)),e._2(310,114688,null,0,t._44,[],null,null),(l()(),e._25(-1,0,["This is small-bold amexio label with background-color"])),(l()(),e._25(-1,0,["        \n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n           "])),(l()(),e._25(-1,0,["\n\n          "])),(l()(),e._25(-1,1,["\n          "])),(l()(),e._3(317,0,null,1,49,"amexio-tab",[["title","API Reference"]],null,null,null,a._78,a.B)),e._2(318,114688,[[4,4]],0,t.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(320,0,null,0,28,"amexio-datagrid",[["title","Properties <amexio-label>"]],null,null,null,a._135,a._32)),e._2(321,1425408,null,1,t._66,[t._5,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,6,{columnRef:1}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(324,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),e._2(325,49152,[[6,4]],2,t._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,7,{headerTemplate:0}),e._23(335544320,8,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(329,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),e._2(330,49152,[[6,4]],2,t._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,9,{headerTemplate:0}),e._23(335544320,10,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(334,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),e._2(335,49152,[[6,4]],2,t._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,11,{headerTemplate:0}),e._23(335544320,12,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(339,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),e._2(340,49152,[[6,4]],2,t._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,13,{headerTemplate:0}),e._23(335544320,14,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(344,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),e._2(345,49152,[[6,4]],2,t._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,15,{headerTemplate:0}),e._23(335544320,16,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(350,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e._25(-1,0,["\n            \n            "])),(l()(),e._3(352,0,null,0,13,"amexio-datagrid",[["title","Events"]],null,null,null,a._135,a._32)),e._2(353,1425408,null,1,t._66,[t._5,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),e._23(603979776,17,{columnRef:1}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(356,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),e._2(357,49152,[[17,4]],2,t._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,18,{headerTemplate:0}),e._23(335544320,19,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(361,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),e._2(362,49152,[[17,4]],2,t._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,20,{headerTemplate:0}),e._23(335544320,21,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,1,["\n          "])),(l()(),e._3(368,0,null,1,24,"amexio-tab",[["title","Source"]],null,null,null,a._78,a.B)),e._2(369,114688,[[4,4]],0,t.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(371,0,null,0,20,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(373,0,null,null,17,"amexio-vertical-tab-view",[],null,null,null,a._80,a.D)),e._2(374,5357568,null,1,t.O,[e.B],null,null),e._23(603979776,22,{queryTabs:1}),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(377,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,a._78,a.B)),e._2(378,114688,[[22,4]],0,t.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n                  "])),(l()(),e.Y(16777216,null,0,1,null,c)),e._2(381,16384,null,0,d.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(384,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,a._78,a.B)),e._2(385,114688,[[22,4]],0,t.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                  "])),(l()(),e.Y(16777216,null,0,1,null,p)),e._2(388,16384,null,0,d.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,1,["\n          "])),(l()(),e._3(394,0,null,1,7,"amexio-tab",[["title","Live"]],null,null,null,a._78,a.B)),e._2(395,114688,[[4,4]],0,t.K,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n      "])),(l()(),e._3(397,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),e._25(-1,null,["Amexio Sandbox"])),(l()(),e._25(-1,0,["\n"])),(l()(),e._3(400,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-label?embed=1&file=app/forms/label/label.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,1,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n    "])),(l()(),e._25(-1,null,["\n    "])),(l()(),e._25(-1,null,["\n\n  "]))],function(l,n){var u=n.component;l(n,2,0,"true"),l(n,8,0),l(n,12,0),l(n,18,0),l(n,23,0,"Demo","true"),l(n,29,0),l(n,32,0,4),l(n,35,0,"large"),l(n,40,0,4),l(n,43,0,"large-bold"),l(n,48,0,4),l(n,51,0,"medium-bold"),l(n,59,0),l(n,62,0,4),l(n,65,0),l(n,70,0,4),l(n,73,0,"small-bold"),l(n,78,0,4),l(n,81,0,"medium-bold","#FF5733"),l(n,92,0),l(n,95,0,4),l(n,98,0,1,"large"),l(n,103,0,4),l(n,106,0,2,"large-bold"),l(n,111,0,4),l(n,114,0,3,"medium-bold"),l(n,120,0),l(n,123,0,4),l(n,126,0,3,"small"),l(n,131,0,4),l(n,134,0,2,"small-bold"),l(n,139,0,4),l(n,142,0,5,"medium-bold","#FF5733"),l(n,151,0),l(n,154,0,4),l(n,157,0,"top","red","true","'true'"),l(n,160,0),l(n,166,0,4),l(n,169,0,"bottom","blue","true"),l(n,172,0),l(n,178,0,4),l(n,181,0,"right","yellow","true"),l(n,184,0),l(n,193,0),l(n,196,0,4),l(n,199,0,"left","green","true"),l(n,202,0),l(n,208,0,4),l(n,211,0,"purple","true"),l(n,214,0),l(n,220,0,4),l(n,223,0,"yellow","true"),l(n,226,0),l(n,235,0),l(n,238,0,4),l(n,241,0,"red","true"),l(n,244,0),l(n,250,0,4),l(n,253,0,"blue","true"),l(n,256,0),l(n,262,0,4),l(n,265,0,"bottom","green","yellow","true"),l(n,268,0),l(n,276,0),l(n,279,0,4),l(n,282,0,"right-left","brown","brown","true"),l(n,285,0),l(n,291,0,4),l(n,294,0,"all","purple","purple","true","100px","300px"),l(n,298,0,"Aadhar No","Enter aadhar card no","true"),l(n,304,0,4),l(n,307,0,"top-bottom","true"),l(n,310,0),l(n,318,0,"API Reference"),l(n,321,0,"Properties <amexio-label>","assets/apireference/forms/label.json","get","properties",!1,!1),l(n,325,0,"Name","name",!1,"string",15),l(n,330,0,"Version","version",!1,"string",10),l(n,335,0,"Type","type",!1,"string",10),l(n,340,0,"Default","default",!1,"string",10),l(n,345,0,"Description","description",!1,"string",65),l(n,353,0,"Events","assets/apireference/forms/label.json","get","events",!1),l(n,357,0,"Name","name",!1,"string",20),l(n,362,0,"Description","description",!1,"string",80),l(n,369,0,"Source"),l(n,374,0),l(n,378,0,"HTML",!0),l(n,381,0,u.htmlCode),l(n,385,0,"Type Script"),l(n,388,0,u.typeScriptCode),l(n,395,0,"Live")},function(l,n){l(n,31,0,e._16(n,32).colclass),l(n,39,0,e._16(n,40).colclass),l(n,47,0,e._16(n,48).colclass),l(n,61,0,e._16(n,62).colclass),l(n,69,0,e._16(n,70).colclass),l(n,77,0,e._16(n,78).colclass),l(n,94,0,e._16(n,95).colclass),l(n,102,0,e._16(n,103).colclass),l(n,110,0,e._16(n,111).colclass),l(n,122,0,e._16(n,123).colclass),l(n,130,0,e._16(n,131).colclass),l(n,138,0,e._16(n,139).colclass),l(n,153,0,e._16(n,154).colclass),l(n,165,0,e._16(n,166).colclass),l(n,177,0,e._16(n,178).colclass),l(n,195,0,e._16(n,196).colclass),l(n,207,0,e._16(n,208).colclass),l(n,219,0,e._16(n,220).colclass),l(n,237,0,e._16(n,238).colclass),l(n,249,0,e._16(n,250).colclass),l(n,261,0,e._16(n,262).colclass),l(n,278,0,e._16(n,279).colclass),l(n,290,0,e._16(n,291).colclass),l(n,303,0,e._16(n,304).colclass)})}var g=e.Z("label-demo",m,function(l){return e._27(0,[(l()(),e._3(0,0,null,null,1,"label-demo",[],null,null,null,x,b)),e._2(1,49152,null,0,m,[s.c],null,null)],null,null)},{},{},[]),h=u("UHIZ");u.d(n,"LabelDemoModuleNgFactory",function(){return f});var f=e._0(_,[],function(l){return e._12([e._13(512,e.j,e.W,[[8,[a.a,g]],[3,e.j],e.v]),e._13(4608,d.n,d.m,[e.s,[2,d.u]]),e._13(4608,r.s,r.s,[]),e._13(4608,s.h,s.m,[d.c,e.z,s.k]),e._13(4608,s.n,s.n,[s.h,s.l]),e._13(5120,s.a,function(l){return[l]},[s.n]),e._13(4608,s.j,s.j,[]),e._13(6144,s.i,null,[s.j]),e._13(4608,s.g,s.g,[s.i]),e._13(6144,s.b,null,[s.g]),e._13(5120,s.f,s.o,[s.b,[2,s.a]]),e._13(4608,s.c,s.c,[s.f]),e._13(4608,t._5,t._5,[s.c]),e._13(4608,t._15,t._15,[e.z]),e._13(4608,t._22,t._22,[]),e._13(4608,t._40,t._40,[]),e._13(512,d.b,d.b,[]),e._13(512,r.p,r.p,[]),e._13(512,r.e,r.e,[]),e._13(512,s.e,s.e,[]),e._13(512,s.d,s.d,[]),e._13(512,i.b,i.b,[]),e._13(512,t.v,t.v,[]),e._13(512,t.t,t.t,[]),e._13(512,t.y,t.y,[]),e._13(512,t.A,t.A,[]),e._13(512,t.D,t.D,[]),e._13(512,t.l,t.l,[]),e._13(512,t.Q,t.Q,[]),e._13(512,h.n,h.n,[[2,h.s],[2,h.m]]),e._13(512,_,_,[]),e._13(256,s.k,"XSRF-TOKEN",[]),e._13(256,s.l,"X-XSRF-TOKEN",[]),e._13(1024,h.i,function(){return[[{path:"",component:m,pathMatch:"full"}]]},[])])})}});