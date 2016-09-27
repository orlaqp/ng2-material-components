import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
import { isMobile } from '../../utils/utilities';

@Component({
    selector: 'date-time-picker',
    templateUrl: 'date-time-picker.component.pug',
})
export class DateTimePickerComponent extends InputBase implements OnInit {
    @Input() fg: FormGroup;
    @Input() placeholder: string;
    @Input() field: string;
    @Input() label: string;
    @Input() floatingLabel: boolean;
    @Input() disabled: boolean;
    @Input() alt: boolean;
    @Input() required: boolean;

    @Input() dateFormat = 'DD-MM-YYYY hh:mm';
    @Input() hour = 23;
    @Input() minute = 59;
    @Input() closeOnSelect = true;

     constructor(private el: ElementRef) {
        super(el);
    }


    ngOnInit() {
         this.onInit();
    }

     public addValidators(): void { }
}
