import { Component } from '@angular/core';
import { processComponents } from '../demo-base/demo-base';
import { MATERIAL_ALL } from '../../../../dist/ng2-materialcomponents';

// components
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


const components: any[] = [
    { category: 'forms', key: 'checkbox', component: DemoCheckboxComponent },
    { category: 'forms', key: 'email', component: DemoEmailComponent },
    { category: 'forms', key: 'number', component: DemoNumberComponent, title: 'Numbers (With/out decimals, Percent, Currency)' },
    { category: 'forms', key: 'password', component: DemoPasswordComponent },
    { category: 'forms', key: 'phone', component: DemoPhoneComponent },
    { category: 'forms', key: 'radio', component: DemoRadioComponent },
    { category: 'forms', key: 'select-picker', component: DemoSelectPickerComponent },
    { category: 'forms', key: 'text-area', component: DemoTextAreaComponent },
    { category: 'forms', key: 'text-box', component: DemoTextBoxComponent },
    { category: 'forms', key: 'toggle', component: DemoToggleComponent },
    { category: 'forms', key: 'date-time-picker', component: DemoDateTimePickerComponent },
];

const content = {};
processComponents(components);

@Component({
    template: require('./demo-forms.jade')({ content, components }),
    directives: [ MATERIAL_ALL ].concat(components.map((c: any) => c.component)),
})
export class DemoFormsRoute {

}
