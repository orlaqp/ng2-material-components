import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'demo-input-text',
    template: require('./input-text.html'),
})
export class DemoInputText implements OnInit {

    public inputForm: FormGroup;

    constructor() {
        this.inputForm = new FormGroup({});
    }

    ngOnInit() { }
}
