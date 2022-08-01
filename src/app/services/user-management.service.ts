import { Injectable } from '@angular/core';
import { BaseResponse } from '../_shared/models/responses/base.response';
import { onSnapshot, query, where, collection } from 'firebase/firestore';
import { firestoreInit } from '../services/firebase.service';

import { UsersModel } from '../_shared/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor() { }

  async getUsers(type: string): Promise<BaseResponse<UsersModel[]>> {
    const response_data = new Promise<BaseResponse<UsersModel[]>>(
      (resolve) => {
        const q = query(collection(firestoreInit, 'Users'), where('type', '==', type));
        onSnapshot(q, (snapshot) => {
          let data: UsersModel[] = [];
          snapshot.forEach((docData: any) => {
            data.push(docData.data());
          });
          resolve(JSON.parse(JSON.stringify(data)));
        });
      }
    );
    return response_data;
  }
}
