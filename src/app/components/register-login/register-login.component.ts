import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  backLogin() {
    this._router.navigate(["login"]);
  }
}
