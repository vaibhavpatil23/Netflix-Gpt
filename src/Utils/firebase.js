// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwvr8XhHBsh21QMR_sHfml-dnB80leFhA",
  authDomain: "netflixgpt-598b0.firebaseapp.com",
  projectId: "netflixgpt-598b0",
  storageBucket: "netflixgpt-598b0.appspot.com",
  messagingSenderId: "649345555690",
  appId: "1:649345555690:web:792a380207797311254b93",
  measurementId: "G-8SQ21LTX5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);