import { OnInit, ElementRef } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
export declare class CheckboxComponent extends InputBase implements OnInit {
    fgd: FormGroupDirective;
    field: string;
    label: string;
    disabled: boolean;
    value: boolean;
    constructor(el: ElementRef);
    addValidators(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
