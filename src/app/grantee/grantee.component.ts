import { Component, AfterViewChecked, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private granteespageService: GranteesPageService,
    private granteesService: GranteesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  profileData = '';
  ngOnInit(): void {
    this.getDocId();
  }

  loading = false;
  docId = '';
  getDocId(): void {
    this.granteesService.getDocId(JSON.parse(JSON.stringify(sessionStorage.getItem('applicant_id'))))
      .then(response => {
        this.docId = response;
        this.loading = true;
      })
      .finally(() => {
        this.loadData();
      })
  }

  photoUrl = '';
  signatureUrl = '';
  loadData(): void {
    this.granteesService.loadGranteeData(this.docId)
      .then((res) => {
        this.granteeModel = JSON.parse(JSON.stringify(res))[0];
        this.photoUrl = JSON.parse(JSON.stringify(res))[1];
        this.signatureUrl = JSON.parse(JSON.stringify(res))[2];
      })
      .then(() => this.loading = false);
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
