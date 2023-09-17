// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANJ5Lql03iNjKUNITyWRePOa7x1drQCE8",
  authDomain: "homemaid-easy.firebaseapp.com",
  projectId: "homemaid-easy",
  storageBucket: "homemaid-easy.appspot.com",
  messagingSenderId: "34836442845",
  appId: "1:34836442845:web:eb69692db59158080db534",
  measurementId: "G-QZ33LFFSTJ",
};

// Initialize Firebase and export App
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);