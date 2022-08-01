import { Component, Input, OnInit } from '@angular/core';
import { GranteesService } from 'src/app/services/grantees.service';
import { GranteeModel } from 'src/app/_shared/models/grantee.model';

@Component({
  selector: 'app-deliberation-item',
  templateUrl: './deliberation-item.component.html',
  styleUrls: ['./deliberation-item.component.scss']
})
export class DeliberationItemComponent implements OnInit {
  @Input() grantee: GranteeModel = {
    dateSubmitted: '',
    status: '',
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
    profileUrl: '',

    nameOfAfpPersonnel: '',
    dateReceived: '',
  };

  constructor(
    private granteeService: GranteesService
  ) { }

  ngOnInit(): void {
    this.grantee.status = 'Accepted';
  }

  changeReturnStatus(status: string): void {
    this.grantee.status = status;
  }

  returnApplication(id: string): void {
    if (this.grantee.status === 'Declined') {
      this.granteeService.deleteGranteeData(this.grantee.id).then(() => { })
    } else if (this.grantee.status === 'Approved') {
      this.granteeService.updateStatus(id, this.grantee).then((response) => {
        console.log(response)
      })
    }
  }
}
