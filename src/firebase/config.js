import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyC8YnV5LUVm6varVq77QiZD3dLRSVSSOyw",
  authDomain: "react-cursos-1b40a.firebaseapp.com",
  projectId: "react-cursos-1b40a",
  storageBucket: "react-cursos-1b40a.appspot.com",
  messagingSenderId: "1047456176515",
  appId: "1:1047456176515:web:8e1f3092f3f7bb5672beb6"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore(FirebaseApp)