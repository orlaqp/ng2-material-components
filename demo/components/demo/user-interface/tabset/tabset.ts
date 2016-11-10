import { Component, OnInit, ViewChild } from '@angular/core';
import {
    TabsetComponent
} from '../../../../../dist/ng2-material-components';

@Component({
  selector: 'demo-tabset',
  template: require('./tabset.html'),
})
export class DemoTabsetComponent implements OnInit {
  @ViewChild(TabsetComponent) tabSet;

  constructor() {  }

  ngOnInit() {
    setTimeout(() => { this.tabSet.selectTab(2); }, 4000);
  }
}
