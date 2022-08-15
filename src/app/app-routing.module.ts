import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ApplicantPortalComponent } from './applicant-portal/applicant-portal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'registration',
    component: RegistrationPageComponent
  },
  {
    path: 'sign-up',
    component: SignupPageComponent
  },
  {
    path: 'applicant-portal',
    component: ApplicantPortalComponent
  },
  {
    path: 'app',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule { }
