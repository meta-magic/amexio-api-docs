import { OnInit } from '@angular/core';
import { FileUploadService } from "./fileupload.service";
import { FormInputBase } from "../baseclass/form.base.class";
export declare const BASE_IMPL_FILEUPLOAD_INPUT: any;
export declare class FileuploadComponent extends FormInputBase implements OnInit {
    private fileUploadService;
    fieldLabel: string;
    url: string;
    httpMethod: string;
    fileType: string;
    multipleFile: string;
    fileSize: string;
    fileName: string;
    constructor(fileUploadService: FileUploadService);
    ngOnInit(): void;
    uploadFile(event: any): void;
    setData(requestData: any): void;
}
