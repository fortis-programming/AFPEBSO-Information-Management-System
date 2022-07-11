import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../main/header/header.service';
import { GranteesService } from '../services/grantees.service';
import { GranteeModel } from '../_shared/models/grantee.model';

@Component({
  selector: 'app-grantees-page',
  templateUrl: './grantees-page.component.html',
  styleUrls: ['./grantees-page.component.scss'],
})
export class GranteesPageComponent implements OnInit {
  router = '';
  constructor(
    private headerService: HeaderService,
    private granteesService: GranteesService,
    private _router: Router
  ) {}

  granteesList: GranteeModel[] = [];
  ngOnInit(): void {
    this.loadGrantees();
    this.headerService.setTitle('Grantees');
    this.router = this._router.url;
  }

  filteredData: GranteeModel[] = [];
  search_input = '';
  filter(): void {
    if (this.search_input === '') {
      this.filteredData = [];
    } else {
      this.filteredData = this.granteesList.filter((data: GranteeModel) =>
        data.surname
          .toLocaleLowerCase()
          .includes(this.search_input.toLocaleLowerCase())
      );
    }
  }

  loadGrantees(): void {
    this.granteesService.getGranteesData().then((response) => {
      this.granteesList = JSON.parse(JSON.stringify([response]));
      console.log(response);
      
    });
  }
}
