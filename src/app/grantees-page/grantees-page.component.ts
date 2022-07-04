import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';
import { GranteesService } from '../services/grantees.service';
import { GranteeModel } from '../_shared/models/grantee.model';

@Component({
  selector: 'app-grantees-page',
  templateUrl: './grantees-page.component.html',
  styleUrls: ['./grantees-page.component.scss'],
})
export class GranteesPageComponent implements OnInit {
  constructor(
    private headerService: HeaderService,
    private granteesService: GranteesService
  ) {}

  granteesList: GranteeModel[] = [];
  ngOnInit(): void {
    this.headerService.setTitle('Grantees');
    this.loadGrantees();
  }

  
  filteredData: GranteeModel[] = [];
  searchInput = '';
  filter(): void {
    if (this.searchInput === '') {
      this.loadGrantees();
    } else {
      this.granteesList = this.granteesList.filter((data: GranteeModel) =>
        data.surname
          .toLocaleLowerCase()
          .includes(this.searchInput.toLocaleLowerCase())
      );
    }
  }

  loadGrantees(): void {
    this.granteesService.getGrantees().subscribe((response) => {
      this.granteesList = response.data;
    });
  }
}
