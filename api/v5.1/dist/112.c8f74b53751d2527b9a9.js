(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{"1imY":function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),a=function(){function l(l){this.document=l,this.documentIsAccessible=void 0!==l}return l.prototype.check=function(l){return!!this.documentIsAccessible&&(l=encodeURIComponent(l),this.getCookieRegExp(l).test(this.document.cookie))},l.prototype.get=function(l){if(this.documentIsAccessible&&this.check(l)){l=encodeURIComponent(l);var n=this.getCookieRegExp(l).exec(this.document.cookie);return decodeURIComponent(n[1])}return""},l.prototype.getAll=function(){if(!this.documentIsAccessible)return{};var l={},n=this.document;if(n.cookie&&""!==n.cookie)for(var e=n.cookie.split(";"),u=0;u<e.length;u+=1){var a=e[u].split("=");a[0]=a[0].replace(/^ /,""),l[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}return l},l.prototype.set=function(l,n,e,u,a,t){if(this.documentIsAccessible){var o=encodeURIComponent(l)+"="+encodeURIComponent(n)+";";e&&(o+="number"==typeof e?"expires="+new Date((new Date).getTime()+1e3*e*60*60*24).toUTCString()+";":"expires="+e.toUTCString()+";"),u&&(o+="path="+u+";"),a&&(o+="domain="+a+";"),t&&(o+="secure;"),this.document.cookie=o}},l.prototype.delete=function(l,n,e){this.documentIsAccessible&&this.set(l,"",-1,n,e)},l.prototype.deleteAll=function(l,n){if(this.documentIsAccessible){var e=this.getAll();for(var u in e)e.hasOwnProperty(u)&&this.delete(u,l,n)}},l.prototype.getCookieRegExp=function(l){var n=l.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi,"\\$1");return new RegExp("(?:^"+n+"|;\\s*"+n+")=(.*?)(?:;|$)","g")},l}(),t=function(){function l(l,n){this.http=l,this.cookieService=n,this.hasThemeInit=!1}return l.prototype.ngOnInit=function(){var l,n=this;this.http.get("assets/data/theme/theme-api-showcase.json",{responseType:"json"}).subscribe(function(n){l=n},function(l){},function(){n.mdThemeData=l}),this.http.get("assets/data/theme/theme-api-showcase-amexio.json",{responseType:"json"}).subscribe(function(n){l=n},function(l){},function(){n.amexioThemeData=l})},l.prototype.addNewTheme=function(l,n){var e=this,u=document.createElement("link");u.onload=function(){e.removeExistingTheme(n)},u.setAttribute("rel","stylesheet"),u.id="themeid",u.href=l,document.head.appendChild(u)},l.prototype.removeExistingTheme=function(l){if(null!=l&&l&&0!=l.length)for(var n=0;n<l.length;n++){var e=l[n];"themeid"==e.id&&document.head.removeChild(e)}},l.prototype.themeChange=function(l){this.newThemePath="assets/themes/"+l.themeCssFile+".css";var n=document.head.querySelectorAll('link[rel="stylesheet"]');this.addNewTheme(this.newThemePath,n),this.cookieService.set("theme_name_v4",l.themeCssFile)},l}(),o=function(){},i=e("gTgE"),s=e("pMnS"),r=e("O4vx"),c=e("Ip0R"),m=e("t/Na"),d=u.La({encapsulation:2,styles:[],data:{}});function b(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,23,"amexio-column",[],[[1,"class",0]],null,null,i.Jb,i.j)),u.Ma(1,114688,null,0,r.j,[],{size:[0,"size"]},null),(l()(),u.Na(2,0,null,0,21,"div",[["class","card-container"]],null,null,null,null,null)),(l()(),u.Na(3,0,null,null,5,"header",[["class","card-header flex-start"]],null,null,null,null,null)),u.Ma(4,278528,null,0,c.o,[u.r,u.k,u.B],{ngStyle:[0,"ngStyle"]},null),u.ab(5,{"background-color":0,color:1}),(l()(),u.Na(6,0,null,null,2,"amexio-label",[],null,null,null,i.zd,i.zb)),u.Ma(7,114688,null,0,r.mc,[],null,null),(l()(),u.fb(8,0,["",""])),(l()(),u.Na(9,0,null,null,11,"div",[["class","card-body cardbody"]],null,null,null,null,null)),(l()(),u.Na(10,0,null,null,1,"amexio-image",[],null,null,null,i.Uc,i.Ua)),u.Ma(11,114688,null,0,r.vb,[],{path:[0,"path"]},null),(l()(),u.Na(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Na(13,0,null,null,2,"amexio-label",[],null,null,null,i.zd,i.zb)),u.Ma(14,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(15,0,["Version: ",""])),(l()(),u.Na(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Na(17,0,null,null,2,"amexio-label",[],null,null,null,i.zd,i.zb)),u.Ma(18,114688,null,0,r.mc,[],null,null),(l()(),u.fb(19,0,["Style: ",""])),(l()(),u.Na(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Na(21,0,null,null,2,"footer",[["class","card-footer flex-end"]],null,null,null,null,null)),(l()(),u.Na(22,0,null,null,1,"amexio-button",[],null,[[null,"onClick"]],function(l,n,e){var u=!0;return"onClick"===n&&(u=!1!==l.component.themeChange(l.context.$implicit)&&u),u},i.qd,i.qb)),u.Ma(23,114688,null,0,r.ac,[],{label:[0,"label"],type:[1,"type"]},{onClick:"onClick"})],function(l,n){l(n,1,0,12/n.parent.context.$implicit.length),l(n,4,0,l(n,5,0,n.context.$implicit.navBarBGColor,n.context.$implicit.navBarFontColor)),l(n,7,0),l(n,11,0,"assets/images/theme-icons/"+n.context.$implicit.link),l(n,14,0,"small"),l(n,18,0),l(n,23,0,"Test","default")},function(l,n){l(n,0,0,u.Xa(n,1).role),l(n,8,0,n.context.$implicit.themeName),l(n,15,0,n.context.$implicit.version),l(n,19,0,n.context.$implicit.style)})}function h(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,3,"amexio-row",[],null,null,null,i.Wb,i.w)),u.Ma(1,1163264,null,0,r.F,[],null,null),(l()(),u.Ea(16777216,null,0,1,null,b)),u.Ma(3,278528,null,0,c.k,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,1,0),l(n,3,0,n.context.$implicit)},null)}function p(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,20,"amexio-column",[],[[1,"class",0]],null,null,i.Jb,i.j)),u.Ma(1,114688,null,0,r.j,[],{size:[0,"size"]},null),(l()(),u.Na(2,0,null,0,18,"div",[["class","card-container"]],null,null,null,null,null)),(l()(),u.Na(3,0,null,null,5,"header",[["class","card-header flex-start"]],null,null,null,null,null)),u.Ma(4,278528,null,0,c.o,[u.r,u.k,u.B],{ngStyle:[0,"ngStyle"]},null),u.ab(5,{"background-color":0,color:1}),(l()(),u.Na(6,0,null,null,2,"amexio-label",[],null,null,null,i.zd,i.zb)),u.Ma(7,114688,null,0,r.mc,[],null,null),(l()(),u.fb(8,0,["",""])),(l()(),u.Na(9,0,null,null,11,"div",[["class","card-body cardbody"]],null,null,null,null,null)),(l()(),u.Na(10,0,null,null,1,"amexio-image",[],null,null,null,i.Uc,i.Ua)),u.Ma(11,114688,null,0,r.vb,[],{path:[0,"path"]},null),(l()(),u.Na(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Na(13,0,null,null,2,"amexio-label",[],null,null,null,i.zd,i.zb)),u.Ma(14,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(15,0,["Version: ",""])),(l()(),u.Na(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Na(17,0,null,null,2,"amexio-label",[],null,null,null,i.zd,i.zb)),u.Ma(18,114688,null,0,r.mc,[],null,null),(l()(),u.fb(19,0,["Style: ",""])),(l()(),u.Na(20,0,null,null,0,"br",[],null,null,null,null,null))],function(l,n){l(n,1,0,12/n.parent.context.$implicit.length),l(n,4,0,l(n,5,0,n.context.$implicit.navBarBGColor,n.context.$implicit.navBarFontColor)),l(n,7,0),l(n,11,0,"assets/images/theme-icons/"+n.context.$implicit.link),l(n,14,0,"small"),l(n,18,0)},function(l,n){l(n,0,0,u.Xa(n,1).role),l(n,8,0,n.context.$implicit.themeName),l(n,15,0,n.context.$implicit.version),l(n,19,0,n.context.$implicit.style)})}function f(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,3,"amexio-row",[],null,null,null,i.Wb,i.w)),u.Ma(1,1163264,null,0,r.F,[],null,null),(l()(),u.Ea(16777216,null,0,1,null,p)),u.Ma(3,278528,null,0,c.k,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,1,0),l(n,3,0,n.context.$implicit)},null)}function x(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.fb(1,null,["\n[amexio-color] = '","' "]))],null,function(l,n){l(n,1,0,n.context.row.css)})}function g(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,9,"span",[],null,null,null,null,null)),(l()(),u.Na(1,0,null,null,8,"div",[],null,null,null,null,null)),u.Ma(2,278528,null,0,c.o,[u.r,u.k,u.B],{ngStyle:[0,"ngStyle"]},null),u.ab(3,{"background-color":0,color:1}),(l()(),u.fb(4,null,[" This is amexio color "," background "])),(l()(),u.Na(5,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.fb(6,null,[" "," "])),(l()(),u.fb(-1,null,[" with opposite font color "])),(l()(),u.Na(8,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.fb(9,null,[" "," "]))],function(l,n){l(n,2,0,l(n,3,0,n.context.row.BG,n.context.row.font))},function(l,n){l(n,4,0,n.context.row.name),l(n,6,0,n.context.row.BG),l(n,9,0,n.context.row.font)})}function y(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,1,"amexio-image",[],null,null,null,i.Uc,i.Ua)),u.Ma(1,114688,null,0,r.vb,[],{tooltip:[0,"tooltip"],path:[1,"path"]},null),(l()(),u.Na(2,16777216,null,null,120,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var a=!0;return"document:click"===n&&(a=!1!==u.Xa(l,3).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==u.Xa(l,3).onscroll()&&a),a},i.ac,i.A)),u.Ma(3,5357568,null,2,r.J,[u.B,u.j,u.M],{closable:[0,"closable"]},null),u.db(603979776,1,{queryTabs:1}),u.db(603979776,2,{queryAction:1}),(l()(),u.Na(6,0,null,1,3,"amexio-tab",[["title","Material Design"]],null,null,null,i.bc,i.B)),u.Ma(7,114688,[[1,4]],0,r.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),u.Ea(16777216,null,0,1,null,h)),u.Ma(9,278528,null,0,c.k,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.Na(10,0,null,1,3,"amexio-tab",[["title","Amexio"]],null,null,null,i.bc,i.B)),u.Ma(11,114688,[[1,4]],0,r.K,[],{title:[0,"title"]},null),(l()(),u.Ea(16777216,null,0,1,null,f)),u.Ma(13,278528,null,0,c.k,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.Na(14,0,null,1,19,"amexio-tab",[["title","Colors"]],null,null,null,i.bc,i.B)),u.Ma(15,114688,[[1,4]],0,r.K,[],{title:[0,"title"]},null),(l()(),u.fb(-1,0,[" Eventually we can apply this attribute [amexio-color] to all components, currently we can apply to progress bar and datapoints. To know more refer the API reference section "])),(l()(),u.Na(17,0,null,0,16,"amexio-datagrid",[["title","Amexio Colors"]],null,[["document","scroll"],["document","click"]],function(l,n,e){var a=!0;return"document:scroll"===n&&(a=!1!==u.Xa(l,18).onscroll()&&a),"document:click"===n&&(a=!1!==u.Xa(l,18).onclick()&&a),a},i.ad,i.ab)),u.Ma(18,1425408,null,1,r.Gb,[u.k,r.Ga,u.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),u.db(603979776,3,{columnRef:1}),(l()(),u.Na(20,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),u.Ma(21,49152,[[3,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u.db(335544320,4,{headerTemplate:0}),u.db(335544320,5,{bodyTemplate:0}),(l()(),u.Na(24,0,null,null,4,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),u.Ma(25,49152,[[3,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u.db(335544320,6,{headerTemplate:0}),u.db(335544320,7,{bodyTemplate:0}),(l()(),u.Ea(0,[[7,2],["amexioBodyTmpl",2]],null,0,null,x)),(l()(),u.Na(29,0,null,null,4,"amexio-data-table-column",[],null,null,null,i.bd,i.bb)),u.Ma(30,49152,[[3,4]],2,r.Hb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),u.db(335544320,8,{headerTemplate:0}),u.db(335544320,9,{bodyTemplate:0}),(l()(),u.Ea(0,[[9,2],["amexioBodyTmpl",2]],null,0,null,g)),(l()(),u.Na(34,0,null,1,88,"amexio-tab",[["title","Getting Started"]],null,null,null,i.bc,i.B)),u.Ma(35,114688,[[1,4]],0,r.K,[],{title:[0,"title"]},null),(l()(),u.Na(36,0,null,0,2,"amexio-label",[["size","large"]],null,null,null,i.zd,i.zb)),u.Ma(37,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(-1,0,["To install the Amexio Colors:"])),(l()(),u.Na(39,0,null,0,4,"amexio-box",[["background-color","blue"],["border","left"],["border-color","blue"],["padding","true"]],null,null,null,i.Gb,i.g)),u.Ma(40,114688,null,0,r.f,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"]},null),(l()(),u.Na(41,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.zd,i.zb)),u.Ma(42,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(-1,0,["$ sudo npm install -g amexio-colors"])),(l()(),u.Na(44,0,null,0,2,"amexio-label",[["size","large"]],null,null,null,i.zd,i.zb)),u.Ma(45,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(-1,0,["Check the Amexio Colors version:"])),(l()(),u.Na(47,0,null,0,17,"amexio-box",[["background-color","blue"],["border","left"],["border-color","blue"],["padding","true"]],null,null,null,i.Gb,i.g)),u.Ma(48,114688,null,0,r.f,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"]},null),(l()(),u.Na(49,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.zd,i.zb)),u.Ma(50,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(-1,0,[" $ ac "])),(l()(),u.Na(52,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Na(53,0,null,0,2,"amexio-label",[],null,null,null,i.zd,i.zb)),u.Ma(54,114688,null,0,r.mc,[],null,null),(l()(),u.fb(-1,0,[" Amexio Colors v1.0 "])),(l()(),u.Na(56,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Na(57,0,null,0,2,"amexio-label",[],null,null,null,i.zd,i.zb)),u.Ma(58,114688,null,0,r.mc,[],null,null),(l()(),u.fb(-1,0,[" Copyright (c) 2018, MetaMagic Global Inc, NJ, USA "])),(l()(),u.Na(60,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Na(61,0,null,0,2,"amexio-label",[],null,null,null,i.zd,i.zb)),u.Ma(62,114688,null,0,r.mc,[],null,null),(l()(),u.fb(-1,0,[" ..... "])),(l()(),u.Na(64,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Na(65,0,null,0,2,"amexio-label",[["size","large"]],null,null,null,i.zd,i.zb)),u.Ma(66,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(-1,0,["To Generate Amexio Material Design Themes"])),(l()(),u.Na(68,0,null,0,39,"amexio-box",[["background-color","blue"],["border","left"],["border-color","blue"],["padding","true"]],null,null,null,i.Gb,i.g)),u.Ma(69,114688,null,0,r.f,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"]},null),(l()(),u.Na(70,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.zd,i.zb)),u.Ma(71,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(-1,0,["$ pwd"])),(l()(),u.Na(73,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Na(74,0,null,0,2,"amexio-label",[["size","medium"]],null,null,null,i.zd,i.zb)),u.Ma(75,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(-1,0,["/home/user/"])),(l()(),u.Na(77,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Na(78,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Na(79,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.zd,i.zb)),u.Ma(80,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(-1,0,["$ mkdir mythemes"])),(l()(),u.Na(82,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Na(83,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.zd,i.zb)),u.Ma(84,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(-1,0,['$ echo "// Amexio Themes v0.0 " >> Themes-Data.txt'])),(l()(),u.Na(86,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Na(87,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.zd,i.zb)),u.Ma(88,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(-1,0,['$ echo "// Design-Type : Material Design " >> Themes-Data.txt'])),(l()(),u.Na(90,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Na(91,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.zd,i.zb)),u.Ma(92,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(-1,0,['$ echo "// Theme-Version : 4.0 " >> Themes-Data.txt'])),(l()(),u.Na(94,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Na(95,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.zd,i.zb)),u.Ma(96,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(-1,0,['$ echo "army-olive,#4B5320,#708238" >> Themes-Data.txt'])),(l()(),u.Na(98,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Na(99,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.zd,i.zb)),u.Ma(100,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(-1,0,['$ echo "ash-stone-black,#544C4A,#877F7D" >> Themes-Data.txt'])),(l()(),u.Na(102,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Na(103,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Na(104,0,null,0,2,"amexio-label",[["size","medium-bold"]],null,null,null,i.zd,i.zb)),u.Ma(105,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(-1,0,["$ ac Themes-Data.txt /home/user/mythemes/"])),(l()(),u.Na(107,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Na(108,0,null,0,2,"amexio-label",[["size","large"]],null,null,null,i.zd,i.zb)),u.Ma(109,114688,null,0,r.mc,[],{styleClass:[0,"styleClass"]},null),(l()(),u.fb(-1,0,[" Amexio Colors API Documentation"])),(l()(),u.Na(111,0,null,0,11,"p",[],null,null,null,null,null)),(l()(),u.Na(112,0,null,null,2,"amexio-label",[],null,null,null,i.zd,i.zb)),u.Ma(113,114688,null,0,r.mc,[],null,null),(l()(),u.fb(-1,0,[" Checkout the Amexio Colors API Documentation published in "])),(l()(),u.Na(115,0,null,null,1,"a",[["href","https://meta-magic.github.io/AmexioColors/"],["target","_blank"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["GitHub Pages"])),(l()(),u.Na(117,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Na(118,0,null,null,2,"amexio-label",[],null,null,null,i.zd,i.zb)),u.Ma(119,114688,null,0,r.mc,[],null,null),(l()(),u.fb(-1,0,["For Testing the Themes Autogenerated by the Amexio Colors Checkout the Amexio"])),(l()(),u.Na(121,0,null,null,1,"a",[["href","http://www.amexio.org/api/v4/index.html"],["target","_blank"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["API Site"]))],function(l,n){var e=n.component;l(n,1,0,"Image","assets/images/logos/amexio_colors.jpeg"),l(n,3,0,!1),l(n,7,0,"Material Design",!0),l(n,9,0,e.mdThemeData),l(n,11,0,"Amexio"),l(n,13,0,e.amexioThemeData),l(n,15,0,"Colors"),l(n,18,0,"Amexio Colors","assets/data/theme/amexio-colours.json","get","colors",!1,!1),l(n,21,0,"Name","name",!1,"string",15),l(n,25,0,"CSS Class Name","css",!1,"string",15),l(n,30,0,"Color","BG",!1,"string",15),l(n,35,0,"Getting Started"),l(n,37,0,"large"),l(n,40,0,"left","blue","blue","true"),l(n,42,0,"medium-bold"),l(n,45,0,"large"),l(n,48,0,"left","blue","blue","true"),l(n,50,0,"medium-bold"),l(n,54,0),l(n,58,0),l(n,62,0),l(n,66,0,"large"),l(n,69,0,"left","blue","blue","true"),l(n,71,0,"medium-bold"),l(n,75,0,"medium"),l(n,80,0,"medium-bold"),l(n,84,0,"medium-bold"),l(n,88,0,"medium-bold"),l(n,92,0,"medium-bold"),l(n,96,0,"medium-bold"),l(n,100,0,"medium-bold"),l(n,105,0,"medium-bold"),l(n,109,0,"large"),l(n,113,0),l(n,119,0)},null)}var N=u.Ja("theme-page",t,function(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,1,"theme-page",[],null,null,null,y,d)),u.Ma(1,114688,null,0,t,[m.c,a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),C=e("gIcY"),z=e("ZYCi");e.d(n,"ThemeModuleNgFactory",function(){return M});var M=u.Ka(o,[],function(l){return u.Ua([u.Va(512,u.j,u.Z,[[8,[i.a,s.a,N]],[3,u.j],u.v]),u.Va(4608,c.n,c.m,[u.s,[2,c.w]]),u.Va(4608,m.h,m.n,[c.c,u.z,m.l]),u.Va(4608,m.o,m.o,[m.h,m.m]),u.Va(5120,m.a,function(l){return[l]},[m.o]),u.Va(4608,m.k,m.k,[]),u.Va(6144,m.i,null,[m.k]),u.Va(4608,m.g,m.g,[m.i]),u.Va(6144,m.b,null,[m.g]),u.Va(4608,m.f,m.j,[m.b,u.p]),u.Va(4608,m.c,m.c,[m.f]),u.Va(4608,C.r,C.r,[]),u.Va(4608,r.Ga,r.Ga,[m.c]),u.Va(4608,r.Qa,r.Qa,[u.z]),u.Va(4608,r.Xa,r.Xa,[]),u.Va(4608,r.ic,r.ic,[]),u.Va(4608,a,a,[c.c]),u.Va(1073742336,c.b,c.b,[]),u.Va(1073742336,m.e,m.e,[]),u.Va(1073742336,m.d,m.d,[]),u.Va(1073742336,C.o,C.o,[]),u.Va(1073742336,C.e,C.e,[]),u.Va(1073742336,r.v,r.v,[]),u.Va(1073742336,r.t,r.t,[]),u.Va(1073742336,r.y,r.y,[]),u.Va(1073742336,r.A,r.A,[]),u.Va(1073742336,r.D,r.D,[]),u.Va(1073742336,r.l,r.l,[]),u.Va(1073742336,r.Q,r.Q,[]),u.Va(1073742336,z.n,z.n,[[2,z.t],[2,z.m]]),u.Va(1073742336,o,o,[]),u.Va(256,m.l,"XSRF-TOKEN",[]),u.Va(256,m.m,"X-XSRF-TOKEN",[]),u.Va(1024,z.i,function(){return[[{path:"",component:t}]]},[])])})}}]);