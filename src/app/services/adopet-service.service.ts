import { HttpClient }                                   from '@angular/common/http';
import { Injectable }                                   from '@angular/core';

import { Usuario }                                      from './../model/usuario';
import { map, catchError }                              from 'rxjs/operators';
import { Observable, EMPTY}                             from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdopetServiceService {

  private urlUsuario: string = "http://localhost:3002";

    handleError(e: any): Observable<any> {
    console.log(e);
    return EMPTY;
  }

  constructor(
    private _http: HttpClient
  ) { }

  getUsuario(): Observable<Usuario> {
    return this._http.get<Usuario>(this.urlUsuario + "/usuario");
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this._http.post<Usuario>(this.urlUsuario + '/usuario', usuario).pipe(
      map(obj => obj),
      catchError((error) => this.handleError(error))
    );
  }
}
