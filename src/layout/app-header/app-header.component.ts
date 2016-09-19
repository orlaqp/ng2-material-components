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
    @Input() logoPath: string;
    @Input() brand: string;
    @Input() sidebarOpen: boolean = false;
    @Input() actions: IMenuItem[];

    @Output() onSidebarToggle = new EventEmitter();
    @Output() onActionClicked = new EventEmitter();

    constructor(private _router: Router) { }

    toggleSidebar(): void {
        this.sidebarOpen = !this.sidebarOpen;
        this.onSidebarToggle.emit(this.sidebarOpen);
    }

    headerActionClicked(item: IMenuItem) {
        if (item.url) {
            window.location.href = item.url;
        }

        this.onActionClicked.emit(item);
    }
}
