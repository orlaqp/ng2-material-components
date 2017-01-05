import { Component, Input } from '@angular/core';

@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.pug',
})
export class SidebarComponent {
    @Input() open: boolean;
    @Input() fullHeight = false;
}
