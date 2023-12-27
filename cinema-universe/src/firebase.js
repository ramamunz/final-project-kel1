// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-A5LgPfM1K00kvfN0HLlLaS9DBR0So-0",
  authDomain: "cinema-universe1.firebaseapp.com",
  projectId: "cinema-universe1",
  storageBucket: "cinema-universe1.appspot.com",
  messagingSenderId: "104645781481",
  appId: "1:104645781481:web:dd060f9fe167bd33c5cd78",
  measurementId: "G-YD60ELPXZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCPlWyHAGyCVbQqpwi2uxlbWQPrt50-h_g",
//   authDomain: "cineverse-vocasia.firebaseapp.com",
//   projectId: "cineverse-vocasia",
//   storageBucket: "cineverse-vocasia.appspot.com",
//   messagingSenderId: "441098792030",
//   appId: "1:441098792030:web:b848105b875e86321b18cf",
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
