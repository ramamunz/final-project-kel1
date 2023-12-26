import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPlWyHAGyCVbQqpwi2uxlbWQPrt50-h_g",
  authDomain: "cineverse-vocasia.firebaseapp.com",
  projectId: "cineverse-vocasia",
  storageBucket: "cineverse-vocasia.appspot.com",
  messagingSenderId: "441098792030",
  appId: "1:441098792030:web:b848105b875e86321b18cf",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
