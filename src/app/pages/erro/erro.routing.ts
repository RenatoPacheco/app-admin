import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ErroPage } from './erro.page';
import { NaoEncontradaPage } from './nao-encontrada/nao-encontrada.page';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ErroPage, children: [
      { path: 'naoencontrada', component: NaoEncontradaPage }
    ]}
  ])],
  exports: [RouterModule]
})
export class ErroRouting {}
