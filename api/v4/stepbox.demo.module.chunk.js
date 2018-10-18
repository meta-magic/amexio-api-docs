webpackJsonp(["stepbox.demo.module"],{

/***/ "../../../../../src/app/layout/steps/stepbox/stepbox.demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepBoxDemoModule", function() { return StepBoxDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_amexio_ng_extensions__ = __webpack_require__("../../../../amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stepbox_demo__ = __webpack_require__("../../../../../src/app/layout/steps/stepbox/stepbox.demo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by sagar on 11/1/18.
 */
var StepBoxDemoModule = (function () {
    function StepBoxDemoModule() {
    }
    StepBoxDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_7__stepbox_demo__["a" /* StepBoxDemoComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2_amexio_ng_extensions__["h" /* AmexioWidgetModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([{
                        path: '', component: __WEBPACK_IMPORTED_MODULE_7__stepbox_demo__["a" /* StepBoxDemoComponent */], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], StepBoxDemoModule);
    return StepBoxDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/steps/stepbox/stepbox.demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepBoxDemoComponent; });
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


var StepBoxDemoComponent = (function () {
    function StepBoxDemoComponent(http) {
        this.http = http;
        this.clickMsgArray = [];
        this.getHtmlAndTypeScriptCode();
        this.user = false;
        this.shop = true;
        this.payment = false;
        this.confirmation = false;
    }
    // step box click event
    StepBoxDemoComponent.prototype.stepBlockClick = function (event) {
        if (event.label == "User") {
            this.showMsg("Step 1 User");
            this.updateFlag(true, false, false, false);
        }
        else if (event.label == "Shop") {
            this.showMsg("Step 2 Shop");
            this.updateFlag(false, true, false, false);
        }
        else if (event.label == "Payment") {
            this.showMsg("Step 3 Payment");
            this.updateFlag(false, false, true, false);
        }
        else if (event.label == "Confirmation") {
            this.showMsg("Step 4 Confirmation");
            this.updateFlag(false, false, false, true);
        }
    };
    StepBoxDemoComponent.prototype.updateFlag = function (user, shop, payment, confirmation) {
        this.user = user;
        this.shop = shop;
        this.payment = payment;
        this.confirmation = confirmation;
    };
    StepBoxDemoComponent.prototype.showMsg = function (msg) {
        if (this.clickMsgArray.length >= 1) {
            this.clickMsgArray = [];
            this.clickMsgArray.push(msg);
        }
        else {
            this.clickMsgArray.push(msg);
        }
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    StepBoxDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/layout/steps/steps.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/layout/steps/steps.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    StepBoxDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push('Code Copied');
        }
        else {
            this.copyMsgArray.push('Code Copied');
        }
    };
    StepBoxDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'step-box', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         Step Box \n      </amexio-header>\n      <amexio-body>\n        <p>Step-box component is an indicator for the steps in a workflow.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <!--block is true for showing step box  -->\n                <amexio-label [size]=\"'medium'\">Step box\n                </amexio-label>\n                <amexio-steps [block]=\"true\" [index]=\"true\">\n                  <amexio-step-block [label]=\"'User'\" [active]=\"true\" ></amexio-step-block>\n                  <amexio-step-block [label]=\"'Shop'\" [active]=\"false\" ></amexio-step-block>\n                  <amexio-step-block [label]=\"'Payment'\" [active]=\"false\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'Confirmation'\" [active]=\"false\" ></amexio-step-block>\n                </amexio-steps>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column size=\"12\">\n                <!--block is true for showing step box  -->\n                <amexio-label [size]=\"'medium'\">Step box with clickabel</amexio-label>\n                <amexio-steps [block]=\"true\" [index]=\"true\" (onClick)=\"stepBlockClick($event)\">\n                  <amexio-step-block [label]=\"'User'\" [active]=\"user\" ></amexio-step-block>\n                  <amexio-step-block [label]=\"'Shop'\" [active]=\"shop\" ></amexio-step-block>\n                  <amexio-step-block [label]=\"'Payment'\" [active]=\"payment\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'Confirmation'\" [active]=\"confirmation\"></amexio-step-block>\n                </amexio-steps>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column size=\"12\">\n                index is true for number inside circle\n                <br>\n                <amexio-label [size]=\"'medium'\">Step-box index\n                </amexio-label>\n                <amexio-steps [index]=\"true\">\n                  <amexio-step-block [label]=\"'Step-1'\" [active]=\"true\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'Step-2'\" [active]=\"false\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'Step-3'\" [active]=\"false\"></amexio-step-block>\n                  <amexio-step-block [label]=\"'Step-4'\" [active]=\"false\"></amexio-step-block>\n                </amexio-steps>\n              </amexio-column>\n            </amexio-row>\n           </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/layout/steps/step.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n            <amexio-datagrid title=\"Events\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/layout/steps/stepevents.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n          <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-stepbox?embed=1&file=app/panels/stepbox/stepbox.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <amexio-notification [data]=\"clickMsgArray\" vertical-position=\"top\" horizontal-position=\"right\" auto-dismiss-msg=\"true\" auto-dismiss-msg-interval=\"1000\"></amexio-notification>\n\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], StepBoxDemoComponent);
    return StepBoxDemoComponent;
}());



/***/ })

});
//# sourceMappingURL=stepbox.demo.module.chunk.js.map