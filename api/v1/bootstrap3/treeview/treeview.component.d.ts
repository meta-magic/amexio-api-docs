import { OnInit, SimpleChanges, TemplateRef, ChangeDetectorRef } from "@angular/core";
import { TreeViewService } from "./treeview.service";
export declare class TreeViewComponent implements OnInit {
    private treeViewService;
    private cdf;
    httpUrl: string;
    httpMethod: string;
    dataReader: string;
    dataTableBindData: any;
    selectedRecord: any;
    templates: any;
    parentTmp: TemplateRef<any>;
    data: any[];
    lazyNode: any;
    constructor(treeViewService: TreeViewService, cdf: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(change: SimpleChanges): void;
    setData(httpResponse: any): void;
    getResponseData(httpResponse: any): any;
    toggle(treeData: any): void;
    setLazyData(httpResponse: any): void;
    setSelectedRecord(treeData: any): void;
    emitData(treeData: any): void;
}
