// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApHgvPxSFl9P0kk4DBUpTPdFNtK4A2A7s",
  authDomain: "learning-projects-3bd1a.firebaseapp.com",
  projectId: "learning-projects-3bd1a",
  storageBucket: "learning-projects-3bd1a.appspot.com",
  messagingSenderId: "48424665193",
  appId: "1:48424665193:web:01f16a02016a62b7ef22f8",
  measurementId: "G-JEWLWJCKHD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

// Authenticaion Functions
