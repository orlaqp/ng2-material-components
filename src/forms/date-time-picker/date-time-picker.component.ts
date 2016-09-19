import { Component, OnInit, AfterViewInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, DefaultValueAccessor, FormGroupDirective } from '@angular/forms';
import { DateTimePickerBase } from './date-time-picker-base';
import { extractOptions } from './date-time-picker-options';
import { Picker } from './picker';

declare var $: JQueryStatic;

@Component({
    selector: 'date-time-picker',
    directives: [REACTIVE_FORM_DIRECTIVES, DefaultValueAccessor],
    templateUrl: 'date-time-picker.component.pug',
})
export class DateTimePickerComponent extends DateTimePickerBase implements AfterViewInit, OnInit {
    @Input() fgd: FormGroupDirective;
    @Input() placeholder: string;
    @Input() field: string;
    @Input() label: string;
    @Input() floatingLabel: boolean;
    @Input() disabled: boolean;
    @Input() alt: boolean;

    // options
    // format reference: http://momentjs.com/docs/#/displaying/
    @Input() timeZone: string = '';
    @Input() format: string = 'MM/DD/YYYY hh:mm:ss A';
    @Input() dayViewHeaderFormat: string = 'MMMM YYYY';
    @Input() extraFormats: string = null;
    @Input() stepping: number = 1;
    @Input() minDate: moment.Moment;
    @Input() maxDate: moment.Moment;
    @Input() useCurrent: string;
    @Input() collapse: boolean = true;
    @Input() locale: string = moment.locale();
    @Input() defaultDate: moment.Moment = null;
    @Input() disabledDates: string[] | moment.Moment[] | Date[];
    @Input() enabledDates: string[] | moment.Moment[] | Date[];
    @Input() icons: any = this.icons;
    @Input() tooltips: any = this.tooltips;
    @Input() useStrict: boolean = false;
    @Input() sideBySide: boolean = false;
    @Input() daysOfWeekDisabled: string = null;
    @Input() calendarWeeks: boolean = false;
    @Input() viewMode: string = 'days';
    @Input() toolbarPlacement: string = 'default';
    @Input() showTodayButton: boolean = false;
    @Input() showClear: boolean = false;
    @Input() showClose: boolean = false;
    @Input() widgetPositioning: any = this.widgetPositioning;
    @Input() widgetParent: JQuery = null;
    @Input() ignoreReadonly: boolean = false;
    @Input() keepOpen: boolean = false;
    @Input() focusOnShow: boolean = true;
    @Input() inline: boolean = false;
    @Input() keepInvalid: boolean = false;
    @Input() keyBinds: any = this.keyBinds;
    @Input() debug: boolean = false;
    @Input() allowInputToggle: boolean = true;
    @Input() disabledTimeIntervals: boolean = false;
    @Input() disabledHours: boolean = false;
    @Input() enabledHours: boolean = false;
    @Input() viewDate: moment.Moment;
    @Input() parseInputDateFn: Function;
    @Input() timePicker: boolean = false;

    @Output() dateChanged = new EventEmitter<moment.Moment>();

    public unset = true;
    public parseFormats: string[];
    public actualFormat: string;

    private datepickerInput: string = '.form-control';
    private date: moment.Moment;
    private use24Hours: boolean;
    private minViewModeNumber: number = 0;
    private currentViewMode: number;
    private keyState: any = {};
    private actions: any = {
        next: () => {
            var navFnc = this.datePickerModes[this.currentViewMode].navFnc;
            this.viewDate.add(this.datePickerModes[this.currentViewMode].navStep, navFnc);
            this.fillDate();
            this.viewUpdate(navFnc);
        },

        previous: () => {
            var navFnc = this.datePickerModes[this.currentViewMode].navFnc;
            this.viewDate.subtract(this.datePickerModes[this.currentViewMode].navStep, navFnc);
            this.fillDate();
            this.viewUpdate(navFnc);
        },

        pickerSwitch: function() {
             this.pickerComponent.showMode(1);
        },

        selectMonth: (e: JQueryEventObject) => {
            var month = $(e.target).closest('tbody').find('span').index($(e.target));
            this.viewDate.month(month);
            if (this.currentViewMode === this.minViewModeNumber) {
                this.setValue(this.date.clone().year(this.viewDate.year()).month(this.viewDate.month()));
                if (!this.inline) {
                    this.hide();
                }
            } else {
                 this.showMode(-1);
                this.fillDate();
            }
            this.viewUpdate('M');
        },

        selectYear: (e: JQueryEventObject) => {
            var year = parseInt($(e.target).text(), 10) || 0;
            this.viewDate.year(year);
            if (this.currentViewMode === this.minViewModeNumber) {
                this.setValue(this.date.clone().year(this.viewDate.year()));
                if (!this.inline) {
                    this.hide();
                }
            } else {
                 this.showMode(-1);
                this.fillDate();
            }
            this.viewUpdate('YYYY');
        },

        selectDecade: (e: JQueryEventObject) => {
            var year = parseInt($(e.target).data('selection'), 10) || 0;
            this.viewDate.year(year);
            if (this.currentViewMode === this.minViewModeNumber) {
                this.setValue(this.date.clone().year(this.viewDate.year()));
                if (!this.inline) {
                    this.hide();
                }
            } else {
                 this.pickerComponent.showMode(-1);
                this.fillDate();
            }
            this.viewUpdate('YYYY');
        },

        selectDay: (e: JQueryEventObject) => {
            var day = this.viewDate.clone();
            if ($(e.target).is('.old')) {
                day.subtract(1, 'M');
            }
            if ($(e.target).is('.new')) {
                day.add(1, 'M');
            }
            this.setValue(day.date(parseInt($(e.target).text(), 10)));
            if (!this.hasTime() && !this.keepOpen && !this.inline) {
                this.hide();
            }
        },

        incrementHours: () => {
            var newDate = this.date.clone().add(1, 'h');
            if (this.isValid(newDate, 'h')) {
                this.setValue(newDate);
            }
        },

        incrementMinutes: () => {
            var newDate = this.date.clone().add(this.stepping, 'm');
            if (this.isValid(newDate, 'm')) {
                this.setValue(newDate);
            }
        },

        incrementSeconds: () => {
            var newDate = this.date.clone().add(1, 's');
            if (this.isValid(newDate, 's')) {
                this.setValue(newDate);
            }
        },

        decrementHours: () => {
            var newDate = this.date.clone().subtract(1, 'h');
            if (this.isValid(newDate, 'h')) {
                this.setValue(newDate);
            }
        },

        decrementMinutes: () => {
            var newDate = this.date.clone().subtract(this.stepping, 'm');
            if (this.isValid(newDate, 'm')) {
                this.setValue(newDate);
            }
        },

        decrementSeconds: () => {
            var newDate = this.date.clone().subtract(1, 's');
            if (this.isValid(newDate, 's')) {
                this.setValue(newDate);
            }
        },

        togglePeriod: () => {
            this.setValue(this.date.clone().add((this.date.hours() >= 12) ? -12 : 12, 'h'));
        },

        togglePicker: (e: JQueryEventObject) => {
            var $this = $(e.target),
                $parent = $this.closest('ul'),
                expanded = $parent.find('.in'),
                closed = $parent.find('.collapse:not(.in)'),
                collapseData: any;

            if (expanded && expanded.length) {
                collapseData = expanded.data('collapse');
                if (collapseData && collapseData.transitioning) {
                    return;
                }
                if ((<any>expanded).collapse) { // if collapse plugin is available through bootstrap.js then use it
                    (<any>expanded).collapse('hide');
                    (<any>closed).collapse('show');
                } else { // otherwise just toggle in class on the two views
                    expanded.removeClass('in');
                    closed.addClass('in');
                }
                if ($this.is('span')) {
                    $this.toggleClass(this.icons.time + ' ' + this.icons.date);
                } else {
                    $this.find('span').toggleClass(this.icons.time + ' ' + this.icons.date);
                }

                // NOTE: uncomment if toggled state will be restored in show()
                //if (component) {
                //    component.find('span').toggleClass(this.icons.time + ' ' + this.icons.date);
                //}
            }
        },

        showPicker: () => {
            this.widget.find('.timepicker > div:not(.timepicker-picker)').hide();
            this.widget.find('.timepicker .timepicker-picker').show();
        },

        showHours: () => {
            this.widget.find('.timepicker .timepicker-picker').hide();
            this.widget.find('.timepicker .timepicker-hours').show();
        },

        showMinutes: () => {
            this.widget.find('.timepicker .timepicker-picker').hide();
            this.widget.find('.timepicker .timepicker-minutes').show();
        },

        showSeconds: () => {
            this.widget.find('.timepicker .timepicker-picker').hide();
            this.widget.find('.timepicker .timepicker-seconds').show();
        },

        selectHour: (e: JQueryEventObject) => {
            var hour = parseInt($(e.target).text(), 10);

            if (!this.use24Hours) {
                if (this.date.hours() >= 12) {
                    if (hour !== 12) {
                        hour += 12;
                    }
                } else {
                    if (hour === 12) {
                        hour = 0;
                    }
                }
            }
            this.setValue(this.date.clone().hours(hour));
            this.actions.showPicker.call(this.picker);
        },

        selectMinute: (e: JQueryEventObject) => {
            this.setValue(this.date.clone().minutes(parseInt($(e.target).text(), 10)));
            this.actions.showPicker.call(this.picker);
        },

        selectSecond: (e: JQueryEventObject) => {
            this.setValue(this.date.clone().seconds(parseInt($(e.target).text(), 10)));
            this.actions.showPicker.call(this.picker);
        },

        clear: this.clear,

        today: () => {
            var todaysDate = this.getMoment();
            if (this.isValid(todaysDate, 'd')) {
                this.setValue(todaysDate);
            }
        },

        close: this.hide,
    };


    constructor(private el: ElementRef) {
        super(el);

        this.element = $(el.nativeElement);
    }

    public addValidators(): void { }

    public ngOnInit(): void {
        this.onInit();
    }

    ngAfterViewInit() {

        // let options = this._getOptions();
        //
        // let ele = $(this.el.nativeElement).find('.date-time-picker');
        // ele.datetimepicker(options)
        //     .on('dp.change', (data: any) => {
        //         let d: moment.Moment = data.date;
        //         this.control.updateValue(this._dateFormatted(d));
        //     });

        // initializing element and component attributes

        if (this.element.is('input')) {
            this.input = this.element;
        } else {
            this.input = this.element.find(this.datepickerInput);
            if (this.input.length === 0) {
                this.input = this.element.find('input');
            } else if (!this.input.is('input')) {
                throw new Error('CSS class "' + this.datepickerInput + '" cannot be applied to non input element');
            }
        }

        if (this.element.hasClass('input-group')) {
            // in case there is more then one 'input-group-addon' Issue #48
            if (this.element.find('.datepickerbutton').length === 0) {
                this.component = this.element.find('.input-group-addon');
            } else {
                this.component = this.element.find('.datepickerbutton');
            }
        }

        if (!this.inline && !this.input.is('input')) {
            throw new Error('Could not initialize DateTimePicker without an input element');
        }

        // Set defaults for date here now instead of in var declaration
        this.date = this.getMoment();
        this.viewDate = this.date.clone();

        // $.extend(true, options, dataToOptions());

        this.picker = new Picker(this, extractOptions(this));

        this.initFormatting();

        this.attachDatePickerElementEvents();

        if (this.input.prop('disabled')) {
            this.picker.disable();
        }
        if (this.input.is('input') && this.input.val().trim().length !== 0) {
            this.setValue(this.parseInputDate(this.input.val().trim()));
        } else if (this.defaultDate && this.input.attr('placeholder') === undefined) {
            this.setValue(this.defaultDate);
        }
        if (this.inline) {
            this.show();
        }
    }


    /********************************************************************************
    *
    * Widget UI interaction functions
    *
    ********************************************************************************/

    doAction(e: JQueryEventObject) {
        if ($(e.currentTarget).is('.disabled')) {
            return false;
        }
        this.actions[$(e.currentTarget).data('action')].apply(this.picker, arguments);
        return false;
    }

    /**
     * Shows the widget. Possibly will emit dp.show and dp.change
     */
    show(): Picker {
        var currentMoment: moment.Moment,
            useCurrentGranularity = {
                'year': function(m: moment.Moment) {
                    return m.month(0).date(1).hours(0).seconds(0).minutes(0);
                },
                'month': function(m: moment.Moment) {
                    return m.date(1).hours(0).seconds(0).minutes(0);
                },
                'day': function(m: moment.Moment) {
                    return m.hours(0).seconds(0).minutes(0);
                },
                'hour': function(m: moment.Moment) {
                    return m.seconds(0).minutes(0);
                },
                'minute': function(m: moment.Moment) {
                    return m.seconds(0);
                },
            };

        if (this.input.prop('disabled') || (!this.ignoreReadonly && this.input.prop('readonly')) || this.widget) {
            return this.picker;
        }
        if (this.input.val() !== undefined && this.input.val().trim().length !== 0) {
            this.setValue(this.parseInputDate(this.input.val().trim()));
        } else if (this.unset && this.useCurrent && (this.inline || (this.input.is('input') && this.input.val().trim().length === 0))) {
            currentMoment = this.getMoment();
            if (typeof this.useCurrent === 'string') {
                currentMoment = useCurrentGranularity[this.useCurrent](currentMoment);
            }
            this.setValue(currentMoment);
        }
        this.widget = this.getTemplate();

        this.fillDow();
        this.fillMonths();

        this.widget.find('.timepicker-hours').hide();
        this.widget.find('.timepicker-minutes').hide();
        this.widget.find('.timepicker-seconds').hide();

        this.update();
        this.showMode();

        $(window).on('resize', $.proxy(this.place, this));
        this.widget.on('click', '[data-action]', $.proxy(this.doAction, this)); // this handles clicks on the widget
        (<any>this.widget).on('mousedown', false);

        if (this.component && this.component.hasClass('btn')) {
            this.component.toggleClass('active');
        }
        this.place();
        this.widget.show();
        if (this.focusOnShow && !this.input.is(':focus')) {
            this.input.focus();
        }

        this.notifyEvent({
            type: 'dp.show',
        });
        return this.picker;
    }

    /**
     * Shows or hides the widget
     */
    toggle() {
        return (this.widget ? this.hide() : this.show());
    }

    keydown(e: JQueryEventObject) {
        var handler: any = null,
            index: string,
            index2: number,
            pressedKeys: string[] = [],
            pressedModifiers = {},
            currentKey = e.which,
            keyBindKeys: string[],
            allModifiersPressed: boolean,
            pressed = 'p';

        this.keyState[currentKey] = pressed;

        for (index in this.keyState) {
            if (this.keyState.hasOwnProperty(index) && this.keyState[index] === pressed) {
                pressedKeys.push(index);
                if (parseInt(index, 10) !== currentKey) {
                    pressedModifiers[index] = true;
                }
            }
        }

        for (index in this.keyBinds) {
            if (this.keyBinds.hasOwnProperty(index) && typeof (this.keyBinds[index]) === 'function') {
                keyBindKeys = index.split(' ');
                if (keyBindKeys.length === pressedKeys.length && this.keyMap[currentKey] === keyBindKeys[keyBindKeys.length - 1]) {
                    allModifiersPressed = true;
                    for (index2 = keyBindKeys.length - 2; index2 >= 0; index2--) {
                        if (!(this.keyMap[keyBindKeys[index2]] in pressedModifiers)) {
                            allModifiersPressed = false;
                            break;
                        }
                    }
                    if (allModifiersPressed) {
                        handler = this.keyBinds[index];
                        break;
                    }
                }
            }
        }

        if (handler) {
            handler.call(this.picker, this.widget);
            e.stopPropagation();
            e.preventDefault();
        }
    }

    keyup(e: JQueryEventObject) {
        this.keyState[e.which] = 'r';
        e.stopPropagation();
        e.preventDefault();
    }

    change(e: JQueryEventObject) {
        var val = $(e.target).val().trim(),
            parsedDate = val ? this.parseInputDate(val) : null;
        this.setValue(parsedDate);
        e.stopImmediatePropagation();
        return false;
    }

    attachDatePickerElementEvents() {
        this.input.on({
            'change': $.proxy(this.change, this),
            'blur': this.debug ? '' : $.proxy(this.hide, this),
            'keydown': $.proxy(this.keydown, this),
            'keyup': $.proxy(this.keyup, this),
            'focus': this.allowInputToggle ? $.proxy(this.show, this) : '',
        });

        if (this.element.is('input')) {
            this.input.on({
                'focus': $.proxy(this.show, this),
            });
        } else if (this.component) {
            this.component.on('click', $.proxy(this.toggle, this));
            (<any>this.component).on('mousedown', false);
        }
    }

    detachDatePickerElementEvents() {
        this.input.off({
            'change': this.change,
            'blur': blur,
            'keydown': this.keydown,
            'keyup': this.keyup,
            'focus': this.allowInputToggle ? this.hide : '',
        });

        if (this.element.is('input')) {
            this.input.off({
                'focus': this.show,
            });
        } else if (this.component) {
            this.component.off('click', this.toggle);
            (<any>this.component).off('mousedown', false);
        }
    }

    indexGivenDates(givenDatesArray: any) {
        // Store given enabledDates and disabledDates as keys.
        // This way we can check their existence in O(1) time instead of looping through whole array.
        // (for example: options.enabledDates['2014-02-27'] === true)
        var givenDatesIndexed = {};
        $.each(givenDatesArray, function() {
            var dDate = this.parseInputDate(this);
            if (dDate.isValid()) {
                givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;
            }
        });
        return (Object.keys(givenDatesIndexed).length) ? givenDatesIndexed : false;
    }

    indexGivenHours(givenHoursArray: any) {
        // Store given enabledHours and disabledHours as keys.
        // This way we can check their existence in O(1) time instead of looping through whole array.
        // (for example: options.enabledHours['2014-02-27'] === true)
        var givenHoursIndexed = {};
        $.each(givenHoursArray, function() {
            givenHoursIndexed[this] = true;
        });
        return (Object.keys(givenHoursIndexed).length) ? givenHoursIndexed : false;
    }

    initFormatting() {
        var format = this.format || 'L LT';

        this.actualFormat = format.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(formatInput) {
            var newinput = this.date.localeData().longDateFormat(formatInput) || formatInput;
            return newinput.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(formatInput2: string) { //temp fix for #740
                return this.date.localeData().longDateFormat(formatInput2) || formatInput2;
            });
        });


        this.parseFormats = this.extraFormats ? this.extraFormats.slice() : [];
        if (this.parseFormats.indexOf(format) < 0 && this.parseFormats.indexOf(this.actualFormat) < 0) {
            this.parseFormats.push(this.actualFormat);
        }

        this.use24Hours = (this.actualFormat.toLowerCase().indexOf('a') < 1 && this.actualFormat.replace(/\[.*?\]/g, '').indexOf('h') < 1);

        if (this.isEnabled('y')) {
            this.minViewModeNumber = 2;
        }
        if (this.isEnabled('M')) {
            this.minViewModeNumber = 1;
        }
        if (this.isEnabled('d')) {
            this.minViewModeNumber = 0;
        }

        // get currentViewMode based on the viewMode input
        let viewMode = this.viewMode;
        let mode: any = this.datePickerModes.find((value: { clsName: string, navFnc: string, navStep: number}): boolean => {
            return value.clsName === viewMode;
        });
        this.currentViewMode = mode.navStep;

        this.currentViewMode = Math.max(this.minViewModeNumber, this.currentViewMode);

        if (!this.unset) {
            this.setValue(this.date);
        }
    };


    hide() {
        var transitioning = false;
        if (!this.widget) {
            return this.picker;
        }
        // Ignore event if in the middle of a picker transition
        this.widget.find('.collapse').each(function() {
            var collapseData = $(this).data('collapse');
            if (collapseData && collapseData.transitioning) {
                transitioning = true;
                return false;
            }
            return true;
        });
        if (transitioning) {
            return this.picker;
        }
        if (this.component && this.component.hasClass('btn')) {
            this.component.toggleClass('active');
        }
        this.widget.hide();

        $(window).off('resize', this.place);
        this.widget.off('click', '[data-action]');
        (<any>this.widget).off('mousedown', false);

        this.widget.remove();
        this.widget = null;

        this.notifyEvent({
            type: 'dp.hide',
            date: this.date.clone(),
        });

        this.input.blur();

        this.currentViewMode = 0;
        this.viewDate = this.date.clone();

        return this.picker;
    }

    /********************************************************************************
     *
     * Public API functions
     * =====================
     *
     * Important: Do not expose direct references to private objects or the options
     * object to the outer world. Always return a clone when returning values or make
     * a clone when setting a private variable.
     *
     ********************************************************************************/



    // private _dateFormatted(d: moment.Moment) {
    //     return d.format(this.format);
    // }

    // Private methods for the plugin
    private hasTimeZone() {
        return moment.tz !== undefined && this.timeZone !== undefined && this.timeZone !== null && this.timeZone !== '';
    };

    private getMoment(d?: string): moment.Moment {
        var returnMoment: moment.Moment;

        if (d === undefined || d === null) {
            returnMoment = moment(); //TODO should this use format? and locale?
        } else if (this.hasTimeZone()) { // There is a string to parse and a default time zone
            // parse with the tz function which takes a default time zone if it is not in the format string
            returnMoment = moment.tz(d, this.parseFormats, this.useStrict, this.timeZone);
        } else {
            returnMoment = moment(d, this.parseFormats, this.useStrict);
        }

        if (this.hasTimeZone()) {
            returnMoment.tz(this.timeZone);
        }

        return returnMoment;
    }

    private isEnabled(granularity: string): boolean {
        if (typeof granularity !== 'string' || granularity.length > 1) {
            throw new TypeError('isEnabled expects a single character string parameter');
        }
        switch (granularity) {
            case 'y':
                return this.actualFormat.indexOf('Y') !== -1;
            case 'M':
                return this.actualFormat.indexOf('M') !== -1;
            case 'd':
                return this.actualFormat.toLowerCase().indexOf('d') !== -1;
            case 'h':
            case 'H':
                return this.actualFormat.toLowerCase().indexOf('h') !== -1;
            case 'm':
                return this.actualFormat.indexOf('m') !== -1;
            case 's':
                return this.actualFormat.indexOf('s') !== -1;
            default:
                return false;
        }
    }

    private hasTime(): boolean {
        return (this.isEnabled('h') || this.isEnabled('m') || this.isEnabled('s'));
    }

    private hasDate(): boolean {
        return (this.isEnabled('y') || this.isEnabled('M') || this.isEnabled('d'));
    }

    private getDatePickerTemplate() {
        var headTemplate: JQuery = $('<thead>')
            .append($('<tr>')
                .append($('<th>').addClass('prev').attr('data-action', 'previous')
                    .append($('<span>').addClass(this.icons.previous))
                )
                .append($('<th>').addClass('picker-switch').attr('data-action', 'pickerSwitch').attr('colspan', (this.calendarWeeks ? '6' : '5')))
                .append($('<th>').addClass('next').attr('data-action', 'next')
                    .append($('<span>').addClass(this.icons.next))
                )
            ),
            contTemplate = $('<tbody>')
                .append($('<tr>')
                    .append($('<td>').attr('colspan', (this.calendarWeeks ? '8' : '7')))
                );

        return [
            $('<div>').addClass('datepicker-days')
                .append($('<table>').addClass('table-condensed')
                    .append(headTemplate)
                    .append($('<tbody>'))
                ),
            $('<div>').addClass('datepicker-months')
                .append($('<table>').addClass('table-condensed')
                    .append(headTemplate.clone())
                    .append(contTemplate.clone())
                ),
            $('<div>').addClass('datepicker-years')
                .append($('<table>').addClass('table-condensed')
                    .append(headTemplate.clone())
                    .append(contTemplate.clone())
                ),
            $('<div>').addClass('datepicker-decades')
                .append($('<table>').addClass('table-condensed')
                    .append(headTemplate.clone())
                    .append(contTemplate.clone())
                ),
        ];
    }

    private getTimePickerMainTemplate() {
        var topRow = $('<tr>'),
            middleRow = $('<tr>'),
            bottomRow = $('<tr>');

        if (this.isEnabled('h')) {
            topRow.append($('<td>')
                .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': this.tooltips.incrementHour }).addClass('btn').attr('data-action', 'incrementHours').append($('<span>').addClass(this.icons.up))));
            middleRow.append($('<td>')
                .append($('<span>').addClass('timepicker-hour').attr({ 'data-time-component': 'hours', 'title': this.tooltips.pickHour }).attr('data-action', 'showHours')));
            bottomRow.append($('<td>')
                .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': this.tooltips.decrementHour }).addClass('btn').attr('data-action', 'decrementHours').append($('<span>').addClass(this.icons.down))));
        }
        if (this.isEnabled('m')) {
            if (this.isEnabled('h')) {
                topRow.append($('<td>').addClass('separator'));
                middleRow.append($('<td>').addClass('separator').html(':'));
                bottomRow.append($('<td>').addClass('separator'));
            }
            topRow.append($('<td>')
                .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': this.tooltips.incrementMinute }).addClass('btn').attr('data-action', 'incrementMinutes')
                    .append($('<span>').addClass(this.icons.up))));
            middleRow.append($('<td>')
                .append($('<span>').addClass('timepicker-minute').attr({ 'data-time-component': 'minutes', 'title': this.tooltips.pickMinute }).attr('data-action', 'showMinutes')));
            bottomRow.append($('<td>')
                .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': this.tooltips.decrementMinute }).addClass('btn').attr('data-action', 'decrementMinutes')
                    .append($('<span>').addClass(this.icons.down))));
        }
        if (this.isEnabled('s')) {
            if (this.isEnabled('m')) {
                topRow.append($('<td>').addClass('separator'));
                middleRow.append($('<td>').addClass('separator').html(':'));
                bottomRow.append($('<td>').addClass('separator'));
            }
            topRow.append($('<td>')
                .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': this.tooltips.incrementSecond }).addClass('btn').attr('data-action', 'incrementSeconds')
                    .append($('<span>').addClass(this.icons.up))));
            middleRow.append($('<td>')
                .append($('<span>').addClass('timepicker-second').attr({ 'data-time-component': 'seconds', 'title': this.tooltips.pickSecond }).attr('data-action', 'showSeconds')));
            bottomRow.append($('<td>')
                .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': this.tooltips.decrementSecond }).addClass('btn').attr('data-action', 'decrementSeconds')
                    .append($('<span>').addClass(this.icons.down))));
        }

        if (!this.use24Hours) {
            topRow.append($('<td>').addClass('separator'));
            middleRow.append($('<td>')
                .append($('<button>').addClass('btn btn-primary').attr({ 'data-action': 'togglePeriod', tabindex: '-1', 'title': this.tooltips.togglePeriod })));
            bottomRow.append($('<td>').addClass('separator'));
        }

        return $('<div>').addClass('timepicker-picker')
            .append($('<table>').addClass('table-condensed')
                .append([topRow, middleRow, bottomRow]));
    }

    private getTimePickerTemplate() {
        var hoursView = $('<div>').addClass('timepicker-hours')
            .append($('<table>').addClass('table-condensed')),
            minutesView = $('<div>').addClass('timepicker-minutes')
                .append($('<table>').addClass('table-condensed')),
            secondsView = $('<div>').addClass('timepicker-seconds')
                .append($('<table>').addClass('table-condensed')),
            ret = [this.getTimePickerMainTemplate()];

        if (this.isEnabled('h')) {
            ret.push(hoursView);
        }
        ret.push(minutesView);
        if (this.isEnabled('m')) {
        }
        if (this.isEnabled('s')) {
            ret.push(secondsView);
        }

        return ret;
    }

    private getToolbar() {
        var row: JQuery[] = [];
        if (this.showTodayButton) {
            row.push($('<td>').append($('<a>').attr({ 'data-action': 'today', 'title': this.tooltips.today }).append($('<span>').addClass(this.icons.today))));
        }
        if (!this.sideBySide && this.hasDate() && this.hasTime()) {
            row.push($('<td>').append($('<a>').attr({ 'data-action': 'togglePicker', 'title': this.tooltips.selectTime }).append($('<span>').addClass(this.icons.time))));
        }
        if (this.showClear) {
            row.push($('<td>').append($('<a>').attr({ 'data-action': 'clear', 'title': this.tooltips.clear }).append($('<span>').addClass(this.icons.clear))));
        }
        if (this.showClose) {
            row.push($('<td>').append($('<a>').attr({ 'data-action': 'close', 'title': this.tooltips.close }).append($('<span>').addClass(this.icons.close))));
        }
        return $('<table>').addClass('table-condensed').append($('<tbody>').append($('<tr>').append(row)));
    }

    private getTemplate() {
        var template = $('<div>').addClass('bootstrap-datetimepicker-widget dropdown-menu'),
            dateView = $('<div>').addClass('datepicker').append(this.getDatePickerTemplate()),
            timeView = $('<div>').addClass('timepicker').append(this.getTimePickerTemplate()),
            content = $('<ul>').addClass('list-unstyled'),
            toolbar = $('<li>').addClass('picker-switch' + (this.collapse ? ' accordion-toggle' : '')).append(this.getToolbar());

        if (this.inline) {
            template.removeClass('dropdown-menu');
        }

        if (this.use24Hours) {
            template.addClass('usetwentyfour');
        }
        if (this.isEnabled('s') && !this.use24Hours) {
            template.addClass('wider');
        }

        if (this.sideBySide && this.hasDate() && this.hasTime()) {
            template.addClass('timepicker-sbs');
            if (this.toolbarPlacement === 'top') {
                template.append(toolbar);
            }
            template.append(
                $('<div>').addClass('row')
                    .append(dateView.addClass('col-md-6'))
                    .append(timeView.addClass('col-md-6'))
            );
            if (this.toolbarPlacement === 'bottom') {
                template.append(toolbar);
            }
            return template;
        }

        if (this.toolbarPlacement === 'top') {
            content.append(toolbar);
        }
        if (this.hasDate()) {
            content.append($('<li>').addClass((this.collapse && this.hasTime() ? 'collapse in' : '')).append(dateView));
        }
        if (this.toolbarPlacement === 'default') {
            content.append(toolbar);
        }
        if (this.hasTime()) {
            content.append($('<li>').addClass((this.collapse && this.hasDate() ? 'collapse' : '')).append(timeView));
        }
        if (this.toolbarPlacement === 'bottom') {
            content.append(toolbar);
        }
        return template.append(content);
    }

    // private dataToOptions() {
    //     var eData,
    //         dataOptions = {};
    //
    //     if (this.element.is('input') || this.inline) {
    //         eData = element.data();
    //     } else {
    //         eData = element.find('input').data();
    //     }
    //
    //     if (eData.dateOptions && eData.dateOptions instanceof Object) {
    //         dataOptions = $.extend(true, dataOptions, eData.dateOptions);
    //     }
    //
    //     $.each(options, function (key) {
    //         var attributeName = 'date' + key.charAt(0).toUpperCase() + key.slice(1);
    //         if (eData[attributeName] !== undefined) {
    //             dataOptions[key] = eData[attributeName];
    //         }
    //     });
    //     return dataOptions;
    // }

    private place() {
        var position = (this.component || this.element).position(),
            offset = (this.component || this.element).offset(),
            vertical = this.widgetPositioning.vertical,
            horizontal = this.widgetPositioning.horizontal,
            parent: JQuery;

        if (this.widgetParent) {
            parent = this.widgetParent.append(this.widget);
        } else if (this.element.is('input')) {
            parent = this.element.after(this.widget).parent();
        } else if (this.inline) {
            parent = this.element.append(this.widget);
            return;
        } else {
            parent = this.element;
            this.element.children().first().after(this.widget);
        }

        // Top and bottom logic
        if (vertical === 'auto') {
            if (offset.top + this.widget.height() * 1.5 >= $(window).height() + $(window).scrollTop() &&
                this.widget.height() + this.element.outerHeight() < offset.top) {
                vertical = 'top';
            } else {
                vertical = 'bottom';
            }
        }

        // Left and right logic
        if (horizontal === 'auto') {
            if (parent.width() < offset.left + this.widget.outerWidth() / 2 &&
                offset.left + this.widget.outerWidth() > $(window).width()) {
                horizontal = 'right';
            } else {
                horizontal = 'left';
            }
        }

        if (vertical === 'top') {
            this.widget.addClass('top').removeClass('bottom');
        } else {
            this.widget.addClass('bottom').removeClass('top');
        }

        if (horizontal === 'right') {
            this.widget.addClass('pull-right');
        } else {
            this.widget.removeClass('pull-right');
        }

        // find the first parent element that has a relative css positioning
        if (parent.css('position') !== 'relative') {
            parent = parent.parents().filter(function() {
                return $(this).css('position') === 'relative';
            }).first();
        }

        if (parent.length === 0) {
            throw new Error('datetimepicker component should be placed within a relative positioned container');
        }

        this.widget.css({
            top: vertical === 'top' ? 'auto' : position.top + this.element.outerHeight(),
            bottom: vertical === 'top' ? parent.outerHeight() - (parent === this.element ? 0 : position.top) : 'auto',
            left: horizontal === 'left' ? (parent === this.element ? 0 : position.left) : 'auto',
            right: horizontal === 'left' ? 'auto' : parent.outerWidth() - this.element.outerWidth() - (parent === this.element ? 0 : position.left),
        });
    }

    private notifyEvent(e: any) {
        if (e.type === 'dp.change' && ((e.date && e.date.isSame(e.oldDate)) || (!e.date && !e.oldDate))) {
            return;
        }
        this.element.trigger(e);
    };

    private viewUpdate(e: JQueryEventObject | string) {
        if (e === 'y') {
            e = 'YYYY';
        }
        this.notifyEvent({
            type: 'dp.update',
            change: e,
            viewDate: this.viewDate.clone(),
        });
    }

    private showMode(dir?: number) {
        if (!this.widget) {
            return;
        }
        if (dir) {
            this.currentViewMode = Math.max(this.minViewModeNumber, Math.min(3, this.currentViewMode + dir));
        }
        this.widget.find('.datepicker > div').hide().filter('.datepicker-' + this.datePickerModes[this.currentViewMode].clsName).show();
    }

    private fillDow() {
        var row = $('<tr>'),
            currentDate = this.viewDate.clone().startOf('w').startOf('d');

        if (this.calendarWeeks === true) {
            row.append($('<th>').addClass('cw').text('#'));
        }

        while (currentDate.isBefore(this.viewDate.clone().endOf('w'))) {
            row.append($('<th>').addClass('dow').text(currentDate.format('dd')));
            currentDate.add(1, 'd');
        }
        this.widget.find('.datepicker-days thead').append(row);
    }

    private isInDisabledDates(testDate: moment.Moment) {
        return this.disabledDates[testDate.format('YYYY-MM-DD')] === true;
    }

    private isInEnabledDates(testDate: moment.Moment) {
        return this.enabledDates[testDate.format('YYYY-MM-DD')] === true;
    }

    private isInDisabledHours(testDate: moment.Moment) {
        return this.disabledHours[testDate.format('H')] === true;
    }

    private isInEnabledHours(testDate: moment.Moment) {
        return this.enabledHours[testDate.format('H')] === true;
    }

    private isValid(targetMoment: moment.Moment, granularity?: string) {
        if (!targetMoment.isValid()) {
            return false;
        }
        if (this.disabledDates && granularity === 'd' && this.isInDisabledDates(targetMoment)) {
            return false;
        }
        if (this.enabledDates && granularity === 'd' && !this.isInEnabledDates(targetMoment)) {
            return false;
        }
        if (this.minDate && targetMoment.isBefore(this.minDate, granularity)) {
            return false;
        }
        if (this.maxDate && targetMoment.isAfter(this.maxDate, granularity)) {
            return false;
        }
        if (this.daysOfWeekDisabled && granularity === 'd' && this.daysOfWeekDisabled.indexOf(targetMoment.day().toString()) !== -1) {
            return false;
        }
        if (this.disabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && this.isInDisabledHours(targetMoment)) {
            return false;
        }
        if (this.enabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && !this.isInEnabledHours(targetMoment)) {
            return false;
        }
        if (this.disabledTimeIntervals && (granularity === 'h' || granularity === 'm' || granularity === 's')) {
            var found = false;
            $.each(this.disabledTimeIntervals, function() {
                if (targetMoment.isBetween(this[0], this[1])) {
                    found = true;
                    return false;
                }
            });
            if (found) {
                return false;
            }
        }
        return true;
    }

    private fillMonths() {
        var spans: any = [],
            monthsShort = this.viewDate.clone().startOf('y').startOf('d');
        while (monthsShort.isSame(this.viewDate, 'y')) {
            spans.push($('<span>').attr('data-action', 'selectMonth').addClass('month').text(monthsShort.format('MMM')));
            monthsShort.add(1, 'M');
        }
        this.widget.find('.datepicker-months td').empty().append(spans);
    }

    private updateMonths() {
        var monthsView = this.widget.find('.datepicker-months'),
            monthsViewHeader = monthsView.find('th'),
            months = monthsView.find('tbody').find('span');

        monthsViewHeader.eq(0).find('span').attr('title', this.tooltips.prevYear);
        monthsViewHeader.eq(1).attr('title', this.tooltips.selectYear);
        monthsViewHeader.eq(2).find('span').attr('title', this.tooltips.nextYear);

        monthsView.find('.disabled').removeClass('disabled');

        if (!this.isValid(this.viewDate.clone().subtract(1, 'y'), 'y')) {
            monthsViewHeader.eq(0).addClass('disabled');
        }

        monthsViewHeader.eq(1).text(this.viewDate.year());

        if (!this.isValid(this.viewDate.clone().add(1, 'y'), 'y')) {
            monthsViewHeader.eq(2).addClass('disabled');
        }

        months.removeClass('active');
        if (this.date.isSame(this.viewDate, 'y') && !this.unset) {
            months.eq(this.date.month()).addClass('active');
        }

        let that = this;
        months.each(function(index) {
            if (!that.isValid(that.viewDate.clone().month(index), 'M')) {
                $(this).addClass('disabled');
            }
        });
    }

    private updateYears() {
        var yearsView = this.widget.find('.datepicker-years'),
            yearsViewHeader = yearsView.find('th'),
            startYear = this.viewDate.clone().subtract(5, 'y'),
            endYear = this.viewDate.clone().add(6, 'y'),
            html = '';

        yearsViewHeader.eq(0).find('span').attr('title', this.tooltips.prevDecade);
        yearsViewHeader.eq(1).attr('title', this.tooltips.selectDecade);
        yearsViewHeader.eq(2).find('span').attr('title', this.tooltips.nextDecade);

        yearsView.find('.disabled').removeClass('disabled');

        if (this.minDate && this.minDate.isAfter(startYear, 'y')) {
            yearsViewHeader.eq(0).addClass('disabled');
        }

        yearsViewHeader.eq(1).text(startYear.year() + '-' + endYear.year());

        if (this.maxDate && this.maxDate.isBefore(endYear, 'y')) {
            yearsViewHeader.eq(2).addClass('disabled');
        }

        while (!startYear.isAfter(endYear, 'y')) {
            html += '<span data-action="selectYear" class="year' + (startYear.isSame(this.date, 'y') && !this.unset ? ' active' : '') + (!this.isValid(startYear, 'y') ? ' disabled' : '') + '">' + startYear.year() + '</span>';
            startYear.add(1, 'y');
        }

        yearsView.find('td').html(html);
    }

    private updateDecades() {
        var decadesView = this.widget.find('.datepicker-decades'),
            decadesViewHeader = decadesView.find('th'),
            startDecade = moment({ y: this.viewDate.year() - (this.viewDate.year() % 100) - 1 }),
            endDecade = startDecade.clone().add(100, 'y'),
            startedAt = startDecade.clone(),
            minDateDecade = false,
            maxDateDecade = false,
            endDecadeYear: number,
            html = '';

        decadesViewHeader.eq(0).find('span').attr('title', this.tooltips.prevCentury);
        decadesViewHeader.eq(2).find('span').attr('title', this.tooltips.nextCentury);

        decadesView.find('.disabled').removeClass('disabled');

        if (startDecade.isSame(moment({ y: 1900 })) || (this.minDate && this.minDate.isAfter(startDecade, 'y'))) {
            decadesViewHeader.eq(0).addClass('disabled');
        }

        decadesViewHeader.eq(1).text(startDecade.year() + '-' + endDecade.year());

        if (startDecade.isSame(moment({ y: 2000 })) || (this.maxDate && this.maxDate.isBefore(endDecade, 'y'))) {
            decadesViewHeader.eq(2).addClass('disabled');
        }

        while (!startDecade.isAfter(endDecade, 'y')) {
            endDecadeYear = startDecade.year() + 12;
            minDateDecade = this.minDate && this.minDate.isAfter(startDecade, 'y') && this.minDate.year() <= endDecadeYear;
            maxDateDecade = this.maxDate && this.maxDate.isAfter(startDecade, 'y') && this.maxDate.year() <= endDecadeYear;
            html += '<span data-action="selectDecade" class="decade' + (this.date.isAfter(startDecade) && this.date.year() <= endDecadeYear ? ' active' : '') +
                (!this.isValid(startDecade, 'y') && !minDateDecade && !maxDateDecade ? ' disabled' : '') + '" data-selection="' + (startDecade.year() + 6) + '">' + (startDecade.year() + 1) + ' - ' + (startDecade.year() + 12) + '</span>';
            startDecade.add(12, 'y');
        }
        html += '<span></span><span></span><span></span>'; //push the dangling block over, at least this way it's even

        decadesView.find('td').html(html);
        decadesViewHeader.eq(1).text((startedAt.year() + 1) + '-' + (startDecade.year()));
    }

    private fillDate() {
        var daysView = this.widget.find('.datepicker-days'),
            daysViewHeader = daysView.find('th'),
            currentDate: moment.Moment,
            html: JQuery[] = [],
            row: JQuery,
            clsName: string,
            i: number;

        if (!this.hasDate()) {
            return;
        }

        daysViewHeader.eq(0).find('span').attr('title', this.tooltips.prevMonth);
        daysViewHeader.eq(1).attr('title', this.tooltips.selectMonth);
        daysViewHeader.eq(2).find('span').attr('title', this.tooltips.nextMonth);

        daysView.find('.disabled').removeClass('disabled');
        daysViewHeader.eq(1).text(this.viewDate.format(this.dayViewHeaderFormat));

        if (!this.isValid(this.viewDate.clone().subtract(1, 'M'), 'M')) {
            daysViewHeader.eq(0).addClass('disabled');
        }
        if (!this.isValid(this.viewDate.clone().add(1, 'M'), 'M')) {
            daysViewHeader.eq(2).addClass('disabled');
        }

        currentDate = this.viewDate.clone().startOf('M').startOf('w').startOf('d');

        for (i = 0; i < 42; i++) { //always display 42 days (should show 6 weeks)
            if (currentDate.weekday() === 0) {
                row = $('<tr>');
                if (this.calendarWeeks) {
                    row.append('<td class="cw">' + currentDate.week() + '</td>');
                }
                html.push(row);
            }
            clsName = '';
            if (currentDate.isBefore(this.viewDate, 'M')) {
                clsName += ' old';
            }
            if (currentDate.isAfter(this.viewDate, 'M')) {
                clsName += ' new';
            }
            if (currentDate.isSame(this.date, 'd') && this.unset) {
                clsName += ' active';
            }
            if (!this.isValid(currentDate, 'd')) {
                clsName += ' disabled';
            }
            if (currentDate.isSame(this.getMoment(), 'd')) {
                clsName += ' today';
            }
            if (currentDate.day() === 0 || currentDate.day() === 6) {
                clsName += ' weekend';
            }
            row.append('<td data-action="selectDay" data-day="' + currentDate.format('L') + '" class="day' + clsName + '">' + currentDate.date() + '</td>');
            currentDate.add(1, 'd');
        }

        daysView.find('tbody').empty().append(html);

        this.updateMonths();

        this.updateYears();

        this.updateDecades();
    }

    private fillHours() {
        var table = this.widget.find('.timepicker-hours table'),
            currentHour = this.viewDate.clone().startOf('d'),
            html: JQuery[] = [],
            row = $('<tr>');

        if (this.viewDate.hour() > 11 && !this.use24Hours) {
            currentHour.hour(12);
        }
        while (currentHour.isSame(this.viewDate, 'd') && (this.use24Hours || (this.viewDate.hour() < 12 && currentHour.hour() < 12) || this.viewDate.hour() > 11)) {
            if (currentHour.hour() % 4 === 0) {
                row = $('<tr>');
                html.push(row);
            }
            row.append('<td data-action="selectHour" class="hour' + (!this.isValid(currentHour, 'h') ? ' disabled' : '') + '">' + currentHour.format(this.use24Hours ? 'HH' : 'hh') + '</td>');
            currentHour.add(1, 'h');
        }
        table.empty().append(html);
    }

    private fillMinutes() {
        var table = this.widget.find('.timepicker-minutes table'),
            currentMinute = this.viewDate.clone().startOf('h'),
            html: JQuery[] = [],
            row = $('<tr>'),
            step = this.stepping === 1 ? 5 : this.stepping;

        while (this.viewDate.isSame(currentMinute, 'h')) {
            if (currentMinute.minute() % (step * 4) === 0) {
                row = $('<tr>');
                html.push(row);
            }
            row.append('<td data-action="selectMinute" class="minute' + (!this.isValid(currentMinute, 'm') ? ' disabled' : '') + '">' + currentMinute.format('mm') + '</td>');
            currentMinute.add(step, 'm');
        }
        table.empty().append(html);
    }

    private fillSeconds() {
        var table = this.widget.find('.timepicker-seconds table'),
            currentSecond = this.viewDate.clone().startOf('m'),
            html: JQuery[] = [],
            row = $('<tr>');

        while (this.viewDate.isSame(currentSecond, 'm')) {
            if (currentSecond.second() % 20 === 0) {
                row = $('<tr>');
                html.push(row);
            }
            row.append('<td data-action="selectSecond" class="second' + (!this.isValid(currentSecond, 's') ? ' disabled' : '') + '">' + currentSecond.format('ss') + '</td>');
            currentSecond.add(5, 's');
        }

        table.empty().append(html);
    }

    private fillTime() {
        var toggle: JQuery, newDate: moment.Moment, timeComponents = this.widget.find('.timepicker span[data-time-component]');

        if (!this.use24Hours) {
            toggle = this.widget.find('.timepicker [data-action=togglePeriod]');
            newDate = this.date.clone().add((this.date.hours() >= 12) ? -12 : 12, 'h');

            toggle.text(this.date.format('A'));

            if (this.isValid(newDate, 'h')) {
                toggle.removeClass('disabled');
            } else {
                toggle.addClass('disabled');
            }
        }
        timeComponents.filter('[data-time-component=hours]').text(this.date.format(this.use24Hours ? 'HH' : 'hh'));
        timeComponents.filter('[data-time-component=minutes]').text(this.date.format('mm'));
        timeComponents.filter('[data-time-component=seconds]').text(this.date.format('ss'));

        this.fillHours();
        this.fillMinutes();
        this.fillSeconds();
    }

    private update() {
        if (!this.widget) {
            return;
        }
        this.fillDate();
        this.fillTime();
    }

    private setValue(targetMoment: moment.Moment) {
        var oldDate = this.unset ? null : this.date;

        // case of calling setValue(null or false)
        if (!targetMoment) {
            this.unset = true;
            this.input.val('');
            this.element.data('date', '');
            this.notifyEvent({
                type: 'dp.change',
                date: false,
                oldDate: oldDate,
            });
            this.update();
            return;
        }

        targetMoment = targetMoment.clone().locale(this.locale);

        if (this.hasTimeZone()) {
            targetMoment.tz(this.timeZone);
        }

        if (this.stepping !== 1) {
            targetMoment.minutes((Math.round(targetMoment.minutes() / this.stepping) * this.stepping)).seconds(0);
        }

        if (this.isValid(targetMoment)) {
            this.date = targetMoment;
            //viewDate = date.clone(); // TODO this doesn't work right on first use
            this.input.val(this.date.format(this.actualFormat));

            let dateFormat = this.date.format(this.actualFormat);
            this.control.updateValue(dateFormat);
            this.dateChanged.emit(this.date.clone());

            this.element.data('date', dateFormat);
            // this.unset = false;
            this.update();
            this.notifyEvent({
                type: 'dp.change',
                date: this.date.clone(),
                oldDate: oldDate,
            });
        } else {
            if (!this.keepInvalid) {
                this.input.val(this.unset ? '' : this.date.format(this.actualFormat));
            } else {
                this.notifyEvent({
                    type: 'dp.change',
                    date: targetMoment,
                    oldDate: oldDate,
                });
            }
            this.notifyEvent({
                type: 'dp.error',
                date: targetMoment,
                oldDate: oldDate,
            });
        }
    }

    private clear() {
        this.setValue(null);
    }

    private parseInputDate(inputDate: any) {
        if (this.parseInputDateFn === undefined) {
            if (!moment.isMoment(inputDate)) {
                inputDate = this.getMoment(inputDate);
            }
        } else {
            inputDate = this.parseInputDateFn(inputDate);
        }
        //inputDate.locale(options.locale);
        return inputDate;
    }


}
