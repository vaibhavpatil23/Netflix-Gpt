// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCauEZq8OYhyUW6hQgx4A0VT_imjEfLyY0",
  authDomain: "netflixgpt-c805d.firebaseapp.com",
  projectId: "netflixgpt-c805d",
  storageBucket: "netflixgpt-c805d.appspot.com",
  messagingSenderId: "634257969632",
  appId: "1:634257969632:web:4ac921047df1d12343db85",
  measurementId: "G-Y6KSKQDK5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()