import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth/auth.guard';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'erro', loadChildren: 'app/pages/erro/erro.module#ErroModule' },
    { path: 'minhaconta', loadChildren: 'app/pages/minha-conta/minha-conta.module#MinhaContaModule' },
    { path: 'instituto', canActivate: [AuthGuard], loadChildren: 'app/pages/instituto/instituto.module#InstitutoModule' },
    { path: 'curso', canActivate: [AuthGuard], loadChildren: 'app/pages/curso/curso.module#CursoModule' },
    { path: 'home', canActivate: [AuthGuard], loadChildren: 'app/pages/home/home.module#HomeModule' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/erro/naoEncontrada', pathMatch: 'full' },
  ], {useHash: true})],
  exports: [RouterModule]
})
export class AppRouting {}
