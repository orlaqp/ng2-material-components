import { FormControl } from '@angular/forms';
import { TypeEnum } from './type-enum';
// import * as moment from 'moment/moment';

declare var moment: any;

export class ControlWithType extends FormControl {

    public dataType: TypeEnum;
    public value: any;
    public __isDecimal: boolean;

    constructor(
        dataType: TypeEnum,
        value: any = null,
        validator: any = null,
        asyncValidator: any = null) {
            // call base class
            super(value, validator, asyncValidator);
            // save type
            this.dataType = dataType;
    }

    public getValue(mandatory: boolean): any {
        let value: any;

        switch (this.dataType) {
            case TypeEnum.String:
                value = this.value;
                break;
            case TypeEnum.Number:
                value = Number(this.value.replace(',', ''));
                break;
            case TypeEnum.Date:
                let momentDate: moment.Moment = moment(this.value);
                value = momentDate.toDate();
                break;
            case TypeEnum.Boolean:
                value = Boolean(this.value);
                break;
            default:
                value = this.value;
        }

        return mandatory || value ? value : undefined;

    }

}
