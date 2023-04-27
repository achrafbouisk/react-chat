import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-IDEnMA_BfFgYqBm0q0_rXo80aDxJIjk",
  authDomain: "chat-react-6685a.firebaseapp.com",
  projectId: "chat-react-6685a",
  storageBucket: "chat-react-6685a.appspot.com",
  messagingSenderId: "1032938036776",
  appId: "1:1032938036776:web:b4db268ee719a8c91d1f1d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
