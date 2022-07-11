import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//  COMPONENTS
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GranteesPageComponent } from './grantees-page/grantees-page.component';
import { ApplicantPageComponent } from './applicant-page/applicant-page.component';
import { GraduatesPageComponent } from './graduates-page/graduates-page.component';
import { StakeholdersPageComponent } from './stakeholders-page/stakeholders-page.component';
import { GranteesItemComponent } from './grantees-page/grantees-item/grantees-item.component';
import { GranteeComponent } from './grantee/grantee.component';
import { HttpClientModule } from '@angular/common/http';
import { DeliberationPageComponent } from './deliberation-page/deliberation-page.component';
import { MaintenancePageComponent } from './maintenance-page/maintenance-page.component';
import { ApplicantItemComponent } from './applicant-page/applicant-item/applicant-item.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    GranteesPageComponent,
    ApplicantPageComponent,
    GraduatesPageComponent,
    StakeholdersPageComponent,
    GranteesItemComponent,
    GranteeComponent,
    DeliberationPageComponent,
    MaintenancePageComponent,
    ApplicantItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LocationStrategy.ɵfac, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
