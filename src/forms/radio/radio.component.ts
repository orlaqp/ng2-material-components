import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroupDirective } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
import { TypeEnum } from '../../models/type-enum';

/**
 * Encapsulate checkbox control functionality
 *
 */
@Component({
    selector: 'radio',
    directives: [ REACTIVE_FORM_DIRECTIVES ],
    templateUrl: './radio.component.pug',
})
export class RadioComponent extends InputBase implements OnInit {

    @Input() fgd: FormGroupDirective;
    @Input() field: string;
    @Input() label: string;
    @Input() disabled: boolean;
    @Input() nane: string;
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
