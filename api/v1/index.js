import { ChangeDetectorRef, Component, ContentChild, ContentChildren, EventEmitter, HostBinding, HostListener, Injectable, Input, NgModule, Output, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { Headers, Http, HttpModule, RequestOptions } from '@angular/http';

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
/**
 * Base class Used to Inject into all Form Fields Components to implement inheritance
 */
var FormInputBase = (function () {
    function FormInputBase() {
        Messenger.options = {
            extraClasses: 'messenger-fixed messenger-on-top messenger-on-right',
            theme: 'air'
        };
    }
    return FormInputBase;
}());

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var noop = function () {
};
var CUSTOM_TEXT_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TextInputComponent; }),
    multi: true
};
var BASE_IMPL_TEXT_INPUT = {
    provide: FormInputBase,
    useExisting: forwardRef(function () { return TextInputComponent; })
};
var TextInputComponent = (function (_super) {
    __extends(TextInputComponent, _super);
    function TextInputComponent() {
        var _this = _super.call(this) || this;
        _this.hasLabel = true;
        _this.innerValue = '';
        _this.onTouchedCallback = noop;
        _this.onChangeCallback = noop;
        _this.elementId = 'input-text-' + new Date().getTime() + Math.random();
        _this.spanId = 'span-msg-' + Math.random();
        if (_this.iconFeedBack)
            _this.divCss = 'form-group has-feedback';
        else
            _this.divCss = 'form-group has-feedback has-feedback-left';
        return _this;
    }
    /**
     * @return {?}
     */
    TextInputComponent.prototype.ngOnInit = function () {
        if (this.errorMsg)
            this.helpInfoMsg = this.errorMsg + '<br/>';
        if (this.minErrorMsg)
            this.helpInfoMsg = this.helpInfoMsg + 'Min Length: ' + this.minErrorMsg + '<br/>';
        if (this.maxErrorMsg)
            this.helpInfoMsg = this.helpInfoMsg + 'Max Length: ' + this.maxErrorMsg;
        if (!this.iconFeedBack)
            this.fieldglyphIcon = 'form-control-feedback glyphicon glyphicon-' + this.fieldIcon;
        //Regex check
        if (this.pattern != null) {
            this.regEx = new RegExp(this.pattern);
        }
    };
    Object.defineProperty(TextInputComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    TextInputComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
        this.validate();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TextInputComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.validate = function () {
        this.isValid = this.isValidInput();
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.isValidInput = function () {
        var /** @type {?} */ hasError = false;
        var /** @type {?} */ valueLength = 0;
        if (this.value != null) {
            valueLength = this.value.length;
        }
        if ((this.allowBlank && (!this.value || valueLength == 0))) {
            hasError = true;
        }
        else if (this.pattern != null && !this.regEx.test(this.value)) {
            hasError = true;
        }
        else if (this.minLength > valueLength) {
            hasError = true;
        }
        else if (this.maxLength < valueLength) {
            hasError = true;
        }
        if (hasError) {
            this.setValidClassNames();
        }
        else {
            this.setInvalidatedClassNames();
        }
        return hasError;
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.setValidClassNames = function () {
        this.divCss = 'form-group has-error has-feedback';
        this.iconName = 'error';
        this.iconClassName = 'glyphicon glyphicon-remove form-control-feedback';
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.setInvalidatedClassNames = function () {
        this.divCss = 'form-group has-success has-feedback';
        this.iconName = 'success';
        this.iconClassName = 'glyphicon glyphicon-ok form-control-feedback';
    };
    return TextInputComponent;
}(FormInputBase));
TextInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-text-input',
                template: "<div [attr.class]=\"divCss\">\n\n        <ng-container *ngIf=\"hasLabel\">\n            <label [attr.for]=\"elementId\"\n                   [style.font-style]=\"fontStyle\"\n                   [style.font-family]=\"fontFamily\"\n                   [style.font-size]=\"fontSize\"\n                   class=\"control-label\">\n                {{fieldLabel}}\n            </label>\n        </ng-container>\n\n        <input type=\"text\"\n               (blur)=\"onBlur()\"\n               [(ngModel)]=\"value\"\n               [attr.fieldName] = \"fieldName\"\n               [attr.id]=\"elementId\"\n               [attr.placeholder]=\"placeholder\"\n               [attr.maxLength]=\"maxLength\"\n               [attr.minLength]=\"minLength\"\n               [attr.disabled] = \"disabled ? true: null\"\n               [required]=\"allowBlank ? true: null\"\n               [attr.data-error]=\"errorMsg\"\n               [attr.aria-describedby]=\"spanId\"\n               autocomplete=\"off\"\n               class=\"form-control\"\n               data-toggle=\"popover\" title=\"Info\" data-placement=\"bottom\"  data-trigger=\"focus\"  data-html=\"true\"  [attr.data-content]=\"helpInfoMsg\">\n\n        <ng-container *ngIf=\"iconFeedBack\">\n            <span [attr.class]=\"iconClassName\" aria-hidden=\"true\"></span>\n            <span [attr.id]=\"spanId\" class=\"sr-only\">({{iconName}})</span>\n        </ng-container>\n\n        <ng-container *ngIf=\"!iconFeedBack\">\n            <i [class]=\"fieldglyphIcon\"></i>\n        </ng-container>\n\n        <div class=\"help-block with-errors\"></div>\n    </div>",
                providers: [CUSTOM_TEXT_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_TEXT_INPUT]
            },] },
];
/**
 * @nocollapse
 */
TextInputComponent.ctorParameters = function () { return []; };
TextInputComponent.propDecorators = {
    'fieldLabel': [{ type: Input },],
    'fieldName': [{ type: Input },],
    'minLength': [{ type: Input },],
    'minErrorMsg': [{ type: Input },],
    'maxLength': [{ type: Input },],
    'maxErrorMsg': [{ type: Input },],
    'allowBlank': [{ type: Input },],
    'errorMsg': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'disabled': [{ type: Input },],
    'iconFeedBack': [{ type: Input },],
    'fontStyle': [{ type: Input },],
    'fontFamily': [{ type: Input },],
    'fontSize': [{ type: Input },],
    'fieldIcon': [{ type: Input },],
    'hasLabel': [{ type: Input },],
    'pattern': [{ type: Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
/**
 * A Shared Service class, used mainly for Form Validations And Notification Feedback
 */
var WidgetService = (function () {
    function WidgetService() {
        Messenger.options = {
            extraClasses: 'messenger-fixed messenger-on-top messenger-on-right',
            theme: 'air'
        };
    }
    /**
     * Sets the the form field to disabled mode.
     * @param {?} inputTexts Reference to Form Components
     * @param {?} fieldName Name of the Field
     * @param {?} disabled  Boolean, Set true | false to disable
     * @return {?}
     */
    WidgetService.prototype.setDisabled = function (inputTexts, fieldName, disabled) {
        var /** @type {?} */ components = inputTexts._results;
        for (var /** @type {?} */ iComponents = 0; iComponents < components.length; iComponents++) {
            var /** @type {?} */ inputText = components[iComponents];
            if (inputText.fieldName == fieldName) {
                inputText.disabled = disabled;
            }
        }
    };
    /**
     * @param {?} inputTexts
     * @return {?}
     */
    WidgetService.prototype.validate = function (inputTexts) {
        var /** @type {?} */ components = inputTexts;
        var /** @type {?} */ showMessage = false;
        var /** @type {?} */ errorCounter = 1;
        var /** @type {?} */ title = "<strong>Please validate following fields</strong><br><hr>";
        var /** @type {?} */ validateMsg = "<br>";
        for (var /** @type {?} */ iComponents = 0; iComponents < components.length; iComponents++) {
            var /** @type {?} */ inputText = components[iComponents];
            var /** @type {?} */ isValid = inputText.isValidInput();
            if (isValid) {
                validateMsg = validateMsg + ' ' + errorCounter + ') ' + inputText.fieldLabel + "<br/>";
                showMessage = true;
                errorCounter++;
            }
        }
        if (showMessage)
            Messenger().post({
                message: showMessage,
                type: 'error',
                showCloseButton: true
            });
        return showMessage;
    };
    /**
     * @param {?} inputTexts
     * @return {?}
     */
    WidgetService.prototype.validateAll = function (inputTexts) {
        var /** @type {?} */ showMessage = false;
        var /** @type {?} */ errorCounter = 1;
        var /** @type {?} */ title = "<strong>Please validate following fields</strong><hr>";
        var /** @type {?} */ validateMsg = "<br>";
        for (var /** @type {?} */ ic = 0; ic < inputTexts.length; ic++) {
            var /** @type {?} */ component = inputTexts[ic];
            var /** @type {?} */ isValid = component.isValidInput();
            if (isValid) {
                validateMsg = validateMsg + ' ' + errorCounter + ') ' + component.fieldLabel + "<br>";
                showMessage = true;
                errorCounter++;
            }
        }
        if (showMessage)
            Messenger().post({
                message: showMessage,
                type: 'error',
                showCloseButton: true
            });
        return showMessage;
    };
    /**
     * @param {?} title
     * @param {?} message
     * @param {?} timeout
     * @return {?}
     */
    WidgetService.prototype.toasterDanger = function (title, message, timeout) {
        if (timeout != null)
            timeout = '3';
        Messenger().post({
            message: message,
            type: 'error',
            showCloseButton: true,
            hideAfter: timeout
        });
    };
    /**
     * @param {?} title
     * @param {?} message
     * @param {?} timeout
     * @return {?}
     */
    WidgetService.prototype.toasterSuccess = function (title, message, timeout) {
        if (timeout != null)
            timeout = '3';
        Messenger().post({
            message: message,
            type: 'success',
            showCloseButton: true,
            hideAfter: timeout
        });
    };
    /**
     * @param {?} title
     * @param {?} message
     * @param {?} timeout
     * @return {?}
     */
    WidgetService.prototype.toasterInfo = function (title, message, timeout) {
        if (timeout != null)
            timeout = '3';
        Messenger().post({
            message: message,
            type: 'info',
            showCloseButton: true,
            hideAfter: timeout
        });
    };
    return WidgetService;
}());
WidgetService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
WidgetService.ctorParameters = function () { return []; };

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var TreeViewService = (function () {
    /**
     * @param {?} _http
     */
    function TreeViewService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} parentRef
     * @param {?} serviceUrl
     * @param {?} methodType
     * @return {?}
     */
    TreeViewService.prototype.fetchData = function (parentRef, serviceUrl, methodType) {
        var _this = this;
        this.parentRef = parentRef;
        var /** @type {?} */ requestJson = {};
        var /** @type {?} */ headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var /** @type {?} */ options = new RequestOptions({ headers: headers, method: methodType });
        if (methodType == "post") {
            this._http.post(serviceUrl, requestJson, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData();
            });
        }
    };
    /**
     * @return {?}
     */
    TreeViewService.prototype.setData = function () {
        this.parentRef.setData(this.responseData);
    };
    /**
     * @param {?} parentRef
     * @param {?} serviceUrl
     * @param {?} methodType
     * @return {?}
     */
    TreeViewService.prototype.fetchLazyData = function (parentRef, serviceUrl, methodType) {
        var _this = this;
        this.parentRef = parentRef;
        var /** @type {?} */ requestJson = {};
        var /** @type {?} */ headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var /** @type {?} */ options = new RequestOptions({ headers: headers, method: methodType });
        if (methodType == "post") {
            this._http.post(serviceUrl, requestJson, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setLazyData();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setLazyData();
            });
        }
    };
    /**
     * @return {?}
     */
    TreeViewService.prototype.setLazyData = function () {
        this.parentRef.setLazyData(this.responseData);
    };
    return TreeViewService;
}());
TreeViewService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
TreeViewService.ctorParameters = function () { return [
    { type: Http, },
]; };

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var TreeViewComponent = (function () {
    /**
     * @param {?} treeViewService
     * @param {?} cdf
     */
    function TreeViewComponent(treeViewService, cdf) {
        this.treeViewService = treeViewService;
        this.cdf = cdf;
        this.selectedRecord = new EventEmitter();
        this.data = [];
    }
    /**
     * @return {?}
     */
    TreeViewComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    TreeViewComponent.prototype.ngAfterViewInit = function () {
        if (this.httpMethod && this.httpUrl) {
            this.treeViewService.fetchData(this, this.httpUrl, this.httpMethod);
        }
        else if (this.dataTableBindData) {
            this.setData(this.dataTableBindData);
        }
        if (this.parentTmp != null) {
            this.templates = { treeNodeTemplate: this.parentTmp };
        }
        else if (this.templates != null) {
            this.parentTmp = this.templates.treeNodeTemplate;
            this.cdf.detectChanges();
        }
    };
    /**
     * @param {?} change
     * @return {?}
     */
    TreeViewComponent.prototype.ngOnChanges = function (change) {
        if (change['dataTableBindData']) {
            var /** @type {?} */ data = change['dataTableBindData'].currentValue;
            if (data) {
                this.setData(data);
            }
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    TreeViewComponent.prototype.setData = function (httpResponse) {
        var /** @type {?} */ treedata = this.getResponseData(httpResponse);
        if (treedata) {
            this.data = treedata;
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    TreeViewComponent.prototype.getResponseData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        var /** @type {?} */ dr = this.dataReader.split(".");
        for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
            responsedata = responsedata[dr[ir]];
        }
        return responsedata;
    };
    /**
     * @param {?} treeData
     * @return {?}
     */
    TreeViewComponent.prototype.toggle = function (treeData) {
        if (!treeData.leaf)
            treeData.expanded = !treeData.expanded;
        if (treeData.lazy && treeData.children && treeData.children.length <= 0) {
            this.lazyNode = treeData;
            this.treeViewService.fetchLazyData(this, treeData.lazy.httpUrl, treeData.lazy.httpMethod);
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    TreeViewComponent.prototype.setLazyData = function (httpResponse) {
        delete this.lazyNode.leaf;
        this.lazyNode['expanded'] = true;
        for (var /** @type {?} */ di = 0; di < httpResponse.data.length; di++) {
            this.lazyNode.children.push(httpResponse.data[0]);
        }
    };
    /**
     * @param {?} treeData
     * @return {?}
     */
    TreeViewComponent.prototype.setSelectedRecord = function (treeData) {
        this.emitData(treeData);
    };
    /**
     * @param {?} treeData
     * @return {?}
     */
    TreeViewComponent.prototype.emitData = function (treeData) {
        this.selectedRecord.emit(JSON.parse(JSON.stringify(treeData)));
    };
    return TreeViewComponent;
}());
TreeViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-tree-view',
                template: "\n      <div *ngIf=\"data.length== 0\">\n        <div class=\"loading-mask\"  style=\"height: 300px;width: 400px;\">\n         \n        </div>\n      </div>\n      \n        <ul style=\"list-style-type: none;\" *ngIf=\"data.length > 0\">\n            <li style=\"cursor: pointer\" *ngFor=\"let treeData of data\">\n                <div >\n                    <span [ngClass]=\"{'glyphicon glyphicon-minus': treeData.expanded, 'glyphicon glyphicon-plus': (!treeData.expanded && treeData.children)}\" (click)=\"toggle(treeData)\"> </span>\n                    \n                    <label style=\"cursor: pointer\" (click)=\"emitData(treeData)\">\n                        <ng-container *ngIf=\"templates == null\">{{treeData.text}}</ng-container>\n                        <ng-template *ngIf=\"templates != null\" [ngTemplateOutlet]=\"parentTmp\" [ngOutletContext]=\"{ $implicit: { text: treeData.text } , icon: treeData.icon,node : treeData }\"></ng-template>\n                    </label>\n                    \n                </div>\n                \n                <div *ngIf=\"treeData.expanded && treeData.expanded  == true\">\n                    <ul style=\"list-style-type: none;\">\n                        <li style=\"cursor: pointer\" *ngFor=\"let leaf of treeData.children\">\n                            <div>\n                                <span [ngClass]=\"{'glyphicon glyphicon-minus': leaf.expanded, 'glyphicon glyphicon-plus': (!leaf.expanded && leaf.children)}\" (click)=\"toggle(leaf)\"> </span>\n\n                                <label (click)=\"emitData(leaf)\">\n                                    <ng-container *ngIf=\"templates == null\">{{ leaf.text }}</ng-container>\n                                    <ng-template *ngIf=\"templates != null\" [ngTemplateOutlet]=\"parentTmp\" [ngOutletContext]=\"{ $implicit: { text: leaf.text }, icon: leaf.icon, node : leaf }\"></ng-template>\n                                </label>\n                                \n                            </div>\n                            \n                            <div *ngIf=\"leaf.expanded && leaf.expanded  == true\">\n                                <amexio-tree-view [dataTableBindData]=\"leaf\" [dataReader]=\"'children'\" (selectedRecord)=\"setSelectedRecord($event)\" [templates]=\"templates\"></amexio-tree-view>\n                            </div>\n                        </li>\n                    </ul>\n\n                </div>\n            </li>\n        </ul>",
                providers: [TreeViewService],
                styles: ["\n    .loading-mask {\n      position: relative;\n    }\n\n    /*\n    Because we set .loading-mask relative, we can span our ::before\n    element over the whole parent element\n    */\n    .loading-mask::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background-color: rgba(0, 0, 0, 0.25);\n    }\n\n    /*\n    Spin animation for .loading-mask::after\n    */\n    @keyframes spin {\n      from {\n        transform: rotate(0deg);\n      }\n      to {\n        transform: rotate(359deg);\n      }\n    }\n\n    /*\n    The loading throbber is a single spinning element with three\n    visible borders and a border-radius of 50%.\n    Instead of a border we could also use a font-icon or any\n    image using the content attribute.\n    */\n    .loading-mask::after {\n      content: \"\";\n      position: absolute;\n      border-width: 3px;\n      border-style: solid;\n      border-color: transparent rgb(255, 255, 255) rgb(255, 255, 255);\n      border-radius: 50%;\n      width: 24px;\n      height: 24px;\n      top: calc(50% - 12px);\n      left: calc(50% - 12px);\n      animation: 1s linear 0s normal none infinite running spin;\n      filter: drop-shadow(0 0 2 rgba(0, 0, 0, 0.33));\n    }\n\n    .hiderow{\n      visibility: hidden\n    }\n\n    .showrow{\n      visibility: visible;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
TreeViewComponent.ctorParameters = function () { return [
    { type: TreeViewService, },
    { type: ChangeDetectorRef, },
]; };
TreeViewComponent.propDecorators = {
    'httpUrl': [{ type: Input },],
    'httpMethod': [{ type: Input },],
    'dataReader': [{ type: Input },],
    'dataTableBindData': [{ type: Input },],
    'selectedRecord': [{ type: Output },],
    'templates': [{ type: Input },],
    'parentTmp': [{ type: ContentChild, args: ['amexioTreeTemplate',] },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var TreeDataTableService = (function () {
    /**
     * @param {?} _http
     */
    function TreeDataTableService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} parentRef
     * @param {?} serviceUrl
     * @param {?} methodType
     * @return {?}
     */
    TreeDataTableService.prototype.fetchData = function (parentRef, serviceUrl, methodType) {
        var _this = this;
        this.parentRef = parentRef;
        var /** @type {?} */ requestJson = {};
        var /** @type {?} */ headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var /** @type {?} */ options = new RequestOptions({ headers: headers, method: methodType });
        if (methodType == "post") {
            this._http.post(serviceUrl, requestJson, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData();
            });
        }
    };
    /**
     * @return {?}
     */
    TreeDataTableService.prototype.setData = function () {
        this.parentRef.setData(this.responseData);
    };
    return TreeDataTableService;
}());
TreeDataTableService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
TreeDataTableService.ctorParameters = function () { return [
    { type: Http, },
]; };

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var TreeDataTableComponent = (function () {
    /**
     * @param {?} treeDataTableService
     */
    function TreeDataTableComponent(treeDataTableService) {
        this.treeDataTableService = treeDataTableService;
        this.selectedRecord = new EventEmitter();
        this.viewRows = [];
        this.columns = [];
        this.columns.push({ text: 'Task', dataIndex: 'task', hidden: false, dataType: 'string' });
        this.columns.push({ text: 'Duration', dataIndex: 'duration', hidden: false, dataType: 'number' });
        this.columns.push({ text: 'User', dataIndex: 'user', hidden: false, dataType: 'string' });
    }
    /**
     * @return {?}
     */
    TreeDataTableComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    TreeDataTableComponent.prototype.ngAfterViewInit = function () {
        if (this.httpMethod && this.httpUrl) {
            this.treeDataTableService.fetchData(this, this.httpUrl, this.httpMethod);
        }
    };
    /**
     * @param {?} change
     * @return {?}
     */
    TreeDataTableComponent.prototype.ngOnChanges = function (change) {
        if (this.dataTableBindData) {
            this.setData(this.dataTableBindData);
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    TreeDataTableComponent.prototype.setData = function (httpResponse) {
        var /** @type {?} */ treedata = this.getResponseData(httpResponse);
        if (treedata) {
            this.data = treedata;
        }
        this.viewRows = this.createViewRows(this.data, null);
        this.renderData();
    };
    /**
     * @param {?} rowData
     * @param {?} rowIndex
     * @return {?}
     */
    TreeDataTableComponent.prototype.toggle = function (rowData, rowIndex) {
        this.toggleViewRows(rowData, !rowData.expanded, this.viewRows);
    };
    /**
     * @param {?} rowData
     * @param {?} expanded1
     * @param {?} viewData
     * @return {?}
     */
    TreeDataTableComponent.prototype.toggleViewRows = function (rowData, expanded1, viewData) {
        if (!rowData.leaf)
            rowData.expanded = expanded1;
        var /** @type {?} */ expanded = rowData.expanded;
        var /** @type {?} */ rowId = rowData.rowId;
        if (!rowData.level) {
            rowData.level = 0;
        }
        for (var /** @type {?} */ cr = 0; cr < viewData.length; cr++) {
            var /** @type {?} */ childRows = viewData[cr];
            if (childRows.parentId == rowId) {
                childRows.visible = expanded;
                childRows.level = rowData.level + 1;
                childRows.tdclass = 'tree-grid-level-' + childRows.level;
                if (childRows.haschildren && !rowData.expanded) {
                    this.toggleViewRows(childRows, rowData.expanded, viewData);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    TreeDataTableComponent.prototype.renderData = function () {
        for (var /** @type {?} */ vr = 0; vr < this.viewRows.length; vr++) {
            var /** @type {?} */ childRows = this.viewRows[vr];
            if (childRows.parentId)
                childRows.visible = false;
            if (!childRows.parentId)
                childRows.visible = true;
        }
    };
    /**
     * @param {?} data
     * @param {?} parentId
     * @return {?}
     */
    TreeDataTableComponent.prototype.createViewRows = function (data, parentId) {
        var /** @type {?} */ viewTreeTableData = [];
        for (var /** @type {?} */ d = 0; d < data.length; d++) {
            var /** @type {?} */ td = JSON.parse(JSON.stringify(data[d]));
            var /** @type {?} */ rowId = Math.random();
            if (td.children && td.children.length > 0) {
                td['leaf'] = false;
                td['haschildren'] = true;
                td['visible'] = true;
            }
            else {
                td['leaf'] = true;
                td['haschildren'] = false;
                td['visible'] = false;
            }
            td['expanded'] = false;
            td['rowId'] = rowId;
            td['level'] = 1;
            td['tdclass'] = 'tree-grid-level-1';
            if (parentId)
                td['parentId'] = parentId;
            viewTreeTableData.push(td);
            if (td.children && td.children.length > 0) {
                var /** @type {?} */ dataArray = this.createViewRows(td.children, rowId);
                for (var /** @type {?} */ d1 = 0; d1 < dataArray.length; d1++) {
                    var /** @type {?} */ td1 = dataArray[d1];
                    viewTreeTableData.push(td1);
                }
                delete td.children;
            }
        }
        return viewTreeTableData;
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    TreeDataTableComponent.prototype.getResponseData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        var /** @type {?} */ dr = this.dataReader.split(".");
        for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
            responsedata = responsedata[dr[ir]];
        }
        return responsedata;
    };
    /**
     * @param {?} rowData
     * @param {?} event
     * @return {?}
     */
    TreeDataTableComponent.prototype.setSelectedRow = function (rowData, event) {
        this.selectedRecord.emit(rowData);
    };
    /**
     * @param {?} col
     * @return {?}
     */
    TreeDataTableComponent.prototype.setSortColumn = function (col) {
        console.log(col);
        this.sortColumn = col;
        this.sortData();
    };
    /**
     * @return {?}
     */
    TreeDataTableComponent.prototype.sortData = function () {
        if (this.sortColumn) {
            if (this.sortColumn.dataIndex && this.sortColumn.dataType) {
                var /** @type {?} */ dataIndex = this.sortColumn.dataIndex;
                var /** @type {?} */ sortColDataIndex_1 = dataIndex;
                if (this.sortColumn.dataType == 'string') {
                    this.data.sort(function (a, b) {
                        debugger;
                        var /** @type {?} */ x = a[sortColDataIndex_1].toLowerCase();
                        var /** @type {?} */ y = b[sortColDataIndex_1].toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    });
                    this.viewRows = this.createViewRows(this.data, null);
                    this.renderData();
                }
                else if (this.sortColumn.dataType == 'number') {
                    this.data.sort(function (a, b) {
                        var /** @type {?} */ x = a[sortColDataIndex_1];
                        var /** @type {?} */ y = b[sortColDataIndex_1];
                        return x - y;
                    });
                    this.viewRows = this.createViewRows(this.data, null);
                    this.renderData();
                }
            }
        }
    };
    /**
     * @param {?} dataIndex
     * @return {?}
     */
    TreeDataTableComponent.prototype.setColumnVisiblity = function (dataIndex) {
        for (var /** @type {?} */ ic = 0; ic < this.columns.length; ic++) {
            var /** @type {?} */ col = this.columns[ic];
            if (col.dataIndex == dataIndex) {
                col.hidden = !col.hidden;
            }
        }
    };
    return TreeDataTableComponent;
}());
TreeDataTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-tree-data-table',
                template: "<table  class=\"table table-hover table-bordered \">\n        <thead>\n\n        <tr>\n            <td [attr.colspan]=\"columns.length\" width=\"100%\" align=\"right\">\n\n          <span style=\"float: left\">\n            <b>{{title}}</b>\n          </span>\n\n                <span style=\"float: right\">\n            <div class=\"dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-th-list\"></span></a>\n                  <ul class=\"dropdown-menu dropdown-menu-right\">\n                      <li>\n                          &nbsp;&nbsp;<b> Show Columns</b>\n                      </li>\n                      <li *ngFor=\"let cols of columns\">\n                          <div class=\"checkbox\">\n                              <label>\n                                  &nbsp;&nbsp;<input type=\"checkbox\" (click)=\"setColumnVisiblity(cols.dataIndex)\" [attr.checked]=\"!cols.hidden ? true: null\"> {{cols.text +\" \"}}\n                              </label>\n                          </div>\n                      </li>\n                  </ul>\n            </div>\n          </span>\n            </td>\n        </tr>\n\n\n        <tr>\n            <td  *ngFor=\"let cols of columns\" [hidden]=\"cols.hidden\" >\n                <b><a (click)=\"setSortColumn(cols)\">{{cols.text}}</a></b>\n            </td>\n        </tr>\n\n        </thead>\n\n        <tr [ngClass]=\"{'hiderow' : !(viewRows.length > 0),'showrow' : viewRows.length > 0}\"  *ngFor=\"let row of viewRows let rowIndex = index\" [hidden]=\"!row.visible\" (click)=\"setSelectedRow(row, $event)\">\n            <td *ngFor=\"let cols of columns let colIndex = index\" [hidden] =\"cols.hidden\" >\n                <div style=\"cursor: pointer\" *ngIf=\"colIndex == 0\" class=\"tree-grid-levels\"\n                     [ngStyle]=\"{left: row.level*15+'px'}\" (click)=\"toggle(row,rowIndex)\">\n                  <span *ngIf=\"colIndex == 0\" [ngClass]=\"{'glyphicon glyphicon-minus': row.expanded, 'glyphicon glyphicon-plus': (!row.expanded && row.haschildren)}\">\n                  </span>\n                    {{row[cols.dataIndex]}}\n                </div>\n\n                <span *ngIf=\"colIndex > 0\" >{{row[cols.dataIndex]}}</span>\n\n            </td>\n        </tr>\n\n        <tr *ngIf=\"viewRows.length == 0\">\n            <td colspan=\"3\" style=\"height: 400px;\" class=\"loading-mask\">\n\n            </td>\n        </tr>\n    </table>",
                providers: [TreeDataTableService],
                styles: ["\n      .tree-grid-levels{\n        position: relative;\n      }\n      .loading-mask {\n          position: relative;\n      }\n\n      /*\n      Because we set .loading-mask relative, we can span our ::before\n      element over the whole parent element\n      */\n      .loading-mask::before {\n          content: '';\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          background-color: rgba(0, 0, 0, 0.25);\n      }\n\n      /*\n      Spin animation for .loading-mask::after\n      */\n      @keyframes spin {\n          from {\n              transform: rotate(0deg);\n          }\n          to {\n              transform: rotate(359deg);\n          }\n      }\n\n      /*\n      The loading throbber is a single spinning element with three\n      visible borders and a border-radius of 50%.\n      Instead of a border we could also use a font-icon or any\n      image using the content attribute.\n      */\n      .loading-mask::after {\n          content: \"\";\n          position: absolute;\n          border-width: 3px;\n          border-style: solid;\n          border-color: transparent rgb(255, 255, 255) rgb(255, 255, 255);\n          border-radius: 50%;\n          width: 24px;\n          height: 24px;\n          top: calc(50% - 12px);\n          left: calc(50% - 12px);\n          animation: 1s linear 0s normal none infinite running spin;\n          filter: drop-shadow(0 0 2 rgba(0, 0, 0, 0.33));\n      }\n\n      .hiderow{\n          visibility: hidden\n      }\n\n      .showrow{\n          visibility: visible;\n      }\n     "]
            },] },
];
/**
 * @nocollapse
 */
TreeDataTableComponent.ctorParameters = function () { return [
    { type: TreeDataTableService, },
]; };
TreeDataTableComponent.propDecorators = {
    'title': [{ type: Input },],
    'httpUrl': [{ type: Input },],
    'httpMethod': [{ type: Input },],
    'dataReader': [{ type: Input },],
    'dataTableBindData': [{ type: Input },],
    'pageSize': [{ type: Input },],
    'selectedRecord': [{ type: Output },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var noop$1 = function () {
};
var CUSTOM_TEXT_AREA_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TextAreaComponent; }),
    multi: true
};
var BASE_IMPL_TEXTAREA_INPUT = {
    provide: FormInputBase,
    useExisting: forwardRef(function () { return TextAreaComponent; })
};
var TextAreaComponent = (function (_super) {
    __extends$1(TextAreaComponent, _super);
    function TextAreaComponent() {
        var _this = _super.call(this) || this;
        _this.hasLabel = true;
        _this.innerValue = '';
        _this.onTouchedCallback = noop$1;
        _this.onChangeCallback = noop$1;
        _this.elementId = 'input-text-' + new Date().getTime() + Math.random();
        _this.spanId = 'span-msg-' + Math.random();
        if (_this.iconFeedBack)
            _this.divCss = 'form-group has-feedback';
        else
            _this.divCss = 'form-group has-feedback has-feedback-left';
        return _this;
    }
    /**
     * @return {?}
     */
    TextAreaComponent.prototype.ngOnInit = function () {
        if (this.errorMsg)
            this.helpInfoMsg = this.errorMsg + '<br/>';
        if (!this.iconFeedBack)
            this.fieldglyphIcon = 'form-control-feedback glyphicon glyphicon-' + this.fieldIcon;
        //Regex check
        if (this.pattern != null) {
            this.regEx = new RegExp(this.pattern);
        }
    };
    Object.defineProperty(TextAreaComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    TextAreaComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
        this.validate();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TextAreaComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextAreaComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextAreaComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    TextAreaComponent.prototype.validate = function () {
        this.isValid = this.isValidInput();
    };
    /**
     * @return {?}
     */
    TextAreaComponent.prototype.isValidInput = function () {
        var /** @type {?} */ hasError = false;
        if ((this.allowBlank && (!this.value || this.value.length == 0))) {
            hasError = true;
        }
        else if (this.pattern != null && !this.regEx.test(this.value)) {
            hasError = true;
        }
        if (hasError) {
            this.setValidClassNames();
        }
        else {
            this.setInvalidatedClassNames();
        }
        return hasError;
    };
    /**
     * @return {?}
     */
    TextAreaComponent.prototype.setValidClassNames = function () {
        this.divCss = 'form-group has-error has-feedback';
        this.iconName = 'error';
        this.iconClassName = 'glyphicon glyphicon-remove form-control-feedback';
    };
    /**
     * @return {?}
     */
    TextAreaComponent.prototype.setInvalidatedClassNames = function () {
        this.divCss = 'form-group has-success has-feedback';
        this.iconName = 'success';
        this.iconClassName = 'glyphicon glyphicon-ok form-control-feedback';
    };
    return TextAreaComponent;
}(FormInputBase));
TextAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-textarea-input',
                template: "<div [attr.class]=\"divCss\">\n\n        <ng-container *ngIf=\"hasLabel\">\n            <label [attr.for]=\"elementId\"\n                   [style.font-style]=\"fontStyle\"\n                   [style.font-family]=\"fontFamily\"\n                   [style.font-size]=\"fontSize\"\n                   class=\"control-label\">\n                {{fieldLabel}}\n            </label>\n        </ng-container>\n\n        <textarea type=\"text\"\n                  (blur)=\"onBlur()\"\n                  autocomplete=\"off\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"value\"\n                  [attr.fieldName] = \"fieldName\"\n                  [attr.rows]=\"noOfrows\"\n                  [attr.cols]=\"noOfCols\"\n                  [attr.id]=\"elementId\"\n                  [attr.placeholder]=\"placeholder\"\n                  [attr.disabled] = \"disabled ? true: null\"\n                  [required]=\"allowBlank ? true: null\"\n                  [attr.data-error]=\"errorMsg\"\n                  [attr.aria-describedby]=\"spanId\"\n                  data-toggle=\"popover\" title=\"Info\" data-placement=\"bottom\"  data-trigger=\"focus\"  data-html=\"true\"  [attr.data-content]=\"helpInfoMsg\"\n\n        >\n\n        </textarea>\n\n        <ng-container *ngIf=\"iconFeedBack\">\n            <span [attr.class]=\"iconClassName\" aria-hidden=\"true\"></span>\n            <span [attr.id]=\"spanId\" class=\"sr-only\">({{iconName}})</span>\n        </ng-container>\n\n        <ng-container *ngIf=\"!iconFeedBack\">\n            <i [class]=\"fieldglyphIcon\"></i>\n        </ng-container>\n\n        <div class=\"help-block with-errors\"></div>\n\n    </div>\n    ",
                providers: [CUSTOM_TEXT_AREA_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_TEXTAREA_INPUT]
            },] },
];
/**
 * @nocollapse
 */
TextAreaComponent.ctorParameters = function () { return []; };
TextAreaComponent.propDecorators = {
    'fieldLabel': [{ type: Input },],
    'fieldName': [{ type: Input },],
    'allowBlank': [{ type: Input },],
    'errorMsg': [{ type: Input },],
    'disabled': [{ type: Input },],
    'noOfrows': [{ type: Input },],
    'noOfCols': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'iconFeedBack': [{ type: Input },],
    'fontStyle': [{ type: Input },],
    'fontFamily': [{ type: Input },],
    'fontSize': [{ type: Input },],
    'fieldIcon': [{ type: Input },],
    'hasLabel': [{ type: Input },],
    'pattern': [{ type: Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var TabComponent = (function () {
    function TabComponent() {
        this.active = false;
        this.disabled = false;
        this.elementId = 'tab-pill' + Math.floor(Math.random() * 90000) + 10000;
        
    }
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnInit = function () {
    };
    return TabComponent;
}());
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-tab',
                template: "\n    <div role=\"tabpanel\" class=\"tab-pane active\" [attr.id]=\"elementId\">\n      <ng-content *ngIf=\"active\"></ng-content>\n    </div>\n  "
            },] },
];
/**
 * @nocollapse
 */
TabComponent.ctorParameters = function () { return []; };
TabComponent.propDecorators = {
    'title': [{ type: Input },],
    'active': [{ type: Input },],
    'disabled': [{ type: Input },],
    'icon': [{ type: Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var TabPaneComponent = (function () {
    /**
     * @param {?} cdf
     */
    function TabPaneComponent(cdf) {
        this.cdf = cdf;
        this.onSelect = new EventEmitter(false);
        this.OPERATION_TOGGLE = '#';
        this.OPERATION_DELETE = '-';
        this.elementId = 'tabpane-' + Math.floor(Math.random() * 89999 + 10000);
    }
    /**
     * @return {?}
     */
    TabPaneComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    TabPaneComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $('#' + this.elementId).scrollingTabs();
        $('#' + this.elementId).on('click', function (e) {
            _this.selectedTabId = e.target.id; // Need some validation Here!!!
            if (_this.selectedTabId != null && (_this.selectedTabId.charAt(0) == '#' || _this.selectedTabId.charAt(0) == '-')) {
                var /** @type {?} */ op = _this.selectedTabId.charAt(0);
                if (op == _this.OPERATION_TOGGLE) {
                    _this.loadTab(_this.selectedTabId.substr(1));
                }
                if (op == _this.OPERATION_DELETE) {
                    _this.removeTab();
                }
            }
        });
    };
    /**
     * @return {?}
     */
    TabPaneComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            var /** @type {?} */ readTabs = _this.tabs.toArray();
            var /** @type {?} */ activeTab = readTabs.find(function (tab) { return tab.active === true; });
            if (!activeTab && readTabs.length > 0)
                readTabs[0].active = true;
        });
    };
    /**
     * @param {?} tabId
     * @return {?}
     */
    TabPaneComponent.prototype.loadTab = function (tabId) {
        var /** @type {?} */ tabs = this.tabs.toArray();
        tabs.forEach(function (tab) {
            tab.active = false;
            if (tab.elementId == tabId)
                tab.active = true;
        });
        this.cdf.detectChanges();
    };
    /**
     * @return {?}
     */
    TabPaneComponent.prototype.removeTab = function () {
        var _this = this;
        var /** @type {?} */ tabs = this.tabs.toArray();
        var /** @type {?} */ tabToRemove;
        var /** @type {?} */ previousTabId;
        tabs.forEach(function (tab, index) {
            if (tab.elementId == _this.selectedTabId.substr(1)) {
                tabToRemove = tab;
                tab.active = false;
                if (index != 0) {
                    previousTabId = tabs[index - 1].elementId;
                }
            }
        });
        this.tabs.reset(this.tabs.filter(function (tab) { return tab !== tabToRemove; }));
        var /** @type {?} */ element = document.getElementById('+' + this.selectedTabId.substr(1));
        element.parentNode.removeChild(element);
        this.loadTab(previousTabId);
        $('.nav-tabs').scrollingTabs('refresh');
        this.cdf.detectChanges();
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabPaneComponent.prototype.changeActiveTab = function (tab) {
        var /** @type {?} */ tabs = this.tabs.toArray();
        tabs.forEach(function (tab) { return tab.active = false; });
        tab.active = true;
        this.onSelect.emit(tabs.indexOf(tab));
        this.cdf.detectChanges();
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabPaneComponent.prototype.getIconClass = function (tab) {
        if (this.icons) {
            return 'glyphicon glyphicon-' + tab.icon;
        }
        else {
            return '';
        }
    };
    return TabPaneComponent;
}());
TabPaneComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-tab-pane',
                template: "\n      <div [ngClass]=\"{'tabbable tabs-left' : stacked}\">\n\n          <ul [attr.id]=\"elementId\" class=\"nav\" [ngClass]=\"{ 'nav-tabs': !pills, 'nav-pills': pills , 'nav-stacked' : stacked}\" role=\"tablist\">\n              <li role=\"presentation\" *ngFor=\"let tab of tabs\" id=\"+{{tab.elementId}}\" [class.active]=\"tab.active\" data-toggle=\"tab\">\n\n                  <a (click)=\"changeActiveTab(tab)\" id=\"#{{tab.elementId}}\" href=\"#{{tab.elementId}}\" class=\"btn\" role=\"tab\"  [class.disabled]=\"tab.disabled\" [attr.disabled] = \"tab.disabled ? true: null\">\n                      <i *ngIf=\"icons\" [ngClass]=\"getIconClass(tab)\"></i> {{tab.title}}\n                      &nbsp;<span *ngIf=\"closable\" id=\"-{{tab.elementId}}\" class=\"close\">\u00D7</span>\n                      <!-- Need to Fix Font issue! -->\n                  </a>\n\n              </li>\n          </ul>\n\n          <div>\n              <ng-content></ng-content>\n          </div>\n\n\n      </div>\n\n\n  ",
                styles: ["\n  .wrapper {\n      position:relative;\n      margin:0 auto;\n      overflow:hidden;\n      padding:5px;\n      height:50px;\n  }\n\n  .list {\n      position:absolute;\n      left:0px;\n      top:0px;\n      min-width:3000px;\n      margin-left:12px;\n      margin-top:0px;\n  }\n\n  .list li{\n      display:table-cell;\n      position:relative;\n      text-align:center;\n      cursor:grab;\n      cursor:-webkit-grab;\n      color:#efefef;\n      vertical-align:middle;\n  }\n\n  .scroller {\n      text-align:center;\n      cursor:pointer;\n      display:none;\n      padding:7px;\n      padding-top:11px;\n      white-space:no-wrap;\n      vertical-align:middle;\n      background-color:#fff;\n  }\n\n  .scroller-right{\n      float:right;\n  }\n\n  .scroller-left {\n      float:left;\n  }\n\n  /**Stack view css **/\n  .tabs-left > .nav-tabs > li,\n  .tabs-right > .nav-tabs > li {\n      float: none;\n  }\n\n  .tabs-left > .nav-tabs > li > a,\n  .tabs-right > .nav-tabs > li > a {\n      min-width: 74px;\n      margin-right: 0;\n      margin-bottom: 3px;\n  }\n\n  .tabs-left > .nav-tabs {\n      float: left;\n      margin-right: 19px;\n      border-right: 1px solid #ddd;\n  }\n\n  .tabs-left > .nav-tabs > li > a {\n      margin-right: -1px;\n      -webkit-border-radius: 4px 0 0 4px;\n      -moz-border-radius: 4px 0 0 4px;\n      border-radius: 4px 0 0 4px;\n  }\n\n  .tabs-left > .nav-tabs > li > a:hover,\n  .tabs-left > .nav-tabs > li > a:focus {\n      border-color: #eeeeee #dddddd #eeeeee #eeeeee;\n  }\n\n  .tabs-left > .nav-tabs .active > a,\n  .tabs-left > .nav-tabs .active > a:hover,\n  .tabs-left > .nav-tabs .active > a:focus {\n      border-color: #ddd transparent #ddd #ddd;\n      *border-right-color: #ffffff;\n  }\n\n  .tabs-right > .nav-tabs {\n      float: right;\n      margin-left: 19px;\n      border-left: 1px solid #ddd;\n  }\n\n  .tabs-right > .nav-tabs > li > a {\n      margin-left: -1px;\n      -webkit-border-radius: 0 4px 4px 0;\n      -moz-border-radius: 0 4px 4px 0;\n      border-radius: 0 4px 4px 0;\n  }\n\n  .tabs-right > .nav-tabs > li > a:hover,\n  .tabs-right > .nav-tabs > li > a:focus {\n      border-color: #eeeeee #eeeeee #eeeeee #dddddd;\n  }\n\n  .tabs-right > .nav-tabs .active > a,\n  .tabs-right > .nav-tabs .active > a:hover,\n  .tabs-right > .nav-tabs .active > a:focus {\n      border-color: #ddd #ddd #ddd transparent;\n      *border-left-color: #ffffff;\n  }\n  "]
            },] },
];
/**
 * @nocollapse
 */
TabPaneComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
]; };
TabPaneComponent.propDecorators = {
    'icons': [{ type: Input },],
    'pills': [{ type: Input },],
    'stacked': [{ type: Input },],
    'closable': [{ type: Input },],
    'tabs': [{ type: ContentChildren, args: [TabComponent,] },],
    'onSelect': [{ type: Output },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return RatingInputComponent; }),
    multi: true
};
var BASE_IMPL_RATING_INPUT = {
    provide: FormInputBase,
    useExisting: forwardRef(function () { return RatingInputComponent; })
};
var RatingInputComponent = (function (_super) {
    __extends$2(RatingInputComponent, _super);
    function RatingInputComponent() {
        var _this = _super.call(this) || this;
        _this.max = 5;
        _this.onChange = Function.prototype;
        _this.onTouched = Function.prototype;
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    RatingInputComponent.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };
    
    /**
     * @return {?}
     */
    RatingInputComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    RatingInputComponent.prototype.onKeydown = function (event) {
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        var /** @type {?} */ sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    };
    /**
     * @return {?}
     */
    RatingInputComponent.prototype.ngOnInit = function () {
        this.max = typeof this.max !== 'undefined' ? this.max : 5;
        this.readonly = this.readonly === true;
        this.stateOn = typeof this.stateOn !== 'undefined'
            ? this.stateOn
            : 'glyphicon-star';
        this.stateOff = typeof this.stateOff !== 'undefined'
            ? this.stateOff
            : 'glyphicon-star-empty';
        this.titles = typeof this.titles !== 'undefined' && this.titles.length > 0
            ? this.titles
            : ['one', 'two', 'three', 'four', 'five'];
        this.range = this.buildTemplateObjects(this.ratingStates, this.max);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RatingInputComponent.prototype.writeValue = function (value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            return;
        }
        this.preValue = value;
        this.value = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RatingInputComponent.prototype.enter = function (value) {
        if (!this.readonly) {
            this.value = value;
            this.hoveringOver(value);
        }
    };
    /**
     * @return {?}
     */
    RatingInputComponent.prototype.reset = function () {
        this.value = this.preValue;
        this.resetStar();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RatingInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RatingInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RatingInputComponent.prototype.rate = function (value) {
        if (!this.readonly && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    };
    /**
     * @param {?} ratingStates
     * @param {?} max
     * @return {?}
     */
    RatingInputComponent.prototype.buildTemplateObjects = function (ratingStates, max) {
        ratingStates = ratingStates || [];
        var /** @type {?} */ count = ratingStates.length || max;
        var /** @type {?} */ result = [];
        for (var /** @type {?} */ i = 0; i < count; i++) {
            result.push(Object.assign({
                index: i,
                stateOn: this.stateOn,
                stateOff: this.stateOff,
                title: this.titles[i] || i + 1
            }, ratingStates[i] || {}));
        }
        return result;
    };
    /**
     * @return {?}
     */
    RatingInputComponent.prototype.isValidInput = function () {
        return true; //for now
    };
    return RatingInputComponent;
}(FormInputBase));
RatingInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-rating-input',
                template: "\n      <span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\" [attr.aria-valuenow]=\"value\">\n      <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\n        <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\n        <i (mouseenter)=\"enter(index + 1)\" (click)=\"rate(index + 1)\" class=\"glyphicon\" [ngClass]=\"index < value ? r.stateOn : r.stateOff\" [title]=\"r.title\" ></i>\n      </ng-template>\n  </span>\n\n      <ng-container *ngIf=\"percentageLabel\">\n<span class=\"label\"\n      [ngClass]=\"{'label-warning': percent<30, 'label-info': percent>=30 && percent<70, 'label-success': percent>=70}\"\n      [ngStyle]=\"{display: (overStar && !isReadonly) ? 'inline' : 'none'}\">{{percent}}%</span>\n      </ng-container>\n  ",
                providers: [RATING_CONTROL_VALUE_ACCESSOR, BASE_IMPL_RATING_INPUT]
            },] },
];
/**
 * @nocollapse
 */
RatingInputComponent.ctorParameters = function () { return []; };
RatingInputComponent.propDecorators = {
    'max': [{ type: Input },],
    'stateOn': [{ type: Input },],
    'stateOff': [{ type: Input },],
    'readonly': [{ type: Input },],
    'percentageLabel': [{ type: Input },],
    'titles': [{ type: Input },],
    'ratingStates': [{ type: Input },],
    'onKeydown': [{ type: HostListener, args: ['keydown', ['$event'],] },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var RadioGroupService = (function () {
    /**
     * @param {?} _http
     */
    function RadioGroupService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} parentRef
     * @param {?} serviceUrl
     * @param {?} methodType
     * @return {?}
     */
    RadioGroupService.prototype.fetchData = function (parentRef, serviceUrl, methodType) {
        var _this = this;
        this.parentRef = parentRef;
        var /** @type {?} */ requestJson = {};
        var /** @type {?} */ headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var /** @type {?} */ options = new RequestOptions({ headers: headers, method: methodType });
        if (methodType == "post") {
            this._http.post(serviceUrl, requestJson, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData();
            });
        }
    };
    /**
     * @return {?}
     */
    RadioGroupService.prototype.setData = function () {
        this.parentRef.setData(this.responseData);
    };
    return RadioGroupService;
}());
RadioGroupService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
RadioGroupService.ctorParameters = function () { return [
    { type: Http, },
]; };

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var COLUMN_SIZE = 'col-lg-';
var RadioGroupComponent = (function () {
    /**
     * @param {?} radioGroupService
     */
    function RadioGroupComponent(radioGroupService) {
        this.radioGroupService = radioGroupService;
        this.selectedValue = new EventEmitter();
        this.elementId = "radio-group-" + new Date().getTime();
        this.selectedCheckBox = [];
    }
    /**
     * @return {?}
     */
    RadioGroupComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    RadioGroupComponent.prototype.ngAfterViewInit = function () {
        this.column = COLUMN_SIZE + this.column;
        if (this.httpMethod && this.httpUrl) {
            this.radioGroupService.fetchData(this, this.httpUrl, this.httpMethod);
        }
        else if (this.radioGroupBindData) {
            this.setData(this.radioGroupBindData);
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    RadioGroupComponent.prototype.setData = function (httpResponse) {
        this.data = this.getResponseData(httpResponse);
        this.viewData = this.getResponseData(httpResponse);
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    RadioGroupComponent.prototype.getResponseData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        var /** @type {?} */ dr = this.dataReader.split(".");
        if (dr != null) {
            for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
                responsedata = responsedata[dr[ir]];
            }
        }
        return responsedata;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    RadioGroupComponent.prototype.filterData = function (event) {
        if (this.textValue.length > 0) {
            this.viewData = [];
            for (var /** @type {?} */ vd = 0; vd < this.data.length; vd++) {
                var /** @type {?} */ displayData = this.data[vd][this.displayField];
                if (displayData.toLowerCase().startsWith(this.textValue)) {
                    this.viewData.push(this.data[vd]);
                }
            }
        }
        else {
            this.viewData = this.data;
        }
    };
    /**
     * @param {?} rowData
     * @param {?} event
     * @return {?}
     */
    RadioGroupComponent.prototype.setSelectedCheckBox = function (rowData, event) {
        if (event.currentTarget.checked) {
            this.selectedCheckBox.push(rowData);
        }
        else {
            var /** @type {?} */ indexOf = this.selectedCheckBox.indexOf(rowData);
            delete this.selectedCheckBox[indexOf];
        }
        this.emitSelectedRows();
    };
    /**
     * @return {?}
     */
    RadioGroupComponent.prototype.emitSelectedRows = function () {
        var /** @type {?} */ sRows = [];
        for (var /** @type {?} */ sr = 0; sr < this.selectedCheckBox.length; sr++) {
            if (this.selectedCheckBox[sr]) {
                sRows.push(this.selectedCheckBox[sr]);
            }
        }
        this.selectedValue.emit(sRows);
    };
    return RadioGroupComponent;
}());
RadioGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-radio-group',
                template: "\n      <div class=\"form-group\">\n          <br>\n          <label  [attr.for]=\"elementId\">{{fieldLabel}}</label>\n          <div style=\"overflow: auto;\">\n              <ul class=\"list-group\">\n                  <li class=\"list-group-item\" *ngIf=\"searchBox\"><span>\n              <input [(ngModel)]=\"textValue\" type=\"text\" class=\"form-control\" placeholder=\"Please select\" (keyup)=\"filterData($event)\">\n            </span></li>\n                  <li [attr.class]=\"'list-group-item '+column\"  *ngFor=\"let row of viewData\">\n                      <label>\n                          <input  type=\"radio\" [required]=\"allowBlank ? true: null\"  [attr.name] = \"fieldName\" (click)=\"setSelectedCheckBox(row, $event)\"> {{row[displayField]}}\n                      </label>\n                  </li>\n              </ul>\n          </div>\n\n\n      </div>\n\n  ",
                providers: [RadioGroupService]
            },] },
];
/**
 * @nocollapse
 */
RadioGroupComponent.ctorParameters = function () { return [
    { type: RadioGroupService, },
]; };
RadioGroupComponent.propDecorators = {
    'fieldLabel': [{ type: Input },],
    'fieldName': [{ type: Input },],
    'allowBlank': [{ type: Input },],
    'dataReader': [{ type: Input },],
    'httpMethod': [{ type: Input },],
    'httpUrl': [{ type: Input },],
    'displayField': [{ type: Input },],
    'valueField': [{ type: Input },],
    'radioGroupBindData': [{ type: Input },],
    'searchBox': [{ type: Input },],
    'column': [{ type: Input },],
    'selectedValue': [{ type: Output },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var ProgressComponent = (function () {
    function ProgressComponent() {
        this.showProgress = true;
        this.infinteMode = true;
    }
    /**
     * @return {?}
     */
    ProgressComponent.prototype.ngOnInit = function () {
        if (this.infinteMode) {
            this.displayText = 'Please wait';
            this.currentValue = '100';
            this.minValue = '0';
            this.maxValue = '100';
        }
        else
            this.displayText = this.currentValue + '%';
    };
    return ProgressComponent;
}());
ProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-progress-bar',
                template: "      \n      \n    <div class=\"progress\" *ngIf=\"showProgress\">\n      <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" [attr.aria-valuenow]=\"currentValue\" [attr.aria-valuemin]=\"minValue\" [attr.aria-valuemax]=\"maxValue\" style=\"width: 100%\">\n        <span>{{displayText}}<span class=\"dotdotdot\"></span></span>\n      </div>\n    </div>\n  \n  ",
                styles: [".progress {\n    margin: 15px;\n  }\n\n  .progress .progress-bar.active {\n    font-weight: 700;\n    animation: progress-bar-stripes .5s linear infinite;\n  }\n\n  .dotdotdot:after {\n    font-weight: 300;\n    content: '...';\n    display: inline-block;\n    width: 20px;\n    text-align: left;\n    animation: dotdotdot 1.5s linear infinite;\n  }\n\n  @keyframes dotdotdot {\n    0%   { content: '...'; }\n    25% { content: ''; }\n    50% { content: '.'; }\n    75% { content: '..'; }\n  }"]
            },] },
];
/**
 * @nocollapse
 */
ProgressComponent.ctorParameters = function () { return []; };
ProgressComponent.propDecorators = {
    'showProgress': [{ type: Input },],
    'infinteMode': [{ type: Input },],
    'minValue': [{ type: Input },],
    'maxValue': [{ type: Input },],
    'currentValue': [{ type: Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var noop$2 = function () {
};
var CUSTOM_PASSWORD_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return PasswordInputComponent; }),
    multi: true
};
var BASE_IMPL_PASSWORD_INPUT = {
    provide: FormInputBase,
    useExisting: forwardRef(function () { return PasswordInputComponent; })
};
var PasswordInputComponent = (function (_super) {
    __extends$3(PasswordInputComponent, _super);
    function PasswordInputComponent() {
        var _this = _super.call(this) || this;
        _this.hasLabel = true;
        _this.innerValue = '';
        _this.onTouchedCallback = noop$2;
        _this.onChangeCallback = noop$2;
        _this.elementId = 'input-text-' + new Date().getTime() + Math.random();
        _this.spanId = 'span-msg-' + Math.random();
        if (_this.iconFeedBack)
            _this.divCss = 'form-group has-feedback';
        else
            _this.divCss = 'form-group has-feedback has-feedback-left';
        return _this;
    }
    /**
     * @return {?}
     */
    PasswordInputComponent.prototype.ngOnInit = function () {
        if (this.errorMsg)
            this.helpInfoMsg = this.errorMsg + '<br/>';
        if (this.minErrorMsg)
            this.helpInfoMsg = this.helpInfoMsg + 'Min Length: ' + this.minErrorMsg + '<br/>';
        if (this.maxErrorMsg)
            this.helpInfoMsg = this.helpInfoMsg + 'Max Length: ' + this.maxErrorMsg;
        if (!this.iconFeedBack)
            this.fieldglyphIcon = 'form-control-feedback glyphicon glyphicon-' + this.fieldIcon;
        //Regex check
        if (this.pattern != null) {
            this.regEx = new RegExp(this.pattern);
        }
    };
    Object.defineProperty(PasswordInputComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    PasswordInputComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
        this.validate();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PasswordInputComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PasswordInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PasswordInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    PasswordInputComponent.prototype.validate = function () {
        this.isValid = this.isValidInput();
    };
    /**
     * @return {?}
     */
    PasswordInputComponent.prototype.isValidInput = function () {
        var /** @type {?} */ hasError = false;
        if ((this.allowBlank && (!this.value || this.value.length == 0))) {
            hasError = true;
        }
        else if (this.minLength > this.value.length) {
            hasError = true;
        }
        else if (this.maxLength < this.value.length) {
            hasError = true;
        }
        else if (this.pattern != null && !this.regEx.test(this.value)) {
            hasError = true;
        }
        if (hasError) {
            this.setValidClassNames();
        }
        else {
            this.setInvalidatedClassNames();
        }
        return hasError;
    };
    /**
     * @return {?}
     */
    PasswordInputComponent.prototype.setValidClassNames = function () {
        this.divCss = 'form-group has-error has-feedback';
        this.iconName = 'error';
        this.iconClassName = 'glyphicon glyphicon-remove form-control-feedback';
    };
    /**
     * @return {?}
     */
    PasswordInputComponent.prototype.setInvalidatedClassNames = function () {
        this.divCss = 'form-group has-success has-feedback';
        this.iconName = 'success';
        this.iconClassName = 'glyphicon glyphicon-ok form-control-feedback';
    };
    return PasswordInputComponent;
}(FormInputBase));
PasswordInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-password-input',
                template: "\n\n        <div [attr.class]=\"divCss\">\n\n            <ng-container *ngIf=\"hasLabel\">\n                <label [attr.for]=\"elementId\"\n                       [style.font-style]=\"fontStyle\"\n                       [style.font-family]=\"fontFamily\"\n                       [style.font-size]=\"fontSize\"\n                       class=\"control-label\">\n                    {{fieldLabel}}\n                </label>\n            </ng-container>\n\n            <input type=\"password\"\n                   (blur)=\"onBlur()\"\n                   autocomplete=\"off\"\n                   class=\"form-control\"\n                   [(ngModel)]=\"value\"\n                   [attr.fieldName] = \"fieldName\"\n                   [attr.id]=\"elementId\"\n                   [attr.placeholder]=\"placeholder\"\n                   [attr.max]=\"maxLength\"\n                   [attr.min]=\"minLength\"\n                   [attr.disabled] = \"disabled ? true: null\"\n                   [required]=\"allowBlank ? true: null\"\n                   [attr.data-error]=\"errorMsg\"\n                   [attr.aria-describedby]=\"spanId\"\n                   data-toggle=\"popover\" title=\"Info\" data-placement=\"bottom\"  data-trigger=\"focus\"  data-html=\"true\"  [attr.data-content]=\"helpInfoMsg\"\n            >\n\n\n            <ng-container *ngIf=\"iconFeedBack\">\n                <span [attr.class]=\"iconClassName\" aria-hidden=\"true\"></span>\n                <span [attr.id]=\"spanId\" class=\"sr-only\">({{iconName}})</span>\n            </ng-container>\n\n            <ng-container *ngIf=\"!iconFeedBack\">\n                <i [class]=\"fieldglyphIcon\"></i>\n            </ng-container>\n\n            <div class=\"help-block with-errors\"></div>\n\n        </div>\n\n    ",
                providers: [CUSTOM_PASSWORD_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_PASSWORD_INPUT]
            },] },
];
/**
 * @nocollapse
 */
PasswordInputComponent.ctorParameters = function () { return []; };
PasswordInputComponent.propDecorators = {
    'fieldLabel': [{ type: Input },],
    'fieldName': [{ type: Input },],
    'minLength': [{ type: Input },],
    'minErrorMsg': [{ type: Input },],
    'maxLength': [{ type: Input },],
    'maxErrorMsg': [{ type: Input },],
    'allowBlank': [{ type: Input },],
    'errorMsg': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'disabled': [{ type: Input },],
    'iconFeedBack': [{ type: Input },],
    'fontStyle': [{ type: Input },],
    'fontFamily': [{ type: Input },],
    'fontSize': [{ type: Input },],
    'fieldIcon': [{ type: Input },],
    'hasLabel': [{ type: Input },],
    'pattern': [{ type: Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var noop$3 = function () {
};
var CUSTOM_NUMBER_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NumberInputComponent; }),
    multi: true
};
var BASE_IMPL_NUMBER_INPUT = {
    provide: FormInputBase,
    useExisting: forwardRef(function () { return NumberInputComponent; })
};
var NumberInputComponent = (function (_super) {
    __extends$4(NumberInputComponent, _super);
    function NumberInputComponent() {
        var _this = _super.call(this) || this;
        _this.hasLabel = true;
        _this.innerValue = '';
        _this.onTouchedCallback = noop$3;
        _this.onChangeCallback = noop$3;
        _this.elementId = 'input-text-' + new Date().getTime() + Math.random();
        _this.spanId = 'span-msg-' + Math.random();
        if (_this.iconFeedBack)
            _this.divCss = 'form-group has-feedback';
        else
            _this.divCss = 'form-group has-feedback has-feedback-left';
        return _this;
    }
    /**
     * @return {?}
     */
    NumberInputComponent.prototype.ngOnInit = function () {
        if (this.errorMsg)
            this.helpInfoMsg = this.errorMsg + '<br/>';
        if (this.minErrorMsg)
            this.helpInfoMsg = this.helpInfoMsg + 'Min Length: ' + this.minErrorMsg + '<br/>';
        if (this.maxErrorMsg)
            this.helpInfoMsg = this.helpInfoMsg + 'Max Length: ' + this.maxErrorMsg;
        if (!this.iconFeedBack)
            this.fieldglyphIcon = 'form-control-feedback glyphicon glyphicon-' + this.fieldIcon;
        //Regex check
        if (this.pattern != null) {
            this.regEx = new RegExp(this.pattern);
        }
    };
    /**
     * @return {?}
     */
    NumberInputComponent.prototype.ngAfterViewInit = function () {
        $('[data-toggle="popover"]').popover();
    };
    Object.defineProperty(NumberInputComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    NumberInputComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
        this.validate();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NumberInputComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    NumberInputComponent.prototype.validate = function () {
        this.isValid = this.isValidInput();
    };
    /**
     * @return {?}
     */
    NumberInputComponent.prototype.isValidInput = function () {
        var /** @type {?} */ hasError = false;
        var /** @type {?} */ valueLength = 0;
        if (this.value != null) {
            valueLength = this.value.length;
        }
        if ((!this.allowBlank && (!this.value || valueLength == 0))) {
            hasError = true;
        }
        else if (this.pattern != null && !this.regEx.test(this.value)) {
            hasError = true;
        }
        else if (this.minValue > this.value) {
            hasError = true;
        }
        else if (this.maxValue < this.value) {
            hasError = true;
        }
        if (hasError) {
            this.setValidClassNames();
        }
        else {
            this.setInvalidatedClassNames();
        }
        return hasError;
    };
    /**
     * @return {?}
     */
    NumberInputComponent.prototype.setValidClassNames = function () {
        this.divCss = 'form-group has-error has-feedback';
        this.iconName = 'error';
        this.iconClassName = 'glyphicon glyphicon-remove form-control-feedback';
    };
    /**
     * @return {?}
     */
    NumberInputComponent.prototype.setInvalidatedClassNames = function () {
        this.divCss = 'form-group has-success has-feedback';
        this.iconName = 'success';
        this.iconClassName = 'glyphicon glyphicon-ok form-control-feedback';
    };
    return NumberInputComponent;
}(FormInputBase));
NumberInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-number-input',
                template: "\n        <div [attr.class]=\"divCss\">\n\n            <ng-container *ngIf=\"hasLabel\">\n                <label [attr.for]=\"elementId\"\n                       [style.font-style]=\"fontStyle\"\n                       [style.font-family]=\"fontFamily\"\n                       [style.font-size]=\"fontSize\"\n                       class=\"control-label\">\n                    {{fieldLabel}}\n                </label>\n            </ng-container>\n\n            <input type=\"number\"\n                   (blur)=\"onBlur()\"\n                   autocomplete=\"off\"\n                   class=\"form-control\"\n                   [(ngModel)]=\"value\"\n                   [attr.fieldName] = \"fieldName\"\n                   [attr.id]=\"elementId\"\n                   [attr.placeholder]=\"placeholder\"\n                   [attr.max]=\"maxValue\"\n                   [attr.min]=\"minValue\"\n                   [attr.disabled] = \"disabled ? true: null\"\n                   [required]=\"allowBlank ? true: null\"\n                   [attr.data-error]=\"errorMsg\"\n                   [attr.aria-describedby]=\"spanId\"\n                   data-toggle=\"popover\" title=\"Info\" data-placement=\"bottom\"  data-trigger=\"focus\"  data-html=\"true\"  [attr.data-content]=\"helpInfoMsg\"\n            >\n\n\n            <ng-container *ngIf=\"iconFeedBack\">\n                <span [attr.class]=\"iconClassName\" aria-hidden=\"true\"></span>\n                <span [attr.id]=\"spanId\" class=\"sr-only\">({{iconName}})</span>\n            </ng-container>\n\n            <ng-container *ngIf=\"!iconFeedBack\">\n                <i [class]=\"fieldglyphIcon\"></i>\n            </ng-container>\n\n            <div class=\"help-block with-errors\"></div>\n\n        </div>\n\n\n    ",
                providers: [CUSTOM_NUMBER_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_NUMBER_INPUT]
            },] },
];
/**
 * @nocollapse
 */
NumberInputComponent.ctorParameters = function () { return []; };
NumberInputComponent.propDecorators = {
    'fieldLabel': [{ type: Input },],
    'fieldName': [{ type: Input },],
    'minValue': [{ type: Input },],
    'minErrorMsg': [{ type: Input },],
    'maxValue': [{ type: Input },],
    'maxErrorMsg': [{ type: Input },],
    'allowBlank': [{ type: Input },],
    'errorMsg': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'disabled': [{ type: Input },],
    'iconFeedBack': [{ type: Input },],
    'fontStyle': [{ type: Input },],
    'fontFamily': [{ type: Input },],
    'fontSize': [{ type: Input },],
    'fieldIcon': [{ type: Input },],
    'hasLabel': [{ type: Input },],
    'pattern': [{ type: Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var noop$4 = function () {
};
var CUSTOM_HIDDENINPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return HiddenInputComponent; }),
    multi: true
};
var HiddenInputComponent = (function () {
    function HiddenInputComponent() {
        this.innerValue = '';
        this.onTouchedCallback = noop$4;
        this.onChangeCallback = noop$4;
        this.elementId = "input-text-" + new Date().getTime();
    }
    /**
     * @return {?}
     */
    HiddenInputComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(HiddenInputComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @param {?} value
     * @return {?}
     */
    HiddenInputComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    HiddenInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    HiddenInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return HiddenInputComponent;
}());
HiddenInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-hidden-input',
                template: "\n        <input type=\"hidden\"\n               class=\"form-control\"\n               [(ngModel)]=\"value\"\n\n        >\n    ",
                providers: [CUSTOM_HIDDENINPUT_CONTROL_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
HiddenInputComponent.ctorParameters = function () { return []; };

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var FileUploadService = (function () {
    /**
     * @param {?} _http
     */
    function FileUploadService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} parentRef
     * @param {?} serviceUrl
     * @param {?} methodType
     * @param {?} requestData
     * @return {?}
     */
    FileUploadService.prototype.uploadFile = function (parentRef, serviceUrl, methodType, requestData) {
        var _this = this;
        this.parentRef = parentRef;
        var /** @type {?} */ requestJson = requestData;
        var /** @type {?} */ headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var /** @type {?} */ options = new RequestOptions({ headers: headers, method: methodType });
        if (methodType == "post") {
            this._http.post(serviceUrl, requestJson, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData();
            });
        }
    };
    /**
     * @return {?}
     */
    FileUploadService.prototype.setData = function () {
        this.parentRef.setData(this.responseData);
    };
    return FileUploadService;
}());
FileUploadService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
FileUploadService.ctorParameters = function () { return [
    { type: Http, },
]; };

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var __extends$5 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BASE_IMPL_FILEUPLOAD_INPUT = {
    provide: FormInputBase,
    useExisting: forwardRef(function () { return FileuploadComponent; })
};
var FileuploadComponent = (function (_super) {
    __extends$5(FileuploadComponent, _super);
    /**
     * @param {?} fileUploadService
     */
    function FileuploadComponent(fileUploadService) {
        var _this = _super.call(this) || this;
        _this.fileUploadService = fileUploadService;
        _this.fileSize = '';
        _this.fileName = '';
        return _this;
    }
    /**
     * @return {?}
     */
    FileuploadComponent.prototype.ngOnInit = function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileuploadComponent.prototype.uploadFile = function (event) {
        var /** @type {?} */ fileList = event.target.files;
        if (fileList.length > 0) {
            this.fileName = fileList[0].name;
            this.fileSize = (fileList[0].size / 1024).toFixed(1);
            this.fileSize = this.fileSize + ' Kb';
            // this.fileUploadService.uploadFile(this,this.url,this.httpMethod,fileList);
        }
    };
    /**
     * @param {?} requestData
     * @return {?}
     */
    FileuploadComponent.prototype.setData = function (requestData) {
    };
    return FileuploadComponent;
}(FormInputBase));
FileuploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-file-upload',
                template: "\n      <div class=\"col-lg-9\">\n          <input type=\"text\" readonly\n                 autocomplete=\"off\"\n                 class=\"form-control\"\n                 data-placement=\"bottom\"  data-trigger=\"focus\" data-html=\"true\" [attr.value]=\"fileName+'  '+fileSize\">\n      </div>\n      <div class=\"col-lg-3\">\n          <label class=\"btn btn-primary btn-file\">\n              {{fieldLabel}} <input type=\"file\" [attr.accept]=\"fileType\"  (change)=\"uploadFile($event)\" [attr.multiple]=\"multipleFile\" style=\"display: none;\" #fileupload>\n          </label>\n      </div>\n  ",
                providers: [BASE_IMPL_FILEUPLOAD_INPUT, FileUploadService]
            },] },
];
/**
 * @nocollapse
 */
FileuploadComponent.ctorParameters = function () { return [
    { type: FileUploadService, },
]; };
FileuploadComponent.propDecorators = {
    'fieldLabel': [{ type: Input },],
    'url': [{ type: Input },],
    'httpMethod': [{ type: Input },],
    'fileType': [{ type: Input },],
    'multipleFile': [{ type: Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var __extends$6 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var noop$5 = function () {
};
var CUSTOM_EMAIL_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return EmailInputComponent; }),
    multi: true
};
var BASE_IMPL_EMAIL_INPUT = {
    provide: FormInputBase,
    useExisting: forwardRef(function () { return EmailInputComponent; })
};
var EmailInputComponent = (function (_super) {
    __extends$6(EmailInputComponent, _super);
    function EmailInputComponent() {
        var _this = _super.call(this) || this;
        _this.hasLabel = true;
        _this.innerValue = '';
        _this.onTouchedCallback = noop$5;
        _this.onChangeCallback = noop$5;
        _this.elementId = 'input-email-' + new Date().getTime() + Math.random();
        _this.spanId = 'span-msg-' + Math.random();
        if (_this.iconFeedBack)
            _this.divCss = 'form-group has-feedback';
        else
            _this.divCss = 'form-group has-feedback has-feedback-left';
        return _this;
    }
    /**
     * @return {?}
     */
    EmailInputComponent.prototype.ngOnInit = function () {
        if (this.errorMsg)
            this.helpInfoMsg = this.errorMsg + '<br/>';
        //Regex check
        if (this.pattern != null) {
            this.regEx = new RegExp(this.pattern);
        }
    };
    /**
     * @return {?}
     */
    EmailInputComponent.prototype.ngAfterViewInit = function () {
        $('[data-toggle="popover"]').popover();
    };
    Object.defineProperty(EmailInputComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    EmailInputComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
        this.validate();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    EmailInputComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EmailInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EmailInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    EmailInputComponent.prototype.validate = function () {
        this.isValid = this.isValidInput();
    };
    /**
     * @return {?}
     */
    EmailInputComponent.prototype.isValidInput = function () {
        var /** @type {?} */ hasError = false;
        var /** @type {?} */ valueLength = 0;
        if (this.value != null) {
            valueLength = this.value.length;
        }
        if ((!this.allowBlank && (!this.value || valueLength == 0))) {
            hasError = true;
        }
        else if (this.pattern != null && !this.regEx.test(this.value)) {
            hasError = true;
        }
        else {
            var /** @type {?} */ cmp = document.getElementById(this.elementId);
            hasError = !cmp.validity.valid;
        }
        if (hasError) {
            this.setValidClassNames();
        }
        else {
            this.setInvalidatedClassNames();
        }
        return hasError;
    };
    /**
     * @return {?}
     */
    EmailInputComponent.prototype.setValidClassNames = function () {
        this.divCss = 'form-group has-error has-feedback';
        this.iconName = 'error';
        this.iconClassName = 'glyphicon glyphicon-remove form-control-feedback';
    };
    /**
     * @return {?}
     */
    EmailInputComponent.prototype.setInvalidatedClassNames = function () {
        this.divCss = 'form-group has-success has-feedback';
        this.iconName = 'success';
        this.iconClassName = 'glyphicon glyphicon-ok form-control-feedback';
    };
    return EmailInputComponent;
}(FormInputBase));
EmailInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-email-input',
                template: "\n        <div [attr.class]=\"divCss\">\n\n            <ng-container *ngIf=\"hasLabel\">\n                <label [attr.for]=\"elementId\"\n                       [style.font-style]=\"fontStyle\"\n                       [style.font-family]=\"fontFamily\"\n                       [style.font-size]=\"fontSize\"\n                       class=\"control-label\">\n                    {{fieldLabel}}\n                </label>\n            </ng-container>\n\n            <input type=\"email\"\n                   (blur)=\"onBlur()\"\n                   pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$\"\n                   autocomplete=\"off\"\n                   class=\"form-control\"\n                   [(ngModel)]=\"value\"\n                   [attr.fieldName] = \"fieldName\"\n                   [attr.id]=\"elementId\"\n                   [attr.placeholder]=\"placeholder\"\n                   [attr.disabled] = \"disabled ? true: null\"\n                   [required]=\"allowBlank ? true: null\"\n                   [attr.data-error]=\"errorMsg\"\n                   [attr.aria-describedby]=\"spanId\"\n                   data-toggle=\"popover\" title=\"Info\" data-placement=\"bottom\"  data-trigger=\"focus\"  data-html=\"true\"  [attr.data-content]=\"helpInfoMsg\"\n            >\n\n            <ng-container *ngIf=\"iconFeedBack\">\n                <span [attr.class]=\"iconClassName\" aria-hidden=\"true\"></span>\n                <span [attr.id]=\"spanId\" class=\"sr-only\">({{iconName}})</span>\n            </ng-container>\n\n            <div class=\"help-block with-errors\"></div>\n\n        </div>\n\n\n    ",
                providers: [CUSTOM_EMAIL_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_EMAIL_INPUT]
            },] },
];
/**
 * @nocollapse
 */
EmailInputComponent.ctorParameters = function () { return []; };
EmailInputComponent.propDecorators = {
    'fieldLabel': [{ type: Input },],
    'fieldName': [{ type: Input },],
    'allowBlank': [{ type: Input },],
    'errorMsg': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'disabled': [{ type: Input },],
    'iconFeedBack': [{ type: Input },],
    'fontStyle': [{ type: Input },],
    'fontFamily': [{ type: Input },],
    'fontSize': [{ type: Input },],
    'fieldIcon': [{ type: Input },],
    'hasLabel': [{ type: Input },],
    'pattern': [{ type: Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var DropDownService = (function () {
    /**
     * @param {?} _http
     */
    function DropDownService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} serviceUrl
     * @param {?} methodType
     * @return {?}
     */
    DropDownService.prototype.fetchData = function (serviceUrl, methodType) {
        var /** @type {?} */ requestJson = {};
        var /** @type {?} */ headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var /** @type {?} */ options = new RequestOptions({ headers: headers, method: methodType });
        if (methodType == "post") {
            return this._http.post(serviceUrl, requestJson, options);
        }
        else if (methodType == "get") {
            return this._http.get(serviceUrl, options);
        }
    };
    return DropDownService;
}());
DropDownService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
DropDownService.ctorParameters = function () { return [
    { type: Http, },
]; };

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var __extends$7 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var noop$6 = function () {
};
var CUSTOM_DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DropDownComponent; }),
    multi: true
};
var BASE_IMPL_DROPDOWN_INPUT = {
    provide: FormInputBase,
    useExisting: forwardRef(function () { return DropDownComponent; })
};
var DropDownComponent = (function (_super) {
    __extends$7(DropDownComponent, _super);
    /**
     * @param {?} dropDownService
     */
    function DropDownComponent(dropDownService) {
        var _this = _super.call(this) || this;
        _this.dropDownService = dropDownService;
        _this.onSingleSelect = new EventEmitter();
        _this.onMultiSelect = new EventEmitter();
        _this.multiSelectValues = [];
        _this.innerValue = '';
        _this.onTouchedCallback = noop$6;
        _this.onChangeCallback = noop$6;
        _this.elementId = 'dropdown-' + new Date().getTime() + Math.floor(Math.random() * 90000) + 10000;
        return _this;
    }
    /**
     * @return {?}
     */
    DropDownComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.httpMethod && this.httpUrl) {
            this.dropDownService.fetchData(this.httpUrl, this.httpMethod).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData(_this.responseData);
            });
        }
        else if (this.data) {
            this.setData(this.data);
        }
    };
    /**
     * @return {?}
     */
    DropDownComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $('#' + this.elementId).on('changed.bs.select', function (e, clickedIndex, newValue, oldValue) {
            // Check if multi option is on? then load on array avoiding duplicates
            if (_this.multiSelect) {
                _this.addMultiSelectedData(_this.viewData[clickedIndex]);
            }
            else {
                _this.addSingleSelectedData(_this.viewData[clickedIndex - 1]);
            }
        });
    };
    /**
     * @return {?}
     */
    DropDownComponent.prototype.ngAfterViewChecked = function () {
        $('#' + this.elementId).selectpicker('refresh'); // TODO : Check Performance??
    };
    /**
     * @return {?}
     */
    DropDownComponent.prototype.ngOnDestroy = function () {
        $('#' + this.elementId).selectpicker('destroy');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DropDownComponent.prototype.setRowData = function (event) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DropDownComponent.prototype.addSingleSelectedData = function (value) {
        this.onSingleSelect.emit({ data: value });
    };
    /**
     * @param {?} val
     * @return {?}
     */
    DropDownComponent.prototype.addMultiSelectedData = function (val) {
        if (this.multiSelectValues.indexOf(val) > -1) {
            this.multiSelectValues = this.multiSelectValues.filter(function (item) { return item !== val; });
        }
        else {
            this.multiSelectValues.push(val);
        }
        this.onMultiSelect.emit({ data: this.multiSelectValues });
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    DropDownComponent.prototype.setData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        var /** @type {?} */ dr = this.dataReader.split(".");
        for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
            responsedata = responsedata[dr[ir]];
        }
        this.viewData = responsedata;
    };
    Object.defineProperty(DropDownComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    /**
     * @return {?}
     */
    DropDownComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
        this.validate();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DropDownComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DropDownComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DropDownComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    DropDownComponent.prototype.validate = function () {
        this.isValid = this.isValidInput();
    };
    /**
     * @return {?}
     */
    DropDownComponent.prototype.isValidInput = function () {
        var /** @type {?} */ hasError = false;
        return hasError;
    };
    return DropDownComponent;
}(FormInputBase));
DropDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-dropdown',
                template: "\n      <label [attr.for]=\"elementId\">{{fieldLabel}}</label>\n      <select class=\"selectpicker form-control\"\n              [title]=\"placeholder\"\n              (blur)=\"onBlur()\"\n              [(ngModel)]=\"value\"\n              [attr.id]=\"elementId\"\n              [attr.multiple]=\"multiSelect ? 'multiple' : null\"\n              [attr.data-live-search]=\"searchBox ? 'true' : null\"\n              [attr.data-max-options]=\"maxMultiSelect\"\n              [attr.data-actions-box]=\"multiSelectHelp ? 'true' : null\"\n              [attr.data-selected-text-format]=\"multiCountDisplay\"\n              [attr.data-width]=\"width\"\n              (change)=\"setRowData($event)\">\n          <option *ngFor=\"let row of viewData\" [attr.value]=\"row[valueField]\">{{row[displayField]}}</option>\n      </select>\n\n  ",
                providers: [CUSTOM_DROPDOWN_CONTROL_VALUE_ACCESSOR, BASE_IMPL_DROPDOWN_INPUT, DropDownService]
            },] },
];
/**
 * @nocollapse
 */
DropDownComponent.ctorParameters = function () { return [
    { type: DropDownService, },
]; };
DropDownComponent.propDecorators = {
    'fieldLabel': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'fieldName': [{ type: Input },],
    'allowBlank': [{ type: Input },],
    'errorMsg': [{ type: Input },],
    'emptyText': [{ type: Input },],
    'disabled': [{ type: Input },],
    'dataReader': [{ type: Input },],
    'httpMethod': [{ type: Input },],
    'httpUrl': [{ type: Input },],
    'displayField': [{ type: Input },],
    'valueField': [{ type: Input },],
    'data': [{ type: Input },],
    'multiSelect': [{ type: Input },],
    'maxMultiSelect': [{ type: Input },],
    'multiSelectHelp': [{ type: Input },],
    'searchBox': [{ type: Input },],
    'multiCountDisplay': [{ type: Input },],
    'width': [{ type: Input },],
    'onSingleSelect': [{ type: Output },],
    'onMultiSelect': [{ type: Output },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var DateTimeComponent = (function () {
    /**
     * @param {?} ngControl
     */
    function DateTimeComponent(ngControl) {
        this.dateChange = new EventEmitter();
        this.timepickerOptions = {};
        this.datepickerOptions = {};
        this.hasClearButton = false;
        this.idDatePicker = uniqueId('q-datepicker_');
        this.idTimePicker = uniqueId('q-timepicker_');
        this.onChange = function (_) {
        };
        this.onTouched = function () {
        };
        ngControl.valueAccessor = this; // override valueAccessor
    }
    Object.defineProperty(DateTimeComponent.prototype, "tabindexAttr", {
        /**
         * @return {?}
         */
        get: function () {
            return this.tabindex === undefined ? '-1' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DateTimeComponent.prototype.ngAfterViewInit = function () {
        this.init();
    };
    /**
     * @return {?}
     */
    DateTimeComponent.prototype.ngOnDestroy = function () {
        if (this.datepicker) {
            this.datepicker.datepicker('destroy');
        }
        if (this.timepicker) {
            this.timepicker.timepicker('remove');
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DateTimeComponent.prototype.ngOnChanges = function (changes) {
        if (changes) {
            if (changes['datepickerOptions'] && this.datepicker) {
                this.datepicker.datepicker('destroy');
                if (changes['datepickerOptions'].currentValue) {
                    this.datepicker = null;
                    this.init();
                }
                else if (changes['datepickerOptions'].currentValue === false) {
                    this.datepicker.remove();
                }
            }
            if (changes['timepickerOptions'] && this.timepicker) {
                this.timepicker.timepicker('remove');
                if (changes['timepickerOptions'].currentValue) {
                    this.timepicker = null;
                    this.init();
                }
                else if (changes['timepickerOptions'].currentValue === false) {
                    this.timepicker.parent().remove();
                }
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateTimeComponent.prototype.writeValue = function (value) {
        var _this = this;
        this.date = value;
        if (isDate(this.date)) {
            setTimeout(function () {
                _this.updateModel(_this.date);
            }, 0);
        }
        else {
            this.clearModels();
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DateTimeComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DateTimeComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DateTimeComponent.prototype.checkEmptyValue = function (e) {
        var /** @type {?} */ value = e.target.value;
        if (value === '' && (this.timepickerOptions === false ||
            this.datepickerOptions === false ||
            (this.timeModel === '' && this.dateModel === ''))) {
            this.dateChange.emit(undefined);
        }
    };
    /**
     * @return {?}
     */
    DateTimeComponent.prototype.clearModels = function () {
        this.dateChange.emit(undefined);
        if (this.timepicker) {
            this.timepicker.timepicker('setTime', null);
        }
        this.updateDatepicker(null);
    };
    /**
     * @return {?}
     */
    DateTimeComponent.prototype.showTimepicker = function () {
        this.timepicker.timepicker('showWidget');
    };
    /**
     * @return {?}
     */
    DateTimeComponent.prototype.showDatepicker = function () {
        this.datepicker.datepicker('show');
    };
    /**
     * @return {?}
     */
    DateTimeComponent.prototype.init = function () {
        var _this = this;
        if (!this.datepicker && this.datepickerOptions !== false) {
            var /** @type {?} */ options = jQuery.extend({ enableOnReadonly: !this.readonly }, this.datepickerOptions);
            this.datepicker = (($('#' + this.idDatePicker))).datepicker(options);
            this.datepicker
                .on('changeDate', function (e) {
                var /** @type {?} */ newDate = e.date;
                if (isDate(_this.date) && isDate(newDate)) {
                    // get hours/minutes
                    newDate.setHours(_this.date.getHours());
                    newDate.setMinutes(_this.date.getMinutes());
                    newDate.setSeconds(_this.date.getSeconds());
                }
                _this.date = newDate;
                _this.dateChange.emit(newDate);
            });
        }
        else if (this.datepickerOptions === false) {
            (($('#' + this.idDatePicker))).remove();
        }
        if (!this.timepicker && this.timepickerOptions !== false) {
            var /** @type {?} */ options = jQuery.extend({ defaultTime: false }, this.timepickerOptions);
            this.timepicker = (($('#' + this.idTimePicker))).timepicker(options);
            this.timepicker
                .on('changeTime.timepicker', function (e) {
                var _a = e.time, meridian = _a.meridian, hours = _a.hours;
                if (meridian) {
                    // has meridian -> convert 12 to 24h
                    if (meridian === 'PM' && hours < 12) {
                        hours = hours + 12;
                    }
                    if (meridian === 'AM' && hours === 12) {
                        hours = hours - 12;
                    }
                    hours = parseInt(_this.pad(hours));
                }
                if (!isDate(_this.date)) {
                    _this.date = new Date();
                    _this.updateDatepicker(_this.date);
                }
                _this.date.setHours(hours);
                _this.date.setMinutes(e.time.minutes);
                _this.date.setSeconds(e.time.seconds);
                _this.dateChange.emit(_this.date);
            });
        }
        else if (this.timepickerOptions === false) {
            (($('#' + this.idTimePicker))).parent().remove();
        }
        this.updateModel(this.date);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DateTimeComponent.prototype.updateModel = function (date) {
        this.updateDatepicker(date);
        // update timepicker
        if (this.timepicker !== undefined && isDate(date)) {
            var /** @type {?} */ hours = date.getHours();
            if (this.timepickerOptions.showMeridian) {
                // Convert 24 to 12 hour system
                hours = (hours === 0 || hours === 12) ? 12 : hours % 12;
            }
            var /** @type {?} */ meridian = date.getHours() >= 12 ? ' PM' : ' AM';
            var /** @type {?} */ time = this.pad(hours) + ':' +
                this.pad(this.date.getMinutes()) + ':' +
                this.pad(this.date.getSeconds()) +
                (this.timepickerOptions.showMeridian || this.timepickerOptions.showMeridian === undefined
                    ? meridian : '');
            this.timepicker.timepicker('setTime', time);
            this.timeModel = time; // fix initial empty timeModel bug
        }
    };
    /**
     * @param {?=} date
     * @return {?}
     */
    DateTimeComponent.prototype.updateDatepicker = function (date) {
        if (this.datepicker !== undefined) {
            this.datepicker.datepicker('update', date);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateTimeComponent.prototype.pad = function (value) {
        return value.toString().length < 2 ? '0' + value : value.toString();
    };
    return DateTimeComponent;
}());
DateTimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-date-time-picker',
                template: "\n    <div class=\"form-inline ng2-datetime\">\n      <div [ngClass]=\"{ 'form-group': true, 'input-group': !datepickerOptions.hideIcon, 'date': true }\">\n        <input id=\"{{idDatePicker}}\" type=\"text\" class=\"form-control\"\n               [attr.readonly]=\"readonly\"\n               [attr.required]=\"required\"\n               [attr.placeholder]=\"datepickerOptions.placeholder || 'Choose date'\"\n               [attr.tabindex]=\"tabindex\"\n               [(ngModel)]=\"dateModel\"\n               (blur)=\"onTouched()\"\n               (keyup)=\"checkEmptyValue($event)\"/>\n        <div [hidden]=\"datepickerOptions.hideIcon || datepickerOptions === false || false\"\n             (click)=\"showDatepicker()\"\n             class=\"input-group-addon\">\n          <span [ngClass]=\"datepickerOptions.icon || 'glyphicon glyphicon-th'\"></span>\n        </div>\n      </div>\n      <div [ngClass]=\"{ 'form-group': true, 'input-group': !timepickerOptions.hideIcon, 'bootstrap-timepicker timepicker': true }\">\n        <input id=\"{{idTimePicker}}\" type=\"text\" class=\"form-control input-small\"\n               [attr.readonly]=\"readonly\"\n               [attr.required]=\"required\"\n               [attr.placeholder]=\"timepickerOptions.placeholder || 'Set time'\"\n               [attr.tabindex]=\"tabindex\"\n               [(ngModel)]=\"timeModel\"\n               (focus)=\"showTimepicker()\"\n               (blur)=\"onTouched()\"\n               (keyup)=\"checkEmptyValue($event)\">\n        <span [hidden]=\"timepickerOptions.hideIcon || false\" class=\"input-group-addon\">\n                    <i [ngClass]=\"timepickerOptions.icon || 'glyphicon glyphicon-time'\"></i>\n                </span>\n      </div>\n      <button *ngIf=\"hasClearButton\" type=\"button\" (click)=\"clearModels()\">Clear</button>\n    </div>\n  ",
                styles: [
                    '.ng2-datetime *[hidden] { display: none; }'
                ]
            },] },
];
/**
 * @nocollapse
 */
DateTimeComponent.ctorParameters = function () { return [
    { type: NgControl, },
]; };
DateTimeComponent.propDecorators = {
    'dateChange': [{ type: Output },],
    'timepickerOptions': [{ type: Input, args: ['timepicker',] },],
    'datepickerOptions': [{ type: Input, args: ['datepicker',] },],
    'hasClearButton': [{ type: Input, args: ['hasClearButton',] },],
    'readonly': [{ type: Input },],
    'required': [{ type: Input },],
    'tabindex': [{ type: Input },],
    'onChange': [{ type: HostListener, args: ['dateChange', ['$event'],] },],
    'onTouched': [{ type: HostListener, args: ['blur',] },],
    'tabindexAttr': [{ type: HostBinding, args: ['attr.tabindex',] },],
};
var id = 0;
/**
 * @param {?} prefix
 * @return {?}
 */
function uniqueId(prefix) {
    return prefix + ++id;
}
/**
 * @param {?} obj
 * @return {?}
 */
function isDate(obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
}

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var DataTableService = (function () {
    /**
     * @param {?} _http
     */
    function DataTableService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} serviceUrl
     * @param {?} methodType
     * @return {?}
     */
    DataTableService.prototype.fetchData = function (serviceUrl, methodType) {
        var /** @type {?} */ requestJson = {};
        var /** @type {?} */ headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var /** @type {?} */ options = new RequestOptions({ headers: headers, method: methodType });
        if (methodType == "post") {
            return this._http.post(serviceUrl, requestJson, options);
        }
        else if (methodType == "get") {
            return this._http.get(serviceUrl, options);
        }
    };
    return DataTableService;
}());
DataTableService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
DataTableService.ctorParameters = function () { return [
    { type: Http, },
]; };

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var ColumnComponent = (function () {
    function ColumnComponent() {
    }
    return ColumnComponent;
}());
ColumnComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-data-table-column',
                template: ""
            },] },
];
/**
 * @nocollapse
 */
ColumnComponent.ctorParameters = function () { return []; };
ColumnComponent.propDecorators = {
    'text': [{ type: Input },],
    'dataIndex': [{ type: Input },],
    'hidden': [{ type: Input },],
    'dataType': [{ type: Input },],
    'summaryType': [{ type: Input },],
    'summaryCaption': [{ type: Input },],
    'headerTemplate': [{ type: ContentChild, args: ['amexioHeaderTmpl',] },],
    'bodyTemplate': [{ type: ContentChild, args: ['amexioBodyTmpl',] },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DataTableComponent; }),
    multi: true
};
var DataTableComponent = (function () {
    /**
     * @param {?} dataTableSevice
     * @param {?} cd
     */
    function DataTableComponent(dataTableSevice, cd) {
        this.dataTableSevice = dataTableSevice;
        this.cd = cd;
        this.rowSelect = new EventEmitter();
        this.selectedRowData = new EventEmitter();
        this.groupByColumn = false;
        this.viewRows = [];
        this.pageNumbers = [];
        this.currentPage = 1;
        this.elementId = "mytable-" + Math.random();
        this.selectAll = false;
        this.selectedRows = [];
        this.isSummary = false;
        this.summaryData = [];
        this.summary = [];
        this.smallScreen = false;
        this.sortBy = -1;
        this.randomIDCheckALL = 'checkall-' + new Date().getTime() + Math.random();
    }
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngAfterViewChecked = function () {
        $('#' + this.elementId).selectpicker('refresh');
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngOnDestroy = function () {
        $('#' + this.elementId).selectpicker('destroy');
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngAfterContentInit = function () {
        this.createConfig();
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.createConfig = function () {
        this.columns = [];
        this.createColumnConfig();
        for (var /** @type {?} */ ir = 0; ir < this.columns.length; ir++) {
            var /** @type {?} */ column = this.columns[ir];
            if (column.summaryType && column.dataType && column.dataType == "number")
                this.isSummary = true;
            this.summaryData.push(0);
            this.summary.push({ summaryType: column.summaryType, summaryCaption: column.summaryCaption, data: [] });
        }
        this.dropdownData = {
            "response": {
                "data": this.columns
            }
        };
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.createColumnConfig = function () {
        var /** @type {?} */ columnRefArray = [];
        columnRefArray = this.columnRef.toArray();
        for (var /** @type {?} */ cr = 0; cr < columnRefArray.length; cr++) {
            var /** @type {?} */ columnConfig = columnRefArray[cr];
            var /** @type {?} */ columnData = void 0;
            if (columnConfig.headerTemplate != null && columnConfig.bodyTemplate != null)
                columnData = { text: columnConfig.text, dataIndex: columnConfig.dataIndex, hidden: columnConfig.hidden, dataType: columnConfig.dataType, headerTemplate: columnConfig.headerTemplate, bodyTemplate: columnConfig.bodyTemplate };
            else if (columnConfig.headerTemplate != null && columnConfig.bodyTemplate == null) {
                columnData = { text: columnConfig.text, dataIndex: columnConfig.dataIndex, hidden: columnConfig.hidden, dataType: columnConfig.dataType, headerTemplate: columnConfig.headerTemplate };
            }
            else if (columnConfig.bodyTemplate != null && columnConfig.headerTemplate == null) {
                columnData = { text: columnConfig.text, dataIndex: columnConfig.dataIndex, hidden: columnConfig.hidden, dataType: columnConfig.dataType, bodyTemplate: columnConfig.bodyTemplate };
            }
            else if (columnConfig.bodyTemplate == null && columnConfig.headerTemplate == null) {
                columnData = { text: columnConfig.text, dataIndex: columnConfig.dataIndex, hidden: columnConfig.hidden, dataType: columnConfig.dataType };
            }
            if (columnConfig.summaryType) {
                columnData['summaryType'] = columnConfig.summaryType;
            }
            if (columnConfig.summaryCaption) {
                columnData['summaryCaption'] = columnConfig.summaryCaption;
            }
            this.columns.push(columnData);
        }
    };
    /**
     * @param {?} change
     * @return {?}
     */
    DataTableComponent.prototype.ngOnChanges = function (change) {
        if (change['dataTableBindData']) {
            var /** @type {?} */ data = change['dataTableBindData'].currentValue;
            if (data) {
                this.setData(data);
            }
        }
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.httpMethod && this.httpUrl) {
            this.dataTableSevice.fetchData(this.httpUrl, this.httpMethod).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData(_this.responseData);
            });
        }
        else if (this.dataTableBindData) {
            this.setData(this.dataTableBindData);
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    DataTableComponent.prototype.setData = function (httpResponse) {
        this.data = this.getResponseData(httpResponse);
        if (this.groupByColumn) {
            this.cloneData = JSON.parse(JSON.stringify(this.data));
        }
        if (this.data.length > (1 * this.pageSize)) {
            this.maxPage = Math.floor((this.data.length / this.pageSize));
            if ((this.data.length % this.pageSize) > 0) {
                this.maxPage++;
            }
        }
        for (var /** @type {?} */ pageNo = 1; pageNo <= this.maxPage; pageNo++) {
            this.pageNumbers.push(pageNo);
        }
        this.createSummaryData();
        this.renderData();
        if (this.groupByColumn) {
            this.setColumnData();
        }
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.createSummaryData = function () {
        for (var /** @type {?} */ sd = 0; sd < this.data.length; sd++) {
            var /** @type {?} */ localData = this.data[sd];
            if (this.isSummary) {
                for (var /** @type {?} */ ir = 0; ir < this.columns.length; ir++) {
                    var /** @type {?} */ column = this.columns[ir];
                    if (column.summaryType && column.dataType && column.dataType == "number") {
                        var /** @type {?} */ colData = localData[column.dataIndex];
                        if (colData) {
                            var /** @type {?} */ summaryData = this.summary[ir];
                            if (summaryData && summaryData != "")
                                summaryData.data.push(colData);
                        }
                    }
                }
            }
        }
        for (var /** @type {?} */ is = 0; is < this.summaryData.length; is++) {
            if (this.summaryData[is] == 0) {
                this.summaryData[is] = "";
            }
            var /** @type {?} */ summarized = this.summary[is];
            if (summarized) {
                var /** @type {?} */ summaryType = summarized.summaryType;
                var /** @type {?} */ summarizeData = summarized.data.sort(function (a, b) { return a - b; });
                var /** @type {?} */ summaryCaption = summarized.summaryCaption;
                if (summaryType) {
                    if (summaryType == 'sum') {
                        var /** @type {?} */ sumValue = 0;
                        for (var /** @type {?} */ s = 0; s < summarizeData.length; s++) {
                            sumValue = sumValue + summarizeData[s];
                        }
                        this.summaryData[is] = summaryCaption + " " + sumValue;
                    }
                    else if (summaryType == 'min') {
                        if (summarizeData) {
                            this.summaryData[is] = summaryCaption + " " + summarizeData[0];
                        }
                    }
                    else if (summaryType == 'max') {
                        if (summarizeData) {
                            this.summaryData[is] = summaryCaption + " " + summarizeData[summarizeData.length - 1];
                        }
                    }
                    else if (summaryType == 'avg') {
                        if (summarizeData) {
                            var /** @type {?} */ sumValue = 0;
                            for (var /** @type {?} */ s = 0; s < summarizeData.length; s++) {
                                sumValue = sumValue + summarizeData[s];
                            }
                            this.summaryData[is] = summaryCaption + " " + Math.round(sumValue / summarizeData.length);
                        }
                    }
                }
            }
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    DataTableComponent.prototype.getResponseData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        var /** @type {?} */ dr = this.dataReader.split(".");
        for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
            responsedata = responsedata[dr[ir]];
        }
        return responsedata;
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.renderData = function () {
        if (this.pageSize > 1) {
            var /** @type {?} */ rowsTemp = this.data;
            var /** @type {?} */ newRows = [];
            var /** @type {?} */ startIndex = 1;
            var /** @type {?} */ endIndex = this.pageSize;
            if (this.currentPage > 1) {
                startIndex = (this.currentPage - 1) * this.pageSize;
                endIndex = startIndex + this.pageSize;
            }
            while (startIndex <= endIndex) {
                if (rowsTemp[startIndex]) {
                    newRows.push(rowsTemp[startIndex]);
                }
                startIndex++;
            }
            this.viewRows = newRows;
        }
        else {
            this.viewRows = this.data;
        }
        this.selectedRowNo = -1;
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.sortData = function () {
        if (this.sortColumn) {
            var /** @type {?} */ sortColDataIndex_1;
            var /** @type {?} */ sortOrder_1 = this.sortBy;
            if (this.sortColumn.dataIndex && this.sortColumn.dataType) {
                var /** @type {?} */ dataIndex = this.sortColumn.dataIndex;
                sortColDataIndex_1 = dataIndex;
                if (this.sortColumn.dataType == 'string') {
                    if (this.groupByColumn) {
                        this.data.sort(function (a, b) {
                            var /** @type {?} */ x = a.group.toLowerCase();
                            var /** @type {?} */ y = b.group.toLowerCase();
                            if (sortOrder_1 == 2) {
                                if (x < y) {
                                    return 1;
                                }
                                if (x > y) {
                                    return -1;
                                }
                            }
                            else {
                                if (x < y) {
                                    return -1;
                                }
                                if (x > y) {
                                    return 1;
                                }
                            }
                            return 0;
                        });
                    }
                    else {
                        this.data.sort(function (a, b) {
                            var /** @type {?} */ x = a[sortColDataIndex_1].toLowerCase();
                            var /** @type {?} */ y = b[sortColDataIndex_1].toLowerCase();
                            if (sortOrder_1 == 2) {
                                if (x < y) {
                                    return 1;
                                }
                                if (x > y) {
                                    return -1;
                                }
                            }
                            else {
                                if (x < y) {
                                    return -1;
                                }
                                if (x > y) {
                                    return 1;
                                }
                            }
                            return 0;
                        });
                    }
                }
                else if (this.sortColumn.dataType == 'number') {
                    if (this.groupByColumn) {
                        this.data.sort(function (a, b) {
                            var /** @type {?} */ x = a.group;
                            var /** @type {?} */ y = b.group;
                            if (sortOrder_1 == 2) {
                                return y - x;
                            }
                            else {
                                return x - y;
                            }
                        });
                    }
                    else {
                        this.data.sort(function (a, b) {
                            var /** @type {?} */ x = a[sortColDataIndex_1];
                            var /** @type {?} */ y = b[sortColDataIndex_1];
                            if (sortOrder_1 == 2) {
                                return y - x;
                            }
                            else {
                                return x - y;
                            }
                        });
                    }
                }
            }
        }
        this.renderData();
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.next = function () {
        if (this.currentPage < this.maxPage) {
            this.currentPage++;
        }
        this.renderData();
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.prev = function () {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
        else {
            this.currentPage = 1;
        }
        this.renderData();
    };
    /**
     * @param {?} sortCol
     * @return {?}
     */
    DataTableComponent.prototype.sortOnColHeaderClick = function (sortCol) {
        if (this.sortBy == -1)
            this.sortBy = 1;
        else if (this.sortBy == 1)
            this.sortBy = 2;
        else if (this.sortBy == 2)
            this.sortBy = 1;
        this.setSortColumn(sortCol, this.sortBy);
    };
    /**
     * @param {?} sortCol
     * @param {?} _sortBy
     * @return {?}
     */
    DataTableComponent.prototype.setSortColumn = function (sortCol, _sortBy) {
        this.sortBy = _sortBy;
        this.sortColumn = sortCol;
        this.sortData();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DataTableComponent.prototype.setPageNo = function (value) {
        this.currentPage = value;
        this.renderData();
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.setUserPageNo = function () {
        this.renderData();
    };
    /**
     * @param {?} rowData
     * @param {?} rowIndex
     * @return {?}
     */
    DataTableComponent.prototype.rowClick = function (rowData, rowIndex) {
        this.rowSelect.emit(rowData);
        this.selectedRowNo = rowIndex;
    };
    /**
     * @param {?} rowNo
     * @return {?}
     */
    DataTableComponent.prototype.isSelected = function (rowNo) {
        return rowNo == this.selectedRowNo;
    };
    /**
     * @param {?} dataIndex
     * @return {?}
     */
    DataTableComponent.prototype.setColumnVisiblity = function (dataIndex) {
        for (var /** @type {?} */ ic = 0; ic < this.columns.length; ic++) {
            var /** @type {?} */ col = this.columns[ic];
            if (col.dataIndex == dataIndex) {
                col.hidden = !col.hidden;
            }
        }
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.selectAllVisibleRows = function () {
        this.selectAll = !this.selectAll;
        if (this.selectAll) {
            for (var /** @type {?} */ vr = 0; vr < this.viewRows.length; vr++) {
                this.selectedRows.push(this.viewRows[vr]);
            }
        }
        else {
            this.selectedRows = [];
        }
        this.emitSelectedRows();
    };
    /**
     * @param {?} rowData
     * @param {?} event
     * @return {?}
     */
    DataTableComponent.prototype.setSelectedRow = function (rowData, event) {
        if (event.currentTarget.checked) {
            this.selectedRows.push(rowData);
        }
        else {
            var /** @type {?} */ indexOf = this.selectedRows.indexOf(rowData);
            delete this.selectedRows[indexOf];
        }
        this.emitSelectedRows();
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.emitSelectedRows = function () {
        var /** @type {?} */ sRows = [];
        for (var /** @type {?} */ sr = 0; sr < this.selectedRows.length; sr++) {
            if (this.selectedRows[sr]) {
                sRows.push(this.selectedRows[sr]);
            }
        }
        this.selectedRowData.emit(sRows);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DataTableComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 768) {
            this.smallScreen = true;
        }
        else {
            this.smallScreen = false;
        }
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.setColumnData = function () {
        var _this = this;
        this.data = this.cloneData;
        var /** @type {?} */ groups = {};
        this.data.forEach(function (option) {
            var /** @type {?} */ groupName = option[_this.groupByColumnIndex];
            if (!groups[groupName]) {
                groups[groupName] = [];
            }
            groups[groupName].push(option);
        });
        this.data = [];
        for (var /** @type {?} */ groupName in groups) {
            this.data.push({ expanded: false, group: groupName, groupData: groups[groupName] });
        }
        this.renderData();
        this.cd.detectChanges();
    };
    /**
     * @param {?} groupData
     * @return {?}
     */
    DataTableComponent.prototype.iconSwitch = function (groupData) {
        groupData.expanded = !groupData.expanded;
    };
    return DataTableComponent;
}());
DataTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-data-table',
                template: "\n      \n        <div>\n            <ng-content></ng-content>\n        </div>\n\n        <table class=\"table table-hover table-striped table-bordered\"  [attr.id]=\"elementId\" (window:resize)=\"onResize($event)\">\n            <thead>\n\n            <tr>\n                <td [attr.colspan]=\"columns.length + (checkboxSelect? 1: 0)\" width=\"100%\" data align=\"right\">\n                    <span style=\"float: left;\">\n                      <b>{{title}}</b>\n                    </span>\n                  <span *ngIf=\"groupByColumn\">\n                    \n                    <amexio-dropdown [(ngModel)]=\"groupByColumnIndex\"\n                                     [placeholder]=\"'Choose Column'\"\n                                     name=\"groupByColumnIndex\"\n                                     [dataReader]=\"'response.data'\"\n                                     [data]=\"dropdownData\"\n                                     [displayField]=\"'text'\"\n                                     [valueField]=\"'dataIndex'\"\n                                     [width]=\"'150px'\"\n                                     (onSingleSelect)=\"setColumnData()\">\n                    </amexio-dropdown>\n\n                  </span>\n                    <span style=\"float: right\">\n                       <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-default\" aria-label=\"Previous\" (click)=\"prev()\">\n                          <span aria-hidden=\"true\">&laquo;</span>\n                        </button>\n        \n                        <button type=\"button\" class=\"btn btn-default\">\n                          <span> ({{currentPage}} of {{maxPage}})</span>\n                        </button>\n        \n                        <div class=\"btn-group\" role=\"group\">\n                          <button type=\"button\" class=\"btn btn-secondary btn-block dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" data-id=\"simple-select\"><i class=\"fa fa-bars\"></i>\n                            Page - {{currentPage}}\n                          </button>\n                            <!--  <ul class=\"dropdown-menu  dropdown-menu-right\">\n                                  <li *ngFor=\"let row of pageNumbers let pageNo = index \" value=\"{{pageNo+1}}\"><a (click)=\"setPageNo(pageNo+1)\">{{pageNo+1}}</a></li>\n                              </ul>-->\n                          <div class=\"dropdown-menu open\">\n                            <ul class=\"dropdown-menu inner\" role=\"menu\" style=\"max-height: 445.406px; overflow-y: auto; min-height: 0px;\">\n                              <li *ngFor=\"let row of pageNumbers let pageNo = index \" value=\"{{pageNo+1}}\"><a (click)=\"setPageNo(pageNo+1)\">{{pageNo+1}}</a></li>\n                            </ul>\n                          </div>\n                          \n                        </div>\n        \n                        <div class=\"btn-group\" role=\"group\">\n                          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            <span class=\"glyphicon glyphicon-th-list\"></span>\n                          </button>\n                          <ul class=\"dropdown-menu  dropdown-menu-right\">\n                              <li>\n                                  &nbsp;&nbsp;<b> Show Columns</b>\n                              </li>\n                              <li *ngFor=\"let cols of columns;let i = index;\">\n                                <div class=\"checkbox\">\n                                      <label>\n                                          &nbsp;&nbsp;<input type=\"checkbox\" (click)=\"setColumnVisiblity(cols.dataIndex)\" [attr.checked]=\"!cols.hidden ? true: null\"> {{cols.text +\" \"}}\n                                      </label>\n                                 </div>\n                              </li> \n                          </ul>\n                        </div>\n                        <button type=\"button\" class=\"btn btn-default\" aria-label=\"Next\" (click)=\"next()\"><span aria-hidden=\"true\">&raquo;</span></button>\n                      </div>\n                    </span>\n                </td>\n            </tr>\n              <tr *ngIf=\"!smallScreen\">\n                <td *ngIf=\"checkboxSelect\" width=\"5%\"><input type=\"checkbox\" (click)=\"selectAllVisibleRows()\" ></td>\n                <td *ngFor=\"let cols of columns\" [hidden]=\"cols.hidden\" >\n                  <!-- Column Header -->\n                  <span style=\"cursor: pointer;\" (click)=\"sortOnColHeaderClick(cols)\">\n                        \n                        <!-- If user hasnt embedded view -->\n                        <ng-container *ngIf=\"!cols?.headerTemplate\"><b>{{cols.text}}</b></ng-container>\n\n                    <!--Check if user has embedded view inserted then -->\n                        <ng-template *ngIf=\"cols?.headerTemplate\" [ngTemplateOutlet]=\"cols?.headerTemplate\" [ngOutletContext]=\"{ $implicit: { header: cols.text } }\"></ng-template>\n                      </span>\n\n                  <span  style=\"float: right\" class=\"btn-group\" role=\"group\">\n                        <span class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                          <span class=\"glyphicon glyphicon-triangle-bottom\" style=\"color:#93a1a1\"></span>\n                        </span>\n                        <div class=\"dropdown-menu\">\n                            <button class=\"btn btn-link\" (click)=\"setSortColumn(cols,1)\">\n                                <span class=\"glyphicon glyphicon glyphicon-sort-by-attributes pull-left\"></span><span>&nbsp;Sort Ascending</span>\n                            </button>                          \n                            <button class=\"btn btn-link\" (click)=\"setSortColumn(cols,2)\">\n                                <span class=\"glyphicon glyphicon glyphicon glyphicon-sort-by-attributes-alt pull-left\"></span><span>&nbsp;Sort Descending</span>\n                            </button>                          \n                        </div>\n                      </span>\n                </td>\n              </tr>\n            \n            <ng-container *ngIf=\"!groupByColumn\">\n              <tr  *ngIf=\"!smallScreen\">\n                <td *ngIf=\"checkboxSelect\"  width=\"5%\"></td>\n                <td *ngFor=\"let cols of columns let colIndex = index \" [hidden] =\"cols.hidden\" >\n                  <b>{{summaryData[colIndex]}}</b>\n                </td>\n              </tr>\n            </ng-container>\n            \n            </thead>\n\n        \n            <tbody *ngIf=\"!smallScreen\" >\n            <ng-container *ngIf=\"groupByColumn\">\n            \n             <tr [ngClass]=\"{'hiderow' : !(viewRows.length > 0),'showrow' : viewRows.length > 0}\"><td  [attr.colspan]=\"columns.length + (checkboxSelect? 1: 0)\" width=\"100%\">\n               <div class=\"list-group\" *ngFor=\"let row of viewRows;let i=index;\" style=\"border-bottom: 1px ridge lightgray;\">\n\n                 <span (click)=\"iconSwitch(row)\" style=\"cursor: pointer;color: black;\" data-toggle=\"collapse\" [attr.data-target]=\"'#'+i\" data-parent=\"#menu\">\n                   <span [ngClass]=\"{'fa-caret-down':row.expanded,'fa-caret-right':!row.expanded}\" class=\"fa \" > &nbsp;&nbsp;</span>{{row.group}}<span style=\"float: right\" class=\"badge\">{{row.groupData.length}}</span>\n                 </span>\n\n                 <div [attr.id]=\"i\" class=\"sublinks collapse\">\n                   <table class=\"table table-bordered\">\n                     <tbody>\n                     <tr *ngFor=\"let rows of row.groupData let rowIndex = index\" (click)=\"rowClick(rows, rowIndex)\">\n                       <td *ngIf=\"checkboxSelect\"  width=\"5%\"><input type=\"checkbox\" id=\"checkbox-{{elementId}}-{{rowIndex}}\" [attr.checked]=\"selectAll? true: null\" (click)=\"setSelectedRow(rows, $event)\"></td>\n                       <td *ngFor=\"let cols of columns\" [hidden] =\"cols.hidden\">\n\n                         <!-- If user hasnt specified customized cell use default -->\n                         <ng-container *ngIf=\"!cols?.bodyTemplate\">{{rows[cols.dataIndex]}}</ng-container>\n\n                         <!-- else insert customized code -->\n                         <template *ngIf=\"cols.bodyTemplate\" [ngTemplateOutlet]=\"cols.bodyTemplate\" [ngOutletContext]=\"{ $implicit: { text : rows[cols.dataIndex] }, row: rows }\"></template>\n\n\n                       </td>\n                     </tr>\n                     </tbody>\n                   </table>\n                 </div>\n               </div>\n             </td>\n               \n             </tr>\n\n              <tr *ngIf=\"viewRows.length == 0\">\n                <td [attr.colspan]=\"columns.length+1\" style=\"height: 100px;\" class=\"loading-mask\">\n\n                </td>\n              </tr>\n               \n              \n            </ng-container>\n            <ng-container *ngIf=\"!groupByColumn\">\n              <tr [ngClass]=\"{'hiderow' : !(viewRows.length > 0),'showrow' : viewRows.length > 0}\"  style=\"cursor: pointer;\" *ngFor=\"let row of viewRows let rowIndex = index \" (click)=\"rowClick(row, rowIndex)\" [class.info]=\"isSelected(rowIndex)\">\n                <td *ngIf=\"checkboxSelect\"  width=\"5%\"><input type=\"checkbox\" id=\"checkbox-{{elementId}}-{{rowIndex}}\" [attr.checked]=\"selectAll? true: null\" (click)=\"setSelectedRow(row, $event)\"></td>\n\n                <td *ngFor=\"let cols of columns\" [hidden] =\"cols.hidden\" >\n\n                  <!-- If user hasnt specified customized cell use default -->\n                  <ng-container *ngIf=\"!cols?.bodyTemplate\">{{row[cols.dataIndex]}}</ng-container>\n\n                  <!-- else insert customized code -->\n                  <template *ngIf=\"cols.bodyTemplate\" [ngTemplateOutlet]=\"cols.bodyTemplate\" [ngOutletContext]=\"{ $implicit: { text : row[cols.dataIndex] }, row: row }\"></template>\n\n                </td>\n              </tr>\n\n              <tr *ngIf=\"viewRows.length == 0\">\n                <td [attr.colspan]=\"columns.length+1\" style=\"height: 100px;\" class=\"loading-mask\">\n\n                </td>\n              </tr>\n            </ng-container>\n          \n            </tbody>\n    \n\n        \n            <tbody *ngIf=\"smallScreen\">\n            <ng-container *ngIf=\"groupByColumn\">\n              \n              <tr [ngClass]=\"{'hiderow' : !(viewRows.length > 0),'showrow' : viewRows.length > 0}\">\n                <td  [attr.colspan]=\"columns.length + (checkboxSelect? 1: 0)\" width=\"100%\">\n                <div class=\"list-group\" *ngFor=\"let row of viewRows;let i=index;\" style=\"border-bottom: 1px ridge lightgray;\">\n\n                 <span (click)=\"iconSwitch(row)\" style=\"cursor: pointer;color: black;\" data-toggle=\"collapse\" [attr.data-target]=\"'#'+i\" data-parent=\"#menu\">\n                   <span [ngClass]=\"{'fa-caret-down':row.expanded,'fa-caret-right':!row.expanded}\" class=\"fa \" > &nbsp;&nbsp;</span>{{row.group}}<span style=\"float: right\" class=\"badge\">{{row.groupData.length}}</span>\n                 </span>\n\n                  <div [attr.id]=\"i\" class=\"sublinks collapse\">\n\n\n                    <table class=\"table table-bordered\">\n                      <tbody>\n                      <tr *ngFor=\"let rows of row.groupData let rowIndex = index\" (click)=\"rowClick(rows, rowIndex)\">\n                        <td  *ngIf=\"checkboxSelect\"  width=\"5%\"><input type=\"checkbox\" id=\"checkbox-{{elementId}}-{{rowIndex}}\" [attr.checked]=\"selectAll? true: null\" (click)=\"setSelectedRow(rows, $event)\"></td>\n                        <td [attr.colspan]=\"columns.length-1\">\n\n\n\n                          <div style=\"word-wrap: break-word\" *ngFor=\"let cols of columns\" [hidden] =\"cols.hidden\" >\n                            <b>{{cols.text}}</b> :\n                            <!-- If user hasnt specified customized cell use default -->\n                            <ng-container *ngIf=\"!cols?.bodyTemplate\">{{rows[cols.dataIndex]}}</ng-container>\n\n                            <!-- else insert customized code -->\n                            <template *ngIf=\"cols.bodyTemplate\" [ngTemplateOutlet]=\"cols.bodyTemplate\" [ngOutletContext]=\"{ $implicit: { text : rows[cols.dataIndex] }, row: rows }\"></template>\n                          </div>\n                          \n\n                        </td>\n                      </tr>\n                      </tbody>\n                    </table>\n                    \n              \n                  </div>\n              \n                </div>\n              </td>\n\n              </tr>\n              \n            </ng-container>\n            \n            \n            <ng-container *ngIf=\"!groupByColumn\">\n\n              <tr [ngClass]=\"{'hiderow' : !(viewRows.length > 0),'showrow' : viewRows.length > 0}\" style=\"cursor: pointer\" *ngFor=\"let row of viewRows let rowIndex = index \" (click)=\"rowClick(row, rowIndex)\" [class.info]=\"isSelected(rowIndex)\">\n                <td *ngIf=\"checkboxSelect\"  width=\"5%\"><input type=\"checkbox\" id=\"checkbox-{{elementId}}-{{rowIndex}}\" [attr.checked]=\"selectAll? true: null\" (click)=\"setSelectedRow(row, $event)\"></td>\n                <td>\n                  <div style=\"word-wrap: break-word\" *ngFor=\"let cols of columns\" [hidden] =\"cols.hidden\" >\n                    <b>{{cols.text}}</b> :\n                    <!-- If user hasnt specified customized cell use default -->\n                    <ng-container *ngIf=\"!cols?.bodyTemplate\">{{row[cols.dataIndex]}}</ng-container>\n\n                    <!-- else insert customized code -->\n                    <template *ngIf=\"cols.bodyTemplate\" [ngTemplateOutlet]=\"cols.bodyTemplate\" [ngOutletContext]=\"{ $implicit: { text : row[cols.dataIndex] }, row: row }\"></template>\n                  </div>\n                </td>\n              </tr>\n\n            </ng-container>\n           \n            <tr *ngIf=\"viewRows.length == 0\">\n              <td [attr.colspan]=\"columns.length+1\" style=\"height: 100px;\" class=\"loading-mask\">\n\n              </td>\n            </tr>\n           \n            </tbody>\n         \n\n        </table>\n   \n    \n    ",
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, DataTableService],
                styles: ["\n    .loading-mask {\n      position: relative;\n    }\n\n    /*\n    Because we set .loading-mask relative, we can span our ::before\n    element over the whole parent element\n    */\n    .loading-mask::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background-color: rgba(0, 0, 0, 0.25);\n    }\n\n    /*\n    Spin animation for .loading-mask::after\n    */\n    @keyframes spin {\n      from {\n        transform: rotate(0deg);\n      }\n      to {\n        transform: rotate(359deg);\n      }\n    }\n\n    /*\n    The loading throbber is a single spinning element with three\n    visible borders and a border-radius of 50%.\n    Instead of a border we could also use a font-icon or any\n    image using the content attribute.\n    */\n    .loading-mask::after {\n      content: \"\";\n      position: absolute;\n      border-width: 3px;\n      border-style: solid;\n      border-color: transparent rgb(255, 255, 255) rgb(255, 255, 255);\n      border-radius: 50%;\n      width: 24px;\n      height: 24px;\n      top: calc(50% - 12px);\n      left: calc(50% - 12px);\n      animation: 1s linear 0s normal none infinite running spin;\n      filter: drop-shadow(0 0 2 rgba(0, 0, 0, 0.33));\n    }\n\n    .hiderow{\n      visibility: hidden\n    }\n\n    .showrow{\n      visibility: visible;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
DataTableComponent.ctorParameters = function () { return [
    { type: DataTableService, },
    { type: ChangeDetectorRef, },
]; };
DataTableComponent.propDecorators = {
    'title': [{ type: Input },],
    'pageSize': [{ type: Input },],
    'httpUrl': [{ type: Input },],
    'httpMethod': [{ type: Input },],
    'dataReader': [{ type: Input },],
    'checkboxSelect': [{ type: Input },],
    'dataTableBindData': [{ type: Input },],
    'rowSelect': [{ type: Output },],
    'selectedRowData': [{ type: Output },],
    'height': [{ type: Input },],
    'width': [{ type: Input },],
    'groupByColumn': [{ type: Input },],
    'groupByColumnIndex': [{ type: Input },],
    'columnRef': [{ type: ContentChildren, args: [ColumnComponent,] },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var CheckBoxService = (function () {
    /**
     * @param {?} _http
     */
    function CheckBoxService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} parentRef
     * @param {?} serviceUrl
     * @param {?} methodType
     * @return {?}
     */
    CheckBoxService.prototype.fetchData = function (parentRef, serviceUrl, methodType) {
        var _this = this;
        this.parentRef = parentRef;
        var /** @type {?} */ requestJson = {};
        var /** @type {?} */ headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var /** @type {?} */ options = new RequestOptions({ headers: headers, method: methodType });
        if (methodType == "post") {
            this._http.post(serviceUrl, requestJson, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData();
            });
        }
    };
    /**
     * @return {?}
     */
    CheckBoxService.prototype.setData = function () {
        this.parentRef.setData(this.responseData);
    };
    return CheckBoxService;
}());
CheckBoxService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
CheckBoxService.ctorParameters = function () { return [
    { type: Http, },
]; };

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var CHECK_COLUMN_SIZE = 'col-lg-';
var CheckBoxComponent = (function () {
    /**
     * @param {?} checkBoxGroupService
     */
    function CheckBoxComponent(checkBoxGroupService) {
        this.checkBoxGroupService = checkBoxGroupService;
        this.selectedValue = new EventEmitter();
        this.elementId = "check-box-group-" + new Date().getTime();
        this.selectedCheckBox = [];
    }
    /**
     * @return {?}
     */
    CheckBoxComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    CheckBoxComponent.prototype.ngAfterViewInit = function () {
        this.column = CHECK_COLUMN_SIZE + this.column;
        if (this.httpMethod && this.httpUrl) {
            this.checkBoxGroupService.fetchData(this, this.httpUrl, this.httpMethod);
        }
        else if (this.checkBoxGroupDownBindData) {
            this.setData(this.checkBoxGroupDownBindData);
        }
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    CheckBoxComponent.prototype.setData = function (httpResponse) {
        this.data = this.getResponseData(httpResponse);
        this.viewData = this.getResponseData(httpResponse);
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    CheckBoxComponent.prototype.getResponseData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        var /** @type {?} */ dr = this.dataReader.split(".");
        for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
            responsedata = responsedata[dr[ir]];
        }
        return responsedata;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CheckBoxComponent.prototype.filterData = function (event) {
        if (this.textValue.length > 0) {
            this.viewData = [];
            for (var /** @type {?} */ vd = 0; vd < this.data.length; vd++) {
                var /** @type {?} */ displayData = this.data[vd][this.displayField];
                if (displayData.toLowerCase().startsWith(this.textValue)) {
                    this.viewData.push(this.data[vd]);
                }
            }
        }
        else {
            this.viewData = this.data;
        }
    };
    /**
     * @param {?} rowData
     * @param {?} event
     * @return {?}
     */
    CheckBoxComponent.prototype.setSelectedCheckBox = function (rowData, event) {
        if (event.currentTarget.checked) {
            this.selectedCheckBox.push(rowData);
        }
        else {
            var /** @type {?} */ indexOf = this.selectedCheckBox.indexOf(rowData);
            delete this.selectedCheckBox[indexOf];
        }
        this.emitSelectedRows();
    };
    /**
     * @return {?}
     */
    CheckBoxComponent.prototype.emitSelectedRows = function () {
        var /** @type {?} */ sRows = [];
        for (var /** @type {?} */ sr = 0; sr < this.selectedCheckBox.length; sr++) {
            if (this.selectedCheckBox[sr]) {
                sRows.push(this.selectedCheckBox[sr]);
            }
        }
        this.selectedValue.emit(sRows);
    };
    return CheckBoxComponent;
}());
CheckBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-checkbox',
                template: "\n        <div [attr.class]=\"divCss\">\n            <br>\n            <label  [attr.for]=\"elementId\">{{fieldLabel}}</label>\n            <div style=\"overflow: auto;\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\" *ngIf=\"searchBox\"><span><input [(ngModel)]=\"textValue\" type=\"text\" class=\"form-control\" placeholder=\"Please select\" (keyup)=\"filterData($event)\"></span></li>\n                    <li [attr.class]=\"'list-group-item '+column\" *ngFor=\"let row of viewData\">\n                        <label>\n                            <input  type=\"checkbox\"  (click)=\"setSelectedCheckBox(row, $event)\"> {{row[displayField]}}\n                        </label>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    ",
                providers: [CheckBoxService]
            },] },
];
/**
 * @nocollapse
 */
CheckBoxComponent.ctorParameters = function () { return [
    { type: CheckBoxService, },
]; };
CheckBoxComponent.propDecorators = {
    'fieldLabel': [{ type: Input },],
    'fieldName': [{ type: Input },],
    'dataReader': [{ type: Input },],
    'httpMethod': [{ type: Input },],
    'httpUrl': [{ type: Input },],
    'displayField': [{ type: Input },],
    'valueField': [{ type: Input },],
    'searchBox': [{ type: Input },],
    'checkBoxGroupDownBindData': [{ type: Input },],
    'column': [{ type: Input },],
    'selectedValue': [{ type: Output },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var CarouselService = (function () {
    /**
     * @param {?} _http
     */
    function CarouselService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} serviceUrl
     * @param {?} methodType
     * @return {?}
     */
    CarouselService.prototype.fetchData = function (serviceUrl, methodType) {
        var /** @type {?} */ requestJson = {};
        var /** @type {?} */ headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var /** @type {?} */ options = new RequestOptions({ headers: headers, method: methodType });
        if (methodType == "post") {
            return this._http.post(serviceUrl, requestJson, options);
        }
        else if (methodType == "get") {
            return this._http.get(serviceUrl, options);
        }
    };
    return CarouselService;
}());
CarouselService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
CarouselService.ctorParameters = function () { return [
    { type: Http, },
]; };

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var CarouselComponent = (function () {
    /**
     * @param {?} carouselService
     */
    function CarouselComponent(carouselService) {
        this.carouselService = carouselService;
        this.isContent = false;
        this.elementId = 'scroll' + Math.round(Math.random() * 200);
        this.className = 'carousel slide';
    }
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.httpMethod && this.httpUrl) {
            this.carouselService.fetchData(this.httpUrl, this.httpMethod).subscribe(function (response) {
                _this.response = response.json();
            }, function (error) {
            }, function () {
                _this.setData(_this.response);
            });
        }
        else if (this.scrollViewBindData) {
            this.setData(this.scrollViewBindData);
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    CarouselComponent.prototype.setData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        var /** @type {?} */ dr = this.dataReader.split(".");
        for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
            responsedata = responsedata[dr[ir]];
        }
        this.viewData = responsedata;
    };
    return CarouselComponent;
}());
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-carousel',
                template: "\n\n        <div [attr.id]=\"elementId\" [attr.class]=\"className\" data-ride=\"carousel\">\n            <!-- Indicators -->\n            <ol class=\"carousel-indicators\">\n                <li *ngFor=\"let scroll of viewData;let i =index\"  [attr.data-target]=\"'#'+elementId\" [attr.data-slide-to]=\"i\" class=\"\" [ngClass]=\"{'active':scroll.active}\"></li>\n            </ol>\n            <!-- Wrapper for slides -->\n            <div class=\"carousel-inner\">\n                <div class=\"item\" [ngClass]=\"{'active':scrollData.active}\"  *ngFor=\"let scrollData of viewData\" >\n                    <div class=\"text-center\">{{scrollData.title}}</div>\n                    <ng-container *ngIf=\"isContent\">\n                        <div [innerHTML]=\"scrollData.content\"></div>\n                    </ng-container>\n                    <ng-container *ngIf=\"!isContent\">\n                        <img [src]=\"scrollData.img\" alt=\"Los Angeles\" style=\"width:100%;\">\n                        <div class=\"carousel-caption\">\n                            <h3>{{scrollData.caption}}</h3>\n                        </div>\n                    </ng-container>\n                </div>\n                <!-- Left and right controls -->\n                <a class=\"left carousel-control\" [attr.href]=\"'#'+elementId\" data-slide=\"prev\">\n                    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                    <span class=\"sr-only\">Previous</span>\n                </a>\n                <a class=\"right carousel-control\" [attr.href]=\"'#'+elementId\" data-slide=\"next\">\n                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                    <span class=\"sr-only\">Next</span>\n                </a>\n            </div>\n        </div>\n    ",
                providers: [CarouselService]
            },] },
];
/**
 * @nocollapse
 */
CarouselComponent.ctorParameters = function () { return [
    { type: CarouselService, },
]; };
CarouselComponent.propDecorators = {
    'httpUrl': [{ type: Input },],
    'httpMethod': [{ type: Input },],
    'dataReader': [{ type: Input },],
    'scrollViewBindData': [{ type: Input },],
    'isContent': [{ type: Input },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var ButtonGroupActionComponent = (function () {
    function ButtonGroupActionComponent() {
        this.onClick = new EventEmitter();
        this.elementId = 'button-group-action' + new Date().getTime() + Math.random();
    }
    /**
     * @return {?}
     */
    ButtonGroupActionComponent.prototype.ngOnInit = function () {
        this.btnStyleClass = 'btn ';
        this.btnSizeStyleClass = '';
        if (this.type != '' || this.type != null) {
            if (this.type == 'warning')
                this.btnStyleClass = this.btnStyleClass + 'btn-warning';
            else if (this.type == 'primary')
                this.btnStyleClass = this.btnStyleClass + 'btn-primary';
            else if (this.type == 'success')
                this.btnStyleClass = this.btnStyleClass + 'btn-success';
            else if (this.type == 'danger')
                this.btnStyleClass = this.btnStyleClass + 'btn-danger';
        }
        else
            this.btnStyleClass = this.btnStyleClass + 'btn-default';
        this.iconStyleClass = 'glyphicon glyphicon-' + this.icon + ' pull-right';
        if (this.tooltipMessage == null)
            this.hasToolTip = false;
        if (this.size != null) {
            if (this.size == 'large')
                this.btnStyleClass = this.btnStyleClass.concat(' btn-lg');
            else if (this.size == 'small')
                this.btnStyleClass = this.btnStyleClass.concat(' btn-sm');
            else if (this.size == 'xsmall')
                this.btnStyleClass = this.btnStyleClass.concat(' btn-xs');
        }
        if (this.block) {
            this.btnStyleClass = this.btnStyleClass.concat(' btn-block');
        }
    };
    /**
     * @param {?} change
     * @return {?}
     */
    ButtonGroupActionComponent.prototype.ngOnChanges = function (change) {
        /*console.log(change.isLoading);
         if(change.isLoading){
         this.disabled = true;
         }*/ //TODO : Fix
    };
    /**
     * @return {?}
     */
    ButtonGroupActionComponent.prototype.ngAfterViewInit = function () {
    };
    return ButtonGroupActionComponent;
}());
ButtonGroupActionComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-btn-group-action',
                template: "",
                styles: ["\n    .glyphicon-refresh-animate {\n      -animation: spin .7s infinite linear;\n      -webkit-animation: spin2 .7s infinite linear;\n    }\n\n    @-webkit-keyframes spin2 {\n      from { -webkit-transform: rotate(0deg);}\n      to { -webkit-transform: rotate(360deg);}\n    }\n\n    @keyframes spin {\n      from { transform: scale(1) rotate(0deg);}\n      to { transform: scale(1) rotate(360deg);}\n    }"
                ]
            },] },
];
/**
 * @nocollapse
 */
ButtonGroupActionComponent.ctorParameters = function () { return []; };
ButtonGroupActionComponent.propDecorators = {
    'label': [{ type: Input },],
    'icon': [{ type: Input },],
    'type': [{ type: Input },],
    'onClickRoute': [{ type: Input },],
    'tooltipMessage': [{ type: Input },],
    'disabled': [{ type: Input },],
    'isLoading': [{ type: Input },],
    'size': [{ type: Input },],
    'block': [{ type: Input },],
    'fieldName': [{ type: Input },],
    'onClick': [{ type: Output },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var ButtonGroupComponent = (function () {
    function ButtonGroupComponent() {
        this.elementId = 'button-group' + new Date().getTime() + Math.random();
    }
    /**
     * @return {?}
     */
    ButtonGroupComponent.prototype.ngAfterContentInit = function () {
        this.createConfig();
    };
    /**
     * @return {?}
     */
    ButtonGroupComponent.prototype.ngOnInit = function () {
        this.btnGroupStyleClass = 'btn-group ';
        if (this.size != null) {
            if (this.size == 'large')
                this.btnGroupStyleClass = this.btnGroupStyleClass.concat(' btn-group-lg');
            else if (this.size == 'small')
                this.btnGroupStyleClass = this.btnGroupStyleClass.concat(' btn-group-sm');
            else if (this.size == 'xsmall')
                this.btnGroupStyleClass = this.btnGroupStyleClass.concat(' btn-group-xs');
        }
    };
    /**
     * @return {?}
     */
    ButtonGroupComponent.prototype.createConfig = function () {
        this.buttonData = [];
        this.createButtonConfig();
    };
    /**
     * @param {?} event
     * @param {?} btnObj
     * @return {?}
     */
    ButtonGroupComponent.prototype.buttonClick = function (event, btnObj) {
        btnObj.onClick.emit(event);
        if (btnObj.onClickRoute != null) {
            // this.router.navigate([this.onClickRoute]);
        }
    };
    /**
     * @return {?}
     */
    ButtonGroupComponent.prototype.createButtonConfig = function () {
        var /** @type {?} */ buttonRefArray = [];
        buttonRefArray = this.buttonComponentRef.toArray();
        for (var /** @type {?} */ cr = 0; cr < buttonRefArray.length; cr++) {
            var /** @type {?} */ buttonConfig = buttonRefArray[cr];
            var /** @type {?} */ data = { label: buttonConfig.label, onClick: buttonConfig.onClick, icon: buttonConfig.icon, type: buttonConfig.type, tooltipMessage: buttonConfig.tooltipMessage, onClickRoute: buttonConfig.onClickRoute, disabled: buttonConfig.disabled,
                isLoading: buttonConfig.isLoading, fieldName: buttonConfig.fieldName, btnStyleClass: buttonConfig.btnStyleClass, iconStyleClass: buttonConfig.iconStyleClass,
                btnSizeStyleClass: buttonConfig.btnSizeStyleClass, hasToolTip: buttonConfig.hasToolTip, elementId: buttonConfig.elementId };
            this.buttonData.push(data);
        }
    };
    return ButtonGroupComponent;
}());
ButtonGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-btn-group',
                template: "    \n      <div [class]=\"btnGroupStyleClass\" [attr.id]=\"elementId\">\n        <button *ngFor=\"let data of buttonData\" type=\"button\" (click)=\"buttonClick($event,data)\"\n                [class]=\"data.btnStyleClass\"\n                [attr.fieldName] = \"data.fieldName\"\n                [attr.disabled] = \"data.disabled ? true: null\"\n                data-toggle=\"tooltip\" data-placement=\"bottom\" [attr.title]=\"data.tooltipMessage\"\n        >\n          <ng-container *ngIf=\"data.isLoading\">\n            <span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span>&nbsp;&nbsp;&nbsp;\n          </ng-container>\n          {{data.label}}\n          <ng-container *ngIf=\"data.icon!=null\">\n            &nbsp;<span [class]=\"data.iconStyleClass\"></span>\n          </ng-container>\n        </button>\n      </div>\n      <ng-content></ng-content>\n  ",
            },] },
];
/**
 * @nocollapse
 */
ButtonGroupComponent.ctorParameters = function () { return []; };
ButtonGroupComponent.propDecorators = {
    'size': [{ type: Input },],
    'buttonComponentRef': [{ type: ContentChildren, args: [ButtonGroupActionComponent,] },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var ItemComponent = (function () {
    function ItemComponent() {
        this.onItemClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ItemComponent.prototype.ngOnInit = function () {
    };
    return ItemComponent;
}());
ItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-btn-dropdown-item',
                template: ""
            },] },
];
/**
 * @nocollapse
 */
ItemComponent.ctorParameters = function () { return []; };
ItemComponent.propDecorators = {
    'label': [{ type: Input },],
    'disabled': [{ type: Input },],
    'icon': [{ type: Input },],
    'onClickRoute': [{ type: Input },],
    'onItemClick': [{ type: Output },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var ButtonDropdownComponent = (function () {
    function ButtonDropdownComponent() {
        this.elementId = 'button-dropdown' + new Date().getTime() + Math.random();
    }
    /**
     * @return {?}
     */
    ButtonDropdownComponent.prototype.ngOnInit = function () {
        this.btnStyleClass = 'btn ';
        this.btnDropdownStyle = 'dropdown-toggle';
        if (this.type != '' || this.type != null) {
            if (this.type == 'warning')
                this.btnStyleClass = this.btnStyleClass + 'btn-warning';
            else if (this.type == 'primary')
                this.btnStyleClass = this.btnStyleClass + 'btn-primary';
            else if (this.type == 'success')
                this.btnStyleClass = this.btnStyleClass + 'btn-success';
            else if (this.type == 'danger')
                this.btnStyleClass = this.btnStyleClass + 'btn-danger';
        }
        else
            this.btnStyleClass = this.btnStyleClass + 'btn-default';
        if (this.size != null) {
            this.btnGroupStyleClass = 'btn-group ';
            if (this.size != null) {
                if (this.size == 'large')
                    this.btnGroupStyleClass = this.btnGroupStyleClass.concat(' btn-group-lg');
                else if (this.size == 'small')
                    this.btnGroupStyleClass = this.btnGroupStyleClass.concat(' btn-group-sm');
                else if (this.size == 'xsmall')
                    this.btnGroupStyleClass = this.btnGroupStyleClass.concat(' btn-group-xs');
            }
        }
        this.btnDropdownStyle = this.btnStyleClass + ' ' + this.btnDropdownStyle;
    };
    /**
     * @return {?}
     */
    ButtonDropdownComponent.prototype.ngAfterContentInit = function () {
        this.createConfig();
    };
    /**
     * @return {?}
     */
    ButtonDropdownComponent.prototype.createConfig = function () {
        this.dropdownItemData = [];
        this.createDropdownItemConfig();
    };
    /**
     * @return {?}
     */
    ButtonDropdownComponent.prototype.createDropdownItemConfig = function () {
        var /** @type {?} */ itemRefArray = [];
        itemRefArray = this.dropdownItemRef.toArray();
        for (var /** @type {?} */ cr = 0; cr < itemRefArray.length; cr++) {
            var /** @type {?} */ itemConfig = itemRefArray[cr];
            var /** @type {?} */ data = { label: itemConfig.label, disabled: itemConfig.disabled, onItemClick: itemConfig.onItemClick, iconStyleClass: itemConfig.iconStyleClass, icon: itemConfig.icon, onClickRoute: itemConfig.onClickRoute };
            data.iconStyleClass = 'glyphicon glyphicon-' + data.icon + ' pull-right';
            this.dropdownItemData.push(data);
        }
    };
    /**
     * @param {?} event
     * @param {?} itemData
     * @return {?}
     */
    ButtonDropdownComponent.prototype.itemClick = function (event, itemData) {
        itemData.onItemClick.emit(event);
        if (itemData.onClickRoute != null) {
            // this.router.navigate([itemData.onClickRoute]);
        }
    };
    return ButtonDropdownComponent;
}());
ButtonDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-btn-dropdown',
                template: "    \n      <div [class]=\"btnGroupStyleClass\" [attr.id]=\"elementId\">\n        <button type=\"button\" [class]=\"btnStyleClass\">{{label}}</button>\n        <button type=\"button\" [class]=\"btnDropdownStyle\" data-toggle=\"dropdown\">\n          <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n          <li class=\"lidisabled\" [ngClass]=\"{'lidisabled':itemData.disabled}\" *ngFor=\"let itemData of dropdownItemData\" (click)=\"itemClick($event,itemData)\">\n            <a style=\"cursor :pointer\">{{itemData.label}}<ng-container *ngIf=\"itemData.icon!=null\">\n            <span [class]=\"itemData.iconStyleClass\"></span>\n             </ng-container>\n            </a>\n          </li>\n        </ul>\n      </div>\n  ",
                styles: ["\n    .lidisabled {\n      pointer-events: none;\n      opacity: 0.6;\n      background-color: lightgray\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
ButtonDropdownComponent.ctorParameters = function () { return []; };
ButtonDropdownComponent.propDecorators = {
    'label': [{ type: Input },],
    'type': [{ type: Input },],
    'size': [{ type: Input },],
    'dropdownItemRef': [{ type: ContentChildren, args: [ItemComponent,] },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var ButtonComponent = (function () {
    function ButtonComponent() {
        this.onClick = new EventEmitter();
        this.elementId = 'button-' + new Date().getTime() + Math.random();
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = function () {
        this.btnStyleClass = 'btn ';
        this.btnSizeStyleClass = '';
        if (this.type.toLocaleLowerCase() == 'warning')
            this.btnStyleClass = this.btnStyleClass + 'btn-warning';
        else if (this.type.toLocaleLowerCase() == 'primary')
            this.btnStyleClass = this.btnStyleClass + 'btn-primary';
        else if (this.type.toLocaleLowerCase() == 'success')
            this.btnStyleClass = this.btnStyleClass + 'btn-success';
        else if (this.type.toLocaleLowerCase() == 'danger')
            this.btnStyleClass = this.btnStyleClass + 'btn-danger';
        else
            this.btnStyleClass = this.btnStyleClass + 'btn-default';
        this.iconStyleClass = 'glyphicon glyphicon-' + this.icon + ' pull-right';
        if (this.tooltipMessage == null)
            this.hasToolTip = false;
        if (this.size != null) {
            if (this.size == 'large')
                this.btnStyleClass = this.btnStyleClass.concat(' btn-lg');
            else if (this.size == 'small')
                this.btnStyleClass = this.btnStyleClass.concat(' btn-sm');
            else if (this.size == 'xsmall')
                this.btnStyleClass = this.btnStyleClass.concat(' btn-xs');
        }
        if (this.block) {
            this.btnStyleClass = this.btnStyleClass.concat(' btn-block');
        }
    };
    /**
     * @param {?} change
     * @return {?}
     */
    ButtonComponent.prototype.ngOnChanges = function (change) {
        /*console.log(change.isLoading);
          if(change.isLoading){
            this.disabled = true;
          }*/ //TODO : Fix
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ButtonComponent.prototype.btnClick = function (event) {
        this.onClick.emit(event);
        if (this.onClickRoute != null) {
            // this.router.navigate([this.onClickRoute]);
        }
    };
    return ButtonComponent;
}());
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-btn',
                template: "\n      <div>\n          <button (click)=\"btnClick($event)\"\n                  [class]=\"btnStyleClass\"\n                  [attr.fieldName] = \"fieldName\"\n                  [attr.disabled] = \"disabled ? true: null\"\n                  data-toggle=\"tooltip\" data-placement=\"bottom\" [attr.title]=\"tooltipMessage\"\n          >\n              <ng-container *ngIf=\"isLoading\">\n                  <span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span>&nbsp;&nbsp;&nbsp;\n              </ng-container>\n              {{label}}\n              <ng-container *ngIf=\"icon!=null\">\n                  &nbsp;<span [class]=\"iconStyleClass\"></span>\n              </ng-container>\n          </button>\n      </div>\n\n  ",
                styles: ["\n  .glyphicon-refresh-animate {\n    -animation: spin .7s infinite linear;\n    -webkit-animation: spin2 .7s infinite linear;\n}\n\n@-webkit-keyframes spin2 {\n    from { -webkit-transform: rotate(0deg);}\n    to { -webkit-transform: rotate(360deg);}\n}\n\n@keyframes spin {\n    from { transform: scale(1) rotate(0deg);}\n    to { transform: scale(1) rotate(360deg);}\n}"
                ]
            },] },
];
/**
 * @nocollapse
 */
ButtonComponent.ctorParameters = function () { return []; };
ButtonComponent.propDecorators = {
    'label': [{ type: Input },],
    'icon': [{ type: Input },],
    'type': [{ type: Input },],
    'onClickRoute': [{ type: Input },],
    'tooltipMessage': [{ type: Input },],
    'disabled': [{ type: Input },],
    'isLoading': [{ type: Input },],
    'size': [{ type: Input },],
    'block': [{ type: Input },],
    'fieldName': [{ type: Input },],
    'onClick': [{ type: Output },],
};

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var ItemSelectorService = (function () {
    /**
     * @param {?} _http
     */
    function ItemSelectorService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} parentRef
     * @param {?} serviceUrl
     * @param {?} methodType
     * @return {?}
     */
    ItemSelectorService.prototype.fetchData = function (parentRef, serviceUrl, methodType) {
        var _this = this;
        this.parentRef = parentRef;
        var /** @type {?} */ requestJson = {};
        var /** @type {?} */ headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var /** @type {?} */ options = new RequestOptions({ headers: headers, method: methodType });
        if (methodType == "post") {
            this._http.post(serviceUrl, requestJson, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setData();
            });
        }
    };
    /**
     * @return {?}
     */
    ItemSelectorService.prototype.setData = function () {
        this.parentRef.setData(this.responseData);
    };
    /**
     * @param {?} parentRef
     * @param {?} serviceUrl
     * @param {?} methodType
     * @return {?}
     */
    ItemSelectorService.prototype.fetchLazyData = function (parentRef, serviceUrl, methodType) {
        var _this = this;
        this.parentRef = parentRef;
        var /** @type {?} */ requestJson = {};
        var /** @type {?} */ headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var /** @type {?} */ options = new RequestOptions({ headers: headers, method: methodType });
        if (methodType == "post") {
            this._http.post(serviceUrl, requestJson, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setLazyData();
            });
        }
        else if (methodType == "get") {
            this._http.get(serviceUrl, options).subscribe(function (response) {
                _this.responseData = response.json();
            }, function (error) {
            }, function () {
                _this.setLazyData();
            });
        }
    };
    /**
     * @return {?}
     */
    ItemSelectorService.prototype.setLazyData = function () {
        this.parentRef.setLazyData(this.responseData);
    };
    return ItemSelectorService;
}());
ItemSelectorService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
ItemSelectorService.ctorParameters = function () { return [
    { type: Http, },
]; };

/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Ketan Gote, Pratik Kelwalkar, Dattaram Gawas
 *
 */
var ItemSelectorComponent = (function () {
    /**
     * @param {?} itemSelectorService
     */
    function ItemSelectorComponent(itemSelectorService) {
        this.itemSelectorService = itemSelectorService;
        this.availableRecords = new EventEmitter();
        this.selectedRecords = new EventEmitter();
        this.selectedData = [];
    }
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.ngAfterViewInit = function () {
        if (this.httpMethod && this.httpUrl) {
            this.itemSelectorService.fetchData(this, this.httpUrl, this.httpMethod);
        }
        else if (this.ItemSelectBindData) {
            this.setData(this.ItemSelectBindData);
        }
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.setStyles = function () {
        var /** @type {?} */ height;
        if (this.height) {
            height = this.height + 'px';
        }
        else {
            height = '300px';
        }
        var /** @type {?} */ styles = {
            'position': 'relative',
            'height': height
        };
        return styles;
    };
    /**
     * @param {?} httpResponse
     * @return {?}
     */
    ItemSelectorComponent.prototype.setData = function (httpResponse) {
        var /** @type {?} */ responsedata = httpResponse;
        var /** @type {?} */ dr = this.dataReader.split(".");
        for (var /** @type {?} */ ir = 0; ir < dr.length; ir++) {
            responsedata = responsedata[dr[ir]];
        }
        responsedata.forEach(function (option, index) {
            option['isSelected'] = false;
        });
        this.availableData = responsedata;
    };
    /**
     * @param {?} data
     * @param {?} index
     * @return {?}
     */
    ItemSelectorComponent.prototype.itemCkick = function (data, index) {
        this.switchingObject = data;
        this.objectIndex = index;
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.rightSwitch = function () {
        var _this = this;
        if (this.switchingObject != null) {
            if (!this.switchingObject.isSelected) {
                this.selectedData.push(this.switchingObject);
                this.switchingObject.isSelected = true;
                this.availableData.forEach(function (option, index) {
                    if (option.isSelected) {
                        _this.availableData.splice(index, 1);
                    }
                });
                this.switchingObject = null;
                this.dataEmitter();
            }
        }
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.leftSwitch = function () {
        var _this = this;
        if (this.switchingObject != null) {
            if (this.switchingObject.isSelected) {
                this.availableData.push(this.switchingObject);
                this.switchingObject.isSelected = false;
                this.selectedData.forEach(function (option, index) {
                    if (!option.isSelected) {
                        _this.selectedData.splice(index, 1);
                    }
                });
                this.switchingObject = null;
                this.dataEmitter();
            }
        }
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.upSwitch = function () {
        if (this.switchingObject != null) {
            if (this.switchingObject.isSelected) {
                var /** @type {?} */ index = this.selectedData[this.objectIndex];
                this.selectedData[this.objectIndex] = this.selectedData[this.objectIndex - 1];
                this.selectedData[this.objectIndex - 1] = index;
                this.switchingObject = null;
                this.dataEmitter();
            }
        }
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.downSwitch = function () {
        if (this.switchingObject != null) {
            if (this.switchingObject.isSelected) {
                if (this.selectedData.length - 1 != this.objectIndex) {
                    var /** @type {?} */ index = this.selectedData[this.objectIndex];
                    this.selectedData[this.objectIndex] = this.selectedData[this.objectIndex + 1];
                    this.selectedData[this.objectIndex + 1] = index;
                    this.switchingObject = null;
                    this.dataEmitter();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.moveTop = function () {
        var /** @type {?} */ tempArray = [];
        if (this.switchingObject != null && this.switchingObject.isSelected) {
            if (this.selectedData.length > 1) {
                tempArray[0] = this.selectedData[this.objectIndex];
                this.selectedData.splice(this.objectIndex, 1);
                this.selectedData.forEach(function (option) {
                    tempArray.push(option);
                });
                this.selectedData = tempArray;
                this.switchingObject = null;
                this.dataEmitter();
            }
        }
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.moveDown = function () {
        if (this.switchingObject != null) {
            if (this.switchingObject.isSelected && this.selectedData.length > 1) {
                this.selectedData.splice(this.objectIndex, 1);
                this.selectedData[this.selectedData.length] = this.switchingObject;
            }
        }
        this.switchingObject = null;
        this.dataEmitter();
    };
    /**
     * @return {?}
     */
    ItemSelectorComponent.prototype.dataEmitter = function () {
        this.availableRecords.emit(this.availableData);
        this.selectedRecords.emit(this.selectedData);
    };
    return ItemSelectorComponent;
}());
ItemSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'amexio-item-selector',
                template: "    \n    <div class=\"col-lg-5\">\n      <div class=\"list-group\" [ngStyle]=\"setStyles()\">\n        <button type=\"button\" class=\"list-group-item active\">Available</button>\n        <div style=\"height:100%;overflow-y: auto;position:relative;\" >\n          <button type=\"button\" class=\"list-group-item\"  *ngFor=\"let data of availableData; let i = index\" (click)=\"itemCkick(data,i)\">{{data[displayField]}}</button>\n        </div>\n       \n      </div>\n    </div>\n    <div class=\"col-lg-2\">\n        <div class=\"list-group text-center\" [ngStyle]=\"setStyles()\">\n            <button  type=\"button\" class=\"list-group-item active\" style=\"text-align: center\"><span class=\"glyphicon glyphicon-sound-stereo\"></span></button>\n          <amexio-btn (onClick)=\"moveTop()\"  [type]=\"'default'\" [tooltipMessage]=\"'move top'\" icon=\"triangle-top\"></amexio-btn>\n          <amexio-btn (onClick)=\"upSwitch()\" [type]=\"'default'\" [tooltipMessage]=\"'move up'\" icon=\"chevron-up\"></amexio-btn>\n          <amexio-btn (onClick)=\"leftSwitch()\" [type]=\"'default'\" [tooltipMessage]=\"'move left'\" icon=\"chevron-left\"></amexio-btn>\n          <amexio-btn (onClick)=\"rightSwitch()\" [type]=\"'default'\" [tooltipMessage]=\"'move right'\" icon=\"chevron-right\"></amexio-btn>\n          <amexio-btn (onClick)=\"downSwitch()\" [type]=\"'default'\" [tooltipMessage]=\"'move down'\" icon=\"chevron-down\"></amexio-btn>\n          <amexio-btn (onClick)=\"moveDown()\" [type]=\"'default'\" [tooltipMessage]=\"'bottom'\" icon=\"triangle-bottom\"></amexio-btn>\n      </div>\n      </div>\n    <div class=\"col-lg-5\">\n      <div class=\"list-group\" [ngStyle]=\"setStyles()\">\n        <button type=\"button\" class=\"list-group-item active\">selected</button>\n        <div style=\"height:100%;overflow-y: auto;position:relative;\" >\n        <button type=\"button\" class=\"list-group-item\"  *ngFor=\"let data of selectedData; let i = index\" (click)=\"itemCkick(data,i)\">{{data[displayField]}}</button>\n        </div>\n      </div>\n    </div>\n    \n  ",
                providers: [ItemSelectorService]
            },] },
];
/**
 * @nocollapse
 */
ItemSelectorComponent.ctorParameters = function () { return [
    { type: ItemSelectorService, },
]; };
ItemSelectorComponent.propDecorators = {
    'height': [{ type: Input },],
    'httpUrl': [{ type: Input },],
    'dataReader': [{ type: Input },],
    'httpMethod': [{ type: Input },],
    'ItemSelectBindData': [{ type: Input },],
    'displayField': [{ type: Input },],
    'valueField': [{ type: Input },],
    'availableRecords': [{ type: Output },],
    'selectedRecords': [{ type: Output },],
};

var AmexioWidgetModule = (function () {
    function AmexioWidgetModule() {
    }
    /**
     * @return {?}
     */
    AmexioWidgetModule.forRoot = function () {
        return {
            ngModule: AmexioWidgetModule,
            providers: [WidgetService]
        };
    };
    return AmexioWidgetModule;
}());
AmexioWidgetModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpModule
                ],
                declarations: [
                    TextInputComponent,
                    TreeViewComponent,
                    TreeDataTableComponent,
                    TextAreaComponent,
                    TabPaneComponent,
                    TabComponent,
                    RatingInputComponent,
                    RadioGroupComponent,
                    ProgressComponent,
                    PasswordInputComponent,
                    NumberInputComponent,
                    HiddenInputComponent,
                    FileuploadComponent,
                    EmailInputComponent,
                    DropDownComponent,
                    DateTimeComponent,
                    DataTableComponent,
                    ColumnComponent,
                    CheckBoxComponent,
                    CarouselComponent,
                    ButtonGroupActionComponent,
                    ButtonGroupComponent,
                    ButtonDropdownComponent,
                    ItemComponent,
                    ButtonComponent,
                    ItemSelectorComponent
                ],
                exports: [
                    TextInputComponent,
                    TreeViewComponent,
                    TreeDataTableComponent,
                    TextAreaComponent,
                    TabPaneComponent,
                    TabComponent,
                    RatingInputComponent,
                    RadioGroupComponent,
                    ProgressComponent,
                    PasswordInputComponent,
                    NumberInputComponent,
                    HiddenInputComponent,
                    FileuploadComponent,
                    EmailInputComponent,
                    DropDownComponent,
                    DateTimeComponent,
                    DataTableComponent,
                    ColumnComponent,
                    CheckBoxComponent,
                    CarouselComponent,
                    ButtonGroupComponent,
                    ButtonGroupActionComponent,
                    ButtonDropdownComponent,
                    ItemComponent,
                    ButtonComponent,
                    ItemSelectorComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
AmexioWidgetModule.ctorParameters = function () { return []; };

export { AmexioWidgetModule, CUSTOM_TEXT_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_TEXT_INPUT, TextInputComponent, FormInputBase, TreeViewComponent, TreeViewService, TreeDataTableComponent, TreeDataTableService, CUSTOM_TEXT_AREA_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_TEXTAREA_INPUT, TextAreaComponent, TabPaneComponent, TabComponent, RATING_CONTROL_VALUE_ACCESSOR, BASE_IMPL_RATING_INPUT, RatingInputComponent, COLUMN_SIZE, RadioGroupComponent, RadioGroupService, ProgressComponent, CUSTOM_PASSWORD_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_PASSWORD_INPUT, PasswordInputComponent, CUSTOM_NUMBER_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_NUMBER_INPUT, NumberInputComponent, ItemSelectorComponent, ItemSelectorService, CUSTOM_HIDDENINPUT_CONTROL_VALUE_ACCESSOR, HiddenInputComponent, BASE_IMPL_FILEUPLOAD_INPUT, FileuploadComponent, FileUploadService, CUSTOM_EMAIL_INPUT_CONTROL_VALUE_ACCESSOR, BASE_IMPL_EMAIL_INPUT, EmailInputComponent, CUSTOM_DROPDOWN_CONTROL_VALUE_ACCESSOR, BASE_IMPL_DROPDOWN_INPUT, DropDownComponent, DropDownService, DateTimeComponent, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, DataTableComponent, ColumnComponent, DataTableService, CHECK_COLUMN_SIZE, CheckBoxComponent, CheckBoxService, CarouselComponent, CarouselService, ButtonGroupActionComponent, ButtonGroupComponent, ButtonDropdownComponent, ItemComponent, ButtonComponent, WidgetService };
