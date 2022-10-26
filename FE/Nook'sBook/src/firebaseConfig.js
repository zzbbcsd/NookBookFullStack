import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDP3TOzgKAl2Bfda7ZQNl8Z4a9bCjMxvm4",
  authDomain: "bookorder-b916e.firebaseapp.com",
  projectId: "bookorder-b916e",
  storageBucket: "bookorder-b916e.appspot.com",
  messagingSenderId: "77928623532",
  appId: "1:77928623532:web:2a3675095a834d03021e09",
  measurementId: "G-1ELCZRKQRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
