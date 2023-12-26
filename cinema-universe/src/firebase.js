// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPlWyHAGyCVbQqpwi2uxlbWQPrt50-h_g",
  authDomain: "cineverse-vocasia.firebaseapp.com",
  projectId: "cineverse-vocasia",
  storageBucket: "cineverse-vocasia.appspot.com",
  messagingSenderId: "441098792030",
  appId: "1:441098792030:web:b848105b875e86321b18cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);