// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Z4JhLXho9lKaKqNuAP-TO67nmf-BBRQ",
  authDomain: "cibo-store.firebaseapp.com",
  projectId: "cibo-store",
  storageBucket: "cibo-store.appspot.com",
  messagingSenderId: "322461922867",
  appId: "1:322461922867:web:fef722945b2c07e73d1546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;