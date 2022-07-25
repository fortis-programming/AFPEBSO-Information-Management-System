import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';
import { GraduatesService } from '../services/graduates.service';
import { GraduatesModels } from '../_shared/models/graduates.models';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graduates-page',
  templateUrl: './graduates-page.component.html',
  styleUrls: ['./graduates-page.component.scss']
})
export class GraduatesPageComponent implements OnInit {

  graduateList: GraduatesModels[] = [];
  search = '';

  constructor(
    private headerService: HeaderService,
    private graduateService: GraduatesService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.headerService.setTitle('Graduates');
    this.loadData();
  }

  loadDataWithFilter(): void {
    if (this.search === '') {
      this.loadData();
    } else {
      this.graduateList = this.graduateList.filter((data: GraduatesModels) =>
        data.name.toLowerCase().includes(this.search.toLowerCase()));
    }
  }

  loadData(): void {
    this.graduateService.getGraduatesData().then((response) => {
      this.graduateList = JSON.parse(JSON.stringify(response));
    });
  }

  deleteData(): void {
    // LAGAY MO LANG SA PARAMETER YUNG []DOCID]
    this.graduateService.deleteGraduateData('aqqyiAAlNsrSFinAB8ne').then(() => {
      console.log('document deleted');
    })
  }

  graduateModel = {
    name: '',
    course: '',
    yearGraduated: '',
    school: '',
    program: '',
  }

  addGraduate(): void {
    this.graduateService.addGraduate(this.graduateModel).then(() => {
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
