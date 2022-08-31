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

  edit = false;
  constructor(
    private granteesService: GranteesService,
    private headerService: HeaderService
  ) { }

  profileData = '';
  docId = '';
  ngOnInit(): void {
    this.headerService.setTitle('Information / AFP Member');
    this.getDocId();
  }

  getDocId(): void {
    this.granteesService.getDocId(JSON.parse(JSON.stringify(sessionStorage.getItem('applicant_id'))))
      .then(response => {
        this.docId = response;
      })
      .then(() => {
        this.loadData();
      })
  }

  loadData(): void {
    this.granteesService.loadGranteeData(this.docId)
      .then((res) => {
        this.grantee = JSON.parse(JSON.stringify(res))[0];
      })
  }
}
