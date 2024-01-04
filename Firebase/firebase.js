import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBktbL-AUrEltXj1RnTaNbx5spsiAxLucg",
    authDomain: "food-fcc72.firebaseapp.com",
    projectId: "food-fcc72",
    storageBucket: "food-fcc72.appspot.com",
    messagingSenderId: "1038971670005",
    appId: "1:1038971670005:web:993fae0badebbf3a4c24bc"
  };


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});



export { db, auth };