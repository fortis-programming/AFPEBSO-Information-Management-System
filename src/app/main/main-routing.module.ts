import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

import { route as HomeRoute } from '../home-page/home-page-route.module';
import { route as GranteesRoute } from '../grantees-page/grantees-page-route.module';
import { route as ApplicantRoute } from '../applicant-page/applicant-page-route.module';
import { route as GraduatesRoute } from '../graduates-page/graduates-page-route.module';
import { route as StakeholdersRoute } from '../stakeholders-page/stakeholders-page-route.module';
import { route as DeliberationRoute } from '../deliberation-page/deliberation-route.module';
import { route as GranteeRoute } from '../grantee/grantee-route.module';
import { route as ProfileRoute } from '../profile/profile-route.module';
import { route as ApplicantPreviewRoute } from '../applicant-preview/applicant-preview-route.module';
import { route as UserManagementRoute } from '../user-management/user-management-route.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'applicant',
        pathMatch: 'full'
      },
      ...HomeRoute,
      ...GranteesRoute,
      ...ApplicantRoute,
      ...GraduatesRoute,
      ...StakeholdersRoute,
      ...DeliberationRoute,
      ...GranteeRoute,
      ...ProfileRoute,
      ...ApplicantPreviewRoute,
      ...UserManagementRoute
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainRoutingModule { }
