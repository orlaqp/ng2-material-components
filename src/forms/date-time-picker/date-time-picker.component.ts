import { Component, OnInit, AfterViewInit, Input, ElementRef } from '@angular/core';
// import { SelectControlValueAccessor } from '@angular/forms';
import { REACTIVE_FORM_DIRECTIVES, DefaultValueAccessor, FormGroupDirective } from '@angular/forms';
import { ISelectionItem } from '../../models/selection-item';
import { InputBase } from '../input-base/input-base.component';
declare var $: JQueryStatic;

// TODO: I need to come back to this
// require('bootstrap-select');

@Component({
    selector: 'date-time-picker',
    directives: [ REACTIVE_FORM_DIRECTIVES, DefaultValueAccessor ],
    templateUrl: 'date-time-picker.component.pug',
})
export class DateTimePickerComponent extends InputBase implements AfterViewInit, OnInit {
    @Input() fgd: FormGroupDirective;
    @Input() placeholder: string;
    @Input() field: string;
    @Input() label: string;
    @Input() floatingLabel: boolean;
    @Input() leftIcon: string;
    @Input() rightIcon: string;
    @Input() disabled: boolean;

    @Input() items: ISelectionItem[];

    // options
    @Input() liveSearch: boolean = true;
    @Input() allowMultiSelection: boolean = false;

    constructor(private el: ElementRef) {
        super(el);
    }

    public addValidators(): void { }

    public ngOnInit(): void {
        this.onInit();
    }

    ngAfterViewInit() {

        setTimeout(() => {
            $(this.el.nativeElement).find('.date-time-picker')
                .datetimepicker({});
        }, 0);

    }
}
