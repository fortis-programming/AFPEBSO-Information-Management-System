import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GranteesPageComponent } from './grantees-page/grantees-page.component';
import { ApplicantPageComponent } from './applicant-page/applicant-page.component';
import { GraduatesPageComponent } from './graduates-page/graduates-page.component';
import { StakeholdersPageComponent } from './stakeholders-page/stakeholders-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    GranteesPageComponent,
    ApplicantPageComponent,
    GraduatesPageComponent,
    StakeholdersPageComponent
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
