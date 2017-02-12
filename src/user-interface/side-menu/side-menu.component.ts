import { Subscription } from 'rxjs/Subscription';
import { MenuService } from './menu.service';
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
    selector: 'side-menu',
    templateUrl: 'side-menu.component.pug',
    providers: [ MenuService ],
})
export class SideMenuComponent implements OnInit, OnDestroy {
    @Input() class: string;
    @Input() alt = false;
    @Input() items: MenuItem[];
    @Input() activeClass: string = 'active';
    @Input() activeIcon: string = '';

    @Output() itemClicked = new EventEmitter<MenuItem>();

    private _activeItemSubscription: Subscription;

    constructor(private _service: MenuService) {}

    ngOnInit() {
        this._activeItemSubscription = this._service.activeItem$.subscribe((item) => {
            this.itemClicked.emit(item);
        });

        this._service.initialize(this.items, this.activeClass, this.activeIcon);
    }

    ngOnDestroy() {
        this._activeItemSubscription.unsubscribe();
    }
}
