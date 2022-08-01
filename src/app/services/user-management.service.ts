import { Injectable } from '@angular/core';
import { BaseResponse } from '../_shared/models/responses/base.response';
import { onSnapshot, query, where, collection, updateDoc, doc } from 'firebase/firestore';
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

  async getUsersDocId(id: string): Promise<BaseResponse<string>> {
    const response_docId = new Promise<BaseResponse<string>>(
      (resolve) => {
        const q = query(collection(firestoreInit, 'Users'), where('employeeNo', '==', id));
        onSnapshot(q, (snapshot) => {
          snapshot.forEach((docData: any) => {
            resolve(docData.id)
          });
        });
      }
    );
    return response_docId;
  }

  async updateProfile(id: string, data: UsersModel): Promise<Boolean> {

    const response = new Promise<Boolean>(
      async (resolve) => {
        const docId = await this.getUsersDocId(id);
        await updateDoc(doc(firestoreInit, 'Users', JSON.parse(JSON.stringify(docId))), JSON.parse(JSON.stringify(data))).then(() => {
          resolve(true)
        });
      }
    );
    return response;
  }
}
