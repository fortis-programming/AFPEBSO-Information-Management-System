import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'src/environments/environment';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  query,
  addDoc,
} from 'firebase/firestore';
import { BaseResponse } from '../_shared/models/responses/base.response';
import { StakeholdersModel } from '../_shared/models/stakeholders.model';

const app = initializeApp(firebaseConfig);
const firestoreInit = getFirestore(app);

@Injectable({
  providedIn: 'root',
})
export class StakeholdersService {
  constructor() { }

  async getStakeholdersData(): Promise<BaseResponse<StakeholdersModel[]>> {
    const response_data = new Promise<BaseResponse<StakeholdersModel[]>>(
      (resolve) => {
        const q = query(collection(firestoreInit, 'Stakeholder'));
        onSnapshot(q, (snapshot) => {
          let data: StakeholdersModel[] = [];
          snapshot.forEach((docData: any) => {
            data.push(docData.data());
          });
          resolve(JSON.parse(JSON.stringify(data)));
        });
      }
    );
    return response_data;
  }

  async getStakeholderData(id: string): Promise<BaseResponse<StakeholdersModel[]>> {
    const response_data = new Promise<BaseResponse<StakeholdersModel[]>>(
      async (resolve) => {
        const docRef = doc(firestoreInit, 'Stakeholder', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          resolve(JSON.parse(JSON.stringify(docSnap.data())))
        }
      }
    );
    return response_data;
  }

  async deleteStakeholderData(id: string): Promise<boolean> {
    const respose_data = new Promise<boolean>(
      async (resolve) => {
        await deleteDoc(doc(firestoreInit, 'Stakeholder', id));
        resolve(true);
      }
    );
    return respose_data;
  }

  async addStakeholder(data: StakeholdersModel): Promise<boolean> {
    console.log(data);
    const response = new Promise<boolean>(
      async (resolve) => {
        await addDoc(collection(firestoreInit, 'Stakeholder'), data).then(() => {
          resolve(true)
        });
      }
    );
    return response
  }
}
