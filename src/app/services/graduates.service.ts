import { Injectable } from '@angular/core';

// FIREBASE IMPORTS AND CONFIGURATION
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
  addDoc
} from 'firebase/firestore';
import { BaseResponse } from '../_shared/models/responses/base.response';
import { GraduatesModels } from '../_shared/models/graduates.models';

const app = initializeApp(firebaseConfig);
const firestoreInit = getFirestore(app);

@Injectable({
  providedIn: 'root',
})
export class GraduatesService {
  constructor() { }

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

  async getGraduateData(id: string): Promise<BaseResponse<GraduatesModels[]>> {
    const response_data = new Promise<BaseResponse<GraduatesModels[]>>(
      async (resolve) => {
        const docRef = doc(firestoreInit, 'Graduates', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          resolve(JSON.parse(JSON.stringify(docSnap.data())))
        }
      }
    );
    return response_data;
  }

  async deleteGraduateData(id: string): Promise<boolean> {
    const respose_data = new Promise<boolean>(
      async (resolve) => {
        await deleteDoc(doc(firestoreInit, 'Graduates', id));
        resolve(true);
      }
    );
    return respose_data;
  }

  async addGraduate(data: GraduatesModels): Promise<boolean> {
    const response = new Promise<boolean>(
      async (resolve) => {
        await addDoc(collection(firestoreInit, 'Graduates'), data).then(() => {
          resolve(true)
        });
      }
    );
    return response
  }
}
