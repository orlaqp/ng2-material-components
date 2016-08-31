import { AfterViewInit, OnInit, ElementRef } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { ISelectionItem } from '../../models/selection-item';
import { InputBase } from '../input-base/input-base.component';
export declare class SelectPickerComponent extends InputBase implements OnInit, AfterViewInit {
    private el;
    fgd: FormGroupDirective;
    field: string;
    disabled: boolean;
    placeholder: string;
    items: ISelectionItem[];
    liveSearch: boolean;
    allowMultiSelection: boolean;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    addValidators(): void;
}
