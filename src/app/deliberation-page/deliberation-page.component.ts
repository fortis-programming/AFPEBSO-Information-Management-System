import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';

@Component({
  selector: 'app-deliberation-page',
  templateUrl: './deliberation-page.component.html',
  styleUrls: ['./deliberation-page.component.scss']
})
export class DeliberationPageComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.setTitle('For Deliberation');
  }

}
