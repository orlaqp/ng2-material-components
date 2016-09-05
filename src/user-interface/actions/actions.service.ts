import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IMenuItem } from '../../models/menu-item';

@Injectable()
export class ActionsService {

    showBig: boolean;

    // observable string streams
    actionClicked$: Observable<IMenuItem>;

    // observable string source
    private actionClickedSource = new Subject<IMenuItem>();

    announceAction(action: IMenuItem) {
        this.actionClickedSource.next(action);
    }

    constructor() {
        this.actionClicked$ = this.actionClickedSource.asObservable();
    }
}
