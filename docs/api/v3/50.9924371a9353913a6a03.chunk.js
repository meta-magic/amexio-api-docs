webpackJsonp([50],{YfSC:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e("/oeL"),t=e("q8Y9"),d=e("tCtL"),a=e("qbdv"),o=e("bm2B"),i=e("0QKF"),s=e("fc+i"),r=e("Ahuc"),c=e("CPp0"),p=e("BkNc"),m=e("kL+h"),g=e("5ig8"),h=(e.n(g),e("k8FD")),C=(e.n(h),e("li2x"));e.d(n,"MultiCarouselModuleNgFactory",function(){return b});var b=u["ɵcmf"](t.a,[],function(l){return u["ɵmod"]([u["ɵmpd"](512,u.ComponentFactoryResolver,u["ɵCodegenComponentFactoryResolver"],[[8,[d.a]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["ɵmpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[u.LOCALE_ID]),u["ɵmpd"](4608,o["ɵi"],o["ɵi"],[]),u["ɵmpd"](4608,i.a,i.a,[s.u]),u["ɵmpd"](4608,r.a,r.a,[s.b]),u["ɵmpd"](4608,c.BrowserXhr,c.BrowserXhr,[]),u["ɵmpd"](4608,c.ResponseOptions,c.BaseResponseOptions,[]),u["ɵmpd"](5120,c.XSRFStrategy,c["ɵb"],[]),u["ɵmpd"](4608,c.XHRBackend,c.XHRBackend,[c.BrowserXhr,c.ResponseOptions,c.XSRFStrategy]),u["ɵmpd"](4608,c.RequestOptions,c.BaseRequestOptions,[]),u["ɵmpd"](5120,c.Http,c["ɵc"],[c.XHRBackend,c.RequestOptions]),u["ɵmpd"](512,a.CommonModule,a.CommonModule,[]),u["ɵmpd"](512,p.x,p.x,[[2,p.m],[2,p.c]]),u["ɵmpd"](512,o["ɵba"],o["ɵba"],[]),u["ɵmpd"](512,o.FormsModule,o.FormsModule,[]),u["ɵmpd"](512,m.a,m.a,[]),u["ɵmpd"](512,c.HttpModule,c.HttpModule,[]),u["ɵmpd"](512,g.AmexioMediaModule,g.AmexioMediaModule,[]),u["ɵmpd"](512,h.AmexioWidgetModule,h.AmexioWidgetModule,[]),u["ɵmpd"](512,t.a,t.a,[]),u["ɵmpd"](1024,p.t,function(){return[[{path:"",component:C.a}]]},[])])})},li2x:function(l,n,e){"use strict";var u=e("CPp0");e.d(n,"a",function(){return t});var t=function(){function l(l){this.http=l,this.copyMsgArray=[],this.htmlCode='\n      <amexio-media-ee-carousel title="Horizontal Carousel" [data]="newreleases"></amexio-media-ee-carousel>\n      <amexio-media-ee-carousel title="Vertical Carousel"  [data]="topRateContent" carouselStyle="vertical"></amexio-media-ee-carousel>\n    ',this.tsCode="\n    import {Component, OnInit} from '@angular/core';\n    import {Http} from \"@angular/http\";\n\n    @Component({\n       selector: 'multi-carousel', templateUrl: 'multicarousel.demo.html'\n    })\n\n    export class MultiCarouselComponent implements OnInit {\n      newreleases : any;\n      topRateContent : any;\n      constructor(private http :Http) {\n        this.http.get('assets/data/newreleases.json').subscribe(res=>this.newreleases = res.json());\n        this.http.get('assets/data/topratedcontent.json').subscribe(res=>this.topRateContent = res.json());  \n      }\n    }\n    \n    ",this.datasource='[\n  {\n    "title": "A Pretty Little Liar",\n    "img": "assets/images/newrelease/a.jpg",\n    "details_img": "assets/images/newrelease/a_details.jpg",\n    "desc": "To avenge his father\'s death, a young man leads an army into battle against a cruel tyrant in this Hindi conclusion to the historic saga.",\n    "video": "Xx---l5CoMQ",\n    "matchPercentage": "95",\n    "releaseYear": "2017",\n    "ageLimit": "16",\n    "seasonNo": "3",\n    "content": [\n      {\n        "key": "Creator",\n        "value": "I Malene King"\n      },\n      {\n        "key": "Starring",\n        "value": "Troian, Ashely, Lucy"\n      },\n      {\n        "key": "Genres",\n        "value": "TV Programmes"\n      },\n      {\n        "key": "Subtitles",\n        "value": "English [CC]"\n      },\n      {\n        "key": "Audio Languages",\n        "value": "English"\n      }\n    ]\n  },\n  {\n    "title": "Banking On Bitcoin",\n    "img": "assets/images/newrelease/bankingonbitcoin.jpg",\n    "details_img": "assets/images/newrelease/bitcoin_details.jpg",\n    "desc": "A once-promising wrestler pursues the gold medal he never won by training two of his daughters to compete at the Commonwealth Games.",\n    "video": "CTbyaj8Y-Co",\n    "matchPercentage": "94",\n    "releaseYear": "2015",\n    "ageLimit": "13",\n    "seasonNo": "2",\n    "content": [\n      {\n        "key": "Creator",\n        "value": "Christopher Cannucciar"\n      },\n      {\n        "key": "Genres",\n        "value": "Documentary"\n      },\n      {\n        "key": "Subtitles",\n        "value": "English [CC]"\n      },\n      {\n        "key": "Audio Languages",\n        "value": "English"\n      }\n    ]\n  },\n  {\n    "title": "Naked",\n    "img": "assets/images/newrelease/naked.jpg",\n    "details_img": "assets/images/newrelease/naked_details.jpg",\n    "desc": "With humanity teetering on the brink of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.",\n    "video": "nIgeVoVMv90",\n    "matchPercentage": "90",\n    "releaseYear": "2017",\n    "ageLimit": "16",\n    "seasonNo": "1",\n    "content": [\n      {\n        "key": "Starring",\n        "value": "Marlon Wayans, Dennis, Eliza"\n      },\n      {\n        "key": "Creator",\n        "value": "Michale Tiddes"\n      },\n      {\n        "key": "Genres",\n        "value": "International Movie, Comedies"\n      },\n      {\n        "key": "Subtitles",\n        "value": "English [CC]"\n      },\n      {\n        "key": "Audio Languages",\n        "value": "English"\n      }\n    ]\n  },]'}return l.prototype.ngOnInit=function(){var l=this;this.http.get("assets/data/newreleases.json").subscribe(function(n){return l.newreleases=n.json()}),this.http.get("assets/data/topratedcontent.json").subscribe(function(n){return l.topRateContent=n.json()})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.ctorParameters=function(){return[{type:u.Http}]},l}()},q8Y9:function(l,n,e){"use strict";var u=e("li2x");e.d(n,"a",function(){return t});var t=(u.a,function(){function l(){}return l}())},tCtL:function(l,n,e){"use strict";function u(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,null,null,220,"amexio-card-pane",[],null,null,null,a.a,a.b)),d["ɵdid"](4308992,null,0,o.CardComponent,[],{enableFooter:[0,"enableFooter"]},null),(l()(),d["ɵted"](null,["\n  "])),(l()(),d["ɵeld"](0,null,0,5,"amexio-pane-header",[],null,null,null,a.c,a.d)),d["ɵdid"](114688,null,0,o.PaneHeaderComponent,[],null,null),(l()(),d["ɵted"](0,["\n    "])),(l()(),d["ɵeld"](0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Multi Carousel Component"])),(l()(),d["ɵted"](0,["\n  "])),(l()(),d["ɵted"](null,["\n  "])),(l()(),d["ɵeld"](0,null,1,209,"amexio-pane-body",[],null,null,null,a.e,a.f)),d["ɵdid"](114688,null,0,o.PaneBodyComponent,[],null,null),(l()(),d["ɵted"](0,["\n    "])),(l()(),d["ɵeld"](0,null,0,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["A Awesome Multi Item Media Carousel, which comes preloaded with video playing and a full blown detailing page embedded in the component itself"])),(l()(),d["ɵted"](0,["\n    "])),(l()(),d["ɵeld"](0,null,0,202,"amexio-tab-pane",[],null,null,null,a.g,a.h)),d["ɵdid"](5357568,null,1,o.TabPaneComponent,[],null,null),d["ɵqud"](603979776,1,{queryTabs:1}),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵeld"](0,null,0,23,"amexio-tab",[["title","Demo"]],null,null,null,a.i,a.j)),d["ɵdid"](114688,[[1,4]],0,o.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),d["ɵted"](0,["\n\n        "])),(l()(),d["ɵeld"](0,null,0,19,"amexio-card-pane",[],null,null,null,a.a,a.b)),d["ɵdid"](4308992,null,0,o.CardComponent,[],{enableHeader:[0,"enableHeader"],enableFooter:[1,"enableFooter"]},null),(l()(),d["ɵted"](null,["\n          "])),(l()(),d["ɵeld"](0,null,1,15,"amexio-pane-body",[],null,null,null,a.e,a.f)),d["ɵdid"](114688,null,0,o.PaneBodyComponent,[],null,null),(l()(),d["ɵted"](0,["\n           "])),(l()(),d["ɵeld"](0,null,0,11,"div",[["style","background-color: black"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n             "])),(l()(),d["ɵeld"](0,null,null,1,"amexio-media-ee-carousel",[["title","Horizontal Carousel"]],null,null,null,i.a,i.b)),d["ɵdid"](638976,null,0,s.MultiMediaCarousel,[],{data:[0,"data"],title:[1,"title"]},null),(l()(),d["ɵted"](null,["\n\n\n              "])),(l()(),d["ɵeld"](0,null,null,0,"br",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,0,"br",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n\n              "])),(l()(),d["ɵeld"](0,null,null,1,"amexio-media-ee-carousel",[["carouselStyle","vertical"],["title","Vertical Carousel"]],null,null,null,i.a,i.b)),d["ɵdid"](638976,null,0,s.MultiMediaCarousel,[],{data:[0,"data"],carouselStyle:[1,"carouselStyle"],title:[2,"title"]},null),(l()(),d["ɵted"](null,["\n           "])),(l()(),d["ɵted"](0,["\n          "])),(l()(),d["ɵted"](null,["\n        "])),(l()(),d["ɵted"](0,["\n\n      "])),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵeld"](0,null,0,136,"amexio-tab",[["title","API Reference"]],null,null,null,a.i,a.j)),d["ɵdid"](114688,[[1,4]],0,o.TabComponent,[],{title:[0,"title"]},null),(l()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵeld"](0,null,0,131,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n          "])),(l()(),d["ɵeld"](0,null,null,2,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"b",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["API Reference"])),(l()(),d["ɵted"](null,["\n          "])),(l()(),d["ɵeld"](0,null,null,124,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n            "])),(l()(),d["ɵeld"](0,null,null,121,"div",[["class","row"],["id","rating-api-reference"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵeld"](0,null,null,118,"table",[["class","table table-sm table-hover"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,115,"tbody",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,26,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["data"])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,19,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Array"])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,5,"div",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                      "])),(l()(),d["ɵeld"](0,null,null,2,"span",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Data Containing Image Path, Information and Video URL "])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Refer the DataSource Tab "])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,1,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["carouselStyle"])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["string"])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Stlyed Carousel for Vertical or Horizontal Media"])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n\n                "])),(l()(),d["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["hasDetail"])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["boolean"])),(l()(),d["ɵted"](null,["\n\n                    "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Provide a embedded view for more information on the media "])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n\n                "])),(l()(),d["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["title"])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["string"])),(l()(),d["ɵted"](null,["\n\n                    "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Title for the Carousel "])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["onVideoLoad"])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Type: "])),(l()(),d["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Event"])),(l()(),d["ɵted"](null,["\n\n                    "])),(l()(),d["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),d["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["Emits with a video id to play "])),(l()(),d["ɵted"](null,["\n                    "])),(l()(),d["ɵted"](null,["\n                  "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n                "])),(l()(),d["ɵted"](null,["\n              "])),(l()(),d["ɵted"](null,["\n\n            "])),(l()(),d["ɵted"](null,["\n          "])),(l()(),d["ɵted"](null,["\n        "])),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵeld"](0,null,0,34,"amexio-tab",[["title","Source"]],null,null,null,a.i,a.j)),d["ɵdid"](114688,[[1,4]],0,o.TabComponent,[],{title:[0,"title"]},null),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵeld"](0,null,0,28,"amexio-vertical-left-tab-pane",[],null,null,null,a.o,a.p)),d["ɵdid"](5357568,null,1,o.VerticalLeftTabPaneComponent,[],null,null),d["ɵqud"](603979776,2,{queryTabs:1}),(l()(),d["ɵted"](0,["\n          "])),(l()(),d["ɵeld"](0,null,0,9,"amexio-tab",[["title","Markup"]],null,null,null,a.i,a.j)),d["ɵdid"](114688,[[2,4]],0,o.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),d["ɵted"](0,["\n            "])),(l()(),d["ɵted"](0,["\n            "])),(l()(),d["ɵeld"](0,null,0,1,"clip-copy",[],null,[[null,"onClick"]],function(l,n,e){var u=!0,t=l.component;if("onClick"===n){u=!1!==t.onCopyClick()&&u}return u},c.a,c.b)),d["ɵdid"](114688,null,0,p.a,[],{htmlCode:[0,"htmlCode"]},{onClick:"onClick"}),(l()(),d["ɵted"](0,["\n            "])),(l()(),d["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,m.a,m.b)),d["ɵdid"](4243456,null,0,g.a,[d.Renderer2,d.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),d["ɵted"](0,["\n\n\n          "])),(l()(),d["ɵted"](0,["\n          "])),(l()(),d["ɵeld"](0,null,0,5,"amexio-tab",[["title","TypeScript"]],null,null,null,a.i,a.j)),d["ɵdid"](114688,[[2,4]],0,o.TabComponent,[],{title:[0,"title"]},null),(l()(),d["ɵted"](0,["\n\n            "])),(l()(),d["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,m.a,m.b)),d["ɵdid"](4243456,null,0,g.a,[d.Renderer2,d.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),d["ɵted"](0,["\n\n          "])),(l()(),d["ɵted"](0,["\n\n          "])),(l()(),d["ɵeld"](0,null,0,5,"amexio-tab",[["title","Datasource"]],null,null,null,a.i,a.j)),d["ɵdid"](114688,[[2,4]],0,o.TabComponent,[],{title:[0,"title"]},null),(l()(),d["ɵted"](0,["\n\n            "])),(l()(),d["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,m.a,m.b)),d["ɵdid"](4243456,null,0,g.a,[d.Renderer2,d.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),d["ɵted"](0,["\n\n          "])),(l()(),d["ɵted"](0,["\n        "])),(l()(),d["ɵted"](0,["\n      "])),(l()(),d["ɵted"](0,["\n    "])),(l()(),d["ɵted"](0,["\n  "])),(l()(),d["ɵted"](null,["\n"])),(l()(),d["ɵted"](null,["\n\n\n"]))],function(l,n){var e=n.component;l(n,1,0,!1),l(n,4,0),l(n,11,0),l(n,17,0);l(n,21,0,"Demo",!0);l(n,24,0,!1,!1),l(n,27,0);l(n,32,0,e.newreleases,"Horizontal Carousel");l(n,39,0,e.topRateContent,"vertical","Vertical Carousel");l(n,46,0,"API Reference");l(n,184,0,"Source"),l(n,189,0);l(n,193,0,"Markup",!0),l(n,197,0,e.htmlCode);l(n,200,0,e.htmlCode,"html");l(n,204,0,"TypeScript");l(n,207,0,e.tsCode,"typescript");l(n,211,0,"Datasource");l(n,214,0,e.datasource,"json")},null)}function t(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,null,null,1,"multi-carousel",[],null,null,null,u,b)),d["ɵdid"](114688,null,0,r.a,[h.Http],null,null)],function(l,n){l(n,1,0)},null)}var d=e("/oeL"),a=e("Mspa"),o=e("k8FD"),i=(e.n(o),e("RTgU")),s=e("5ig8"),r=(e.n(s),e("li2x")),c=e("8mzU"),p=e("repp"),m=e("l0f3"),g=e("FMBD"),h=e("CPp0");e.d(n,"a",function(){return y});var C=[],b=d["ɵcrt"]({encapsulation:2,styles:C,data:{}}),y=d["ɵccf"]("multi-carousel",r.a,t,{},{},[])}});