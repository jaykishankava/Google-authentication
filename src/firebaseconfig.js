
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBqbb4Jlcb5lPGGOMvi-OUYmKOXgt48WmY",
  authDomain: "fir-firestore-68e71.firebaseapp.com",
  projectId: "fir-firestore-68e71",
  storageBucket: "fir-firestore-68e71.appspot.com",
  messagingSenderId: "890436074595",
  appId: "1:890436074595:web:630f1e48e3395cbc024c56",
  measurementId: "G-M4B33Q2FSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider(); 

export default app;
