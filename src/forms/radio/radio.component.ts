import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroupDirective } from '@angular/forms';
import { RadioGroupService } from './radio-group.service';

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
        return this._service.fieldName.replace('.', '_');
    }

    constructor(
        private el: ElementRef,
        // @Host() @Inject(forwardRef(() => RadioGroupComponent)) private radioGroup: RadioGroupComponent
        private _service: RadioGroupService
    ) { }

    public ngAfterViewInit() {
        let ele: any = this.el.nativeElement.getElementsByTagName('input')[0];

        this._service.optionSelected$.subscribe((value) => {
            ele.checked = value === this.value;
        });

        if (this._service.defaultValue === this.value) {
            window.setTimeout(() => { this._service.announceSelectedOption(this.value); }, 0);
        }
    }

    public check(): void {
        this._updateValue();
    }

    private _updateValue(): void {
        this._service.announceSelectedOption(this.value);
    }

}
