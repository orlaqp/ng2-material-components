import { Component, OnInit, Input} from '@angular/core';
import { MenuItem } from '../../models/menu-item';
import { SideMenuItemComponent } from './side-menu-item.component';

@Component({
    selector: 'side-menu',
    directives: [ SideMenuItemComponent ],
    templateUrl: 'side-menu.component.pug',
})
export class SideMenuComponent implements OnInit {

    @Input() items: MenuItem[];

    constructor() { }

    ngOnInit() { }
}
