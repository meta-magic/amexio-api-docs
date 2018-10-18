import { EventEmitter, OnInit } from '@angular/core';
export declare class ItemComponent implements OnInit {
    label: string;
    disabled: boolean;
    icon: string;
    onClickRoute: string;
    iconStyleClass: string;
    onItemClick: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
}
