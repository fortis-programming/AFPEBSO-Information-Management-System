import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';

@Component({
  selector: 'app-graduates-page',
  templateUrl: './graduates-page.component.html',
  styleUrls: ['./graduates-page.component.scss']
})
export class GraduatesPageComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.setTitle('Graduates');
  }

}
