import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
    selector: 'side-menu',
    templateUrl: 'side-menu.component.pug',
})
export class SideMenuComponent {
    @Input() alt = false;
    @Input() items: MenuItem[];
    @Output() itemClicked = new EventEmitter<MenuItem>();

    onItemClicked(item: MenuItem) {
        this.itemClicked.emit(item);
    }
}
