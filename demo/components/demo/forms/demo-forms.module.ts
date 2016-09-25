import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MaterialFormsModule,
    MaterialUserInterfaceModule,
} from '../../../../dist/ng2-material-components';

import { DemoCheckboxComponent } from './checkbox/checkbox';
import { DemoEmailComponent } from './email/email';
import { DemoNumberComponent } from './number/number';
import { DemoPasswordComponent } from './password/password';
import { DemoPhoneComponent } from './phone/phone';
import { DemoRadioComponent } from './radio/radio';
import { DemoSelectPickerComponent } from './select-picker/select-picker';
import { DemoTextAreaComponent } from './text-area/text-area';
import { DemoTextBoxComponent } from './text-box/text-box';
import { DemoToggleComponent } from './toggle/toggle';
import { DemoDateTimePickerComponent } from './date-time-picker/date-time-picker';
import { DemoDateRangePickerComponent } from './date-range-picker/date-range-picker';
import { DemoFormsRoute } from './demo-forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialFormsModule,
        MaterialUserInterfaceModule,
    ],
    declarations: [
        DemoCheckboxComponent,
        DemoEmailComponent,
        DemoNumberComponent,
        DemoPasswordComponent,
        DemoPhoneComponent,
        DemoRadioComponent,
        DemoSelectPickerComponent,
        DemoTextAreaComponent,
        DemoTextBoxComponent,
        DemoToggleComponent,
        DemoDateTimePickerComponent,
        DemoDateRangePickerComponent,
        DemoFormsRoute,
    ],
    exports: [
        DemoFormsRoute,
    ],
})
export class DemoFormsModule { }