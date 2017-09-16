import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UrlSerializer } from '@angular/router';

import { LowerCaseUrlSerializer } from './helpers/lower-case-url-serializer';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [
    {
        provide: UrlSerializer,
        useClass: LowerCaseUrlSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
