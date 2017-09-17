import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InstitutoRouting } from './instituto.routing';
import { InstitutoPage } from './instituto.page';
import { AlteraPage } from './altera/altera.page';
import { InserePage } from './insere/insere.page';
import { DetalhePage } from './detalhe/detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    InstitutoRouting
  ],
  declarations: [
    InstitutoPage,
    InserePage,
    AlteraPage,
    DetalhePage
  ]
})
export class InstitutoModule { }
