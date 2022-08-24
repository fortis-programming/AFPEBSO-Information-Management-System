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

  constructor(
    private registrationService: RegistrationService
  ) { }

  ngOnInit(): void {
    console.log(JSON.stringify(Math.floor(Math.random() * 10000)));
  }

  photoFile: any;
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      console.log(event.target.files[0]);
      this.photoFile = event.target.files[0];
    }
  }

  addApplicants(): void {
    this.registrationModel.dateReceived = JSON.stringify(new Date().toLocaleString());
    this.registrationModel.status = "Pending";
    this.registrationModel.id = JSON.stringify(Math.floor(Math.random() * 10000));
    this.registrationService.addApplicants(this.registrationModel, this.photoFile).then(() => {
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
