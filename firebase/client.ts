
import {getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpWDHGLdCM6c9BKDwgW1KsGiCh0ulFrH0",
  authDomain: "smart-prep-42d15.firebaseapp.com",
  projectId: "smart-prep-42d15",
  storageBucket: "smart-prep-42d15.firebasestorage.app",
  messagingSenderId: "655102622491",
  appId: "1:655102622491:web:da11f43731adc247b1b1be",
  measurementId: "G-CVYLP8GYNX"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);