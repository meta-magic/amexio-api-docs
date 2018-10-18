webpackJsonp(["carousel.demo.module"],{

/***/ "../../../../../src/app/panes/carousel/carousel.demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselDemoModule", function() { return CarouselDemoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_demo__ = __webpack_require__("../../../../../src/app/panes/carousel/carousel.demo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_amexio_ng_extensions__ = __webpack_require__("../../../../amexio-ng-extensions/amexio-ng-extensions.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pratik on 16/1/18.
 */








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__carousel_demo__["a" /* CarouselDemoComponent */] },
];
var CarouselDemoModule = (function () {
    function CarouselDemoModule() {
    }
    CarouselDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_7_amexio_ng_extensions__["h" /* AmexioWidgetModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__carousel_demo__["a" /* CarouselDemoComponent */]]
        })
    ], CarouselDemoModule);
    return CarouselDemoModule;
}());

var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__carousel_demo__["a" /* CarouselDemoComponent */]];


/***/ }),

/***/ "../../../../../src/app/panes/carousel/carousel.demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselDemoComponent; });
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
 * Created by pratik on 16/1/18.
 */


var CarouselDemoComponent = (function () {
    function CarouselDemoComponent(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    CarouselDemoComponent.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    CarouselDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/layout/carousel/carousel.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/carousel/carousel.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    CarouselDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    CarouselDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'carousel-demo',
            template: "\n   <amexio-card header=\"true\">\n     <amexio-header>\n        Carousel \n     </amexio-header>\n     <amexio-body>\n       <p>The CarouselView displays a collection of images or other content in a horizontal layout with built-in navigation between the items.</p>\n       <amexio-tab-view>\n         <amexio-tab title=\"Demo\" active=\"true\">\n          <!-- <amexio-carousel [header]=\"'Mobiles'\" [data]=\"[1,2,3,4,5,6,7,8,9,10,11]\" mode=\"multiple\" shuffle-interval=\"2000\">\n             <ng-template let-car amexioTemplate=\"item\">\n               <div style=\"height: 300px;width: 300px;border: 1px solid red;display : inline-block\">\n                <div style=\"text-align: center\">CAR {{car}}</div>\n               </div>\n             </ng-template>\n           </amexio-carousel>-->\n           <amexio-carousel [header]=\"'Gallery'\" [data]=\"[1,2,3,4,5,6,7,8,9,10,11,12]\" mode=\"multiple\">\n             <ng-template let-img amexioTemplate=\"item\">\n                   <amexio-image [height]=\"'300px'\" path=\"assets/images/carousel/set1/{{img}}.jpg\"></amexio-image>\n             </ng-template>\n           </amexio-carousel>\n           <br><br>\n           \n           <amexio-carousel [header]=\"'Gallery With Auto Shuffle (2 seconds)'\" [data]=\"[1,2,3,4,5,6,7,8,9,10,11]\" mode=\"multiple\" shuffle-interval=\"2000\">\n             <ng-template let-gallery amexioTemplate=\"item\">\n                 <amexio-image [height]=\"'300px'\" path=\"assets/images/carousel/set2/{{gallery}}.jpg\"></amexio-image>\n             </ng-template>\n           </amexio-carousel>\n           <br><br>\n           \n           \n         </amexio-tab>\n         <amexio-tab title=\"API Reference\">\n           <amexio-datagrid title=\"Properties\" [enable-column-fiter]=\"false\"\n                            [http-method]=\"'get'\"\n                            [http-url]=\"'assets/apireference/layout/accordion/acc.json'\"\n                            [data-reader]=\"'properties'\"\n                            [enable-data-filter]=\"false\" >\n             <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n           </amexio-datagrid>\n\n\n           <amexio-datagrid title=\"Events\" [enable-column-fiter]=\"false\"\n                            [http-method]=\"'get'\"\n                            [http-url]=\"'assets/apireference/layout/accordion/acc_event.json'\"\n                            [data-reader]=\"'properties'\"\n                            [enable-data-filter]=\"false\" >\n             <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n           </amexio-datagrid>\n\n\n         </amexio-tab>\n         <amexio-tab title=\"Source\">\n           <div style=\"overflow-y: scroll\">\n             <amexio-vertical-tab-view>\n               <amexio-tab title=\"HTML\" [active]=\"true\">\n                 <ng-container *ngIf=\"htmlCode\">\n                   <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                   <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                 </ng-container>\n               </amexio-tab>\n               <amexio-tab title=\"Type Script\">\n                 <ng-container *ngIf=\"typeScriptCode\">\n                   <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                 </ng-container>\n               </amexio-tab>\n             </amexio-vertical-tab-view>   \n           </div>\n          \n         </amexio-tab>\n         <amexio-tab title=\"Live\">\n         <p align=\"center\">Amexio Sandbox</p>\n         <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-panel-carousel?embed=1&file=app/panels/carousel/carousel.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>   \n         </amexio-tab>\n       </amexio-tab-view>\n     </amexio-body>\n   </amexio-card>\n "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CarouselDemoComponent);
    return CarouselDemoComponent;
}());



/***/ })

});
//# sourceMappingURL=carousel.demo.module.chunk.js.map