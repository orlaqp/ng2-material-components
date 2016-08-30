import { Component, OnInit, AfterViewInit, Input, ElementRef } from '@angular/core';
// import { SelectControlValueAccessor } from '@angular/forms';
import { REACTIVE_FORM_DIRECTIVES, DefaultValueAccessor, FormGroupDirective } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
declare var $: JQueryStatic;

@Component({
    selector: 'date-time-picker',
    directives: [REACTIVE_FORM_DIRECTIVES, DefaultValueAccessor],
    templateUrl: 'date-time-picker.component.pug',
})
export class DateTimePickerComponent extends InputBase implements AfterViewInit, OnInit {
    @Input() fgd: FormGroupDirective;
    @Input() placeholder: string;
    @Input() field: string;
    @Input() label: string;
    @Input() floatingLabel: boolean;
    @Input() disabled: boolean;

    // options
    // format reference: http://momentjs.com/docs/#/displaying/
    @Input() format: string = 'MM/DD/YYYY hh:mm:ss A';
    @Input() minDate: string;
    @Input() maxDate: string;
    @Input() disabledDates: string[] | moment.Moment[] | Date[];
    @Input() enabledDates: string[] | moment.Moment[] | Date[];
    @Input() sideBySide: boolean;
    @Input() inline: boolean;

    constructor(private el: ElementRef) {
        super(el);
    }

    public addValidators(): void { }

    public ngOnInit(): void {
        this.onInit();
    }

    ngAfterViewInit() {

        let options = this._getOptions();

        let ele = $(this.el.nativeElement).find('.date-time-picker');
        ele.datetimepicker(options)
            .on('dp.change', (data: any) => {
                let d: moment.Moment = data.date;
                this.control.updateValue(this._dateFormatted(d));
            });
    }

    private _getOptions(): any {
        let options = {
            icons: {
                time: 'zmdi zmdi-time',
                date: 'zmdi zmdi-calendar',
                up: 'zmdi zmdi-chevron-up',
                down: 'zmdi zmdi-chevron-down',
                previous: 'zmdi zmdi-chevron-left',
                next: 'zmdi zmdi-chevron-right',
                today: 'zmdi zmdi-check',
                clear: 'zmdi zmdi-delete',
                close: 'zmdi zmdi-close',
            },
        };

        Object.assign(options, {
            format: this.format,
            minDate: this.minDate,
            maxDate: this.maxDate,
            disabledDates: this.disabledDates,
            enabledDates: this.enabledDates,
            sideBySide: this.sideBySide,
            inline: this.inline,
        });

        return options;
    }

    private _dateFormatted(d: moment.Moment) {
        return d.format(this.format);
    }
}
