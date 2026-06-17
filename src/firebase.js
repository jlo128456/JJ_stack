import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIRy16Cydw555Em_wTezpoexBqfymytgk",
  authDomain: "jj-stack-review.firebaseapp.com",
  projectId: "jj-stack-review",
  storageBucket: "jj-stack-review.firebasestorage.app",
  messagingSenderId: "966068481829",
  appId: "1:966068481829:web:6ef2cb1e262151a53e74cc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);