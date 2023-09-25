// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIqdGFEGwnp5U80j9yT25qvMiZe2diynk",
  authDomain: "news-weather-app-fcd7e.firebaseapp.com",
  projectId: "news-weather-app-fcd7e",
  storageBucket: "news-weather-app-fcd7e.appspot.com",
  messagingSenderId: "319186764023",
  appId: "1:319186764023:web:924418ba261bec04e713f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
