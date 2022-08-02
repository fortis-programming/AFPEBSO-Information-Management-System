import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GranteesService } from 'src/app/services/grantees.service';
import { GranteeModel } from 'src/app/_shared/models/grantee.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deliberation-item',
  templateUrl: './deliberation-item.component.html',
  styleUrls: ['./deliberation-item.component.scss']
})
export class DeliberationItemComponent implements OnInit {
  @Input() grantee: GranteeModel = {
    dateSubmitted: '',
    status: '',
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
    profileUrl: '',

    nameOfAfpPersonnel: '',
    dateReceived: '',
  };

  constructor(
    private granteeService: GranteesService,
    private router: Router
  ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.grantee.status = 'Accepted';
  }

  changeReturnStatus(status: string): void {
    this.grantee.status = status;
  }

  returnApplication(id: string): void {
    if (this.grantee.status === 'Declined') {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
          this.granteeService.deleteGranteeData(this.grantee.id).then(() => { 
            location.reload(); 
          })
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
      
    } else if (this.grantee.status === 'Accepted') {
      this.granteeService.updateStatus(id, this.grantee).then((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Application Approved!',
          text: 'Applicant was successfully move to Deliberation',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        }).then(() => {
          location.reload();
        })
        console.log(response)
      })
    }
  }
}
