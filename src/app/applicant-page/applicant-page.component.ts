import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';
import { GranteesService } from '../services/grantees.service';
import { GranteeModel } from '../_shared/models/grantee.model';

@Component({
  selector: 'app-applicant-page',
  templateUrl: './applicant-page.component.html',
  styleUrls: ['./applicant-page.component.scss']
})
export class ApplicantPageComponent implements OnInit {
  constructor(
    private headerService: HeaderService,
    private granteeService: GranteesService
  ) { }

  ngOnInit(): void {
    this.headerService.setTitle('Applicants');
    this.loadData();
  }

  granteeList: GranteeModel[] = [];
  loadData(): void {
    this.granteeService.getGranteesData('Pending').then((result) => {
      this.granteeList = JSON.parse(JSON.stringify(result));
    })
  }

  convertToDate(date: string): any {
    return new DatePipe(date);
  }
}
