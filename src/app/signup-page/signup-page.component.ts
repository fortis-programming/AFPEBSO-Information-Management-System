import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../services/authentication.service';
import { SigInRequest } from '../_shared/models/requests/signup.requests';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  signInModel: SigInRequest = {
    username: '',
    password: '',
    confirmPassword: ''
  }

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  signUpUser(): void {
    this.authenticationService.signUpUser(this.signInModel).then((response) => {
      Swal.fire({
        icon: 'success',
        title: 'Account created',
        text: 'You have successfully created an account',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        
      })
    });
  }
}
