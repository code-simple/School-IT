// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcZNIMjbUGkpQvRROpmMVXIwz1t6XgU7k",
  authDomain: "fir-login-d4ae0.firebaseapp.com",
  projectId: "fir-login-d4ae0",
  storageBucket: "fir-login-d4ae0.appspot.com",
  messagingSenderId: "474413094997",
  appId: "1:474413094997:web:5fe15b40bde1345adb1cdc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
