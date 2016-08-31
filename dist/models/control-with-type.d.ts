import { FormControl } from '@angular/forms';
import { TypeEnum } from './type-enum';
export declare class ControlWithType extends FormControl {
    dataType: TypeEnum;
    value: any;
    __isDecimal: boolean;
    constructor(dataType: TypeEnum, value?: any, validator?: any, asyncValidator?: any);
    getValue(mandatory: boolean): any;
}
