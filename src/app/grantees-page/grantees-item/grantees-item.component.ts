import { Component, Input, OnInit } from '@angular/core';
import { GranteeModel } from 'src/app/_shared/models/grantee.model';

@Component({
  selector: 'app-grantees-item',
  templateUrl: './grantees-item.component.html',
  styleUrls: ['./grantees-item.component.scss'],
})
export class GranteesItemComponent implements OnInit {
  @Input() grantee: GranteeModel = {
    date: '',
    id: '',
    area: '',
    surname: '',
    firstname: '',
    middlename: '',
    relationshipToAfpMember: '',
    currentAddress: '',
    provincialAddress: '',
    phoneNumber: '',
    cellPhoneNumber: '',
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
    afp_firstName: '',
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
    afp_birthDate: '',
    afp_birthPlace: '',
    afp_sex: '',
    afp_civilStatus: '',
    afp_nrOfDependents: '',
    afp_nameOfLegalDependents: '',
    afp_dependentsBirthdate: '',
    afp_dependentsYearLevel: '',
    afp_educationalProgramAvailed: '',

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

  constructor() {}

  ngOnInit(): void {}
}
