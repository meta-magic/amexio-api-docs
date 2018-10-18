webpackJsonp(["dialogue.demo.module"],{

/***/ "../../../../../src/app/panes/dialogue/dialogue.demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogueDemoComponent; });
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


var DialogueDemoComponent = (function () {
    function DialogueDemoComponent(http) {
        this.http = http;
        this.getHtmlAndTypeScriptCode();
    }
    DialogueDemoComponent.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    DialogueDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/pane/dialogue/dialogue.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/pane/dialogue/dialogue.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    DialogueDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    DialogueDemoComponent.prototype.toggleConfirm = function () {
        this.confirmdialogue = !this.confirmdialogue;
    };
    DialogueDemoComponent.prototype.toggleError = function () {
        this.errordialogue = !this.errordialogue;
    };
    DialogueDemoComponent.prototype.toggleWarning = function () {
        this.warningdialogue = !this.warningdialogue;
    };
    DialogueDemoComponent.prototype.toggleHelp = function () {
        this.helpdialogue = !this.helpdialogue;
    };
    DialogueDemoComponent.prototype.toggleCustom = function () {
        this.customdialogue = !this.customdialogue;
    };
    DialogueDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialogue-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n        dialogue\n      </amexio-header>\n      <amexio-body>\n        <p>A Simple dialogue which renders various prompts like Confirmation/Alert based on type, title, body user has\n          configured.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column [size]=\"4\">\n                <amexio-button type=\"primary\" (onClick)=\"toggleConfirm()\" label=\"Confirm\"></amexio-button>\n                <amexio-dialogue [show-dialogue]=\"confirmdialogue\" [title]=\"'Confirm'\" [message]=\"'Are you sure ?'\"\n                               [message-type]=\"'confirm'\" [type]=\"'confirm'\">\n                </amexio-dialogue>\n              </amexio-column>\n\n              <amexio-column [size]=\"4\">\n                <amexio-button type=\"danger\" (onClick)=\"toggleError()\" label=\"Error\"></amexio-button>\n                <amexio-dialogue [show-dialogue]=\"errordialogue\" [message]=\"'Error Occurred.'\" [primary-action-label]=\"'ok'\"\n                               [title]=\"'Error'\" [message-type]=\"'error'\" [type]=\"'alert'\">\n                </amexio-dialogue>\n              </amexio-column>\n\n              <amexio-column [size]=\"4\">\n                <amexio-button [type]=\"'warning'\" (onClick)=\"toggleWarning()\" label=\"Warning\"></amexio-button>\n                <amexio-dialogue [show-dialogue]=\"warningdialogue\" [message]=\"'Data not found.'\" [title]=\"'Warning'\"\n                               [message-type]=\"'warning'\" [type]=\"'alert'\">\n                </amexio-dialogue>\n              </amexio-column>\n            </amexio-row>\n            <amexio-row>\n              <amexio-column [size]=\"4\">\n                <amexio-button type=\"primary\" (onClick)=\"toggleHelp()\" label=\"Help\"></amexio-button>\n                <amexio-dialogue [show-dialogue]=\"helpdialogue\" [title]=\"'Help'\" [message]=\"'Check Server.'\"\n                               [message-type]=\"'help'\" [type]=\"'alert'\">\n                </amexio-dialogue>\n              </amexio-column>\n\n              <amexio-column [size]=\"4\">\n                <amexio-button type=\"primary\" (onClick)=\"toggleCustom()\" label=\"Custom\"></amexio-button>\n                <amexio-dialogue [show-dialogue]=\"customdialogue\" [custom]=\"true\" [title]=\"'Custom dialogue'\"\n                               [type]=\"'confirm'\">\n                  <amexio-body>\n                    <amexio-text-input field-label=\"Name\" name=\"name\"\n                                       place-holder=\"Enter name\"\n                                       icon-feedback=\"true\"\n                    ></amexio-text-input><br>\n                  </amexio-body>\n                  <amexio-action>\n                    <amexio-button type=\"primary\" (onClick)=\"toggleCustom()\" label=\"save\"></amexio-button>\n                  </amexio-action>\n                </amexio-dialogue>\n              </amexio-column>\n            </amexio-row>\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Properties\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/panes/dialogue/dialogue.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"20\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\"\n                                        [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n            <br>\n            <amexio-datagrid title=\"Events\" [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/panes/dialogue/dialogue.json'\" [data-reader]=\"'events'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [data-index]=\"'name'\" [width]=\"20\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [data-index]=\"'description'\" [width]=\"65\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n          <p align=\"center\">Amexio Sandbox</p>\n            <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-dialogue?embed=1&file=app/panels/dialogue/dialogue.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DialogueDemoComponent);
    return DialogueDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/panes/dialogue/dialogue.demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogueDemoModule", function() { return DialogueDemoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_amexio_ng_extensions__ = __webpack_require__("../../../../amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialogue_demo_component__ = __webpack_require__("../../../../../src/app/panes/dialogue/dialogue.demo.component.ts");
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__dialogue_demo_component__["a" /* DialogueDemoComponent */] },
];
var DialogueDemoModule = (function () {
    function DialogueDemoModule() {
    }
    DialogueDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6_amexio_ng_extensions__["h" /* AmexioWidgetModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__dialogue_demo_component__["a" /* DialogueDemoComponent */]]
        })
    ], DialogueDemoModule);
    return DialogueDemoModule;
}());

var routedComponents = [__WEBPACK_IMPORTED_MODULE_7__dialogue_demo_component__["a" /* DialogueDemoComponent */]];


/***/ })

});
//# sourceMappingURL=dialogue.demo.module.chunk.js.map