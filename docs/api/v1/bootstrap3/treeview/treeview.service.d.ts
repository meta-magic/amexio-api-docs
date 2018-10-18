import { Http } from "@angular/http";
export declare class TreeViewService {
    private _http;
    parentRef: any;
    responseData: any;
    constructor(_http: Http);
    fetchData(parentRef: any, serviceUrl: string, methodType: string): void;
    setData(): void;
    fetchLazyData(parentRef: any, serviceUrl: string, methodType: string): void;
    setLazyData(): void;
}
