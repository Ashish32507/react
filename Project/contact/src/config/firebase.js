// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBSXK8SGnk_0WBY1AUUVWebl0FzVrPHVU",
  authDomain: "contact-a4813.firebaseapp.com",
  projectId: "contact-a4813",
  storageBucket: "contact-a4813.appspot.com",
  messagingSenderId: "1096683947350",
  appId: "1:1096683947350:web:c236980b64d8e78b5e02f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
