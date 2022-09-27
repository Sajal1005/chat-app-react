// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg9UTiFVPW2W0x53FQxuUJeNCJSyHntQs",
  authDomain: "chat-app-sajal.firebaseapp.com",
  projectId: "chat-app-sajal",
  storageBucket: "chat-app-sajal.appspot.com",
  messagingSenderId: "417789413756",
  appId: "1:417789413756:web:2afb847cc0b629d901bcf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)