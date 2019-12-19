import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './component/userManager/login/login.component';
import {RegisterComponent} from './component/userManager/register/register.component';
import {HomeComponent} from './component/userManager/home/home.component';
import {HeaderComponent} from './component/layout/header/header.component';
import {BodyLayoutComponent} from './component/layout/body-layout/body-layout.component';
import {UserComponent} from './component/userManager/user/user.component';


const routes: Routes = [
  // {path: '', component: HeaderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: BodyLayoutComponent},
  {
    path: 'user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
