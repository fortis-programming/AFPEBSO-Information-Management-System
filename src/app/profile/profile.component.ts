import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';
import { ProfileService } from '../services/profile.service';
import { UsersModel } from '../_shared/models/users.model';

import Swal from 'sweetalert2';
import { ChangePasswordRequest } from '../_shared/models/requests/changepassword.requests';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
    private profileService: ProfileService
  ) { }

  userModel: UsersModel = {
    dateModified: '',
    employeeNo: '',
    userId: '',
    username: '',
    firstname: '',
    lastname: '',
    middlename: '',
    type: ''
  }

  ngOnInit(): void {
    this.headerService.setTitle('User Profile');
    this.profileService.getUsersData(JSON.parse(JSON.stringify(sessionStorage.getItem('_userid')))).then((response) => {
      this.userModel = JSON.parse(JSON.stringify(response));
    })
  }

  update = false;
  passwordRequest: ChangePasswordRequest = {
    oldPassword: '',
    newPassword: ''
  }

  updatePassword(): void {
    this.profileService.updatePassword(this.passwordRequest.oldPassword, this.passwordRequest.newPassword).then((response) => {
      console.log(response);
      if (response === 'true') {
        Swal.fire({
          icon: 'success',
          title: 'Password update successful',
          text: 'Your password was succesfully changed!',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        })
      }
    }).catch((err) => {
      Swal.fire({
        icon: 'warning',
        text: err,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
      })
    })
  }

  saveProfileChanges(): void {
    this.profileService.updateProfile(this.userModel.employeeNo, this.userModel).then((response) => {
      Swal.fire({
        icon: 'success',
        title: 'Update Success',
        text: 'Update was successfully saved.',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
      })
    })
  }
}
