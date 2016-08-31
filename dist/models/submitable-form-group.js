"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var forms_1 = require('@angular/forms');
var SubmitableFormGroup = (function (_super) {
    __extends(SubmitableFormGroup, _super);
    function SubmitableFormGroup(args) {
        _super.call(this, args);
    }
    Object.defineProperty(SubmitableFormGroup.prototype, "submitted", {
        get: function () {
            return this._submitted;
        },
        enumerable: true,
        configurable: true
    });
    SubmitableFormGroup.prototype.markAsSubmitted = function () {
        this._submitted = true;
    };
    SubmitableFormGroup.prototype.getValue = function () {
        var value = {};
        var keys = Object.keys(this.controls);
        var controls = this.controls;
        keys.forEach(function (key) {
            var result = controls[key].value;
            if (result) {
                value[key] = result;
            }
        });
        return value;
    };
    return SubmitableFormGroup;
}(forms_1.FormGroup));
exports.SubmitableFormGroup = SubmitableFormGroup;
