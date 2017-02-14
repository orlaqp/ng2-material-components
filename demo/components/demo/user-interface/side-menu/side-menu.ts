import { ITemplateCacheService } from '@angular/upgrade/src/angular_js';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../../dist/ng2-material-components';

@Component({
  selector: 'demo-side-menu',
  template: require('./side-menu.html'),
})
export class DemoSideMenuComponent implements OnInit {
    public menuItems: MenuItem[];
    public menuItems2: MenuItem[];

  constructor() {

      this.menuItems = [
          { id: '1', title: 'Layout', icon: 'view-compact' },
          { id: '2', title: 'Navigation', icon: 'navigation' },
          { id: '3', title: 'Forms', icon: 'check-all' },
          { id: '4', title: 'Widgets', icon: 'view-compact' },
      ];

      this.menuItems2 = [
          { id: '1', title: 'Layout', icon: 'view-compact' },
          { id: '2', title: 'Navigation', icon: 'navigation' },
          { id: '3', title: 'Forms', icon: 'check-all' },
          { id: '4', title: 'Widgets', icon: 'view-compact' },
      ];

  }

  ngOnInit() {}

  onItemClicked(item: MenuItem) {
    console.dir(item);
  }
}
