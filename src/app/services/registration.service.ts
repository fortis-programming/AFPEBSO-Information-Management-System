import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { addDoc, collection, setDoc, doc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { GranteeModel } from '../_shared/models/grantee.model';
import { firestoreInit } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  async addApplicants(data: GranteeModel, file: any, signatureFile: any): Promise<boolean> {
    data.profileUrl = 'profiles/' + JSON.parse(JSON.stringify(sessionStorage.getItem('_userid')));
    data.signatureOfApplicant = 'signatures/' + JSON.parse(JSON.stringify(sessionStorage.getItem('_userid')));

    this.uploadProfile(file);
    this.uploadSignature(signatureFile);
    const response = new Promise<boolean>(
      async (resolve) => {
        await setDoc(doc(firestoreInit, 'Grantees', JSON.parse(JSON.stringify(sessionStorage.getItem('_userid')))), data)
          .then(() => {
            resolve(true);
          }).catch((err) => {
            resolve(false);
          })
      }
    );
    return response
  }

  async uploadProfile(file: any): Promise<boolean> {
    const storage = getStorage();
    const storageRef = ref(storage, 'profiles/' + JSON.parse(JSON.stringify(sessionStorage.getItem('_userid'))) + '.jpg');
    console.log(storageRef);

    // 'file' comes from the Blob or File API
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );

    return true;
  }

  async uploadSignature(file: any): Promise<boolean> {
    const storage = getStorage();
    const storageRef = ref(storage, 'signatures/' + JSON.parse(JSON.stringify(sessionStorage.getItem('_userid'))) + '.jpg');
    console.log(storageRef);
    
    // 'file' comes from the Blob or File API
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );

    return true;
  }

  async getImage(profileUrl: string): Promise<string> {
    const response = new Promise<string>(
      (resolve) => {
        const storage = getStorage();
        const storageRef = ref(storage, profileUrl + '.jpg');
        console.log(storageRef);
        getDownloadURL(storageRef)
          .then((url) => {
            // Insert url into an <img> tag to "download"
            resolve(url);
          })
          .catch((error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case 'storage/object-not-found':
                // File doesn't exist
                break;
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
              case 'storage/canceled':
                // User canceled the upload
                break;

              // ...

              case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                break;
            }
          });
      }
    );
    return response;
  }

  async getSignatureImage(signatureOfApplicant: string): Promise<string> {
    const response = new Promise<string>(
      (resolve) => {
        const storage = getStorage();
        const storageRef = ref(storage, signatureOfApplicant + '.jpg');
        console.log(storageRef);
        getDownloadURL(storageRef)
          .then((url) => {
            // Insert url into an <img> tag to "download"
            resolve(url);
          })
          .catch((error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case 'storage/object-not-found':
                // File doesn't exist
                break;
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
              case 'storage/canceled':
                // User canceled the upload
                break;

              // ...

              case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                break;
            }
          });
      }
    );
    return response;
  }
}
