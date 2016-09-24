import { Component, OnInit, Input} from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
    selector: 'side-menu',
    templateUrl: 'side-menu.component.pug',
})
export class SideMenuComponent implements OnInit {

    @Input() items: MenuItem[];

    constructor() { }

    ngOnInit() { }
}
