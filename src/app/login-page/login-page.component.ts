import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { LoginRequest } from '../_shared/models/requests/login.requests';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginRequest: LoginRequest = {
    username: '',
    password: ''
  }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  processing = false;
  showMessage = false;
  loginUser(): void {
    this.processing = true;
    this.authenticationService.signInUser(this.loginRequest).then((response) => {

      if (response === "auth/invalid-email" || response === "auth/wrong-password") {
        this.showMessage = true;
        Swal.fire({
          icon: 'warning',
          title: 'Login Failed',
          text: 'Wrong username or password!',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Login Success',
          text: 'You have successfully login',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        }).then(() => {
          this.router.navigateByUrl('app');
        })
      }

      this.processing = false;

    }).catch((error) => {
      console.log(error);
      this.processing = false;
    });
  }

  hasError(formControl: any): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched)
  }
}
