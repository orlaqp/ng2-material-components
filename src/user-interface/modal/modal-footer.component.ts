import { Component, Input } from '@angular/core';
import { ModalComponent } from './modal.component';

@Component({
    selector: 'modal-footer',
    templateUrl: 'modal-footer.component.pug',
})
export class ModalFooterComponent {
    @Input('show-default-buttons') showDefaultButtons: boolean = false;
    @Input('dismiss-button-label') dismissButtonLabel: string = 'Dismiss';
    @Input('close-button-label') closeButtonLabel: string = 'Close';
    constructor(private modal: ModalComponent) { }
}
