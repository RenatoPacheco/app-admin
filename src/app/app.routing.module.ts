import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'instituto', loadChildren: 'app/pages/instituto/instituto.module#InstitutoModule' },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
  ], {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
