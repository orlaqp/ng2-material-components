import { IDateTimePickerOptions } from './date-time-picker-options';
import { DateTimePickerComponent } from './date-time-picker.component';

export class Picker {

    constructor(
        private pickerComponent: DateTimePickerComponent,
        private options: IDateTimePickerOptions) { }

    // toggle = toggle;
    //
    // show = show;
    //
    // hide = hide;

    destroy() {
        ///<summary>Destroys the widget and removes all attached event listeners</summary>
         this.pickerComponent.hide();
         this.pickerComponent.detachDatePickerElementEvents();
         this.pickerComponent.element.removeData('DateTimePicker');
         this.pickerComponent.element.removeData('date');
    }

    disable() {
        ///<summary>Disables the input element, the component is attached to, by adding a disabled="true" attribute to it.
        ///If the widget was visible before that call it is hidden. Possibly emits dp.hide</summary>
         this.pickerComponent.hide();
        if ( this.pickerComponent.component &&  this.pickerComponent.component.hasClass('btn')) {
             this.pickerComponent.component.addClass('disabled');
        }
         this.pickerComponent.input.prop('disabled', true);
        return this;
    }

    enable() {
        ///<summary>Enables the input element, the component is attached to, by removing disabled attribute from it.</summary>
        if ( this.pickerComponent.component &&  this.pickerComponent.component.hasClass('btn')) {
             this.pickerComponent.component.removeClass('disabled');
        }
         this.pickerComponent.input.prop('disabled', false);
        return this;
    }

    ignoreReadonly(ignoreReadonly) {
        if (arguments.length === 0) {
            return this.options.ignoreReadonly;
        }
        if (typeof ignoreReadonly !== 'boolean') {
            throw new TypeError('ignoreReadonly () expects a boolean parameter');
        }
        this.options.ignoreReadonly = ignoreReadonly;
        return this;
    }

    options(newOptions) {
        if (arguments.length === 0) {
            return $.extend(true, {}, options);
        }

        if (!(newOptions instanceof Object)) {
            throw new TypeError('options() options parameter should be an object');
        }
        $.extend(true, options, newOptions);
        $.each(options, function(key, value) {
            if (picker[key] !== undefined) {
                picker[key](value);
            } else {
                throw new TypeError('option ' + key + ' is not recognized!');
            }
        });
        return this;
    }

    date(newDate) {
        ///<signature helpKeyword="$.fn.datetimedate">
        ///<summary>Returns the component's model current date, a moment object or null if not set.</summary>
        ///<returns type="Moment">date.clone()</returns>
        ///</signature>
        ///<signature>
        ///<summary>Sets the components model current moment to it. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the this.format and this.useStrict components configuration.</summary>
        ///<param name="newDate" locid="$.fn.datetimepicker.date_p:newDate">Takes string, Date, moment, null parameter.</param>
        ///</signature>
        if (arguments.length === 0) {
            if ( this.pickerComponent.unset) {
                return null;
            }
            return  this.pickerComponent.date.clone();
        }

        if (newDate !== null && typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
            throw new TypeError('date() parameter must be one of [null, string, moment or Date]');
        }

         this.pickerComponent.setValue(newDate === null ? null :  this.pickerComponent.parseInputDate(newDate));
        return this;
    }

    format(newFormat) {
        ///<summary>test su</summary>
        ///<param name="newFormat">info about para</param>
        ///<returns type="string|boolean">returns foo</returns>
        if (arguments.length === 0) {
            return this.format;
        }

        if ((typeof newFormat !== 'string') && ((typeof newFormat !== 'boolean') || (newFormat !== false))) {
            throw new TypeError('format() expects a string or boolean:false parameter ' + newFormat);
        }

        this.format = newFormat;
        if (actualFormat) {
            initFormatting(); // reinit formatting
        }
        return picker;
    }

    timeZone(newZone) {
        if (arguments.length === 0) {
            return this.timeZone;
        }

        if (typeof newZone !== 'string') {
            throw new TypeError('newZone() expects a string parameter');
        }

        this.timeZone = newZone;

        return picker;
    }

    dayViewHeaderFormat(newFormat) {
        if (arguments.length === 0) {
            return this.dayViewHeaderFormat;
        }

        if (typeof newFormat !== 'string') {
            throw new TypeError('dayViewHeaderFormat() expects a string parameter');
        }

        this.dayViewHeaderFormat = newFormat;
        return picker;
    }

    extraFormats(formats) {
        if (arguments.length === 0) {
            return this.extraFormats;
        }

        if (formats !== false && !(formats instanceof Array)) {
            throw new TypeError('extraFormats() expects an array or false parameter');
        }

        this.extraFormats = formats;
        if (parseFormats) {
            initFormatting(); // reinit formatting
        }
        return picker;
    }

    disabledDates(dates) {
        ///<signature helpKeyword="$.fn.datetimepicker.disabledDates">
        ///<summary>Returns an array with the currently set disabled dates on the component.</summary>
        ///<returns type="array">options.disabledDates</returns>
        ///</signature>
        ///<signature>
        ///<summary>Setting this takes precedence over this.minDate, this.maxDate configuration. Also calling this function removes the configuration of
        ///options.enabledDates if such exist.</summary>
        ///<param name="dates" locid="$.fn.datetimepicker.disabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
        ///</signature>
        if (arguments.length === 0) {
            return (options.disabledDates ? $.extend({}, this.disabledDates) : this.disabledDates);
        }

        if (!dates) {
            this.disabledDates = false;
            update();
            return picker;
        }
        if (!(dates instanceof Array)) {
            throw new TypeError('disabledDates() expects an array parameter');
        }
        this.disabledDates = indexGivenDates(dates);
        this.enabledDates = false;
        update();
        return picker;
    }

    enabledDates(dates) {
        ///<signature helpKeyword="$.fn.datetimepicker.enabledDates">
        ///<summary>Returns an array with the currently set enabled dates on the component.</summary>
        ///<returns type="array">options.enabledDates</returns>
        ///</signature>
        ///<signature>
        ///<summary>Setting this takes precedence over this.minDate, this.maxDate configuration. Also calling this function removes the configuration of this.disabledDates if such exist.</summary>
        ///<param name="dates" locid="$.fn.datetimepicker.enabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
        ///</signature>
        if (arguments.length === 0) {
            return (options.enabledDates ? $.extend({}, this.enabledDates) : this.enabledDates);
        }

        if (!dates) {
            this.enabledDates = false;
            update();
            return picker;
        }
        if (!(dates instanceof Array)) {
            throw new TypeError('enabledDates() expects an array parameter');
        }
        this.enabledDates = indexGivenDates(dates);
        this.disabledDates = false;
        update();
        return picker;
    }

    daysOfWeekDisabled(daysOfWeekDisabled) {
        if (arguments.length === 0) {
            return this.daysOfWeekDisabled.splice(0);
        }

        if ((typeof daysOfWeekDisabled === 'boolean') && !daysOfWeekDisabled) {
            this.daysOfWeekDisabled = false;
            update();
            return picker;
        }

        if (!(daysOfWeekDisabled instanceof Array)) {
            throw new TypeError('daysOfWeekDisabled() expects an array parameter');
        }
        this.daysOfWeekDisabled = daysOfWeekDisabled.reduce(function(previousValue, currentValue) {
            currentValue = parseInt(currentValue, 10);
            if (currentValue > 6 || currentValue < 0 || isNaN(currentValue)) {
                return previousValue;
            }
            if (previousValue.indexOf(currentValue) === -1) {
                previousValue.push(currentValue);
            }
            return previousValue;
        }, []).sort();
        if (options.useCurrent && !options.keepInvalid) {
            var tries = 0;
            while (!isValid(date, 'd')) {
                date.add(1, 'd');
                if (tries === 31) {
                    throw 'Tried 31 times to find a valid date';
                }
                tries++;
            }
            setValue(date);
        }
        update();
        return picker;
    }

    maxDate(maxDate) {
        if (arguments.length === 0) {
            return this.maxDate ? this.maxDate.clone() : this.maxDate;
        }

        if ((typeof maxDate === 'boolean') && maxDate === false) {
            this.maxDate = false;
            update();
            return picker;
        }

        if (typeof maxDate === 'string') {
            if (maxDate === 'now' || maxDate === 'moment') {
                maxDate = getMoment();
            }
        }

        var parsedDate = parseInputDate(maxDate);

        if (!parsedDate.isValid()) {
            throw new TypeError('maxDate() Could not parse date parameter: ' + maxDate);
        }
        if (options.minDate && parsedDate.isBefore(options.minDate)) {
            throw new TypeError('maxDate() date parameter is before this.minDate: ' + parsedDate.format(actualFormat));
        }
        this.maxDate = parsedDate;
        if (options.useCurrent && !options.keepInvalid && date.isAfter(maxDate)) {
            setValue(options.maxDate);
        }
        if (viewDate.isAfter(parsedDate)) {
            viewDate = parsedDate.clone().subtract(options.stepping, 'm');
        }
        update();
        return picker;
    }

    minDate(minDate) {
        if (arguments.length === 0) {
            return this.minDate ? this.minDate.clone() : this.minDate;
        }

        if ((typeof minDate === 'boolean') && minDate === false) {
            this.minDate = false;
            update();
            return picker;
        }

        if (typeof minDate === 'string') {
            if (minDate === 'now' || minDate === 'moment') {
                minDate = getMoment();
            }
        }

        var parsedDate = parseInputDate(minDate);

        if (!parsedDate.isValid()) {
            throw new TypeError('minDate() Could not parse date parameter: ' + minDate);
        }
        if (options.maxDate && parsedDate.isAfter(options.maxDate)) {
            throw new TypeError('minDate() date parameter is after this.maxDate: ' + parsedDate.format(actualFormat));
        }
        this.minDate = parsedDate;
        if (options.useCurrent && !options.keepInvalid && date.isBefore(minDate)) {
            setValue(options.minDate);
        }
        if (viewDate.isBefore(parsedDate)) {
            viewDate = parsedDate.clone().add(options.stepping, 'm');
        }
        update();
        return picker;
    }

    defaultDate(defaultDate) {
        ///<signature helpKeyword="$.fn.datetimepicker.defaultDate">
        ///<summary>Returns a moment with the this.defaultDate option configuration or false if not set</summary>
        ///<returns type="Moment">date.clone()</returns>
        ///</signature>
        ///<signature>
        ///<summary>Will set the picker's inital date. If a boolean:false value is passed the this.defaultDate parameter is cleared.</summary>
        ///<param name="defaultDate" locid="$.fn.datetimepicker.defaultDate_p:defaultDate">Takes a string, Date, moment, boolean:false</param>
        ///</signature>
        if (arguments.length === 0) {
            return this.defaultDate ? this.defaultDate.clone() : this.defaultDate;
        }
        if (!defaultDate) {
            this.defaultDate = false;
            return picker;
        }

        if (typeof defaultDate === 'string') {
            if (defaultDate === 'now' || defaultDate === 'moment') {
                defaultDate = getMoment();
            } else {
                defaultDate = getMoment(defaultDate);
            }
        }

        var parsedDate = parseInputDate(defaultDate);
        if (!parsedDate.isValid()) {
            throw new TypeError('defaultDate() Could not parse date parameter: ' + defaultDate);
        }
        if (!isValid(parsedDate)) {
            throw new TypeError('defaultDate() date passed is invalid according to component setup validations');
        }

        this.defaultDate = parsedDate;

        if ((options.defaultDate && this.inline) || input.val().trim() === '') {
            setValue(options.defaultDate);
        }
        return picker;
    }

    locale(locale) {
        if (arguments.length === 0) {
            return this.locale;
        }

        if (!moment.localeData(locale)) {
            throw new TypeError('locale() locale ' + locale + ' is not loaded from moment locales!');
        }

        this.locale = locale;
        date.locale(options.locale);
        viewDate.locale(options.locale);

        if (actualFormat) {
            initFormatting(); // reinit formatting
        }
        if (widget) {
            hide();
            show();
        }
        return picker;
    }

    stepping(stepping) {
        if (arguments.length === 0) {
            return this.stepping;
        }

        stepping = parseInt(stepping, 10);
        if (isNaN(stepping) || stepping < 1) {
            stepping = 1;
        }
        this.stepping = stepping;
        return picker;
    }

    useCurrent(useCurrent) {
        var useCurrentOptions = ['year', 'month', 'day', 'hour', 'minute'];
        if (arguments.length === 0) {
            return this.useCurrent;
        }

        if ((typeof useCurrent !== 'boolean') && (typeof useCurrent !== 'string')) {
            throw new TypeError('useCurrent() expects a boolean or string parameter');
        }
        if (typeof useCurrent === 'string' && useCurrentOptions.indexOf(useCurrent.toLowerCase()) === -1) {
            throw new TypeError('useCurrent() expects a string parameter of ' + useCurrentOptions.join(', '));
        }
        this.useCurrent = useCurrent;
        return picker;
    }

    collapse(collapse) {
        if (arguments.length === 0) {
            return this.collapse;
        }

        if (typeof collapse !== 'boolean') {
            throw new TypeError('collapse() expects a boolean parameter');
        }
        if (options.collapse === collapse) {
            return picker;
        }
        this.collapse = collapse;
        if (widget) {
            hide();
            show();
        }
        return picker;
    }

    icons(icons) {
        if (arguments.length === 0) {
            return $.extend({}, this.icons);
        }

        if (!(icons instanceof Object)) {
            throw new TypeError('icons() expects parameter to be an Object');
        }
        $.extend(options.icons, icons);
        if (widget) {
            hide();
            show();
        }
        return picker;
    }

    tooltips(tooltips) {
        if (arguments.length === 0) {
            return $.extend({}, this.tooltips);
        }

        if (!(tooltips instanceof Object)) {
            throw new TypeError('tooltips() expects parameter to be an Object');
        }
        $.extend(options.tooltips, tooltips);
        if (widget) {
            hide();
            show();
        }
        return picker;
    }

    useStrict(useStrict) {
        if (arguments.length === 0) {
            return this.useStrict;
        }

        if (typeof useStrict !== 'boolean') {
            throw new TypeError('useStrict() expects a boolean parameter');
        }
        this.useStrict = useStrict;
        return picker;
    }

    sideBySide(sideBySide) {
        if (arguments.length === 0) {
            return this.sideBySide;
        }

        if (typeof sideBySide !== 'boolean') {
            throw new TypeError('sideBySide() expects a boolean parameter');
        }
        this.sideBySide = sideBySide;
        if (widget) {
            hide();
            show();
        }
        return picker;
    }

    viewMode(viewMode) {
        if (arguments.length === 0) {
            return this.viewMode;
        }

        if (typeof viewMode !== 'string') {
            throw new TypeError('viewMode() expects a string parameter');
        }

        if (viewModes.indexOf(viewMode) === -1) {
            throw new TypeError('viewMode() parameter must be one of (' + viewModes.join(', ') + ') value');
        }

        this.viewMode = viewMode;
        currentViewMode = Math.max(viewModes.indexOf(viewMode), minViewModeNumber);

        this.showMode();
        return picker;
    }

    toolbarPlacement(toolbarPlacement) {
        if (arguments.length === 0) {
            return this.toolbarPlacement;
        }

        if (typeof toolbarPlacement !== 'string') {
            throw new TypeError('toolbarPlacement() expects a string parameter');
        }
        if (toolbarPlacements.indexOf(toolbarPlacement) === -1) {
            throw new TypeError('toolbarPlacement() parameter must be one of (' + toolbarPlacements.join(', ') + ') value');
        }
        this.toolbarPlacement = toolbarPlacement;

        if (widget) {
            hide();
            show();
        }
        return picker;
    }

    widgetPositioning(widgetPositioning) {
        if (arguments.length === 0) {
            return $.extend({}, this.widgetPositioning);
        }

        if (({}).toString.call(widgetPositioning) !== '[object Object]') {
            throw new TypeError('widgetPositioning() expects an object variable');
        }
        if (widgetPositioning.horizontal) {
            if (typeof widgetPositioning.horizontal !== 'string') {
                throw new TypeError('widgetPositioning() horizontal variable must be a string');
            }
            widgetPositioning.horizontal = widgetPositioning.horizontal.toLowerCase();
            if (horizontalModes.indexOf(widgetPositioning.horizontal) === -1) {
                throw new TypeError('widgetPositioning() expects horizontal parameter to be one of (' + horizontalModes.join(', ') + ')');
            }
            this.widgetPositioning.horizontal = widgetPositioning.horizontal;
        }
        if (widgetPositioning.vertical) {
            if (typeof widgetPositioning.vertical !== 'string') {
                throw new TypeError('widgetPositioning() vertical variable must be a string');
            }
            widgetPositioning.vertical = widgetPositioning.vertical.toLowerCase();
            if (verticalModes.indexOf(widgetPositioning.vertical) === -1) {
                throw new TypeError('widgetPositioning() expects vertical parameter to be one of (' + verticalModes.join(', ') + ')');
            }
            this.widgetPositioning.vertical = widgetPositioning.vertical;
        }
        update();
        return picker;
    }

    calendarWeeks(calendarWeeks) {
        if (arguments.length === 0) {
            return this.calendarWeeks;
        }

        if (typeof calendarWeeks !== 'boolean') {
            throw new TypeError('calendarWeeks() expects parameter to be a boolean value');
        }

        this.calendarWeeks = calendarWeeks;
        update();
        return picker;
    }

    showTodayButton(showTodayButton) {
        if (arguments.length === 0) {
            return this.showTodayButton;
        }

        if (typeof showTodayButton !== 'boolean') {
            throw new TypeError('showTodayButton() expects a boolean parameter');
        }

        this.showTodayButton = showTodayButton;
        if (widget) {
            hide();
            show();
        }
        return picker;
    }

    showClear(showClear) {
        if (arguments.length === 0) {
            return this.showClear;
        }

        if (typeof showClear !== 'boolean') {
            throw new TypeError('showClear() expects a boolean parameter');
        }

        this.showClear = showClear;
        if (widget) {
            hide();
            show();
        }
        return picker;
    }

    widgetParent(widgetParent) {
        if (arguments.length === 0) {
            return this.widgetParent;
        }

        if (typeof widgetParent === 'string') {
            widgetParent = $(widgetParent);
        }

        if (widgetParent !== null && (typeof widgetParent !== 'string' && !(widgetParent instanceof $))) {
            throw new TypeError('widgetParent() expects a string or a jQuery object parameter');
        }

        this.widgetParent = widgetParent;
        if (widget) {
            hide();
            show();
        }
        return picker;
    }

    keepOpen(keepOpen) {
        if (arguments.length === 0) {
            return this.keepOpen;
        }

        if (typeof keepOpen !== 'boolean') {
            throw new TypeError('keepOpen() expects a boolean parameter');
        }

        this.keepOpen = keepOpen;
        return picker;
    }

    focusOnShow(focusOnShow) {
        if (arguments.length === 0) {
            return this.focusOnShow;
        }

        if (typeof focusOnShow !== 'boolean') {
            throw new TypeError('focusOnShow() expects a boolean parameter');
        }

        this.focusOnShow = focusOnShow;
        return picker;
    }

    inline(inline) {
        if (arguments.length === 0) {
            return this.inline;
        }

        if (typeof inline !== 'boolean') {
            throw new TypeError('inline() expects a boolean parameter');
        }

        this.inline = inline;
        return picker;
    }

    clear() {
        clear();
        return picker;
    }

    keyBinds(keyBinds) {
        if (arguments.length === 0) {
            return this.keyBinds;
        }

        this.keyBinds = keyBinds;
        return picker;
    }

    getMoment(d) {
        return getMoment(d);
    }

    debug(debug) {
        if (typeof debug !== 'boolean') {
            throw new TypeError('debug() expects a boolean parameter');
        }

        this.debug = debug;
        return picker;
    }

    allowInputToggle(allowInputToggle) {
        if (arguments.length === 0) {
            return this.allowInputToggle;
        }

        if (typeof allowInputToggle !== 'boolean') {
            throw new TypeError('allowInputToggle() expects a boolean parameter');
        }

        this.allowInputToggle = allowInputToggle;
        return picker;
    }

    showClose(showClose) {
        if (arguments.length === 0) {
            return this.showClose;
        }

        if (typeof showClose !== 'boolean') {
            throw new TypeError('showClose() expects a boolean parameter');
        }

        this.showClose = showClose;
        return picker;
    }

    keepInvalid(keepInvalid) {
        if (arguments.length === 0) {
            return this.keepInvalid;
        }

        if (typeof keepInvalid !== 'boolean') {
            throw new TypeError('keepInvalid() expects a boolean parameter');
        }
        this.keepInvalid = keepInvalid;
        return picker;
    }

    datepickerInput(datepickerInput) {
        if (arguments.length === 0) {
            return this.datepickerInput;
        }

        if (typeof datepickerInput !== 'string') {
            throw new TypeError('datepickerInput() expects a string parameter');
        }

        this.datepickerInput = datepickerInput;
        return picker;
    }

    parseInputDate(parseInputDate) {
        if (arguments.length === 0) {
            return this.parseInputDate;
        }

        if (typeof parseInputDate !== 'function') {
            throw new TypeError('parseInputDate() sholud be as function');
        }

        this.parseInputDate = parseInputDate;

        return picker;
    }

    disabledTimeIntervals(disabledTimeIntervals) {
        ///<signature helpKeyword="$.fn.datetimepicker.disabledTimeIntervals">
        ///<summary>Returns an array with the currently set disabled dates on the component.</summary>
        ///<returns type="array">options.disabledTimeIntervals</returns>
        ///</signature>
        ///<signature>
        ///<summary>Setting this takes precedence over this.minDate, this.maxDate configuration. Also calling this function removes the configuration of
        ///options.enabledDates if such exist.</summary>
        ///<param name="dates" locid="$.fn.datetimepicker.disabledTimeIntervals_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
        ///</signature>
        if (arguments.length === 0) {
            return (options.disabledTimeIntervals ? $.extend({}, this.disabledTimeIntervals) : this.disabledTimeIntervals);
        }

        if (!disabledTimeIntervals) {
            this.disabledTimeIntervals = false;
            update();
            return picker;
        }
        if (!(disabledTimeIntervals instanceof Array)) {
            throw new TypeError('disabledTimeIntervals() expects an array parameter');
        }
        this.disabledTimeIntervals = disabledTimeIntervals;
        update();
        return picker;
    }

    disabledHours(hours) {
        ///<signature helpKeyword="$.fn.datetimepicker.disabledHours">
        ///<summary>Returns an array with the currently set disabled hours on the component.</summary>
        ///<returns type="array">options.disabledHours</returns>
        ///</signature>
        ///<signature>
        ///<summary>Setting this takes precedence over this.minDate, this.maxDate configuration. Also calling this function removes the configuration of
        ///options.enabledHours if such exist.</summary>
        ///<param name="hours" locid="$.fn.datetimepicker.disabledHours_p:hours">Takes an [ int ] of values and disallows the user to select only from those hours.</param>
        ///</signature>
        if (arguments.length === 0) {
            return (options.disabledHours ? $.extend({}, this.disabledHours) : this.disabledHours);
        }

        if (!hours) {
            this.disabledHours = false;
            update();
            return picker;
        }
        if (!(hours instanceof Array)) {
            throw new TypeError('disabledHours() expects an array parameter');
        }
        this.disabledHours = indexGivenHours(hours);
        this.enabledHours = false;
        if (options.useCurrent && !options.keepInvalid) {
            var tries = 0;
            while (!isValid(date, 'h')) {
                date.add(1, 'h');
                if (tries === 24) {
                    throw 'Tried 24 times to find a valid date';
                }
                tries++;
            }
            setValue(date);
        }
        update();
        return picker;
    }

    enabledHours(hours) {
        ///<signature helpKeyword="$.fn.datetimepicker.enabledHours">
        ///<summary>Returns an array with the currently set enabled hours on the component.</summary>
        ///<returns type="array">options.enabledHours</returns>
        ///</signature>
        ///<signature>
        ///<summary>Setting this takes precedence over this.minDate, this.maxDate configuration. Also calling this function removes the configuration of this.disabledHours if such exist.</summary>
        ///<param name="hours" locid="$.fn.datetimepicker.enabledHours_p:hours">Takes an [ int ] of values and allows the user to select only from those hours.</param>
        ///</signature>
        if (arguments.length === 0) {
            return (options.enabledHours ? $.extend({}, this.enabledHours) : this.enabledHours);
        }

        if (!hours) {
            this.enabledHours = false;
            update();
            return picker;
        }
        if (!(hours instanceof Array)) {
            throw new TypeError('enabledHours() expects an array parameter');
        }
        this.enabledHours = indexGivenHours(hours);
        this.disabledHours = false;
        if (options.useCurrent && !options.keepInvalid) {
            var tries = 0;
            while (!isValid(date, 'h')) {
                date.add(1, 'h');
                if (tries === 24) {
                    throw 'Tried 24 times to find a valid date';
                }
                tries++;
            }
            setValue(date);
        }
        update();
        return picker;
    }
    /**
     * Returns the component's model current viewDate, a moment object or null if not set. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the this.format and this.useStrict components configuration.
     * @param {Takes string, viewDate, moment, null parameter.} newDate
     * @returns {viewDate.clone()}
     */
    viewDate(newDate) {
        if (arguments.length === 0) {
            return viewDate.clone();
        }

        if (!newDate) {
            viewDate = date.clone();
            return picker;
        }

        if (typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
            throw new TypeError('viewDate() parameter must be one of [string, moment or Date]');
        }

        viewDate = parseInputDate(newDate);
        viewUpdate();
        return picker;
    }
}

}
