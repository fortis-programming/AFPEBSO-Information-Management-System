import { Injectable } from '@angular/core';
import { BaseResponse } from '../_shared/models/responses/base.response';
import { GranteeModel } from '../_shared/models/grantee.model';

// FIREBASE IMPORTS AND CONFIGURATION
import { firestoreInit, storage } from './firebase.service';
import {
  onSnapshot,
  deleteDoc,
  query,
  doc,
  collection,
  getDoc,
  updateDoc,
  where,
} from 'firebase/firestore';

import { ref, getDownloadURL } from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class GranteesService {
  constructor() { }

  async getGranteesData(status: string): Promise<BaseResponse<GranteeModel[]>> {
    const response_data = new Promise<BaseResponse<GranteeModel[]>>(
      (resolve) => {
        const q = query(collection(firestoreInit, 'Grantees'), where('status', '==', status));
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

  async getProfile(location: string): Promise<string> {
    const response = new Promise<string>(
      (resolve) => {
        getDownloadURL(ref(storage, location))
          .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'

            // This can be downloaded directly:
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
              const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();

            // Or inserted into an <img> element
            // const img = document.getElementById('myimg');
            // img.setAttribute('src', url);g
            resolve(url);
          })
          .catch((error) => {
            // Handle any errors
            resolve('Document does not exist!')
          });
      }
    );
    return response
  }

  async updateProfile(id: string, data: GranteeModel): Promise<Boolean> {
    const response = new Promise<Boolean>(
      async (resolve) => {
        await updateDoc(doc(firestoreInit, 'Grantees', id), JSON.parse(JSON.stringify(data))).then(() => {
          resolve(true)
        });
      }
    );
    return response;
  }

  async getApplicantData(identifier: string): Promise<BaseResponse<GranteeModel[]>> {
    const response_data = new Promise<BaseResponse<GranteeModel[]>>(
      (resolve) => {
        const q = query(collection(firestoreInit, 'Grantees'), where('id', '==', identifier));
        onSnapshot(q, (snapshot) => {
          snapshot.forEach((docData: any) => {
            resolve(JSON.parse(JSON.stringify(docData.data())));
          });
        });
      }
    );
    return response_data;
  }


  // async updateStatus(): Promise<Boolean> {
  //   const response = new Promise<Boolean>(

  //   );
  //   return true;
  // }
}