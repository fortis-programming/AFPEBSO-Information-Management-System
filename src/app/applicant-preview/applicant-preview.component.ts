import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GranteesService } from '../services/grantees.service';
import { GranteeModel } from '../_shared/models/grantee.model';

@Component({
  selector: 'app-applicant-preview',
  templateUrl: './applicant-preview.component.html',
  styleUrls: ['./applicant-preview.component.scss']
})
export class ApplicantPreviewComponent implements OnInit {
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

  constructor(
    private routeParams: ActivatedRoute,
    private granteesService: GranteesService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  identifier = '';
  edit = false;
  ngOnInit(): void {
    this.routeParams.params.subscribe(params => {
      this.identifier = params['id']
    });

    this.getDocId();

    setTimeout(() => {
      this.grantee.status = 'For Deliberation';
    }, 500)
  }

  docId = '';
  getDocId(): void {
    this.granteesService.getDocId(this.identifier)
      .then(response => {
        this.docId = response;
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
        this.grantee = JSON.parse(JSON.stringify(res))[0];
        this.photoUrl = JSON.parse(JSON.stringify(res))[1];
        this.signatureUrl = JSON.parse(JSON.stringify(res))[2];
      });
  }

  loadApplicantData(id: string): void {
    this.granteesService.getApplicantData(id).then((response) => {
      this.grantee = JSON.parse(JSON.stringify(response));
    });
  }

  returnApplication(id: string): void {
    if (this.grantee.status === 'Declined') {
      Swal.fire({
        title: 'Remarks',
        input: 'text',
        inputLabel: 'Write a remarks about the application',
        showCancelButton: true
      }).then(res => {
        Swal.fire({
          title: 'Do you want to decline this applicant?',
          showCancelButton: true,
          confirmButtonText: 'Confirm',
          denyButtonText: `Cancel`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
            this.granteesService.submitRemarks(this.grantee.id, res.value).
              then(() => {
                this.granteesService.deleteGranteeData(this.grantee.id).then(() => {
                  this.router.navigate(['../app/applicant']);
                })
              });
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      });

    } else if (this.grantee.status === 'For Deliberation') {
      this.granteesService.updateStatus(id, this.grantee).then((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Application Approved!',
          text: 'Applicant was successfully move to Deliberation',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        }).then(() => {
          this.router.navigate(['../app/applicant']);
        })
        console.log(response)
      })
    }
  }

  changeReturnStatus(status: string): void {
    this.grantee.status = status;
  }
}
