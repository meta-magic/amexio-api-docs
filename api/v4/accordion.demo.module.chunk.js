webpackJsonp(["accordion.demo.module"],{"2ZMM":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e("LMZF"),t=e("9iV4"),a=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getDta=function(){var l=this;this.asyncFlag=!0,setTimeout(function(){l.asyncFlag=!1},3e3)},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/layout/accordion/accordion.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/layout/accordion/accordion.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),i=function(){},o=e("tfJK"),s=e("KhCp"),r=e("kL+h"),d=e("drlO"),_=e("Un6q"),c=u._1({encapsulation:2,styles:[],data:{}});function m(l){return u._27(0,[(l()(),u._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                    "])),(l()(),u._25(-1,null,["\n                    "])),(l()(),u._3(3,0,null,null,1,"prism-block",[],null,null,null,s.b,s.a)),u._2(4,4243456,null,0,r.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                  "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function p(l){return u._27(0,[(l()(),u._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),u._25(-1,null,["\n                    "])),(l()(),u._3(2,0,null,null,1,"prism-block",[],null,null,null,s.b,s.a)),u._2(3,4243456,null,0,r.a,[u.B,u.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),u._25(-1,null,["\n                  "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function h(l){return u._27(0,[(l()(),u._25(-1,null,["\n    "])),(l()(),u._3(1,0,null,null,338,"amexio-card",[["header","true"]],null,null,null,o._58,o.h)),u._2(2,5357568,null,3,d.g,[],{header:[0,"header"]},null),u._23(603979776,1,{amexioHeader:1}),u._23(603979776,2,{amexioBody:1}),u._23(603979776,3,{amexioFooter:1}),(l()(),u._25(-1,null,["\n      "])),(l()(),u._3(7,0,null,0,2,"amexio-header",[],null,null,null,o._67,o.q)),u._2(8,114688,[[1,4]],0,d.u,[],null,null),(l()(),u._25(-1,0,["\n         Accordion \n      "])),(l()(),u._25(-1,null,["\n      "])),(l()(),u._3(11,0,null,1,327,"amexio-body",[],null,null,null,o._54,o.d)),u._2(12,114688,[[2,4]],0,d.c,[],null,null),(l()(),u._25(-1,0,["\n        "])),(l()(),u._3(14,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u._25(-1,null,["Accordion provides an easy way to organize big forms by grouping the fields in accordion tabs"])),(l()(),u._25(-1,0,["\n        "])),(l()(),u._3(17,16777216,null,0,320,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var t=!0;return"document:click"===n&&(t=!1!==u._16(l,18).onWindowClick()&&t),"document:scroll"===n&&(t=!1!==u._16(l,18).onscroll()&&t),t},o._77,o.A)),u._2(18,5357568,null,2,d.J,[u.B,u.j,u.M],null,null),u._23(603979776,4,{queryTabs:1}),u._23(603979776,5,{queryAction:1}),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(22,0,null,1,200,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,o._78,o.B)),u._2(23,114688,[[4,4]],0,d.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(25,0,null,0,43,"amexio-accordion",[],null,null,null,o._52,o.b)),u._2(26,1163264,null,1,d.a,[],null,null),u._23(603979776,6,{queryTabs:1}),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(29,0,null,0,10,"amexio-accordion-tab",[["active","true"],["header","Page One"]],null,null,null,o._53,o.c)),u._2(30,49152,[[6,4]],0,d.b,[],{header:[0,"header"],active:[1,"active"]},null),(l()(),u._25(-1,0,[" \n                "])),(l()(),u._3(32,0,null,0,6,"amexio-row",[],null,null,null,o._73,o.w)),u._2(33,1163264,null,0,d.F,[],null,null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._3(35,0,null,0,2,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),u._2(36,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                  "])),(l()(),u._25(-1,0,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(41,0,null,0,10,"amexio-accordion-tab",[["header","Page two"]],null,null,null,o._53,o.c)),u._2(42,49152,[[6,4]],0,d.b,[],{header:[0,"header"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(44,0,null,0,6,"amexio-row",[],null,null,null,o._73,o.w)),u._2(45,1163264,null,0,d.F,[],null,null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._3(47,0,null,0,2,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),u._2(48,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                    Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. Vestibulum tempus, urna non ultrices aliquam, ex ex blandit lacus, at porttitor odio ligula sed lacus. Praesent in luctus odio, at sodales orci. Vivamus vitae ullamcorper lectus.\n                  "])),(l()(),u._25(-1,0,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(53,0,null,0,10,"amexio-accordion-tab",[["header","Page three"]],null,null,null,o._53,o.c)),u._2(54,49152,[[6,4]],0,d.b,[],{header:[0,"header"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(56,0,null,0,6,"amexio-row",[],null,null,null,o._73,o.w)),u._2(57,1163264,null,0,d.F,[],null,null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._3(59,0,null,0,2,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),u._2(60,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                    Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus quis ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac, fringilla libero.\n                  "])),(l()(),u._25(-1,0,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(65,0,null,0,2,"amexio-accordion-tab",[["header","Page four"]],null,null,null,o._53,o.c)),u._2(66,49152,[[6,4]],0,d.b,[],{header:[0,"header"]},null),(l()(),u._25(-1,0,["Etiam mattis fermentum arcu eu feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porttitor, erat sit amet pharetra aliquam, ex leo tincidunt erat, in commodo leo magna quis mauris."])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(70,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u._3(71,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(73,0,null,0,1,"span",[["style","font-weight: bolder"]],null,null,null,null,null)),(l()(),u._25(-1,null,["All expanded Panes"])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(76,0,null,0,43,"amexio-accordion",[["expand-all","true"]],null,null,null,o._52,o.b)),u._2(77,1163264,null,1,d.a,[],{expandAll:[0,"expandAll"]},null),u._23(603979776,7,{queryTabs:1}),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(80,0,null,0,10,"amexio-accordion-tab",[["header","Section One"]],null,null,null,o._53,o.c)),u._2(81,49152,[[7,4]],0,d.b,[],{header:[0,"header"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(83,0,null,0,6,"amexio-row",[],null,null,null,o._73,o.w)),u._2(84,1163264,null,0,d.F,[],null,null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._3(86,0,null,0,2,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),u._2(87,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                  "])),(l()(),u._25(-1,0,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(92,0,null,0,10,"amexio-accordion-tab",[["header","Section Two"]],null,null,null,o._53,o.c)),u._2(93,49152,[[7,4]],0,d.b,[],{header:[0,"header"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(95,0,null,0,6,"amexio-row",[],null,null,null,o._73,o.w)),u._2(96,1163264,null,0,d.F,[],null,null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._3(98,0,null,0,2,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),u._2(99,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                    Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. Vestibulum tempus, urna non ultrices aliquam, ex ex blandit lacus, at porttitor odio ligula sed lacus. Praesent in luctus odio, at sodales orci. Vivamus vitae ullamcorper lectus.\n                  "])),(l()(),u._25(-1,0,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(104,0,null,0,10,"amexio-accordion-tab",[["header","Section Three"]],null,null,null,o._53,o.c)),u._2(105,49152,[[7,4]],0,d.b,[],{header:[0,"header"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(107,0,null,0,6,"amexio-row",[],null,null,null,o._73,o.w)),u._2(108,1163264,null,0,d.F,[],null,null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._3(110,0,null,0,2,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),u._2(111,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                    Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus quis ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac, fringilla libero.\n                  "])),(l()(),u._25(-1,0,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(116,0,null,0,2,"amexio-accordion-tab",[["header","Section Four"]],null,null,null,o._53,o.c)),u._2(117,49152,[[7,4]],0,d.b,[],{header:[0,"header"]},null),(l()(),u._25(-1,0,["Etiam mattis fermentum arcu eu feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porttitor, erat sit amet pharetra aliquam, ex leo tincidunt erat, in commodo leo magna quis mauris."])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(121,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u._3(122,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(124,0,null,0,1,"span",[["style","font-weight: bolder"]],null,null,null,null,null)),(l()(),u._25(-1,null,[" Transparent Accordion"])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(127,0,null,0,43,"amexio-accordion",[["angle-icon","true"],["transparent","true"]],null,null,null,o._52,o.b)),u._2(128,1163264,null,1,d.a,[],{isTransparent:[0,"isTransparent"],angleIcon:[1,"angleIcon"]},null),u._23(603979776,8,{queryTabs:1}),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(131,0,null,0,10,"amexio-accordion-tab",[["active","true"],["header","Page One"]],null,null,null,o._53,o.c)),u._2(132,49152,[[8,4]],0,d.b,[],{header:[0,"header"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(134,0,null,0,6,"amexio-row",[],null,null,null,o._73,o.w)),u._2(135,1163264,null,0,d.F,[],null,null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._3(137,0,null,0,2,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),u._2(138,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                  "])),(l()(),u._25(-1,0,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(143,0,null,0,10,"amexio-accordion-tab",[["header","Page two"]],null,null,null,o._53,o.c)),u._2(144,49152,[[8,4]],0,d.b,[],{header:[0,"header"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(146,0,null,0,6,"amexio-row",[],null,null,null,o._73,o.w)),u._2(147,1163264,null,0,d.F,[],null,null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._3(149,0,null,0,2,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),u._2(150,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                    Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. Vestibulum tempus, urna non ultrices aliquam, ex ex blandit lacus, at porttitor odio ligula sed lacus. Praesent in luctus odio, at sodales orci. Vivamus vitae ullamcorper lectus.\n                  "])),(l()(),u._25(-1,0,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(155,0,null,0,10,"amexio-accordion-tab",[["header","Page three"]],null,null,null,o._53,o.c)),u._2(156,49152,[[8,4]],0,d.b,[],{header:[0,"header"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(158,0,null,0,6,"amexio-row",[],null,null,null,o._73,o.w)),u._2(159,1163264,null,0,d.F,[],null,null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._3(161,0,null,0,2,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),u._2(162,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                    Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus quis ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac, fringilla libero.\n                  "])),(l()(),u._25(-1,0,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(167,0,null,0,2,"amexio-accordion-tab",[["header","Page four"]],null,null,null,o._53,o.c)),u._2(168,49152,[[8,4]],0,d.b,[],{header:[0,"header"]},null),(l()(),u._25(-1,0,["Etiam mattis fermentum arcu eu feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porttitor, erat sit amet pharetra aliquam, ex leo tincidunt erat, in commodo leo magna quis mauris."])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(172,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u._3(173,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(175,0,null,0,1,"span",[["style","font-weight: bolder"]],null,null,null,null,null)),(l()(),u._25(-1,null,["Disabled Accordion Panes"])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(178,0,null,0,43,"amexio-accordion",[],null,null,null,o._52,o.b)),u._2(179,1163264,null,1,d.a,[],null,null),u._23(603979776,9,{queryTabs:1}),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(182,0,null,0,10,"amexio-accordion-tab",[["active","true"],["header","Page One"]],null,null,null,o._53,o.c)),u._2(183,49152,[[9,4]],0,d.b,[],{header:[0,"header"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(185,0,null,0,6,"amexio-row",[],null,null,null,o._73,o.w)),u._2(186,1163264,null,0,d.F,[],null,null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._3(188,0,null,0,2,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),u._2(189,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                  "])),(l()(),u._25(-1,0,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(194,0,null,0,10,"amexio-accordion-tab",[["header","Page two"]],null,null,null,o._53,o.c)),u._2(195,49152,[[9,4]],0,d.b,[],{header:[0,"header"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(197,0,null,0,6,"amexio-row",[],null,null,null,o._73,o.w)),u._2(198,1163264,null,0,d.F,[],null,null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._3(200,0,null,0,2,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),u._2(201,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                    Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. Aenean placerat suscipit risus at mollis. Quisque eleifend gravida scelerisque. In non eleifend nisi. Phasellus tempor hendrerit posuere. Praesent ornare rutrum mi et condimentum. Vestibulum tempus, urna non ultrices aliquam, ex ex blandit lacus, at porttitor odio ligula sed lacus. Praesent in luctus odio, at sodales orci. Vivamus vitae ullamcorper lectus.\n                  "])),(l()(),u._25(-1,0,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(206,0,null,0,10,"amexio-accordion-tab",[["disabled","true"],["header","Page three"]],null,null,null,o._53,o.c)),u._2(207,49152,[[9,4]],0,d.b,[],{header:[0,"header"],disabled:[1,"disabled"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(209,0,null,0,6,"amexio-row",[],null,null,null,o._73,o.w)),u._2(210,1163264,null,0,d.F,[],null,null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u._3(212,0,null,0,2,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,o._60,o.j)),u._2(213,114688,null,0,d.j,[],{size:[0,"size"]},null),(l()(),u._25(-1,0,["\n                    Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed viverra libero vel massa accumsan aliquet. Mauris a dui nec sapien pretium euismod. Sed lobortis quis sapien a mollis. Nullam ex nibh, malesuada eget rutrum eu, dapibus quis ante. Proin non convallis augue, at tincidunt nisi. Cras et metus blandit, sollicitudin mi ac, fringilla libero.\n                  "])),(l()(),u._25(-1,0,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._3(218,0,null,0,2,"amexio-accordion-tab",[["header","Page four"]],null,null,null,o._53,o.c)),u._2(219,49152,[[9,4]],0,d.b,[],{header:[0,"header"]},null),(l()(),u._25(-1,0,["Etiam mattis fermentum arcu eu feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porttitor, erat sit amet pharetra aliquam, ex leo tincidunt erat, in commodo leo magna quis mauris."])),(l()(),u._25(-1,0,["\n            "])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(224,0,null,1,77,"amexio-tab",[["title","API Reference"]],null,null,null,o._78,o.B)),u._2(225,114688,[[4,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(227,0,null,0,28,"amexio-datagrid",[["title","Properties <amexio-accordion>"]],null,null,null,o._135,o._32)),u._2(228,1425408,null,1,d._66,[d._5,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),u._23(603979776,10,{columnRef:1}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(231,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),u._2(232,49152,[[10,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,11,{headerTemplate:0}),u._23(335544320,12,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(236,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),u._2(237,49152,[[10,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,13,{headerTemplate:0}),u._23(335544320,14,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(241,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),u._2(242,49152,[[10,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,15,{headerTemplate:0}),u._23(335544320,16,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(246,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),u._2(247,49152,[[10,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,17,{headerTemplate:0}),u._23(335544320,18,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(251,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),u._2(252,49152,[[10,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,19,{headerTemplate:0}),u._23(335544320,20,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n\n            "])),(l()(),u._3(257,0,null,0,28,"amexio-datagrid",[["title","Properties <amexio-accordion-tab>"]],null,null,null,o._135,o._32)),u._2(258,1425408,null,1,d._66,[d._5,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),u._23(603979776,21,{columnRef:1}),(l()(),u._25(-1,null,["\n"])),(l()(),u._3(261,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),u._2(262,49152,[[21,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,22,{headerTemplate:0}),u._23(335544320,23,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n"])),(l()(),u._3(266,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),u._2(267,49152,[[21,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,24,{headerTemplate:0}),u._23(335544320,25,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n"])),(l()(),u._3(271,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),u._2(272,49152,[[21,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,26,{headerTemplate:0}),u._23(335544320,27,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n"])),(l()(),u._3(276,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),u._2(277,49152,[[21,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,28,{headerTemplate:0}),u._23(335544320,29,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n"])),(l()(),u._3(281,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),u._2(282,49152,[[21,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,30,{headerTemplate:0}),u._23(335544320,31,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n"])),(l()(),u._25(-1,0,["\n\n\n            "])),(l()(),u._3(287,0,null,0,13,"amexio-datagrid",[["title","Events <amexio-accordion-tab>"]],null,null,null,o._135,o._32)),u._2(288,1425408,null,1,d._66,[d._5,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),u._23(603979776,32,{columnRef:1}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(291,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),u._2(292,49152,[[32,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,33,{headerTemplate:0}),u._23(335544320,34,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(296,0,null,null,3,"amexio-data-table-column",[],null,null,null,o._136,o._33)),u._2(297,49152,[[32,4]],2,d._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u._23(335544320,35,{headerTemplate:0}),u._23(335544320,36,{bodyTemplate:0}),(l()(),u._25(-1,null,["\n            "])),(l()(),u._25(-1,0,["\n\n\n          "])),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(303,0,null,1,24,"amexio-tab",[["title","Source"]],null,null,null,o._78,o.B)),u._2(304,114688,[[4,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n            "])),(l()(),u._3(306,0,null,0,20,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),u._25(-1,null,["\n              "])),(l()(),u._3(308,0,null,null,17,"amexio-vertical-tab-view",[],null,null,null,o._80,o.D)),u._2(309,5357568,null,1,d.O,[u.B],null,null),u._23(603979776,37,{queryTabs:1}),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(312,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,o._78,o.B)),u._2(313,114688,[[37,4]],0,d.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u.Y(16777216,null,0,1,null,m)),u._2(316,16384,null,0,_.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._25(-1,0,["\n                "])),(l()(),u._3(319,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,o._78,o.B)),u._2(320,114688,[[37,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n                  "])),(l()(),u.Y(16777216,null,0,1,null,p)),u._2(323,16384,null,0,_.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u._25(-1,0,["\n                "])),(l()(),u._25(-1,0,["\n              "])),(l()(),u._25(-1,null,["   \n            "])),(l()(),u._25(-1,0,["\n           \n          "])),(l()(),u._25(-1,1,["\n          "])),(l()(),u._3(329,0,null,1,7,"amexio-tab",[["title","Live"]],null,null,null,o._78,o.B)),u._2(330,114688,[[4,4]],0,d.K,[],{title:[0,"title"]},null),(l()(),u._25(-1,0,["\n          "])),(l()(),u._3(332,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),u._25(-1,null,["Amexio Sandbox"])),(l()(),u._25(-1,0,["\n          "])),(l()(),u._3(335,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-accordion?embed=1&file=app/layouts/accordion/accordion.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),u._25(-1,0,["\n          "])),(l()(),u._25(-1,1,["\n        "])),(l()(),u._25(-1,0,["\n      "])),(l()(),u._25(-1,null,["\n    "])),(l()(),u._25(-1,null,["\n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,8,0),l(n,12,0),l(n,18,0),l(n,23,0,"Demo","true"),l(n,26,0),l(n,30,0,"Page One","true"),l(n,33,0),l(n,36,0,"12"),l(n,42,0,"Page two"),l(n,45,0),l(n,48,0,"12"),l(n,54,0,"Page three"),l(n,57,0),l(n,60,0,"12"),l(n,66,0,"Page four"),l(n,77,0,"true"),l(n,81,0,"Section One"),l(n,84,0),l(n,87,0,"12"),l(n,93,0,"Section Two"),l(n,96,0),l(n,99,0,"12"),l(n,105,0,"Section Three"),l(n,108,0),l(n,111,0,"12"),l(n,117,0,"Section Four"),l(n,128,0,"true","true"),l(n,132,0,"Page One","true"),l(n,135,0),l(n,138,0,"12"),l(n,144,0,"Page two"),l(n,147,0),l(n,150,0,"12"),l(n,156,0,"Page three"),l(n,159,0),l(n,162,0,"12"),l(n,168,0,"Page four"),l(n,179,0),l(n,183,0,"Page One","true"),l(n,186,0),l(n,189,0,"12"),l(n,195,0,"Page two"),l(n,198,0),l(n,201,0,"12"),l(n,207,0,"Page three","true"),l(n,210,0),l(n,213,0,"12"),l(n,219,0,"Page four"),l(n,225,0,"API Reference"),l(n,228,0,"Properties <amexio-accordion>","assets/apireference/layout/accordion/accordion.component.json","get","properties",!1,!1),l(n,232,0,"Name","name",!1,"string",15),l(n,237,0,"Version","version",!1,"string",10),l(n,242,0,"Type","type",!1,"string",10),l(n,247,0,"Default","default",!1,"string",10),l(n,252,0,"Description","description",!1,"string",65),l(n,258,0,"Properties <amexio-accordion-tab>","assets/apireference/layout/accordion/accordion.pane.json","get","properties",!1,!1),l(n,262,0,"Name","name",!1,"string",15),l(n,267,0,"Version","version",!1,"string",10),l(n,272,0,"Type","type",!1,"string",10),l(n,277,0,"Default","default",!1,"string",10),l(n,282,0,"Description","description",!1,"string",65),l(n,288,0,"Events <amexio-accordion-tab>","assets/apireference/layout/accordion/accordion.pane.json","get","events",!1,!1),l(n,292,0,"Name","name",!1,"string",15),l(n,297,0,"Description","description",!1,"string",65),l(n,304,0,"Source"),l(n,309,0),l(n,313,0,"HTML",!0),l(n,316,0,e.htmlCode),l(n,320,0,"Type Script"),l(n,323,0,e.typeScriptCode),l(n,330,0,"Live")},function(l,n){l(n,35,0,u._16(n,36).colclass),l(n,47,0,u._16(n,48).colclass),l(n,59,0,u._16(n,60).colclass),l(n,86,0,u._16(n,87).colclass),l(n,98,0,u._16(n,99).colclass),l(n,110,0,u._16(n,111).colclass),l(n,137,0,u._16(n,138).colclass),l(n,149,0,u._16(n,150).colclass),l(n,161,0,u._16(n,162).colclass),l(n,188,0,u._16(n,189).colclass),l(n,200,0,u._16(n,201).colclass),l(n,212,0,u._16(n,213).colclass)})}var b=u.Z("accordion-demo",a,function(l){return u._27(0,[(l()(),u._3(0,0,null,null,1,"accordion-demo",[],null,null,null,h,c)),u._2(1,49152,null,0,a,[t.c],null,null)],null,null)},{},{},[]),x=e("0nO6"),g=e("UHIZ");e.d(n,"AccordionDemoModuleNgFactory",function(){return y});var y=u._0(i,[],function(l){return u._12([u._13(512,u.j,u.W,[[8,[o.a,b]],[3,u.j],u.v]),u._13(4608,_.n,_.m,[u.s,[2,_.u]]),u._13(4608,t.h,t.m,[_.c,u.z,t.k]),u._13(4608,t.n,t.n,[t.h,t.l]),u._13(5120,t.a,function(l){return[l]},[t.n]),u._13(4608,t.j,t.j,[]),u._13(6144,t.i,null,[t.j]),u._13(4608,t.g,t.g,[t.i]),u._13(6144,t.b,null,[t.g]),u._13(5120,t.f,t.o,[t.b,[2,t.a]]),u._13(4608,t.c,t.c,[t.f]),u._13(4608,x.s,x.s,[]),u._13(4608,d._5,d._5,[t.c]),u._13(4608,d._15,d._15,[u.z]),u._13(4608,d._22,d._22,[]),u._13(4608,d._40,d._40,[]),u._13(512,_.b,_.b,[]),u._13(512,t.e,t.e,[]),u._13(512,t.d,t.d,[]),u._13(512,x.p,x.p,[]),u._13(512,x.e,x.e,[]),u._13(512,d.v,d.v,[]),u._13(512,d.t,d.t,[]),u._13(512,d.y,d.y,[]),u._13(512,d.A,d.A,[]),u._13(512,d.D,d.D,[]),u._13(512,d.l,d.l,[]),u._13(512,d.Q,d.Q,[]),u._13(512,r.b,r.b,[]),u._13(512,g.n,g.n,[[2,g.s],[2,g.m]]),u._13(512,i,i,[]),u._13(256,t.k,"XSRF-TOKEN",[]),u._13(256,t.l,"X-XSRF-TOKEN",[]),u._13(1024,g.i,function(){return[[{path:"",component:a}]]},[])])})}});