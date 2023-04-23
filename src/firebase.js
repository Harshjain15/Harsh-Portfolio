import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa4jAOtFl14zuzTYOWwZPDND5NWTc1sp8",
  authDomain: "harsh-portfolio-52d09.firebaseapp.com",
  projectId: "harsh-portfolio-52d09",
  storageBucket: "harsh-portfolio-52d09.appspot.com",
  messagingSenderId: "585422074130",
  appId: "1:585422074130:web:52259661462007f77c83cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
