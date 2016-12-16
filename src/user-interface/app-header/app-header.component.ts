import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../../models/menu-item';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: 'app-header.component.pug',
})
export class AppHeaderComponent {
    @Input() color: string;
    @Input() addMenuTrigger: boolean;
    @Input() brand: string;
    @Input() sidebarOpen: boolean = false;
    @Input() actions: MenuItem[];
    @Input() logoPath: string;
    @Input() logoHref: string = '/';
    @Input() backActive: boolean = false;

    @Output() onSidebarToggle = new EventEmitter();
    @Output() onActionClicked = new EventEmitter();
    @Output() onbackActionClicked = new EventEmitter();

    constructor(
            private _router: Router) { }

    toggleSidebar(): void {
        //this.sidebarOpen = !this.sidebarOpen;
        //this.onSidebarToggle.emit(this.sidebarOpen);
        this.backActive = true;
    }

    headerActionClicked(item: MenuItem) {
        this.onActionClicked.emit(item);
    }

    backActionClicked() {
         this.onbackActionClicked.emit();
    }
}
