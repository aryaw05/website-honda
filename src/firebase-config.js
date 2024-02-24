import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA2HBfEv89PFGRCd1Ag2xQoz36y6WPK5D4",
  authDomain: "aryaaw-c2305.firebaseapp.com",
  databaseURL:
    "https://aryaaw-c2305-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aryaaw-c2305",
  storageBucket: "aryaaw-c2305.appspot.com",
  messagingSenderId: "603007761962",
  appId: "1:603007761962:web:a2763fba1a31f8e3ff4d53",
  measurementId: "G-FN69GT1NJ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const storage = getStorage(app);
