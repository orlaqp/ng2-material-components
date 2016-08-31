export interface NumberMaskConfig {
    prefix?: string;
    suffix?: string;
    includeThousandsSeparator?: boolean;
    thousandsSeparatorSymbol?: string;
    allowDecimal?: boolean;
    decimalSymbol?: string;
    decimalLimit?: number;
    requireDecimal?: boolean;
}
export default function createNumberMask({prefix, suffix, includeThousandsSeparator, thousandsSeparatorSymbol, allowDecimal, decimalSymbol, decimalLimit, requireDecimal}?: NumberMaskConfig): (rawValue: any) => string[];
