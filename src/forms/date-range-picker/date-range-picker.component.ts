import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'date-range-picker',
  directives: [ REACTIVE_FORM_DIRECTIVES ],
  templateUrl: '../input-base/input-base.component.pug',
})
export class DateRangePickerComponent implements OnInit {
  constructor() {  }

  ngOnInit() {

      $('.form-control').daterangepicker();
  }
}
