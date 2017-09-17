import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRouting } from './instituto.routing';
import { CursoPage } from './curso.page';
import { DetalhePage } from './detalhe/detalhe.page';
import { InserePage } from './insere/insere.page';
import { AlteraPage } from './altera/altera.page';

@NgModule({
  imports: [
    CommonModule,
    CursoRouting
  ],
  declarations: [
    CursoPage,
    DetalhePage,
    InserePage,
    AlteraPage
  ]
})
export class CursoModule { }
