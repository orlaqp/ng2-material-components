import { Component } from '@angular/core';
import { MATERIAL_USER_INTERFACE } from '../../../../../dist/ng2-material-components';

@Component({
    selector: 'demo-header',
    directives: [ MATERIAL_USER_INTERFACE ],
    template: require('./header.html'),
})
export class DemoHeaderComponent { }
