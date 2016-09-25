import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { EmailComponent } from './email/email.component';
import { MaskedInputDirective } from './mask/masked-input.directive';
import { NumberComponent } from './number/number.component';
import { PasswordComponent } from './password/password.component';
import { PhoneComponent } from './phone/phone.component';
import { RadioGroupComponent } from './radio/radio-group.component';
import { RadioGroupService } from './radio/radio-group.service';
import { RadioComponent } from './radio/radio.component';
import { SelectPickerComponent } from './select-picker/select-picker.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        CheckboxComponent,
        DateRangePickerComponent,
        DateTimePickerComponent,
        EmailComponent,
        MaskedInputDirective,
        NumberComponent,
        PasswordComponent,
        PhoneComponent,
        RadioGroupComponent,
        RadioComponent,
        SelectPickerComponent,
        TextAreaComponent,
        TextBoxComponent,
        ToggleComponent,
    ],
    exports: [
        CheckboxComponent,
        DateRangePickerComponent,
        DateTimePickerComponent,
        EmailComponent,
        MaskedInputDirective,
        NumberComponent,
        PasswordComponent,
        PhoneComponent,
        RadioGroupComponent,
        RadioComponent,
        SelectPickerComponent,
        TextAreaComponent,
        TextBoxComponent,
        ToggleComponent,
    ],
    providers: [
        RadioGroupService,
    ],
})
export class MaterialFormsModule { }
