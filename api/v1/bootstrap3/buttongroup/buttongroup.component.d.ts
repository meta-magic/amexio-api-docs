import { AfterContentInit, OnInit, QueryList } from '@angular/core';
import { ButtonGroupActionComponent } from "./buttongroup.action.component";
export declare class ButtonGroupComponent implements OnInit, AfterContentInit {
    size: string;
    btnGroupStyleClass: string;
    elementId: any;
    buttonData: any[];
    buttonComponentRef: QueryList<ButtonGroupActionComponent>;
    constructor();
    ngAfterContentInit(): void;
    ngOnInit(): void;
    createConfig(): void;
    buttonClick(event: any, btnObj: any): void;
    createButtonConfig(): void;
}
