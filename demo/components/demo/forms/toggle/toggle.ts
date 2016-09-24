import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'demo-toggle',
    template: require('./toggle.html'),
})
export class DemoToggleComponent implements OnInit {

    public fg: FormGroup;

    constructor() {
        this.fg = new FormGroup({});
    }

    ngOnInit() { }
}
