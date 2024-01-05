import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeKennelComponent } from './home-kennel/home-kennel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductPageComponent } from './product-page/product-page.component';


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
        path: 'kennel',
        component: HomeKennelComponent,
    },
    {
        path: 'kontakt-oss',
        component: ContactFormComponent,
    },
    {
        path: 'partnere',
        component: ProductPageComponent,
    },

    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full',
    },
];
