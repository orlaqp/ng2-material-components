import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'demo-number',
  template: require('./number.html'),
})
export class DemoNumberComponent implements OnInit {

    public fg: FormGroup;

    constructor() {
        this.fg = new FormGroup({});
    }


  ngOnInit() {}
}
