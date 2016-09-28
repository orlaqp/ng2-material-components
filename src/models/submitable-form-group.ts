import {
    FormGroup,
    AbstractControl,
    ValidatorFn,
    AsyncValidatorFn,
} from '@angular/forms';

export class SubmitableFormGroup extends FormGroup {
    // public controls: {[key: string]: AbstractControl};

    public submitted: boolean;

    constructor(controls: {
        [key: string]: AbstractControl;
        }, validator?: ValidatorFn, asyncValidator?: AsyncValidatorFn) {
        super(controls, validator, asyncValidator);
    }

    public getValue(): any {
        let value: any = {};
        let keys: string[] = Object.keys(this.controls);
        let controls: any = this.controls;

        keys.forEach((key: string) => {
            let result: any = controls[key].value;

            if (result) {
                value[key] = result;
            }
        });

        return value;
    }

}
