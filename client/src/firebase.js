// Import the functions you need from the SDKs you need
// import env from "react-dotenv"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const VITE_FIREBASE_API_KEY= "AIzaSyCF0IA80h1U-XPfnk302V6ZLXKCFh_XgEo"
const firebaseConfig = {
  apiKey:VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-c6df0.firebaseapp.com",
  projectId: "blog-app-c6df0",
  storageBucket: "blog-app-c6df0.appspot.com",
  messagingSenderId: "205213746329",
  appId: "1:205213746329:web:f6a18e51d01a3376916408"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);