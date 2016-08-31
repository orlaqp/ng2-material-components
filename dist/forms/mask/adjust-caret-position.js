"use strict";
var defaultArray = [];
var emptyString = '';
function adjustCaretPosition(_a) {
    var _b = _a.previousConformedValue, previousConformedValue = _b === void 0 ? emptyString : _b, _c = _a.currentCaretPosition, currentCaretPosition = _c === void 0 ? 0 : _c, conformedValue = _a.conformedValue, rawValue = _a.rawValue, placeholderChar = _a.placeholderChar, placeholder = _a.placeholder, _d = _a.indexesOfPipedChars, indexesOfPipedChars = _d === void 0 ? defaultArray : _d, _e = _a.caretTrapIndexes, caretTrapIndexes = _e === void 0 ? defaultArray : _e;
    if (currentCaretPosition === 0) {
        return 0;
    }
    var rawValueLength = rawValue.length;
    var previousConformedValueLength = previousConformedValue.length;
    var placeholderLength = placeholder.length;
    var conformedValueLength = conformedValue.length;
    var editLength = rawValueLength - previousConformedValueLength;
    var isAddition = editLength > 0;
    var isFirstRawValue = previousConformedValueLength === 0;
    var isPartialMultiCharEdit = editLength > 1 && !isAddition && !isFirstRawValue;
    if (isPartialMultiCharEdit) {
        return currentCaretPosition;
    }
    var possiblyHasRejectedChar = isAddition && (previousConformedValue === conformedValue ||
        conformedValue === placeholder);
    var startingSearchIndex = 0;
    if (possiblyHasRejectedChar) {
        startingSearchIndex = currentCaretPosition - editLength;
    }
    else {
        var normalizedConformedValue_1 = conformedValue.toLowerCase();
        var normalizedRawValue = rawValue.toLowerCase();
        var leftHalfChars = normalizedRawValue.substr(0, currentCaretPosition).split(emptyString);
        var intersection = leftHalfChars.filter(function (char) { return normalizedConformedValue_1.indexOf(char) !== -1; });
        var targetChar_1 = intersection[intersection.length - 1];
        var pipedChars = indexesOfPipedChars.map(function (index) { return normalizedConformedValue_1[index]; });
        var countTargetCharInPipedChars = pipedChars.filter(function (char) { return char === targetChar_1; }).length;
        var countTargetCharInIntersection = intersection.filter(function (char) { return char === targetChar_1; }).length;
        var countTargetCharInPlaceholder = placeholder
            .substr(0, placeholder.indexOf(placeholderChar))
            .split(emptyString)
            .filter(function (char, index) { return (char === targetChar_1 &&
            rawValue[index] !== char); })
            .length;
        var requiredNumberOfMatches = (countTargetCharInPlaceholder +
            countTargetCharInIntersection +
            countTargetCharInPipedChars);
        var numberOfEncounteredMatches = 0;
        for (var i = 0; i < conformedValueLength; i++) {
            var conformedValueChar = normalizedConformedValue_1[i];
            startingSearchIndex = i + 1;
            if (conformedValueChar === targetChar_1) {
                numberOfEncounteredMatches++;
            }
            if (numberOfEncounteredMatches >= requiredNumberOfMatches) {
                break;
            }
        }
    }
    if (isAddition) {
        var lastPlaceholderChar = startingSearchIndex;
        for (var i = startingSearchIndex; i <= placeholderLength; i++) {
            if (placeholder[i] === placeholderChar) {
                lastPlaceholderChar = i;
            }
            if (placeholder[i] === placeholderChar ||
                caretTrapIndexes.indexOf(i) !== -1 ||
                i === placeholderLength) {
                return lastPlaceholderChar;
            }
        }
    }
    else {
        for (var i = startingSearchIndex; i >= 0; i--) {
            if (placeholder[i - 1] === placeholderChar ||
                caretTrapIndexes.indexOf(i) !== -1 ||
                i === 0) {
                return i;
            }
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = adjustCaretPosition;
