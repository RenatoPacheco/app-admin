import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UrlSerializer } from '@angular/router';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { LowerCaseUrlSerializer } from './helpers/lower-case-url-serializer';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouting
  ],
  providers: [
    {
        provide: UrlSerializer,
        useClass: LowerCaseUrlSerializer
    },
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
