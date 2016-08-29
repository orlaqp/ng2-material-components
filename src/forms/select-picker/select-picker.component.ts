import { Component, AfterViewInit, Input, ElementRef } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { ISelectionItem } from '../../models/selection-item';
declare var $: JQueryStatic;

// TODO: I need to come back to this
// require('bootstrap-select');

@Component({
    selector: 'select-picker',
    directives: [SelectControlValueAccessor],
    templateUrl: 'select-picker.component.pug',
})
export class SelectPickerComponent implements AfterViewInit {
    @Input() items: ISelectionItem[];

    // options
    @Input() liveSearch: boolean = true;
    @Input() allowMultiSelection: boolean = false;

    constructor(private el: ElementRef) { }

    ngAfterViewInit() {

        setTimeout(() => {
            $(this.el.nativeElement).find('.my-selectpicker')
                .selectpicker({
                    liveSearch: this.liveSearch,
                });
        }, 0);

    }
}
