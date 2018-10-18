webpackJsonp(["youtube.demo.module"],{

/***/ "../../../../../src/app/enterprise/youtube-player/youtube.demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePlayerDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by pratik on 18/1/18.
 */


var YoutubePlayerDemoComponent = (function () {
    function YoutubePlayerDemoComponent(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    YoutubePlayerDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/enterprise/videoplayer/ee.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/enterprise/videoplayer/ee.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    YoutubePlayerDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    YoutubePlayerDemoComponent.prototype.ngOnInit = function () { };
    YoutubePlayerDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'youtube-player',
            template: "\n   <amexio-card header=\"true\">\n     <amexio-header>\n        YouTube Video Player \n     </amexio-header>\n     <amexio-body>\n       <p>A simple configurable of video player.</p>\n       <amexio-tab-view>\n         <amexio-tab title=\"Demo\" active=\"true\">\n           <amexio-card header=\"true\">\n             <amexio-header> Video player </amexio-header>\n             <amexio-body>\n               <amexio-row>\n                 <amexio-column size=\"12\">\n                   <amexio-card header=\"true\">\n                     <amexio-header> Video player without Width </amexio-header>\n                     <amexio-body>\n                       <amexio-ee-youtube-player url=\"https://www.youtube.com/embed/U7elNhHwgBU\"\n                                                 [height]=\"450\">\n\n                       </amexio-ee-youtube-player>\n                     </amexio-body>\n                   </amexio-card>\n\n                 </amexio-column>\n               </amexio-row>\n               <amexio-row>\n                 <amexio-column size=\"12\">\n                   <amexio-card header=\"true\">\n                     <amexio-header> Video player with Width </amexio-header>\n                     <amexio-body>\n                   <amexio-ee-youtube-player url=\"https://www.youtube.com/embed/U7elNhHwgBU\"\n                                             [height]=\"450\" [width]=\"50\">\n\n                   </amexio-ee-youtube-player>\n                     </amexio-body>\n                   </amexio-card>\n\n                 </amexio-column>\n               </amexio-row>\n             </amexio-body>\n           </amexio-card>\n         </amexio-tab>\n         <amexio-tab title=\"API Reference\">\n           <amexio-datagrid title=\"Propeties\" [enable-column-fiter]=\"false\"\n                            [http-method]=\"'get'\"\n                            [http-url]=\"'assets/apireference/enterprise/videoplayer.json'\"\n                            [data-reader]=\"'properties'\"\n                            [enable-data-filter]=\"false\">\n             <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                       [text]=\"'Name'\"></amexio-data-table-column>\n             <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                       [text]=\"'Type'\"></amexio-data-table-column>\n             <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                       [text]=\"'Default'\"></amexio-data-table-column>\n             <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                       [text]=\"'Description'\"></amexio-data-table-column>\n           </amexio-datagrid>\n\n         </amexio-tab>\n         <amexio-tab title=\"Source\">\n           <div style=\"overflow-y: scroll\">\n           <amexio-vertical-tab-view>\n             <amexio-tab title=\"HTML\" [active]=\"true\">\n               <ng-container *ngIf=\"htmlCode\">\n                 <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                 <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n               </ng-container>\n             </amexio-tab>\n             <amexio-tab title=\"Type Script\">\n               <ng-container *ngIf=\"typeScriptCode\">\n                 <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n               </ng-container>\n             </amexio-tab>\n           </amexio-vertical-tab-view>\n           </div>\n         </amexio-tab>\n         <amexio-tab title=\"Live\">\n         <p align=\"center\">Amexio Sandbox</p>\n         <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-youtube-player?embed=1&file=app/enterprise/youtube-player/youtube.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n         </amexio-tab>\n       </amexio-tab-view>\n     </amexio-body>\n   </amexio-card>\n "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], YoutubePlayerDemoComponent);
    return YoutubePlayerDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/enterprise/youtube-player/youtube.demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerModule", function() { return YoutubePlayerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__youtube_demo_component__ = __webpack_require__("../../../../../src/app/enterprise/youtube-player/youtube.demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_amexio_ng_extensions__ = __webpack_require__("../../../../amexio-ng-extensions/amexio-ng-extensions.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pratik on 18/1/18.
 */







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__youtube_demo_component__["a" /* YoutubePlayerDemoComponent */] },
];
var YoutubePlayerModule = (function () {
    function YoutubePlayerModule() {
    }
    YoutubePlayerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6_amexio_ng_extensions__["h" /* AmexioWidgetModule */], __WEBPACK_IMPORTED_MODULE_6_amexio_ng_extensions__["c" /* AmexioEnterpriseModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__youtube_demo_component__["a" /* YoutubePlayerDemoComponent */]]
        })
    ], YoutubePlayerModule);
    return YoutubePlayerModule;
}());

var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__youtube_demo_component__["a" /* YoutubePlayerDemoComponent */]];


/***/ })

});
//# sourceMappingURL=youtube.demo.module.chunk.js.map