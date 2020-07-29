import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';//this is the file that holds the routes
import { AppComponent } from './app.component';
import { HeaderComponent } from './design/header/header.component';
import { FooterComponent } from './design/footer/footer.component';
import { NavigationComponent } from './design/navigation/navigation.component';
import { HomeComponent } from './common/home/home.component';
import { AboutusComponent } from './common/aboutus/aboutus.component';
import { ContactusComponent } from './common/contactus/contactus.component';
import { NotfoundComponent } from './common/notfound/notfound.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { EditprofileComponent } from './user/editprofile/editprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    NotfoundComponent,
    SigninComponent,
    SignupComponent,
    EditprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
