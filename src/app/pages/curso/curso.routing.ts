import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CursoPage } from './curso.page';
import { AlteraPage } from './altera/altera.page';
import { InserePage } from './insere/insere.page';
import { DetalhePage } from './detalhe/detalhe.page';
import { IndexPage } from './index/index.page';
import { DetalheResolver } from './detalhe/detalhe.resolver';
import { IndexResolver } from './index/index.resolver';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CursoPage, children: [
      { path: 'novo', component: InserePage },
      { path: 'altera/:id', component: AlteraPage },
      { path: 'detalhe/:id', component: DetalhePage, resolve: {
        curso : DetalheResolver
      }},
      { path: '', component: IndexPage, resolve: {
        cursos : IndexResolver
      }}
    ]}
  ])],
  exports: [RouterModule]
})
export class CursoRouting {}
