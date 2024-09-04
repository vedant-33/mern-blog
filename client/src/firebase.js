// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-29e70.firebaseapp.com",
  projectId: "mern-blog-29e70",
  storageBucket: "mern-blog-29e70.appspot.com",
  messagingSenderId: "695404104091",
  appId: "1:695404104091:web:75df59ef99ad742099f93e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);