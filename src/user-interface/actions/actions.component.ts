import { Component, OnInit, Input } from '@angular/core';
import { IMenuItem } from '../../models/menu-item';
import { ActionItemDirective } from './action-item.directive';

@Component({
  selector: 'actions',
  directives: [ ActionItemDirective ],
  templateUrl: 'actions.component.pug',
})
export class ActionsComponent implements OnInit {
    @Input() actionItems: IMenuItem[];
    @Input() alt: boolean;

    constructor() { }

    public ngOnInit() {
        if (!this.actionItems || this.actionItems.length === 0) {
            throw 'Actions component need actions to show';
        }
    }
}
