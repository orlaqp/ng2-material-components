"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var forms_1 = require('@angular/forms');
var type_enum_1 = require('./type-enum');
var ControlWithType = (function (_super) {
    __extends(ControlWithType, _super);
    function ControlWithType(dataType, value, validator, asyncValidator) {
        if (value === void 0) { value = null; }
        if (validator === void 0) { validator = null; }
        if (asyncValidator === void 0) { asyncValidator = null; }
        _super.call(this, value, validator, asyncValidator);
        this.dataType = dataType;
    }
    ControlWithType.prototype.getValue = function (mandatory) {
        var value;
        switch (this.dataType) {
            case type_enum_1.TypeEnum.String:
                value = this.value;
                break;
            case type_enum_1.TypeEnum.Number:
                value = Number(this.value.replace(',', ''));
                break;
            case type_enum_1.TypeEnum.Date:
                break;
            case type_enum_1.TypeEnum.Boolean:
                value = Boolean(this.value);
                break;
            default:
                value = this.value;
        }
        return mandatory || value ? value : undefined;
    };
    return ControlWithType;
}(forms_1.FormControl));
exports.ControlWithType = ControlWithType;
