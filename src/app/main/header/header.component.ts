import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
    private autheticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  getTitle(): string {
    return this.headerService.getTitle();
  }

  logout(): void {
    this.autheticationService.logout()
      .then(() => {
        sessionStorage.clear();
        localStorage.clear();
      })
  }
}
