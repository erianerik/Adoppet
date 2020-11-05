import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationForms } from 'src/app/util/validation-forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends ValidationForms implements OnInit {

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

  submitForm() {
    event.preventDefault();
  }

  goRegister() {  
    this._router.navigate(["cadastrarLogin"]);
  }

  configForm() {
    this.form = this._formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });

  }

  fieldsTouched(nameField: string) {
    return this.form.get(nameField).valid && this.form.get(nameField).touched && this.form.get(nameField).dirty;
  }

  validationFields() {
    return  this.form.invalid;
  }



}
