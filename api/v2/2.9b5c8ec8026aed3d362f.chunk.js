webpackJsonp([2],{5432:function(l,n,e){"use strict";e.d(n,"a",function(){return t});var t=function(){function l(){this.geoChartData=[["Country","Popularity"],["Germany",200],["United States",300],["Brazil",400],["Canada",500],["France",550],["RU",350],["India",700]],this.tsCode="import {Component, OnInit} from '@angular/core';\n\n@Component({\n  selector: 'geochart-demo',\n  templateUrl: 'geochart.demo.html'\n})\nexport class GeoChartDemoComponent implements OnInit {\n geoChartData:any;\n  constructor() {\n   this.geoChartData=[\n      ['Country', 'Popularity'],\n      ['Germany', 200],\n      ['United States', 300],\n      ['Brazil', 400],\n      ['Canada', 500],\n      ['France', 550],\n      ['RU', 350],\n      ['India',700]\n    ];\n  }\n\n  ngOnInit() {\n  }\n \n}\n\n    ",this.htmlCode='\n     <amexio-map-geo-chart [height]="\'500px\'" [width]="\'100%\'" [data]="geoChartData">\n     </amexio-map-geo-chart>\n    ',this.dataSource="\n    [\n      ['Country', 'Popularity'],\n      ['Germany', 200],\n      ['United States', 300],\n      ['Brazil', 400],\n      ['Canada', 500],\n      ['France', 550],\n      ['RU', 350],\n      ['India',700]\n    ]\n    "}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},Kxkg:function(l,n,e){"use strict";function t(l){return d["ɵvid"](0,[],null,null)}function u(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,null,null,1,"amexio-map-properties",[],null,null,null,t,p)),d["ɵdid"](114688,null,0,r.MapProperties,[],null,null)],function(l,n){l(n,1,0)},null)}function o(l){return d["ɵvid"](0,[(l()(),d["ɵted"](null,["\n      "])),(l()(),d["ɵeld"](0,null,null,1,"div",[],[[1,"id",0],[4,"width",null],[4,"height",null]],[["window","resize"]],function(l,n,e){var t=!0,u=l.component;if("window:resize"===n){t=!1!==u.onResize(e)&&t}return t},null,null)),(l()(),d["ɵted"](null,["\n      "])),(l()(),d["ɵted"](null,["\n  "]))],null,function(l,n){var e=n.component;l(n,1,0,e.id,e.width,e.height)})}function a(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,null,null,2,"amexio-map-geo-chart",[],null,null,null,o,h)),d["ɵdid"](1163264,null,1,r.GeoChartComponent,[],null,null),d["ɵqud"](603979776,1,{chartAreaComp:1})],function(l,n){l(n,1,0)},null)}var d=e("/oeL"),r=e("l0vS"),i=(e.n(r),e("qbdv"));e.d(n,"b",function(){return h}),n.a=o;var c=(d["ɵcmf"](r.AmexioMapsModule,[],function(l){return d["ɵmod"]([d["ɵmpd"](512,d.ComponentFactoryResolver,d["ɵCodegenComponentFactoryResolver"],[[8,[]],[3,d.ComponentFactoryResolver],d.NgModuleRef]),d["ɵmpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[d.LOCALE_ID]),d["ɵmpd"](512,i.CommonModule,i.CommonModule,[]),d["ɵmpd"](512,r.AmexioMapsModule,r.AmexioMapsModule,[])])}),[]),p=d["ɵcrt"]({encapsulation:2,styles:c,data:{}}),s=(d["ɵccf"]("amexio-map-properties",r.MapProperties,u,{chartBackgroundColor:"chartBackgroundColor",leftPosition:"leftPosition",topPosition:"topPosition",chartWidthInPer:"chartWidthInPer",chartHeightInper:"chartHeightInper"},{},[]),[]),h=d["ɵcrt"]({encapsulation:2,styles:s,data:{}});d["ɵccf"]("amexio-map-geo-chart",r.GeoChartComponent,a,{width:"width",height:"height",data:"data",displayCountryName:"displayCountryName",regionCode:"regionCode",backgroundColor:"backgroundColor",datalessRegionColor:"datalessRegionColor"},{},[])},MxX3:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("/oeL"),u=e("PE1L"),o=e("dWAs"),a=e("qbdv"),d=e("bm2B"),r=e("CPp0"),i=e("BkNc"),c=e("k8FD"),p=(e.n(c),e("kL+h")),s=e("l0vS"),h=(e.n(s),e("5432"));e.d(n,"GeoChartDemoModuleNgFactory",function(){return m});var m=t["ɵcmf"](u.a,[],function(l){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[o.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[t.LOCALE_ID]),t["ɵmpd"](4608,d["ɵi"],d["ɵi"],[]),t["ɵmpd"](4608,r.BrowserXhr,r.BrowserXhr,[]),t["ɵmpd"](4608,r.ResponseOptions,r.BaseResponseOptions,[]),t["ɵmpd"](5120,r.XSRFStrategy,r["ɵb"],[]),t["ɵmpd"](4608,r.XHRBackend,r.XHRBackend,[r.BrowserXhr,r.ResponseOptions,r.XSRFStrategy]),t["ɵmpd"](4608,r.RequestOptions,r.BaseRequestOptions,[]),t["ɵmpd"](5120,r.Http,r["ɵc"],[r.XHRBackend,r.RequestOptions]),t["ɵmpd"](512,a.CommonModule,a.CommonModule,[]),t["ɵmpd"](512,i.x,i.x,[[2,i.m],[2,i.c]]),t["ɵmpd"](512,d["ɵba"],d["ɵba"],[]),t["ɵmpd"](512,d.FormsModule,d.FormsModule,[]),t["ɵmpd"](512,r.HttpModule,r.HttpModule,[]),t["ɵmpd"](512,c.AmexioWidgetModule,c.AmexioWidgetModule,[]),t["ɵmpd"](512,p.a,p.a,[]),t["ɵmpd"](512,s.AmexioMapsModule,s.AmexioMapsModule,[]),t["ɵmpd"](512,u.a,u.a,[]),t["ɵmpd"](1024,i.t,function(){return[[{path:"",component:h.a}]]},[])])})},PE1L:function(l,n,e){"use strict";var t=e("waH/"),u=(e.n(t),e("tqEy")),o=(e.n(u),e("5432"));e.d(n,"a",function(){return a});var a=(o.a,function(){function l(){}return l}());o.a},dWAs:function(l,n,e){"use strict";function t(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,null,null,177,"amexio-card-pane",[],null,null,null,a.a,a.b)),o["ɵdid"](4308992,null,0,d.CardComponent,[],{enableFooter:[0,"enableFooter"]},null),(l()(),o["ɵted"](null,["\n  "])),(l()(),o["ɵeld"](0,null,0,5,"amexio-pane-header",[],null,null,null,a.c,a.d)),o["ɵdid"](114688,null,0,d.PaneHeaderComponent,[],null,null),(l()(),o["ɵted"](0,["\n    "])),(l()(),o["ɵeld"](0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Geo Chart Component"])),(l()(),o["ɵted"](0,["\n  "])),(l()(),o["ɵted"](null,["\n  "])),(l()(),o["ɵeld"](0,null,1,166,"amexio-pane-body",[],null,null,null,a.e,a.f)),o["ɵdid"](114688,null,0,d.PaneBodyComponent,[],null,null),(l()(),o["ɵted"](0,["\n    "])),(l()(),o["ɵeld"](0,null,0,6,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Data can be plotted on a Map using Amexio's "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["AmexioMapModule"])),(l()(),o["ɵted"](null,[". All Mapping widgets are available under "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["amexio-ng-extensions/maps"])),(l()(),o["ɵted"](0,["\n    "])),(l()(),o["ɵeld"](0,null,0,154,"amexio-tab-pane",[],null,null,null,a.g,a.h)),o["ɵdid"](5357568,null,1,d.TabPaneComponent,[],null,null),o["ɵqud"](603979776,1,{queryTabs:1}),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵeld"](0,null,0,27,"amexio-tab",[["title","Demo"]],null,null,null,a.i,a.j)),o["ɵdid"](114688,[[1,4]],0,d.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),o["ɵted"](0,["\n          "])),(l()(),o["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,21,"amexio-card-pane",[],null,null,null,a.a,a.b)),o["ɵdid"](4308992,null,0,d.CardComponent,[],{enableFooter:[0,"enableFooter"]},null),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵeld"](0,null,0,2,"amexio-pane-header",[],null,null,null,a.c,a.d)),o["ɵdid"](114688,null,0,d.PaneHeaderComponent,[],null,null),(l()(),o["ɵted"](0,["\n             Geo Chart\n            "])),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵeld"](0,null,1,13,"amexio-pane-body",[],null,null,null,a.e,a.f)),o["ɵdid"](114688,null,0,d.PaneBodyComponent,[],null,null),(l()(),o["ɵted"](0,["\n              "])),(l()(),o["ɵeld"](0,null,0,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,6,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                 "])),(l()(),o["ɵeld"](0,null,null,3,"amexio-map-geo-chart",[],null,null,null,r.a,r.b)),o["ɵdid"](1163264,null,1,i.GeoChartComponent,[],{width:[0,"width"],height:[1,"height"],data:[2,"data"]},null),o["ɵqud"](603979776,2,{chartAreaComp:1}),(l()(),o["ɵted"](null,["\n                 "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](0,["\n            "])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵeld"](0,null,0,85,"amexio-tab",[["title","API Reference"]],null,null,null,a.i,a.j)),o["ɵdid"](114688,[[1,4]],0,d.TabComponent,[],{title:[0,"title"]},null),(l()(),o["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,80,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,2,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"b",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["API Reference"])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,73,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵeld"](0,null,null,70,"div",[["class","row"],["id","buttonsreference"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵeld"](0,null,null,67,"table",[["class","table table-sm table-hover"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,64,"tbody",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["height"])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Type: "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["number"])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["height of chart"])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["width"])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Type: "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["number"])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["width of chart"])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["data"])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Type: "])),(l()(),o["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Array"])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),o["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["For the use of local datasource instead of httpUrl."])),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵted"](null,["\n                  "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n                "])),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵted"](null,["\n        "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵeld"](0,null,0,33,"amexio-tab",[["title","Source"]],null,null,null,a.i,a.j)),o["ɵdid"](114688,[[1,4]],0,d.TabComponent,[],{title:[0,"title"]},null),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵeld"](0,null,0,27,"amexio-vertical-left-tab-pane",[],null,null,null,a.k,a.l)),o["ɵdid"](5357568,null,1,d.VerticalLeftTabPaneComponent,[],null,null),o["ɵqud"](603979776,3,{queryTabs:1}),(l()(),o["ɵted"](0,["\n          "])),(l()(),o["ɵeld"](0,null,0,8,"amexio-tab",[["title","Markup"]],null,null,null,a.i,a.j)),o["ɵdid"](114688,[[3,4]],0,d.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),o["ɵted"](0,["\n            "])),(l()(),o["ɵeld"](0,null,0,4,"div",[["style","width: 800px; overflow-y: scroll"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n              "])),(l()(),o["ɵeld"](0,null,null,1,"prism-block",[],null,null,null,c.a,c.b)),o["ɵdid"](4243456,null,0,p.a,[o.Renderer2,o.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵted"](0,["\n          "])),(l()(),o["ɵted"](0,["\n          "])),(l()(),o["ɵeld"](0,null,0,5,"amexio-tab",[["title","TypeScript"]],null,null,null,a.i,a.j)),o["ɵdid"](114688,[[3,4]],0,d.TabComponent,[],{title:[0,"title"]},null),(l()(),o["ɵted"](0,["\n              "])),(l()(),o["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,c.a,c.b)),o["ɵdid"](4243456,null,0,p.a,[o.Renderer2,o.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),o["ɵted"](0,["\n          "])),(l()(),o["ɵted"](0,["\n          "])),(l()(),o["ɵeld"](0,null,0,5,"amexio-tab",[["title","Data Store"]],null,null,null,a.i,a.j)),o["ɵdid"](114688,[[3,4]],0,d.TabComponent,[],{title:[0,"title"]},null),(l()(),o["ɵted"](0,["\n            "])),(l()(),o["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,c.a,c.b)),o["ɵdid"](4243456,null,0,p.a,[o.Renderer2,o.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),o["ɵted"](0,["\n          "])),(l()(),o["ɵted"](0,["\n        "])),(l()(),o["ɵted"](0,["\n      "])),(l()(),o["ɵted"](0,["\n    "])),(l()(),o["ɵted"](0,["\n  "])),(l()(),o["ɵted"](null,["\n"])),(l()(),o["ɵted"](null,["\n\n"]))],function(l,n){var e=n.component;l(n,1,0,!1),l(n,4,0),l(n,11,0),l(n,22,0);l(n,26,0,"Demo",!0);l(n,31,0,!1),l(n,34,0),l(n,38,0);l(n,45,0,"100%","500px",e.geoChartData);l(n,55,0,"API Reference");l(n,142,0,"Source"),l(n,147,0);l(n,151,0,"Markup",!0);l(n,156,0,e.htmlCode,"markup");l(n,161,0,"TypeScript");l(n,164,0,e.tsCode,"typescript");l(n,168,0,"Data Store");l(n,171,0,e.dataSource,"json")},null)}function u(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,null,null,1,"geo-chart-demo",[],null,null,null,t,m)),o["ɵdid"](114688,null,0,s.a,[],null,null)],function(l,n){l(n,1,0)},null)}var o=e("/oeL"),a=e("Mspa"),d=e("k8FD"),r=(e.n(d),e("Kxkg")),i=e("l0vS"),c=(e.n(i),e("l0f3")),p=e("FMBD"),s=e("5432");e.d(n,"a",function(){return C});var h=[],m=o["ɵcrt"]({encapsulation:2,styles:h,data:{}}),C=o["ɵccf"]("geo-chart-demo",s.a,u,{},{},[])},l0vS:function(l,n,e){!function(l,t){t(n,e("/oeL"),e("qbdv"))}(0,function(l,n,e){"use strict";var t=function(){function l(){}return l.prototype.ngOnInit=function(){},l}();t.decorators=[{type:n.Component,args:[{selector:"amexio-map-properties",template:""}]}],t.ctorParameters=function(){return[]},t.propDecorators={chartBackgroundColor:[{type:n.Input}],leftPosition:[{type:n.Input}],topPosition:[{type:n.Input}],chartWidthInPer:[{type:n.Input}],chartHeightInper:[{type:n.Input}]};var u=function(){function l(){this.displayCountryName=!1,this.id="amexio-map-geomap"+Math.floor(9e4*Math.random())+1e4,this.width="100%"}return l.prototype.drawChart=function(){this.geomapData=google.visualization.arrayToDataTable(this.data),this.options={displayMode:this.displayCountryName?"text":null,region:this.regionCode?this.regionCode:null,backgroundColor:this.backgroundColor?this.backgroundColor:null,datalessRegionColor:this.datalessRegionColor?this.datalessRegionColor:null,chartArea:this.chartAreaComponent?{backgroundColor:this.chartAreaComponent.chartBackgroundColor?this.chartAreaComponent.chartBackgroundColor:null,left:this.chartAreaComponent.leftPosition?this.chartAreaComponent.leftPosition:null,top:this.chartAreaComponent.topPosition?this.chartAreaComponent.topPosition:null,height:this.chartAreaComponent.chartHeightInper?this.chartAreaComponent.chartHeightInper:null,width:this.chartAreaComponent.chartWidthInPer?this.chartAreaComponent.chartWidthInPer:null}:null},this.chart=new google.visualization.GeoChart(document.getElementById(this.id)),this.chart.draw(this.geomapData,this.options),google.visualization.events.addListener(this.chart,"click",this.click)},l.prototype.click=function(l){},l.prototype.ngAfterContentInit=function(){this.chartAreaArray=this.chartAreaComp.toArray(),1==this.chartAreaArray.length&&(this.chartAreaComponent=this.chartAreaArray.pop())},l.prototype.ngOnInit=function(){this.createChart()},l.prototype.createChart=function(){var l=this;google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback(function(){return l.drawChart()})},l.prototype.onResize=function(l){this.createChart()},l}();u.decorators=[{type:n.Component,args:[{selector:"amexio-map-geo-chart",template:'\n      <div [attr.id]="id"\n           [style.width]="width"\n           [style.height]="height" (window:resize)="onResize($event)"\n      >\n      </div>\n  '}]}],u.ctorParameters=function(){return[]},u.propDecorators={width:[{type:n.Input}],height:[{type:n.Input}],data:[{type:n.Input}],displayCountryName:[{type:n.Input}],regionCode:[{type:n.Input}],backgroundColor:[{type:n.Input}],datalessRegionColor:[{type:n.Input}],chartAreaComp:[{type:n.ContentChildren,args:[t]}]};var o=function(){function l(){}return l}();o.decorators=[{type:n.NgModule,args:[{imports:[e.CommonModule],declarations:[t,u],exports:[t,u]}]}],o.ctorParameters=function(){return[]},l.AmexioMapsModule=o,l.MapProperties=t,l.GeoChartComponent=u,Object.defineProperty(l,"__esModule",{value:!0})})}});