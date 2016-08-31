import { ControlWithType } from '../../models/control-with-type';
export interface ValidationResult {
    [key: string]: boolean;
}
export declare class CustomValidators {
    static emailAddress(control: ControlWithType): ValidationResult;
    static complexPassword(control: ControlWithType): ValidationResult;
    static minNumber(min: number): Function;
    static maxNumber(max: number): Function;
}
