import { Injectable } from '@angular/core';
import { doc, getDoc, where, onSnapshot, collection, query, updateDoc } from 'firebase/firestore';
import { firestoreInit } from './firebase.service';
import { getAuth, signInWithEmailAndPassword, updatePassword, User } from 'firebase/auth';

import { BaseResponse } from '../_shared/models/responses/base.response';
import { UsersModel } from '../_shared/models/users.model';
import { LoginRequest } from '../_shared/models/requests/login.requests';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  async getUsersData(id: string): Promise<BaseResponse<UsersModel[]>> {
    const response_data = new Promise<BaseResponse<UsersModel[]>>(
      (resolve) => {
        const q = query(collection(firestoreInit, 'Users'), where('userId', '==', id));
        onSnapshot(q, (snapshot) => {
          snapshot.forEach((docData: any) => {
            resolve(docData.data())
          });
        });
      }
    );
    return response_data;
  }

  async updatePassword(oldPassword: string, newPassword: string): Promise<string> {
    const auth = getAuth();
    const user = auth.currentUser;

    const result = new Promise<string>(
      (resolve, rejected) => {
        signInWithEmailAndPassword(auth, JSON.parse(JSON.stringify(user?.email)), oldPassword)
          .then(() => {
            updatePassword(user as User, newPassword)
              .then(() => {
                resolve('true')
              })
              .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                rejected(errorMessage)
              })

          })
          .catch((err) => {
            const errorCode = err.code;
            const errorMessage = err.message;
            rejected(errorMessage)
          })
      }
    );
    return result;
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
