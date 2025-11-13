// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDSsChB4e5ShbTO4c_uQeBW1a38CVSthI",
  authDomain: "medical-application-6bcb2.firebaseapp.com",
  projectId: "medical-application-6bcb2",
  storageBucket: "medical-application-6bcb2.firebasestorage.app",
  messagingSenderId: "958025231259",
  appId: "1:958025231259:web:d1675f0486d01cade24f3e",
  measurementId: "G-35SSLCBGFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { analytics };
export default app;
