import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRouting } from './instituto.routing';
import { CursoComponent } from './curso.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoInsereComponent } from './curso-insere/curso-insere.component';
import { CursoAlteraComponent } from './curso-altera/curso-altera.component';

@NgModule({
  imports: [
    CommonModule,
    CursoRouting
  ],
  declarations: [
    CursoComponent,
    CursoDetalheComponent,
    CursoInsereComponent,
    CursoAlteraComponent
  ],
  exports: [
    CursoComponent,
    CursoDetalheComponent,
    CursoInsereComponent,
    CursoAlteraComponent
  ]
})
export class CursoModule { }
