import { OnInit, ElementRef } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
export declare class NumberComponent extends InputBase implements OnInit {
    fgd: FormGroupDirective;
    placeholder: string;
    field: string;
    label: string;
    floatingLabel: boolean;
    leftIcon: string;
    rightIcon: string;
    disabled: boolean;
    value: number;
    decimal: boolean;
    currency: boolean;
    percent: boolean;
    prefix: string;
    suffix: string;
    decimalPlaces: number;
    required: boolean;
    min: number;
    max: number;
    numberMask: (rawValue: any) => string[];
    constructor(el: ElementRef);
    addValidators(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
