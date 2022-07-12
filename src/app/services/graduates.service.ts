import { Injectable } from '@angular/core';

// FIREBASE IMPORTS AND CONFIGURATION
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { firebaseConfig } from 'src/environments/environment';
import {
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
} from 'firebase/firestore';
import { BaseResponse } from '../_shared/models/responses/base.response';
import { GraduatesModels } from '../_shared/models/graduates.models';

const app = initializeApp(firebaseConfig);
const firestoreInit = getFirestore(app);

@Injectable({
  providedIn: 'root',
})
export class GraduatesService {
  constructor() {}

  async getGraduatesData(): Promise<BaseResponse<GraduatesModels[]>> {
    const response_data = new Promise<BaseResponse<GraduatesModels[]>>(
      (resolve) => {
        const q = query(collection(firestoreInit, 'Graduates'));
        onSnapshot(q, (snapshot) => {
          let data: GraduatesModels[] = [];
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
