import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bw-button',
    templateUrl: 'button.component.pug',
})
export class ButtonComponent {

    @Input() title: string;
    @Input() color: string;
    @Input() icon: string;
    @Input() block: boolean;
    @Input() circular: boolean;

    @Input() size: string = ''; // lg, sm, xs
    @Input() disabled: boolean;

    @Output() clicked = new EventEmitter();

    constructor() { }

    get iconAndtext(): boolean {
        return this.title !== undefined && this.icon !== undefined && !this.circular;
    }

    onClick(e: MouseEvent): void {
        e.preventDefault();

        this.clicked.emit(null);
    }
}
