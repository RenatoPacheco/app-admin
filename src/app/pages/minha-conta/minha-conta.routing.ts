import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './../../guards/auth/auth.guard';
import { MinhaContaPage } from './minha-conta.page';
import { AutenticacaoPage } from './autenticacao/autenticacao.page';
import { IndexPage } from './index/index.page';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: MinhaContaPage, children: [
      { path: 'autenticacao', component: AutenticacaoPage },
      { path: '', canActivate: [AuthGuard], component: IndexPage }
    ]}
  ])],
  exports: [RouterModule]
})
export class MinhaContaRouting {}
