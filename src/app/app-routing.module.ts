import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { ActionsComponent } from './components/actions/actions.component';
import { AddHouseComponent } from './components/add-house/add-house.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';

const routes: Routes = [

  { path: '', redirectTo:'home' , pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'details/:id', component: HouseDetailsComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'add', component: AddHouseComponent},
  { path: 'admin', component: ActionsComponent},
  { path: 'edit/:id', component: UpdateFormComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'contact', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
