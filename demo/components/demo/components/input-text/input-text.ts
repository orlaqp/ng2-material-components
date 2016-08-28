import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup } from '@angular/forms';
import {MATERIAL_FORM} from '../../../../../dist/ng2-materialform';

@Component({
    selector: 'demo-input-text',
    directives: [REACTIVE_FORM_DIRECTIVES, MATERIAL_FORM],
    template: require('./input-text.html'),
})
export class DemoInputText implements OnInit {

    public inputForm: FormGroup;

    constructor() {
        this.inputForm = new FormGroup({});
    }

    ngOnInit() { }
}
