"use strict";
var forms_1 = require('@angular/forms');
var submitable_form_group_1 = require('../../models/submitable-form-group');
var control_with_type_1 = require('../../models/control-with-type');
var type_enum_1 = require('../../models/type-enum');
var custom_validators_1 = require('../validators/custom-validators');
var InputBase = (function () {
    function InputBase(el) {
        this._el = el;
        this.validations = [];
        this.dataType = type_enum_1.TypeEnum.String;
    }
    InputBase.minValidator = function (length) {
        return {
            validator: forms_1.Validators.minLength(length),
            type: 'minlength',
            message: "At least " + length + " characters are required",
        };
    };
    InputBase.maxValidator = function (length) {
        return {
            validator: forms_1.Validators.maxLength(length),
            type: 'maxlength',
            message: "No more than " + length + " characters are allowed",
        };
    };
    InputBase.prototype.onFocus = function (ele) {
        this.toggled = true;
    };
    InputBase.prototype.onBlur = function (ele) {
        if (!this.control.value) {
            this.toggled = false;
        }
    };
    InputBase.prototype.addValidators = function () {
        throw 'Validators should be defined at the derived class';
    };
    InputBase.prototype.addMinValidation = function () {
        if (this.min) {
            this.validations.push({
                validator: custom_validators_1.CustomValidators.minNumber(this.min),
                type: 'tooLow',
                message: "Minimum aceptable value is " + this.min,
            });
        }
    };
    InputBase.prototype.addMaxValidation = function () {
        if (this.max) {
            this.validations.push({
                validator: custom_validators_1.CustomValidators.maxNumber(this.max),
                type: 'tooHigh',
                message: "Maximum aceptable value is " + this.max,
            });
        }
    };
    InputBase.prototype.onInit = function () {
        if (this.floatingLabel === undefined) {
            this.floatingLabel = true;
        }
        this._processControl(this.field);
        if (this.control.value) {
            this.toggled = true;
        }
    };
    InputBase.prototype._getValidators = function () {
        this.addValidators();
        if (this.required) {
            this.validations.push({
                validator: forms_1.Validators.required,
                type: 'required',
                message: 'This field is required',
            });
        }
        var validators = [];
        if (this.validations.length > 0) {
            this.validations.forEach(function (item) { return validators.push(item.validator); });
        }
        return validators;
    };
    InputBase.prototype._processControl = function (field) {
        var that = this;
        var pathTokens = field.split('.');
        var fieldName = pathTokens.pop();
        var fgd = that.fgd;
        var fg = fgd.form;
        pathTokens.forEach(function (token) {
            if (!fgd.control.controls[token]) {
                fgd.control.addControl(token, new submitable_form_group_1.SubmitableFormGroup({}));
            }
            fg = fgd.control.controls[token];
        });
        if (!this.value) {
            this.value = '';
        }
        var validators = this._getValidators();
        this.control = new control_with_type_1.ControlWithType(this.dataType, this.value, forms_1.Validators.compose(validators));
        this.control.__isDecimal = this.decimal;
        fg.addControl(fieldName, this.control);
    };
    return InputBase;
}());
exports.InputBase = InputBase;
