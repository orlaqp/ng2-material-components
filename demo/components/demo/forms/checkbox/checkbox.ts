import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'demo-checkbox',
    template: require('./checkbox.html'),
})
export class DemoCheckboxComponent implements OnInit {
    public fg: FormGroup;

    constructor() {
        this.fg = new FormGroup({});
    }

    ngOnInit() { }
}
