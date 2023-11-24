// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUwEdjEUXSOeNOv6gZqYzuH79PeWtZ6Kc",
  authDomain: "diagnostic-client-side.firebaseapp.com",
  projectId: "diagnostic-client-side",
  storageBucket: "diagnostic-client-side.appspot.com",
  messagingSenderId: "305327522341",
  appId: "1:305327522341:web:cc86d597ff755742ec75cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;