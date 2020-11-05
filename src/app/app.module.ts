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
import { ValidationFormMessageDirective } from './directives/validation-form-message.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterLoginComponent,
    ValidationFormMessageDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
