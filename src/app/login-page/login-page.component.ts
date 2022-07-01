import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../_shared/models/requests/login.requests';

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

  constructor() { }

  ngOnInit(): void {
  }

  hasError(formControl: any): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched)
  }
}
