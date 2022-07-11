import { Routes } from "@angular/router";
import { GranteeComponent } from "../grantee/grantee.component";
import { GranteesPageComponent } from "./grantees-page.component";

export const route: Routes = [
  {
    path: 'grantees',
    component: GranteesPageComponent,
    children: [
      {
        path: 'grantee',
        component: GranteeComponent
      }
    ]
  }
]