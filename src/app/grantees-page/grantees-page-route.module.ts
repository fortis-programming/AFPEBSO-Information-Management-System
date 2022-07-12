import { Routes } from '@angular/router';
import { GranteesPageComponent } from './grantees-page.component';

import { route as GranteeRoute } from '../grantee/grantee-route.module';

export const route: Routes = [
  {
    path: 'grantees',
    component: GranteesPageComponent
  },
];
