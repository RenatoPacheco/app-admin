import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MinhaContaPage } from './minha-conta.page';
import { AutenticacaoPage } from './autenticacao/autenticacao.page';


@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: MinhaContaPage, children: [
      { path: 'autenticacao', component: AutenticacaoPage }
    ]}
  ])],
  exports: [RouterModule]
})
export class MinhaContaRouting {}
