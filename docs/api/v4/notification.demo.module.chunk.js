webpackJsonp(["notification.demo.module"],{

/***/ "../../../../../src/app/navigation/notification/notification.demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDemoModule", function() { return NotificationDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_amexio_ng_extensions__ = __webpack_require__("../../../../amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notification_demo__ = __webpack_require__("../../../../../src/app/navigation/notification/notification.demo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Created by sagar on 11/1/18.
 */
var NotificationDemoModule = (function () {
    function NotificationDemoModule() {
    }
    NotificationDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_7__notification_demo__["a" /* NotificationDemo */]],
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2_amexio_ng_extensions__["h" /* AmexioWidgetModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild([{
                        path: '', component: __WEBPACK_IMPORTED_MODULE_7__notification_demo__["a" /* NotificationDemo */], pathMatch: 'full'
                    }])],
            providers: []
        })
    ], NotificationDemoModule);
    return NotificationDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/notification/notification.demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationDemo; });
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


var NotificationDemo = (function () {
    function NotificationDemo(http) {
        this.http = http;
        this.topMessageArray = [];
        this.bottomMessageArray = [];
        this.topLeftMessageArray = [];
        this.bottomLeftMessageArray = [];
        this.getHtmlAndTypeScriptCode();
    }
    NotificationDemo.prototype.bottomLeftNotification = function () {
        this.bottomLeftMessageArray.push('Bottom Left Notification!!!');
    };
    NotificationDemo.prototype.topLeftNotification = function () {
        this.topLeftMessageArray.push('Top Left Notification!!!');
    };
    NotificationDemo.prototype.topNotification = function () {
        this.topMessageArray.push('Top Right Notification!!!');
    };
    NotificationDemo.prototype.bottomNotification = function () {
        this.bottomMessageArray.push('Bottom Right Notification!!!');
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    NotificationDemo.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/navigation/notification/navigation.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/navigation/notification/navigation.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    NotificationDemo.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    NotificationDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'notification-demo', template: "\n    <amexio-card header=\"true\">\n      <amexio-header>\n         App Notification's \n      </amexio-header>\n      <amexio-body>\n        <p>Notification provides a way to let user know through pop-up messages.</p>\n        <amexio-tab-view>\n          <amexio-tab title=\"Demo\" active=\"true\">\n            <amexio-row>\n              <amexio-column size=\"6\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header> Top Left Notification </amexio-header>\n                  <amexio-body>\n                    <amexio-notification [data]=\"topLeftMessageArray\"\n                                         [vertical-position]=\"'top'\"\n                                         [horizontal-position]=\"'left'\" [auto-dismiss-msg]=\"true\"\n                                         [auto-dismiss-msg-interval]=\"4000\">\n                    </amexio-notification>\n                    <amexio-button (onClick)=\"topLeftNotification()\"\n                                   [label]=\"'Info Left Popup'\" [type]=\"'primary'\"\n                                   [tooltip]=\"'Primary Button'\">\n                    </amexio-button>\n                  </amexio-body>\n                </amexio-card>\n\n              </amexio-column>\n              <amexio-column size=\"6\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header> Top Right Notification </amexio-header>\n                  <amexio-body>\n                    <amexio-notification [data]=\"topMessageArray\"\n                                         [vertical-position]=\"'top'\"\n                                         [horizontal-position]=\"'right'\" [auto-dismiss-msg]=\"true\"\n                                         [auto-dismiss-msg-interval]=\"4000\">\n                    </amexio-notification>\n                    <amexio-button (onClick)=\"topNotification()\"\n                                   [label]=\"'Info Right Popup'\" [type]=\"'primary'\"\n                                   [tooltip]=\"'Primary Button'\">\n                    </amexio-button>\n                  </amexio-body>\n                </amexio-card>\n              \n              </amexio-column>\n           \n            </amexio-row>\n\n            <amexio-row>\n             \n              <amexio-column size=\"6\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header> Bottom Left Notification </amexio-header>\n                  <amexio-body>\n                    <amexio-notification [data]=\"bottomLeftMessageArray\"\n                                         [vertical-position]=\"'bottom'\"\n                                         [horizontal-position]=\"'left'\"\n                                         [auto-dismiss-msg]=\"true\"\n                                         [auto-dismiss-msg-interval]=\"4000\">\n                    </amexio-notification>\n                    <amexio-button (onClick)=\"bottomLeftNotification()\"\n                                   [label]=\"'Info Bottom Left '\" [type]=\"'primary'\"\n                                   [tooltip]=\"'Primary Button'\">\n                    </amexio-button>\n                  </amexio-body>\n                </amexio-card>\n\n              </amexio-column>\n              <amexio-column size=\"6\">\n                <amexio-card [header]=\"true\">\n                  <amexio-header> Bottom Right Notification </amexio-header>\n                  <amexio-body>\n                    <amexio-notification [data]=\"bottomMessageArray\"\n                                         [vertical-position]=\"'bottom'\"\n                                         [horizontal-position]=\"'right'\" [auto-dismiss-msg]=\"true\"\n                                         [auto-dismiss-msg-interval]=\"4000\">\n                    </amexio-notification>\n                    <amexio-button (onClick)=\"bottomNotification()\"\n                                   [label]=\"'Info Bottom Right'\" [type]=\"'primary'\"\n                                   [tooltip]=\"'Primary Button'\">\n                    </amexio-button>\n                  </amexio-body>\n                </amexio-card>\n\n              </amexio-column>\n            </amexio-row>\n          </amexio-tab>\n          <amexio-tab title=\"API Reference\">\n            <amexio-datagrid title=\"Propeties\" [enable-column-fiter]=\"false\"\n                             [http-method]=\"'get'\"\n                             [http-url]=\"'assets/apireference/navigation/notification.json'\"\n                             [data-reader]=\"'properties'\"\n                             [enable-data-filter]=\"false\">\n              <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n            </amexio-datagrid>\n\n          </amexio-tab>\n          <amexio-tab title=\"Source\">\n            <div style=\"overflow-y: scroll\">\n            <amexio-vertical-tab-view>\n              <amexio-tab title=\"HTML\" [active]=\"true\">\n                <ng-container *ngIf=\"htmlCode\">\n                  <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                  <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n              <amexio-tab title=\"Type Script\">\n                <ng-container *ngIf=\"typeScriptCode\">\n                  <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n                </ng-container>\n              </amexio-tab>\n            </amexio-vertical-tab-view>\n            </div>\n          </amexio-tab>\n          <amexio-tab title=\"Live\">\n           <p align=\"center\">Amexio Sandbox</p>\n<iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-notification?embed=1&file=app/navigation/notification/notification.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n          </amexio-tab>\n        </amexio-tab-view>\n      </amexio-body>\n    </amexio-card>\n    <!--<amexio-notification [data]=\"copyMsgArray\"></amexio-notification>-->\n\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], NotificationDemo);
    return NotificationDemo;
}());



/***/ })

});
//# sourceMappingURL=notification.demo.module.chunk.js.map