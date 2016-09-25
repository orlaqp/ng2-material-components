import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'demo-password',
  template: require('./password.html'),
})
export class DemoPasswordComponent implements OnInit {

    public fg: FormGroup;

    constructor() {
        this.fg = new FormGroup({});
    }


  ngOnInit() {}
}
