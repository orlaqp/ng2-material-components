"use strict";
var adjust_caret_position_1 = require('./adjust-caret-position');
var conform_to_mask_1 = require('./conform-to-mask');
var utilities_1 = require('./utilities');
var constants_1 = require('./constants');
var strPlaceholder = 'placeholder';
var strFunction = 'function';
var emptyString = '';
var strNone = 'none';
;
function createTextMaskInputElement(_a) {
    var inputElement = _a.inputElement, providedMask = _a.mask, guide = _a.guide, pipe = _a.pipe, _b = _a.placeholderChar, placeholderChar = _b === void 0 ? constants_1.placeholderChar : _b, onAccept = _a.onAccept, onReject = _a.onReject, _c = _a.keepCharPositions, keepCharPositions = _c === void 0 ? false : _c;
    if (typeof providedMask === 'object'
        && providedMask.pipe !== undefined
        && providedMask.mask !== undefined) {
        pipe = providedMask.pipe;
        providedMask = providedMask.mask;
    }
    var state = { previousConformedValue: emptyString };
    var placeholder;
    var mask;
    if (providedMask instanceof Array) {
        placeholder = utilities_1.convertMaskToPlaceholder(providedMask, placeholderChar);
    }
    if (inputElement.placeholder === emptyString) {
        inputElement.setAttribute(strPlaceholder, placeholder);
    }
    return {
        state: state,
        update: function (rawValue) {
            if (rawValue === void 0) { rawValue = inputElement.value; }
            if (rawValue === state.previousConformedValue) {
                return;
            }
            ;
            var safeRawValue = getSafeRawValue(rawValue);
            var currentCaretPosition = inputElement.selectionStart;
            var previousConformedValue = state.previousConformedValue;
            var caretTrapIndexes;
            if (typeof providedMask === strFunction) {
                mask = providedMask(safeRawValue, { currentCaretPosition: currentCaretPosition, previousConformedValue: previousConformedValue, placeholderChar: placeholderChar });
                var _a = utilities_1.processCaretTraps(mask), maskWithoutCaretTraps = _a.maskWithoutCaretTraps, indexes = _a.indexes;
                mask = maskWithoutCaretTraps;
                caretTrapIndexes = indexes;
                placeholder = utilities_1.convertMaskToPlaceholder(mask, placeholderChar);
            }
            else {
                mask = providedMask;
            }
            var conformToMaskConfig = {
                previousConformedValue: previousConformedValue,
                guide: guide,
                placeholderChar: placeholderChar,
                pipe: pipe,
                placeholder: placeholder,
                currentCaretPosition: currentCaretPosition,
                keepCharPositions: keepCharPositions,
            };
            var _b = conform_to_mask_1.default(safeRawValue, mask, conformToMaskConfig), conformedValue = _b.conformedValue, someCharsRejected = _b.meta.someCharsRejected;
            var piped = typeof pipe === strFunction;
            var pipeResults = {};
            if (piped) {
                pipeResults = pipe(conformedValue, { rawValue: safeRawValue });
                if (pipeResults === false) {
                    pipeResults = { value: previousConformedValue, rejected: true };
                }
                else if (utilities_1.isString(pipeResults)) {
                    pipeResults = { value: pipeResults };
                }
            }
            var finalConformedValue = (piped) ? pipeResults.value : conformedValue, adjustedCaretPosition = adjust_caret_position_1.default({
                previousConformedValue: previousConformedValue,
                conformedValue: finalConformedValue,
                placeholder: placeholder,
                rawValue: safeRawValue,
                currentCaretPosition: currentCaretPosition,
                placeholderChar: placeholderChar,
                indexesOfPipedChars: pipeResults.indexesOfPipedChars,
                caretTrapIndexes: caretTrapIndexes,
            }), inputValueShouldBeEmpty = finalConformedValue === placeholder && adjustedCaretPosition === 0, inputElementValue = (inputValueShouldBeEmpty) ? emptyString : finalConformedValue;
            inputElement.value = inputElementValue;
            safeSetSelection(inputElement, adjustedCaretPosition);
            state.previousConformedValue = inputElementValue;
            if (typeof onAccept === strFunction && inputElementValue !== previousConformedValue) {
                onAccept();
            }
            var isDeletion = safeRawValue.length < previousConformedValue.length;
            if (typeof onReject === strFunction &&
                (someCharsRejected || pipeResults.rejected) &&
                isDeletion === false) {
                onReject({
                    conformedValue: finalConformedValue,
                    pipeRejection: pipeResults.rejected,
                    maskRejection: someCharsRejected,
                });
            }
        },
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createTextMaskInputElement;
function safeSetSelection(element, selectionPosition) {
    if (document.activeElement === element) {
        element.setSelectionRange(selectionPosition, selectionPosition, strNone);
    }
}
function getSafeRawValue(inputValue) {
    if (utilities_1.isString(inputValue)) {
        return inputValue;
    }
    else if (utilities_1.isNumber(inputValue)) {
        return String(inputValue);
    }
    else if (inputValue === undefined || inputValue === null) {
        return emptyString;
    }
    else {
        throw new Error('The "value" provided to Text Mask needs to be a string or a number. The value ' +
            ("received was:\n\n " + JSON.stringify(inputValue)));
    }
}
