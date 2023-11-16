// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {apiKey: "AIzaSyBSUvy6SxsihF0rA8AfWQd4EST_Oao0uwc",
  authDomain: "linkedin-clone-648b6.firebaseapp.com",
  projectId: "linkedin-clone-648b6",
  storageBucket: "linkedin-clone-648b6.appspot.com",
  messagingSenderId: "947230655995",
  appId: "1:947230655995:web:61f947c1545607a55af75e",
  measurementId: "G-E4C89EQBF0"};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };