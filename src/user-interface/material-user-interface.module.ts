import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ActionItemDirective } from './actions/action-item.directive';
import { ActionsComponent } from './actions/actions.component';
import { ActionsService } from './actions/actions.service';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ButtonComponent } from './button/button.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CardActionComponent } from './card/card-action.component';
import { CardBodyComponent } from './card/card-body.component';
import { CardHeaderComponent } from './card/card-header.component';
import { CardPaddingDirective } from './card/card-padding.directive';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { PreLoaderDirective } from './preloader/preloader.directive';
import { SideMenuItemComponent } from './side-menu/side-menu-item.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabDirective } from './tabset/tab.directive';
import { TabHeadingDirective } from './tabset/tab-heading.directive';
import { TabsetComponent } from './tabset/tabset.component';

import { NgTranscludeDirective } from '../common';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        NgTranscludeDirective,
        ActionItemDirective,
        ActionsComponent,
        AppHeaderComponent,
        ButtonComponent,
        ButtonGroupComponent,
        CardActionComponent,
        CardBodyComponent,
        CardHeaderComponent,
        CardPaddingDirective,
        CardComponent,
        HeaderComponent,
        PreloaderComponent,
        PreLoaderDirective,
        SideMenuItemComponent,
        SideMenuComponent,
        SidebarComponent,
        TabDirective,
        TabHeadingDirective,
        TabsetComponent,
    ],
    exports: [
        ActionItemDirective,
        ActionsComponent,
        AppHeaderComponent,
        ButtonComponent,
        ButtonGroupComponent,
        CardActionComponent,
        CardBodyComponent,
        CardHeaderComponent,
        CardPaddingDirective,
        CardComponent,
        HeaderComponent,
        PreloaderComponent,
        PreLoaderDirective,
        SideMenuItemComponent,
        SideMenuComponent,
        SidebarComponent,
        TabDirective,
        TabHeadingDirective,
        TabsetComponent,
    ],
    providers: [
        ActionsService,
    ],
})
export class MaterialUserInterfaceModule { }
