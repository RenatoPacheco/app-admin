import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CursoPage } from './curso.page';
import { AlteraPage } from './altera/altera.page';
import { InserePage } from './insere/insere.page';
import { DetalhePage } from './detalhe/detalhe.page';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CursoPage, children: [
      { path: 'novo', component: InserePage },
      { path: 'altera/:id', component: AlteraPage },
      { path: 'detalhe/:id', component: DetalhePage }
    ]}
  ])],
  exports: [RouterModule]
})
export class CursoRouting {}
