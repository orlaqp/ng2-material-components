import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'card-action',
    templateUrl: 'card-action.component.pug',
})
export class CardActionComponent {

    @Input() color: string;
    @Input() icon: string;

    @Output() actionClicked = new EventEmitter();

    onClicked(event: MouseEvent): void {
        event.preventDefault();

        this.actionClicked.emit(null);
    }

}
