(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{U89g:function(e,n,l){"use strict";l.d(n,"a",function(){return a}),l.d(n,"b",function(){return i});var t=l("CcnG"),a=(l("d2mR"),l("Ip0R"),t.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return t.mb(0,[],null,null)}},XIHC:function(e,n){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,n,l){"use strict";l.d(n,"a",function(){return t}),l.d(n,"b",function(){return a}),l("wZee"),l("XIHC");var t=function(){function e(e,n){this._renderer=e,this._el=n,this.nativeElement=n.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},qNET:function(e,n,l){"use strict";l.r(n);var t=l("CcnG"),a=function(){},i=l("gTgE"),r=l("pMnS"),u=l("U89g"),o=l("d2mR"),s=l("O4vx"),c=l("gIcY"),d=l("Ip0R"),g=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,n,l,t=this;this.http.get("assets/data/code/forms/dropdownfilter/form.html",{responseType:"text"}).subscribe(function(n){e=n},function(e){},function(){t.htmlCode=e}),this.http.get("assets/data/code/forms/dropdownfilter/form.text",{responseType:"text"}).subscribe(function(e){n=e},function(e){},function(){t.typeScriptCode=n}),this.http.get("assets/data/componentdata/country.json",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){t.dataSource=l})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),p=l("t/Na"),m=t.Qa({encapsulation:2,styles:[],data:{}});function h(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,1,null,null,null,null,null,null,null)),(e()(),t.kb(1,null,[" "," "]))],null,function(e,n){e(n,1,0,n.component.countryCode1)})}function b(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,n){e(n,2,0,n.component.htmlCode,"html")},null)}function f(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,n){e(n,2,0,n.component.typeScriptCode,"typescript")},null)}function y(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,n){e(n,2,0,n.component.dataSource,"json")},null)}function v(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,112,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,n,l){var a=!0;return"document:click"===n&&(a=!1!==t.cb(e,1).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(e,1).onscroll()&&a),a},i.Yb,i.i)),t.Ra(1,5357568,null,3,s.h,[],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(e()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.hc,i.r)),t.Ra(6,114688,[[1,4]],0,s.v,[],null,null),(e()(),t.kb(-1,0,[" Dropdown Filter "])),(e()(),t.Sa(8,0,null,1,104,"amexio-body",[],null,null,null,i.Ub,i.e)),t.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(e()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),t.kb(-1,null,["Drop-Down component has been created to render N numbers of drop-down items based on data-set configured. Data-set can be configured using HTTP call OR Define fix number of dropdown-items. User can configure different attributes for enabling filter, multi-select, maximum selection in case of multi select. "])),(e()(),t.Sa(12,16777216,null,0,100,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,n,l){var a=!0;return"document:click"===n&&(a=!1!==t.cb(e,13).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(e,13).onscroll()&&a),a},i.sc,i.C)),t.Ra(13,5357568,null,2,s.L,[t.F,t.k,t.R],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(e()(),t.Sa(16,0,null,1,40,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.tc,i.D)),t.Ra(17,114688,[[4,4]],0,s.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Sa(18,0,null,0,38,"amexio-row",[],null,null,null,i.oc,i.y)),t.Ra(19,1163264,null,0,s.H,[],null,null),(e()(),t.Sa(20,0,null,0,22,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,i.ac,i.k)),t.Ra(21,114688,null,0,s.k,[],{size:[0,"size"]},null),(e()(),t.Sa(22,0,null,0,20,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,n,l){var a=!0;return"document:click"===n&&(a=!1!==t.cb(e,23).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(e,23).onscroll()&&a),a},i.Yb,i.i)),t.Ra(23,5357568,null,3,s.h,[],{header:[0,"header"]},null),t.ib(603979776,6,{amexioHeader:1}),t.ib(603979776,7,{amexioBody:1}),t.ib(603979776,8,{amexioFooter:1}),(e()(),t.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.hc,i.r)),t.Ra(28,114688,[[6,4]],0,s.v,[],null,null),(e()(),t.kb(-1,0,[" Dropdown Filter Component "])),(e()(),t.Sa(30,0,null,1,12,"amexio-body",[],null,null,null,i.Ub,i.e)),t.Ra(31,114688,[[7,4]],0,s.d,[],null,null),(e()(),t.Sa(32,0,null,0,10,"amexio-row",[],null,null,null,i.oc,i.y)),t.Ra(33,1163264,null,0,s.H,[],null,null),(e()(),t.Sa(34,0,null,0,8,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.ac,i.k)),t.Ra(35,114688,null,0,s.k,[],{size:[0,"size"]},null),(e()(),t.Sa(36,0,null,0,6,"amexio-dropdown",[["name","countryCode1"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],["document","click"],["document","touchstart"]],function(e,n,l){var a=!0,i=e.component;return"document:click"===n&&(a=!1!==t.cb(e,37).onElementOutClick(l.target)&&a),"document:touchstart"===n&&(a=!1!==t.cb(e,37).onElementOutClick(l.target)&&a),"ngModelChange"===n&&(a=!1!==(i.countryCode1=l)&&a),a},i.Td,i.Db)),t.Ra(37,114688,null,1,s.qc,[s.Ka,t.l,t.F],{fieldlabel:[0,"fieldlabel"],datareader:[1,"datareader"],httpmethod:[2,"httpmethod"],httpurl:[3,"httpurl"],displayfield:[4,"displayfield"],valuefield:[5,"valuefield"],search:[6,"search"],placeholder:[7,"placeholder"]},null),t.ib(335544320,9,{bodyTemplate:0}),t.hb(1024,null,c.h,function(e){return[e]},[s.qc]),t.Ra(40,671744,null,0,c.m,[[8,null],[8,null],[8,null],[6,c.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.hb(2048,null,c.i,null,[c.m]),t.Ra(42,16384,null,0,c.j,[[4,c.i]],null,null),(e()(),t.Sa(43,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.ac,i.k)),t.Ra(44,114688,null,0,s.k,[],{size:[0,"size"]},null),(e()(),t.Sa(45,0,null,0,11,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,n,l){var a=!0;return"document:click"===n&&(a=!1!==t.cb(e,46).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(e,46).onscroll()&&a),a},i.Yb,i.i)),t.Ra(46,5357568,null,3,s.h,[],{header:[0,"header"]},null),t.ib(603979776,10,{amexioHeader:1}),t.ib(603979776,11,{amexioBody:1}),t.ib(603979776,12,{amexioFooter:1}),(e()(),t.Sa(50,0,null,0,2,"amexio-header",[],null,null,null,i.hc,i.r)),t.Ra(51,114688,[[10,4]],0,s.v,[],null,null),(e()(),t.kb(-1,0,[" Selected Record Data "])),(e()(),t.Sa(53,0,null,1,3,"amexio-body",[],null,null,null,i.Ub,i.e)),t.Ra(54,114688,[[11,4]],0,s.d,[],null,null),(e()(),t.Ja(16777216,null,0,1,null,h)),t.Ra(56,16384,null,0,d.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(57,0,null,1,32,"amexio-tab",[["title","API Reference"]],null,null,null,i.tc,i.D)),t.Ra(58,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),t.Sa(59,0,null,0,18,"amexio-datagrid",[["title","Properties <amexio-dropdown>"]],null,[["document","scroll"],["document","click"]],function(e,n,l){var a=!0;return"document:scroll"===n&&(a=!1!==t.cb(e,60).onscroll()&&a),"document:click"===n&&(a=!1!==t.cb(e,60).onclick()&&a),a},i.Kd,i.ub)),t.Ra(60,1163264,null,1,s.dc,[t.l,s.Ka,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,13,{columnRef:1}),(e()(),t.Sa(62,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(63,49152,[[13,4]],2,s.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,14,{headerTemplate:0}),t.ib(335544320,15,{bodyTemplate:0}),(e()(),t.Sa(66,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(67,49152,[[13,4]],2,s.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,16,{headerTemplate:0}),t.ib(335544320,17,{bodyTemplate:0}),(e()(),t.Sa(70,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(71,49152,[[13,4]],2,s.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,18,{headerTemplate:0}),t.ib(335544320,19,{bodyTemplate:0}),(e()(),t.Sa(74,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(75,49152,[[13,4]],2,s.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,20,{headerTemplate:0}),t.ib(335544320,21,{bodyTemplate:0}),(e()(),t.Sa(78,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Sa(79,0,null,0,10,"amexio-datagrid",[["title","Events"]],null,[["document","scroll"],["document","click"]],function(e,n,l){var a=!0;return"document:scroll"===n&&(a=!1!==t.cb(e,80).onscroll()&&a),"document:click"===n&&(a=!1!==t.cb(e,80).onclick()&&a),a},i.Kd,i.ub)),t.Ra(80,1163264,null,1,s.dc,[t.l,s.Ka,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),t.ib(603979776,22,{columnRef:1}),(e()(),t.Sa(82,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(83,49152,[[22,4]],2,s.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,23,{headerTemplate:0}),t.ib(335544320,24,{bodyTemplate:0}),(e()(),t.Sa(86,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ld,i.vb)),t.Ra(87,49152,[[22,4]],2,s.ec,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,25,{headerTemplate:0}),t.ib(335544320,26,{bodyTemplate:0}),(e()(),t.Sa(90,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,i.tc,i.D)),t.Ra(91,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),t.Sa(92,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),t.Sa(93,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,i.vc,i.F)),t.Ra(94,5357568,null,1,s.Q,[t.F],null,null),t.ib(603979776,27,{queryTabs:1}),(e()(),t.Sa(96,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.tc,i.D)),t.Ra(97,114688,[[27,4]],0,s.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Ja(16777216,null,0,1,null,b)),t.Ra(99,16384,null,0,d.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(100,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.tc,i.D)),t.Ra(101,114688,[[27,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),t.Ja(16777216,null,0,1,null,f)),t.Ra(103,16384,null,0,d.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(104,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,i.tc,i.D)),t.Ra(105,114688,[[27,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),t.Ja(16777216,null,0,1,null,y)),t.Ra(107,16384,null,0,d.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(108,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.tc,i.D)),t.Ra(109,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),t.Sa(110,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),t.kb(-1,null,["Amexio Sandbox"])),(e()(),t.Sa(112,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-dropdown-filter?embed=1&file=app/forms/dropdownfilter/dropdownfilter.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,n){var l=n.component;e(n,1,0,"true"),e(n,6,0),e(n,9,0),e(n,13,0),e(n,17,0,"Demo","true"),e(n,19,0),e(n,21,0,"6"),e(n,23,0,"true"),e(n,28,0),e(n,31,0),e(n,33,0),e(n,35,0,"12"),e(n,37,0,"Choose Country","data","get","assets/data/componentdata/country.json","countryName","countryCode1",!0,"Choose"),e(n,40,0,"countryCode1",l.countryCode1),e(n,44,0,6),e(n,46,0,"true"),e(n,51,0),e(n,54,0),e(n,56,0,l.countryCode1),e(n,58,0,"API Reference"),e(n,60,0,"Properties <amexio-dropdown>","assets/apireference/forms/dropdown.json","get","properties",!1,!1),e(n,63,0,"Name","name",!1,"string",15),e(n,67,0,"Type","type",!1,"string",10),e(n,71,0,"Default","default",!1,"string",10),e(n,75,0,"Description","description",!1,"string",65),e(n,80,0,"Events","assets/apireference/forms/dropdown.json","get","events",!1),e(n,83,0,"Name","name",!1,"string",20),e(n,87,0,"Description","description",!1,"string",80),e(n,91,0,"Source"),e(n,94,0),e(n,97,0,"HTML",!0),e(n,99,0,l.htmlCode),e(n,101,0,"Type Script"),e(n,103,0,l.typeScriptCode),e(n,105,0,"Data Source"),e(n,107,0,l.dataSource),e(n,109,0,"Live")},function(e,n){e(n,20,0,t.cb(n,21).role),e(n,34,0,t.cb(n,35).role),e(n,36,0,t.cb(n,42).ngClassUntouched,t.cb(n,42).ngClassTouched,t.cb(n,42).ngClassPristine,t.cb(n,42).ngClassDirty,t.cb(n,42).ngClassValid,t.cb(n,42).ngClassInvalid,t.cb(n,42).ngClassPending),e(n,43,0,t.cb(n,44).role)})}var x=t.Oa("dropdownfilter",g,function(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,1,"dropdownfilter",[],null,null,null,v,m)),t.Ra(1,49152,null,0,g,[p.c],null,null)],null,null)},{},{},[]),k=l("ZYCi");l.d(n,"DropDownFilterDemoModuleNgFactory",function(){return w});var w=t.Pa(a,[],function(e){return t.Za([t.ab(512,t.k,t.Ea,[[8,[i.a,r.a,x]],[3,t.k],t.z]),t.ab(4608,d.o,d.n,[t.w,[2,d.x]]),t.ab(4608,c.v,c.v,[]),t.ab(4608,p.i,p.o,[d.d,t.D,p.m]),t.ab(4608,p.p,p.p,[p.i,p.n]),t.ab(5120,p.a,function(e){return[e]},[p.p]),t.ab(4608,p.l,p.l,[]),t.ab(6144,p.j,null,[p.l]),t.ab(4608,p.h,p.h,[p.j]),t.ab(6144,p.b,null,[p.h]),t.ab(4608,p.f,p.k,[p.b,t.s]),t.ab(4608,p.c,p.c,[p.f]),t.ab(4608,s.Ka,s.Ka,[p.c]),t.ab(4608,s.Ua,s.Ua,[t.D]),t.ab(4608,s.bb,s.bb,[]),t.ab(4608,s.tb,s.tb,[]),t.ab(1073742336,d.c,d.c,[]),t.ab(1073742336,c.s,c.s,[]),t.ab(1073742336,c.e,c.e,[]),t.ab(1073742336,p.e,p.e,[]),t.ab(1073742336,p.d,p.d,[]),t.ab(1073742336,o.b,o.b,[]),t.ab(1073742336,s.w,s.w,[]),t.ab(1073742336,s.u,s.u,[]),t.ab(1073742336,s.z,s.z,[]),t.ab(1073742336,s.B,s.B,[]),t.ab(1073742336,s.E,s.E,[]),t.ab(1073742336,s.m,s.m,[]),t.ab(1073742336,s.S,s.S,[]),t.ab(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),t.ab(1073742336,a,a,[]),t.ab(256,p.m,"XSRF-TOKEN",[]),t.ab(256,p.n,"X-XSRF-TOKEN",[]),t.ab(1024,k.i,function(){return[[{path:"",component:g,pathMatch:"full"}]]},[])])})},wZee:function(e,n){var l="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},t=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,n=0,t=l.Prism={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function(e,n){var l=t.util.type(e);switch(n=n||{},l){case"Object":if(n[t.util.objId(e)])return n[t.util.objId(e)];var a={};for(var i in n[t.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=t.util.clone(e[i],n));return a;case"Array":return n[t.util.objId(e)]?n[t.util.objId(e)]:(a=[],n[t.util.objId(e)]=a,e.forEach(function(e,l){a[l]=t.util.clone(e,n)}),a)}return e}},languages:{extend:function(e,n){var l=t.util.clone(t.languages[e]);for(var a in n)l[a]=n[a];return l},insertBefore:function(e,n,l,a){var i=(a=a||t.languages)[e];if(2==arguments.length){for(var r in l=arguments[1])l.hasOwnProperty(r)&&(i[r]=l[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var r in l)l.hasOwnProperty(r)&&(u[r]=l[r]);u[o]=i[o]}return t.languages.DFS(t.languages,function(n,l){l===a[e]&&n!=e&&(this[n]=u)}),a[e]=u},DFS:function(e,n,l,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(n.call(e,i,e[i],l||i),"Object"!==t.util.type(e[i])||a[t.util.objId(e[i])]?"Array"!==t.util.type(e[i])||a[t.util.objId(e[i])]||(a[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],n,i,a)):(a[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],n,null,a)))}},plugins:{},highlightAll:function(e,n){t.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,l){var a={callback:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",a);for(var i,r=a.elements||e.querySelectorAll(a.selector),u=0;i=r[u++];)t.highlightElement(i,!0===n,a.callback)},highlightElement:function(n,a,i){for(var r,u,o=n;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=t.languages[r]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,n.parentNode&&/pre/i.test((o=n.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:n,language:r,grammar:u,code:n.textContent};if(t.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(t.hooks.run("before-highlight",s),s.element.textContent=s.code,t.hooks.run("after-highlight",s)),void t.hooks.run("complete",s);if(t.hooks.run("before-highlight",s),a&&l.Worker){var c=new Worker(t.filename);c.onmessage=function(e){s.highlightedCode=e.data,t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=t.highlight(s.code,s.grammar,s.language),t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(n),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},highlight:function(e,n,l){var i={code:e,grammar:n,language:l};return t.hooks.run("before-tokenize",i),i.tokens=t.tokenize(i.code,i.grammar),t.hooks.run("after-tokenize",i),a.stringify(t.util.encode(i.tokens),i.language)},matchGrammar:function(e,n,l,a,i,r,u){var o=t.Token;for(var s in l)if(l.hasOwnProperty(s)&&l[s]){if(s==u)return;var c=l[s];c="Array"===t.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],p=g.inside,m=!!g.lookbehind,h=!!g.greedy,b=0,f=g.alias;if(h&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var v=a,x=i;v<n.length;x+=n[v].length,++v){var k=n[v];if(n.length>e.length)return;if(!(k instanceof o)){if(h&&v!=n.length-1){if(g.lastIndex=x,!(A=g.exec(e)))break;for(var w=A.index+(m?A[1].length:0),S=A.index+A[0].length,C=v,R=x,F=n.length;C<F&&(R<S||!n[C].type&&!n[C-1].greedy);++C)w>=(R+=n[C].length)&&(++v,x=R);if(n[v]instanceof o)continue;T=C-v,k=e.slice(x,R),A.index-=x}else{g.lastIndex=0;var A=g.exec(k),T=1}if(A){m&&(b=A[1]?A[1].length:0),S=(w=A.index+b)+(A=A[0].slice(b)).length;var j=k.slice(0,w),N=k.slice(S),D=[v,T];j&&(++v,x+=j.length,D.push(j));var E=new o(s,p?t.tokenize(A,p):A,f,A,h);if(D.push(E),N&&D.push(N),Array.prototype.splice.apply(n,D),1!=T&&t.matchGrammar(e,n,l,v,x,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,n,l){var a=[e],i=n.rest;if(i){for(var r in i)n[r]=i[r];delete n.rest}return t.matchGrammar(e,a,n,0,0,!1),a},hooks:{all:{},add:function(e,n){var l=t.hooks.all;l[e]=l[e]||[],l[e].push(n)},run:function(e,n){var l=t.hooks.all[e];if(l&&l.length)for(var a,i=0;a=l[i++];)a(n)}}},a=t.Token=function(e,n,l,t,a){this.type=e,this.content=n,this.alias=l,this.length=0|(t||"").length,this.greedy=!!a};if(a.stringify=function(e,n,l){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(l){return a.stringify(l,n,e)}).join("");var i={type:e.type,content:a.stringify(e.content,n,l),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:l};if(e.alias){var r="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}t.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!l.document)return l.addEventListener?(t.disableWorkerMessageHandler||l.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,i=n.immediateClose;l.postMessage(t.highlight(n.code,t.languages[a],a)),i&&l.close()},!1),l.Prism):l.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(t.filename=i.src,t.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(t.highlightAll):window.setTimeout(t.highlightAll,16):document.addEventListener("DOMContentLoaded",t.highlightAll))),l.Prism}();void 0!==e&&e.exports&&(e.exports=t),"undefined"!=typeof global&&(global.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),t.languages.xml=t.languages.markup,t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup&&(t.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:t.languages.css,alias:"language-css",greedy:!0}}),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},t.languages.markup.tag)),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),t.languages.javascript["template-string"].inside.interpolation.inside.rest=t.languages.javascript,t.languages.markup&&t.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:t.languages.javascript,alias:"language-javascript",greedy:!0}}),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(n){for(var l,a=n.getAttribute("data-src"),i=n,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(l=(n.className.match(r)||[,""])[1]),!l){var u=(a.match(/\.(\w+)$/)||[,""])[1];l=e[u]||u}var o=document.createElement("code");o.className="language-"+l,n.textContent="",o.textContent="Loading\u2026",n.appendChild(o);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,t.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(e){var n=e.element.parentNode;if(n&&/pre/i.test(n.nodeName)&&n.hasAttribute("data-src")&&n.hasAttribute("data-download-link")){var l=n.getAttribute("data-src"),t=document.createElement("a");return t.textContent=n.getAttribute("data-download-link-label")||"Download",t.setAttribute("download",""),t.href=l,t}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);