import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules

import { HttpClientModule }               from '@angular/common/http'
import { ReactiveFormsModule }            from '@angular/forms'

// Components

import { HomeComponent }                  from './components/home/home.component';
import { LoginComponent }                 from './components/login/login.component';
import { RegisterLoginComponent }         from './components/register-login/register-login.component';
import { SearchPetComponent }             from './components/search-pet/search-pet.component';
import { SearchPetHomeComponent } from './components/search-pet-home/search-pet-home.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterLoginComponent,
    SearchPetComponent,
    SearchPetHomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
