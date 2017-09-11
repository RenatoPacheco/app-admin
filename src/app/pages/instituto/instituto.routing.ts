import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InstitutoComponent } from './instituto.component';
import { InstitutoAlteraComponent } from './instituto-altera/instituto-altera.component';
import { InstitutoInsereComponent } from './instituto-insere/instituto-insere.component';
import { InstitutoDetalheComponent } from './instituto-detalhe/instituto-detalhe.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: InstitutoComponent, children: [
      { path: 'novo', component: InstitutoInsereComponent },
      { path: 'altera/:id', component: InstitutoAlteraComponent },
      { path: 'detalhe/:id', component: InstitutoDetalheComponent }
    ]}
  ])],
  exports: [RouterModule]
})
export class InstitutoRouting {}
