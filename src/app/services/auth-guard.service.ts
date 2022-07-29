import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  canActivate() {
    if (this.auth.isAuthenticated()) return true;

    this.router.navigate(['login']);
    return false;
  }
}
