import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/main/header/header.service';
import { GranteesService } from 'src/app/services/grantees.service';
import { GranteeModel } from 'src/app/_shared/models/grantee.model';

@Component({
  selector: 'app-afp-member',
  templateUrl: './afp-member.component.html',
  styleUrls: ['./afp-member.component.scss'],
})
export class AfpMemberComponent implements OnInit {
  grantee: GranteeModel = {
    profileUrl: '',
    date: '',
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
    afp_birthDate: '',
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

  edit = false;
  constructor(
    private granteesService: GranteesService,
    private headerService: HeaderService
  ) { }

  profileData = '';
  ngOnInit(): void {
    this.headerService.setTitle('Information / AFP Member');
    this.granteesService
      .getGranteeData(JSON.parse(JSON.stringify(localStorage.getItem('_uid'))))
      .then((response) => {
        this.grantee = JSON.parse(JSON.stringify(response));
        this.granteesService.getProfile(this.grantee.profileUrl).then((response) => {
          this.profileData = response;
        })
      });
  }


}
