// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWcNmXTElNIuGgHmOw2LUO-DHy9Nz0A9o",
  authDomain: "chat-app-react-48001.firebaseapp.com",
  projectId: "chat-app-react-48001",
  storageBucket: "chat-app-react-48001.appspot.com",
  messagingSenderId: "1015009487556",
  appId: "1:1015009487556:web:1e8d9f3012d1a1ab083791",
  measurementId: "G-58B8ZQKL50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
