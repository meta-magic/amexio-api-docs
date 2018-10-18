import { OnInit, AfterViewInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { DropDownService } from "./dropdown.service";
import { FormInputBase } from "../baseclass/form.base.class";
export declare const CUSTOM_DROPDOWN_CONTROL_VALUE_ACCESSOR: any;
export declare const BASE_IMPL_DROPDOWN_INPUT: any;
export declare class DropDownComponent extends FormInputBase implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked {
    private dropDownService;
    fieldLabel: string;
    placeholder: string;
    fieldName: string;
    allowBlank: string;
    errorMsg: string;
    emptyText: string;
    disabled: boolean;
    dataReader: string;
    httpMethod: string;
    httpUrl: string;
    displayField: string;
    valueField: string;
    data: any;
    multiSelect: boolean;
    maxMultiSelect: string;
    multiSelectHelp: boolean;
    searchBox: boolean;
    multiCountDisplay: string;
    width: string;
    onSingleSelect: any;
    onMultiSelect: any;
    multiSelectValues: any[];
    elementId: string;
    viewData: any[];
    isValid: boolean;
    responseData: any;
    constructor(dropDownService: DropDownService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    setRowData(event: any): void;
    addSingleSelectedData(value: any): void;
    addMultiSelectedData(val: string): void;
    setData(httpResponse: any): void;
    private innerValue;
    private onTouchedCallback;
    private onChangeCallback;
    value: any;
    onBlur(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    validate(): void;
    isValidInput(): boolean;
}
