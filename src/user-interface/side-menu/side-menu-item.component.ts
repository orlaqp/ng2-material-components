import { Component, OnInit, Input,
    trigger, state, animate, transition, style } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../models/menu-item';

@Component({
    selector: 'side-menu-item',
    templateUrl: 'side-menu-item.component.pug',
    // animations: [
    //     trigger('isVisibleChanged', [
    //         state('true', style({ opacity: 1 })),
    //         state('false', style({ opacity: 0 })),
    //         transition('* => *', animate('.5s')),
    //     ]),
    // ],
})
export class SideMenuItemComponent implements OnInit {

    @Input() item: MenuItem;

    public expanded: boolean = false;
    public childrenDisplay: string;

    constructor(private _router: Router) { }

    ngOnInit() { }

    onItemClicked(e: any): void {
        e.preventDefault();

        // when item contain childrens then forget about everything else
        // this may change in the futuro though
        if (this.item.children && this.item.children.length > 0) {
            this.expanded = !this.expanded;
            // show/hide children items
            this.childrenDisplay = this.expanded ? 'block' : 'none';
            return;
        }

        if (this.item.route) {
            this._router.navigate([this.item.route]);
        } else if (this.item.url) {
            this._router.navigateByUrl(this.item.url);
        }

    }

}
