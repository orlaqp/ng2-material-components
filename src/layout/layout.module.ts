import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
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
    exports: [
        AppHeaderComponent,
        SidebarComponent,
    ]
})
export class LayoutModule { }
