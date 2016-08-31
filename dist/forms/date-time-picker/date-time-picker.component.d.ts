import { OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
export declare class DateTimePickerComponent extends InputBase implements AfterViewInit, OnInit {
    private el;
    fgd: FormGroupDirective;
    placeholder: string;
    field: string;
    label: string;
    floatingLabel: boolean;
    disabled: boolean;
    format: string;
    minDate: string;
    maxDate: string;
    disabledDates: string[] | moment.Moment[] | Date[];
    enabledDates: string[] | moment.Moment[] | Date[];
    sideBySide: boolean;
    inline: boolean;
    constructor(el: ElementRef);
    addValidators(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private _getOptions();
    private _dateFormatted(d);
}
