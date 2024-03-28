// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhjH4zop_jIADoyWKxU3CaQwrGCvL6mJA",
  authDomain: "reactjsfinal-67ffb.firebaseapp.com",
  projectId: "reactjsfinal-67ffb",
  storageBucket: "reactjsfinal-67ffb.appspot.com",
  messagingSenderId: "892585323158",
  appId: "1:892585323158:web:56e14d8462bea32690b0b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)