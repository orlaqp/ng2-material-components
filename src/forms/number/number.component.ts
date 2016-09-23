import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
import { TypeEnum } from '../../models/type-enum';
import { MaskedInputDirective } from '../mask/masked-input.directive';
import { NumberMaskConfig } from '../mask/addons/create-number-mask';
import createNumberMask from '../mask/addons/create-number-mask';


@Component({
    selector: 'number',
    templateUrl: './number.component.pug',
    directives: [ REACTIVE_FORM_DIRECTIVES, MaskedInputDirective ],
    styles: ['.form-control { text-align: right; } '],
})
export class NumberComponent extends InputBase implements OnInit {

    @Input() fg: FormGroup;
    @Input() placeholder: string;
    @Input() field: string;
    @Input() label: string;
    @Input() floatingLabel: boolean;
    @Input() leftIcon: string;
    @Input() rightIcon: string;
    @Input() disabled: boolean;
    @Input() value: number;
    @Input() alt: boolean;

    @Input() decimal: boolean;
    @Input() currency: boolean;
    @Input() percent: boolean;
    @Input() prefix: string;
    @Input() suffix: string;
    @Input() decimalPlaces: number;

    // validators
    @Input() required: boolean;
    @Input() min: number;
    @Input() max: number;

    public numberMask: (rawValue: any) => string[];

    constructor(el: ElementRef) {
        super(el);
        this.dataType = TypeEnum.Number;
        this.inputType = 'number';
    }

    public addValidators(): void {
        this.addMinValidation();
        this.addMaxValidation();
    }

    public ngOnInit(): void {
        this.onInit();

        let maskConfig: NumberMaskConfig = {
            allowDecimal: this.decimal,
            prefix: this.prefix || '',
            suffix: this.suffix,
            decimalLimit: this.decimalPlaces,
        };

        // currency
        if (this.currency && !this.prefix) {
            maskConfig.prefix = '$ ';
            maskConfig.allowDecimal = true;
            maskConfig.decimalLimit = 2;
        }

        // percent
        if (this.percent) {
            maskConfig.suffix = ' %';
            maskConfig.allowDecimal = true;
            maskConfig.decimalLimit = 2;
        }

        this.numberMask = createNumberMask(maskConfig);
    }

    public ngOnDestroy(): void {

    }

}
