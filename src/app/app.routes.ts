import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full',
    },

    {
        path: 'om-oss',
        component: AboutUsComponent,
    },

    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full',
    }
];
