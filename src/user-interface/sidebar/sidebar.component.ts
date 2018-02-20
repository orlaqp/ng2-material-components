import { Component, Input } from '@angular/core';

@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.pug',
})
export class SidebarComponent {
    @Input() class: string;
    @Input() open: boolean;
    @Input() fullHeight = false;
}
