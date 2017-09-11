import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CursoComponent } from './curso.component';
import { CursoAlteraComponent } from './curso-altera/curso-altera.component';
import { CursoInsereComponent } from './curso-insere/curso-insere.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CursoComponent, children: [
      { path: 'novo', component: CursoInsereComponent },
      { path: 'altera/:id', component: CursoAlteraComponent },
      { path: 'detalhe/:id', component: CursoDetalheComponent }
    ]}
  ])],
  exports: [RouterModule]
})
export class CursoRouting {}
