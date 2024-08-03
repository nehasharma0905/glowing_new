// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkiIHxOW_zvURkWu7IUD725-UxD4Wf1A0",
  authDomain: "glowing-react-2024.firebaseapp.com",
  projectId: "glowing-react-2024",
  storageBucket: "glowing-react-2024.appspot.com",
  messagingSenderId: "646957267929",
  appId: "1:646957267929:web:7bd852f5b5e1a82faef7c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Authenticaion Functions
