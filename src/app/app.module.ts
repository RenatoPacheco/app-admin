import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UrlSerializer } from '@angular/router';

import { LowerCaseUrlSerializer } from './helpers/lower-case-url-serializer';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
