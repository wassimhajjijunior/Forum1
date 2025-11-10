// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdWPUXm79xgG8wcB97Z8oKuwiq635e_dw",
  authDomain: "forum-8f4fc.firebaseapp.com",
  projectId: "forum-8f4fc",
  storageBucket: "forum-8f4fc.appspot.com",
  messagingSenderId: "895192239948",
  appId: "1:895192239948:web:c206fc81e44e30a28c09e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);       // Authentication
export const db = getFirestore(app);    // Firestore database
export {  addDoc, collection };         // Export Firestore functions
