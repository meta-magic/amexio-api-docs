webpackJsonp([2],{"9isu":function(l,n,u){"use strict";function e(l){return o["ɵvid"](0,[(l()(),o["ɵted"](null,["\n    "])),(l()(),o["ɵeld"](0,null,null,1,"amexio-ee-youtube-player",[],null,[[null,"onCloseVideoPlayer"]],function(l,n,u){var e=!0,t=l.component;if("onCloseVideoPlayer"===n){e=!1!==t.closeVideo(u)&&e}return e},a.c,a.d)),o["ɵdid"](114688,null,0,i.AmexioYoutubePlayerComponent,[],{url:[0,"url"],height:[1,"height"]},{onCloseVideoPlayer:"onCloseVideoPlayer"}),(l()(),o["ɵted"](null,["\n  "]))],function(l,n){l(n,2,0,n.component.vidId,"600px")},null)}function t(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,null,null,1,"app-player",[],null,null,null,e,s)),o["ɵdid"](114688,null,0,d.a,[r.a,r.c,p.a],null,null)],function(l,n){l(n,1,0)},null)}var o=u("/oeL"),d=u("oS7t"),a=u("RTgU"),i=u("5ig8"),r=(u.n(i),u("BkNc")),p=u("Ahuc");u.d(n,"a",function(){return m});var c=[],s=o["ɵcrt"]({encapsulation:2,styles:c,data:{}}),m=o["ɵccf"]("app-player",d.a,t,{},{},[])},HCUO:function(l,n,u){"use strict";var e=u("KyW6"),t=u("oS7t");u.d(n,"a",function(){return o});var o=(e.a,t.a,function(){function l(){}return l}())},KyW6:function(l,n,u){"use strict";var e=u("BkNc");u.d(n,"a",function(){return t});var t=function(){function l(l){this.router=l,this.copyMsgArray=[],this.tsCode="\nimport {Component, OnInit} from '@angular/core';\nimport {Router} from \"@angular/router\";\n@Component({\n   selector: 'youtube-player',\n  templateUrl: 'youtubeplayer.demo.html'\n})\n\nexport class YoutubePlayerComponent implements OnInit {\n  constructor(private router: Router) {\n  }\n\n  ngOnInit() {\n  }\n  toggle(){\n    this.router.navigate(['youtubeplayer-demo/player','U7elNhHwgBU']);\n  }\n}\n    ",this.htmlCode='\n<amexio-ee-youtube-player \n     [videoId]="vidId" [height]="\'600px\'" \n     (onCloseVideoPlayer)="closeVideo($event)">\n</amexio-ee-youtube-player>\n    '}return l.prototype.ngOnInit=function(){},l.prototype.toggle=function(){this.router.navigate(["youtubeplayer-demo/player","U7elNhHwgBU"])},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.ctorParameters=function(){return[{type:e.c}]},l}()},oS7t:function(l,n,u){"use strict";var e=u("BkNc"),t=u("Ahuc");u.d(n,"a",function(){return o});var o=function(){function l(l,n,u){this.route=l,this.router=n,this.appService=u,this.vidId=this.appService.getVideoUrlSanitized(this.route.snapshot.params.id)}return l.prototype.ngOnInit=function(){},l.prototype.closeVideo=function(l){this.router.navigate(["youtubeplayer-demo"])},l.ctorParameters=function(){return[{type:e.a},{type:e.c},{type:t.a}]},l}()},tZpz:function(l,n,u){"use strict";function e(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,null,null,130,"amexio-card-pane",[],null,null,null,d.a,d.b)),o["ɵdid"](4308992,null,0,a.CardComponent,[],{enableFooter:[0,"enableFooter"]},null),(l()(),o["ɵted"](null,["\n  "])),(l()(),o["ɵeld"](0,null,0,5,"amexio-pane-header",[],null,null,null,d.c,d.d)),o["ɵdid"](114688,null,0,a.PaneHeaderComponent,[],null,null),(l()(),o["ɵted"](0,["\n    "])),(l()(),o["ɵeld"](0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["YouTube Video Player Component"])),(l()(),o["ɵted"](0,["\n  "])),(l()(),o["ɵted"](null,["\n  "])),(l()(),o["ɵeld"](0,null,1,119,"amexio-pane-body",[],null,null,null,d.e,d.f)),o["ɵdid"](114688,null,0,a.PaneBodyComponent,[],null,null),(l()(),o["ɵted"](0,["\n    "])),(l()(),o["ɵeld"](0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["A simple configurable star rating component with visual feedback"])),(l()(),o["ɵted"](0,["\n    "])),(l()(),o["ɵeld"](0,null,0,112,"amexio-tab-pane",[],null,null,null,d.g,d.h)),o["ɵdid"](5357568,null,1,a.TabPaneComponent,[],null,null),o["ɵqud"](603979776,1,{queryTabs:1}),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵeld"](0,null,0,10,"amexio-tab",[["title","Demo"]],null,null,null,d.i,d.j)),o["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,2,"amexio-btn",[],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;if("click"===n){e=!1!==t.toggle()&&e}return e},d.q,d.r)),o["ɵdid"](4833280,null,0,a.ButtonComponent,[],{label:[0,"label"],type:[1,"type"],tooltipMessage:[2,"tooltipMessage"]},null),(l()(),o["ɵted"](null,[" "])),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵeld"](0,null,0,66,"amexio-tab",[["title","API Reference"]],null,null,null,d.i,d.j)),o["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),o["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,61,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,2,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"b",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["API Reference"])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,54,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵeld"](0,null,null,51,"div",[["class","row"],["id","rating-api-reference"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵeld"](0,null,null,48,"table",[["class","table table-sm table-hover"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,45,"tbody",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["videoId"])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Type: "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["string"])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["set video Id. "])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,1,"tr",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["height"])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Type: "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["string"])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Height should be in Px Ex.500px "])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵted"](null,["\n\n            "])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵted"](null,["\n        "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵeld"](0,null,0,27,"amexio-tab",[["title","Source"]],null,null,null,d.i,d.j)),o["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,21,"amexio-vertical-left-tab-pane",[],null,null,null,d.m,d.n)),o["ɵdid"](5357568,null,1,a.VerticalLeftTabPaneComponent,[],null,null),o["ɵqud"](603979776,2,{queryTabs:1}),(l()(),o["ɵted"](0,["\n          "])),(l()(),o["ɵeld"](0,null,0,9,"amexio-tab",[["title","Markup"]],null,null,null,d.i,d.j)),o["ɵdid"](114688,[[2,4]],0,a.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),o["ɵted"](0,["\n            "])),(l()(),o["ɵted"](0,["\n            "])),(l()(),o["ɵeld"](0,null,0,1,"clip-copy",[],null,null,null,r.a,r.b)),o["ɵdid"](114688,null,0,p.a,[],{htmlCode:[0,"htmlCode"]},null),(l()(),o["ɵted"](0,["\n            "])),(l()(),o["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,c.a,c.b)),o["ɵdid"](4243456,null,0,s.a,[o.Renderer2,o.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),o["ɵted"](0,["\n\n          "])),(l()(),o["ɵted"](0,["\n          "])),(l()(),o["ɵeld"](0,null,0,5,"amexio-tab",[["title","TypeScript"]],null,null,null,d.i,d.j)),o["ɵdid"](114688,[[2,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),o["ɵted"](0,["\n\n            "])),(l()(),o["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,c.a,c.b)),o["ɵdid"](4243456,null,0,s.a,[o.Renderer2,o.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),o["ɵted"](0,["\n\n          "])),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵted"](0,["\n    "])),(l()(),o["ɵted"](0,["\n  "])),(l()(),o["ɵted"](null,["\n"])),(l()(),o["ɵted"](null,["\n\n"]))],function(l,n){var u=n.component;l(n,1,0,!1),l(n,4,0),l(n,11,0),l(n,17,0);l(n,21,0,"Demo",!0);l(n,26,0,"Video player","default","Video player");l(n,33,0,"API Reference");l(n,101,0,"Source"),l(n,106,0);l(n,110,0,"Markup",!0),l(n,114,0,u.htmlCode);l(n,117,0,u.htmlCode,"html");l(n,121,0,"TypeScript");l(n,124,0,u.tsCode,"typescript")},null)}function t(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,null,null,1,"youtube-player",[],null,null,null,e,b)),o["ɵdid"](114688,null,0,i.a,[m.c],null,null)],function(l,n){l(n,1,0)},null)}var o=u("/oeL"),d=u("Mspa"),a=u("k8FD"),i=(u.n(a),u("KyW6")),r=u("8mzU"),p=u("repp"),c=u("l0f3"),s=u("FMBD"),m=u("BkNc");u.d(n,"a",function(){return f});var y=[],b=o["ɵcrt"]({encapsulation:2,styles:y,data:{}}),f=o["ɵccf"]("youtube-player",i.a,t,{},{},[])},vpX3:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("/oeL"),t=u("HCUO"),o=u("tZpz"),d=u("9isu"),a=u("qbdv"),i=u("bm2B"),r=u("0QKF"),p=u("fc+i"),c=u("Ahuc"),s=u("CPp0"),m=u("BkNc"),y=u("kL+h"),b=u("5ig8"),f=(u.n(b),u("k8FD")),g=(u.n(f),u("KyW6")),h=u("oS7t");u.d(n,"YoutubePlayerModuleNgFactory",function(){return v});var v=e["ɵcmf"](t.a,[],function(l){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[o.a,d.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[e.LOCALE_ID]),e["ɵmpd"](4608,i["ɵi"],i["ɵi"],[]),e["ɵmpd"](4608,r.a,r.a,[p.u]),e["ɵmpd"](4608,c.a,c.a,[p.b]),e["ɵmpd"](4608,s.BrowserXhr,s.BrowserXhr,[]),e["ɵmpd"](4608,s.ResponseOptions,s.BaseResponseOptions,[]),e["ɵmpd"](5120,s.XSRFStrategy,s["ɵb"],[]),e["ɵmpd"](4608,s.XHRBackend,s.XHRBackend,[s.BrowserXhr,s.ResponseOptions,s.XSRFStrategy]),e["ɵmpd"](4608,s.RequestOptions,s.BaseRequestOptions,[]),e["ɵmpd"](5120,s.Http,s["ɵc"],[s.XHRBackend,s.RequestOptions]),e["ɵmpd"](512,a.CommonModule,a.CommonModule,[]),e["ɵmpd"](512,m.x,m.x,[[2,m.m],[2,m.c]]),e["ɵmpd"](512,i["ɵba"],i["ɵba"],[]),e["ɵmpd"](512,i.FormsModule,i.FormsModule,[]),e["ɵmpd"](512,y.a,y.a,[]),e["ɵmpd"](512,s.HttpModule,s.HttpModule,[]),e["ɵmpd"](512,b.AmexioMediaModule,b.AmexioMediaModule,[]),e["ɵmpd"](512,f.AmexioWidgetModule,f.AmexioWidgetModule,[]),e["ɵmpd"](512,t.a,t.a,[]),e["ɵmpd"](1024,m.t,function(){return[[{path:"",component:g.a},{path:"player/:id",component:h.a}]]},[])])})}});