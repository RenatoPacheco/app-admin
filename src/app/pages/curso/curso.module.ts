import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRouting } from './curso.routing';
import { CursoPage } from './curso.page';
import { DetalhePage } from './detalhe/detalhe.page';
import { InserePage } from './insere/insere.page';
import { AlteraPage } from './altera/altera.page';
import { CursoService } from './../../services/curso/curso.service';
import { IndexPage } from './index/index.page';
import { DetalheResolver } from './detalhe/detalhe.resolver';
import { IndexResolver } from './index/index.resolver';

@NgModule({
  imports: [
    CommonModule,
    CursoRouting
  ],
  declarations: [
    CursoPage,
    DetalhePage,
    InserePage,
    AlteraPage,
    IndexPage
  ],
  providers: [
    CursoService,
    DetalheResolver,
    IndexResolver
  ]
})
export class CursoModule { }
