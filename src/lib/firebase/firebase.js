// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNg5s1iqZxHSweBc5EEkXeZUZHAsmzBsA",
  authDomain: "social-tree-cd49e.firebaseapp.com",
  projectId: "social-tree-cd49e",
  storageBucket: "social-tree-cd49e.appspot.com",
  messagingSenderId: "816106286441",
  appId: "1:816106286441:web:332d33f645c916309421f8",
  measurementId: "G-B65867PXGW",
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}

export const db = getFirestore(firebaseApp);
