import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';

@Component({
  selector: 'app-applicant-page',
  templateUrl: './applicant-page.component.html',
  styleUrls: ['./applicant-page.component.scss']
})
export class ApplicantPageComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.setTitle('Applicants');
  }

}
