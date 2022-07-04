import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';

@Component({
  selector: 'app-grantees-page',
  templateUrl: './grantees-page.component.html',
  styleUrls: ['./grantees-page.component.scss']
})
export class GranteesPageComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.setTitle('Grantees');
  }

  fruits: string[] = ['Apple', 'Orange', 'Banana', 'isapa'];

}
