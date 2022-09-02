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
  setDoc,
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
          resolve(docSnap.data() as BaseResponse<GranteeModel[]>);
        }
      }
    );
    return response_data;
  }

  async loadGranteeData(id: string): Promise<BaseResponse<any[]>> {
    let granteeObject: any = [];
    const response_data = new Promise<BaseResponse<GranteeModel[]>>(
      async (resolve) => {
        const docRef = doc(firestoreInit, 'Grantees', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          granteeObject.push(docSnap.data());
          granteeObject.push(await this.getProfile(docSnap.data()['profileUrl'] + '.jpg'));
          granteeObject.push(await this.getSignature(docSnap.data()['signatureOfApplicant'] + '.jpg'));
          resolve(granteeObject);
        }
      }
    );
    return response_data;
  }

  async deleteGranteeData(id: string): Promise<boolean> {
    const respose_data = new Promise<boolean>(
      async (resolve) => {
        this.getDocId(id).then(async (response) => {
          await deleteDoc(doc(firestoreInit, 'Grantees', response));
          resolve(true);
        })

      }
    );
    return respose_data;
  }

  async getProfile(location: string): Promise<string> {
    const response = new Promise<string>(
      (resolve) => {
        getDownloadURL(ref(storage, location))
          .then((url) => {
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
              const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();
            resolve(url);
          })
          .catch((error) => {
            resolve('Document does not exist!' + error)
          });
      }
    );
    return response
  }

  async getSignature(location: string): Promise<string> {
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
            resolve('Document does not exist!' + error)
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

  async updateStatus(id: string, data: GranteeModel): Promise<Boolean> {
    const response = new Promise<Boolean>(
      async (resolve) => {
        this.getDocId(id).then(async (response) => {
          await updateDoc(doc(firestoreInit, 'Grantees', response), JSON.parse(JSON.stringify(data))).then(() => {
            resolve(true)
          });
        })
      }
    );
    return response;
  }

  async getDocId(id: string): Promise<string> {
    const response_data = new Promise<string>(
      async (resolve) => {
        const q = query(collection(firestoreInit, 'Grantees'), where('id', '==', id));
        onSnapshot(q, (snapshot) => {
          snapshot.forEach((docData: any) => {
            resolve(docData.id);
          });
        });
      }
    );
    return response_data;
  }

  async checkIfUserIsPending(docId: string): Promise<boolean> {
    const docSnap = await getDoc(doc(firestoreInit, 'Grantees', docId));
    return docSnap.exists();
  }

  async checkIfApplicationIsWasRejected(docId: string): Promise<boolean> {
    const docSnap = await getDoc(doc(firestoreInit, 'Remarks', docId))
    return docSnap.exists();
  }

  async submitRemarks(applicantId: string, remarks: string): Promise<boolean> {
    const docId = await this.getDocId(applicantId);
    const response = new Promise<boolean>(
      async (resolve) => {
        await setDoc(doc(firestoreInit, 'Remarks', JSON.parse(JSON.stringify(docId))), { remarks: remarks })
          .then(() => {
            resolve(true);
          }).catch((err) => {
            resolve(false);
          })
      })
    return response;
  }

  async getRemarks(docId: string): Promise<string> {
    const docSnap = await getDoc(doc(firestoreInit, 'Remarks', docId))
    return (docSnap.exists()) ? docSnap.data()['remarks'] : 'false';
  }
}