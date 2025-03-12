// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, OAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpPKxzFzuxPV2v5IpuCAIbsFGx-JeDv4o",
  authDomain: "collabnest-cassiopiea.firebaseapp.com",
  projectId: "collabnest-cassiopiea",
  storageBucket: "collabnest-cassiopiea.firebasestorage.app",
  messagingSenderId: "758505201770",
  appId: "1:758505201770:web:4fa36fb3be1b3e45d22a13",
  measurementId: "G-BB2JZPKGH2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);

// Initialize Provider & Export
export const microsoftProvider = new OAuthProvider('microsoft.com').setCustomParameters({
    login_hint: 'user_rollno@iitp.ac.in',
    tenant: 'a57f7d92-038e-4d4c-8265-7cd2beb33b34',  // Put Tenant Id from Azure registered app,
    prompt: 'consent' // Get Consent from user to access their basic info (optional - Reommended only during SignUp)
})

