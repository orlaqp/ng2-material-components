import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { MenuItem } from '../../models/menu-item';

@Injectable()
export class ActionsService {

    showBig: boolean;

    // observable string streams
    actionClicked$: Observable<MenuItem>;

    // observable string source
    private actionClickedSource = new Subject<MenuItem>();

    announceAction(action: MenuItem) {
        this.actionClickedSource.next(action);
    }

    constructor() {
        this.actionClicked$ = this.actionClickedSource.asObservable();
    }
}
