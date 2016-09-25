import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppHeaderComponent } from './app-header/app-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
    imports: [
        CommonModule, 
        ReactiveFormsModule
    ],
    declarations: [
        AppHeaderComponent,
        SidebarComponent,
    ],
    exports: [],
})
export class UserInterfaceModule { }