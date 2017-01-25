import { FormService } from '../form.service';
import { ElementRef } from '@angular/core';
import {
    FormGroup,
    Validators } from '@angular/forms';
import { SubmitableFormGroup } from '../../models/submitable-form-group';
import { ControlWithType }  from '../../models/control-with-type';
import { TypeEnum }  from '../../models/type-enum';
import { CustomValidators } from '../validators/custom-validators';
import { ValidationInfo } from '../../models/validation-info';

export class InputBase {

    public dataType: TypeEnum;
    public model: Object;
    public fg: FormGroup;
    public field: string;
    public floatingLabel: boolean;
    public required: boolean;
    public min: number;
    public max: number;
    public value: any;
    public decimal: boolean;
    public disabled: boolean;

    public validations: ValidationInfo[];
    public control: ControlWithType;
    public toggled: boolean;
    public inputType: string = 'text'; // text, password, number, email, datetime, date

    public _el: ElementRef;

    public initialized = false;

    static minValidator(length: number): ValidationInfo {
        return {
            validator: Validators.minLength(length),
            type: 'minlength',
            message: 'At least %s characters are required',
            args: [length],
        };
    }

    static maxValidator(length: number): ValidationInfo {
        return {
            validator: Validators.maxLength(length),
            type: 'maxlength',
            message: 'No more than %s characters are allowed',
            args: [length],
        };
    }

    constructor(el: ElementRef, public formService: FormService) {
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
                message: 'Minimum aceptable value is %s',
                args: [this.min],
            });
        }
    }

    public addMaxValidation(): void {
        if (this.max) {
            this.validations.push({
                validator: CustomValidators.maxNumber(this.max),
                type: 'tooHigh',
                message: 'Maximum aceptable value is %s',
                args: [this.max],
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

        this.initialized = true;
    }

    public translate(validation: ValidationInfo): string {
        return this.formService.translate(validation.message, ...validation.args);
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
            this.validations.forEach((item: ValidationInfo) => validators.push(item.validator));
        }

        return validators;
    }

    private _processControl(field: string): void {
        let that: InputBase = this;
        let pathTokens: string[] = field.split('.');
        // the latest element is the array indicates the control name so I should
        // not process it
        let fieldName: string = pathTokens.pop();
        let fg: FormGroup = that.fg;

        // create controls group tree
        pathTokens.forEach((token: string) => {
            if (!fg.controls[token]) {
                fg.addControl(token, new SubmitableFormGroup({}));
            }
            fg = <FormGroup>fg.controls[token];
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

        // Disable this input via the form control instead of the DOM.
        // This method will do the dom for me too
        if (this.disabled) {
            this.control.disable();
        }

        // subscribe for changes
        // this.control.valueChanges.subscribe(data => {
        //     console.log('value changed: ' + data);
        // });

        // because I am using an input mask control I need to pass this info
        // in order to treat the validators correctly (expect always two decimal places)
        this.control.__isDecimal = this.decimal;
        fg.addControl(fieldName, this.control);

        // if (!this.required) {
        //     fg.exclude(fieldName);
        // }
    }

}
