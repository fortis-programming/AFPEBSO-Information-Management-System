import { Component, OnInit } from '@angular/core';
import { GranteesService } from '../services/grantees.service';

@Component({
  selector: 'app-applicant-portal',
  templateUrl: './applicant-portal.component.html',
  styleUrls: ['./applicant-portal.component.scss']
})
export class ApplicantPortalComponent implements OnInit {

  constructor(
    private granteeService: GranteesService
  ) { }

  userId = '';
  applicantState = false;
  ngOnInit(): void {
    this.userId = JSON.parse(JSON.stringify(sessionStorage.getItem('_userid')));
    this.granteeService.checkIfUserIsPending(this.userId).then((response) => {
      this.applicantState = response;
    })
  }

  status = 'accepted';
}
