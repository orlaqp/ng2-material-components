import { Component } from '@angular/core';

@Component({
    selector: 'modal-body',
    template: `
        <div class="modal-body">
            <ng-content></ng-content>
        </div>
    `,
})
export class ModalBodyComponent { }

