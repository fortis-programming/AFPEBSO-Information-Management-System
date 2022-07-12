import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';
import { GranteesService } from '../services/grantees.service';
import { GranteeModel } from '../_shared/models/grantee.model';
import { GranteesPageService } from './grantees-page.service';

@Component({
  selector: 'app-grantees-page',
  templateUrl: './grantees-page.component.html',
  styleUrls: ['./grantees-page.component.scss'],
})
export class GranteesPageComponent implements OnInit {
  constructor(
    private headerService: HeaderService,
    private granteesService: GranteesService,
    private granteepageService: GranteesPageService
  ) {}

  granteesList: GranteeModel[] = [];
  ngOnInit(): void {
    this.loadGrantees();
    this.headerService.setTitle('Grantees');
    this.granteepageService.setStatus(false);
  }

  filteredData: GranteeModel[] = [];
  search_input = '';
  filter(): void {
    if (this.search_input === '') {
      this.filteredData = [];
    } else {
      this.filteredData = this.granteesList.filter((data: GranteeModel) =>
        data.surname.toLocaleLowerCase().includes(this.search_input.toLocaleLowerCase())
      );
    }
  }

  loadGrantees(): void {
    this.granteesService.getGranteesData().then((response) => {
      this.granteesList = JSON.parse(JSON.stringify([response]));
    });
  }

  getStatusHeaderStatus(): boolean {
    return this.granteepageService.getStatus();
  }
}
