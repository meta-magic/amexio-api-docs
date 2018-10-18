webpackJsonp(["progressbar.demo.module"],{

/***/ "../../../../../src/app/data/progressbar/progressbar.demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarDemoModule", function() { return ProgressBarDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_amexio_ng_extensions__ = __webpack_require__("../../../../amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progressbar_demo__ = __webpack_require__("../../../../../src/app/data/progressbar/progressbar.demo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by sagar on 11/1/18.
 */
var ProgressBarDemoModule = (function () {
    function ProgressBarDemoModule() {
    }
    ProgressBarDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_7__progressbar_demo__["a" /* ProgressBarDemo */]],
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2_amexio_ng_extensions__["h" /* AmexioWidgetModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([{
                        path: '', component: __WEBPACK_IMPORTED_MODULE_7__progressbar_demo__["a" /* ProgressBarDemo */], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], ProgressBarDemoModule);
    return ProgressBarDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/data/progressbar/progressbar.demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarDemo; });
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


var ProgressBarDemo = (function () {
    function ProgressBarDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    ProgressBarDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/data/progressbar/progressbar.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/data/progressbar/progressbar.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    ProgressBarDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    ProgressBarDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'progressbar-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Progress Bar \n      </amexio-header>\n      <amexio-body>\n        <p>Progress Bar Component Provides up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars and easy to configure.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header>\n                     Progress Bar \n                  </amexio-header>\n                  <amexio-body>\n                     <h3>Primary</h3>\n                    <amexio-row>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'50'\" [infinite]=\"false\" type=\"primary\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'80'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'100'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n                      </amexio-column>\n                    </amexio-row>\n                    <h3>Warning</h3>\n                    <amexio-row>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'30'\" [infinite]=\"false\" type=\"warning\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'55'\" [infinite]=\"false\" type=\"warning\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'95'\" [infinite]=\"false\" type=\"warning\"></amexio-progress-bar>\n                      </amexio-column>\n                    </amexio-row>\n                    <h3>Success</h3>\n                    <amexio-row>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'45'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'63'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'99'\" [infinite]=\"false\" type=\"success\"></amexio-progress-bar>\n                      </amexio-column>\n                    </amexio-row>\n                    <h3>Danger</h3>                    \n                    <amexio-row>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'54'\" [infinite]=\"false\" type=\"danger\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'32'\" [infinite]=\"false\" type=\"danger\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'85'\" [infinite]=\"false\" type=\"danger\"></amexio-progress-bar>\n                      </amexio-column>\n                    </amexio-row>\n                    <h3>Infinite</h3>\n                    <amexio-row>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'54'\" [infinite]=\"true\" type=\"danger\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'32'\" [infinite]=\"true\" type=\"success\"></amexio-progress-bar>\n                      </amexio-column>\n                      <amexio-column [size]=\"4\">\n                        <amexio-progress-bar [current-value]=\"'85'\" [infinite]=\"true\" type=\"warning\"></amexio-progress-bar>\n                      </amexio-column>\n                    </amexio-row>\n                  </amexio-body>\n                </amexio-card>\n\n              </amexio-column>\n            </amexio-row>\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/data/progressbar.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"15\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'type'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'default'\" [width]=\"10\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n                      <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-progressbar?embed=1&file=app/data/progressbar/progressbar.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProgressBarDemo);
    return ProgressBarDemo;
}());



/***/ })

});
//# sourceMappingURL=progressbar.demo.module.chunk.js.map