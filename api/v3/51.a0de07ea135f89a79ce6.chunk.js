webpackJsonp([51],{"/jvl":function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("/oeL"),d=u("zSUt"),t=u("ik+O"),o=u("qbdv"),a=u("bm2B"),i=u("0QKF"),s=u("fc+i"),c=u("Ahuc"),r=u("CPp0"),p=u("BkNc"),m=u("kL+h"),g=u("k8FD"),b=(u.n(g),u("5ig8")),v=(u.n(b),u("36nr"));u.d(n,"MediaContentModuleNgFactory",function(){return y});var y=e["ɵcmf"](d.a,[],function(l){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[t.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[e.LOCALE_ID]),e["ɵmpd"](4608,a["ɵi"],a["ɵi"],[]),e["ɵmpd"](4608,i.a,i.a,[s.u]),e["ɵmpd"](4608,c.a,c.a,[s.b]),e["ɵmpd"](4608,r.BrowserXhr,r.BrowserXhr,[]),e["ɵmpd"](4608,r.ResponseOptions,r.BaseResponseOptions,[]),e["ɵmpd"](5120,r.XSRFStrategy,r["ɵb"],[]),e["ɵmpd"](4608,r.XHRBackend,r.XHRBackend,[r.BrowserXhr,r.ResponseOptions,r.XSRFStrategy]),e["ɵmpd"](4608,r.RequestOptions,r.BaseRequestOptions,[]),e["ɵmpd"](5120,r.Http,r["ɵc"],[r.XHRBackend,r.RequestOptions]),e["ɵmpd"](512,o.CommonModule,o.CommonModule,[]),e["ɵmpd"](512,p.RouterModule,p.RouterModule,[[2,p["ɵa"]],[2,p.Router]]),e["ɵmpd"](512,a["ɵba"],a["ɵba"],[]),e["ɵmpd"](512,a.FormsModule,a.FormsModule,[]),e["ɵmpd"](512,m.a,m.a,[]),e["ɵmpd"](512,r.HttpModule,r.HttpModule,[]),e["ɵmpd"](512,g.AmexioWidgetModule,g.AmexioWidgetModule,[]),e["ɵmpd"](512,b.AmexioMediaModule,b.AmexioMediaModule,[]),e["ɵmpd"](512,d.a,d.a,[]),e["ɵmpd"](1024,p.ROUTES,function(){return[[],[{path:"",component:v.a}]]},[])])})},"36nr":function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){this.copyMsgArray=[],this.content=[{key:"Director",value:"Clint Eastwood"},{key:"Starring",value:"\tTom Hanks, Aaron Eckhart, Laura Linney"},{key:"Genres",value:"Drama: Biography"},{key:"Subtitles",value:"\tEnglish [CC]"},{key:"Audio Languages",value:"English"}],this.htmlCode='\n     <amexio-ee-content \n        [bgImgUrl]="\'assets/images/narcos_main_header_img.jpg\'"\n        [title]="\'Narcos\'" [description]="\'The true story of Colombia infamously violent and powerful drug cartels fuels this gritty gangster drama series.\'"\n        [contents]="content" [videoLink]="\'U7elNhHwgBU\'" [matchPercentage]="\'90%\'" [ageLimit]="\'16\'" [releaseYear]="\'2016\'" [seasonNo]="1"\n        [rate]="7" [max]="10" [enableWatch]="true" [enableMyList]="true">\n     </amexio-ee-content>\n    ',this.tsCode="\nimport {Component, OnInit} from '@angular/core';\n\n@Component({\n  selector: 'media-content',\n  templateUrl: 'mediacontent.demo.html'\n})\n\nexport class MediaContentComponent implements OnInit {\n   content: any;\n  constructor() {\n    this.content = [\n      {\n        'key': 'Director',\n        'value': 'Clint Eastwood'\n      },\n      {\n        'key': 'Starring',\n        'value': '\tTom Hanks, Aaron Eckhart, Laura Linney'\n      },\n      {\n        'key': 'Genres',\n        'value': 'Drama: Biography'\n      },\n      {\n        'key': 'Subtitles',\n        'value': '\tEnglish [CC]'\n      },\n      {\n        'key': 'Audio Languages',\n        'value': 'English'\n      }\n    ];\n  }\n  ngOnInit() {\n  }\n}\n    "}return l.prototype.ngOnInit=function(){},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.ctorParameters=function(){return[]},l}()},"ik+O":function(l,n,u){"use strict";function e(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,null,null,448,"amexio-card-pane",[],null,null,null,o.a,o.b)),t["ɵdid"](4308992,null,0,a.CardComponent,[],{enableFooter:[0,"enableFooter"]},null),(l()(),t["ɵted"](null,["\n  "])),(l()(),t["ɵeld"](0,null,0,5,"amexio-pane-header",[],null,null,null,o.c,o.d)),t["ɵdid"](114688,null,0,a.PaneHeaderComponent,[],null,null),(l()(),t["ɵted"](0,["\n    "])),(l()(),t["ɵeld"](0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Media Content Component"])),(l()(),t["ɵted"](0,["\n  "])),(l()(),t["ɵted"](null,["\n  "])),(l()(),t["ɵeld"](0,null,1,437,"amexio-pane-body",[],null,null,null,o.e,o.f)),t["ɵdid"](114688,null,0,a.PaneBodyComponent,[],null,null),(l()(),t["ɵted"](0,["\n    "])),(l()(),t["ɵeld"](0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["A simple configurable star rating component with visual feedback"])),(l()(),t["ɵted"](0,["\n    "])),(l()(),t["ɵeld"](0,null,0,430,"amexio-tab-pane",[],null,null,null,o.g,o.h)),t["ɵdid"](5357568,null,1,a.TabPaneComponent,[],null,null),t["ɵqud"](603979776,1,{queryTabs:1}),(l()(),t["ɵted"](0,["\n      "])),(l()(),t["ɵeld"](0,null,0,20,"amexio-tab",[["title","Demo"]],null,null,null,o.i,o.j)),t["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t["ɵted"](0,["\n        "])),(l()(),t["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["ɵted"](0,["\n        "])),(l()(),t["ɵeld"](0,null,0,14,"amexio-card-pane",[],null,null,null,o.a,o.b)),t["ɵdid"](4308992,null,0,a.CardComponent,[],{enableFooter:[0,"enableFooter"]},null),(l()(),t["ɵted"](null,["\n          "])),(l()(),t["ɵeld"](0,null,0,2,"amexio-pane-header",[],null,null,null,o.c,o.d)),t["ɵdid"](114688,null,0,a.PaneHeaderComponent,[],null,null),(l()(),t["ɵted"](0,["\n            Media Content Demo\n          "])),(l()(),t["ɵted"](null,["\n          "])),(l()(),t["ɵeld"](0,null,1,6,"amexio-pane-body",[],null,null,null,o.e,o.f)),t["ɵdid"](114688,null,0,a.PaneBodyComponent,[],null,null),(l()(),t["ɵted"](0,["\n            "])),(l()(),t["ɵeld"](0,null,0,2,"amexio-ee-content",[],null,null,null,i.e,i.f)),t["ɵdid"](638976,null,0,s.ContentComponent,[],{bgImgUrl:[0,"bgImgUrl"],title:[1,"title"],description:[2,"description"],contents:[3,"contents"],videoLink:[4,"videoLink"],rate:[5,"rate"],max:[6,"max"],enableWatch:[7,"enableWatch"],enableMyList:[8,"enableMyList"],ageLimit:[9,"ageLimit"],releaseYear:[10,"releaseYear"],seasonNo:[11,"seasonNo"],matchPercentage:[12,"matchPercentage"]},null),(l()(),t["ɵted"](null,["\n            "])),(l()(),t["ɵted"](0,["\n          "])),(l()(),t["ɵted"](null,["\n        "])),(l()(),t["ɵted"](0,["\n      "])),(l()(),t["ɵted"](0,["\n      "])),(l()(),t["ɵeld"](0,null,0,363,"amexio-tab",[["title","API Reference"]],null,null,null,o.i,o.j)),t["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),t["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["ɵted"](0,["\n        "])),(l()(),t["ɵeld"](0,null,0,269,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n          "])),(l()(),t["ɵeld"](0,null,null,2,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["API Reference"])),(l()(),t["ɵted"](null,["\n          "])),(l()(),t["ɵeld"](0,null,null,262,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n            "])),(l()(),t["ɵeld"](0,null,null,259,"div",[["class","row"],["id","rating-api-reference"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n              "])),(l()(),t["ɵeld"](0,null,null,256,"table",[["class","table table-sm table-hover"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,253,"tbody",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["bgImgUrl"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Type: "])),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["string"])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Background image from content. "])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["title"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Type: "])),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["string"])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Set title. "])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["description"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Type: "])),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["string"])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Set Description."])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["contents"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Type: "])),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["array[]"])),(l()(),t["ɵted"](null,["\n\n                    "])),(l()(),t["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["array of content must be in key value pair."])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["videoLink"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Type: "])),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["string"])),(l()(),t["ɵted"](null,["\n\n                    "])),(l()(),t["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["set video link."])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["enableWatch"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Type: "])),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["boolean"])),(l()(),t["ɵted"](null,["\n\n                    "])),(l()(),t["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["enable watch button."])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["enableMyList"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Type: "])),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["boolean"])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["enable MyList button."])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["ageLimit"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Type: "])),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["string"])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["set age limit."])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["releaseYear"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Type: "])),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["string"])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["set release Year."])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["seasonNo"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Type: "])),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["string"])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["set season no."])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["closeEnable"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Type: "])),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["boolean"])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["enable close content."])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["rating parameter rate, max"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,12,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Type: "])),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["string"])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["set rating max value(max=5) and current rating(rate=3)."])),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n              "])),(l()(),t["ɵted"](null,["\n\n            "])),(l()(),t["ɵted"](null,["\n          "])),(l()(),t["ɵted"](null,["\n        "])),(l()(),t["ɵted"](0,["\n        "])),(l()(),t["ɵeld"](0,null,0,87,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n          "])),(l()(),t["ɵeld"](0,null,null,2,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["Media content Events"])),(l()(),t["ɵted"](null,["\n          "])),(l()(),t["ɵeld"](0,null,null,80,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n            "])),(l()(),t["ɵeld"](0,null,null,77,"div",[["class","row"],["id","tree-event-reference"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n              "])),(l()(),t["ɵeld"](0,null,null,74,"table",[["class","table table-sm table-hover"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,71,"tbody",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["onWatchClick"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,5,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["get watch button click."])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["onAddListClick"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,5,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["get add list button click."])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["onLikeClick"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,5,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["get like click."])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["onUnlikeLikeClick"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,5,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["get unlike click."])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵeld"](0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,2,"td",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["onCloseClick"])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵeld"](0,null,null,5,"td",[["class","col-xs-9"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["\n                    "])),(l()(),t["ɵeld"](0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](null,["get close content click."])),(l()(),t["ɵted"](null,["\n                  "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n                "])),(l()(),t["ɵted"](null,["\n              "])),(l()(),t["ɵted"](null,["\n            "])),(l()(),t["ɵted"](null,["\n          "])),(l()(),t["ɵted"](null,["\n        "])),(l()(),t["ɵted"](0,["\n      "])),(l()(),t["ɵted"](0,["\n      "])),(l()(),t["ɵeld"](0,null,0,27,"amexio-tab",[["title","Source"]],null,null,null,o.i,o.j)),t["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),t["ɵted"](0,["\n        "])),(l()(),t["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["ɵted"](0,["\n        "])),(l()(),t["ɵeld"](0,null,0,21,"amexio-vertical-left-tab-pane",[],null,null,null,o.o,o.p)),t["ɵdid"](5357568,null,1,a.VerticalLeftTabPaneComponent,[],null,null),t["ɵqud"](603979776,2,{queryTabs:1}),(l()(),t["ɵted"](0,["\n          "])),(l()(),t["ɵeld"](0,null,0,9,"amexio-tab",[["title","Markup"]],null,null,null,o.i,o.j)),t["ɵdid"](114688,[[2,4]],0,a.TabComponent,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t["ɵted"](0,["\n            "])),(l()(),t["ɵted"](0,["\n            "])),(l()(),t["ɵeld"](0,null,0,1,"clip-copy",[],null,null,null,c.a,c.b)),t["ɵdid"](114688,null,0,r.a,[],{htmlCode:[0,"htmlCode"]},null),(l()(),t["ɵted"](0,["\n            "])),(l()(),t["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,p.a,p.b)),t["ɵdid"](4243456,null,0,m.a,[t.Renderer2,t.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),t["ɵted"](0,["\n\n\n          "])),(l()(),t["ɵted"](0,["\n          "])),(l()(),t["ɵeld"](0,null,0,5,"amexio-tab",[["title","TypeScript"]],null,null,null,o.i,o.j)),t["ɵdid"](114688,[[2,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),t["ɵted"](0,["\n\n            "])),(l()(),t["ɵeld"](0,null,0,1,"prism-block",[],null,null,null,p.a,p.b)),t["ɵdid"](4243456,null,0,m.a,[t.Renderer2,t.ElementRef],{code:[0,"code"],language:[1,"language"]},null),(l()(),t["ɵted"](0,["\n\n          "])),(l()(),t["ɵted"](0,["\n        "])),(l()(),t["ɵted"](0,["\n      "])),(l()(),t["ɵted"](0,["\n       "])),(l()(),t["ɵeld"](0,null,0,9,"amexio-tab",[["title","Plunker"]],null,null,null,o.i,o.j)),t["ɵdid"](114688,[[1,4]],0,a.TabComponent,[],{title:[0,"title"]},null),(l()(),t["ɵted"](0,["\n        "])),(l()(),t["ɵeld"](0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["ɵted"](0,["\n        "])),(l()(),t["ɵeld"](0,null,0,1,"p",[["class","text-md-center text-primary"]],null,null,null,null,null)),(l()(),t["ɵted"](null,["Amexio Sandbox"])),(l()(),t["ɵted"](0,["\n        "])),(l()(),t["ɵeld"](0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://embed.plnkr.co/aLwDylC7mYBMGXrjIIP5/"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),t["ɵted"](0,["\n      "])),(l()(),t["ɵted"](0,["\n    "])),(l()(),t["ɵted"](0,["\n  "])),(l()(),t["ɵted"](null,["\n"])),(l()(),t["ɵted"](null,["\n\n"]))],function(l,n){var u=n.component;l(n,1,0,!1),l(n,4,0),l(n,11,0),l(n,17,0);l(n,21,0,"Demo",!0);l(n,26,0,!1),l(n,29,0),l(n,33,0);l(n,36,1,["assets/images/narcos_main_header_img.jpg","Narcos","The true story of Colombia infamously violent and powerful drug cartels fuels this gritty gangster drama series.",u.content,"U7elNhHwgBU",7,10,!0,!0,"16+","2016","1 season","90%"]);l(n,43,0,"API Reference");l(n,408,0,"Source"),l(n,413,0);l(n,417,0,"Markup",!0),l(n,421,0,u.htmlCode);l(n,424,0,u.htmlCode,"html");l(n,428,0,"TypeScript");l(n,431,0,u.tsCode,"typescript");l(n,437,0,"Plunker")},null)}function d(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,null,null,1,"media-content",[],null,null,null,e,v)),t["ɵdid"](114688,null,0,g.a,[],null,null)],function(l,n){l(n,1,0)},null)}var t=u("/oeL"),o=u("Mspa"),a=u("k8FD"),i=(u.n(a),u("RTgU")),s=u("5ig8"),c=(u.n(s),u("8mzU")),r=u("repp"),p=u("l0f3"),m=u("FMBD"),g=u("36nr");u.d(n,"a",function(){return y});var b=[],v=t["ɵcrt"]({encapsulation:2,styles:b,data:{}}),y=t["ɵccf"]("media-content",g.a,d,{},{},[])},zSUt:function(l,n,u){"use strict";var e=u("36nr");u.d(n,"a",function(){return d});var d=(e.a,function(){function l(){}return l}())}});