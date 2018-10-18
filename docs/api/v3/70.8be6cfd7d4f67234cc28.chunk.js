webpackJsonp([70],{5432:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){this.copyMsgArray=[],this.geoChartData=[["Country","Popularity"],["Germany",200],["United States",300],["Brazil",400],["Canada",500],["France",550],["RU",350],["India",700]],this.tsCode="import {Component, OnInit} from '@angular/core';\n\n@Component({\n  selector: 'geochart-demo',\n  templateUrl: 'geochart.demo.html'\n})\nexport class GeoChartDemoComponent implements OnInit {\n geoChartData:any;\n  constructor() {\n   this.geoChartData=[\n      ['Country', 'Popularity'],\n      ['Germany', 200],\n      ['United States', 300],\n      ['Brazil', 400],\n      ['Canada', 500],\n      ['France', 550],\n      ['RU', 350],\n      ['India',700]\n    ];\n  }\n\n  ngOnInit() {\n  }\n \n}\n\n    ",this.htmlCode='\n     <amexio-map-geo-chart [height]="\'500px\'" [width]="\'100%\'" [data]="geoChartData">\n     </amexio-map-geo-chart>\n    ',this.dataSource="\n    [\n      ['Country', 'Popularity'],\n      ['Germany', 200],\n      ['United States', 300],\n      ['Brazil', 400],\n      ['Canada', 500],\n      ['France', 550],\n      ['RU', 350],\n      ['India',700]\n    ]\n    "}return l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},MxX3:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("/oeL"),t=u("PE1L"),d=u("dWAs"),o=u("qbdv"),a=u("bm2B"),i=u("CPp0"),r=u("0QKF"),c=u("fc+i"),p=u("Ahuc"),s=u("l0vS"),m=(u.n(s),u("BkNc")),h=u("k8FD"),C=(u.n(h),u("kL+h")),b=u("5432");u.d(n,"GeoChartDemoModuleNgFactory",function(){return g});var g=e["ɵcmf"](t.a,[],function(l){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[d.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[e.LOCALE_ID]),e["ɵmpd"](4608,a["ɵi"],a["ɵi"],[]),e["ɵmpd"](4608,i.BrowserXhr,i.BrowserXhr,[]),e["ɵmpd"](4608,i.ResponseOptions,i.BaseResponseOptions,[]),e["ɵmpd"](5120,i.XSRFStrategy,i["ɵb"],[]),e["ɵmpd"](4608,i.XHRBackend,i.XHRBackend,[i.BrowserXhr,i.ResponseOptions,i.XSRFStrategy]),e["ɵmpd"](4608,i.RequestOptions,i.BaseRequestOptions,[]),e["ɵmpd"](5120,i.Http,i["ɵc"],[i.XHRBackend,i.RequestOptions]),e["ɵmpd"](4608,r.a,r.a,[c.u]),e["ɵmpd"](4608,p.a,p.a,[c.b]),e["ɵmpd"](4608,s.MapLoaderService,s.MapLoaderService,[]),e["ɵmpd"](512,o.CommonModule,o.CommonModule,[]),e["ɵmpd"](512,m.RouterModule,m.RouterModule,[[2,m["ɵa"]],[2,m.Router]]),e["ɵmpd"](512,a["ɵba"],a["ɵba"],[]),e["ɵmpd"](512,a.FormsModule,a.FormsModule,[]),e["ɵmpd"](512,i.HttpModule,i.HttpModule,[]),e["ɵmpd"](512,h.AmexioWidgetModule,h.AmexioWidgetModule,[]),e["ɵmpd"](512,C.a,C.a,[]),e["ɵmpd"](512,s.AmexioMapsModule,s.AmexioMapsModule,[]),e["ɵmpd"](512,t.a,t.a,[]),e["ɵmpd"](1024,m.ROUTES,function(){return[[],[{path:"",component:b.a}]]},[])])})},PE1L:function(l,n,u){"use strict";var e=u("waH/"),t=(u.n(e),u("tqEy")),d=(u.n(t),u("5432"));u.d(n,"a",function(){return o});var o=(d.a,function(){function l(){}return l}());d.a},dWAs:function(l,n,u){"use strict";function e(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,null,null,192,"amexio-card-pane",[],null,null,null,o.a,o.b)),d["ɵdid"](4308992,null,0,a.CardComponent,[],{enableFooter:[0,"enableFooter"]},null),(l()(),d["ɵted"](null,["\n  "])),(l()(),d["ɵeld"](0,null,0,5,"amexio-pane-header",[],null,null,null,o.c,o.d)),d["ɵdid"](114688,null,0,a.PaneHeaderComponent,[],null,null),(l()(),d["ɵted"](0,["\n    "])),(l()(),d["ɵeld"](0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Geo Chart Component"])),(l()(),d["ɵted"](0,["\n  "])),(l()(),d["ɵted"](null,["\n  "])),(l()(),d["ɵeld"](0,null,1,181,"amexio-pane-body",[],null,null,null,o.e,o.f)),d["ɵdid"](114688,null,0,a.PaneBodyComponent,[],null,null),(l()(),d["ɵted"](0,["\n    "])),(l()(),d["ɵeld"](0,null,0,6,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Data can be plotted on a Map using Amexio's "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["AmexioMapsModule"])),(l()(),d["ɵted"](null,[". All Mapping widgets are available under "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["amexio-ng-extensions/maps"])),(l()(),d["ɵted"](0,["\n    "])),(l()(),d["ɵeld"](0,null,0,169,"amexio-tab-pane",[],null,null,null,o.g,o.h)),d["ɵdid"](5357568,null,1,a.TabPaneComponent,[],null,null),d["ɵqud"](603979776,1,{queryTabs:1}),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵeld"](0,null,0,27,"amexio-tab",[["title","Demo"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),d["ɵted"](0,["\n          "])),(l()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵeld"](0,null,0,21,"amexio-card-pane",[],null,null,null,o.a,o.b)),d["ɵdid"](4308992,null,0,a.CardComponent,[],{enableFooter:[0,"enableFooter"]},null),(l()(),d["ɵted"](null,["\n            "])),(l()(),d["ɵeld"](0,null,0,2,"amexio-pane-header",[],null,null,null,o.c,o.d)),d["ɵdid"](114688,null,0,a.PaneHeaderComponent,[],null,null),(l()(),d["ɵted"](0,["\n             Geo Chart\n            "])),(l()(),d["ɵted"](null,["\n            "])),(l()(),d["ɵeld"](0,null,1,13,"amexio-pane-body",[],null,null,null,o.e,o.f)),d["ɵdid"](114688,null,0,a.PaneBodyComponent,[],null,null),(l()(),d["ɵted"](0,["\n              "])),(l()(),d["ɵeld"](0,null,0,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,6,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                 "])),(l()(),d["ɵeld"](0,null,null,3,"amexio-map-geo-chart",[],null,null,null,i.c,i.d)),d["ɵdid"](1163264,null,1,r.GeoChartComponent,[r.MapLoaderService],{width:[0,"width"],height:[1,"height"],data:[2,"data"]},null),d["ɵqud"](603979776,2,{chartAreaComp:1}),(l()(),d["ɵted"](null,["\n                 "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](0,["\n            "])),(l()(),d["ɵted"](null,["\n          "])),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵeld"](0,null,0,85,"amexio-tab",[["title","API Reference"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵeld"](0,null,0,80,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n          "])),(l()(),d["ɵeld"](0,null,null,2,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"b",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["API Reference"])),(l()(),d["ɵted"](null,["\n          "])),(l()(),d["ɵeld"](0,null,null,73,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n            "])),(l()(),d["ɵeld"](0,null,null,70,"div",[["class","row"],["id","buttonsreference"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵeld"](0,null,null,67,"table",[["class","table table-sm table-hover"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,64,"tbody",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["height"])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["number"])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["height of chart"])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["width"])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["number"])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["width of chart"])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["data"])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Array"])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["For the use of local datasource instead of httpUrl."])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵted"](null,["\n            "])),(l()(),d["ɵted"](null,["\n          "])),(l()(),d["ɵted"](null,["\n        "])),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵeld"](0,null,0,37,"amexio-tab",[["title","Source"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵeld"](0,null,0,31,"amexio-vertical-left-tab-pane",[],null,null,null,o.o,o.p)),d["ɵdid"](5357568,null,1,a.VerticalLeftTabPaneComponent,[],null,null),d["ɵqud"](603979776,3,{queryTabs:1}),(l()(),d["ɵted"](0,["\n          "])),(l()(),d["ɵeld"](0,null,0,12,"amexio-tab",[["title","Markup"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[3,4]],0,a.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),d["ɵted"](0,["\n            "])),(l()(),d["ɵeld"](0,null,0,8,"div",[["style","width: 800px; overflow-y: scroll"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵeld"](0,null,null,1,"clip-copy",[],null,[[null,"onClick"]],function(l,n,u){var e=!0,t=l.component;if("onClick"===n){e=!1!==t.onCopyClick()&&e}return e},p.a,p.b)),d["ɵdid"](114688,null,0,s.a,[],{htmlCode:[0,"htmlCode"]},{onClick:"onClick"}),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵeld"](0,null,null,1,"prism-block",[],null,null,null,m.a,m.b)),d["ɵdid"](4243456,null,0,h.a,[d.Renderer2,d.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),d["ɵted"](null,["\n            "])),(l()(),d["ɵted"](0,["\n          "])),(l()(),d["ɵted"](0,["\n          "])),(l()(),d["ɵeld"](0,null,0,5,"amexio-tab",[["title","TypeScript"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[3,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),d["ɵted"](0,["\n              "])),(l()(),d["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,m.a,m.b)),d["ɵdid"](4243456,null,0,h.a,[d.Renderer2,d.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),d["ɵted"](0,["\n          "])),(l()(),d["ɵted"](0,["\n          "])),(l()(),d["ɵeld"](0,null,0,5,"amexio-tab",[["title","Data Store"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[3,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),d["ɵted"](0,["\n            "])),(l()(),d["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,m.a,m.b)),d["ɵdid"](4243456,null,0,h.a,[d.Renderer2,d.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),d["ɵted"](0,["\n          "])),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵeld"](0,null,0,9,"amexio-tab",[["title","Plunker"]],null,null,null,o.i,o.j)),d["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵeld"](0,null,0,1,"p",[["class","text-md-center text-primary"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["Amexio Sandbox"])),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵeld"](0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://embed.plnkr.co/UUIjGCOyl3R5uh9wNj69/"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵted"](0,["\n    "])),(l()(),d["ɵted"](0,["\n  "])),(l()(),d["ɵted"](null,["\n"])),(l()(),d["ɵted"](null,["\n\n"])),(l()(),d["ɵeld"](0,null,null,1,"amexio-notification",[],null,null,null,o.q,o.r)),d["ɵdid"](114688,null,0,a.NotifyComponent,[d.ChangeDetectorRef],{messageData:[0,"messageData"]},null),(l()(),d["ɵted"](null,["\n"]))],function(l,n){var u=n.component;l(n,1,0,!1),l(n,4,0),l(n,11,0),l(n,22,0);l(n,26,0,"Demo",!0);l(n,31,0,!1),l(n,34,0),l(n,38,0);l(n,45,0,"100%","500px",u.geoChartData);l(n,55,0,"API Reference");l(n,142,0,"Source"),l(n,147,0);l(n,151,0,"Markup",!0),l(n,157,0,u.htmlCode);l(n,160,0,u.htmlCode,"markup");l(n,165,0,"TypeScript");l(n,168,0,u.tsCode,"typescript");l(n,172,0,"Data Store");l(n,175,0,u.dataSource,"json");l(n,181,0,"Plunker"),l(n,195,0,u.copyMsgArray)},null)}function t(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,null,null,1,"geo-chart-demo",[],null,null,null,e,b)),d["ɵdid"](114688,null,0,c.a,[],null,null)],function(l,n){l(n,1,0)},null)}var d=u("/oeL"),o=u("Mspa"),a=u("k8FD"),i=(u.n(a),u("Kxkg")),r=u("l0vS"),c=(u.n(r),u("5432")),p=u("8mzU"),s=u("repp"),m=u("l0f3"),h=u("FMBD");u.d(n,"a",function(){return g});var C=[],b=d["ɵcrt"]({encapsulation:2,styles:C,data:{}}),g=d["ɵccf"]("geo-chart-demo",c.a,t,{},{},[])}});