import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { addDoc, collection } from 'firebase/firestore';
import { GranteeModel } from '../_shared/models/grantee.model';
import { firestoreInit } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  async addApplicants(data: GranteeModel): Promise<boolean> {
    const response = new Promise<boolean>(
      async (resolve) => {
        await addDoc(collection(firestoreInit, 'Grantees'), data).then(() => {
          resolve(true)
        });
      }
    );
    return response
  }
}
