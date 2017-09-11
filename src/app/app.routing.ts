import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'instituto', loadChildren: 'app/pages/instituto/instituto.module#InstitutoModule' },
    { path: 'curso', loadChildren: 'app/pages/curso/curso.module#CursoModule' },
    { path: 'home', component: HomeComponent },
    { path: 'naoEncontrada', component: NaoEncontradaComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/naoEncontrada', pathMatch: 'full' },
  ], {useHash: true})],
  exports: [RouterModule]
})
export class AppRouting {}
