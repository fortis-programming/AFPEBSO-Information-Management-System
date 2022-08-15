import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-portal',
  templateUrl: './applicant-portal.component.html',
  styleUrls: ['./applicant-portal.component.scss']
})
export class ApplicantPortalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  status = 'accepted';
}
