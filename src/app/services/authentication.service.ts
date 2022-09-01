import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { firebaseConfig } from 'src/environments/environment';
import { LoginRequest } from '../_shared/models/requests/login.requests';
import { SigInRequest } from '../_shared/models/requests/signup.requests';
import { firestoreInit } from './firebase.service';

const app = initializeApp(firebaseConfig);
const auth = getAuth();

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() { }

  isAuthenticated() {
    return !!sessionStorage.getItem('_token');
  }

  signInUser(userCredentials: LoginRequest): Promise<string> {
    const response = new Promise<string>((resolve) => {
      signInWithEmailAndPassword(auth, userCredentials.username, userCredentials.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          sessionStorage.setItem('_token', user.refreshToken);
          sessionStorage.setItem('_userid', user.uid);
          resolve(JSON.parse(JSON.stringify(user.uid)));
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          resolve(errorCode);
        });
    });
    return response;
  }

  signUpUser(userCredentials: SigInRequest): Promise<string> {
    const response = new Promise<string>((resolve) => {
      createUserWithEmailAndPassword(auth, userCredentials.username, userCredentials.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          const response = new Promise<boolean>(
            async (resolve) => {
              await setDoc(doc(firestoreInit, 'Grantees', JSON.parse(JSON.stringify(sessionStorage.getItem('_userid')))),
                {
                  type: 'applicant'
                })
                .then(() => {
                  resolve(true);
                }).catch((err) => {
                  resolve(false);
                })
            }
          );
          return response
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    });
    return response;
  }

  logout(): Promise<boolean> {
    const response = new Promise<boolean>((resolve) => {
      signOut(auth)
        .then(() => resolve(true));
    });
    return response;
  }
}
