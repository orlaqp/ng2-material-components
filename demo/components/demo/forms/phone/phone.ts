import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup } from '@angular/forms';
import { MATERIAL_FORM } from '../../../../../dist/ng2-materialcomponents';

@Component({
  selector: 'demo-phone',
  directives: [ MATERIAL_FORM, REACTIVE_FORM_DIRECTIVES ],
  template: require('./phone.html'),
})
export class DemoPhoneComponent implements OnInit {

    public fg: FormGroup;

    constructor() {
        this.fg = new FormGroup({});
    }

  ngOnInit() {}
}
