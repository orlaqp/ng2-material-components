import { NgTranscludeDirective } from './common';

export { NgTranscludeDirective } from './common';

export const MATERIAL_COMMON = [
    NgTranscludeDirective,
];


// models
export { IMenuItem } from './models/menu-item';
export { ISelectionItem } from './models/selection-item';

// layout
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

export { AppHeaderComponent } from './layout/app-header/app-header.component';
export { SidebarComponent } from './layout/sidebar/sidebar.component';

export const MATERIAL_LAYOUT = [
    AppHeaderComponent,
    SidebarComponent,
];

// navigation
import { SideMenuComponent } from './navigation/side-menu/side-menu.component';
import { TabsetComponent } from './navigation/tabset/tabset.component';
import { TabDirective } from './navigation/tab/tab.directive';
import { TabHeadingDirective } from './navigation/tab-heading/tab-heading.directive';

export { SideMenuComponent } from './navigation/side-menu/side-menu.component';
export { TabsetComponent } from './navigation/tabset/tabset.component';
export { TabDirective } from './navigation/tab/tab.directive';
export { TabHeadingDirective } from './navigation/tab-heading/tab-heading.directive';

export const MATERIAL_NAVIGATION = [
    SideMenuComponent,
    TabsetComponent,
    TabDirective,
    TabHeadingDirective,
];


// forms
import { CheckboxComponent } from './forms/checkbox/checkbox.component';
import { EmailComponent } from './forms/email/email.component';
import { NumberComponent } from './forms/number/number.component';
import { PasswordComponent } from './forms/password/password.component';
import { PhoneComponent } from './forms/phone/phone.component';
import { RadioGroupComponent } from './forms/radio/radio-group.component';
import { RadioComponent } from './forms/radio/radio.component';
import { SelectPickerComponent } from './forms/select-picker/select-picker.component';
import { TextBoxComponent } from './forms/text-box/text-box.component';
import { TextAreaComponent } from './forms/text-area/text-area.component';
import { ToggleComponent } from './forms/toggle/toggle.component';
import { DateTimePickerComponent } from './forms/date-time-picker/date-time-picker.component';
import { DateRangePickerComponent } from './forms/date-range-picker/date-range-picker.component';

import { MaskedInputDirective } from './forms/mask/masked-input.directive';

export { CheckboxComponent } from './forms/checkbox/checkbox.component';
export { EmailComponent } from './forms/email/email.component';
export { NumberComponent } from './forms/number/number.component';
export { PasswordComponent } from './forms/password/password.component';
export { PhoneComponent } from './forms/phone/phone.component';
export { RadioGroupComponent } from './forms/radio/radio-group.component';
export { RadioComponent } from './forms/radio/radio.component';
export { SelectPickerComponent } from './forms/select-picker/select-picker.component';
export { TextBoxComponent } from './forms/text-box/text-box.component';
export { TextAreaComponent } from './forms/text-area/text-area.component';
export { ToggleComponent } from './forms/toggle/toggle.component';
export { DateTimePickerComponent } from './forms/date-time-picker/date-time-picker.component';
export { DateRangePickerComponent } from './forms/date-range-picker/date-range-picker.component';

export { MaskedInputDirective } from './forms/mask/masked-input.directive';

export const MATERIAL_FORM = [
    CheckboxComponent,
    EmailComponent,
    NumberComponent,
    PasswordComponent,
    PhoneComponent,
    RadioGroupComponent,
    RadioComponent,
    SelectPickerComponent,
    TextBoxComponent,
    TextAreaComponent,
    ToggleComponent,
    DateTimePickerComponent,
    DateRangePickerComponent,

    MaskedInputDirective,
];

// user interface
import { CardComponent } from './user-interface/card/card.component';
import { CardHeaderComponent } from './user-interface/card/card-header.component';
import { CardBodyComponent } from './user-interface/card/card-body.component';
import { CardPaddingDirective } from './user-interface/card/card-padding.directive';
import { CardActionComponent } from './user-interface/card/card-action.component';
import { ActionsComponent } from './user-interface/actions/actions.component';
import { ActionItemDirective } from './user-interface/actions/action-item.directive';
import { HeaderComponent } from './user-interface/header/header.component';
import { ButtonComponent } from './user-interface/button/button.component';
import { ButtonGroupComponent } from './user-interface/button-group/button-group.component';
import { PreLoaderDirective } from './user-interface/preloader/preloader.directive';
import { PreloaderComponent } from './user-interface/preloader/preloader.component';

export { CardComponent } from './user-interface/card/card.component';
export { CardHeaderComponent } from './user-interface/card/card-header.component';
export { CardBodyComponent } from './user-interface/card/card-body.component';
export { CardPaddingDirective } from './user-interface/card/card-padding.directive';
export { CardActionComponent } from './user-interface/card/card-action.component';
export { ActionsComponent } from './user-interface/actions/actions.component';
export { ActionItemDirective } from './user-interface/actions/action-item.directive';
export { HeaderComponent } from './user-interface/header/header.component';
export { ButtonComponent } from './user-interface/button/button.component';
export { ButtonGroupComponent } from './user-interface/button-group/button-group.component';
export { PreLoaderDirective } from './user-interface/preloader/preloader.directive';
export { PreloaderComponent } from './user-interface/preloader/preloader.component';

export const MATERIAL_USER_INTERFACE = [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardPaddingDirective,
    CardActionComponent,
    ActionsComponent,
    ActionItemDirective,
    HeaderComponent,
    ButtonComponent,
    ButtonGroupComponent,
    PreLoaderDirective,
    PreloaderComponent,
];


export const MATERIAL_ALL = [
    MATERIAL_COMMON,
    MATERIAL_LAYOUT,
    MATERIAL_NAVIGATION,
    MATERIAL_FORM,
    MATERIAL_USER_INTERFACE,
];
