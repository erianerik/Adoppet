import { Component, OnInit }                                          from '@angular/core';

import { Usuario }                                                    from './../../model/usuario';
import { AdopetServiceService }                                       from './../../services/adopet-service.service';
import { Router }                                                     from '@angular/router';
import { FormBuilder, FormGroup, Validators }                         from '@angular/forms';
import { ValidationForms }                                            from 'src/app/util/validation-forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends ValidationForms implements OnInit {

  form: FormGroup;
  private users:Usuario[];
  loginValid: boolean = true;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _adopetService: AdopetServiceService,    
    ) {
      super();
     }

  ngOnInit(): void {
    this.configForm();
    this.getDataUsers();
  }

  submitForm() {
   event.preventDefault();
   let loginInput = this.form.value;
   this.loginValid = this.verificationLogin(loginInput, this.users) ? true : false;

   if(this.loginValid) {
    this._router.navigate[("/homeLogada")];
   }

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

  getDataUsers() {
    this._adopetService.getUsuario().subscribe((data: any) =>  {
       this.users = data;
      } );
  }

  verificationLogin(loginInput:any , loginApi:any) {
    for (const login of loginApi) {
      return loginInput.email == login.email && loginInput.password == login.password;
    }
  }


}
