import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErroModule } from './pages/erro/erro.module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'erro', loadChildren: 'app/pages/erro/erro.module#ErroModule' },
    { path: 'minhaconta', loadChildren: 'app/pages/minha-conta/minha-conta.module#MinhaContaModule' },
    { path: 'instituto', loadChildren: 'app/pages/instituto/instituto.module#InstitutoModule' },
    { path: 'curso', loadChildren: 'app/pages/curso/curso.module#CursoModule' },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/erro/naoEncontrada', pathMatch: 'full' },
  ], {useHash: true})],
  exports: [RouterModule]
})
export class AppRouting {}
