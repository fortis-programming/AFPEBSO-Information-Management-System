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
  programs = [
    {
      id: 1,
      program: 'RA 6963'
    },
    {
      id: 2,
      program: 'MBAI SGTI (Regular)'
    },
    {
      id: 3,
      program: 'UNTV'
    },
    {
      id: 4,
      program: 'HERO (stipend only)'
    },
    {
      id: 5,
      program: 'PVAO'
    },
    {
      id: 6,
      program: 'MBAI SGTI (CAA)'
    },
    {
      id: 7,
      program: 'PD 577'
    },
    {
      id: 8,
      program: 'MOA'
    },
    {
      id: 9,
      program: 'REACH'
    },
    {
      id: 10,
      program: 'DEC'
    },
    {
      id: 11,
      program: 'DCP'
    },
    {
      id: 12,
      program: 'DCP'
    },
    {
      id: 13,
      program: 'OTKANG'
    },
    {
      id: 14,
      program: 'SALOME TAN'
    },
    {
      id: 15,
      program: 'MOC'
    },
    {
      id: 16,
      program: 'SMC'
    },
    {
      id: 17,
      program: 'AV Fndn'
    },
    {
      id: 18,
      program: 'RA 9049 (MOV)'
    },
    {
      id: 19,
      program: 'DES'
    },
    {
      id: 20,
      program: 'PVAO'
    }
  ];

  graduateList: GraduatesModels[] = [];
  search = '';

  constructor(
    private headerService: HeaderService,
    private graduateService: GraduatesService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  years: Array<number> = [];
  ngOnInit(): void {
    this.headerService.setTitle('Graduates');
    this.loadData();

    let startingYear = 2000;
    for(let count = 0; count <= 22; count++){
      this.years.push(startingYear + count);
    }
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
      console.log(response)
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

  changeProgram(selected: any): void {
    this.graduateModel.program = selected.value;
  }

  changeYear(selected: any): void {
    this.graduateModel.yearGraduated = selected.value;
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
