import { Injectable } from '@angular/core';
import { BaseResponse } from '../_shared/models/responses/base.response';
import { GranteeModel } from '../_shared/models/grantee.model';

// FIREBASE IMPORTS AND CONFIGURATION
import { firestoreInit } from './firebase.service';
import {
  onSnapshot,
  deleteDoc,
  query,
  doc,
  collection,
  where,
  getDoc,
} from 'firebase/firestore';


@Injectable({
  providedIn: 'root',
})
export class GranteesService {
  constructor() { }

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
      async (resolve) => {
        const docRef = doc(firestoreInit, 'Grantees', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          resolve(JSON.parse(JSON.stringify(docSnap.data())));
        }
      }
    );
    return response_data;
  }

  async deleteGranteeData(id: string): Promise<boolean> {
    const respose_data = new Promise<boolean>(
      async (resolve) => {
        await deleteDoc(doc(firestoreInit, 'Grantess', id));
        resolve(true);
      }
    );
    return respose_data;
  }
}