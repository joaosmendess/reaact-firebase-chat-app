/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import  {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD92fYAuawBw8EV3Fec4yfLsCLPSQExM0w",
  authDomain: "chat-app-72343.firebaseapp.com",
  projectId: "chat-app-72343",
  storageBucket: "chat-app-72343.appspot.com",
  messagingSenderId: "211905584564",
  appId: "1:211905584564:web:5be2dbc2454f411bbe66e1"
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app )