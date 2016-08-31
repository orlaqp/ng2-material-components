import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '../../models/menu-item';
export declare class SideMenuItemComponent implements OnInit {
    private _router;
    item: IMenuItem;
    expanded: boolean;
    childrenDisplay: string;
    constructor(_router: Router);
    ngOnInit(): void;
    onItemClicked(e: any): void;
}
