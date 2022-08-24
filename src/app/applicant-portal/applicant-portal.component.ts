import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { GranteesService } from '../services/grantees.service';

@Component({
  selector: 'app-applicant-portal',
  templateUrl: './applicant-portal.component.html',
  styleUrls: ['./applicant-portal.component.scss']
})
export class ApplicantPortalComponent implements OnInit {

  constructor(
    private granteeService: GranteesService,
    private userService: AuthenticationService
  ) { }

  userId = '';
  applicantState = false;
  ngOnInit(): void {
    this.userId = JSON.parse(JSON.stringify(sessionStorage.getItem('_userid')));
    this.granteeService.checkIfUserIsPending(this.userId).then((response) => {
      this.applicantState = response;
    });
    this.granteeService.getGranteeDataNew(this.userId).then((response) => {
      this.status = JSON.parse(JSON.stringify(response))['status'];
    })
  }

  status = 'accepted';

  logout(): void {
    this.userService.logout();
    sessionStorage.clear();
    localStorage.clear();
  }
}
