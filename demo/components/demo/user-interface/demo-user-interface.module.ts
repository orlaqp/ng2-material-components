import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MaterialFormsModule,
    MaterialUserInterfaceModule,
} from '../../../../dist/ng2-material-components';


import { DemoAppHeaderComponent } from './app-header/app-header';
import { DemoSidebarComponent } from './sidebar/sidebar';
import { DemoSideMenuComponent } from './side-menu/side-menu';
import { DemoTabsetComponent } from './tabset/tabset';
import { DemoHeaderComponent } from './header/header';
import { DemoActionsComponent } from './actions/actions';
import { DemoButtonComponent } from './button/button';
import { DemoButtonGroupComponent } from './button-group/button-group';
import { DemoPreLoaderComponent } from './pre-loader/pre-loader';
import { DemoCardComponent } from './card/card';
import { DemoUserInterfaceRoute } from './demo-user-interface';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialFormsModule,
        MaterialUserInterfaceModule,
    ],
    declarations: [
        DemoAppHeaderComponent,
        DemoSidebarComponent,
        DemoSideMenuComponent,
        DemoTabsetComponent,
        DemoHeaderComponent,
        DemoActionsComponent,
        DemoButtonComponent,
        DemoButtonGroupComponent,
        DemoPreLoaderComponent,
        DemoCardComponent,
        DemoUserInterfaceRoute,
    ],
    exports: [
        DemoUserInterfaceRoute,

    ],
})
export class DemoUserInterfaceModule { }