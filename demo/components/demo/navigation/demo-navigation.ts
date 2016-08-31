import { Component } from '@angular/core';
import { processComponents, IComponent } from '../demo-base/demo-base';
import { MATERIAL_ALL } from '../../../../dist/ng2-materialcomponents';

// components
import { DemoSideMenuComponent } from './side-menu/side-menu';
import { DemoTabsetComponent } from './tabset/tabset';

const components: any[] = [
    { category: 'navigation', key: 'side-menu', component: DemoSideMenuComponent },
    { category: 'navigation', key: 'tabset', component: DemoTabsetComponent },
];

const content = {};
processComponents(components);

@Component({
    template: require('./demo-navigation.jade')({ content, components }),
    directives: [ MATERIAL_ALL ].concat(components.map((c: any) => c.component)),
})
export class DemoNavigationRoute {
    selectedTab: string[] = [];

    getComponent(key: string): IComponent {
        for (var i = 0, ii = components.length; i < ii; i++) {
            if (components[i].key === key) {
                return components[i];
            }
        }
    }

}
