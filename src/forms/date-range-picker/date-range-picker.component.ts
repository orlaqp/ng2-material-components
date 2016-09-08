import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { IDateRangePickerLocale } from './date-range-picker-locale';
import { IDateRangeOptions } from './date-range-options';
import { pickerTemplate } from './date-range-picker.helper';

@Component({
    moduleId: module.id,
    selector: 'date-range-picker',
    directives: [REACTIVE_FORM_DIRECTIVES],
    templateUrl: '../input-base/input-base.component.pug',
})
export class DateRangePickerComponent implements OnInit {

    @Input() options: IDateRangeOptions = {};

    private element: JQuery;
    private parentEl: JQuery;
    private container: JQuery;
    private opts: IDateRangeOptions;

    private defaultOptions: IDateRangeOptions = {
        parentEl: 'body',
        startDate: moment().startOf('day'),
        endDate: moment().endOf('day'),
        minDate: false,
        maxDate: false,
        dateLimit: false,
        autoApply: false,
        singleDatePicker: false,
        showDropdowns: false,
        showWeekNumbers: false,
        showISOWeekNumbers: false,
        showCustomRangeLabel: true,
        timePicker: false,
        timePicker24Hour: false,
        timePickerIncrement: 1,
        timePickerSeconds: false,
        linkedCalendars: true,
        autoUpdateInput: true,
        alwaysShowCalendars: false,
        ranges: {},
    };

    // other options
    private callback: Function;
    private isShowing: boolean = false;
    private leftCalendar: any = {};
    private rightCalendar: any = {};

    constructor(private ele: ElementRef) {
        this.element = $(ele.nativeElement);
    }

    ngOnInit() {

        if (this.element.hasClass('dropup'))
            this.opts.drops = 'up';

        this.opts.locale = {
            direction: 'ltr',
            format: 'MM/DD/YYYY',
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek(),
        };

        this.callback = function() { };

        //custom options from user
        if (typeof this.options !== 'object' || this.options === null)
            this.options = {};

        //allow setting options with data attributes
        //data-api options will be overwritten with custom javascript options
        // this.options = $.extend(this.element.data(), options);

        // check if we need to use a custom template
        if (typeof this.options.template !== 'string' && !(this.options.template instanceof $))
            this.options.template = pickerTemplate;

        // find out the parent element
        this.parentEl = (this.options.parentEl && $(this.options.parentEl).length)
            ? $(this.options.parentEl) : $(this.parentEl);

        this.container = $(this.options.template).appendTo(this.parentEl);

        this._handleOverrides();
        this._processInitialValues();
    }

    private _handleOverrides(): void {
        let options = this.options;

        if (typeof options.locale === 'object') {

            if (typeof options.locale.direction === 'string')
                this.opts.locale.direction = options.locale.direction;

            if (typeof options.locale.format === 'string')
                this.opts.locale.format = options.locale.format;

            if (typeof options.locale.separator === 'string')
                this.opts.locale.separator = options.locale.separator;

            if (typeof options.locale.daysOfWeek === 'object')
                this.opts.locale.daysOfWeek = options.locale.daysOfWeek.slice();

            if (typeof options.locale.monthNames === 'object')
                this.opts.locale.monthNames = options.locale.monthNames.slice();

            if (typeof options.locale.firstDay === 'number')
                this.opts.locale.firstDay = options.locale.firstDay;

            if (typeof options.locale.applyLabel === 'string')
                this.opts.locale.applyLabel = options.locale.applyLabel;

            if (typeof options.locale.cancelLabel === 'string')
                this.opts.locale.cancelLabel = options.locale.cancelLabel;

            if (typeof options.locale.weekLabel === 'string')
                this.opts.locale.weekLabel = options.locale.weekLabel;

            if (typeof options.locale.customRangeLabel === 'string')
                this.opts.locale.customRangeLabel = options.locale.customRangeLabel;

        }
        this.container.addClass(this.opts.locale.direction);

        if (typeof options.startDate === 'string')
            this.opts.startDate = moment(options.startDate, this.opts.locale.format);

        if (typeof options.endDate === 'string')
            this.opts.endDate = moment(options.endDate, this.opts.locale.format);

        if (typeof options.minDate === 'string')
            this.opts.minDate = moment(options.minDate, this.opts.locale.format);

        if (typeof options.maxDate === 'string')
            this.opts.maxDate = moment(options.maxDate, this.opts.locale.format);

        if (typeof options.startDate === 'object')
            this.opts.startDate = moment(options.startDate);

        if (typeof options.endDate === 'object')
            this.opts.endDate = moment(options.endDate);

        if (typeof options.minDate === 'object')
            this.opts.minDate = moment(options.minDate);

        if (typeof options.maxDate === 'object')
            this.opts.maxDate = moment(options.maxDate);

        // sanity check for bad options
        if (this.opts.minDate && this.opts.startDate.isBefore(this.opts.minDate))
            this.opts.startDate = this.opts.minDate.clone();

        // sanity check for bad options
        if (this.opts.maxDate && this.opts.endDate.isAfter(this.opts.maxDate))
            this.opts.endDate = this.opts.maxDate.clone();

        if (typeof options.applyClass === 'string')
            this.applyClass = options.applyClass;

        if (typeof options.cancelClass === 'string')
            this.cancelClass = options.cancelClass;

        if (typeof options.dateLimit === 'object')
            this.opts.dateLimit = options.dateLimit;

        if (typeof options.opens === 'string')
            this.opts.opens = options.opens;

        if (typeof options.drops === 'string')
            this.drops = options.drops;

        if (typeof options.showWeekNumbers === 'boolean')
            this.opts.showWeekNumbers = options.showWeekNumbers;

        if (typeof options.showISOWeekNumbers === 'boolean')
            this.opts.showISOWeekNumbers = options.showISOWeekNumbers;

        if (typeof options.buttonClasses === 'string')
            this.opts.buttonClasses = options.buttonClasses;

        if (typeof options.buttonClasses === 'object')
            this.opts.buttonClasses = options.buttonClasses.join(' ');

        if (typeof options.showDropdowns === 'boolean')
            this.opts.showDropdowns = options.showDropdowns;

        if (typeof options.showCustomRangeLabel === 'boolean')
            this.opts.showCustomRangeLabel = options.showCustomRangeLabel;

        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker)
                this.opts.endDate = this.opts.startDate.clone();
        }

        if (typeof options.timePicker === 'boolean')
            this.opts.timePicker = options.timePicker;

        if (typeof options.timePickerSeconds === 'boolean')
            this.opts.timePickerSeconds = options.timePickerSeconds;

        if (typeof options.timePickerIncrement === 'number')
            this.opts.timePickerIncrement = options.timePickerIncrement;

        if (typeof options.timePicker24Hour === 'boolean')
            this.opts.timePicker24Hour = options.timePicker24Hour;

        if (typeof options.autoApply === 'boolean')
            this.opts.autoApply = options.autoApply;

        if (typeof options.autoUpdateInput === 'boolean')
            this.opts.autoUpdateInput = options.autoUpdateInput;

        if (typeof options.linkedCalendars === 'boolean')
            this.opts.linkedCalendars = options.linkedCalendars;

        if (typeof options.isInvalidDate === 'function')
            this.opts.isInvalidDate = options.isInvalidDate;

        if (typeof options.isCustomDate === 'function')
            this.opts.isCustomDate = options.isCustomDate;

        if (typeof options.alwaysShowCalendars === 'boolean')
            this.opts.alwaysShowCalendars = options.alwaysShowCalendars;

        // update day names order to firstDay
        if (this.opts.locale.firstDay !== 0) {
            var iterator = this.opts.locale.firstDay;
            while (iterator > 0) {
                this.opts.locale.daysOfWeek.push(this.opts.locale.daysOfWeek.shift());
                iterator--;
            }
        }

    }

    private _processInitialValues(): void {
        var options = this.options,
            start: moment.Moment,
            end: moment.Moment;

        //if no start/end dates set, check if an input element contains initial values
        if (typeof this.options.startDate === 'undefined' && typeof this.options.endDate === 'undefined') {
            if ($(this.element).is('input[type=text]')) {
                var val = $(this.element).val(),
                    split = val.split(this.opts.locale.separator);

                start = end = null;

                if (split.length === 2) {
                    start = moment(split[0], this.opts.locale.format);
                    end = moment(split[1], this.opts.locale.format);
                } else if (this.singleDatePicker && val !== '') {
                    start = moment(val, this.opts.locale.format);
                    end = moment(val, this.opts.locale.format);
                }
                if (start !== null && end !== null) {
                    this._setStartDate(start);
                    this._setEndDate(end);
                }
            }
        }

        if (typeof options.ranges === 'object') {
            for (let range in options.ranges) {

                if (typeof options.ranges[range][0] === 'string') {
                    start = moment(options.ranges[range][0], this.opts.locale.format);
                } else {
                    start = moment(options.ranges[range][0]);
                }

                if (typeof options.ranges[range][1] === 'string') {
                    end = moment(options.ranges[range][1], this.opts.locale.format);
                } else {
                    end = moment(options.ranges[range][1]);
                }

                // If the start or end date exceed those allowed by the minDate or dateLimit
                // options, shorten the range to the allowable period.
                if (this.opts.minDate && start.isBefore(this.opts.minDate))
                    start = this.opts.minDate.clone();

                var maxDate = this.opts.maxDate;
                if (this.opts.dateLimit && maxDate && start.clone().add(this.opts.dateLimit).isAfter(maxDate))
                    maxDate = start.clone().add(this.opts.dateLimit);
                if (maxDate && end.isAfter(maxDate))
                    end = maxDate.clone();

                // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.
                if ((this.opts.minDate && end.isBefore(this.opts.minDate, this.opts.timepicker ? 'minute' : 'day'))
                    || (maxDate && start.isAfter(maxDate, this.opts.timepicker ? 'minute' : 'day')))
                    continue;

                //Support unicode chars in the range names.
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;

                this.ranges[rangeHtml] = [start, end];
            }

            var list = '<ul>';
            for (let range in this.ranges) {
                list += '<li data-range-key="' + range + '">' + range + '</li>';
            }
            if (this.showCustomRangeLabel) {
                list += '<li data-range-key="' + this.opts.locale.customRangeLabel + '">' + this.opts.locale.customRangeLabel + '</li>';
            }
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }
    }


    private _setStartDate(startDate: moment.Moment | string) {
        if (typeof startDate === 'string')
            this.opts.startDate = moment(startDate, this.opts.locale.format);

        if (typeof startDate === 'object')
            this.opts.startDate = moment(startDate);

        if (!this.opts.timePicker)
            this.opts.startDate = this.opts.startDate.startOf('day');

        if (this.opts.timePicker && this.opts.timePickerIncrement)
            this.opts.startDate.minute(Math.round(this.opts.startDate.minute() / this.opts.timePickerIncrement) * this.opts.timePickerIncrement);

        if (this.opts.minDate && this.opts.startDate.isBefore(this.opts.minDate)) {
            this.opts.startDate = this.opts.minDate;
            if (this.opts.timePicker && this.opts.timePickerIncrement)
                this.opts.startDate.minute(Math.round(this.opts.startDate.minute() / this.opts.timePickerIncrement) * this.opts.timePickerIncrement);
        }

        if (this.opts.maxDate && this.opts.startDate.isAfter(this.opts.maxDate)) {
            this.opts.startDate = this.opts.maxDate;
            if (this.opts.timePicker && this.opts.timePickerIncrement)
                this.opts.startDate.minute(Math.floor(this.opts.startDate.minute() / this.opts.timePickerIncrement) * this.opts.timePickerIncrement);
        }

        if (!this.isShowing)
            this.updateElement();

        this.updateMonthsInView();
    };

    private _setEndDate(endDate: moment.Moment | string) {
        if (typeof endDate === 'string')
            this.opts.endDate = moment(endDate, this.opts.opts.locale.format);

        if (typeof endDate === 'object')
            this.opts.endDate = moment(endDate);

        if (!this.opts.timePicker)
            this.opts.endDate = this.opts.endDate.endOf('day');

        if (this.opts.timePicker && this.opts.timePickerIncrement)
            this.opts.endDate.minute(Math.round(this.opts.endDate.minute() / this.opts.timePickerIncrement) * this.opts.timePickerIncrement);

        if (this.opts.endDate.isBefore(this.opts.startDate))
            this.opts.endDate = this.opts.startDate.clone();

        if (this.opts.maxDate && this.opts.endDate.isAfter(this.opts.maxDate))
            this.opts.endDate = this.opts.maxDate;

        if (this.opts.dateLimit && this.opts.startDate.clone().add(this.opts.dateLimit).isBefore(this.opts.endDate))
            this.opts.endDate = this.opts.startDate.clone().add(this.opts.dateLimit);

        this.opts.previousRightTime = this.opts.endDate.clone();

        if (!this.isShowing)
            this.updateElement();

        this.updateMonthsInView();
    };


}
