import { FormGroup } from '@angular/forms';

export class SubmitableFormGroup extends FormGroup {
    // public controls: {[key: string]: AbstractControl};

    private _submitted: boolean;

    get submitted(): boolean {
        return this._submitted;
    }

    constructor(args: any) {
        super(args);
    }

    public markAsSubmitted(): void {
        this._submitted = true;
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
