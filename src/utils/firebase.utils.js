import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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

// we can tell it how we want the google sign in to behave
googleProvider.setCustomParameters({
  // always force them to select an account on the google sign in pop up modal
  prompt: "select_account",
});

// auth token
export const auth = getAuth();

// signInWithGooglePopup variable holds the signInWithPopup function
// that accepts our auth data and googleProvider data
export const signInWithGooglePopup = async () =>
  signInWithPopup(auth, googleProvider);
