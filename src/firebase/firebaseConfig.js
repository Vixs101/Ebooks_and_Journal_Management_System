// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "edulib-connect.firebaseapp.com",
  projectId: "edulib-connect",
  storageBucket: "edulib-connect.appspot.com",
  messagingSenderId: "613661268974",
  appId: "1:613661268974:web:9a4382bf6eadc03a4fccff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};