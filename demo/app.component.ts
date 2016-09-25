require('../dist/ng2-material-components.bundle.css');

import { Component, enableProdMode, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../dist/ng2-material-components';

if (__ENV__.production) {
    enableProdMode();
}

@Component({
    selector: 'app',
    template: require('./app.jade')(__ENV__),
})
export class AppComponent implements OnInit {
    public open: boolean;
    public menuItems: MenuItem[];
    public headerActions: MenuItem[];
    public appTitle = 'Demo';

    // private _headerActionsSubject: Subject<MenuItem[]>;

    constructor(private _router: Router) {
        this.menuItems = [
            { id: '1', title: 'Layout', icon: 'view-compact', children: [
                { id: '11', title: 'Header', icon: 'navigation', route: '/navigation' }
            ] },
            { id: '2', title: 'Navigation', icon: 'navigation', route: '/navigation' },
            { id: '3', title: 'Forms', icon: 'check-all', route: '/forms' },
            { id: '4', title: 'User Interface', icon: 'widgets', route: '/user-interface' },
            { id: '5', title: 'Widgets', icon: 'view-compact', route: '/widgets' },
        ];

        this.headerActions = [
            { id: 'github', icon: 'github', url: 'https://github.com/orlaqp/ng2-material-components' },
        ];
    }

    ngOnInit() { }

    onActionClicked(item: MenuItem) {
        if (item.url) {
            window.location.href = item.url;
        }
    }

}
