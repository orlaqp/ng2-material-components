export interface CaretPositionInfo {
    previousConformedValue: string;
    currentCaretPosition: number;
    conformedValue: any;
    rawValue: any;
    placeholderChar: string;
    placeholder: string;
    indexesOfPipedChars: any;
    caretTrapIndexes: any;
}
export default function adjustCaretPosition({previousConformedValue, currentCaretPosition, conformedValue, rawValue, placeholderChar, placeholder, indexesOfPipedChars, caretTrapIndexes}: CaretPositionInfo): number;
