import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, DefaultValueAccessor, FormGroup } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
import { CustomValidators } from '../validators/custom-validators';
import { ValidationInfo } from  '../../models/validation-info';

@Component({
    selector: 'email',
    directives: [ REACTIVE_FORM_DIRECTIVES, DefaultValueAccessor ],
    templateUrl: '../input-base/input-base.component.pug',
})
export class EmailComponent extends InputBase implements OnInit {

    @Input() fg: FormGroup;
    @Input() placeholder: string;
    @Input() field: string;
    @Input() label: string;
    @Input() floatingLabel: boolean;
    @Input() leftIcon: string;
    @Input() rightIcon: string;
    @Input() disabled: boolean;
    @Input() value: string;
    @Input() alt: boolean;

    // validators
    @Input() required: boolean;

    public validations: ValidationInfo[];

    constructor(el: ElementRef) {
        super(el);
        this.inputType = 'email';
    }

    public addValidators(): void {
        this.validations.push(
            {
                validator: CustomValidators.emailAddress,
                type: 'invalidEmail',
                message: `Email address is invalid`,
            }
        );
    }

    public ngOnInit(): void {
        this.onInit();

        // assign default icon
        if (!this.leftIcon) {
            this.leftIcon = 'email';
        }
    }

    public ngOnDestroy(): void {

    }

}
