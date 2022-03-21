// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMQNuVF7nGI4S2bnOzEctdZ2o6PRKmWA0",
  authDomain: "blog-e90da.firebaseapp.com",
  projectId: "blog-e90da",
  storageBucket: "blog-e90da.appspot.com",
  messagingSenderId: "1096523633700",
  appId: "1:1096523633700:web:079b71e39b39a97ccf34b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();