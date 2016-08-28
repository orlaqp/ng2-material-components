import { Component, OnInit } from '@angular/core';
import { MATERIAL_NAVIGATION } from '../../../../../dist/ng2-materialform';

@Component({
  selector: 'demo-tabset',
  directives: [ MATERIAL_NAVIGATION ],
  template: require('./tabset.html'),
})
export class DemoTabsetComponent implements OnInit {
  constructor() {  }

  ngOnInit() {}
}
