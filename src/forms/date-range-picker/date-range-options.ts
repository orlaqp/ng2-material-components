import { IDateRangePickerLocale } from './date-range-picker-locale';

export interface IDateRangeOptions {
    parentEl?: string;
    startDate?: moment.Moment;
    endDate?: moment.Moment;
    minDate?: moment.Moment;
    maxDate?: moment.Moment;
    dateLimit?: boolean | Object;
    autoApply?: boolean;
    singleDatePicker?: boolean;
    showDropdowns?: boolean;
    showWeekNumbers?: boolean;
    showISOWeekNumbers?: boolean;
    showCustomRangeLabel?: boolean;
    timePicker?: boolean;
    timePicker24Hour?: boolean;
    timePickerIncrement?: number;
    timePickerSeconds?: boolean;
    linkedCalendars?: boolean;
    autoUpdateInput?: boolean;
    alwaysShowCalendars?: boolean;
    ranges?: any;
    applyClass?: string;
    cancelClass?: string;
    template?: string | JQuery;
    locale?: IDateRangePickerLocale;
    opens: string; // 'left'/'right'/'center'
    drops: string; // 'down' or 'up'
    buttonClasses: string;
    isInvalidDate?: Function;
    
};
