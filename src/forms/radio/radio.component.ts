import { Component, Input, Inject, Host, forwardRef, ElementRef, AfterViewInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroupDirective } from '@angular/forms';
import { RadioGroupComponent } from './radio-group.component';

/**
 * Encapsulate checkbox control functionality
 *
 */
@Component({
    selector: 'radio',
    directives: [ REACTIVE_FORM_DIRECTIVES ],
    templateUrl: './radio.component.pug',
})
export class RadioComponent implements AfterViewInit {

    @Input() fgd: FormGroupDirective;
    @Input() field: string;
    @Input() label: string;
    @Input() disabled: boolean;
    @Input() nane: string;

    @Input() value: string;

    get groupName() : string {
        return this.radioGroup.field.replace('.', '_');
    }

    constructor(
        private el: ElementRef,
        @Host() @Inject(forwardRef(() => RadioGroupComponent)) private radioGroup: RadioGroupComponent) { }

    public ngAfterViewInit() {
        if (this.radioGroup.defaultValue === this.value) {
            this.el.nativeElement.getElementsByTagName('input')[0].checked = true;
            setTimeout(() => { this._updateValue(); }, 0);
        }
    }

    public check(): void {
        this._updateValue();
    }

    private _updateValue(): void {
        this.radioGroup.control.updateValue(this.value);
    }

}
