import { Component, Input } from '@angular/core';
import { ModalComponent } from './modal.component';

@Component({
    selector: 'modal-header',
    templateUrl: 'modal-header.component.pug',
})
export class ModalHeaderComponent {
    @Input('show-close') showClose: boolean = false;
    constructor(private modal: ModalComponent) { }
}
