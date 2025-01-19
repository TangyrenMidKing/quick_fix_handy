import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
// import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    // { path: 'service', component: ServiceComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
];
