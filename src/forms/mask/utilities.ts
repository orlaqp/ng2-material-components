import {placeholderChar as defaultPlaceholderChar} from './constants';

const emptyArray: any = [];

export function convertMaskToPlaceholder(mask: any = emptyArray, placeholderChar: string = defaultPlaceholderChar) {
    if (mask.indexOf(placeholderChar) !== -1) {
        throw new Error(
            'Placeholder character must not be used as part of the mask. Please specify a character ' +
            'that is not present in your mask as your placeholder character.\n\n' +
            `The placeholder character that was received is: ${JSON.stringify(placeholderChar)}\n\n` +
            `The mask that was received is: ${JSON.stringify(mask)}`
        );
    }

    return mask.map((char: any) => {
        return (char instanceof RegExp) ? placeholderChar : char;
    }).join('');
}

export function isString(value: any) {
    return typeof value === 'string' || value instanceof String;
}

export function isNumber(value: any) {
    return value && value.length === undefined && !isNaN(value);
}

const strCaretTrap = '[]';
export function processCaretTraps(mask: any) {
    const indexes: any = [];

    let indexOfCaretTrap: number;
    while (indexOfCaretTrap = mask.indexOf(strCaretTrap), indexOfCaretTrap !== -1) { // eslint-disable-line
        indexes.push(indexOfCaretTrap);

        mask.splice(indexOfCaretTrap, 1);
    }

    return { maskWithoutCaretTraps: mask, indexes };
}

// TODO: not needed for now
// export function cleanNumber(numberStr: string): number {
//     return +numberStr.replace(/\D/g, '');
// }
