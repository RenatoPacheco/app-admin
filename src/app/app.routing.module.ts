import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'instituto', loadChildren: 'app/pages/instituto/instituto.module#InstitutoModule' },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
  ], {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
