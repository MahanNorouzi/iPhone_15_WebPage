import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "apple-ea694.firebaseapp.com",
  projectId: "apple-ea694",
  storageBucket: "apple-ea694.appspot.com",
  messagingSenderId: "593512790933",
  appId: "1:593512790933:web:f8d179c80a7f5b3c04949c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
