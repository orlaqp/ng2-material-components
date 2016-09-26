require('../dist/ng2-material-components.bundle.css');

import { Component, enableProdMode } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../dist/ng2-material-components';

if (__ENV__.production) {
    enableProdMode();
}

@Component({
    selector: 'app',
    template: require('./app.jade')(__ENV__),
})
export class AppComponent {
    public open: boolean;
    public menuItems: MenuItem[];
    public headerActions: MenuItem[];
    public appTitle = 'Demo';

    constructor(private _router: Router) {
        this.menuItems = [
            { id: '3', title: 'Forms', icon: 'check-all', route: '/forms' },
            { id: '5', title: 'Tests', icon: 'view-compact', children: [
                { id: '11', title: 'Tes menu 1', icon: 'check', route: '/check' },
                { id: '11', title: 'Test menu 2', icon: 'star', route: '/star' },
                { id: '11', title: 'Test Menu 3', icon: 'headset', route: '/headset' },
            ]},
            { id: '4', title: 'User Interface', icon: 'widgets', route: '/user-interface' },
        ];

        this.headerActions = [
            { id: 'github', icon: 'github', url: 'https://github.com/orlaqp/ng2-material-components' },
        ];
    }

    onActionClicked(item: MenuItem) {
        if (item.url) {
            window.location.href = item.url;
        }
    }

}
