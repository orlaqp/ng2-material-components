"use strict";
var utilities_1 = require('./utilities');
var constants_1 = require('./constants');
var emptyString = '';
;
function conformToMask(rawValue, mask, config) {
    if (rawValue === void 0) { rawValue = emptyString; }
    if (mask === void 0) { mask = emptyString; }
    if (config === void 0) { config = {}; }
    var _a = config.guide, guide = _a === void 0 ? true : _a, _b = config.previousConformedValue, previousConformedValue = _b === void 0 ? emptyString : _b, _c = config.placeholderChar, placeholderChar = _c === void 0 ? constants_1.placeholderChar : _c, _d = config.placeholder, placeholder = _d === void 0 ? utilities_1.convertMaskToPlaceholder(mask, constants_1.placeholderChar) : _d, currentCaretPosition = config.currentCaretPosition, keepCharPositions = config.keepCharPositions;
    var suppressGuide = guide === false && previousConformedValue !== undefined;
    var rawValueLength = rawValue.length;
    var previousConformedValueLength = previousConformedValue.length;
    var placeholderLength = placeholder.length;
    var maskLength = mask.length;
    var editDistance = rawValueLength - previousConformedValueLength;
    var isAddition = editDistance > 0;
    var indexOfFirstChange = currentCaretPosition + (isAddition ? -editDistance : 0);
    var indexOfLastChange = indexOfFirstChange + Math.abs(editDistance);
    if (keepCharPositions === true && !isAddition) {
        var compensatingPlaceholderChars = emptyString;
        for (var i = indexOfFirstChange; i < indexOfLastChange; i++) {
            if (placeholder[i] === placeholderChar) {
                compensatingPlaceholderChars += placeholderChar;
            }
        }
        rawValue = (rawValue.slice(0, indexOfFirstChange) +
            compensatingPlaceholderChars +
            rawValue.slice(indexOfFirstChange, rawValueLength));
    }
    var rawValueArr = rawValue
        .split(emptyString)
        .map(function (char, i) { return ({ char: char, isNew: i >= indexOfFirstChange && i < indexOfLastChange }); });
    for (var i = rawValueLength - 1; i >= 0; i--) {
        var char = rawValueArr[i].char;
        if (char !== placeholderChar) {
            var shouldOffset = i >= indexOfFirstChange && previousConformedValueLength === maskLength;
            if (char === placeholder[(shouldOffset) ? i - editDistance : i]) {
                rawValueArr.splice(i, 1);
            }
        }
    }
    var conformedValue = emptyString;
    var someCharsRejected = false;
    placeholderLoop: for (var i = 0; i < placeholderLength; i++) {
        var charInPlaceholder = placeholder[i];
        if (charInPlaceholder === placeholderChar) {
            if (rawValueArr.length > 0) {
                while (rawValueArr.length > 0) {
                    var _e = rawValueArr.shift(), rawValueChar = _e.char, isNew = _e.isNew;
                    if (rawValueChar === placeholderChar && suppressGuide !== true) {
                        conformedValue += placeholderChar;
                        continue placeholderLoop;
                    }
                    else if (mask[i].test(rawValueChar)) {
                        if (keepCharPositions !== true ||
                            isNew === false ||
                            previousConformedValue === emptyString ||
                            guide === false ||
                            !isAddition) {
                            conformedValue += rawValueChar;
                        }
                        else {
                            var rawValueArrLength = rawValueArr.length;
                            var indexOfNextAvailablePlaceholderChar = null;
                            for (var i_1 = 0; i_1 < rawValueArrLength; i_1++) {
                                var charData = rawValueArr[i_1];
                                if (charData.char !== placeholderChar && charData.isNew === false) {
                                    break;
                                }
                                if (charData.char === placeholderChar) {
                                    indexOfNextAvailablePlaceholderChar = i_1;
                                    break;
                                }
                            }
                            if (indexOfNextAvailablePlaceholderChar !== null) {
                                conformedValue += rawValueChar;
                                rawValueArr.splice(indexOfNextAvailablePlaceholderChar, 1);
                            }
                            else {
                                i--;
                            }
                        }
                        continue placeholderLoop;
                    }
                    else {
                        someCharsRejected = true;
                    }
                }
            }
            if (suppressGuide === false) {
                conformedValue += placeholder.substr(i, placeholderLength);
            }
            break;
        }
        else {
            conformedValue += charInPlaceholder;
        }
    }
    if (suppressGuide && isAddition === false) {
        var indexOfLastFilledPlaceholderChar = null;
        for (var i = 0; i < conformedValue.length; i++) {
            if (placeholder[i] === placeholderChar) {
                indexOfLastFilledPlaceholderChar = i;
            }
        }
        if (indexOfLastFilledPlaceholderChar !== null) {
            conformedValue = conformedValue.substr(0, indexOfLastFilledPlaceholderChar + 1);
        }
        else {
            conformedValue = emptyString;
        }
    }
    return { conformedValue: conformedValue, meta: { someCharsRejected: someCharsRejected } };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = conformToMask;
