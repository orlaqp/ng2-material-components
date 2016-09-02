import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { IMenuItem } from '../../models/menu-item';
import { ActionItemDirective } from './action-item.directive';
import { ActionsService } from './actions.service';

@Component({
  selector: 'actions',
  directives: [ ActionItemDirective ],
  templateUrl: 'actions.component.pug',
  providers: [ ActionsService ],
})
export class ActionsComponent implements OnInit {
    @Input() actionItems: IMenuItem[];
    @Input() alt: boolean;

    @Output() actionClicked = new EventEmitter();

    @ViewChildren(ActionItemDirective) items: QueryList<ActionItemDirective>;

    constructor(private actionsService: ActionsService) {
        actionsService.actionClicked$.subscribe(actionItem => {
            debugger;
            this.actionClicked.emit(actionItem);
        });
    }

    public ngOnInit() {
        if (!this.actionItems || this.actionItems.length === 0) {
            throw 'Actions component need actions to show';
        }
    }
}
