import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup } from '@angular/forms';
import { MATERIAL_FORM } from '../../../../../dist/ng2-material-components';

@Component({
    selector: 'demo-date-time-picker',
    directives: [MATERIAL_FORM, REACTIVE_FORM_DIRECTIVES],
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
