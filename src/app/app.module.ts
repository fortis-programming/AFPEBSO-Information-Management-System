import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  providers: [{ provide: LocationStrategy.ɵfac, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
