import { Component } from '@angular/core';

@Component({
    selector: 'demo-pre-loader',
    template: require('./pre-loader.html'),
})
export class DemoPreLoaderComponent {

    colors: string[] = [ 'red', 'blue', 'green', 'yellow', 'bluegray',
            'amber', 'teal', 'gray', 'pink', 'purple' ];
}
