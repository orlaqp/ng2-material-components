"use strict";
var dollarSign = '$';
var emptyString = '';
var comma = ',';
var period = '.';
var nonDigitsRegExp = /\D+/g;
var number = 'number';
var digitRegExp = /\d/;
;
function createNumberMask(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.prefix, prefix = _c === void 0 ? dollarSign : _c, _d = _b.suffix, suffix = _d === void 0 ? emptyString : _d, _e = _b.includeThousandsSeparator, includeThousandsSeparator = _e === void 0 ? true : _e, _f = _b.thousandsSeparatorSymbol, thousandsSeparatorSymbol = _f === void 0 ? comma : _f, _g = _b.allowDecimal, allowDecimal = _g === void 0 ? false : _g, _h = _b.decimalSymbol, decimalSymbol = _h === void 0 ? period : _h, _j = _b.decimalLimit, decimalLimit = _j === void 0 ? 2 : _j, _k = _b.requireDecimal, requireDecimal = _k === void 0 ? false : _k;
    function numberMask(rawValue) {
        var rawValueLength = rawValue.length;
        if (rawValue === emptyString ||
            (rawValue[0] === prefix[0] && rawValueLength === 1)) {
            return prefix.split(emptyString).concat([digitRegExp.toString()]).concat(suffix.split(emptyString));
        }
        var indexOfLastDecimal = rawValue.lastIndexOf(decimalSymbol);
        var hasDecimal = indexOfLastDecimal !== -1;
        var integer;
        var fraction;
        var mask;
        if (hasDecimal && (allowDecimal || requireDecimal)) {
            integer = rawValue.slice(0, indexOfLastDecimal);
            fraction = rawValue.slice(indexOfLastDecimal + 1, rawValueLength);
            fraction = convertToMask(fraction.replace(nonDigitsRegExp, emptyString));
        }
        else {
            integer = rawValue;
        }
        integer = integer.replace(nonDigitsRegExp, emptyString);
        integer = (includeThousandsSeparator) ? addThousandsSeparator(integer, thousandsSeparatorSymbol) : integer;
        mask = convertToMask(integer);
        if ((hasDecimal && allowDecimal) || requireDecimal === true) {
            if (rawValue[indexOfLastDecimal - 1] !== decimalSymbol) {
                mask.push('[]');
            }
            mask.push(decimalSymbol, '[]');
            if (fraction) {
                if (typeof decimalLimit === number) {
                    fraction = fraction.slice(0, decimalLimit);
                }
                mask = mask.concat(fraction);
            }
            else if (requireDecimal === true) {
                for (var i = 0; i < decimalLimit; i++) {
                    mask.push(digitRegExp);
                }
            }
        }
        if (prefix.length > 0) {
            mask = prefix.split(emptyString).concat(mask);
        }
        if (suffix.length > 0) {
            mask = mask.concat(suffix.split(emptyString));
        }
        return mask;
    }
    numberMask.instanceOf = 'createNumberMask';
    return numberMask;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createNumberMask;
function convertToMask(strNumber) {
    return strNumber
        .split(emptyString)
        .map(function (char) { return digitRegExp.test(char) ? digitRegExp : char; });
}
function addThousandsSeparator(n, thousandsSeparatorSymbol) {
    return n.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparatorSymbol);
}
