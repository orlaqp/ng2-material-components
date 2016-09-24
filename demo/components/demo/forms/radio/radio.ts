import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'demo-radio',    
    template: require('./radio.html'),
})
export class DemoRadioComponent implements OnInit {
    public fg: FormGroup;
    public defaultValue: string = 'option6';

    constructor() {
        this.fg = new FormGroup({});
    }

    ngOnInit() { }
}
