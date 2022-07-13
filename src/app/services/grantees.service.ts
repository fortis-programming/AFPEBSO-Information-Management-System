import { Injectable } from '@angular/core';
import { BaseResponse } from '../_shared/models/responses/base.response';
import { GranteeModel } from '../_shared/models/grantee.model';

// FIREBASE IMPORTS AND CONFIGURATION
import { firestoreInit } from './firebase.service';
import {
  onSnapshot,
  getFirestore,
  query,
  collection,
  where,
} from 'firebase/firestore';


@Injectable({
  providedIn: 'root',
})
export class GranteesService {
  constructor() {}

  async getGranteesData(): Promise<BaseResponse<GranteeModel[]>> {
    const response_data = new Promise<BaseResponse<GranteeModel[]>>(
      (resolve) => {
        const q = query(collection(firestoreInit, 'Grantees'));
        onSnapshot(q, (snapshot) => {
          let data: GranteeModel[] = [];
          snapshot.forEach((docData: any) => {
            data.push(docData.data());
          });
          resolve(JSON.parse(JSON.stringify(data)));
        });
      }
    );
    return response_data;
  }

  async getGranteeData(id: string): Promise<BaseResponse<GranteeModel[]>> {
    const response_data = new Promise<BaseResponse<GranteeModel[]>>(
      (resolve) => {
        const q = query(
          collection(firestoreInit, 'Grantees'),
          where('id', '==', id)
        );
        onSnapshot(q, (snapshot) => {
          snapshot.forEach((docData: any) => {
            resolve(docData.data());
          });
        });
      }
    );
    return response_data;
  }
}
