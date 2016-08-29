import {
    Component,
    Input,
    OnInit,
    ElementRef } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, DefaultValueAccessor, FormGroupDirective } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
import autosize from './autosize';

// TODO: I need to comeback to this
// let autosize = require('autosize');

@Component({
    selector: 'text-area',
    directives: [ REACTIVE_FORM_DIRECTIVES, DefaultValueAccessor ],
    templateUrl: './text-area.component.pug',
})
export class TextAreaComponent extends InputBase implements OnInit {

    @Input() fgd: FormGroupDirective;
    @Input() placeholder: string;
    @Input() field: string;
    @Input() label: string;
    @Input() floatingLabel: boolean;
    @Input() leftIcon: string;
    @Input() disabled: boolean;
    @Input() value: string;

    // validators
    @Input() required: boolean;
    @Input() min: number;
    @Input() max: number;
    @Input() autosize: boolean = true;
    @Input() rows: number = 3;

    constructor(el: ElementRef) {
        super(el);
    }

    public addValidators(): void {
        if (this.min) {
            this.validations.push(InputBase.minValidator(this.min));
        }

        if (this.max) {
            this.validations.push(InputBase.maxValidator(this.max));
        }
    }

    public ngOnInit(): void {
        this.onInit();

        if (this.autosize) {
            autosize(this._el.nativeElement.getElementsByClassName('form-control'));
        }
    }

    public ngOnDestroy(): void {

    }

}
