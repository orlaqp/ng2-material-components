import { ElementRef } from '@angular/core';
import {
    FormGroupDirective,
    FormGroup,
    Validators } from '@angular/forms';
import { SubmitableFormGroup } from '../../models/submitable-form-group';
import { ControlWithType }  from '../../models/control-with-type';
import { TypeEnum }  from '../../models/type-enum';
import { CustomValidators } from '../validators/custom-validators';
import { IValidationInfo } from '../../models/validation-info';

export class InputBase {

    public dataType: TypeEnum;
    public model: Object;
    public fgd: FormGroupDirective;
    public field: string;
    public floatingLabel: boolean;
    public required: boolean;
    public min: number;
    public max: number;
    public value: any;
    public decimal: boolean;

    public validations: IValidationInfo[];
    public control: ControlWithType;
    public toggled: boolean;

    public _el: ElementRef;

    static minValidator(length: number): IValidationInfo {
        return {
            validator: Validators.minLength(length),
            type: 'minlength',
            message: `At least ${length} characters are required`,
        };
    }

    static maxValidator(length: number): IValidationInfo {
        return {
            validator: Validators.maxLength(length),
            type: 'maxlength',
            message: `No more than ${length} characters are allowed`,
        };
    }

    constructor(el: ElementRef) {
        this._el = el;
        this.validations = [];
        // be default assign string type becasue it is the most common
        this.dataType = TypeEnum.String;
    }

    public onFocus(ele: any): void {
        this.toggled = true;
    }

    public onBlur(ele: any): void {
        if (!this.control.value) {
            this.toggled = false;
        }
    }

    public addValidators(): void {
        throw 'Validators should be defined at the derived class';
    }

    public addMinValidation(): void {
        if (this.min) {
            this.validations.push({
                validator: CustomValidators.minNumber(this.min),
                type: 'tooLow',
                message: `Minimum aceptable value is ${this.min}`,
            });
        }
    }

    public addMaxValidation(): void {
        if (this.max) {
            this.validations.push({
                validator: CustomValidators.maxNumber(this.max),
                type: 'tooHigh',
                message: `Maximum aceptable value is ${this.max}`,
            });
        }
    }

    public onInit(): void {
        // by default labels should float
        if (this.floatingLabel === undefined) {
            this.floatingLabel = true;
        }

        this._processControl(this.field);

        if (this.control.value) {
            this.toggled = true;
        }
    }

    private _getValidators(): any {
        this.addValidators();

        if (this.required) {
            this.validations.push({
                validator: Validators.required,
                type: 'required',
                message: 'This field is required',
            });
        }

        let validators: any = [];

        // only add validators if neccessary
        if (this.validations.length > 0) {
            this.validations.forEach((item: IValidationInfo) => validators.push(item.validator));
        }

        return validators;
    }

    private _processControl(field: string): void {
        let that: InputBase = this;
        let pathTokens: string[] = field.split('.');
        // the latest element is the array indicates the control name so I should
        // not process it
        let fieldName: string = pathTokens.pop();
        let fgd: FormGroupDirective = that.fgd;
        let fg: FormGroup = fgd.form;

        // create controls group tree
        pathTokens.forEach((token: string) => {
            if (!fgd.control.controls[token]) {
                fgd.control.addControl(token, new SubmitableFormGroup({}));
            }
            fg = <FormGroup>fgd.control.controls[token];
        });

        // make sure value is not null
        if (!this.value) {
            this.value = '';
        }

        let validators: any = this._getValidators();
        this.control = new ControlWithType(
            this.dataType,
            this.value,
            Validators.compose(validators));

        // subscribe for changes
        // this.control.valueChanges.subscribe(data => {
        //     debugger;
        //     console.log('value changed: ' + data);
        // });

        // because I am using an input mask control I need to pass this info
        // in order to treat the validators correctly (expect always two decimal places)
        this.control.__isDecimal = this.decimal;
        fg.addControl(fieldName, this.control);

        // if (!this.required) {
        //     fgd.control.exclude(fieldName);
        // }
    }

}
