import { ElementRef } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
export declare class RadioGroupComponent extends InputBase {
    fgd: FormGroupDirective;
    field: string;
    disabled: boolean;
    defaultValue: string;
    constructor(el: ElementRef);
    ngOnInit(): void;
    addValidators(): void;
}
