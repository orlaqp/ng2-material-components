import { Component, Input} from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
    selector: 'side-menu',
    templateUrl: 'side-menu.component.pug',
})
export class SideMenuComponent {
    @Input() items: MenuItem[];
}
