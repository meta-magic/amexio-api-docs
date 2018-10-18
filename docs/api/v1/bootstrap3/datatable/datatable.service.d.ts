import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
export declare class DataTableService {
    private _http;
    responseData: any;
    parentRef: any;
    constructor(_http: Http);
    fetchData(serviceUrl: string, methodType: string): Observable<any>;
}
