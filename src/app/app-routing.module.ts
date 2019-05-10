import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home' }
    },
    { 
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent,
        data: { title: 'About' }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Log-in' }
    },
    { 
        path: '**', 
        component: PageNotFoundComponent, 
        data: { title: '404: Page not Found' }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
