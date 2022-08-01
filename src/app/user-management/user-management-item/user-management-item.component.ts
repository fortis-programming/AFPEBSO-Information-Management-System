import { Component, OnInit, Input } from '@angular/core';
import { UserManagementService } from 'src/app/services/user-management.service';
import { UsersModel } from 'src/app/_shared/models/users.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-management-item',
  templateUrl: './user-management-item.component.html',
  styleUrls: ['./user-management-item.component.scss']
})
export class UserManagementItemComponent implements OnInit {
  @Input() userModel: UsersModel = {
    dateModified: '',
    employeeNo: '',
    userId: '',
    username: '',
    firstname: '',
    lastname: '',
    middlename: '',
    type: ''
  }

  constructor(
    private userManagementService: UserManagementService
  ) { }

  ngOnInit(): void {
  }

  saveUpdate(): void {
    this.userModel.dateModified = new Date().toString();
    this.userManagementService.updateProfile(JSON.parse(JSON.stringify(sessionStorage.getItem('user'))), this.userModel).then((response) => {
      if (response) {
        Swal.fire({
          icon: 'success',
          title: 'Update Success',
          text: 'You have successfully updated ' + this.userModel.username,
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        }).then(() => {
        })
      }
    })
  }

  edit(id: string): void {
    sessionStorage.setItem('user', id)
  }

}
