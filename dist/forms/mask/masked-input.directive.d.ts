import { ElementRef } from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';
export interface TextMaskConfig {
    control: FormControl;
    mask: string;
    guide: boolean;
    placeholderChar: string;
    pipe: any;
    keepCharPositions: boolean;
    onReject: any;
    onAccept: any;
}
export declare class MaskedInputDirective implements ControlValueAccessor {
    textMaskConfig: TextMaskConfig;
    private textMaskInputElement;
    private inputElement;
    constructor(inputElement: ElementRef);
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(): void;
    ngOnInit(): void;
    onInput(): void;
}
export { MaskedInputDirective as Directive };
