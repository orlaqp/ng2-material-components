import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { MATERIAL_USER_INTERFACE, MenuItem } from '../../../../../dist/ng2-material-components';

@Component({
    selector: 'demo-actions',
    directives: [MATERIAL_USER_INTERFACE, REACTIVE_FORM_DIRECTIVES],
    template: require('./actions.html'),
})
export class DemoActionsComponent {

    actionItems: MenuItem[] = [
        { id: '1', icon: 'refresh-alt' },
        { id: '2', icon: 'download' },
        { id: '3', icon: 'more-vert', children: [
            { id: '31', title: 'Toggle Fullscreen', icon: 'fullscreen' },
            { id: '32', title: 'Reset', icon: 'delete' },
            { id: '33', title: 'Settings', icon: 'settings' },
        ] },
    ];

    actionsColor: string = 'light-gray';

    onActionClicked(menuItem: MenuItem): void {
        window.alert('Action: ' + menuItem.id + ' clicked');
    }

    changeActionsColor(color: string) {
        this.actionsColor = color;
    }
}
