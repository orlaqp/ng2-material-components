import { Component } from '@angular/core';

@Component({
    selector: 'demo-button',
    template: require('./button.html'),
})
export class DemoButtonComponent {

    colors: string[] = [ 'white', 'cyan', 'teal', 'amber', 'orange', 'deeporange', 'red', 'pink',
                         'lightblue', 'blue', 'indigo', 'lime', 'lightgreen', 'green', 'purple',
                         'deeppurple', 'gray', 'bluegray', 'black' ];

    buttons: any = [
        { title: 'home', icon: 'home', color: 'cyan' },
        { title: 'search', icon:  'search', color: 'teal' },
        { title: 'more', icon:  'more-vert', color: 'amber' },
        { title: 'forward', icon:  'arrow-forward', color: 'orange' },
        { title: 'back', icon:  'arrow-back', color: 'deeporange' },
        { title: 'sync', icon:  'refresh', color: 'red' },
        { title: 'check', icon:  'check', color: 'pink' },
        { title: 'close', icon:  'close', color: 'lightblue' },
        { title: 'menu', icon:  'menu', color: 'blue' },
        { title: 'apps', icon:  'apps', color: 'indigo' },
        { title: 'done', icon:  'check-all', color: 'lime' },
        { title: 'up', icon:  'trending-up', color: 'lightgreen' },
        { title: 'get', icon:  'apps', color: 'green' },
        { title: 'call', icon:  'phone', color: 'purple' },
    ];

    onClicked() {
        window.alert('Button clicked');
    }

}
