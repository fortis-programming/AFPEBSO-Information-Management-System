import { Component, OnInit } from '@angular/core';
import { GranteesService } from '../services/grantees.service';
import { RegistrationService } from '../services/registration.service';
import { GranteeModel } from '../_shared/models/grantee.model';

@Component({
  selector: 'app-applicant-status',
  templateUrl: './applicant-status.component.html',
  styleUrls: ['./applicant-status.component.scss']
})
export class ApplicantStatusComponent implements OnInit {
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
    afp_date_of_death: '',

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
  constructor(
    private granteesService: GranteesService,
    private resgistrationService: RegistrationService
  ) { }

  edit = false;
  url = '';
  ngOnInit(): void {
    this.loadApplicantData();
  }

  loadApplicantData(): void {
    this.granteesService.getGranteeDataNew(JSON.parse(JSON.stringify(sessionStorage.getItem('_userid'))))
      .then((response) => {
        this.grantee = response;
        setTimeout(() => {

          this.resgistrationService.getImage(this.grantee.profileUrl).then((response) => {
            this.url = response;
          })
        }, 500);
      })
  }
}
