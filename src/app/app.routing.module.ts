import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InstitutoComponent } from './pages/instituto/instituto.component';
import { InstitutoAlteraComponent } from './pages/instituto/instituto-altera/instituto-altera.component';
import { InstitutoInsereComponent } from './pages/instituto/instituto-insere/instituto-insere.component';
import { InstitutoDetalheComponent } from './pages/instituto/instituto-detalhe/instituto-detalhe.component';

const appRoutes: Routes = [
  { path: 'instituto', component: InstitutoComponent },
  { path: 'instituto/novo', component: InstitutoInsereComponent },
  { path: 'instituto/altera', component: InstitutoAlteraComponent },
  { path: 'instituto/detalhe', component: InstitutoDetalheComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
