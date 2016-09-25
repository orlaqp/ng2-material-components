
import './vendor';

import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent }   from './app.component';
import { routing, appRoutingProviders } from './routes';

import {
    NgTranscludeDirective,
    // MATERIAL_LAYOUT,
    MATERIAL_NAVIGATION,
    MATERIAL_FORM,
    MATERIAL_USER_INTERFACE,
    LayoutModule,
} from '../dist/ng2-material-components';

// form components
import { DemoCheckboxComponent } from './components/demo/forms/checkbox/checkbox';
import { DemoEmailComponent } from './components/demo/forms/email/email';
import { DemoNumberComponent } from './components/demo/forms/number/number';
import { DemoPasswordComponent } from './components/demo/forms/password/password';
import { DemoPhoneComponent } from './components/demo/forms/phone/phone';
import { DemoRadioComponent } from './components/demo/forms/radio/radio';
import { DemoSelectPickerComponent } from './components/demo/forms/select-picker/select-picker';
import { DemoTextAreaComponent } from './components/demo/forms/text-area/text-area';
import { DemoTextBoxComponent } from './components/demo/forms/text-box/text-box';
import { DemoToggleComponent } from './components/demo/forms/toggle/toggle';
import { DemoDateTimePickerComponent } from './components/demo/forms/date-time-picker/date-time-picker';
import { DemoDateRangePickerComponent } from './components/demo/forms/date-range-picker/date-range-picker';

// layout components
import { DemoAppHeaderComponent } from './components/demo/layout/app-header/app-header';
import { DemoSidebarComponent } from './components/demo/layout/sidebar/sidebar';

// navigation components
import { DemoSideMenuComponent } from './components/demo/navigation/side-menu/side-menu';
import { DemoTabsetComponent } from './components/demo/navigation/tabset/tabset';

// user interface components
import { DemoHeaderComponent } from './components/demo/user-interface/header/header';
import { DemoActionsComponent } from './components/demo/user-interface/actions/actions';
import { DemoButtonComponent } from './components/demo/user-interface/button/button';
import { DemoButtonGroupComponent } from './components/demo/user-interface/button-group/button-group';
import { DemoPreLoaderComponent } from './components/demo/user-interface/pre-loader/pre-loader';
import { DemoCardComponent } from './components/demo/user-interface/card/card';


import { HomeComponent } from './components/demo/home/home.component';
import { DemoLayoutRoute } from './components/demo/layout/demo-layout';
import { DemoNavigationRoute } from './components/demo/navigation/demo-navigation';
import { DemoFormsRoute } from './components/demo/forms/demo-forms';
import { DemoUserInterfaceRoute } from './components/demo/user-interface/demo-user-interface';
import { SupportRoute } from './components/support/support';


@NgModule({
    declarations: [

        // directves
        NgTranscludeDirective,
        // MATERIAL_LAYOUT,
        MATERIAL_NAVIGATION,
        MATERIAL_FORM,
        MATERIAL_USER_INTERFACE,

        // forms
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
        // layout
        DemoAppHeaderComponent,
        DemoSidebarComponent,
        // navigation
        DemoSideMenuComponent,
        DemoTabsetComponent,
        // user interface
        DemoHeaderComponent,
        DemoActionsComponent,
        DemoButtonComponent,
        DemoButtonGroupComponent,
        DemoPreLoaderComponent,
        DemoCardComponent,

        AppComponent,
        HomeComponent,
        DemoLayoutRoute,
        DemoNavigationRoute,
        DemoFormsRoute,
        DemoUserInterfaceRoute,
        SupportRoute,
    ],
    imports:      [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule,
        routing,
    ],
    providers: [
        appRoutingProviders,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}