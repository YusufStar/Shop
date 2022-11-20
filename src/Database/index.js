import { getDatabase } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import "firebase/firestore"
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQ1ZoehwZIBqD0JXXvWkiir9q3qRzn0tU",
    authDomain: "shop-6e4c0.firebaseapp.com",
    projectId: "shop-6e4c0",
    storageBucket: "shop-6e4c0.appspot.com",
    messagingSenderId: "1025228751977",
    appId: "1:1025228751977:web:46f6e80a7629ef17ae0ef8",
    measurementId: "G-RLSBZEM48D"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const auth = getAuth(app);
const firestore = getFirestore(app)

export { database, auth, app, firestore}