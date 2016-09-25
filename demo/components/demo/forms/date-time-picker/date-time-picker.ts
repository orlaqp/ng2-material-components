import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'demo-date-time-picker',
    template: require('./date-time-picker.html'),
})
export class DemoDateTimePickerComponent implements OnInit {

    public fg: FormGroup;

    public minDate: moment.Moment;
    public maxDate: moment.Moment;

    constructor() {
        this.fg = new FormGroup({});

        this.minDate = moment().subtract('day', 5);
        this.maxDate = moment().add('day', 5);
    }

    ngOnInit() { }

    dateChanged(d: moment.Moment) {
        alert('Date changed');
    }
}
