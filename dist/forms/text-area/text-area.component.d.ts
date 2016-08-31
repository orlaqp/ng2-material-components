import { OnInit, ElementRef } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
export declare class TextAreaComponent extends InputBase implements OnInit {
    fgd: FormGroupDirective;
    placeholder: string;
    field: string;
    label: string;
    floatingLabel: boolean;
    leftIcon: string;
    disabled: boolean;
    value: string;
    required: boolean;
    min: number;
    max: number;
    autosize: boolean;
    rows: number;
    constructor(el: ElementRef);
    addValidators(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
