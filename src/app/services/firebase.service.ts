import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { firebaseConfig } from 'src/environments/environment';

export const app = initializeApp(firebaseConfig);
export const firestoreInit = getFirestore(app);
export const storage = getStorage();

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }
}
