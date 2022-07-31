import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';
import { ProfileService } from '../services/profile.service';
import { UsersModel } from '../_shared/models/users.model';

import Swal from 'sweetalert2';

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
  updatePassword(): void {
    // Swal.fire({
    //   title: 'Update Password',
    //   text: 'Please enter your password to proceed.',
    //   showConfirmButton: true,
    //   showCancelButton: true,
    //   html: '<input id="swal-input1" class="swal2-input">' +
    //     '<input id="swal-input2" class="swal2-input">',
    //   confirmButtonText: 'Proceed',
    //   confirmButtonColor: '#459A8E',
    //   preConfirm: (inputValue) => {
    //     if (inputValue == null || inputValue == '') {
    //       Swal.fire({
    //         icon: 'warning',
    //         title: 'Current password is required',
    //         text: 'Are you sure you want to update your password?',
    //         showConfirmButton: false,
    //         timer: 1500,
    //         timerProgressBar: true
    //       })
    //     } else {
    //       Swal.fire({
    //         title: 'Update Password' + inputValue,
    //         text: 'Are you sure you want to update your password?',
    //         showConfirmButton: true,
    //         showCancelButton: true,
    //         input: 'password',
    //         inputPlaceholder: 'Enter your current password',
    //       })
    //     }
    //   }
    // }).then((inputValue) => {

    // })
    // Swal.fire({
    //   title: "An input!",
    //   text: "Write something interesting:",
    //   type: "input",
    //   showCancelButton: true,
    //   closeOnConfirm: false,
    //   animation: "slide-from-top",
    //   inputPlaceholder: "Write something"
    // }
    // this.profileService.updatePassword('12345678', 'newpassword').then(() => { });
  }
}
