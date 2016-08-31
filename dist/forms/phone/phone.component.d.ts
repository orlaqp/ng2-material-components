import { OnInit, ElementRef } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
export declare class PhoneComponent extends InputBase implements OnInit {
    fgd: FormGroupDirective;
    placeholder: string;
    field: string;
    label: string;
    floatingLabel: boolean;
    leftIcon: string;
    rightIcon: string;
    disabled: boolean;
    value: number;
    fax: boolean;
    required: boolean;
    constructor(el: ElementRef);
    addValidators(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
