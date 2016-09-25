import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../../models/menu-item';
import { ActionsService } from './actions.service';

@Component({
  selector: 'actions',
  templateUrl: 'actions.component.pug',
  providers: [ ActionsService ],
})
export class ActionsComponent implements OnInit {
    @Input() actionItems: MenuItem[];
    @Input() alt: boolean = false;
    @Input() showBig: boolean = false;
    @Input() color: string = 'light-gray';

    @Output() actionClicked = new EventEmitter();

    constructor(private actionsService: ActionsService) {
        actionsService.actionClicked$.subscribe(actionItem => {
            this.actionClicked.emit(actionItem);
        });
    }

    public ngOnInit() {
        this.actionsService.showBig = this.showBig;

        if (!this.actionItems || this.actionItems.length === 0) {
            throw 'Actions component need actions to show';
        }
    }

    get dropdown(): boolean {
        // if any action item contain children the I should add the dropdown class
        return this.actionItems.some((item: MenuItem) => {
            return item.children !== undefined;
        });
    }
}
