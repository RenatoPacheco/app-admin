import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificarAcesso();
  }

  public canLoad(route: Route)
  : Observable<boolean>|Promise<boolean>|boolean {
    console.log('canLoad: verificando se usuário pode carregar o codódigo do módulo');

    return this.verificarAcesso();
  }

  private verificarAcesso()
  : Observable<boolean> | Promise<boolean> | boolean {

    if (this._authService.estaAutenticado()) {
      return true;
    }

    this._router.navigate(['minhaconta/autenticacao']);
    return false;
  }
}
