import { Directive, ElementRef, Input } from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';
import createTextMaskInputElement from './create-text-mask-input-element';

export interface TextMaskConfig {
    control: FormControl;
    mask: string;
    guide: boolean;
    placeholderChar: string;
    pipe: any;
    keepCharPositions: boolean;
    onReject: any;
    onAccept: any;
};

@Directive({
    host: {
        '(input)': 'onInput()',
    },
    selector: 'input[textMask]',
    // providers: [
    //     { provide: NG_VALUE_ACCESSOR, useExisting: MaskedInputDirective, multi: true },
    // ],
})
export class MaskedInputDirective implements ControlValueAccessor {

    @Input('textMask')
    textMaskConfig: TextMaskConfig = {
        control: new FormControl(),
        mask: '',
        guide: true,
        placeholderChar: '_',
        pipe: undefined,
        keepCharPositions: false,
        onReject: undefined,
        onAccept: undefined,
    };

    private textMaskInputElement: any;
    private inputElement: HTMLInputElement;

    constructor(inputElement: ElementRef) {
        this.inputElement = inputElement.nativeElement;
    }

    writeValue(value: any) {
        this.textMaskInputElement.update(value);
        this.textMaskConfig.control.setValue(value, { onlySelf: true, emitEvent: false });
    }

    registerOnChange(fn: (value: any) => void) {
        this.textMaskConfig.control.valueChanges.subscribe(fn);
    }

    registerOnTouched() { }

    ngOnInit() {
        this.textMaskInputElement = createTextMaskInputElement(
            Object.assign({ inputElement: this.inputElement }, this.textMaskConfig)
        );

        // This ensures that initial model value gets masked
        setTimeout(() => this.onInput());
    }

    onInput() {
        this.textMaskInputElement.update();
        this.writeValue(this.inputElement.value);
    }
}

export {MaskedInputDirective as Directive}
