"use strict";
function autoCorrectedMmddyyyyPipe(conformedValue) {
    var conformedValueArr = conformedValue.split('');
    var indexesOfPipedChars = [];
    var month1stDigit = parseDigit(conformedValue[0]);
    var month2ndDigit = parseDigit(conformedValue[1]);
    var day1stDigit = parseDigit(conformedValue[3]);
    var day2ndDigit = parseDigit(conformedValue[4]);
    var year1stDigit = parseDigit(conformedValue[6]);
    if (month1stDigit > 1) {
        conformedValueArr.splice(0, 2, 0, month1stDigit);
        indexesOfPipedChars.push(0);
    }
    if ((month1stDigit === 1 && month2ndDigit > 2) ||
        (month1stDigit === 0 && month2ndDigit === 0)) {
        return false;
    }
    if (day1stDigit > 3) {
        conformedValueArr.splice(3, 2, 0, day1stDigit);
        indexesOfPipedChars.push(3);
    }
    if ((day1stDigit === 3 && day2ndDigit > 1) ||
        (day1stDigit === 0 && day2ndDigit === 0)) {
        return false;
    }
    if (year1stDigit === 0) {
        conformedValueArr.splice(6, 3, 2, 0, year1stDigit);
        indexesOfPipedChars.push(6, 7);
    }
    return {
        value: conformedValueArr.join(''),
        indexesOfPipedChars: indexesOfPipedChars,
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = autoCorrectedMmddyyyyPipe;
var digitsNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var digitsStrings = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var allDigits = digitsNumbers.concat(digitsStrings);
function parseDigit(value) {
    var digit = allDigits.find(function (digit) {
        return digit === value;
    });
    if (digit === undefined) {
        return value;
    }
    else {
        return Number(digit);
    }
}
