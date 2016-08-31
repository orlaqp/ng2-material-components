import { OnInit, EventEmitter } from '@angular/core';
export declare class AppHeaderComponent implements OnInit {
    color: string;
    addMenuTrigger: boolean;
    logoPath: string;
    brand: string;
    sidebarOpen: boolean;
    onSidebarToggle: EventEmitter<{}>;
    constructor();
    toggleSidebar(): void;
    ngOnInit(): void;
}
