// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {database} from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVmR2P1N3wqxdWEBxUuSK0nHCVWna5znc",
  authDomain: "dictionary-fe227.firebaseapp.com",
  projectId: "dictionary-fe227",
  storageBucket: "dictionary-fe227.appspot.com",
  messagingSenderId: "940667220125",
  appId: "1:940667220125:web:5628fbf2ea016cc5ee6474",
  measurementId: "G-89DZNW1JH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const wordRef = app.database().ref("word");
export const meaningRef = app.database().ref("meaning");