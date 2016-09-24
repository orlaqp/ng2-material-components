require('../dist/ng2-material-components.bundle.css');

import './vendor';
import { Component, enableProdMode, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { APP_ROUTER_PROVIDERS } from './routes';
// import { disableDeprecatedForms, provideForms } from '@angular/forms';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';

import { MenuItem } from '../dist/ng2-material-components';

// import {provideNglConfig} from '../dist/ng-lightning';

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
            { id: '1', title: 'Layout', icon: 'view-compact', route: '/layout' },
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

// bootstrap(App, [
//     disableDeprecatedForms(),
//     MATERIAL_ALL,
//     APP_ROUTER_PROVIDERS,
//     provideForms(),
//     { provide: LocationStrategy, useClass: HashLocationStrategy },
// ]);
