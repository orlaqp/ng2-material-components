import { FormGroup } from '@angular/forms';
export declare class SubmitableFormGroup extends FormGroup {
    private _submitted;
    submitted: boolean;
    constructor(args: any);
    markAsSubmitted(): void;
    getValue(): any;
}
