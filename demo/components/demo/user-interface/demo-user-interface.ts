import { Component } from '@angular/core';
import { processComponents } from '../demo-base/demo-base';
import { MATERIAL_ALL } from '../../../../dist/ng2-material-components';

// components
import { DemoHeaderComponent } from './header/header';
import { DemoActionsComponent } from './actions/actions';
import { DemoButtonComponent } from './button/button';
import { DemoButtonGroupComponent } from './button-group/button-group';
import { DemoCardComponent } from './card/card';

const components: any[] = [
    { category: 'user-interface', key: 'header', component: DemoHeaderComponent },
    { category: 'user-interface', key: 'actions', component: DemoActionsComponent },
    { category: 'user-interface', key: 'button', component: DemoButtonComponent },
    { category: 'user-interface', key: 'button-group', component: DemoButtonGroupComponent },
    { category: 'user-interface', key: 'card', component: DemoCardComponent },
];

const content = {};
processComponents(components);

@Component({
    template: require('./demo-user-interface.jade')({ content, components }),
    directives: [ MATERIAL_ALL ].concat(components.map((c: any) => c.component)),
})
export class DemoUserInterfaceRoute {

}
