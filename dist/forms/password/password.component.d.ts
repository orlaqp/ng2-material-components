import { OnInit, ElementRef } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
import { IValidationInfo } from '../../models/validation-info';
export declare class PasswordComponent extends InputBase implements OnInit {
    fgd: FormGroupDirective;
    placeholder: string;
    field: string;
    label: string;
    floatingLabel: boolean;
    leftIcon: string;
    rightIcon: string;
    disabled: boolean;
    value: string;
    required: boolean;
    min: number;
    max: number;
    enforceComplexity: boolean;
    validations: IValidationInfo[];
    constructor(el: ElementRef);
    addValidators(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
