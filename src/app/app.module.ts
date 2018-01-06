import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';


import { ProfileComponent } from './views/user/profile/profile.component';

import {UserService} from './services/user.service.client';
import {WebsiteListComponent} from './views/website-list/website-list.component';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WebsiteListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
