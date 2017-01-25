import { FormService } from '../form.service';
// from here: https://github.com/pleerock/ng2-radio-group

import { Component, Input, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
import { RadioGroupService } from './radio-group.service';

@Component({
    selector: 'radio-group',
    templateUrl: './radio-group.component.pug',
    providers: [ RadioGroupService ],
    // encapsulation: ViewEncapsulation.None,
})
export class RadioGroupComponent extends InputBase {

    @Input() fg: FormGroup;
    @Input() field: string;
    @Input() disabled: boolean = false;
    @Input() defaultValue: string;
    @Input() alt: boolean;

    constructor(el: ElementRef, private service: RadioGroupService, formService: FormService) {
        super(el, formService);

        this.service.optionSelected$.subscribe((value) => {
            this.control.setValue(value);
        });
    }

    public ngOnInit(): void {
        this.onInit();

        this.service.fieldName = this.field;
        this.service.defaultValue = this.defaultValue;
    }

    public addValidators(): void { }

}
