"use strict";
function processNumber(control) {
    'use strict';
    if (control.value.trim() === '') {
        return NaN;
    }
    var val = control.value.replace(',', '');
    if (val.length > 2 && control.__isDecimal) {
        val = val.replace('.', '');
        var num = val.substring(0, val.length - 2);
        var dec = val.substring(val.length - 2, val.length);
        val = num + "." + dec;
    }
    return +val;
}
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.emailAddress = function (control) {
        if (control.value.trim() === '') {
            return null;
        }
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (!EMAIL_REGEXP.test(control.value)) {
            return { invalidEmail: true };
        }
        return null;
    };
    CustomValidators.complexPassword = function (control) {
        if (control.value.trim() === '') {
            return null;
        }
        var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
        var validPassword = regExp.test(control.value);
        if (!validPassword) {
            return { weakPassword: true };
        }
        return null;
    };
    CustomValidators.minNumber = function (min) {
        return function (control) {
            var value = processNumber(control);
            if (isNaN(value)) {
                return null;
            }
            if (value < min) {
                return { tooLow: true };
            }
            return null;
        };
    };
    CustomValidators.maxNumber = function (max) {
        return function (control) {
            var value = processNumber(control);
            if (isNaN(value)) {
                return null;
            }
            if (value > max) {
                return { tooHigh: true };
            }
            return null;
        };
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
