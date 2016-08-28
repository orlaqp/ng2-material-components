import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.pug',
})
export class SidebarComponent implements OnInit {

    @Input() open: boolean;

    constructor() { }

    ngOnInit() { }
}
