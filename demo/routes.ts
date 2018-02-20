import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/demo/home/home.component';
import { DemoFormsRoute } from './components/demo/forms/demo-forms';
import { DemoUserInterfaceRoute } from './components/demo/user-interface/demo-user-interface';
import { SupportRoute } from './components/support/support';
import { PlaygroundComponent } from './components/playground/playground.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'forms', component: DemoFormsRoute },
    { path: 'user-interface', component: DemoUserInterfaceRoute },
    { path: 'support', component: SupportRoute },
    { path: 'playground', component: PlaygroundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
