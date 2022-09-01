import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { LoginRequest } from '../_shared/models/requests/login.requests';

import Swal from 'sweetalert2';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginRequest: LoginRequest = {
    username: '',
    password: '',
  };

  constructor(
    private authenticationService: AuthenticationService,
    private profileService: ProfileService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  processing = false;
  showMessage = false;
  loginUser(): void {
    this.processing = true;
    this.authenticationService
      .signInUser(this.loginRequest)
      .then((response) => {
        if (
          response === 'auth/invalid-email' ||
          response === 'auth/wrong-password' ||
          response == 'auth/user-not-found'
        ) {
          this.showMessage = true;
          Swal.fire({
            icon: 'warning',
            title: 'Login Failed',
            text: 'Wrong username or password!',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Login Success',
            text: 'You have successfully login',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          }).then(() => {
            // .getUsersData(
            //   JSON.parse(JSON.stringify(sessionStorage.getItem('_userid')))
            // )
            this.profileService.getUserDataNew(response)
              .then((response) => {
                if (
                  JSON.parse(JSON.stringify(response))['type'] === 'applicant'
                ) {
                  this.router.navigateByUrl('applicant-portal');
                } else {
                  this.router.navigateByUrl('app');
                }
              });
          });
        }
        this.processing = false;
      })
      .catch((error) => {
        this.processing = false;
      });
  }

  hasError(formControl: any): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }
}
