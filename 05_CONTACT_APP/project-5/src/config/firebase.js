// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByjVD8wO7SlJw-wPpAKYVpJKUaB5NeMbQ",
  authDomain: "vite-contact-7215f.firebaseapp.com",
  projectId: "vite-contact-7215f",
  storageBucket: "vite-contact-7215f.appspot.com",
  messagingSenderId: "1055469627685",
  appId: "1:1055469627685:web:e98de7669e12fe031d92cc",
  measurementId: "G-X1E202MHVG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
