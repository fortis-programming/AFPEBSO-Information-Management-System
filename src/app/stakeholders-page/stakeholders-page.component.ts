import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';

@Component({
  selector: 'app-stakeholders-page',
  templateUrl: './stakeholders-page.component.html',
  styleUrls: ['./stakeholders-page.component.scss']
})
export class StakeholdersPageComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.setTitle('Stakeholders');
  }

}
