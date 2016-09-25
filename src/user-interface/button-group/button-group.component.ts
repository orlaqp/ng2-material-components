import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bw-button-group',
  templateUrl: 'button-group.component.pug',
})
export class ButtonGroupComponent {

    @Input() options: string[];
    @Input() type: string; // default, primary, info, success, warning, danger
    @Input() activeOption: string;
    @Input() size: string = 'default'; // lg, sm, xs

    @Output() optionSelected = new EventEmitter<string>();

    activateOption(option: string) {
        this.activeOption = option;

        this.optionSelected.emit(option);
    }

}
