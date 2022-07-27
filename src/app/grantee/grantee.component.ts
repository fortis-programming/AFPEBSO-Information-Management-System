import { Component, AfterViewChecked, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GranteesPageService } from '../grantees-page/grantees-page.service';
import { GranteesService } from '../services/grantees.service';
import { GranteeModel } from '../_shared/models/grantee.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-grantee',
  templateUrl: './grantee.component.html',
  styleUrls: ['./grantee.component.scss'],
})
export class GranteeComponent implements OnInit, AfterViewChecked {
  granteeModel: GranteeModel = {
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
    private granteespageService: GranteesPageService,
    private granteesService: GranteesService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  profileData = '';
  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 500);
    this.loadData();
  }

  loading = false;
  loadData(): void {
    this.granteesService.getGranteeData(JSON.parse(JSON.stringify(localStorage.getItem('_uid')))).then((response) => {
      this.granteeModel = JSON.parse(JSON.stringify(response)); // DATA
      this.granteesService.getProfile(this.granteeModel.profileUrl).then((response) => {
        this.profileData = response;
      })
    })
  }

  updateGrantee(): void {
    this.granteesService.updateProfile(JSON.parse(JSON.stringify(localStorage.getItem('_uid'))), this.granteeModel).then((response) => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Grantee update successful',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        location.reload();
      })
    }).catch((er) => {
      console.log(er);
    })
  }

  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.granteespageService.setStatus(true)
    }, 500);
  }
}
