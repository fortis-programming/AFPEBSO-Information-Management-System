import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { GranteesService } from '../services/grantees.service';
import { GranteeModel } from '../_shared/models/grantee.model';

@Component({
  selector: 'app-applicant-portal',
  templateUrl: './applicant-portal.component.html',
  styleUrls: ['./applicant-portal.component.scss']
})
export class ApplicantPortalComponent implements OnInit {
  grantee: GranteeModel = {
    dateSubmitted: '',
    status: '',
    profileUrl: '',
    date: new Date(),
    id: '',
    area: '',
    surname: '',
    firstname: '',
    middlename: '',
    relationship_to_afp_member: '',
    currentAddress: '',
    provincialAddress: '',
    phoneNumber: '',
    cellphoneNumber: '',
    emailAddress: '',
    birthDate: '',
    birthPlace: '',
    sex: '',
    civilStatus: '',
    religion: '',
    schoolIntendedToEnrollIn: '',
    schoolAddress: '',
    educationLevel: '',
    yearLevel: '',
    course: '',

    //information of AFP/CAA member
    afp_surname: '',
    afp_firstname: '',
    afp_middleInitial: '',
    afp_rank: '',
    afp_SN: '',
    afp_branchOfService: '',
    afp_militaryStatus: '',
    afp_unitAssignment: '',
    afp_currentAddress: '',
    afp_phoneNo: '',
    afp_cellPhoneNo: '',
    afp_emailAddress: '',
    afp_birthDate: new Date(),
    afp_birthPlace: '',
    afp_sex: '',
    afp_civilStatus: '',
    afp_nrOfDependents: '',
    afp_nameOfLegalDependents: '',
    afp_dependentsBirthdate: '',
    afp_dependentsYearLevel: '',
    afp_educationalProgramAvailed: '',
    afp_date_of_death: new Date(),

    //information of Applicant's guardian
    guardian_surname: '',
    guardian_firstName: '',
    guardian_MiddleName: '',
    guardian_relationshipToApplicant: '',
    guardian_currentAddress: '',
    guardian_provincialAddress: '',
    guardian_emailAddress: '',
    guardian_cellPhoneNo: '',
    guardian_phoneNo: '',

    signatureOfApplicant: '',
    signatureOfAfporGuardian: '',

    nameOfAfpPersonnel: '',
    dateReceived: '',
  };

  url = '';
  constructor(
    private granteeService: GranteesService,
    private userService: AuthenticationService
  ) { }

  userId = '';
  applicantState = false;
  status = 'accepted';
  loading = false;

  ngOnInit(): void {
    this.userId = JSON.parse(JSON.stringify(sessionStorage.getItem('_userid')));
    this.granteeService.checkIfApplicationIsWasRejected(this.userId)
      .then(res => console.log(res));

    this.granteeService.checkIfUserIsPending(this.userId)
      .then((response) => {
        if (!response) {
          this.loading = false;
        }
        else {
          this.applicantState = response;
          this.loading = true;
        }
      })
      .then(() => this.loadData());
  }

  signatureUrl = '';
  loadData(): void {
    this.granteeService.loadGranteeData(this.userId)
      .then((res) => {
        this.status = JSON.parse(JSON.stringify(res))[0]['status'];
        this.grantee = JSON.parse(JSON.stringify(res))[0];
        this.url = JSON.parse(JSON.stringify(res))[1];
        this.signatureUrl = JSON.parse(JSON.stringify(res))[2];
      })
      .then(() => this.loading = false)
  }

  logout(): void {
    this.userService.logout();
    sessionStorage.clear();
    localStorage.clear();
  }
}
