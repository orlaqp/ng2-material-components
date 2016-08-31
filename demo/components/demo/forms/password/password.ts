import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup } from '@angular/forms';
import { MATERIAL_FORM } from '../../../../../dist/ng2-materialcomponents';

@Component({
  selector: 'demo-password',
  directives: [ MATERIAL_FORM, REACTIVE_FORM_DIRECTIVES ],
  template: require('./password.html'),
})
export class DemoPasswordComponent implements OnInit {

    public fg: FormGroup;

    constructor() {
        this.fg = new FormGroup({});
    }


  ngOnInit() {}
}
