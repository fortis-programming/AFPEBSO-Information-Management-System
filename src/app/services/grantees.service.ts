import { Injectable } from '@angular/core';
import { BaseResponse } from '../_shared/models/responses/base.response';
import { GranteeModel } from '../_shared/models/grantee.model';

// FIREBASE IMPORTS AND CONFIGURATION
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { firebaseConfig } from 'src/environments/environment';
import {
  onSnapshot,
  getFirestore,
  query,
  collection,
  where,
} from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const firestoreInit = getFirestore(app);
const analytics = getAnalytics(app);

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
          snapshot.forEach((docData: any) => {
            resolve(docData.data());
          });
        });
      }
    );
    return response_data;
  }

  async getGranteeData(id: string): Promise<BaseResponse<GranteeModel[]>> {
    const response_data = new Promise<BaseResponse<GranteeModel[]>>(
      (resolve) => {
        const q = query(collection(firestoreInit, 'Grantees'), where("id", "==", id));
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
