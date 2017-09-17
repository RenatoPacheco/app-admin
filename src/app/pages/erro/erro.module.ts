import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErroRouting } from './erro.routing';
import { ErroPage } from './erro.page';
import { NaoEncontradaPage } from './nao-encontrada/nao-encontrada.page';

@NgModule({
  imports: [
    CommonModule,
    ErroRouting
  ],
  declarations: [
    ErroPage,
    NaoEncontradaPage
  ]
})
export class ErroModule { }
