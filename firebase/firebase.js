import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDiuooIOJw9M5kHsqQ-tVl3-XKQRXtwEjg",
    authDomain: "inventory-management-fa4e4.firebaseapp.com",
    projectId: "inventory-management-fa4e4",
    storageBucket: "inventory-management-fa4e4.appspot.com",
    messagingSenderId: "104739789956",
    appId: "1:104739789956:web:cfe91e7f3eb993da5536d1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);