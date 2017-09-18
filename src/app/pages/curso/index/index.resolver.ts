import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CursoService } from './../../../services/curso/curso.service';

@Injectable()
export class IndexResolver implements Resolve<any> {

  constructor(
    private _cursoService: CursoService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this._cursoService.listar();
  }
}
