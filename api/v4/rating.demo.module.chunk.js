webpackJsonp(["rating.demo.module"],{

/***/ "../../../../../src/app/forms/rating/rating.demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingDemoModule", function() { return RatingDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_amexio_ng_extensions__ = __webpack_require__("../../../../amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rating_demo__ = __webpack_require__("../../../../../src/app/forms/rating/rating.demo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by sagar on 11/1/18.
 */
var RatingDemoModule = (function () {
    function RatingDemoModule() {
    }
    RatingDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_7__rating_demo__["a" /* RatingDemo */]],
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2_amexio_ng_extensions__["h" /* AmexioWidgetModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([{
                        path: '', component: __WEBPACK_IMPORTED_MODULE_7__rating_demo__["a" /* RatingDemo */], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], RatingDemoModule);
    return RatingDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/forms/rating/rating.demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/**
 * Created by sagar on 9/1/18.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatingDemo = (function () {
    function RatingDemo(http) {
        this.http = http;
        this.max = 10;
        this.rate = 7;
        this.profileMaxRate = 5;
        this.customIconRate = 10;
        this.customRate = 5;
        this.profileRate = 2;
        this.disableProfileRate = 3;
        this.disableProfileMaxRate = 5;
        this.isReadonly = false;
        this.titles = ['Poor', 'Fair', 'Average', 'Good', 'Excellent'];
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    RatingDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/forms/rating/form.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/forms/rating/form.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    RatingDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    RatingDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'rating-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Rating \n      </amexio-header>\n      <amexio-body>\n        <p>A simple configurable star rating component with visual feedback.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column [size]=\"6\">\n                <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'center'\">\n                  <amexio-header>\n                     Sample Rating With Label \n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-rating-input [(ngModel)]=\"rate\" [field-label]=\"'Film Rating'\"\n                                         [max]=\"max\" name=\"rate\" [float]=\"true\"\n                                         [read-only]=\"isReadonly\">\n                    </amexio-rating-input>\n                  </amexio-body>\n                  <amexio-action>\n                    Rating : {{rate}}\n                  </amexio-action>\n                </amexio-card>\n              </amexio-column>\n              <amexio-column [size]=\"6\">\n                <amexio-card [header]=\"true\" [footer]=\"true\"  [footer-align]=\"'center'\">\n                  <amexio-header>\n                      Rating With Rate Titles \n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-rating-input [(ngModel)]=\"profileRate\"\n                                         [max]=\"profileMaxRate\" name=\"profileRate\"\n                                         [titles]=\"titles\"\n                                         [read-only]=\"isReadonly\">\n                    </amexio-rating-input>\n                  </amexio-body>\n                  <amexio-action>\n                    Rating : {{profileRate}}\n                  </amexio-action>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column size=\"6\">\n                <amexio-card [header]=\"true\" [footer]=\"true\" [footer-align]=\"'center'\">\n                  <amexio-header>\n                     Custom Rating Icons \n                  </amexio-header>\n                  <amexio-body>\n                    <amexio-rating-input [(ngModel)]=\"customRate\" [full-icon]=\"'\u2611'\" [empty-icon]=\"'\u2610'\"\n                                         [max]=\"customIconRate\" name=\"customRate\" [float]=\"true\"\n                                         [read-only]=\"isReadonly\">\n                    </amexio-rating-input>\n                  </amexio-body>\n                  <amexio-action>\n                    Rating : {{customRate}}\n                  </amexio-action>\n                </amexio-card>\n              </amexio-column>\n              <amexio-column size=\"6\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header>\n                      Rating With Read Only \n                  </amexio-header>\n                  <amexio-body>\n                    <!--Read only Rating-->\n                    <amexio-rating-input [field-label]=\"'Profile Rating'\"\n                                         [(ngModel)]=\"disableProfileRate\"\n                                         [max]=\"disableProfileMaxRate\"\n                                         [read-only]=\"true\">\n                    </amexio-rating-input>\n                  </amexio-body>\n                </amexio-card>\n              </amexio-column>\n            </amexio-row>\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/forms/rating.json'\" \n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\" >\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n         <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-rating?embed=1&file=app/forms/rating/rating.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RatingDemo);
    return RatingDemo;
}());



/***/ })

});
//# sourceMappingURL=rating.demo.module.chunk.js.map