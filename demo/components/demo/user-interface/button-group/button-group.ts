import { Component } from '@angular/core';

@Component({
    selector: 'demo-button-group',
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
