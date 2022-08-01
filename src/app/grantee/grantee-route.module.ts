import { Routes } from "@angular/router";
import { AfpMemberComponent } from "./afp-member/afp-member.component";
import { ApplicantComponent } from "./applicant/applicant.component";
import { GranteeComponent } from "./grantee.component";
import { GuardianComponent } from "./guardian/guardian.component";

export const route: Routes = [
  {
    path: 'grantee',
    component: GranteeComponent,
    children: [
      {
        path: '',
        redirectTo: 'applicant',
        pathMatch: 'full'
      },
      {
        path: 'applicant',
        component: ApplicantComponent
      },
      {
        path: 'afp-member',
        component: AfpMemberComponent
      },
      {
        path: 'guardian',
        component: GuardianComponent
      }
    ]
  }
]