import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'app-header.component.pug',
})
export class AppHeaderComponent implements OnInit {
    @Input() color: string;
    @Input() addMenuTrigger: boolean;
    @Input() logoPath: string;
    @Input() brand: string;
    @Input() sidebarOpen: boolean = false;

    @Output() onSidebarToggle = new EventEmitter();

    constructor() { }

    toggleSidebar(): void {
        this.sidebarOpen = !this.sidebarOpen;
        this.onSidebarToggle.emit(this.sidebarOpen);
    }

    ngOnInit() { }
}
