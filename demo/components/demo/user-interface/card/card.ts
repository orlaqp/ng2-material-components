import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { MATERIAL_USER_INTERFACE, MenuItem } from '../../../../../dist/ng2-material-components';

@Component({
    selector: 'demo-card',
    directives: [MATERIAL_USER_INTERFACE, REACTIVE_FORM_DIRECTIVES],
    template: require('./card.html'),
})
export class DemoCardComponent {

    public actionItems: MenuItem[] = [
        { id: '1', icon: 'refresh-alt' },
        { id: '1', icon: 'download' },
        { id: '1', icon: 'more-vert', children: [
            { id: '31', title: 'Toggle Fullscreen', icon: 'fullscreen' },
            { id: '32', title: 'Reset', icon: 'delete' },
            { id: '33', title: 'Settings', icon: 'settings' },
        ] },
    ];

    onActionClicked() {
        window.alert('Action Clicked');
    }
}
