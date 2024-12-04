import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCT-BOt0RR4tN7kVgwGsCVpUvkxfnJCin4",
  authDomain: "e-store-cbeac.firebaseapp.com",
  projectId: "e-store-cbeac",
  storageBucket: "e-store-cbeac.firebasestorage.app",
  messagingSenderId: "980500307602",
  appId: "1:980500307602:web:0c8cf120639e153ddb904b",
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// auth

export const auth = getAuth();

export const signInWithGooglePopup = async () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

// create a user document from auth token
export const createUserDocumentFromAuth = async (userAuth) => {
  // document reference accesses database, users collection, users unique id
  const docRef = doc(db, "users", userAuth.uid);

  //   snapshot of user, get the document reference data
  const userSnapshot = await getDoc(docRef);

  //   if user doesn't exist, create document reference, set document reference
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message, "error creating user");
    }
  }

  //   if does exist, return user
  return docRef;
};
