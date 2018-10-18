webpackJsonp(["window.demo.module"],{

/***/ "../../../../../src/app/panes/window/window.demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowDemoComponent; });
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


var WindowDemoComponent = (function () {
    function WindowDemoComponent(http) {
        this.http = http;
        this.showBasicWindow = false;
        this.getHtmlAndTypeScriptCode();
    }
    WindowDemoComponent.prototype.getDta = function () {
        var _this = this;
        this.asyncFlag = true;
        setTimeout(function () {
            _this.asyncFlag = false;
        }, 3000);
    };
    //TO LOAD HTML AND TYPESCRIPT CODE
    WindowDemoComponent.prototype.getHtmlAndTypeScriptCode = function () {
        var _this = this;
        var responseHtml;
        var responseTs;
        //HTML FILE
        this.http.get('assets/data/code/pane/window/window.html').subscribe(function (data) {
            responseHtml = data.text();
        }, function (error) {
        }, function () {
            _this.htmlCode = responseHtml;
        });
        //TS FILE
        this.http.get('assets/data/code/pane/window/window.text').subscribe(function (data) {
            responseTs = data.text();
        }, function (error) {
        }, function () {
            _this.typeScriptCode = responseTs;
        });
    };
    //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
    WindowDemoComponent.prototype.onCopyClick = function () {
        if (this.copyMsgArray.length >= 1) {
            this.copyMsgArray = [];
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
        else {
            this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
        }
    };
    WindowDemoComponent.prototype.toggleBasicWindow = function () {
        this.showBasicWindow = !this.showBasicWindow;
    };
    WindowDemoComponent.prototype.toggleMaxWindow = function () {
        this.showMaxWindow = !this.showMaxWindow;
    };
    WindowDemoComponent.prototype.toggleClosable = function () {
        this.showClosable = !this.showClosable;
    };
    WindowDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'window-demo',
            template: "\n   <amexio-card header=\"true\">\n     <amexio-header>\n        Window Pane \n     </amexio-header>\n     <amexio-body>\n       <p>Window Pane component is a customizable Modal Pane in which user can enter custom content</p>\n       <amexio-tab-view>\n         <amexio-tab title=\"Demo\" active=\"true\">\n           <amexio-row>\n             <amexio-column [size]=\"4\">\n               <amexio-button type=\"primary\" (onClick)=\"toggleBasicWindow()\" label=\"Basic Window\"></amexio-button>\n               <amexio-window [show-window]=\"showBasicWindow\" [footer]=\"true\" (close)=\"toggleBasicWindow()\">\n                 <amexio-header>\n                  Employee Form\n                 </amexio-header>\n                 <amexio-body>\n                   <amexio-row>\n                     <amexio-column [size]=\"6\">\n                       <amexio-text-input [field-label]=\"'Name'\" name=\"country\"\n                                          [place-holder]=\"'Enter name'\"\n                                          [enable-popover]=\"true\"\n                                          [icon-feedback]=\"true\"\n                                          [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                          [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                          [max-error-msg]=\"'Name should be less than 15 characters'\"\n                       >\n                       </amexio-text-input>\n                     </amexio-column>\n                     <amexio-column [size]=\"6\">\n                       <amexio-text-input [field-label]=\"'Surname'\" name=\"name\"\n                                          [place-holder]=\"'Enter surname'\"\n                                          [enable-popover]=\"true\"\n                                          [icon-feedback]=\"true\"\n                                          [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                          [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                          [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                       >\n                       </amexio-text-input>\n                     </amexio-column>\n                   </amexio-row>\n                   <amexio-row>\n                     <amexio-column [size]=\"6\">\n\n                       <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\"\n                                              [place-holder]=\"'Enter address'\"\n                                              [error-msg]=\"'Please enter address'\"\n                                              [icon-feedback]=\"true\"\n                                              [rows]=\"'1'\" [columns]=\"'2'\"\n                                              [allow-blank]=\"false\" [enable-popover]=\"true\"\n\n                       >\n                       </amexio-textarea-input>\n\n\n                     </amexio-column>\n\n                   </amexio-row>\n                 </amexio-body>\n                 <amexio-action>\n                   <amexio-button (onClick)=\"showBasicWindow = false\" label=\"Close\"></amexio-button>\n                 </amexio-action>\n                \n               </amexio-window>\n             </amexio-column>\n           \n           \n          \n             <amexio-column [size]=\"4\">\n               <amexio-button type=\"primary\" (onClick)=\"toggleMaxWindow()\" label=\"Maximizable Window\"></amexio-button>\n               <amexio-window [show-window]=\"showMaxWindow\" [footer]=\"true\" (close)=\"toggleMaxWindow()\"  [maximize]=\"true\">\n                 <amexio-header>\n                   Employee Form\n                 </amexio-header>\n                 <amexio-body>\n                   <amexio-row>\n                     <amexio-column [size]=\"6\">\n                       <amexio-text-input [field-label]=\"'Name'\" name=\"country\"\n                                          [place-holder]=\"'Enter name'\"\n                                          [enable-popover]=\"true\"\n                                          [icon-feedback]=\"true\"\n                                          [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                          [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                          [max-error-msg]=\"'Name should be less than 15 characters'\"\n                       >\n                       </amexio-text-input>\n                     </amexio-column>\n                     <amexio-column [size]=\"6\">\n                       <amexio-text-input [field-label]=\"'Surname'\" name=\"name\"\n                                          [place-holder]=\"'Enter surname'\"\n                                          [enable-popover]=\"true\"\n                                          [icon-feedback]=\"true\"\n                                          [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                          [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                          [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                       >\n                       </amexio-text-input>\n                     </amexio-column>\n                   </amexio-row>\n                   <amexio-row>\n                     <amexio-column [size]=\"6\">\n\n                       <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\"\n                                              [place-holder]=\"'Enter address'\"\n                                              [error-msg]=\"'Please enter address'\"\n                                              [icon-feedback]=\"true\"\n                                              [rows]=\"'1'\" [columns]=\"'2'\"\n                                              [allow-blank]=\"false\" [enable-popover]=\"true\"\n\n                       >\n                       </amexio-textarea-input>\n\n\n                     </amexio-column>\n\n                   </amexio-row>\n                 </amexio-body>\n                 <amexio-action>\n                   <amexio-button (onClick)=\"showMaxWindow = false\" label=\"Close\"></amexio-button>\n                 </amexio-action>\n\n               </amexio-window>\n             </amexio-column>\n                  \n      \n             <amexio-column [size]=\"4\">\n               <amexio-button type=\"primary\" (onClick)=\"toggleClosable()\" label=\"Closable Window\"></amexio-button>\n               <amexio-window [show-window]=\"showClosable\" [closable]=\"true\" (close)=\"toggleClosable()\" >\n                 <amexio-header>\n                   Employee Form\n                 </amexio-header>\n                 <amexio-body>\n                   <amexio-row>\n                     <amexio-column [size]=\"6\">\n                       <amexio-text-input [field-label]=\"'Name'\" name=\"country\"\n                                          [place-holder]=\"'Enter name'\"\n                                          [enable-popover]=\"true\"\n                                          [icon-feedback]=\"true\"\n                                          [allow-blank]=\"false\" [error-msg]=\"'Please enter name'\"\n                                          [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Name should be minimum 3 characters'\"\n                                          [max-error-msg]=\"'Name should be less than 15 characters'\"\n                       >\n                       </amexio-text-input>\n                     </amexio-column>\n                     <amexio-column [size]=\"6\">\n                       <amexio-text-input [field-label]=\"'Surname'\" name=\"name\"\n                                          [place-holder]=\"'Enter surname'\"\n                                          [enable-popover]=\"true\"\n                                          [icon-feedback]=\"true\"\n                                          [allow-blank]=\"false\" [error-msg]=\"'Please enter Surname'\"\n                                          [min-length]=\"3\" [max-length]=\"15\" [min-error-msg]=\"'Surname should be minimum 3 characters'\"\n                                          [max-error-msg]=\"'Surname should be less than 15 characters'\"\n                       >\n                       </amexio-text-input>\n                     </amexio-column>\n                   </amexio-row>\n                   <amexio-row>\n                     <amexio-column [size]=\"6\">\n\n                       <amexio-textarea-input [field-label]=\"'Address'\" name=\"Address\"\n                                              [place-holder]=\"'Enter address'\"\n                                              [error-msg]=\"'Please enter address'\"\n                                              [icon-feedback]=\"true\"\n                                              [rows]=\"'1'\" [columns]=\"'2'\"\n                                              [allow-blank]=\"false\" [enable-popover]=\"true\"\n\n                       >\n                       </amexio-textarea-input>\n\n\n                     </amexio-column>\n\n                   </amexio-row>\n                 </amexio-body>\n               </amexio-window>\n             </amexio-column>\n           </amexio-row>\n         </amexio-tab>\n         <amexio-tab title=\"API Reference\">\n           <amexio-datagrid title=\"Properties\" [enable-column-fiter]=\"false\"\n                            [http-method]=\"'get'\"\n                            [http-url]=\"'assets/apireference/panes/window/window.json'\"\n                            [data-reader]=\"'properties'\"\n                            [enable-data-filter]=\"false\" >\n             <amexio-data-table-column [width]=\"15\" [data-index]=\"'name'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Name'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'type'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Type'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"10\" [data-index]=\"'default'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Default'\"></amexio-data-table-column>\n              <amexio-data-table-column [width]=\"65\" [data-index]=\"'description'\" [data-type]=\"'string'\" [hidden]=\"false\"\n                                        [text]=\"'Description'\"></amexio-data-table-column>\n           </amexio-datagrid>\n\n\n         </amexio-tab>\n         <amexio-tab title=\"Source\">\n           <div style=\"overflow-y: scroll\">\n           <amexio-vertical-tab-view>\n             <amexio-tab title=\"HTML\" [active]=\"true\">\n               <ng-container *ngIf=\"htmlCode\">\n                 <!--<clip-copy [htmlCode]=\"htmlCode\" (onClick)=\"onCopyClick()\"></clip-copy>-->\n                 <prism-block [code]=\"htmlCode\" [language]=\"'html'\"></prism-block>\n               </ng-container>\n             </amexio-tab>\n             <amexio-tab title=\"Type Script\">\n               <ng-container *ngIf=\"typeScriptCode\">\n                 <prism-block [code]=\"typeScriptCode\" [language]=\"'typescript'\"></prism-block>\n               </ng-container>\n             </amexio-tab>\n           </amexio-vertical-tab-view>\n           </div>\n         </amexio-tab>\n         <amexio-tab title=\"Live\">\n         <p align=\"center\">Amexio Sandbox</p>\n         <iframe style=\"width: 100%; height: 600px\" src=\"https://stackblitz.com/edit/amexio-v4-window?embed=1&file=app/panels/window/window.demo.html\" frameborder=\"0\" allowfullscren=\"allowfullscren\"></iframe>\n         </amexio-tab>\n       </amexio-tab-view>\n     </amexio-body>\n   </amexio-card>\n "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], WindowDemoComponent);
    return WindowDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/panes/window/window.demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowDemoModule", function() { return WindowDemoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__window_demo_component__ = __webpack_require__("../../../../../src/app/panes/window/window.demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__window_demo_component__["a" /* WindowDemoComponent */] },
];
var WindowDemoModule = (function () {
    function WindowDemoModule() {
    }
    WindowDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7_amexio_ng_extensions__["h" /* AmexioWidgetModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__window_demo_component__["a" /* WindowDemoComponent */]]
        })
    ], WindowDemoModule);
    return WindowDemoModule;
}());

var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__window_demo_component__["a" /* WindowDemoComponent */]];


/***/ })

});
//# sourceMappingURL=window.demo.module.chunk.js.map