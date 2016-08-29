import { provideRouter, Routes } from '@angular/router';

import { HomeComponent } from './components/demo/home/home.component';
import { DemoLayoutRoute } from './components/demo/layout/demo-layout';
import { DemoNavigationRoute } from './components/demo/navigation/demo-navigation';
import { DemoFormsRoute } from './components/demo/forms/demo-forms';
import {SupportRoute} from './components/support/support';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'layout', component: DemoLayoutRoute },
    { path: 'navigation', component: DemoNavigationRoute },
    { path: 'forms', component: DemoFormsRoute },
    { path: 'support', component: SupportRoute },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
];
