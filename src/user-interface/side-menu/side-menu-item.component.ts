import { Subscription } from 'rxjs/Subscription';
import { MenuService } from './menu.service';
import {
    Component,
    OnInit,
    Input,
    trigger,
    state,
    animate,
    transition,
    style } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../models/menu-item';

@Component({
    selector: 'side-menu-item',
    templateUrl: 'side-menu-item.component.pug',
    animations: [
        trigger('isVisibleChanged', [
            state('true', style({ opacity: 1 })),
            state('false', style({ opacity: 0, height: 0 })),
            transition('* => *', animate('.2s')),
        ]),
    ],
})
export class SideMenuItemComponent implements OnInit {
    @Input() alt: boolean;
    @Input() item: MenuItem;

    public expanded: boolean = false;
    public childrenDisplay: string;
    public activeClass: string;

    private _activeItemSubscription: Subscription;

    constructor(private _router: Router, private _menuService: MenuService) { }

    ngOnInit() {
        let that = this;
        this._activeItemSubscription = this._menuService.activeItem$.subscribe((item) => {
            that.activeClass = item.id === that.item.id ?
                 that._menuService.activeClass : '';
        });
    }

    onItemClicked(e: any): void {
        e.preventDefault();

        if (!this.item.children) {
            this._menuService.setActive(this.item);
        }

        // when item contain childrens then forget about everything else
        // this may change in the futuro though
        if (this.item.children && this.item.children.length > 0) {
            this.expanded = !this.expanded;
            // show/hide children items
            // this.childrenDisplay = this.expanded ? 'block' : 'none';
            return;
        }

        if (this.item.route) {
            this._router.navigate([this.item.route]);
        } else if (this.item.url) {
            this._router.navigateByUrl(this.item.url);
        } else if (this.item.externalUrl) {
            window.open(this.item.externalUrl);
        }
    }

}
