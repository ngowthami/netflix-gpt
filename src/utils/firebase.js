// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJACObtYNNwJyiDB-cFUDSghbiSokUdTE",
  authDomain: "netflixgpt-fd5f2.firebaseapp.com",
  projectId: "netflixgpt-fd5f2",
  storageBucket: "netflixgpt-fd5f2.appspot.com",
  messagingSenderId: "868080106544",
  appId: "1:868080106544:web:fdd8d1cae6b8a5bb0601f5",
  measurementId: "G-2PKRW4K6T5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();