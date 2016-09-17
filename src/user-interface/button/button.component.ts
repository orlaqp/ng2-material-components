import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bw-button',
    templateUrl: 'button.component.pug',
})
export class ButtonComponent implements OnInit, OnChanges {

    @Input() title: string;
    @Input() color: string;
    @Input() icon: string;
    @Input() block: boolean;
    @Input() circular: boolean;
    @Input() rounded: boolean;
    @Input() simple: boolean;

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

    ngOnChanges(changes: {[propertyName: string]: any}) {
        let simple: boolean = changes['simple'];

        // if (simple) {
        //     this.color = 'white';
        // }
    }

    onClick(e: MouseEvent): void {
        e.preventDefault();

        this.clicked.emit(null);
    }
}
