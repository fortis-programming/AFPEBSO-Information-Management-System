import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from 'src/environments/environment';
import { LoginRequest } from '../_shared/models/requests/login.requests';

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
}
