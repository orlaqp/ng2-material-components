import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bw-button',
    templateUrl: 'button.component.pug',
})
export class ButtonComponent implements OnInit {

    @Input() title: string;
    @Input() color: string;
    @Input() icon: string;
    @Input() block: boolean;
    @Input() circular: boolean;
    @Input() rounded: boolean;
    @Input() simple: boolean;
    @Input() type = 'button';

    @Input() size: string = ''; // lg, sm, xs
    @Input() disabled: boolean;

    @Output() clicked = new EventEmitter();

    simpleColor: string;

    constructor() { }

    get iconAndtext(): boolean {
        return this.title !== undefined && this.icon !== undefined && !this.circular;
    }

    ngOnInit() {
        if (this.simple) {
            this.simpleColor = this.color;
            this.color = null;
        }
    }

    onClick(e: MouseEvent): void {
        e.preventDefault();

        this.clicked.emit(null);
    }
}
