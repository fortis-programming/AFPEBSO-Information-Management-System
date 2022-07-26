import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../main/header/header.service';
import { StakeholdersService } from '../services/stakeholder.service';
import { StakeholdersModel } from '../_shared/models/stakeholders.model';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-stakeholders-page',
  templateUrl: './stakeholders-page.component.html',
  styleUrls: ['./stakeholders-page.component.scss'],
})
export class StakeholdersPageComponent implements OnInit {

  stakeholderList: StakeholdersModel[] = [];
  search = '';

  constructor(
    private headerService: HeaderService,
    private stakeholdersService: StakeholdersService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.headerService.setTitle('Stakeholders');
    this.loadData();
  }

  loadDataWithFilter(): void {
    if (this.search ===''){
      this.loadData();
    }else {
      this.stakeholderList = this.stakeholderList.filter((data: StakeholdersModel) =>
      data.stakeholder.toLowerCase().includes(this.search.toLowerCase()));
    }
  }

  loadData(): void {
    this.stakeholdersService.getStakeholdersData().then((response) =>   {
      this.stakeholderList = JSON.parse(JSON.stringify(response));
      console.log(response);
    });
  }

  deleteData(): void {
    this.stakeholdersService.deleteStakeholderData('aqqyiAAlNsrSFinAB8ne').then(() => {
      console.log('document deleted');
    })
  }

  stakeholdersModel = {
    stakeholder: '',
    periodOfImplementation: '',
    relevantProvisions: '',
    renewalPeriod: '',
    status: '',
  }

  addStakeholder(): void {
    this.stakeholdersService.addStakeholder(this.stakeholdersModel).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'You have successfully added graduate',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        location.reload();
      })
    });
  }
  hasError(formControl: any): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched)
  }
}
