import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9cvhrnXo7fhOpnh8Z0jx0nnKr5N0xGCQ",
  authDomain: "elsies-childcare-center.firebaseapp.com",
  projectId: "elsies-childcare-center",
  storageBucket: "elsies-childcare-center.firebasestorage.app",
  messagingSenderId: "998103515055",
  appId: "1:998103515055:web:7abd07744abb76132b795a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
