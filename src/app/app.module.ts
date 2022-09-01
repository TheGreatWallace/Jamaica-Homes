import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ActionsComponent } from './components/actions/actions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddHouseComponent } from './components/add-house/add-house.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseDetailsComponent,
    HomeComponent,
    LoginFormComponent,
    ActionsComponent,
    AddHouseComponent,
    UpdateFormComponent,
    SideBarComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
