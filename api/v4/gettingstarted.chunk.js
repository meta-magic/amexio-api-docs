webpackJsonp(["gettingstarted"],{

/***/ "../../../../../src/app/gettingstarted/gettingstarted.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStatedDemo", function() { return GettingStatedDemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStatedModule", function() { return GettingStatedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_amexio_ng_extensions__ = __webpack_require__("../../../../amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
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
 * Created by sagar on 17/01/17.
 */







var GettingStatedDemo = (function () {
    function GettingStatedDemo(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    //TO LOAD HTML AND TYPESCRIPT CODE
    GettingStatedDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseTs;
        //TS FILE
        this.http.get('assets/data/code/gettingstated/gettingstated.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.tsCode = responseTs;
        });
        this.http.get('assets/data/code/gettingstated/icon.text').subscribe(function (data) {
            _this.iconCode = data.text();
        });
        this.http.get('assets/data/code/gettingstated/data.text').subscribe(function (data) {
            _this.dataCode = data.text();
        });
        this.http.get('assets/data/code/gettingstated/style.text').subscribe(function (data) {
            _this.styleCode = data.text();
        });
        this.http.get('assets/apireference/modules/modules.json').subscribe(function (data) {
            var response = data.json();
            _this.modulesData = response.properties.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
        });
        this.http.get('assets/data/code/gettingstated/gettingstatedv32.text').subscribe(function (data) {
            _this.tsCodeV32 = data.text();
        });
        this.http.get('assets/data/code/gettingstated/gettingstatedv1x.text').subscribe(function (data) {
            _this.tsCodeV1x = data.text();
        });
    };
    GettingStatedDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'getting-started',
            template: "\n    <div style=\"padding-left: 10px;padding-right: 10px;\">\n      <amexio-row>\n        <amexio-column size=\"12\">\n          <div align=\"center\">\n            <a href=\"http://www.amexio.tech/\">\n              <amexio-image path=\"https://image.ibb.co/kdy6Ev/logo.png\"></amexio-image>\n            </a>\n            <br>\n            <h1>Amexio Angular EXtensions v4.0</h1>\n            <br>\n            <amexio-image path=\"assets/images/npm.svg\"></amexio-image>\n            <amexio-image\n              path=\"https://badge.fury.io/js/amexio-ng-extensions.svg\"></amexio-image>\n            <a href=\"https://badge.fury.io/js/amexio-ng-extensions\">\n              <amexio-image path=\"https://img.shields.io/npm/dt/amexio-ng-extensions.svg\"></amexio-image>\n            </a>\n          </div>\n          <hr>\n        </amexio-column>\n      </amexio-row>\n      <amexio-row>\n        <amexio-column size=\"12\">\n          <amexio-card header=\"true\">\n            <amexio-header>\n              Table Of Contents\n            </amexio-header>\n            <amexio-body>\n              <amexio-row>\n                <amexio-column size=\"12\">\n                  <span style=\"cursor: pointer\">1. Installation Details</span>\n                </amexio-column>\n              </amexio-row>\n              <amexio-row>\n                <amexio-column size=\"12\">\n                  <span style=\"cursor: pointer;\">2. Themes</span>\n                </amexio-column>\n              </amexio-row>\n              <amexio-row>\n                <amexio-column size=\"12\">\n                  <span style=\"cursor: pointer;\" >3. License</span>\n                </amexio-column>\n              </amexio-row>\n\n            </amexio-body>\n          </amexio-card>\n        </amexio-column>\n      </amexio-row>\n      <br>\n      <amexio-row>\n        <amexio-column size=\"12\">\n          <amexio-panel [header]=\"true\"\n                        [title]=\"'Installation Details'\"\n                        [expanded]=\"true\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-accordion>\n                  <amexio-accordion-tab header=\"Amexio 4.x - Angular 5\" active=\"true\">\n                    <amexio-tab-view>\n                      <amexio-tab title=\"Installation\" active=\"true\">\n                        <amexio-row>\n                          <amexio-column size=\"12\">\n                            <b>To install this Amexio 4.x follow the steps given below:</b><br>\n                            <pre style=\"font-weight: bold;color: #c0392b\"><code>npm install amexio-ng-extensions@latest --save</code></pre>\n                            Please make sure you have the latest version of\n                            <span\n                              style=\"font-weight: bold;color: #21c00f\">NodeJS & npm Angular CLI</span>\n                            installed. <b>and then from your Angular AppModule:</b>\n                          </amexio-column>\n                        </amexio-row>\n                        <br>\n                        <amexio-row>\n                          <amexio-column size=\"12\">\n                            <div style=\"height: 400px\">\n                              <ng-container *ngIf=\"tsCode\">\n                                <prism-block [code]=\"tsCode\" [language]=\"'typescript'\"></prism-block>\n                              </ng-container>\n                            </div>\n\n                          </amexio-column>\n                        </amexio-row>\n                      </amexio-tab>\n                      <amexio-tab title=\"Modules\">\n                        <p>Amexio Library Consist of the following modules</p>\n                        <ng-container *ngIf=\"modulesData\">\n                          <amexio-datagrid title=\"\" [enable-column-fiter]=\"false\"\n                                           [data]=\"modulesData\"\n                                           [height]=\"300\"\n                                           [enable-data-filter]=\"false\">\n                            <amexio-data-table-column [width]=\"25\" [data-index]=\"'name'\" [data-type]=\"'string'\"\n                                                      [hidden]=\"false\"\n                                                      [text]=\"'Module Name'\">\n                            </amexio-data-table-column>\n                            <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\"\n                                                      [hidden]=\"false\"\n                                                      [text]=\"'Description'\"></amexio-data-table-column>\n                          </amexio-datagrid>\n                        </ng-container>\n                        <br>\n\n                      </amexio-tab>\n                      <amexio-tab title=\"Services\">\n                        <div style=\"height: 500px;overflow-x: auto;\">\n\n\n                          <p>Amexio Provides the below services :</p>\n\n                          <h3>IconService</h3>\n                          <span style=\"font-weight: bolder\">Change all amexio icons from font-awesome to material and vice versa in a single line of code by injecting the <code>IconLoaderService</code></span>\n                          <ng-container *ngIf=\"iconCode\">\n                            <prism-block [code]=\"iconCode\" [language]=\"'typescript'\"></prism-block>\n                          </ng-container>\n                          <br>\n                          <h3>CommonDataService</h3>\n                          <span style=\"font-weight: bolder\">By injecting <code>CommonDataService</code> into to module, you could easly fetch data from Rest</span>\n                          <ng-container *ngIf=\"dataCode\">\n                            <prism-block [code]=\"dataCode\" [language]=\"'typescript'\"></prism-block>\n                          </ng-container>\n                        </div>\n                      </amexio-tab>\n                    </amexio-tab-view>\n                  </amexio-accordion-tab>\n                  <amexio-accordion-tab header=\"Amexio 3.2.x - Angular 5 and Bootstrap 4\" expanded=\"true\">\n                    <amexio-row>\n                      <amexio-column size=\"12\">\n                        <b>To install this Amexio 3.2.x - Angular 5 and Bootstrap 4 follow the steps given below:</b><br>\n                        <pre style=\"font-weight: bold;color: #c0392b\"><code>npm install amexio-ng-extensions@3.2.1 --save</code></pre>\n                        Please make sure you have the latest version of\n                        <span\n                          style=\"font-weight: bold;color: #21c00f\">NodeJS & npm Angular CLI</span>\n                        installed. <b>and then from your Angular AppModule:</b>\n                      </amexio-column>\n                    </amexio-row>\n                    <br>\n                    <amexio-row>\n                      <amexio-column size=\"12\">\n                        <ng-container *ngIf=\"tsCodeV32\">\n                          <prism-block [code]=\"tsCodeV32\" [language]=\"'typescript'\"></prism-block>\n                        </ng-container>\n                      </amexio-column>\n                    </amexio-row>\n\n                    <div align=\"center\">\n                      <a href=\"https://api.amexio.org/api/v3/index.html#/home\" target=\"_blank\"\n                         style=\"color: blueviolet\">Link for API for V3.2</a>\n                    </div>\n\n                  </amexio-accordion-tab>\n                  <amexio-accordion-tab header=\"Amexio 3.0.x - Angular 4 and Bootstrap 4\" expanded=\"true\">\n                    <amexio-row>\n                      <amexio-column size=\"12\">\n                        <b>To install this Amexio 3.0.x - Angular 4 and Bootstrap 4 follow the steps given below:</b><br>\n                        <pre style=\"font-weight: bold;color: #c0392b\"><code>npm install amexio-ng-extensions@3.0.12 --save</code></pre>\n                        Please make sure you have the latest version of\n                        <span\n                          style=\"font-weight: bold;color: #21c00f\">NodeJS & npm Angular CLI</span>\n                        installed. <b>and then from your Angular AppModule:</b>\n                      </amexio-column>\n                    </amexio-row>\n\n                    <br>\n                    <amexio-row>\n                      <amexio-column size=\"12\">\n                        <ng-container *ngIf=\"tsCodeV32\">\n                          <prism-block [code]=\"tsCodeV32\" [language]=\"'typescript'\"></prism-block>\n                        </ng-container>\n                      </amexio-column>\n                    </amexio-row>\n                    <!-- add dependent libraries -->\n                    <div align=\"center\">\n                      <a href=\"https://api.amexio.org/api/v3/index.html#/home\" target=\"_blank\"\n                         style=\"color: blueviolet\">Link for API for V3.0.x</a>\n                    </div>\n\n                  </amexio-accordion-tab>\n                </amexio-accordion>\n              </amexio-column>\n            </amexio-row>\n\n\n          </amexio-panel>\n        </amexio-column>\n      </amexio-row>\n\n      <amexio-row>\n        <amexio-column size=\"12\">\n          <amexio-panel [header]=\"true\"\n                        [title]=\"'Themes'\"\n                        [expanded]=\"true\">\n            <p style=\"color: darkred\"> Themes are available from Version 4 </p>\n            <span>To use the default include the <pre><code>../node_modules/amexio-ng-extensions/styles/mda/at-md-blue.scss</code></pre>in your app .angular-cli.json <code\n              style=\"font-weight: bolder\">styles</code> key</span>\n\n\n            <ng-container *ngIf=\"styleCode\">\n              <div style=\"max-height: 300px;overflow-y: scroll;\">\n                <prism-block [code]=\"styleCode\" [language]=\"'json'\"></prism-block>\n              </div>\n\n            </ng-container>\n\n            <p>Or refer the below table for other themes provided.</p>\n\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-datagrid title=\"Amexio Material Themes\" [enable-column-fiter]=\"false\"\n                                 [height]=\"300\"\n                                 [http-method]=\"'get'\"\n                                 [http-url]=\"'assets/apireference/modules/themes.json'\"\n                                 [data-reader]=\"'properties'\"\n                                 [enable-data-filter]=\"false\">\n                  <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\"\n                                            [hidden]=\"false\"\n                                            [text]=\"'Theme Name'\">\n                  </amexio-data-table-column>\n                  <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\"\n                                            [data-type]=\"'string'\"\n                                            [hidden]=\"false\"\n                                            [text]=\"'Path'\"></amexio-data-table-column>\n                </amexio-datagrid>\n              </amexio-column>\n            </amexio-row>\n\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <amexio-datagrid title=\"Amexio Themes\" [enable-column-fiter]=\"false\"\n                                 [height]=\"300\"\n                                 [http-method]=\"'get'\"\n                                 [http-url]=\"'assets/apireference/modules/amx_themes.json'\"\n                                 [data-reader]=\"'properties'\"\n                                 [enable-data-filter]=\"false\">\n                  <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\"\n                                            [hidden]=\"false\"\n                                            [text]=\"'Theme Name'\">\n                  </amexio-data-table-column>\n                  <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\"\n                                            [data-type]=\"'string'\"\n                                            [hidden]=\"false\"\n                                            [text]=\"'Path'\"></amexio-data-table-column>\n                </amexio-datagrid>\n              </amexio-column>\n            </amexio-row>\n          </amexio-panel>\n        </amexio-column>\n      </amexio-row>\n\n      <amexio-row>\n        <amexio-column size=\"12\">\n          <amexio-panel [header]=\"true\"\n                        [title]=\"'License'\"\n                        [expanded]=\"true\">\n            <br>\n            <b>Amexio API License for Standard & Enterprise Edition</b>\n            <p>\n              Amexio API is Free & Open Source & based on Apache 2 License. A Permissive License whose main condition\n              require preservation of copyright and license notices.\n              Contributors provide an express grant of patent rights. Licensed works, modification and larger works may\n              be distributed under different terms and without source code.\n            </p>\n            <p><a href=\"http://amexio.org/showcaseapp/v4/license.html\" style=\"color: blue\">Click here to read the Apache\n              2 License. </a></p>\n          </amexio-panel>\n        </amexio-column>\n      </amexio-row>\n\n\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], GettingStatedDemo);
    return GettingStatedDemo;
}());

var GettingStatedModule = (function () {
    function GettingStatedModule() {
    }
    GettingStatedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [GettingStatedDemo],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_amexio_ng_extensions__["h" /* AmexioWidgetModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([
                    { path: '', component: GettingStatedDemo, pathMatch: 'full' }
                ])
            ],
            providers: []
        })
    ], GettingStatedModule);
    return GettingStatedModule;
}());



/***/ })

});
//# sourceMappingURL=gettingstarted.chunk.js.map