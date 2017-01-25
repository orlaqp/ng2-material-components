import { FormService } from '../form.service';
import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';

@Component({
    selector: 'text-box',
    templateUrl: '../input-base/input-base.component.pug',
})
export class TextBoxComponent extends InputBase implements OnInit {

    @Input() fg: FormGroup;
    @Input() placeholder: string;
    @Input() field: string;
    @Input() label: string;
    @Input() floatingLabel: boolean;
    @Input() leftIcon: string;
    @Input() rightIcon: string;
    @Input() value: string;
    @Input() disabled: boolean;
    @Input() alt: boolean;

    // validators
    @Input() required: boolean;
    @Input() min: number;
    @Input() max: number;

    constructor(el: ElementRef, formService: FormService) {
        super(el, formService);
    }

    public addValidators(): void {
        if (this.min) {
            this.addValidation(InputBase.minValidator(this.min));
        }

        if (this.max) {
            this.addValidation(InputBase.maxValidator(this.max));
        }
    }

    public ngOnInit(): void {
        this.onInit();
    }

    public ngOnDestroy(): void {

    }

}
