import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AdopetServiceService {

  private urlUsuario: string = "http://localhost:3002";

  constructor(
    private _http: HttpClient
  ) { }

  getUsuario(): Observable<Usuario> {
    return this._http.get<Usuario>(this.urlUsuario + "/usuario");
  }

}
