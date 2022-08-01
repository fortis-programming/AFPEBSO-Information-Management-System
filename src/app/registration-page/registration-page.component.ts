import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RegistrationService } from '../services/registration.service';
import { GranteeModel } from '../_shared/models/grantee.model';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  step = 1;
  registrationModel: GranteeModel = {
    dateSubmitted: '',
    status: '',
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

  constructor(
    private registrationService: RegistrationService
  ) { }

  ngOnInit(): void {
  }

  addApplicants(): void {
    this.registrationModel.dateReceived = new Date().toLocaleString();
    this.registrationModel.status = "Pending";
    this.registrationModel.id = Math.floor(Math.random() * 10000).toString();
    this.registrationService.addApplicants(this.registrationModel).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'You have successfully added applicant',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        location.reload();
      })
    });
  }

  hasError(formControl: any): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched)
  }

}
