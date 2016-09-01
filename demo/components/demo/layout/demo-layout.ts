import { Component } from '@angular/core';
import { processComponents, IComponent } from '../demo-base/demo-base';
import { MATERIAL_ALL } from '../../../../dist/ng2-material-components';

// components
import { DemoAppHeaderComponent } from './app-header/app-header';
import { DemoSidebarComponent } from './sidebar/sidebar';

const components: any[] = [
    { category: 'layout', key: 'app-header', component: DemoAppHeaderComponent },
    { category: 'layout', key: 'sidebar', component: DemoSidebarComponent },
];

const content = {};
processComponents(components);

@Component({
    template: require('./demo-layout.jade')({ content, components }),
    directives: [ MATERIAL_ALL ].concat(components.map((c: any) => c.component)),
})
export class DemoLayoutRoute {
    selectedTab: string[] = [];

    getComponent(key: string): IComponent {
        for (var i = 0, ii = components.length; i < ii; i++) {
            if (components[i].key === key) {
                return components[i];
            }
        }
    }

}
