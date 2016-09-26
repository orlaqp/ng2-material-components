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
            { id: '5', title: 'Widgets', icon: 'view-compact', children: [
                { id: '11', title: 'Header', icon: 'navigation', route: '/navigation' },
                { id: '12', title: 'Header', icon: 'navigation', route: '/navigation' },
                { id: '13', title: 'Header', icon: 'navigation', route: '/navigation' },
                { id: '14', title: 'Header', icon: 'navigation', route: '/navigation' },
                { id: '15', title: 'Header', icon: 'navigation', route: '/navigation' },
                { id: '16', title: 'Header', icon: 'navigation', route: '/navigation' },
                { id: '17', title: 'Header', icon: 'navigation', route: '/navigation' },
                { id: '18', title: 'Header', icon: 'navigation', route: '/navigation' },
                { id: '19', title: 'Header', icon: 'navigation', route: '/navigation' },
                { id: '20', title: 'Header', icon: 'navigation', route: '/navigation' },
                { id: '21', title: 'Header', icon: 'navigation', route: '/navigation' },
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
