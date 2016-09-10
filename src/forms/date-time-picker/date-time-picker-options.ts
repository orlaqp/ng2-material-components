export interface IDateTimePickerOptions {
    timeZone: string;
    format: string;
    dayViewHeaderFormat: string;
    extraFormats: string;
    stepping: number;
    minDate: moment.Moment;
    maxDate: moment.Moment;
    useCurrent: string;
    collapse: boolean;
    locale: string;
    defaultDate: moment.Moment | boolean;
    disabledDates: string[] | moment.Moment[] | Date[];
    enabledDates: string[] | moment.Moment[] | Date[];
    icons: any;
    tooltips: any;
    useStrict: boolean;
    sideBySide: boolean;
    daysOfWeekDisabled: string;
    calendarWeeks: boolean;
    viewMode: string;
    toolbarPlacement: string;
    showTodayButton: boolean;
    showClear: boolean;
    showClose: boolean;
    widgetPositioning: any;
    widgetParent: JQuery;
    ignoreReadonly: boolean;
    keepOpen: boolean;
    focusOnShow: boolean;
    inline: boolean;
    keepInvalid: boolean;
    datepickerInput: string;
    keyBinds: any;
    debug: boolean;
    allowInputToggle: boolean;
    disabledTimeIntervals: boolean;
    disabledHours: boolean;
    enabledHours: boolean;
    viewDate: moment.Moment;
}

export function extractOptions(source: any): IDateTimePickerOptions {
    return {
        timeZone: source.timeZone,
        format: source.format,
        dayViewHeaderFormat: source.dayViewHeaderFormat,
        extraFormats: source.extraFormats,
        stepping: source.stepping,
        minDate: source.minDate,
        maxDate: source.maxDate,
        useCurrent: source.useCurrent,
        collapse: source.collapse,
        locale: source.locale,
        defaultDate: source.defaultDate,
        disabledDates: source.disabledDates,
        enabledDates: source.enabledDates,
        icons: source.icons,
        tooltips: source.tooltips,
        useStrict: source.useStrict,
        sideBySide: source.sideBySide,
        daysOfWeekDisabled: source.daysOfWeekDisabled,
        calendarWeeks: source.calendarWeeks,
        viewMode: source.viewMode,
        toolbarPlacement: source.toolbarPlacement,
        showTodayButton: source.showTodayButton,
        showClear: source.showClear,
        showClose: source.showClose,
        widgetPositioning: source.widgetPositioning,
        widgetParent: source.widgetParent,
        ignoreReadonly: source.ignoreReadonly,
        keepOpen: source.keepOpen,
        focusOnShow: source.focusOnShow,
        inline: source.inline,
        keepInvalid: source.keepInvalid,
        datepickerInput: source.datepickerInput,
        keyBinds: source.keyBinds,
        debug: source.debug,
        allowInputToggle: source.allowInputToggle,
        disabledTimeIntervals: source.disabledTimeIntervals,
        disabledHours: source.disabledHours,
        enabledHours: source.enabledHours,
        viewDate: source.viewDate,
    };
}
