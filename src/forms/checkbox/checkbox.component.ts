import { FormService } from '../form.service';
import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
import { TypeEnum } from '../../models/type-enum';

/**
 * Encapsulate checkbox control functionality
 *
 */
@Component({
    selector: 'checkbox',
    templateUrl: './checkbox.component.pug',
})
export class CheckboxComponent extends InputBase implements OnInit {
    @Input() class: string;
    @Input() fg: FormGroup;
    @Input() field: string;
    @Input() label: string;
    @Input() disabled: boolean;
    @Input() value: boolean;
    @Input() alt: boolean;

    constructor(el: ElementRef, formService: FormService) {
        super(el, formService);
        this.dataType = TypeEnum.Boolean;
    }

    public addValidators(): void { }

    public ngOnInit(): void {
        this.onInit();
    }

    public ngOnDestroy(): void {

    }

}
