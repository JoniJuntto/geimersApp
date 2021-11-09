import { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword  } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZmBhh_T5G00xIhViVXWYAkU7_MSM73B0",
  authDomain: "geimersdata.firebaseapp.com",
  projectId: "geimersdata",
  storageBucket: "geimersdata.appspot.com",
  messagingSenderId: "585275162108",
  appId: "1:585275162108:web:fb9c875edd035377d34679",
  measurementId: "G-GEN31631XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
const auth = getAuth();

export function signup(email, password){
  createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password){
  signInWithEmailAndPassword(auth, email, password);
}

export function logout(){
  return signOut(auth)
}



//Own custom hook
export function useAuth() {
  const [currentUser, setCurrenUser] = useState();
  useEffect(()=> {
    const unsub = onAuthStateChanged(auth, user => setCurrenUser(user));
    console.log(unsub);
    return unsub
  }, [])

  return currentUser;
}