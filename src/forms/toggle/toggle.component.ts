import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, DefaultValueAccessor, FormGroupDirective } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
import { guid } from '../../utils/utilities';

@Component({
    selector: 'toggle',
    directives: [ REACTIVE_FORM_DIRECTIVES, DefaultValueAccessor ],
    templateUrl: './toggle.component.pug',
})
export class ToggleComponent extends InputBase implements OnInit {

    @Input() fgd: FormGroupDirective;
    @Input() placeholder: string;
    @Input() field: string;
    @Input() label: string;
    @Input() value: string;
    @Input() disabled: boolean;
    @Input() color: string = '';

    public identifier: string;

    constructor(el: ElementRef) {
        super(el);
    }

    public addValidators(): void { }

    public ngOnInit(): void {
        this.onInit();

        this.identifier = guid();
    }

    public ngOnDestroy(): void {

    }

}
