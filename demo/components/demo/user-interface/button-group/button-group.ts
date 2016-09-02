import { Component } from '@angular/core';
import { MATERIAL_USER_INTERFACE } from '../../../../../dist/ng2-material-components';

@Component({
    selector: 'demo-button-group',
    directives: [MATERIAL_USER_INTERFACE],
    template: require('./button-group.html'),
})
export class DemoButtonGroupComponent {

    types: string[] = [ 'default', 'primary', 'info', 'success', 'warning', 'danger' ];
    options: string[] = [ 'left', 'center', 'right' ];

    defaultOptionSelected: string = 'center';

    onOptionSelected(option: string) {
        window.alert(`Option ${option} selected`);
    }

}
