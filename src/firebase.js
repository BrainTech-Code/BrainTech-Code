// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDrlK2TJDuwZIEKMejESkTZ8JMFRT05XeQ",
  authDomain: "braintech-67357.firebaseapp.com",
  projectId: "braintech-67357",
  storageBucket: "braintech-67357.appspot.com",
  messagingSenderId: "194805824245",
  appId: "1:194805824245:web:2161cf7a18cb96075ba3bc",
  measurementId: "G-7EMZDSYGSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);