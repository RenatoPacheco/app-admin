import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CursoService {

  constructor(
    private _http: Http
  ) { }

  private _urlbase: String = 'http://localhost:65227/Api/Admin';

  public obter(id: string): Observable<Response> {
    return this._http
              .get(`${this._urlbase}/curso/${id}`)
              .map(response => response.json());
  }

  public listar(): Observable<Response> {
    return this._http
              .get(`${this._urlbase}/curso`)
              .map(response => response.json());
  }

}
