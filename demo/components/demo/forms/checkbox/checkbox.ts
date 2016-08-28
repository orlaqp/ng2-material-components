import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup } from '@angular/forms';
import { MATERIAL_FORM } from '../../../../../dist/ng2-materialform';

@Component({
    selector: 'demo-checkbox',
    directives: [MATERIAL_FORM, REACTIVE_FORM_DIRECTIVES],
    template: require('./checkbox.html'),
})
export class DemoCheckboxComponent implements OnInit {
    public fg: FormGroup;

    constructor() {
        this.fg = new FormGroup({});
    }

    ngOnInit() { }
}
