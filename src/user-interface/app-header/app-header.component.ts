import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
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
    @Input() goBackActive: boolean = false;

    @Output() onSidebarToggle = new EventEmitter();
    @Output() onActionClicked = new EventEmitter();

    constructor(
            private _router: Router,
            private _location: Location
        ) { }

    toggleSidebar(): void {
        this.sidebarOpen = !this.sidebarOpen;
        this.onSidebarToggle.emit(this.sidebarOpen);
    }

    headerActionClicked(item: MenuItem) {
        this.onActionClicked.emit(item);
    }

     goBack(){
        this._location.back();
    }
}
