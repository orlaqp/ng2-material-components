import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'demo-text-area',
  template: require('./text-area.html'),
})
export class DemoTextAreaComponent implements OnInit {

    public fg: FormGroup;

    constructor() {
        this.fg = new FormGroup({});
    }

  ngOnInit() {}
}
