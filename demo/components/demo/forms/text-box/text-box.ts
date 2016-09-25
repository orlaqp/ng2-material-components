import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'demo-text-box',
  template: require('./text-box.html'),
})
export class DemoTextBoxComponent implements OnInit {

    public fg: FormGroup;

    constructor() {
        this.fg = new FormGroup({});
    }

  ngOnInit() {}
}
