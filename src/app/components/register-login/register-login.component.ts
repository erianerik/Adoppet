import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ValidationForms } from 'src/app/util/validation-forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent extends ValidationForms implements OnInit {

  form: FormGroup;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder
    
    ) { 
    super();
  }

  ngOnInit(): void {
    this.configForm();
  }

  configForm() {
    this.form = this._formBuilder.group({
      nomeLogin: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      login: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, Validators.required]
    })
  }

  getField(nameField:string) {
    return this.form.get(nameField);
  }

  registerLogin() {
    event.preventDefault();
  }

  backLogin() {
    this._router.navigate(["login"]);
  }
}
