import { Injectable } from '@angular/core';
import { doc, getDoc, where, onSnapshot, collection, query } from 'firebase/firestore';
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

  async getGranteeData(id: string): Promise<BaseResponse<UsersModel[]>> {

    const response_data = new Promise<BaseResponse<UsersModel[]>>(
      async (resolve) => {
        const docRef = doc(firestoreInit, 'Users',);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log('i was called')
          resolve(JSON.parse(JSON.stringify(docSnap.data())));
        }
      }
    );
    return response_data;
  }

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

  async updatePassword(oldPassword: string, newPassword: string): Promise<Boolean> {
    const auth = getAuth();
    const user = auth.currentUser;

    const result = new Promise<Boolean>(
      (resolve) => {
        console.log(JSON.parse(JSON.stringify(user?.email)));
        signInWithEmailAndPassword(auth, JSON.parse(JSON.stringify(user?.email)), oldPassword).then(
          () => {
            updatePassword(user as User, newPassword).then(
              () => {
                resolve(true)
              }
            );
          }
        );
      }
    );
    return result;
  }
}
