"use strict";
var common_1 = require('./common');
var common_2 = require('./common');
exports.NgTranscludeDirective = common_2.NgTranscludeDirective;
exports.MATERIAL_COMMON = [
    common_1.NgTranscludeDirective,
];
var app_header_component_1 = require('./layout/app-header/app-header.component');
var sidebar_component_1 = require('./layout/sidebar/sidebar.component');
var app_header_component_2 = require('./layout/app-header/app-header.component');
exports.AppHeaderComponent = app_header_component_2.AppHeaderComponent;
var sidebar_component_2 = require('./layout/sidebar/sidebar.component');
exports.SidebarComponent = sidebar_component_2.SidebarComponent;
exports.MATERIAL_LAYOUT = [
    app_header_component_1.AppHeaderComponent,
    sidebar_component_1.SidebarComponent,
];
var side_menu_component_1 = require('./navigation/side-menu/side-menu.component');
var tabset_component_1 = require('./navigation/tabset/tabset.component');
var tab_directive_1 = require('./navigation/tab/tab.directive');
var tab_heading_directive_1 = require('./navigation/tab-heading/tab-heading.directive');
var side_menu_component_2 = require('./navigation/side-menu/side-menu.component');
exports.SideMenuComponent = side_menu_component_2.SideMenuComponent;
var tabset_component_2 = require('./navigation/tabset/tabset.component');
exports.TabsetComponent = tabset_component_2.TabsetComponent;
var tab_directive_2 = require('./navigation/tab/tab.directive');
exports.TabDirective = tab_directive_2.TabDirective;
var tab_heading_directive_2 = require('./navigation/tab-heading/tab-heading.directive');
exports.TabHeadingDirective = tab_heading_directive_2.TabHeadingDirective;
exports.MATERIAL_NAVIGATION = [
    side_menu_component_1.SideMenuComponent,
    tabset_component_1.TabsetComponent,
    tab_directive_1.TabDirective,
    tab_heading_directive_1.TabHeadingDirective,
];
var checkbox_component_1 = require('./forms/checkbox/checkbox.component');
var email_component_1 = require('./forms/email/email.component');
var number_component_1 = require('./forms/number/number.component');
var password_component_1 = require('./forms/password/password.component');
var phone_component_1 = require('./forms/phone/phone.component');
var radio_group_component_1 = require('./forms/radio/radio-group.component');
var radio_component_1 = require('./forms/radio/radio.component');
var select_picker_component_1 = require('./forms/select-picker/select-picker.component');
var text_box_component_1 = require('./forms/text-box/text-box.component');
var text_area_component_1 = require('./forms/text-area/text-area.component');
var toggle_component_1 = require('./forms/toggle/toggle.component');
var date_time_picker_component_1 = require('./forms/date-time-picker/date-time-picker.component');
var masked_input_directive_1 = require('./forms/mask/masked-input.directive');
var checkbox_component_2 = require('./forms/checkbox/checkbox.component');
exports.CheckboxComponent = checkbox_component_2.CheckboxComponent;
var email_component_2 = require('./forms/email/email.component');
exports.EmailComponent = email_component_2.EmailComponent;
var number_component_2 = require('./forms/number/number.component');
exports.NumberComponent = number_component_2.NumberComponent;
var password_component_2 = require('./forms/password/password.component');
exports.PasswordComponent = password_component_2.PasswordComponent;
var phone_component_2 = require('./forms/phone/phone.component');
exports.PhoneComponent = phone_component_2.PhoneComponent;
var radio_group_component_2 = require('./forms/radio/radio-group.component');
exports.RadioGroupComponent = radio_group_component_2.RadioGroupComponent;
var radio_component_2 = require('./forms/radio/radio.component');
exports.RadioComponent = radio_component_2.RadioComponent;
var select_picker_component_2 = require('./forms/select-picker/select-picker.component');
exports.SelectPickerComponent = select_picker_component_2.SelectPickerComponent;
var text_box_component_2 = require('./forms/text-box/text-box.component');
exports.TextBoxComponent = text_box_component_2.TextBoxComponent;
var text_area_component_2 = require('./forms/text-area/text-area.component');
exports.TextAreaComponent = text_area_component_2.TextAreaComponent;
var toggle_component_2 = require('./forms/toggle/toggle.component');
exports.ToggleComponent = toggle_component_2.ToggleComponent;
var date_time_picker_component_2 = require('./forms/date-time-picker/date-time-picker.component');
exports.DateTimePickerComponent = date_time_picker_component_2.DateTimePickerComponent;
var masked_input_directive_2 = require('./forms/mask/masked-input.directive');
exports.MaskedInputDirective = masked_input_directive_2.MaskedInputDirective;
exports.MATERIAL_FORM = [
    checkbox_component_1.CheckboxComponent,
    email_component_1.EmailComponent,
    number_component_1.NumberComponent,
    password_component_1.PasswordComponent,
    phone_component_1.PhoneComponent,
    radio_group_component_1.RadioGroupComponent,
    radio_component_1.RadioComponent,
    select_picker_component_1.SelectPickerComponent,
    text_box_component_1.TextBoxComponent,
    text_area_component_1.TextAreaComponent,
    toggle_component_1.ToggleComponent,
    date_time_picker_component_1.DateTimePickerComponent,
    masked_input_directive_1.MaskedInputDirective,
];
exports.MATERIAL_ALL = [
    exports.MATERIAL_COMMON,
    exports.MATERIAL_LAYOUT,
    exports.MATERIAL_NAVIGATION,
    exports.MATERIAL_FORM,
];
