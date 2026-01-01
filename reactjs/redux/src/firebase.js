// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnmWLFHx7DEj068wPvTzdEGzRXgb6wWsU",
  authDomain: "developer-86297.firebaseapp.com",
  projectId: "developer-86297",
  storageBucket: "developer-86297.firebasestorage.app",
  messagingSenderId: "958521451398",
  appId: "1:958521451398:web:edcf2f5fce94cc59650207",
  measurementId: "G-1DDSQBDLPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}