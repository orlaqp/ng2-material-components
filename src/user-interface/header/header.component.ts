import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bw-header',
    templateUrl: 'header.component.pug',
})
export class HeaderComponent implements OnInit {
    @Input() class: string;
    @Input() block: boolean;

    constructor() { }

    ngOnInit() { }
}
