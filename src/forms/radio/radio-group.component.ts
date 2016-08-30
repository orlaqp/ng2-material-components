// from here: https://github.com/pleerock/ng2-radio-group

import { Component, Input, ElementRef } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
import { RadioComponent } from './radio.component';

@Component({
    selector: 'radio-group',
    directives: [ RadioComponent ],
    templateUrl: './radio-group.component.pug',
    // encapsulation: ViewEncapsulation.None,
})
export class RadioGroupComponent extends InputBase {

    @Input() fgd: FormGroupDirective;
    @Input() field: string;
    @Input() disabled: boolean = false;
    @Input() defaultValue: string;

    constructor(el: ElementRef) {
        super(el);
    }

    public ngOnInit(): void {
        this.onInit();
    }

    public addValidators(): void { }

}
