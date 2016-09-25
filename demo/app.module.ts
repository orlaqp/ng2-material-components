
import './vendor';

import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent }   from './app.component';
import { routing, appRoutingProviders } from './routes';

import {
    MaterialFormsModule,
    MaterialUserInterfaceModule,
} from '../dist/ng2-material-components';

// form components
import { DemoFormsModule } from './components/demo/forms/demo-forms.module';
import { DemoUserInterfaceModule } from './components/demo/user-interface/demo-user-interface.module';
import { HomeComponent } from './components/demo/home/home.component';
import { SupportRoute } from './components/support/support';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SupportRoute,
    ],
    imports:      [
        BrowserModule,
        ReactiveFormsModule,
        routing,

        MaterialFormsModule,
        MaterialUserInterfaceModule,

        DemoFormsModule,
        DemoUserInterfaceModule,
    ],
    providers: [
        appRoutingProviders,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}