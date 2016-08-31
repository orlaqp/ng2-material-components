export interface MaskInputConfig {
    inputElement: HTMLInputElement;
    mask: any;
    guide: any;
    pipe: any;
    placeholderChar: string;
    onAccept: any;
    onReject: any;
    keepCharPositions: boolean;
}
export default function createTextMaskInputElement({inputElement, mask: providedMask, guide, pipe, placeholderChar, onAccept, onReject, keepCharPositions}: MaskInputConfig): {
    state: {
        previousConformedValue: string;
    };
    update(rawValue?: string): void;
};
