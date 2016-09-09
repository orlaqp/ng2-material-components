export const datePickerModes = [
    {
        clsName: 'days',
        navFnc: 'M',
        navStep: 1,
    },
    {
        clsName: 'months',
        navFnc: 'y',
        navStep: 1,
    },
    {
        clsName: 'years',
        navFnc: 'y',
        navStep: 10,
    },
    {
        clsName: 'decades',
        navFnc: 'y',
        navStep: 100,
    },
];

export const keyMap = {
    'up': 38,
    38: 'up',
    'down': 40,
    40: 'down',
    'left': 37,
    37: 'left',
    'right': 39,
    39: 'right',
    'tab': 9,
    9: 'tab',
    'escape': 27,
    27: 'escape',
    'enter': 13,
    13: 'enter',
    'pageUp': 33,
    33: 'pageUp',
    'pageDown': 34,
    34: 'pageDown',
    'shift': 16,
    16: 'shift',
    'control': 17,
    17: 'control',
    'space': 32,
    32: 'space',
    't': 84,
    84: 't',
    'delete': 46,
    46: 'delete',
};

export const viewModes = ['days', 'months', 'years', 'decades'];
export const verticalModes = ['top', 'bottom', 'auto'];
export const horizontalModes = ['left', 'right', 'auto'];
export const toolbarPlacements = ['default', 'top', 'bottom'];

export const icons = {
    time: 'zmdi zmdi-time',
    date: 'zmdi zmdi-calendar',
    up: 'zmdi zmdi-chevron-up',
    down: 'zmdi zmdi-chevron-down',
    previous: 'zmdi zmdi-chevron-left',
    next: 'zmdi zmdi-chevron-right',
    today: 'zmdi zmdi-check',
    clear: 'zmdi zmdi-delete',
    close: 'zmdi zmdi-close',
};

export const tooltips = {
    today: 'Go to today',
    clear: 'Clear selection',
    close: 'Close the picker',
    selectMonth: 'Select Month',
    prevMonth: 'Previous Month',
    nextMonth: 'Next Month',
    selectYear: 'Select Year',
    prevYear: 'Previous Year',
    nextYear: 'Next Year',
    selectDecade: 'Select Decade',
    prevDecade: 'Previous Decade',
    nextDecade: 'Next Decade',
    prevCentury: 'Previous Century',
    nextCentury: 'Next Century',
    pickHour: 'Pick Hour',
    incrementHour: 'Increment Hour',
    decrementHour: 'Decrement Hour',
    pickMinute: 'Pick Minute',
    incrementMinute: 'Increment Minute',
    decrementMinute: 'Decrement Minute',
    pickSecond: 'Pick Second',
    incrementSecond: 'Increment Second',
    decrementSecond: 'Decrement Second',
    togglePeriod: 'Toggle Period',
    selectTime: 'Select Time',
};

export const widgetPositioning = {
    horizontal: 'auto',
    vertical: 'auto',
};

export const keyBinds = {
    up: (widget: JQuery) => {
        if (!widget) {
            return;
        }
        var d = this.date() || this.getMoment();
        if (widget.find('.datepicker').is(':visible')) {
            this.date(d.clone().subtract(7, 'd'));
        } else {
            this.date(d.clone().add(this.stepping(), 'm'));
        }
    },
    down: (widget: JQuery) => {
        if (!widget) {
            this.show();
            return;
        }
        var d = this.date() || this.getMoment();
        if (widget.find('.datepicker').is(':visible')) {
            this.date(d.clone().add(7, 'd'));
        } else {
            this.date(d.clone().subtract(this.stepping(), 'm'));
        }
    },
    'control up': (widget: JQuery) => {
        if (!widget) {
            return;
        }
        var d = this.date() || this.getMoment();
        if (widget.find('.datepicker').is(':visible')) {
            this.date(d.clone().subtract(1, 'y'));
        } else {
            this.date(d.clone().add(1, 'h'));
        }
    },
    'control down': (widget: JQuery) => {
        if (!widget) {
            return;
        }
        var d = this.date() || this.getMoment();
        if (widget.find('.datepicker').is(':visible')) {
            this.date(d.clone().add(1, 'y'));
        } else {
            this.date(d.clone().subtract(1, 'h'));
        }
    },
    left: (widget: JQuery) => {
        if (!widget) {
            return;
        }
        var d = this.date() || this.getMoment();
        if (widget.find('.datepicker').is(':visible')) {
            this.date(d.clone().subtract(1, 'd'));
        }
    },
    right: (widget: JQuery) => {
        if (!widget) {
            return;
        }
        var d = this.date() || this.getMoment();
        if (widget.find('.datepicker').is(':visible')) {
            this.date(d.clone().add(1, 'd'));
        }
    },
    pageUp: (widget: JQuery) => {
        if (!widget) {
            return;
        }
        var d = this.date() || this.getMoment();
        if (widget.find('.datepicker').is(':visible')) {
            this.date(d.clone().subtract(1, 'M'));
        }
    },
    pageDown: (widget: JQuery) => {
        if (!widget) {
            return;
        }
        var d = this.date() || this.getMoment();
        if (widget.find('.datepicker').is(':visible')) {
            this.date(d.clone().add(1, 'M'));
        }
    },
    enter: () => {
        this.hide();
    },
    escape: () => {
        this.hide();
    },
    //tab: (widget) { //this break the flow of the form. disabling for now
    //    var toggle = widget.find('.picker-switch a[data-action="togglePicker"]');
    //    if(toggle.length > 0) toggle.click();
    //},
    'control space': (widget: JQuery) => {
        if (!widget) {
            return;
        }
        if (widget.find('.timepicker').is(':visible')) {
            widget.find('.btn[data-action="togglePeriod"]').click();
        }
    },
    t: () => {
        this.date(this.getMoment());
    },
    'delete': () => {
        this.clear();
    },
};
