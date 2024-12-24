// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe63f-GmtnA7pz3jfKk6wkbkl6jvnIX0M",
  authDomain: "auth-cce6c.firebaseapp.com",
  projectId: "auth-cce6c",
  storageBucket: "auth-cce6c.firebasestorage.app",
  messagingSenderId: "571753103446",
  appId: "1:571753103446:web:dda8a59f10e410948f7bf7",
  measurementId: "G-61FM4XZJNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);