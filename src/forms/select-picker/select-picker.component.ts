import { Component, AfterViewInit, OnInit, Input, ElementRef } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, SelectControlValueAccessor, FormGroupDirective } from '@angular/forms';
import { ISelectionItem } from '../../models/selection-item';
import { InputBase } from '../input-base/input-base.component';
declare var $: JQueryStatic;

// TODO: I need to come back to this
// require('bootstrap-select');

@Component({
    selector: 'select-picker',
    directives: [REACTIVE_FORM_DIRECTIVES, SelectControlValueAccessor],
    templateUrl: 'select-picker.component.pug',
})
export class SelectPickerComponent extends InputBase implements OnInit, AfterViewInit {

    @Input() fgd: FormGroupDirective;
    @Input() field: string;
    @Input() disabled: boolean;
    @Input() placeholder: string;

    @Input() items: ISelectionItem[];
    // options
    @Input() liveSearch: boolean = true;
    @Input() allowMultiSelection: boolean = false;

    constructor(private el: ElementRef) {
        super(el);
    }

    public ngOnInit(): void {
        this.onInit();
    }

    ngAfterViewInit() {

        setTimeout(() => {
            $(this.el.nativeElement).find('.my-selectpicker')
                .selectpicker({
                    liveSearch: this.liveSearch,
                });
        }, 0);

    }

    public addValidators(): void { }
}
