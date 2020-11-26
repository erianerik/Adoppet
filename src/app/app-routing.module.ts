import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components

import { RegisterLoginComponent }                   from './components/register-login/register-login.component';
import { HomeComponent }                            from './components/home/home.component';
import { LoginComponent }                           from './components/login/login.component';
import { SearchPetHomeComponent }                   from './components/search-pet-home/search-pet-home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login" , component: LoginComponent},
  {path: "cadastrarLogin", component: RegisterLoginComponent},
  {path: "homeLogada", component: SearchPetHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
