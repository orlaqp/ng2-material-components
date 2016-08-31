export interface EmailPipeConfig {
    currentCaretPosition: number;
    rawValue?: string;
    previousConformedValue?: string;
    placeholderChar: string;
}
export default function emailPipe(conformedValue: string, config: EmailPipeConfig): any;
