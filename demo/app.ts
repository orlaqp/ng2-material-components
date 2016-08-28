require('../dist/ng2-materialform.bundle.css');

import './vendor';
import {Component, enableProdMode} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {APP_ROUTER_PROVIDERS} from './routes';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {MATERIAL_ALL, IMenuItem} from '../dist/ng2-materialform';

// import {provideNglConfig} from '../dist/ng-lightning';

if (__ENV__.production) {
    enableProdMode();
}

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, MATERIAL_ALL ],
    template: require('./app.jade')(__ENV__),
})
export class App {
    public open: boolean;
    public menuItems: IMenuItem[];

    constructor(private _router: Router) {
        this.menuItems = [
            { id: '1', title: 'Layout', icon: 'view-compact', route: '/layout' },
            { id: '2', title: 'Navigation', icon: 'navigation', route: '/navigation' },
            { id: '3', title: 'Forms', icon: 'check-all', route: '/forms' },
            { id: '4', title: 'Widgets', icon: 'view-compact', route: '/widgets' },
        ];
    }

    testRouting() {
        this._router.navigateByUrl('/layout');
    }
}

bootstrap(App, [
    disableDeprecatedForms(),
    MATERIAL_ALL,
    APP_ROUTER_PROVIDERS,
    provideForms(),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
]);
