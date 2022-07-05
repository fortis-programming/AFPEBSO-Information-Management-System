import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';
import { GranteeModel } from '../_shared/models/grantee.model';

@Component({
  selector: 'app-grantee',
  templateUrl: './grantee.component.html',
  styleUrls: ['./grantee.component.scss']
})
export class GranteeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
