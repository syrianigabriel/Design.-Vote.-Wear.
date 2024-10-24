// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD8VqjrxgMNtFEaeh_aUDtsuCpZHAr5OE",
  authDomain: "myfashionvote.firebaseapp.com",
  projectId: "myfashionvote",
  storageBucket: "myfashionvote.appspot.com",
  messagingSenderId: "713746393322",
  appId: "1:713746393322:web:a32b1982e0dc6890a0cf93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };