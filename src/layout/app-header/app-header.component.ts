import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMenuItem } from '../../models/menu-item';
import { ActionsComponent } from '../../user-interface/actions/actions.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    directives: [ ActionsComponent ],
    templateUrl: 'app-header.component.pug',
})
export class AppHeaderComponent {
    @Input() color: string;
    @Input() addMenuTrigger: boolean;
    @Input() brand: string;
    @Input() sidebarOpen: boolean = false;
    @Input() actions: IMenuItem[];
    @Input() logoPath: string;
    @Input() logoHref: string = '/';

    @Output() onSidebarToggle = new EventEmitter();
    @Output() onActionClicked = new EventEmitter();

    constructor(private _router: Router) { }

    toggleSidebar(): void {
        this.sidebarOpen = !this.sidebarOpen;
        this.onSidebarToggle.emit(this.sidebarOpen);
    }

    headerActionClicked(item: IMenuItem) {
        this.onActionClicked.emit(item);
    }
}
