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
    public today: string;

    constructor() {
        this.fg = new FormGroup({});

        let now = moment();
        this.minDate = now.subtract(5, 'day');
        this.maxDate = now.add(5, 'day');
        this.today = now.format('MM/DD/YYYY');
    }

    ngOnInit() { }

    dateChanged(d: moment.Moment) {
        alert('Date changed');
    }
}
