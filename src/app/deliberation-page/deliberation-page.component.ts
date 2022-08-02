import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';
import { GranteesService } from '../services/grantees.service';
import { GranteeModel } from '../_shared/models/grantee.model';

@Component({
  selector: 'app-deliberation-page',
  templateUrl: './deliberation-page.component.html',
  styleUrls: ['./deliberation-page.component.scss']
})
export class DeliberationPageComponent implements OnInit {
  granteeList: GranteeModel[] = [];
  constructor(
    private headerService: HeaderService,
    private granteeService: GranteesService
  ) { }

  ngOnInit(): void {
    this.headerService.setTitle('For Deliberation');
    this.loadData();
  }

  loadData(): void {
    this.granteeService.getGranteesData('For Deliberation').then((result) => {
      this.granteeList = JSON.parse(JSON.stringify(result));
    })
  }
}
