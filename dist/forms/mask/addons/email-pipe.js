"use strict";
var atSymbol = '@';
var allAtSymbolsRegExp = /@/g;
var emptyString = '';
var atDot = '@.';
var dot = '.';
var dotDot = '..';
var emptyArray = [];
var allDotsRegExp = /\./g;
function emailPipe(conformedValue, config) {
    var currentCaretPosition = config.currentCaretPosition, rawValue = config.rawValue, previousConformedValue = config.previousConformedValue, placeholderChar = config.placeholderChar;
    var value = conformedValue;
    value = removeAllAtSymbolsButFirst(value);
    var indexOfAtDot = value.indexOf(atDot);
    var emptyEmail = rawValue.match(new RegExp("[^@\\s." + placeholderChar + "]")) === null;
    if (emptyEmail) {
        return emptyString;
    }
    if (value.indexOf(dotDot) !== -1 ||
        indexOfAtDot !== -1 && currentCaretPosition !== (indexOfAtDot + 1) ||
        rawValue.indexOf(atSymbol) === -1 && previousConformedValue !== emptyString && rawValue.indexOf(dot) !== -1) {
        return false;
    }
    var indexOfAtSymbol = value.indexOf(atSymbol);
    var domainPart = value.slice(indexOfAtSymbol + 1, value.length);
    if ((domainPart.match(allDotsRegExp) || emptyArray).length > 1 &&
        value.substr(-1) === dot &&
        currentCaretPosition !== rawValue.length) {
        value = value.slice(0, value.length - 1);
    }
    return value;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = emailPipe;
function removeAllAtSymbolsButFirst(str) {
    var atSymbolCount = 0;
    return str.replace(allAtSymbolsRegExp, function () {
        atSymbolCount++;
        return (atSymbolCount === 1) ? atSymbol : emptyString;
    });
}
