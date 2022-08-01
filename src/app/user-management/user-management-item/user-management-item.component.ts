import { Component, OnInit, Input } from '@angular/core';
import { UsersModel } from 'src/app/_shared/models/users.model';

@Component({
  selector: 'app-user-management-item',
  templateUrl: './user-management-item.component.html',
  styleUrls: ['./user-management-item.component.scss']
})
export class UserManagementItemComponent implements OnInit {
  @Input() userModel: UsersModel = {
    employeeNo: '',
    userId: '',
    username: '',
    firstname: '',
    lastname: '',
    middlename: '',
    type: ''
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.userModel)
  }

}
