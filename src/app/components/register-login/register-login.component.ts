import { Component, OnInit }                                from '@angular/core';

import { FormGroup, FormBuilder, Validators }               from '@angular/forms';
import { Router }                                           from '@angular/router';
import { AdopetServiceService }                             from './../../services/adopet-service.service';
import { ValidationForms }                                  from 'src/app/util/validation-forms';
import { Usuario }                                          from './../../model/usuario';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent extends ValidationForms implements OnInit {

  form: FormGroup;
  usuario: Usuario;
  createUsuario: boolean = false;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _adopetService: AdopetServiceService
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
    this.registerLoginApi();
  }

  backLogin() {
    this._router.navigate(["login"]);
  }

  registerLoginApi() {
    this.usuario = this.form.value;
    this._adopetService.createUsuario(this.usuario).subscribe(() => {
      this.createUsuario = true;
      this.form.reset();
    })
    
  }

}
