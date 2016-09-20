import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../models/menu-item';

@Component({
    selector: 'side-menu-item',
    directives: [ SideMenuItemComponent ],
    templateUrl: 'side-menu-item.component.pug',
})
export class SideMenuItemComponent implements OnInit {

    @Input() item: MenuItem;

    public expanded: boolean;
    public childrenDisplay: string;

    constructor(private _router: Router) { }

    ngOnInit() { }

    onItemClicked(e: any): void {
        e.preventDefault();

        if (this.item.route) {
            this._router.navigate([this.item.route]);
        } else if (this.item.url) {
            this._router.navigateByUrl(this.item.url);
        } else if (this.item.children) {
            this.expanded = !this.expanded;
            // show/hide children items
            this.childrenDisplay = this.expanded ? 'block' : 'none';
        }

    }

}
