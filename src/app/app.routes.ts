import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeKennelComponent } from './home-kennel/home-kennel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DogRehomingComponent } from './dog-rehoming/dog-rehoming.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactThanksComponent } from './contact-thanks/contact-thanks.component';


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
        path: 'takk-for-henvendelsen',
        component: ContactThanksComponent,
    },
    {
        path: 'personvern',
        component: PrivacyPolicyComponent,
    },
    {
        path: 'omplassering-av-hund',
        component: DogRehomingComponent,
    },

    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full',
    },
];
