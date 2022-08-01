import { Component, OnInit } from '@angular/core';

import { UserManagementService } from '../services/user-management.service';
import { UsersModel } from '../_shared/models/users.model';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(
    private usersService: UserManagementService
  ) { }

  adminUsers: UsersModel[] = [];
  userAccounts: UsersModel[] = [];
  ngOnInit(): void {
    this.getAdmins();
    this.getUserAccounts();
  }

  getAdmins(): void {
    this.usersService.getUsers('Admin').then((response) => {
      this.adminUsers = JSON.parse(JSON.stringify(response))
    });
  }

  getUserAccounts(): void {
    this.usersService.getUsers('Users').then((response) => {
      this.userAccounts = JSON.parse(JSON.stringify(response))
    })
  }
}
