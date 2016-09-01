import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'card-body',
    templateUrl: 'card-body.component.pug',
})
export class CardBodyComponent implements OnInit {

    @Input() padded: boolean = false;

    constructor() { }

    ngOnInit() { }
}
