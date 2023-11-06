import {getApp, getApps, initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyAlRUEAWXiSUyxppnkwI0IanDy6llfJZPY",
    authDomain: "lingoloom-16c75.firebaseapp.com",
    projectId: "lingoloom-16c75",
    storageBucket: "lingoloom-16c75.appspot.com",
    messagingSenderId: "272452494694",
    appId: "1:272452494694:web:8f3ac7beed77460869d4a7",
    measurementId: "G-S43W7W0C53"
  
  };
  
  
  // Initialize Firebase
  
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const functions = getFunctions(app);

export {db, auth, functions};