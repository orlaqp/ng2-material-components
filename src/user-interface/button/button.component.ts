import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bw-button',
    templateUrl: 'button.component.pug',
})
export class ButtonComponent implements OnChanges {

    @Input() title: string;
    @Input() color: string;
    @Input() icon: string;
    @Input() block: boolean;
    @Input() circular: boolean;
    @Input() rounded: boolean;
    @Input() simple: boolean;
    @Input() simpleColor: string;

    @Input() size: string = ''; // lg, sm, xs
    @Input() disabled: boolean;

    @Output() clicked = new EventEmitter();

    constructor() { }

    get iconAndtext(): boolean {
        return this.title !== undefined && this.icon !== undefined && !this.circular;
    }

    ngOnChanges(changes: {[propertyName: string]: any}) {
        let simple: boolean = changes['simple'];

        if (simple) {
            this.color = 'white';
        }
    }

    onClick(e: MouseEvent): void {
        e.preventDefault();

        this.clicked.emit(null);
    }
}
