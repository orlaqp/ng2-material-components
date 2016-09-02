import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IMenuItem } from '../../models/menu-item';

@Injectable()
export class ActionsService {

    // observable string streams
    actionClicked$ = this.actionClickedSource.asObservable();

    // observable string source
    private actionClickedSource = new Subject<IMenuItem>();

    announceAction(action: IMenuItem) {
        this.actionClickedSource.next(action);
    }

    constructor() { }
}
