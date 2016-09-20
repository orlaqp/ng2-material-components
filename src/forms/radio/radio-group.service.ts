import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RadioGroupService {

    public fieldName: string;
    public defaultValue: string;

    private optionSelectedSource = new Subject<string>();

    announceSelectedOption(value: string) {
        this.optionSelectedSource.next(value);
    }

    get optionSelected$(): Observable<string> {
        return this.optionSelectedSource.asObservable();
    }

    constructor() {
    }

}
