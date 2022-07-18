import { Component, Input, OnInit } from '@angular/core';
import { GraduatesModels } from 'src/app/_shared/models/graduates.models';

@Component({
  selector: 'app-graduates-item',
  templateUrl: './graduates-item.component.html',
  styleUrls: ['./graduates-item.component.scss']
})
export class GraduatesItemComponent implements OnInit {
  @Input() graduates: GraduatesModels ={
    name: '',
    course: '',
    yearGraduated: '',
    school: '',
    program: '',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
