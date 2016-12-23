import { Component } from '@angular/core';
import { processComponents } from '../demo-base/demo-base';

// components
import { DemoAppHeaderComponent } from './app-header/app-header';
import { DemoSidebarComponent } from './sidebar/sidebar';
import { DemoSideMenuComponent } from './side-menu/side-menu';
import { DemoTabsetComponent } from './tabset/tabset';
import { DemoHeaderComponent } from './header/header';
import { DemoActionsComponent } from './actions/actions';
import { DemoButtonComponent } from './button/button';
import { DemoButtonGroupComponent } from './button-group/button-group';
import { DemoPreLoaderComponent } from './pre-loader/pre-loader';
import { DemoCardComponent } from './card/card';
import { DemoModalComponent } from './modal/modal';

const components: any[] = [
    { category: 'user-interface', key: 'app-header', component: DemoAppHeaderComponent },
    { category: 'user-interface', key: 'sidebar', component: DemoSidebarComponent },
    { category: 'user-interface', key: 'side-menu', component: DemoSideMenuComponent },
    { category: 'user-interface', key: 'tabset', component: DemoTabsetComponent },
    { category: 'user-interface', key: 'header', component: DemoHeaderComponent },
    { category: 'user-interface', key: 'actions', component: DemoActionsComponent },
    { category: 'user-interface', key: 'button', component: DemoButtonComponent },
    { category: 'user-interface', key: 'button-group', component: DemoButtonGroupComponent },
    { category: 'user-interface', key: 'pre-loader', component: DemoPreLoaderComponent },
    { category: 'user-interface', key: 'card', component: DemoCardComponent },
    { category: 'user-interface', key: 'modal', component: DemoModalComponent },
];

const content = {};
processComponents(components);

@Component({
    template: require('./demo-user-interface.jade')({ content, components }),
})
export class DemoUserInterfaceRoute {

}
