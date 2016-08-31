export interface MaskConfig {
    guide?: boolean;
    previousConformedValue?: string;
    placeholderChar?: string;
    placeholder?: string;
    currentCaretPosition?: number;
    keepCharPositions?: boolean;
}
export default function conformToMask(rawValue?: string, mask?: string, config?: MaskConfig): {
    conformedValue: string;
    meta: {
        someCharsRejected: boolean;
    };
};
