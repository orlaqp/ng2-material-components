import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

export { CardActionComponent } from './card/card-action.component';
export { CardBodyComponent } from './card/card-body.component';
export { CardHeaderComponent } from './card/card-header.component';
export { CardPaddingDirective } from './card/card-padding.directive';
export { CardComponent } from './card/card.component';
export { HeaderComponent } from './header/header.component';
export { PreloaderComponent } from './preloader/preloader.component';
export { PreLoaderDirective } from './preloader/preloader.directive';
export { SideMenuItemComponent } from './side-menu/side-menu-item.component';
export { SideMenuComponent } from './side-menu/side-menu.component';
export { SidebarComponent } from './sidebar/sidebar.component';
export { TabDirective } from './tabset/tab.directive';
export { TabHeadingDirective } from './tabset/tab-heading.directive';
export { TabsetComponent } from './tabset/tabset.component';

export { NgTranscludeDirective } from '../common';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
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
