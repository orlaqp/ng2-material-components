import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup } from '@angular/forms';
import { MATERIAL_FORM } from '../../../../../dist/ng2-materialform';

@Component({
  selector: 'demo-text-box',
  directives: [ MATERIAL_FORM, REACTIVE_FORM_DIRECTIVES ],
  template: require('./text-box.html'),
})
export class DemoTextBoxComponent implements OnInit {

    public fg: FormGroup;

    constructor() {
        this.fg = new FormGroup({});
    }

  ngOnInit() {}
}
