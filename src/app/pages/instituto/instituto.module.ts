import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InstitutoRouting } from './instituto.routing';
import { InstitutoComponent } from './instituto.component';
import { InstitutoInsereComponent } from './instituto-insere/instituto-insere.component';
import { InstitutoAlteraComponent } from './instituto-altera/instituto-altera.component';
import { InstitutoDetalheComponent } from './instituto-detalhe/instituto-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    InstitutoRouting
  ],
  declarations: [
    InstitutoComponent,
    InstitutoInsereComponent,
    InstitutoAlteraComponent,
    InstitutoDetalheComponent
  ],
  exports: [
    InstitutoComponent,
    InstitutoInsereComponent,
    InstitutoAlteraComponent,
    InstitutoDetalheComponent
  ]
})
export class InstitutoModule { }
