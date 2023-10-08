// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkg3T5E04V9vLC7K6pqjtl3tCsJGCzGok",
  authDomain: "festive-fusion-auth.firebaseapp.com",
  projectId: "festive-fusion-auth",
  storageBucket: "festive-fusion-auth.appspot.com",
  messagingSenderId: "570435473013",
  appId: "1:570435473013:web:8a507515a78b34206ab23c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;