import { Component } from '@angular/core';
import { MATERIAL_USER_INTERFACE } from '../../../../../dist/ng2-material-components';

@Component({
    selector: 'demo-pre-loader',
    directives: [ MATERIAL_USER_INTERFACE ],
    template: require('./pre-loader.html'),
})
export class DemoPreLoaderComponent { }
