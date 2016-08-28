import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup } from '@angular/forms';
import { MATERIAL_FORM } from '../../../../../dist/ng2-materialform';

@Component({
  selector: 'demo-number',
  directives: [ MATERIAL_FORM, REACTIVE_FORM_DIRECTIVES ],
  template: require('./number.html'),
})
export class DemoNumberComponent implements OnInit {

    public fg: FormGroup;

    constructor() {
        this.fg = new FormGroup({});
    }


  ngOnInit() {}
}
