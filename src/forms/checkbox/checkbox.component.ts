import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, CheckboxControlValueAccessor, FormGroupDirective } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
import { TypeEnum } from '../../models/type-enum';

/**
 * Encapsulate checkbox control functionality
 *
 */
@Component({
    selector: 'checkbox',
    directives: [ REACTIVE_FORM_DIRECTIVES, CheckboxControlValueAccessor ],
    templateUrl: './checkbox.component.pug',
})
export class CheckboxComponent extends InputBase implements OnInit {

    @Input() fgd: FormGroupDirective;
    @Input() field: string;
    @Input() label: string;
    @Input() disabled: boolean;
    @Input() value: boolean;

    constructor(el: ElementRef) {
        super(el);
        this.dataType = TypeEnum.Boolean;
    }

    public addValidators(): void { }

    public ngOnInit(): void {
        this.onInit();
    }

    public ngOnDestroy(): void {

    }

}
