import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MinhaContaRouting } from './minha-conta.routing';
import { MinhaContaPage } from './minha-conta.page';
import { AutenticacaoPage } from './autenticacao/autenticacao.page';

@NgModule({
  imports: [
    CommonModule,
    MinhaContaRouting
  ],
  declarations: [
    MinhaContaPage,
    AutenticacaoPage
  ]
})
export class MinhaContaModule { }
