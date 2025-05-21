import { getApp, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIRBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIRBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIRBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIRBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIRBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIRBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIRBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = !getApp.length ? initializeApp(firebaseConfig) : getApp();
export const analytics = isSupported().then((yes) =>
  yes ? getAnalytics(app) : null
);
export const db = getFirestore(app);
export const auth = getAuth(app);
