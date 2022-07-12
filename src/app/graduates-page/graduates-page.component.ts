import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';
import { GraduatesService } from '../services/graduates.service';
import { GraduatesModels } from '../_shared/models/graduates.models';

@Component({
  selector: 'app-graduates-page',
  templateUrl: './graduates-page.component.html',
  styleUrls: ['./graduates-page.component.scss']
})
export class GraduatesPageComponent implements OnInit {

  graduateList: GraduatesModels[] = [];
  
  constructor(
    private headerService: HeaderService,
    private graduateService: GraduatesService

  ) { }

  ngOnInit(): void {
    this.headerService.setTitle('Graduates');
    this.graduateService.getGraduatesData().then((response) => {
      this.graduateList= JSON.parse(JSON.stringify(response));
      console.log(response);
    });
  }
}
