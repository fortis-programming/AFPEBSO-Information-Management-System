import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from 'src/environments/environment';
import Swal from 'sweetalert2';
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
          resolve(JSON.parse(JSON.stringify(user.uid)));
          Swal.fire({
            icon: 'success',
            title: 'Login Success',
            text: 'You have successfully login',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            location.reload();
          })
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          resolve(errorCode);
          Swal.fire({
            icon: 'warning',
            title: 'Login Failed',
            text: 'Wrong username or password!',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            location.reload();
          })
        });
    });
    return response;
  }
}
