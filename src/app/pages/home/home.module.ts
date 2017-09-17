import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';

import { HomeRouting } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    HomeRouting
  ],
  declarations: [
    HomePage
  ]
})
export class HomeModule { }
