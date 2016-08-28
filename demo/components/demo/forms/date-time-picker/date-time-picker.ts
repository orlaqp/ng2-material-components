import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup } from '@angular/forms';
import { MATERIAL_FORM } from '../../../../../dist/ng2-materialform';

@Component({
    selector: 'demo-date-time-picker',
    directives: [MATERIAL_FORM, REACTIVE_FORM_DIRECTIVES],
    template: require('./date-time-picker.html'),
})
export class DemoDateTimePickerComponent implements OnInit {

    public fg: FormGroup;

    constructor() {
        this.fg = new FormGroup({});
    }

    ngOnInit() { }
}
