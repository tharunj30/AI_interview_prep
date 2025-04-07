import { initializeApp, getApp, getApps } from "firebase/app";
 import { getAuth } from 'firebase/auth';
 import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1UZCABw7Sc6w79iKqw_goAH7bHzxfyCM",
  authDomain: "prepwise-e1faf.firebaseapp.com",
  projectId: "prepwise-e1faf",
  storageBucket: "prepwise-e1faf.firebasestorage.app",
  messagingSenderId: "541498514656",
  appId: "1:541498514656:web:402f23c54e8a96fc4b0485",
  measurementId: "G-6SF0T1SCRC"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
 
 export const auth = getAuth(app);
 export const db = getFirestore(app)