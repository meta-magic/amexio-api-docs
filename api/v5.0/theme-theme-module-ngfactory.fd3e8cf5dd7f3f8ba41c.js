(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-theme-module-ngfactory"],{

/***/ "./node_modules/ngx-cookie-service/cookie-service/cookie.service.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ngx-cookie-service/cookie-service/cookie.service.js ***!
  \**************************************************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
// This service is based on the `ng2-cookies` package which sadly is not a service and does
// not use `DOCUMENT` injection and therefore doesn't work well with AoT production builds.
// Package: https://github.com/BCJTI/ng2-cookies


var CookieService = (function () {
    function CookieService(
        // The type `Document` may not be used here. Although a fix is on its way,
        // we will go with `any` for now to support Angular 2.4.x projects.
        // Issue: https://github.com/angular/angular/issues/12631
        // Fix: https://github.com/angular/angular/pull/14894
        document) {
        this.document = document;
        // To avoid issues with server side prerendering, check if `document` is defined.
        this.documentIsAccessible = document !== undefined;
    }
    /**
     * @param name Cookie name
     * @returns {boolean}
     */
    CookieService.prototype.check = function (name) {
        if (!this.documentIsAccessible) {
            return false;
        }
        name = encodeURIComponent(name);
        var regExp = this.getCookieRegExp(name);
        var exists = regExp.test(this.document.cookie);
        return exists;
    };
    /**
     * @param name Cookie name
     * @returns {any}
     */
    CookieService.prototype.get = function (name) {
        if (this.documentIsAccessible && this.check(name)) {
            name = encodeURIComponent(name);
            var regExp = this.getCookieRegExp(name);
            var result = regExp.exec(this.document.cookie);
            return decodeURIComponent(result[1]);
        }
        else {
            return '';
        }
    };
    /**
     * @returns {}
     */
    CookieService.prototype.getAll = function () {
        if (!this.documentIsAccessible) {
            return {};
        }
        var cookies = {};
        var document = this.document;
        if (document.cookie && document.cookie !== '') {
            var split = document.cookie.split(';');
            for (var i = 0; i < split.length; i += 1) {
                var currentCookie = split[i].split('=');
                currentCookie[0] = currentCookie[0].replace(/^ /, '');
                cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
            }
        }
        return cookies;
    };
    /**
     * @param name    Cookie name
     * @param value   Cookie value
     * @param expires Number of days until the cookies expires or an actual `Date`
     * @param path    Cookie path
     * @param domain  Cookie domain
     * @param secure  Secure flag
     */
    CookieService.prototype.set = function (name, value, expires, path, domain, secure) {
        if (!this.documentIsAccessible) {
            return;
        }
        var cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
        if (expires) {
            if (typeof expires === 'number') {
                var dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                cookieString += 'expires=' + dateExpires.toUTCString() + ';';
            }
            else {
                cookieString += 'expires=' + expires.toUTCString() + ';';
            }
        }
        if (path) {
            cookieString += 'path=' + path + ';';
        }
        if (domain) {
            cookieString += 'domain=' + domain + ';';
        }
        if (secure) {
            cookieString += 'secure;';
        }
        this.document.cookie = cookieString;
    };
    /**
     * @param name   Cookie name
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    CookieService.prototype.delete = function (name, path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        this.set(name, '', -1, path, domain);
    };
    /**
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    CookieService.prototype.deleteAll = function (path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        var cookies = this.getAll();
        for (var cookieName in cookies) {
            if (cookies.hasOwnProperty(cookieName)) {
                this.delete(cookieName, path, domain);
            }
        }
    };
    /**
     * @param name Cookie name
     * @returns {RegExp}
     */
    CookieService.prototype.getCookieRegExp = function (name) {
        var escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');
        return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
    };
    return CookieService;
}());

CookieService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
CookieService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] },] },
]; };
//# sourceMappingURL=cookie.service.js.map

/***/ }),

/***/ "./node_modules/ngx-cookie-service/index.js":
/*!**************************************************!*\
  !*** ./node_modules/ngx-cookie-service/index.js ***!
  \**************************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cookie_service_cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie-service/cookie.service */ "./node_modules/ngx-cookie-service/cookie-service/cookie.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return _cookie_service_cookie_service__WEBPACK_IMPORTED_MODULE_0__["CookieService"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/theme/theme.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/theme/theme.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_ThemeComponent, View_ThemeComponent_0, View_ThemeComponent_Host_0, ThemeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ThemeComponent", function() { return RenderType_ThemeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ThemeComponent_0", function() { return View_ThemeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ThemeComponent_Host_0", function() { return View_ThemeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeComponentNgFactory", function() { return ThemeComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/amexio-ng-extensions/amexio-ng-extensions.ngfactory */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.ngfactory.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _theme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service_cookie_service_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service/cookie-service/cookie.service */ "./node_modules/ngx-cookie-service/cookie-service/cookie.service.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_ThemeComponent = [];
var RenderType_ThemeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ThemeComponent, data: {} });

function View_ThemeComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 23, "amexio-column", [], [[8, "className", 0]], null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_AmexioColumnComponent_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_AmexioColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioColumnComponent"], [], { size: [0, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 21, "div", [["class", "card-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 5, "header", [["class", "card-header flex-start"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](5, { "background-color": 0, "color": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "amexio-label", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](8, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 11, "div", [["class", "card-body cardbody"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "amexio-image", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbv_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbv"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbv"], [], { path: [0, "path"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 2, "amexio-label", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](15, 0, ["Version: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "amexio-label", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](19, 0, ["Style: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 2, "footer", [["class", "card-footer flex-end"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "amexio-button", [], null, [[null, "onClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onClick" === en)) {
        var pd_0 = (_co.themeChange(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵv_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵv"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵv"], [], { label: [0, "label"], type: [1, "type"] }, { onClick: "onClick" })], function (_ck, _v) { var currVal_1 = (12 / _v.parent.context.$implicit.length); _ck(_v, 1, 0, currVal_1); var currVal_2 = _ck(_v, 5, 0, _v.context.$implicit.navBarBGColor, _v.context.$implicit.navBarFontColor); _ck(_v, 4, 0, currVal_2); _ck(_v, 7, 0); var currVal_4 = ("assets/images/theme-icons/" + _v.context.$implicit.link); _ck(_v, 11, 0, currVal_4); var currVal_5 = "small"; _ck(_v, 14, 0, currVal_5); _ck(_v, 18, 0); var currVal_8 = "Test"; var currVal_9 = "default"; _ck(_v, 23, 0, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).colclass; _ck(_v, 0, 0, currVal_0); var currVal_3 = _v.context.$implicit.themeName; _ck(_v, 8, 0, currVal_3); var currVal_6 = _v.context.$implicit.version; _ck(_v, 15, 0, currVal_6); var currVal_7 = _v.context.$implicit.style; _ck(_v, 19, 0, currVal_7); }); }
function View_ThemeComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "amexio-row", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_AmexioRowComponent_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_AmexioRowComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 1163264, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioRowComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_ThemeComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { _ck(_v, 1, 0); var currVal_0 = _v.context.$implicit; _ck(_v, 3, 0, currVal_0); }, null); }
function View_ThemeComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 20, "amexio-column", [], [[8, "className", 0]], null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_AmexioColumnComponent_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_AmexioColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioColumnComponent"], [], { size: [0, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 18, "div", [["class", "card-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 5, "header", [["class", "card-header flex-start"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](5, { "background-color": 0, "color": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "amexio-label", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](8, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 11, "div", [["class", "card-body cardbody"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "amexio-image", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbv_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbv"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbv"], [], { path: [0, "path"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 2, "amexio-label", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](15, 0, ["Version: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "amexio-label", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](19, 0, ["Style: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 0, "br", [], null, null, null, null, null))], function (_ck, _v) { var currVal_1 = (12 / _v.parent.context.$implicit.length); _ck(_v, 1, 0, currVal_1); var currVal_2 = _ck(_v, 5, 0, _v.context.$implicit.navBarBGColor, _v.context.$implicit.navBarFontColor); _ck(_v, 4, 0, currVal_2); _ck(_v, 7, 0); var currVal_4 = ("assets/images/theme-icons/" + _v.context.$implicit.link); _ck(_v, 11, 0, currVal_4); var currVal_5 = "small"; _ck(_v, 14, 0, currVal_5); _ck(_v, 18, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).colclass; _ck(_v, 0, 0, currVal_0); var currVal_3 = _v.context.$implicit.themeName; _ck(_v, 8, 0, currVal_3); var currVal_6 = _v.context.$implicit.version; _ck(_v, 15, 0, currVal_6); var currVal_7 = _v.context.$implicit.style; _ck(_v, 19, 0, currVal_7); }); }
function View_ThemeComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "amexio-row", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_AmexioRowComponent_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_AmexioRowComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 1163264, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioRowComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_ThemeComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { _ck(_v, 1, 0); var currVal_0 = _v.context.$implicit; _ck(_v, 3, 0, currVal_0); }, null); }
function View_ThemeComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["\n[amexio-color] = '", "' "]))], null, function (_ck, _v) { var currVal_0 = _v.context.row.css; _ck(_v, 1, 0, currVal_0); }); }
function View_ThemeComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 9, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 8, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](3, { "background-color": 0, "color": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, [" This is amexio color ", " background "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" with opposite font color "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](9, null, [" ", " "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, _v.context.row.BG, _v.context.row.font); _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.row.name; _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.row.BG; _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.row.font; _ck(_v, 9, 0, currVal_3); }); }
function View_ThemeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "amexio-image", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbv_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbv"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbv"], [], { tooltip: [0, "tooltip"], path: [1, "path"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 16777216, null, null, 120, "amexio-tab-view", [], null, [["document", "click"], ["document", "scroll"]], function (_v, en, $event) { var ad = true; if (("document:click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).onWindowClick() !== false);
        ad = (pd_0 && ad);
    } if (("document:scroll" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).onscroll() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_AmexioTabComponent_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_AmexioTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 5619712, null, 2, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioTabComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { closable: [0, "closable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { queryTabs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { queryAction: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 1, 3, "amexio-tab", [["title", "Material Design"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_AmexioTabPill_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_AmexioTabPill"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 114688, [[1, 4]], 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioTabPill"], [], { title: [0, "title"], active: [1, "active"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_ThemeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, 1, 3, "amexio-tab", [["title", "Amexio"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_AmexioTabPill_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_AmexioTabPill"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 114688, [[1, 4]], 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioTabPill"], [], { title: [0, "title"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_ThemeComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, 1, 19, "amexio-tab", [["title", "Colors"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_AmexioTabPill_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_AmexioTabPill"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 114688, [[1, 4]], 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioTabPill"], [], { title: [0, "title"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Eventually we can apply this attribute [amexio-color] to all components, currently we can apply to progress bar and datapoints. To know more refer the API reference section "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, 0, 16, "amexio-datagrid", [["title", "Amexio Colors"]], null, [["document", "scroll"], ["document", "click"]], function (_v, en, $event) { var ad = true; if (("document:scroll" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).onscroll() !== false);
        ad = (pd_0 && ad);
    } if (("document:click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).onclick() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵci_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵci"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 1425408, null, 1, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵci"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["CommonDataService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { title: [0, "title"], httpurl: [1, "httpurl"], httpmethod: [2, "httpmethod"], datareader: [3, "datareader"], enabledatafilter: [4, "enabledatafilter"], enablecolumnfiter: [5, "enablecolumnfiter"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { columnRef: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 3, "amexio-data-table-column", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵcj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵcj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 49152, [[3, 4]], 2, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵcj"], [], { text: [0, "text"], dataindex: [1, "dataindex"], hidden: [2, "hidden"], datatype: [3, "datatype"], width: [4, "width"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 4, { headerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 5, { bodyTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 4, "amexio-data-table-column", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵcj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵcj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 49152, [[3, 4]], 2, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵcj"], [], { text: [0, "text"], dataindex: [1, "dataindex"], hidden: [2, "hidden"], datatype: [3, "datatype"], width: [4, "width"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 6, { headerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 7, { bodyTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [[7, 2], ["amexioBodyTmpl", 2]], null, 0, null, View_ThemeComponent_5)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 4, "amexio-data-table-column", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵcj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵcj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 49152, [[3, 4]], 2, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵcj"], [], { text: [0, "text"], dataindex: [1, "dataindex"], hidden: [2, "hidden"], datatype: [3, "datatype"], width: [4, "width"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 8, { headerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 9, { bodyTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [[9, 2], ["amexioBodyTmpl", 2]], null, 0, null, View_ThemeComponent_6)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, 1, 88, "amexio-tab", [["title", "Getting Started"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_AmexioTabPill_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_AmexioTabPill"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 114688, [[1, 4]], 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioTabPill"], [], { title: [0, "title"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, 0, 2, "amexio-label", [["size", "large"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["To install the Amexio Colors:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, 0, 4, "amexio-box", [["background-color", "blue"], ["border", "left"], ["border-color", "blue"], ["padding", "true"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_AmexioBoxComponent_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_AmexioBoxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioBoxComponent"], [], { border: [0, "border"], borderColor: [1, "borderColor"], bgColor: [2, "bgColor"], padding: [3, "padding"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, 0, 2, "amexio-label", [["size", "medium-bold"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](42, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["$ sudo npm install -g amexio-colors"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, 0, 2, "amexio-label", [["size", "large"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Check the Amexio Colors version:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, 0, 17, "amexio-box", [["background-color", "blue"], ["border", "left"], ["border-color", "blue"], ["padding", "true"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_AmexioBoxComponent_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_AmexioBoxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](48, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioBoxComponent"], [], { border: [0, "border"], borderColor: [1, "borderColor"], bgColor: [2, "bgColor"], padding: [3, "padding"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, 0, 2, "amexio-label", [["size", "medium-bold"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](50, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" $ ac "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, 0, 2, "amexio-label", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](54, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Amexio Colors v1.0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, 0, 2, "amexio-label", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](58, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Copyright (c) 2018, MetaMagic Global Inc, NJ, USA "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, 0, 2, "amexio-label", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](62, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" ..... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, 0, 2, "amexio-label", [["size", "large"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](66, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["To Generate Amexio Material Design Themes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, 0, 39, "amexio-box", [["background-color", "blue"], ["border", "left"], ["border-color", "blue"], ["padding", "true"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_AmexioBoxComponent_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_AmexioBoxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](69, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioBoxComponent"], [], { border: [0, "border"], borderColor: [1, "borderColor"], bgColor: [2, "bgColor"], padding: [3, "padding"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, 0, 2, "amexio-label", [["size", "medium-bold"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](71, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["$ pwd"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, 0, 2, "amexio-label", [["size", "medium"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](75, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["/home/user/"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, 0, 2, "amexio-label", [["size", "medium-bold"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](80, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["$ mkdir mythemes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](83, 0, null, 0, 2, "amexio-label", [["size", "medium-bold"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](84, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["$ echo \"// Amexio Themes v0.0 \" >> Themes-Data.txt"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](87, 0, null, 0, 2, "amexio-label", [["size", "medium-bold"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](88, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["$ echo \"// Design-Type : Material Design \" >> Themes-Data.txt"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](90, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](91, 0, null, 0, 2, "amexio-label", [["size", "medium-bold"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](92, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["$ echo \"// Theme-Version : 4.0 \" >> Themes-Data.txt"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](94, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 0, null, 0, 2, "amexio-label", [["size", "medium-bold"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](96, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["$ echo \"army-olive,#4B5320,#708238\" >> Themes-Data.txt"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](98, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](99, 0, null, 0, 2, "amexio-label", [["size", "medium-bold"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](100, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["$ echo \"ash-stone-black,#544C4A,#877F7D\" >> Themes-Data.txt"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](102, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](103, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, 0, 2, "amexio-label", [["size", "medium-bold"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](105, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["$ ac Themes-Data.txt /home/user/mythemes/"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](107, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](108, 0, null, 0, 2, "amexio-label", [["size", "large"]], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](109, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], { styleClass: [0, "styleClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Amexio Colors API Documentation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](111, 0, null, 0, 11, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](112, 0, null, null, 2, "amexio-label", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](113, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Checkout the Amexio Colors API Documentation published in "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](115, 0, null, null, 1, "a", [["href", "https://meta-magic.github.io/AmexioColors/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["GitHub Pages"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](117, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](118, 0, null, null, 2, "amexio-label", [], null, null, null, _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbj_0"], _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbj"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](119, 114688, null, 0, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["For Testing the Themes Autogenerated by the Amexio Colors Checkout the Amexio"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](121, 0, null, null, 1, "a", [["href", "http://www.amexio.org/api/v4/index.html"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["API Site"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Image"; var currVal_1 = "assets/images/logos/amexio_colors.jpeg"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = false; _ck(_v, 3, 0, currVal_2); var currVal_3 = "Material Design"; var currVal_4 = true; _ck(_v, 7, 0, currVal_3, currVal_4); var currVal_5 = _co.mdThemeData; _ck(_v, 9, 0, currVal_5); var currVal_6 = "Amexio"; _ck(_v, 11, 0, currVal_6); var currVal_7 = _co.amexioThemeData; _ck(_v, 13, 0, currVal_7); var currVal_8 = "Colors"; _ck(_v, 15, 0, currVal_8); var currVal_9 = "Amexio Colors"; var currVal_10 = "assets/data/theme/amexio-colours.json"; var currVal_11 = "get"; var currVal_12 = "colors"; var currVal_13 = false; var currVal_14 = false; _ck(_v, 18, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = "Name"; var currVal_16 = "name"; var currVal_17 = false; var currVal_18 = "string"; var currVal_19 = 15; _ck(_v, 21, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_20 = "CSS Class Name"; var currVal_21 = "css"; var currVal_22 = false; var currVal_23 = "string"; var currVal_24 = 15; _ck(_v, 25, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_25 = "Color"; var currVal_26 = "BG"; var currVal_27 = false; var currVal_28 = "string"; var currVal_29 = 15; _ck(_v, 30, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29); var currVal_30 = "Getting Started"; _ck(_v, 35, 0, currVal_30); var currVal_31 = "large"; _ck(_v, 37, 0, currVal_31); var currVal_32 = "left"; var currVal_33 = "blue"; var currVal_34 = "blue"; var currVal_35 = "true"; _ck(_v, 40, 0, currVal_32, currVal_33, currVal_34, currVal_35); var currVal_36 = "medium-bold"; _ck(_v, 42, 0, currVal_36); var currVal_37 = "large"; _ck(_v, 45, 0, currVal_37); var currVal_38 = "left"; var currVal_39 = "blue"; var currVal_40 = "blue"; var currVal_41 = "true"; _ck(_v, 48, 0, currVal_38, currVal_39, currVal_40, currVal_41); var currVal_42 = "medium-bold"; _ck(_v, 50, 0, currVal_42); _ck(_v, 54, 0); _ck(_v, 58, 0); _ck(_v, 62, 0); var currVal_43 = "large"; _ck(_v, 66, 0, currVal_43); var currVal_44 = "left"; var currVal_45 = "blue"; var currVal_46 = "blue"; var currVal_47 = "true"; _ck(_v, 69, 0, currVal_44, currVal_45, currVal_46, currVal_47); var currVal_48 = "medium-bold"; _ck(_v, 71, 0, currVal_48); var currVal_49 = "medium"; _ck(_v, 75, 0, currVal_49); var currVal_50 = "medium-bold"; _ck(_v, 80, 0, currVal_50); var currVal_51 = "medium-bold"; _ck(_v, 84, 0, currVal_51); var currVal_52 = "medium-bold"; _ck(_v, 88, 0, currVal_52); var currVal_53 = "medium-bold"; _ck(_v, 92, 0, currVal_53); var currVal_54 = "medium-bold"; _ck(_v, 96, 0, currVal_54); var currVal_55 = "medium-bold"; _ck(_v, 100, 0, currVal_55); var currVal_56 = "medium-bold"; _ck(_v, 105, 0, currVal_56); var currVal_57 = "large"; _ck(_v, 109, 0, currVal_57); _ck(_v, 113, 0); _ck(_v, 119, 0); }, null); }
function View_ThemeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "theme-page", [], null, null, null, View_ThemeComponent_0, RenderType_ThemeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _theme_component__WEBPACK_IMPORTED_MODULE_4__["ThemeComponent"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ngx_cookie_service_cookie_service_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ThemeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("theme-page", _theme_component__WEBPACK_IMPORTED_MODULE_4__["ThemeComponent"], View_ThemeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/theme/theme.component.ts":
/*!******************************************!*\
  !*** ./src/app/theme/theme.component.ts ***!
  \******************************************/
/*! exports provided: ThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeComponent", function() { return ThemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/**
 * Created by sagar on 11/1/18.
 */



var ThemeComponent = /** @class */ (function () {
    function ThemeComponent(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.hasThemeInit = false;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var response;
        this.http.get('assets/data/theme/theme-api-showcase.json', { responseType: 'json' }).subscribe(function (data) {
            response = data;
        }, function (error) {
        }, function () {
            _this.mdThemeData = response;
        });
        this.http.get('assets/data/theme/theme-api-showcase-amexio.json', { responseType: 'json' }).subscribe(function (data) {
            response = data;
        }, function (error) {
        }, function () {
            _this.amexioThemeData = response;
        });
    };
    ThemeComponent.prototype.addNewTheme = function (newTheme, existingTheme) {
        var _this = this;
        var linkEl = document.createElement('link');
        linkEl.onload = function () {
            _this.removeExistingTheme(existingTheme);
        };
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.id = 'themeid';
        linkEl.href = newTheme;
        document.head.appendChild(linkEl);
    };
    //removed old theme css
    ThemeComponent.prototype.removeExistingTheme = function (keyList) {
        if (keyList != null && keyList && keyList.length != 0) {
            for (var i = 0; i < keyList.length; i++) {
                var key = keyList[i];
                if (key.id == 'themeid') {
                    document.head.removeChild(key);
                }
            }
        }
    };
    ThemeComponent.prototype.themeChange = function (theme) {
        this.newThemePath = 'assets/themes/' + theme.themeCssFile + '.css';
        var currentTheme = document.head.querySelectorAll("link[rel=\"stylesheet\"]");
        // this.removeExistingTheme(currentTheme);
        this.addNewTheme(this.newThemePath, currentTheme);
        this.cookieService.set('theme_name_v4', theme.themeCssFile);
    };
    return ThemeComponent;
}());



/***/ }),

/***/ "./src/app/theme/theme.module.ngfactory.js":
/*!*************************************************!*\
  !*** ./src/app/theme/theme.module.ngfactory.js ***!
  \*************************************************/
/*! exports provided: ThemeModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModuleNgFactory", function() { return ThemeModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.module */ "./src/app/theme/theme.module.ts");
/* harmony import */ var _node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/amexio-ng-extensions/amexio-ng-extensions.ngfactory */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.ngfactory.js");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _theme_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.component.ngfactory */ "./src/app/theme/theme.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var ngx_cookie_service_cookie_service_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service/cookie-service/cookie.service */ "./node_modules/ngx-cookie-service/cookie-service/cookie.service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme.component */ "./src/app/theme/theme.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var ThemeModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_amexio_ng_extensions_amexio_ng_extensions_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AmexioTabPillNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵEmptyOutletComponentNgFactory"], _theme_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ThemeComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_i"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["CommonDataService"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["CommonDataService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["DeviceQueryService"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["DeviceQueryService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["IconLoaderService"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["IconLoaderService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["ɵbe"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["ɵbe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_cookie_service_cookie_service_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"], ngx_cookie_service_cookie_service_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_bb"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["AmexioLayoutModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["AmexioLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["AmexioFormsModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["AmexioFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["ɵbt"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["ɵbt"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["AmexioNavModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["AmexioNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["AmexioPaneModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["AmexioPaneModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["AmexioDataModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["AmexioDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_8__["AmexioWidgetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ROUTES"], function () { return [[{ path: "", component: _theme_component__WEBPACK_IMPORTED_MODULE_11__["ThemeComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/theme/theme.module.ts":
/*!***************************************!*\
  !*** ./src/app/theme/theme.module.ts ***!
  \***************************************/
/*! exports provided: ThemeModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.component */ "./src/app/theme/theme.component.ts");


var routes = [
    { path: '', component: _theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"] },
];
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    return ThemeModule;
}());

var routedComponents = [_theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"]];


/***/ })

}]);
//# sourceMappingURL=theme-theme-module-ngfactory.fd3e8cf5dd7f3f8ba41c.js.map