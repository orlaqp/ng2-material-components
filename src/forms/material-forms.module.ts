import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
// import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
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
import { DateTimePickerComponent } from './datetime-picker/date-time-picker.component';
import { DateTimePickerPopupComponent } from './datetime-picker/datetime-picker-popup.component';

export { CheckboxComponent } from './checkbox/checkbox.component';
export { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
// export { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
export { EmailComponent } from './email/email.component';
export { MaskedInputDirective } from './mask/masked-input.directive';
export { NumberComponent } from './number/number.component';
export { PasswordComponent } from './password/password.component';
export { PhoneComponent } from './phone/phone.component';
export { RadioGroupComponent } from './radio/radio-group.component';
export { RadioGroupService } from './radio/radio-group.service';
export { RadioComponent } from './radio/radio.component';
export { SelectPickerComponent } from './select-picker/select-picker.component';
export { TextAreaComponent } from './text-area/text-area.component';
export { TextBoxComponent } from './text-box/text-box.component';
export { ToggleComponent } from './toggle/toggle.component';
export { DateTimePickerComponent } from './datetime-picker/date-time-picker.component';
export { DateTimePickerPopupComponent } from './datetime-picker/datetime-picker-popup.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        CheckboxComponent,
        DateRangePickerComponent,
        DateTimePickerComponent,
        DateTimePickerPopupComponent,
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
        DateTimePickerPopupComponent,
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
    entryComponents: [ DateTimePickerPopupComponent ],
})
export class MaterialFormsModule { }
