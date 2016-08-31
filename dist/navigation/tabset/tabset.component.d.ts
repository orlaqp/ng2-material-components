import { OnInit, OnDestroy } from '@angular/core';
import { TabDirective } from '../tab/tab.directive';
export declare class TabsetComponent implements OnInit, OnDestroy {
    iconTab: boolean;
    protected clazz: boolean;
    tabs: Array<TabDirective>;
    private isDestroyed;
    private _iconTab;
    private classMap;
    ngOnInit(): void;
    ngOnDestroy(): void;
    addTab(tab: TabDirective): void;
    removeTab(tab: TabDirective): void;
    private getClosestTabIndex(index);
    private hasAvailableTabs(index);
    private setClassMap();
}
