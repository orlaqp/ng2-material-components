import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'demo-email',
    template: require('./email.html'),
})
export class DemoEmailComponent implements OnInit {

    public fg: FormGroup;

    constructor() {
        this.fg = new FormGroup({});
    }

    ngOnInit() { }
}
