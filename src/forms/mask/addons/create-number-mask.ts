const dollarSign = '$';
const emptyString = '';
const comma = ',';
const period = '.';
const nonDigitsRegExp = /\D+/g;
const number = 'number';
const digitRegExp: RegExp = /\d/;

export interface NumberMaskConfig {
    prefix?: string;
    suffix?: string;
    includeThousandsSeparator?: boolean;
    thousandsSeparatorSymbol?: string;
    allowDecimal?: boolean;
    decimalSymbol?: string;
    decimalLimit?: number;
    requireDecimal?: boolean;
};

export default function createNumberMask({
    prefix = dollarSign,
    suffix = emptyString,
    includeThousandsSeparator = true,
    thousandsSeparatorSymbol = comma,
    allowDecimal = false,
    decimalSymbol = period,
    decimalLimit = 2,
    requireDecimal = false,
}: NumberMaskConfig = {}): (rawValue: any) => string[] {

    function numberMask(rawValue: any): string[] {
        const rawValueLength = rawValue.length;

        if (
            rawValue === emptyString ||
            (rawValue[0] === prefix[0] && rawValueLength === 1)
        ) {
            return prefix.split(emptyString).concat([digitRegExp.toString()]).concat(suffix.split(emptyString));
        }

        const indexOfLastDecimal = rawValue.lastIndexOf(decimalSymbol);
        const hasDecimal = indexOfLastDecimal !== -1;

        let integer: string;
        let fraction: (RegExp | string)[];
        let mask: any;

        if (hasDecimal && (allowDecimal || requireDecimal)) {
            integer = rawValue.slice(0, indexOfLastDecimal);

            fraction = rawValue.slice(indexOfLastDecimal + 1, rawValueLength);
            fraction = convertToMask((<any>fraction).replace(nonDigitsRegExp, emptyString));
        } else {
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
            } else if (requireDecimal === true) {
                for (let i = 0; i < decimalLimit; i++) {
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

    (<any>numberMask).instanceOf = 'createNumberMask';

    return numberMask;
}

function convertToMask(strNumber: string) {
    return strNumber
        .split(emptyString)
        .map((char: string) => digitRegExp.test(char) ? digitRegExp : char);
}

// http://stackoverflow.com/a/10899795/604296
function addThousandsSeparator(n: string, thousandsSeparatorSymbol: string) {
    return n.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparatorSymbol);
}
