import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../_shared/models/responses/base.response';
import { GranteeModel } from '../_shared/models/grantee.model';

// FIREBASE IMPORTS AND CONFIGURATION
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { firebaseConfig } from 'src/environments/environment';
import {
  doc,
  onSnapshot,
  getFirestore,
  query,
  collection,
} from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const firestoreInit = getFirestore(app);
const analytics = getAnalytics(app);

@Injectable({
  providedIn: 'root',
})
export class GranteesService {
  constructor(private http: HttpClient) {}

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
}
