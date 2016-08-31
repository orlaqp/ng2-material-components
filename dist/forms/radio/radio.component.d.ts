import { ElementRef, AfterViewInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { RadioGroupComponent } from './radio-group.component';
export declare class RadioComponent implements AfterViewInit {
    private el;
    private radioGroup;
    fgd: FormGroupDirective;
    field: string;
    label: string;
    disabled: boolean;
    nane: string;
    value: string;
    groupName: string;
    constructor(el: ElementRef, radioGroup: RadioGroupComponent);
    ngAfterViewInit(): void;
    check(): void;
    private _updateValue();
}
