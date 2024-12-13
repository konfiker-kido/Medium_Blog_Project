// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBTVGjxal_w1OV0gqHCdgojmalVl9NGsnQ",
    authDomain: "mediumproject-d2ac1.firebaseapp.com",
    projectId: "mediumproject-d2ac1",
    storageBucket: "mediumproject-d2ac1.firebasestorage.app",
    messagingSenderId: "688693673709",
    appId: "1:688693673709:web:ebcf9eb6d7a1c4ded656e4",
    measurementId: "G-53ZZJKSY9N"  
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
