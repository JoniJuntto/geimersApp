import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword  } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDUEt20YobHR_-wlglh2lyeoSwYf2je6e4",
  authDomain: "devgeimers.firebaseapp.com",
  projectId: "devgeimers",
  storageBucket: "devgeimers.appspot.com",
  messagingSenderId: "778283626275",
  appId: "1:778283626275:web:b223ffcf087ae37214a696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {auth, db}

export function signup(email, password){
  createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password){
  try {
    signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error)
  }

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