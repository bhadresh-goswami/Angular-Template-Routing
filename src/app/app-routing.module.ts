import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { AboutusComponent } from './common/aboutus/aboutus.component';
import { ContactusComponent } from './common/contactus/contactus.component';
import { NotfoundComponent } from './common/notfound/notfound.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { EditprofileComponent } from './user/editprofile/editprofile.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'about-us', component:AboutusComponent
  },
  {
    path:'contact-us', component:ContactusComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'signin', component:SigninComponent
  },
  {
    path:'edit', component:EditprofileComponent
  },
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  },
  {
    path:'**',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
